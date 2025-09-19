import React from 'react';
import { Metadata } from 'next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import PageTemplate from './PageTemplate';
import { JSX } from "react";
import { 
  Home, 
  Settings, 
  Users, 
  TrendingUp, 
  ArrowRight,
  BookOpen,
  Heart,
  CheckCircle
} from 'lucide-react';

// SEO Metadata
export const metadata: Metadata = {
  title: "Home Healthcare Topics & Guides | HomeHealHub Educational Resources",
  description: "Explore comprehensive home healthcare topics including in-home visits, equipment setup, family training, and progress monitoring. Expert guides for families navigating home care.",
  keywords: [
    "home healthcare topics",
    "home healthcare guides", 
    "in-home visits",
    "medical equipment setup",
    "family caregiver training",
    "progress monitoring",
    "home care education",
    "healthcare at home",
    "patient care guides",
    "home health services"
  ],
  openGraph: {
    title: "Home Healthcare Topics & Guides | HomeHealHub Educational Resources",
    description: "Comprehensive guides covering essential home healthcare topics: in-home visits, equipment setup, family training, and progress monitoring.",
    type: "website",
    url: "https://homehealhub.com/topics",
    siteName: "HomeHealHub"
  },
  alternates: {
    canonical: 'https://homehealhub.com/topics'
  },
  robots: {
    index: true,
    follow: true
  }
};

interface TopicCard {
  icon: React.ReactNode;
  title: string;
  description: string;
  keyFeatures: string[];
  href: string;
  blogCount: number;
}

interface RelatedArticle {
  title: string;
  category: string;
  href: string;
}

const topicCards: TopicCard[] = [
  {
    icon: <Home className="h-8 w-8 text-[#4ECDC4]" />,
    title: "In-Home Visits",
    description: "Comprehensive guide to professional healthcare services delivered in your home environment. Learn about different types of care, what to expect, and how to prepare.",
    keyFeatures: [
      "Types of home healthcare services",
      "Preparing your home for visits",
      "Working with healthcare professionals",
      "Benefits vs. facility care"
    ],
    href: "/topics/in-home-visits",
    blogCount: 8
  },
  {
    icon: <Settings className="h-8 w-8 text-[#4ECDC4]" />,
    title: "Equipment Setup",
    description: "Essential information about medical equipment installation, safety requirements, and maintenance for home healthcare environments.",
    keyFeatures: [
      "Equipment types and selection",
      "Installation and safety protocols",
      "Maintenance and troubleshooting",
      "Working with suppliers"
    ],
    href: "/topics/equipment-setup",
    blogCount: 12
  },
  {
    icon: <Users className="h-8 w-8 text-[#4ECDC4]" />,
    title: "Family Training",
    description: "Training programs and resources to help family members participate effectively in home healthcare and provide supportive care.",
    keyFeatures: [
      "Basic care techniques",
      "Communication strategies",
      "Documentation and record keeping",
      "Emotional support resources"
    ],
    href: "/topics/family-training",
    blogCount: 15
  },
  {
    icon: <TrendingUp className="h-8 w-8 text-[#4ECDC4]" />,
    title: "Progress Monitoring",
    description: "Tools and techniques for tracking patient progress, understanding care plan adjustments, and effective communication with providers.",
    keyFeatures: [
      "Monitoring methods and tools",
      "Progress documentation",
      "Care plan adjustments",
      "Technology solutions"
    ],
    href: "/topics/progress-monitoring",
    blogCount: 10
  }
];

const relatedArticles: RelatedArticle[] = [
  {
    title: "Getting Started with Home Healthcare: A Family's Guide",
    category: "General",
    href: "/blog"
  },
  {
    title: "Creating a Safe Home Environment for Medical Care",
    category: "Safety",
    href: "/blog"
  },
  {
    title: "Understanding Insurance Coverage for Home Healthcare",
    category: "Finance",
    href: "/blog"
  },
  {
    title: "Building Your Home Healthcare Support Network",
    category: "Support",
    href: "/blog"
  }
];

export default function TopicsLandingPage(): JSX.Element {
  // Structured Data for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Home Healthcare Topics & Guides",
    "description": "Comprehensive educational resources covering essential home healthcare topics including in-home visits, equipment setup, family training, and progress monitoring.",
    "url": "https://homehealhub.com/topics",
    "mainEntity": {
      "@type": "ItemList",
      "name": "Home Healthcare Topics",
      "description": "Core educational topics for home healthcare",
      "numberOfItems": topicCards.length,
      "itemListElement": topicCards.map((topic, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "Article",
          "name": topic.title,
          "description": topic.description,
          "url": `https://homehealhub.com${topic.href}`,
          "about": {
            "@type": "Thing",
            "name": topic.title,
            "description": topic.description
          }
        }
      }))
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://homehealhub.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Topics",
          "item": "https://homehealhub.com/topics"
        }
      ]
    },
    "about": [
      {
        "@type": "Thing",
        "name": "Home Healthcare",
        "description": "Medical care and services provided in the patient's home environment"
      },
      {
        "@type": "Thing",
        "name": "Patient Care",
        "description": "Comprehensive care services for patients in home settings"
      },
      {
        "@type": "Thing",
        "name": "Family Caregiving",
        "description": "Training and support for family members providing care"
      }
    ],
    "inLanguage": "en-US"
  };

  return (
    <PageTemplate currentPage="topics">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Breadcrumb Navigation */}
      <nav className="bg-[#F8F9FA] py-4 border-b border-[#E5E7EB]" aria-label="Breadcrumb">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/" className="text-[#6C757D] hover:text-[#4ECDC4]">
                  Home
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-[#4ECDC4] font-medium">
                  Topics
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="bg-gradient-to-br from-[#F8F9FA] to-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-[#343A40] mb-6 leading-tight">
              Home Healthcare Topics & Educational Guides
            </h1>
            <p className="text-xl text-[#6C757D] mb-8 leading-relaxed">
              Explore comprehensive guides covering the essential aspects of home healthcare. 
              Each topic provides practical information, expert insights, and actionable steps 
              to help you navigate your healthcare journey with confidence.
            </p>
            
            {/* Quick Stats */}
            <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-[#6C757D] mb-8">
              <div className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-[#4ECDC4]" aria-hidden="true" />
                <span>4 Core Topics</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="h-5 w-5 text-[#4ECDC4]" aria-hidden="true" />
                <span>45+ Articles</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-[#4ECDC4]" aria-hidden="true" />
                <span>Evidence-Based</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* Introduction Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-[#343A40] mb-6">
                  Understanding Home Healthcare
                </h2>
                <p className="text-lg text-[#6C757D] leading-relaxed">
                  Home healthcare brings medical and supportive services directly to patients in their homes. 
                  This approach offers numerous benefits including increased comfort, reduced infection risk, 
                  and the ability to maintain independence while receiving quality care.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#4ECDC4]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="h-8 w-8 text-[#4ECDC4]" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#343A40] mb-2">Personalized Care</h3>
                  <p className="text-[#6C757D]">
                    Receive individualized attention and care plans tailored to your specific needs and home environment.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#52B788]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Home className="h-8 w-8 text-[#52B788]" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#343A40] mb-2">Comfort of Home</h3>
                  <p className="text-[#6C757D]">
                    Maintain your daily routines and stay close to family while receiving professional healthcare services.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#4ECDC4]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-[#4ECDC4]" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#343A40] mb-2">Family Involvement</h3>
                  <p className="text-[#6C757D]">
                    Enable family members to participate actively in care while learning valuable skills and techniques.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Topics Grid */}
        <section className="py-20 bg-[#F8F9FA]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#343A40] mb-4">
                Explore Our Core Home Healthcare Topics
              </h2>
              <p className="text-lg text-[#6C757D] max-w-3xl mx-auto">
                Dive deep into each essential area of home healthcare with our comprehensive guides, 
                practical tips, and expert recommendations.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8" role="list" aria-label="Home healthcare topics">
              {topicCards.map((topic, index) => (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 bg-white border-[#E5E7EB] hover:border-[#4ECDC4] h-full" role="listitem">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between mb-4">
                      <div className="p-3 bg-[#F8F9FA] rounded-lg group-hover:bg-[#4ECDC4]/10 transition-colors">
                        {React.cloneElement(topic.icon as React.ReactElement)}
                      </div>
                      <Badge variant="secondary" className="bg-[#4ECDC4]/10 text-[#4ECDC4]">
                        {topic.blogCount} Articles
                      </Badge>
                    </div>
                    <CardTitle className="text-2xl font-bold text-[#343A40] mb-3">
                      {topic.title}
                    </CardTitle>
                    <CardDescription className="text-[#6C757D] text-base leading-relaxed">
                      {topic.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0 flex-1 flex flex-col">
                    <div className="mb-6 flex-1">
                      <h3 className="font-semibold text-[#343A40] mb-3">What Youll Learn:</h3>
                      <ul className="space-y-2" role="list">
                        {topic.keyFeatures.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start gap-2 text-[#6C757D]">
                            <CheckCircle className="h-4 w-4 text-[#28A745] mt-0.5 flex-shrink-0" aria-hidden="true" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Button 
                      className="w-full bg-[#4ECDC4] hover:bg-[#3DB5AC] text-white group-hover:shadow-lg transition-all"
                      asChild
                    >
                      <a 
                        href={topic.href} 
                        className="inline-flex items-center justify-center"
                        aria-label={`Learn more about ${topic.title}`}
                      >
                        Explore {topic.title}
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Related Articles Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-[#343A40] mb-4">
                Popular Articles Across All Topics
              </h2>
              <p className="text-lg text-[#6C757D] max-w-3xl mx-auto">
                Get started with these comprehensive guides that span multiple topics and provide 
                foundational knowledge for your home healthcare journey.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" role="list" aria-label="Related articles">
              {relatedArticles.map((article, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-[#E5E7EB] hover:border-[#4ECDC4]" role="listitem">
                  <CardContent className="p-6">
                    <Badge variant="outline" className="border-[#4ECDC4] text-[#4ECDC4] mb-3">
                      {article.category}
                    </Badge>
                    <h3 className="font-semibold text-[#343A40] mb-3 leading-tight group-hover:text-[#4ECDC4] transition-colors">
                      {article.title}
                    </h3>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="text-[#007BFF] hover:text-[#0056B3] p-0 h-auto font-medium"
                      asChild
                    >
                      <a 
                        href={article.href} 
                        className="inline-flex items-center"
                        aria-label={`Read article: ${article.title}`}
                      >
                        Read Article
                        <ArrowRight className="ml-1 h-3 w-3" aria-hidden="true" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button 
                variant="outline" 
                size="lg"
                className="border-[#4ECDC4] text-[#4ECDC4] hover:bg-[#4ECDC4] hover:text-white px-8"
                asChild
              >
                <a href="/blog">Browse All Articles</a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Call to Action Section */}
      <section className="py-16 bg-gradient-to-br from-[#4ECDC4]/5 to-[#52B788]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-[#343A40] mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-[#6C757D] mb-8">
              Begin with the topic most relevant to your current situation, or explore our resources 
              section for additional tools and partner organizations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-[#4ECDC4] hover:bg-[#3DB5AC] text-white px-8"
                asChild
              >
                <a href="/resources">Browse Resources</a>
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-[#4ECDC4] text-[#4ECDC4] hover:bg-[#4ECDC4] hover:text-white px-8"
                asChild
              >
                <a href="/about">Learn About Us</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </PageTemplate>
  );
}