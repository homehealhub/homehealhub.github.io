import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import PageTemplate from './PageTemplate';
import { 
  Home, 
  Stethoscope, 
  Settings, 
  Users, 
  TrendingUp, 
  Heart,
  Clock,
  Calendar,
  ExternalLink,
  CheckCircle,
  Shield
} from 'lucide-react';

interface TopicCard {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
}

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  href: string;
}

const topicCards: TopicCard[] = [
  {
    icon: <Home className="h-8 w-8 text-[#4ECDC4]" />,
    title: "In-Home Visits",
    description: "Learn about professional healthcare services delivered in the comfort of your home, from routine check-ups to specialized treatments.",
    href: "/topics/in-home-visits"
  },
  {
    icon: <Settings className="h-8 w-8 text-[#4ECDC4]" />,
    title: "Equipment Setup",
    description: "Understand medical equipment installation, safety requirements, and maintenance for home healthcare environments.",
    href: "/topics/equipment-setup"
  },
  {
    icon: <Users className="h-8 w-8 text-[#4ECDC4]" />,
    title: "Family Training",
    description: "Discover training programs and resources to help family members participate effectively in home healthcare.",
    href: "/topics/family-training"
  },
  {
    icon: <TrendingUp className="h-8 w-8 text-[#4ECDC4]" />,
    title: "Progress Monitoring",
    description: "Explore tools and techniques for tracking patient progress and communicating with healthcare providers.",
    href: "/topics/progress-monitoring"
  }
];

const featuredPosts: BlogPost[] = [
  {
    id: "1",
    title: "Preparing Your Home for Medical Equipment Installation",
    excerpt: "Essential steps to ensure your home is ready for medical equipment setup, including safety considerations and space planning.",
    category: "Equipment",
    readTime: "5 min read",
    date: "2024-12-15",
    href: "/blog"
  },
  {
    id: "2",
    title: "Communication Strategies with Home Healthcare Providers",
    excerpt: "Learn effective ways to communicate with your healthcare team to ensure the best possible care outcomes.",
    category: "Training",
    readTime: "7 min read",
    date: "2024-12-12",
    href: "/blog"
  },
  {
    id: "3",
    title: "Understanding Progress Tracking in Home Care",
    excerpt: "A comprehensive guide to monitoring and documenting patient progress for optimal healthcare management.",
    category: "Monitoring",
    readTime: "6 min read",
    date: "2024-12-10",
    href: "/blog"
  }
];

export default function HelloScreen(): JSX.Element {
  return (
    <PageTemplate currentPage="home">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#F8F9FA] to-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-[#343A40] mb-6 leading-tight">
              Empowering Families with Home Healthcare Knowledge
            </h1>
            <p className="text-xl text-[#6C757D] mb-8 leading-relaxed">
              HomeHealHub provides educational resources and information about in-home healthcare services, 
              helping families understand their options and connect with quality care providers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button 
                size="lg" 
                className="bg-[#4ECDC4] hover:bg-[#3DB5AC] text-white px-8 py-3 text-lg font-medium"
                asChild
              >
                <a href="/topics">Explore Topics</a>
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-[#4ECDC4] text-[#4ECDC4] hover:bg-[#4ECDC4] hover:text-white px-8 py-3 text-lg font-medium"
                asChild
              >
                <a href="/resources">Browse Resources</a>
              </Button>
            </div>
            
            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-[#6C757D]">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-[#28A745]" />
                <span>Evidence-Based Content</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-[#28A745]" />
                <span>Expert-Reviewed Resources</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="h-5 w-5 text-[#28A745]" />
                <span>Family-Focused Guidance</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Topics Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#343A40] mb-4">
              Essential Home Healthcare Topics
            </h2>
            <p className="text-lg text-[#6C757D] max-w-3xl mx-auto">
              Explore comprehensive guides covering the four key areas of home healthcare. 
              Each section provides practical information to help you navigate your healthcare journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {topicCards.map((topic, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-[#E5E7EB] hover:border-[#4ECDC4]">
                <CardHeader className="text-center pb-4">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-[#F8F9FA] rounded-lg group-hover:bg-[#4ECDC4]/10 transition-colors">
                      {topic.icon}
                    </div>
                  </div>
                  <CardTitle className="text-xl font-semibold text-[#343A40] mb-2">
                    {topic.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="text-[#6C757D] text-base leading-relaxed mb-6">
                    {topic.description}
                  </CardDescription>
                  <Button 
                    variant="outline" 
                    className="w-full border-[#4ECDC4] text-[#4ECDC4] hover:bg-[#4ECDC4] hover:text-white"
                    asChild
                  >
                    <a href={topic.href}>Learn More</a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Blog Posts */}
      <section className="py-20 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#343A40] mb-4">
              Recent Articles & Insights
            </h2>
            <p className="text-lg text-[#6C757D] max-w-3xl mx-auto">
              Stay informed with our latest articles covering practical tips, expert insights, 
              and comprehensive guides for home healthcare.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredPosts.map((post) => (
              <Card key={post.id} className="group hover:shadow-lg transition-all duration-300 bg-white border-[#E5E7EB]">
                <CardHeader>
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="secondary" className="bg-[#4ECDC4]/10 text-[#4ECDC4] hover:bg-[#4ECDC4]/20">
                      {post.category}
                    </Badge>
                    <div className="flex items-center text-sm text-[#6C757D]">
                      <Clock className="h-4 w-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  <CardTitle className="text-xl font-semibold text-[#343A40] group-hover:text-[#4ECDC4] transition-colors line-clamp-2">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-[#6C757D] text-base leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </CardDescription>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-[#6C757D]">
                      <Calendar className="h-4 w-4 mr-1" />
                      {new Date(post.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'short', 
                        day: 'numeric' 
                      })}
                    </div>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="text-[#007BFF] hover:text-[#0056B3] p-0 h-auto font-medium"
                      asChild
                    >
                      <a href={post.href}>Read More →</a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button 
              variant="outline" 
              size="lg"
              className="border-[#4ECDC4] text-[#4ECDC4] hover:bg-[#4ECDC4] hover:text-white px-8"
              asChild
            >
              <a href="/blog">View All Articles</a>
            </Button>
          </div>
        </div>
      </section>

      {/* External Resources Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#343A40] mb-4">
              Trusted Healthcare Partners
            </h2>
            <p className="text-lg text-[#6C757D] max-w-3xl mx-auto">
              Connect with quality healthcare providers and access additional resources 
              to support your home healthcare journey.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="border-[#4ECDC4] bg-gradient-to-r from-[#4ECDC4]/5 to-[#52B788]/5">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-[#4ECDC4] rounded-lg">
                    <Stethoscope className="h-8 w-8 text-white" />
                  </div>
                </div>
                <CardTitle className="text-2xl font-bold text-[#343A40] mb-2">
                  Luminous Rehab
                </CardTitle>
                <CardDescription className="text-lg text-[#6C757D]">
                  Featured Healthcare Provider
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-[#6C757D] text-base leading-relaxed mb-6 max-w-2xl mx-auto">
                  Luminous Rehab provides comprehensive rehabilitation services in home settings, 
                  specializing in personalized care plans that help patients achieve their health goals 
                  in the comfort of their own homes.
                </p>
                <Button 
                  className="bg-[#4ECDC4] hover:bg-[#3DB5AC] text-white px-8"
                  asChild
                >
                  <a 
                    href="https://www.luminousrehab.com/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center"
                  >
                    Learn More About Luminous Rehab
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </PageTemplate>
  );
}