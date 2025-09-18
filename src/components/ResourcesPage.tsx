"use client";

import React, { useState, useMemo } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import PageTemplate from './PageTemplate';
import { JSX } from "react";
import { 
  Search,
  Filter,
  ExternalLink,
  Stethoscope,
  Settings,
  Users,
  Building2,
  BookOpen,
  Phone,
  Globe,
  Heart,
  Award,
  Shield,
  Star,
  MapPin
} from 'lucide-react';

interface Resource {
  id: string;
  name: string;
  description: string;
  category: string;
  type: 'provider' | 'supplier' | 'educational' | 'government' | 'support';
  url: string;
  location?: string;
  phone?: string;
  featured?: boolean;
  rating?: number;
  tags: string[];
}

const resources: Resource[] = [
  // Featured Provider
  {
    id: "luminous-rehab",
    name: "Luminous Rehab",
    description: "Comprehensive rehabilitation services in home settings, specializing in personalized care plans that help patients achieve their health goals in the comfort of their own homes.",
    category: "Healthcare Providers",
    type: "provider",
    url: "https://luminousrehab.com",
    location: "Nationwide",
    phone: "(734) 201-4833",
    featured: true,
    rating: 4.9,
    tags: ["rehabilitation", "physical therapy", "occupational therapy", "home visits"]
  },
  
  // Healthcare Providers
  {
    id: "home-health-alliance",
    name: "Home Health Alliance",
    description: "Network of certified home health agencies providing skilled nursing, therapy services, and personal care assistance.",
    category: "Healthcare Providers",
    type: "provider",
    url: "https://homehealthalliance.org",
    location: "Multiple States",
    phone: "(555) 234-5678",
    rating: 4.7,
    tags: ["nursing", "skilled care", "personal care", "certified"]
  },
  {
    id: "visiting-nurses-service",
    name: "Visiting Nurses Service",
    description: "Professional nursing care and health services delivered in the comfort of your home by licensed healthcare professionals.",
    category: "Healthcare Providers",
    type: "provider",
    url: "https://visitingnurses.org",
    location: "Regional",
    phone: "(555) 345-6789",
    rating: 4.6,
    tags: ["nursing", "medical care", "licensed", "professional"]
  },

  // Equipment Suppliers
  {
    id: "medequip-solutions",
    name: "MedEquip Solutions",
    description: "Complete medical equipment rental and sales with installation, training, and 24/7 support services for home healthcare needs.",
    category: "Equipment Suppliers",
    type: "supplier",
    url: "https://medequipsolutions.com",
    location: "Nationwide",
    phone: "(555) 456-7890",
    rating: 4.8,
    tags: ["medical equipment", "rental", "installation", "support", "24/7"]
  },
  {
    id: "homecare-medical",
    name: "HomeCare Medical Supply",
    description: "Specialized in mobility aids, respiratory equipment, and monitoring devices with expert guidance and ongoing support.",
    category: "Equipment Suppliers",
    type: "supplier",
    url: "https://homecaremedical.com",
    location: "Regional",
    phone: "(555) 567-8901",
    rating: 4.5,
    tags: ["mobility aids", "respiratory", "monitoring", "expert guidance"]
  },

  // Educational Resources
  {
    id: "family-caregiver-alliance",
    name: "Family Caregiver Alliance",
    description: "National nonprofit providing education, support, and advocacy for family caregivers with comprehensive online resources.",
    category: "Educational Materials",
    type: "educational",
    url: "https://caregiver.org",
    tags: ["caregiver support", "education", "nonprofit", "advocacy", "online resources"]
  },
  {
    id: "aging-life-care",
    name: "Aging Life Care Association",
    description: "Professional organization offering certification programs and resources for aging life care managers and family caregivers.",
    category: "Educational Materials",
    type: "educational",
    url: "https://aginglifecare.org",
    tags: ["aging care", "certification", "professional development", "care management"]
  },
  {
    id: "home-healthcare-academy",
    name: "Home Healthcare Academy",
    description: "Online training platform offering courses in home health aide skills, family caregiver training, and healthcare safety.",
    category: "Educational Materials",
    type: "educational",
    url: "https://homehealthacademy.edu",
    tags: ["online training", "home health aide", "safety", "courses"]
  },

  // Government Resources
  {
    id: "medicare-gov",
    name: "Medicare.gov",
    description: "Official Medicare website providing information about home health coverage, provider searches, and benefit explanations.",
    category: "Government Resources",
    type: "government",
    url: "https://medicare.gov",
    tags: ["medicare", "coverage", "benefits", "official", "government"]
  },
  {
    id: "cdc-healthy-aging",
    name: "CDC Healthy Aging",
    description: "Centers for Disease Control resources on healthy aging, chronic disease management, and home safety for older adults.",
    category: "Government Resources",
    type: "government",
    url: "https://cdc.gov/aging",
    tags: ["CDC", "healthy aging", "chronic disease", "safety", "older adults"]
  },
  {
    id: "nih-senior-health",
    name: "NIH Senior Health",
    description: "National Institute on Aging resources providing evidence-based information on health topics important to older adults.",
    category: "Government Resources",
    type: "government",
    url: "https://nihseniorhealth.gov",
    tags: ["NIH", "senior health", "evidence-based", "older adults", "research"]
  },

  // Support Organizations
  {
    id: "area-agency-aging",
    name: "Area Agencies on Aging",
    description: "Local agencies providing services and support for older adults and their families, including home and community-based services.",
    category: "Support Organizations",
    type: "support",
    url: "https://eldercare.acl.gov",
    tags: ["local services", "older adults", "community services", "family support"]
  },
  {
    id: "alzheimers-association",
    name: "Alzheimer's Association",
    description: "Leading voluntary health organization in Alzheimer's care, support, and research with 24/7 helpline and local chapters.",
    category: "Support Organizations",
    type: "support",
    url: "https://alz.org",
    phone: "1-800-272-3900",
    tags: ["alzheimers", "dementia", "support", "24/7 helpline", "research"]
  }
];

const categories = [
  "All Categories",
  "Healthcare Providers", 
  "Equipment Suppliers", 
  "Educational Materials", 
  "Government Resources", 
  "Support Organizations"
];

const ResourcesPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');

  const filteredResources = useMemo(() => {
    return resources.filter(resource => {
      const matchesSearch = searchTerm === '' || 
        resource.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        resource.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesCategory = selectedCategory === 'All Categories' || 
        resource.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  const featuredResources = resources.filter(resource => resource.featured);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Healthcare Providers':
        return <Stethoscope className="h-5 w-5" />;
      case 'Equipment Suppliers':
        return <Settings className="h-5 w-5" />;
      case 'Educational Materials':
        return <BookOpen className="h-5 w-5" />;
      case 'Government Resources':
        return <Building2 className="h-5 w-5" />;
      case 'Support Organizations':
        return <Users className="h-5 w-5" />;
      default:
        return <Globe className="h-5 w-5" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'provider':
        return 'bg-[#4ECDC4]/10 text-[#4ECDC4]';
      case 'supplier':
        return 'bg-[#52B788]/10 text-[#52B788]';
      case 'educational':
        return 'bg-[#007BFF]/10 text-[#007BFF]';
      case 'government':
        return 'bg-[#6C757D]/10 text-[#6C757D]';
      case 'support':
        return 'bg-[#FFC107]/10 text-[#FFC107]';
      default:
        return 'bg-gray-100 text-gray-600';
    }
  };

  return (
    <PageTemplate currentPage="resources">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#F8F9FA] to-white py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-[#343A40] mb-6 leading-tight">
              Healthcare Resources & Partners
            </h1>
            <p className="text-xl text-[#6C757D] mb-8 leading-relaxed">
              Connect with trusted healthcare providers, equipment suppliers, and educational resources 
              to support your home healthcare journey
            </p>
            <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-[#6C757D]">
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-[#28A745]" />
                <span>Verified Providers</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5 text-[#28A745]" />
                <span>Quality Partners</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="h-5 w-5 text-[#28A745]" />
                <span>Trusted Resources</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Partner Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#343A40] mb-4">
              Featured Healthcare Partner
            </h2>
            <p className="text-lg text-[#6C757D] max-w-3xl mx-auto">
              Spotlight on our trusted partners who exemplify excellence in home healthcare services
            </p>
          </div>

          {featuredResources.map((resource) => (
            <div key={resource.id} className="max-w-4xl mx-auto">
              <Card className="border-[#4ECDC4] bg-gradient-to-r from-[#4ECDC4]/5 to-[#52B788]/5">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-[#4ECDC4] rounded-lg">
                        <Stethoscope className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl font-bold text-[#343A40] mb-2">
                          {resource.name}
                        </CardTitle>
                        <div className="flex items-center gap-4 text-sm text-[#6C757D]">
                          {resource.rating && (
                            <div className="flex items-center gap-1">
                              <Star className="h-4 w-4 fill-[#FFC107] text-[#FFC107]" />
                              <span className="font-medium">{resource.rating}</span>
                            </div>
                          )}
                          {resource.location && (
                            <div className="flex items-center gap-1">
                              <MapPin className="h-4 w-4" />
                              <span>{resource.location}</span>
                            </div>
                          )}
                          {resource.phone && (
                            <div className="flex items-center gap-1">
                              <Phone className="h-4 w-4" />
                              <span>{resource.phone}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                    <Badge className="bg-[#4ECDC4] text-white hover:bg-[#3DB5AC] self-start md:self-center">
                      Featured Partner
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-[#6C757D] text-base leading-relaxed mb-6">
                    {resource.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {resource.tags.map((tag, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button 
                    className="bg-[#4ECDC4] hover:bg-[#3DB5AC] text-white"
                    asChild
                  >
                    <a href={resource.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
                      Visit {resource.name}
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-20 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#343A40] mb-4">
              Browse All Resources
            </h2>
            <p className="text-lg text-[#6C757D] max-w-3xl mx-auto">
              Find the right resources for your specific needs using our search and category filters
            </p>
          </div>

          {/* Search and Filter Controls */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-[#6C757D]" />
                <Input
                  placeholder="Search resources, providers, or services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 border-[#E5E7EB] focus:border-[#4ECDC4]"
                />
              </div>
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-[#6C757D]" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-3 py-2 border border-[#E5E7EB] rounded-md focus:border-[#4ECDC4] focus:outline-none bg-white"
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Category Quick Filters */}
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.slice(1).map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category 
                    ? "bg-[#4ECDC4] hover:bg-[#3DB5AC] text-white" 
                    : "border-[#4ECDC4] text-[#4ECDC4] hover:bg-[#4ECDC4] hover:text-white"
                  }
                >
                  <span className="mr-2">{getCategoryIcon(category)}</span>
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Results Count */}
          <div className="max-w-4xl mx-auto mb-8">
            <p className="text-[#6C757D] text-center">
              Showing {filteredResources.length} resource{filteredResources.length !== 1 ? 's' : ''}
              {selectedCategory !== 'All Categories' && ` in ${selectedCategory}`}
              {searchTerm && ` matching "${searchTerm}"`}
            </p>
          </div>

          {/* Resources Grid */}
          <div className="max-w-6xl mx-auto">
            {filteredResources.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredResources.map((resource) => (
                  <Card key={resource.id} className="bg-white border-[#E5E7EB] hover:border-[#4ECDC4] hover:shadow-lg transition-all duration-300 group">
                    <CardHeader>
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <div className="p-2 bg-[#F8F9FA] rounded-lg group-hover:bg-[#4ECDC4]/10 transition-colors">
                            {getCategoryIcon(resource.category)}
                          </div>
                          <Badge variant="secondary" className={getTypeColor(resource.type)}>
                            {resource.type}
                          </Badge>
                        </div>
                        {resource.rating && (
                          <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 fill-[#FFC107] text-[#FFC107]" />
                            <span className="text-sm font-medium text-[#6C757D]">{resource.rating}</span>
                          </div>
                        )}
                      </div>
                      <CardTitle className="text-lg font-semibold text-[#343A40] group-hover:text-[#4ECDC4] transition-colors">
                        {resource.name}
                      </CardTitle>
                      <CardDescription className="text-sm text-[#6C757D]">
                        {resource.category}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-[#6C757D] text-sm leading-relaxed mb-4 line-clamp-3">
                        {resource.description}
                      </p>
                      
                      {(resource.location || resource.phone) && (
                        <div className="space-y-1 mb-4 text-xs text-[#6C757D]">
                          {resource.location && (
                            <div className="flex items-center gap-1">
                              <MapPin className="h-3 w-3" />
                              <span>{resource.location}</span>
                            </div>
                          )}
                          {resource.phone && (
                            <div className="flex items-center gap-1">
                              <Phone className="h-3 w-3" />
                              <span>{resource.phone}</span>
                            </div>
                          )}
                        </div>
                      )}

                      <div className="flex flex-wrap gap-1 mb-4">
                        {resource.tags.slice(0, 3).map((tag, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                        {resource.tags.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{resource.tags.length - 3} more
                          </Badge>
                        )}
                      </div>

                      <Button 
                        variant="outline" 
                        size="sm"
                        className="w-full border-[#4ECDC4] text-[#4ECDC4] hover:bg-[#4ECDC4] hover:text-white"
                        asChild
                      >
                        <a href={resource.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center">
                          Visit Resource
                          <ExternalLink className="ml-2 h-3 w-3" />
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="p-4 bg-[#F8F9FA] rounded-lg inline-block mb-4">
                  <Search className="h-8 w-8 text-[#6C757D]" />
                </div>
                <h3 className="text-lg font-semibold text-[#343A40] mb-2">No resources found</h3>
                <p className="text-[#6C757D] mb-4">
                  Try adjusting your search terms or category filters
                </p>
                <Button 
                  variant="outline"
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('All Categories');
                  }}
                  className="border-[#4ECDC4] text-[#4ECDC4] hover:bg-[#4ECDC4] hover:text-white"
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#343A40] mb-4">
              Cant Find What Youre Looking For?
            </h2>
            <p className="text-lg text-[#6C757D] mb-8 leading-relaxed">
              Were constantly updating our resource directory. If you know of a quality healthcare 
              resource that should be included, wed love to hear about it.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="bg-[#4ECDC4] hover:bg-[#3DB5AC] text-white px-8"
                asChild
              >
                <a href="mailto:homehealhub@gmail.com">Suggest a Resource</a>
              </Button>
              <Button 
                variant="outline"
                className="border-[#4ECDC4] text-[#4ECDC4] hover:bg-[#4ECDC4] hover:text-white px-8"
                asChild
              >
                <a href="/topics">Browse Topics</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </PageTemplate>
  );
};

export default ResourcesPage;