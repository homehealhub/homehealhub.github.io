import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import PageTemplate from './PageTemplate';
import { JSX } from "react";
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
import Head from 'next/head';
import Image from 'next/image';

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
  // Structured Data for Organization
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "HomeHealHub",
    "description": "Educational resources and information about in-home healthcare services, helping families understand their options and connect with quality care providers.",
    "url": "https://homehealhub.com",
    "logo": "https://homehealhub.com/images/logo.png",
    "sameAs": [
      "https://www.facebook.com/homehealhub",
      "https://www.twitter.com/homehealhub",
      "https://www.linkedin.com/company/homehealhub"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "email": "info@homehealhub.com",
      "availableLanguage": "English"
    },
    "areaServed": "United States",
    "serviceType": "Healthcare Education"
  };

  // Structured Data for Website
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "HomeHealHub",
    "url": "https://homehealhub.com",
    "description": "Educational resources for in-home healthcare services",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://homehealhub.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  // Breadcrumb Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://homehealhub.com"
      }
    ]
  };

  return (
    <>
      <Head>
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbSchema),
          }}
        />
        
        {/* Preload critical resources */}
        <link rel="preload" href="/fonts/inter.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/images/hero-background.webp" as="image" type="image/webp" />
        
        {/* Additional meta tags */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <link rel="canonical" href="https://homehealhub.com" />
        
        {/* Language and locale */}
        <meta httpEquiv="content-language" content="en-US" />
        <meta name="language" content="English" />
        
        {/* Additional Open Graph tags */}
        <meta property="og:site_name" content="HomeHealHub" />
        <meta property="og:locale" content="en_US" />
        <meta property="article:publisher" content="https://www.facebook.com/homehealhub" />
        
        {/* Twitter Card specific */}
        <meta name="twitter:site" content="@homehealhub" />
        <meta name="twitter:creator" content="@homehealhub" />
        
        {/* Additional SEO meta tags */}
        <meta name="author" content="HomeHealHub" />
        <meta name="publisher" content="HomeHealHub" />
        <meta name="copyright" content="© 2025 HomeHealHub. All rights reserved." />
        <meta name="revisit-after" content="7 days" />
        
        {/* Geo targeting */}
        <meta name="geo.region" content="US" />
        <meta name="geo.placename" content="United States" />
        
        {/* Theme color for mobile browsers */}
        <meta name="theme-color" content="#4ECDC4" />
        <meta name="msapplication-TileColor" content="#4ECDC4" />
      </Head>

      <PageTemplate currentPage="home">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#F8F9FA] to-white py-20 lg:py-32" role="banner">
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
                  <a 
                    href="/topics"
                    aria-label="Explore healthcare topics and educational resources"
                  >
                    Explore Topics
                  </a>
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-[#4ECDC4] text-[#4ECDC4] hover:bg-[#4ECDC4] hover:text-white px-8 py-3 text-lg font-medium"
                  asChild
                >
                  <a 
                    href="/resources"
                    aria-label="Browse external healthcare resources and provider information"
                  >
                    Browse Resources
                  </a>
                </Button>
              </div>
              
              {/* Trust Indicators */}
              <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-[#6C757D]" role="list">
                <div className="flex items-center gap-2" role="listitem">
                  <CheckCircle className="h-5 w-5 text-[#28A745]" aria-hidden="true" />
                  <span>Evidence-Based Content</span>
                </div>
                <div className="flex items-center gap-2" role="listitem">
                  <Shield className="h-5 w-5 text-[#28A745]" aria-hidden="true" />
                  <span>Expert-Reviewed Resources</span>
                </div>
                <div className="flex items-center gap-2" role="listitem">
                  <Heart className="h-5 w-5 text-[#28A745]" aria-hidden="true" />
                  <span>Family-Focused Guidance</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Topics Section */}
        <section className="py-20 bg-white" role="main" aria-labelledby="main-topics-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <header className="text-center mb-16">
              <h2 id="main-topics-heading" className="text-3xl md:text-4xl font-bold text-[#343A40] mb-4">
                Essential Home Healthcare Topics
              </h2>
              <p className="text-lg text-[#6C757D] max-w-3xl mx-auto">
                Explore comprehensive guides covering the four key areas of home healthcare. 
                Each section provides practical information to help you navigate your healthcare journey.
              </p>
            </header>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8" role="list">
              {topicCards.map((topic, index) => (
                <Card 
                  key={index} 
                  className="group hover:shadow-lg transition-all duration-300 border-[#E5E7EB] hover:border-[#4ECDC4]"
                  role="listitem"
                >
                  <CardHeader className="text-center pb-4">
                    <div className="flex justify-center mb-4">
                      <div className="p-3 bg-[#F8F9FA] rounded-lg group-hover:bg-[#4ECDC4]/10 transition-colors" aria-hidden="true">
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
                      <a 
                        href={topic.href}
                        aria-label={`Learn more about ${topic.title} in home healthcare`}
                      >
                        Learn More
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Blog Posts */}
        <section className="py-20 bg-[#F8F9FA]" role="complementary" aria-labelledby="blog-posts-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <header className="text-center mb-16">
              <h2 id="blog-posts-heading" className="text-3xl md:text-4xl font-bold text-[#343A40] mb-4">
                Recent Articles & Insights
              </h2>
              <p className="text-lg text-[#6C757D] max-w-3xl mx-auto">
                Stay informed with our latest articles covering practical tips, expert insights, 
                and comprehensive guides for home healthcare.
              </p>
            </header>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12" role="list">
              {featuredPosts.map((post) => (
                <article 
                  key={post.id} 
                  className="group hover:shadow-lg transition-all duration-300 bg-white border-[#E5E7EB]"
                  role="listitem"
                >
                  <Card className="h-full">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-3">
                        <Badge 
                          variant="secondary" 
                          className="bg-[#4ECDC4]/10 text-[#4ECDC4] hover:bg-[#4ECDC4]/20"
                        >
                          {post.category}
                        </Badge>
                        <div className="flex items-center text-sm text-[#6C757D]">
                          <Clock className="h-4 w-4 mr-1" aria-hidden="true" />
                          <span aria-label={`Reading time: ${post.readTime}`}>{post.readTime}</span>
                        </div>
                      </div>
                      <CardTitle className="text-xl font-semibold text-[#343A40] group-hover:text-[#4ECDC4] transition-colors line-clamp-2">
                        <a href={post.href} className="hover:underline">
                          {post.title}
                        </a>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-[#6C757D] text-base leading-relaxed mb-4 line-clamp-3">
                        {post.excerpt}
                      </CardDescription>
                      <div className="flex items-center justify-between">
                        <time 
                          className="flex items-center text-sm text-[#6C757D]"
                          dateTime={post.date}
                        >
                          <Calendar className="h-4 w-4 mr-1" aria-hidden="true" />
                          {new Date(post.date).toLocaleDateString('en-US', { 
                            year: 'numeric', 
                            month: 'short', 
                            day: 'numeric' 
                          })}
                        </time>
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="text-[#007BFF] hover:text-[#0056B3] p-0 h-auto font-medium"
                          asChild
                        >
                          <a 
                            href={post.href}
                            aria-label={`Read full article: ${post.title}`}
                          >
                            Read More →
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </article>
              ))}
            </div>

            <div className="text-center">
              <Button 
                variant="outline" 
                size="lg"
                className="border-[#4ECDC4] text-[#4ECDC4] hover:bg-[#4ECDC4] hover:text-white px-8"
                asChild
              >
                <a 
                  href="/blog"
                  aria-label="View all healthcare articles and blog posts"
                >
                  View All Articles
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* External Resources Section */}
        <section className="py-20 bg-white" role="complementary" aria-labelledby="partners-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <header className="text-center mb-16">
              <h2 id="partners-heading" className="text-3xl md:text-4xl font-bold text-[#343A40] mb-4">
                Trusted Healthcare Partners
              </h2>
              <p className="text-lg text-[#6C757D] max-w-3xl mx-auto">
                Connect with quality healthcare providers and access additional resources 
                to support your home healthcare journey.
              </p>
            </header>

            <div className="max-w-4xl mx-auto">
              <Card className="border-[#4ECDC4] bg-gradient-to-r from-[#4ECDC4]/5 to-[#52B788]/5">
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-4 bg-[#4ECDC4] rounded-lg" aria-hidden="true">
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
                      aria-label="Visit Luminous Rehab website (opens in new tab)"
                    >
                      Learn More About Luminous Rehab
                      <ExternalLink className="ml-2 h-4 w-4" aria-hidden="true" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </PageTemplate>
    </>
  );
}