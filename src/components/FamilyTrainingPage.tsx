import React from 'react';
import { Metadata } from 'next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import PageTemplate from './PageTemplate';
import { JSX } from "react";
import { 
  Users, 
  Heart,
  BookOpen,
  CheckCircle,
  AlertTriangle,
  Phone,
  Clock,
  ExternalLink,
  ArrowRight,
  Stethoscope,
  Shield,
  MessageCircle,
  FileText,
  HandHeart,
  Brain,
  Target,
  Lightbulb,
} from 'lucide-react';

// SEO Metadata
export const metadata: Metadata = {
  title: "Family Training Programs for Home Healthcare | HomeHealHub",
  description: "Learn essential home healthcare skills through comprehensive family training programs. Empower caregivers with medical care techniques, communication strategies, and emotional support skills.",
  keywords: [
    "family caregiver training",
    "home healthcare education",
    "medical care skills",
    "caregiver support",
    "family training programs",
    "home care techniques",
    "healthcare communication",
    "caregiver resources"
  ],
  openGraph: {
    title: "Family Training Programs for Home Healthcare",
    description: "Comprehensive training programs that empower family caregivers with essential skills for safe, effective home healthcare.",
    type: "website",
    url: "https://homehealhub.com/topics/family-training",
    images: [
      {
        url: "https://homehealhub.com/images/family-training-og.jpg",
        width: 1200,
        height: 630,
        alt: "Family members learning home healthcare techniques"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Family Training Programs for Home Healthcare",
    description: "Learn essential caregiving skills through professional family training programs designed for home healthcare success."
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: "https://homehealhub.com/topics/family-training"
  }
};

// Structured Data for SEO
const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Family Training Programs for Home Healthcare",
  "description": "Comprehensive family training programs that teach essential skills for effective home healthcare participation.",
  "url": "https://homehealhub.com/topics/family-training",
  "mainEntity": {
    "@type": "EducationalOrganization",
    "name": "HomeHealHub",
    "description": "Educational resources for home healthcare services",
    "url": "https://homehealhub.com"
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
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Family Training",
        "item": "https://homehealhub.com/topics/family-training"
      }
    ]
  },
  "about": [
    {
      "@type": "Thing",
      "name": "Family Caregiver Training"
    },
    {
      "@type": "Thing", 
      "name": "Home Healthcare Education"
    },
    {
      "@type": "Thing",
      "name": "Medical Care Skills"
    }
  ]
};

interface TrainingType {
  icon: React.ReactNode;
  title: string;
  description: string;
  topics: string[];
}

interface CareSkill {
  icon: React.ReactNode;
  title: string;
  description: string;
  techniques: string[];
}

interface CommunicationTip {
  scenario: string;
  approach: string;
  example: string;
}

interface SupportResource {
  icon: React.ReactNode;
  title: string;
  description: string;
  benefits: string[];
}

interface RelatedArticle {
  title: string;
  category: string;
  readTime: string;
  href: string;
}

const trainingTypes: TrainingType[] = [
  {
    icon: <Stethoscope className="h-6 w-6 text-[#4ECDC4]" />,
    title: "Basic Medical Care",
    description: "Essential medical skills for safe, effective home care assistance.",
    topics: ["Vital sign monitoring", "Medication management", "Wound care basics", "Infection prevention", "Emergency response"]
  },
  {
    icon: <HandHeart className="h-6 w-6 text-[#4ECDC4]" />,
    title: "Personal Care Assistance",
    description: "Skills for helping with daily activities while maintaining dignity and comfort.",
    topics: ["Mobility assistance", "Personal hygiene support", "Feeding assistance", "Positioning and transfers", "Comfort measures"]
  },
  {
    icon: <MessageCircle className="h-6 w-6 text-[#4ECDC4]" />,
    title: "Communication Skills",
    description: "Effective communication techniques for healthcare coordination and patient support.",
    topics: ["Patient advocacy", "Healthcare team communication", "Active listening", "Conflict resolution", "Cultural sensitivity"]
  },
  {
    icon: <Brain className="h-6 w-6 text-[#4ECDC4]" />,
    title: "Emotional Support",
    description: "Strategies for providing psychological and emotional care for patients and families.",
    topics: ["Stress management", "Coping strategies", "Grief support", "Mental health awareness", "Self-care for caregivers"]
  }
];

const careSkills: CareSkill[] = [
  {
    icon: <Target className="h-5 w-5 text-[#52B788]" />,
    title: "Safe Transfer Techniques",
    description: "Learn proper body mechanics for helping patients move safely.",
    techniques: [
      "Bed to wheelchair transfers",
      "Bathroom assistance techniques", 
      "Fall prevention strategies",
      "Using assistive devices properly"
    ]
  },
  {
    icon: <Shield className="h-5 w-5 text-[#52B788]" />,
    title: "Infection Control",
    description: "Understand hygiene practices to prevent infection spread.",
    techniques: [
      "Hand hygiene protocols",
      "Personal protective equipment use",
      "Environmental cleaning procedures",
      "Isolation precautions when needed"
    ]
  },
  {
    icon: <Heart className="h-5 w-5 text-[#52B788]" />,
    title: "Medication Support",
    description: "Assist with medication management safely and effectively.",
    techniques: [
      "Medication scheduling and reminders",
      "Proper storage and handling",
      "Recognizing side effects",
      "Documentation and tracking"
    ]
  },
  {
    icon: <Clock className="h-5 w-5 text-[#52B788]" />,
    title: "Emergency Preparedness",
    description: "Know how to respond to common medical emergencies.",
    techniques: [
      "Recognizing warning signs",
      "Basic first aid procedures",
      "When to call for help",
      "Emergency contact protocols"
    ]
  }
];

const communicationTips: CommunicationTip[] = [
  {
    scenario: "Discussing care concerns with healthcare providers",
    approach: "Come prepared with specific observations and questions",
    example: "Instead of 'They seem worse,' say 'I noticed increased difficulty breathing at night and reduced appetite for three days.'"
  },
  {
    scenario: "Coordinating between multiple providers",
    approach: "Maintain a central communication log and share updates",
    example: "Keep a shared notebook or digital record that all providers can access for care notes and updates."
  },
  {
    scenario: "Supporting patient autonomy",
    approach: "Involve patients in decisions while respecting their capabilities",
    example: "Ask 'Would you prefer to shower in the morning or evening?' rather than deciding for them."
  }
];

const supportResources: SupportResource[] = [
  {
    icon: <Users className="h-5 w-5 text-[#007BFF]" />,
    title: "Support Groups",
    description: "Connect with other family caregivers for shared experiences and advice.",
    benefits: [
      "Emotional support and understanding",
      "Practical tips from experienced caregivers",
      "Reduced feelings of isolation",
      "Local resource sharing"
    ]
  },
  {
    icon: <BookOpen className="h-5 w-5 text-[#007BFF]" />,
    title: "Educational Resources",
    description: "Access to ongoing learning materials and training opportunities.",
    benefits: [
      "Updated care techniques and information",
      "Certification programs available",
      "Online and in-person learning options",
      "Condition-specific training materials"
    ]
  },
  {
    icon: <Phone className="h-5 w-5 text-[#007BFF]" />,
    title: "Professional Support Services",
    description: "Access to counseling, respite care, and professional guidance.",
    benefits: [
      "Mental health counseling services",
      "Temporary respite care options",
      "Professional consultation available",
      "Crisis intervention support"
    ]
  }
];

const relatedArticles: RelatedArticle[] = [
  {
    title: "Communication Strategies with Home Healthcare Providers",
    category: "Training",
    readTime: "7 min read",
    href: "/blog"
  },
  {
    title: "Preventing Caregiver Burnout: Self-Care Strategies",
    category: "Training",
    readTime: "6 min read",
    href: "/blog"
  },
  {
    title: "Building a Support Network for Family Caregivers",
    category: "General",
    readTime: "5 min read",
    href: "/blog"
  }
];

export default function FamilyTrainingPage(): JSX.Element {
  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <PageTemplate currentPage="topics">
        {/* Breadcrumb Navigation */}
        <nav className="bg-[#F8F9FA] py-4" aria-label="Breadcrumb navigation">
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
                  <BreadcrumbLink href="/topics" className="text-[#6C757D] hover:text-[#4ECDC4]">
                    Topics
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage className="text-[#4ECDC4] font-medium">
                    Family Training
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </nav>

        {/* Page Header */}
        <header className="bg-gradient-to-br from-[#4ECDC4]/5 to-[#52B788]/5 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-[#4ECDC4] rounded-lg">
                  <Users className="h-10 w-10 text-white" aria-hidden="true" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-[#343A40] mb-6">
                Family Training Programs
              </h1>
              <p className="text-xl text-[#6C757D] leading-relaxed max-w-3xl mx-auto">
                Learn essential skills and knowledge to effectively participate in home healthcare. 
                Training programs empower family members with the confidence and competence needed 
                to provide safe, compassionate care.
              </p>
            </div>
          </div>
        </header>

        {/* Importance of Family Involvement */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-[#343A40] mb-8 text-center">
                The Importance of Family Involvement in Care
              </h2>
              <div className="prose prose-lg max-w-none text-[#6C757D] leading-relaxed">
                <p className="text-lg mb-6">
                  Family involvement in home healthcare significantly improves patient outcomes, 
                  quality of life, and care continuity. When family members are trained and 
                  confident in their caregiving abilities, patients experience better emotional 
                  support, more consistent care, and stronger advocacy for their needs.
                </p>
                <p className="text-lg mb-6">
                  Effective family training programs provide both practical skills and emotional 
                  support strategies. These programs recognize that family caregivers come from 
                  diverse backgrounds and may have varying levels of comfort with medical tasks, 
                  adapting instruction to meet individual learning needs and preferences.
                </p>
                <p className="text-lg">
                  Training also helps family members understand their role within the broader 
                  healthcare team, improving communication with professional providers and 
                  ensuring coordinated, comprehensive care for their loved ones.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Types of Training Available */}
        <section className="py-20 bg-[#F8F9FA]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#343A40] mb-4">
                Types of Training Available
              </h2>
              <p className="text-lg text-[#6C757D] max-w-3xl mx-auto">
                Family training programs cover a comprehensive range of skills and knowledge 
                areas to prepare caregivers for effective home healthcare participation.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {trainingTypes.map((training, index) => (
                <Card key={index} className="bg-white border-[#E5E7EB] hover:border-[#4ECDC4] transition-colors">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      {training.icon}
                      <CardTitle className="text-xl font-semibold text-[#343A40]">
                        {training.title}
                      </CardTitle>
                    </div>
                    <CardDescription className="text-base text-[#6C757D]">
                      {training.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {training.topics.map((topic, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-[#28A745] flex-shrink-0" aria-hidden="true" />
                          <span className="text-[#6C757D]">{topic}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Basic Care Techniques */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#343A40] mb-4">
                Basic Care Techniques Families Can Learn
              </h2>
              <p className="text-lg text-[#6C757D] max-w-3xl mx-auto">
                These fundamental skills form the foundation of safe, effective family 
                caregiving in home healthcare settings.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {careSkills.map((skill, index) => (
                <Card key={index} className="border-[#E5E7EB]">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex items-center justify-center w-8 h-8 bg-[#52B788]/10 rounded-lg">
                        {skill.icon}
                      </div>
                      <CardTitle className="text-lg font-semibold text-[#343A40]">
                        {skill.title}
                      </CardTitle>
                    </div>
                    <CardDescription className="text-sm text-[#6C757D]">
                      {skill.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {skill.techniques.map((technique, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <ArrowRight className="h-3 w-3 text-[#4ECDC4] mt-1 flex-shrink-0" aria-hidden="true" />
                          <span className="text-sm text-[#6C757D]">{technique}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Communication with Healthcare Providers */}
        <section className="py-20 bg-[#F8F9FA]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#343A40] mb-4">
                Communication with Healthcare Providers
              </h2>
              <p className="text-lg text-[#6C757D] max-w-3xl mx-auto">
                Effective communication ensures coordinated care and helps family members 
                advocate successfully for their loved ones needs.
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-8">
              {communicationTips.map((tip, index) => (
                <Card key={index} className="bg-white border-[#E5E7EB]">
                  <CardHeader>
                    <CardTitle className="text-lg font-semibold text-[#343A40] flex items-center gap-2">
                      <MessageCircle className="h-5 w-5 text-[#4ECDC4]" aria-hidden="true" />
                      {tip.scenario}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium text-[#343A40] mb-2">Effective Approach:</h4>
                        <p className="text-[#6C757D]">{tip.approach}</p>
                      </div>
                      <div className="bg-[#4ECDC4]/5 p-4 rounded-lg border-l-4 border-[#4ECDC4]">
                        <h4 className="font-medium text-[#343A40] mb-2">Example:</h4>
                        <p className="text-[#6C757D] italic">{tip.example}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Documentation and Record Keeping */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-[#343A40] mb-8 text-center">
                Documentation and Record Keeping
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="border-[#E5E7EB]">
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold text-[#343A40] flex items-center gap-2">
                      <FileText className="h-5 w-5 text-[#4ECDC4]" aria-hidden="true" />
                      What to Document
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-[#28A745] mt-0.5 flex-shrink-0" aria-hidden="true" />
                      <span className="text-[#6C757D]">Daily care activities and patient responses</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-[#28A745] mt-0.5 flex-shrink-0" aria-hidden="true" />
                      <span className="text-[#6C757D]">Medication administration and effects</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-[#28A745] mt-0.5 flex-shrink-0" aria-hidden="true" />
                      <span className="text-[#6C757D]">Changes in condition or behavior</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-[#28A745] mt-0.5 flex-shrink-0" aria-hidden="true" />
                      <span className="text-[#6C757D]">Provider visits and recommendations</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-[#28A745] mt-0.5 flex-shrink-0" aria-hidden="true" />
                      <span className="text-[#6C757D]">Questions or concerns for healthcare team</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-[#E5E7EB]">
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold text-[#343A40] flex items-center gap-2">
                      <Lightbulb className="h-5 w-5 text-[#4ECDC4]" aria-hidden="true" />
                      Documentation Best Practices
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-start gap-2">
                      <ArrowRight className="h-4 w-4 text-[#4ECDC4] mt-0.5 flex-shrink-0" aria-hidden="true" />
                      <span className="text-[#6C757D]">Use specific dates, times, and descriptions</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <ArrowRight className="h-4 w-4 text-[#4ECDC4] mt-0.5 flex-shrink-0" aria-hidden="true" />
                      <span className="text-[#6C757D]">Keep records organized and easily accessible</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <ArrowRight className="h-4 w-4 text-[#4ECDC4] mt-0.5 flex-shrink-0" aria-hidden="true" />
                      <span className="text-[#6C757D]">Share relevant information with healthcare team</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <ArrowRight className="h-4 w-4 text-[#4ECDC4] mt-0.5 flex-shrink-0" aria-hidden="true" />
                      <span className="text-[#6C757D]">Maintain confidentiality and privacy</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <ArrowRight className="h-4 w-4 text-[#4ECDC4] mt-0.5 flex-shrink-0" aria-hidden="true" />
                      <span className="text-[#6C757D]">Use digital tools when appropriate</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Emotional Support and Coping Strategies */}
        <section className="py-20 bg-[#F8F9FA]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-[#343A40] mb-8 text-center">
                Emotional Support and Coping Strategies
              </h2>
              <div className="space-y-8">
                <Card className="border-[#E5E7EB]">
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold text-[#343A40] flex items-center gap-2">
                      <Heart className="h-5 w-5 text-[#4ECDC4]" aria-hidden="true" />
                      Supporting Patient Emotional Wellbeing
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="prose max-w-none text-[#6C757D]">
                    <p>
                      Emotional support is as important as physical care. Family members can provide 
                      comfort through active listening, maintaining routines, encouraging independence 
                      when possible, and creating a positive, hopeful environment. Understanding that 
                      patients may experience frustration, fear, or sadness helps families respond 
                      with empathy and patience.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-[#E5E7EB]">
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold text-[#343A40] flex items-center gap-2">
                      <Shield className="h-5 w-5 text-[#4ECDC4]" aria-hidden="true" />
                      Caregiver Self-Care
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="prose max-w-none text-[#6C757D]">
                    <p>
                      Family caregivers must prioritize their own physical and emotional health to 
                      provide sustainable care. This includes taking regular breaks, maintaining 
                      social connections, seeking respite care when needed, and recognizing signs 
                      of caregiver burnout. Professional counseling and support groups can provide 
                      valuable emotional support and practical strategies.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-[#E5E7EB]">
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold text-[#343A40] flex items-center gap-2">
                      <Users className="h-5 w-5 text-[#4ECDC4]" aria-hidden="true" />
                      Family Dynamics and Communication
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="prose max-w-none text-[#6C757D]">
                    <p>
                      Home healthcare can affect entire family systems. Training helps families 
                      navigate changing roles, share caregiving responsibilities fairly, and 
                      communicate effectively about care decisions. Address conflicts constructively 
                      and maintain focus on the patients best interests while respecting each 
                      family members capabilities and limitations.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Educational Resources for Ongoing Learning */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#343A40] mb-4">
                Educational Resources for Ongoing Learning
              </h2>
              <p className="text-lg text-[#6C757D] max-w-3xl mx-auto">
                Continuous learning and support help family caregivers maintain confidence 
                and adapt to changing care needs over time.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {supportResources.map((resource, index) => (
                <Card key={index} className="border-[#E5E7EB]">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="flex items-center justify-center w-8 h-8 bg-[#007BFF]/10 rounded-lg">
                        {resource.icon}
                      </div>
                      <CardTitle className="text-lg font-semibold text-[#343A40]">
                        {resource.title}
                      </CardTitle>
                    </div>
                    <CardDescription className="text-base text-[#6C757D]">
                      {resource.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {resource.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-[#28A745] mt-0.5 flex-shrink-0" aria-hidden="true" />
                          <span className="text-sm text-[#6C757D]">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Important Notice */}
        <section className="py-16 bg-[#FFF3CD] border-l-4 border-[#FFC107]" role="alert">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-start gap-4">
              <AlertTriangle className="h-6 w-6 text-[#FFC107] mt-1 flex-shrink-0" aria-hidden="true" />
              <div>
                <h3 className="text-lg font-semibold text-[#343A40] mb-2">
                  Important Training Notice
                </h3>
                <p className="text-[#6C757D] leading-relaxed">
                  Family training should always be provided by qualified healthcare professionals 
                  and tailored to specific patient needs and family capabilities. This information 
                  is for educational purposes only. Formal training programs should include hands-on 
                  practice, competency verification, and ongoing support. Always consult with your 
                  healthcare team before providing medical care.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* External Resources */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#343A40] mb-4">
                Training Organizations & Resources
              </h2>
              <p className="text-lg text-[#6C757D] max-w-3xl mx-auto">
                Connect with trusted organizations that provide family caregiver training 
                and ongoing support resources.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="border-[#4ECDC4] bg-gradient-to-r from-[#4ECDC4]/5 to-[#52B788]/5">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-[#343A40] flex items-center gap-2">
                    <ExternalLink className="h-5 w-5 text-[#4ECDC4]" aria-hidden="true" />
                    Family Caregiver Alliance
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[#6C757D] mb-4">
                    National organization providing caregiver education, support, and advocacy resources.
                  </p>
                  <Button 
                    variant="outline" 
                    className="border-[#4ECDC4] text-[#4ECDC4] hover:bg-[#4ECDC4] hover:text-white"
                    asChild
                  >
                    <a 
                      href="https://www.caregiver.org" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label="Visit Family Caregiver Alliance website (opens in new tab)"
                    >
                      Visit Website
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-[#4ECDC4] bg-gradient-to-r from-[#4ECDC4]/5 to-[#52B788]/5">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-[#343A40] flex items-center gap-2">
                    <ExternalLink className="h-5 w-5 text-[#4ECDC4]" aria-hidden="true" />
                    National Institute on Aging
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[#6C757D] mb-4">
                    Government resource providing caregiver training materials and health information.
                  </p>
                  <Button 
                    variant="outline" 
                    className="border-[#4ECDC4] text-[#4ECDC4] hover:bg-[#4ECDC4] hover:text-white"
                    asChild
                  >
                    <a 
                      href="https://www.nia.nih.gov/health/caregiving" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label="Visit National Institute on Aging caregiving resources (opens in new tab)"
                    >
                      Visit Website
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Related Articles */}
        <section className="py-20 bg-[#F8F9FA]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#343A40] mb-4">
                Related Articles
              </h2>
              <p className="text-lg text-[#6C757D] max-w-3xl mx-auto">
                Explore these related topics to enhance your understanding of family 
                caregiving and home healthcare training.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {relatedArticles.map((article, index) => (
                <article key={index}>
                  <Card className="bg-white border-[#E5E7EB] hover:border-[#4ECDC4] transition-colors group h-full">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="secondary" className="bg-[#4ECDC4]/10 text-[#4ECDC4]">
                          {article.category}
                        </Badge>
                        <span className="text-sm text-[#6C757D]">{article.readTime}</span>
                      </div>
                      <CardTitle className="text-lg font-semibold text-[#343A40] group-hover:text-[#4ECDC4] transition-colors">
                        {article.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Button 
                        variant="ghost" 
                        className="text-[#007BFF] hover:text-[#0056B3] p-0 h-auto font-medium"
                        asChild
                      >
                        <a href={article.href} aria-label={`Read article: ${article.title}`}>
                          Read Article →
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                </article>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button 
                className="bg-[#4ECDC4] hover:bg-[#3DB5AC] text-white px-8"
                asChild
              >
                <a href="/topics" aria-label="Explore all home healthcare topics">
                  Explore All Topics
                </a>
              </Button>
            </div>
          </div>
        </section>
      </PageTemplate>
    </>
  );
}