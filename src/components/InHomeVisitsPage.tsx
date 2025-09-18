import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import PageTemplate from './PageTemplate';
import { 
  Home, 
  Stethoscope, 
  Users, 
  Clock,
  CheckCircle,
  Shield,
  Heart,
  MapPin,
  Calendar,
  ClipboardList,
  ExternalLink,
  ArrowRight,
  UserCheck,
  AlertTriangle,
  Phone
} from 'lucide-react';

interface ServiceType {
  icon: React.ReactNode;
  title: string;
  description: string;
  examples: string[];
}

interface Benefit {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface Preparation {
  icon: React.ReactNode;
  title: string;
  description: string;
  details: string[];
}

interface RelatedArticle {
  title: string;
  category: string;
  readTime: string;
  href: string;
}

const serviceTypes: ServiceType[] = [
  {
    icon: <Stethoscope className="h-6 w-6 text-[#4ECDC4]" />,
    title: "Primary Care Services",
    description: "Routine medical care and health monitoring in your home environment.",
    examples: ["Regular check-ups", "Vital sign monitoring", "Medication management", "Preventive care"]
  },
  {
    icon: <Heart className="h-6 w-6 text-[#4ECDC4]" />,
    title: "Specialized Medical Care",
    description: "Advanced medical treatments delivered by specialized healthcare professionals.",
    examples: ["Wound care", "IV therapy", "Chronic disease management", "Post-surgical care"]
  },
  {
    icon: <Users className="h-6 w-6 text-[#4ECDC4]" />,
    title: "Rehabilitation Services",
    description: "Physical, occupational, and speech therapy services in familiar surroundings.",
    examples: ["Physical therapy", "Occupational therapy", "Speech therapy", "Recovery exercises"]
  },
  {
    icon: <UserCheck className="h-6 w-6 text-[#4ECDC4]" />,
    title: "Personal Care Assistance",
    description: "Support with daily activities to maintain independence and quality of life.",
    examples: ["Personal hygiene", "Meal preparation", "Mobility assistance", "Companionship"]
  }
];

const benefits: Benefit[] = [
  {
    icon: <Home className="h-5 w-5 text-[#52B788]" />,
    title: "Comfort of Home",
    description: "Receive care in familiar, comfortable surroundings that promote healing and reduce stress."
  },
  {
    icon: <Shield className="h-5 w-5 text-[#52B788]" />,
    title: "Reduced Infection Risk",
    description: "Lower exposure to hospital-acquired infections and other health risks found in clinical settings."
  },
  {
    icon: <Users className="h-5 w-5 text-[#52B788]" />,
    title: "Family Involvement",
    description: "Enable family members to participate actively in care and learn important skills."
  },
  {
    icon: <Clock className="h-5 w-5 text-[#52B788]" />,
    title: "Personalized Scheduling",
    description: "Flexible scheduling that works around your routine and preferences."
  }
];

const preparationSteps: Preparation[] = [
  {
    icon: <ClipboardList className="h-5 w-5 text-[#007BFF]" />,
    title: "Medical Information",
    description: "Gather essential health records and documentation.",
    details: [
      "Current medication list with dosages",
      "Recent lab results and test reports",
      "Insurance information and authorization forms",
      "Emergency contact information"
    ]
  },
  {
    icon: <MapPin className="h-5 w-5 text-[#007BFF]" />,
    title: "Home Environment",
    description: "Prepare your living space for safe, effective care delivery.",
    details: [
      "Clear pathways for equipment and mobility",
      "Ensure adequate lighting in care areas",
      "Prepare a clean, quiet space for treatments",
      "Remove potential safety hazards"
    ]
  },
  {
    icon: <Users className="h-5 w-5 text-[#007BFF]" />,
    title: "Family Coordination",
    description: "Organize family members and establish communication protocols.",
    details: [
      "Designate primary family contact person",
      "Schedule family members for care sessions",
      "Prepare questions for healthcare providers",
      "Establish communication preferences"
    ]
  }
];

const relatedArticles: RelatedArticle[] = [
  {
    title: "Preparing Your Home for Medical Equipment Installation",
    category: "Equipment",
    readTime: "5 min read",
    href: "/blog"
  },
  {
    title: "Communication Strategies with Home Healthcare Providers",
    category: "Training",
    readTime: "7 min read",
    href: "/blog"
  },
  {
    title: "Insurance Coverage for Home Healthcare Services",
    category: "General",
    readTime: "6 min read",
    href: "/blog"
  }
];

export default function InHomeVisitsPage(): JSX.Element {
  return (
    <PageTemplate currentPage="topics">
      {/* Breadcrumb Navigation */}
      <section className="bg-[#F8F9FA] py-4">
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
                  In-Home Visits
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </section>

      {/* Page Header */}
      <section className="bg-gradient-to-br from-[#4ECDC4]/5 to-[#52B788]/5 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-[#4ECDC4] rounded-lg">
                <Home className="h-10 w-10 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#343A40] mb-6">
              In-Home Healthcare Visits
            </h1>
            <p className="text-xl text-[#6C757D] leading-relaxed max-w-3xl mx-auto">
              Professional healthcare services delivered in the comfort and familiarity of your own home. 
              Learn about the types of care available, benefits of home-based treatment, and how to prepare 
              for successful in-home healthcare visits.
            </p>
          </div>
        </div>
      </section>

      {/* What Are In-Home Visits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#343A40] mb-8 text-center">
              What Are In-Home Healthcare Visits?
            </h2>
            <div className="prose prose-lg max-w-none text-[#6C757D] leading-relaxed">
              <p className="text-lg mb-6">
                In-home healthcare visits bring professional medical services directly to your residence, 
                allowing patients to receive quality care without the stress and inconvenience of traveling 
                to medical facilities. This approach to healthcare delivery has become increasingly popular 
                as families seek more personalized, convenient, and comfortable care options.
              </p>
              <p className="text-lg mb-6">
                These services range from routine check-ups and medication management to specialized 
                treatments and rehabilitation therapies. Healthcare professionals who provide in-home 
                visits include doctors, nurses, physical therapists, occupational therapists, and 
                certified home health aides, all working together to deliver comprehensive care.
              </p>
              <p className="text-lg">
                In-home visits are particularly beneficial for patients with mobility limitations, 
                chronic conditions, post-surgical recovery needs, or those who simply prefer the 
                comfort and convenience of receiving care at home.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Care Services */}
      <section className="py-20 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#343A40] mb-4">
              Types of Care Provided at Home
            </h2>
            <p className="text-lg text-[#6C757D] max-w-3xl mx-auto">
              In-home healthcare encompasses a wide range of medical and support services 
              tailored to meet individual patient needs and preferences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {serviceTypes.map((service, index) => (
              <Card key={index} className="bg-white border-[#E5E7EB] hover:border-[#4ECDC4] transition-colors">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    {service.icon}
                    <CardTitle className="text-xl font-semibold text-[#343A40]">
                      {service.title}
                    </CardTitle>
                  </div>
                  <CardDescription className="text-base text-[#6C757D]">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {service.examples.map((example, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-[#28A745] flex-shrink-0" />
                        <span className="text-[#6C757D]">{example}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Healthcare Professionals */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#343A40] mb-8 text-center">
              Who Provides In-Home Care?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-[#E5E7EB]">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-[#343A40] flex items-center gap-2">
                    <Stethoscope className="h-5 w-5 text-[#4ECDC4]" />
                    Licensed Medical Professionals
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-[#28A745] mt-0.5 flex-shrink-0" />
                    <span className="text-[#6C757D]">Registered Nurses (RNs) and Licensed Practical Nurses (LPNs)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-[#28A745] mt-0.5 flex-shrink-0" />
                    <span className="text-[#6C757D]">Physicians and Nurse Practitioners</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-[#28A745] mt-0.5 flex-shrink-0" />
                    <span className="text-[#6C757D]">Physical, Occupational, and Speech Therapists</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-[#28A745] mt-0.5 flex-shrink-0" />
                    <span className="text-[#6C757D]">Medical Social Workers</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-[#E5E7EB]">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-[#343A40] flex items-center gap-2">
                    <Users className="h-5 w-5 text-[#4ECDC4]" />
                    Certified Care Assistants
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-[#28A745] mt-0.5 flex-shrink-0" />
                    <span className="text-[#6C757D]">Certified Home Health Aides (CHHAs)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-[#28A745] mt-0.5 flex-shrink-0" />
                    <span className="text-[#6C757D]">Personal Care Assistants (PCAs)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-[#28A745] mt-0.5 flex-shrink-0" />
                    <span className="text-[#6C757D]">Companion Care Providers</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-[#28A745] mt-0.5 flex-shrink-0" />
                    <span className="text-[#6C757D]">Specialized Care Technicians</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#343A40] mb-4">
              Benefits of Home-Based Care
            </h2>
            <p className="text-lg text-[#6C757D] max-w-3xl mx-auto">
              In-home healthcare offers numerous advantages over traditional facility-based care, 
              improving both medical outcomes and quality of life.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="bg-white border-[#E5E7EB] text-center">
                <CardHeader className="pb-4">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-[#52B788]/10 rounded-lg">
                      {benefit.icon}
                    </div>
                  </div>
                  <CardTitle className="text-lg font-semibold text-[#343A40]">
                    {benefit.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-[#6C757D]">
                    {benefit.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#343A40] mb-8 text-center">
              What to Expect During In-Home Visits
            </h2>
            <div className="space-y-8">
              <Card className="border-[#E5E7EB]">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-[#343A40] flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-[#4ECDC4]" />
                    Initial Assessment Visit
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose max-w-none text-[#6C757D]">
                  <p>
                    Your first visit will focus on comprehensive assessment and care planning. 
                    The healthcare provider will evaluate your medical condition, home environment, 
                    and care needs to develop a personalized treatment plan.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-[#E5E7EB]">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-[#343A40] flex items-center gap-2">
                    <ClipboardList className="h-5 w-5 text-[#4ECDC4]" />
                    Regular Care Visits
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose max-w-none text-[#6C757D]">
                  <p>
                    Ongoing visits will follow your established care plan, with frequency determined 
                    by your specific needs. Each visit includes progress monitoring, treatment delivery, 
                    medication management, and adjustment of care plans as needed.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-[#E5E7EB]">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-[#343A40] flex items-center gap-2">
                    <Phone className="h-5 w-5 text-[#4ECDC4]" />
                    Communication and Coordination
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose max-w-none text-[#6C757D]">
                  <p>
                    Your care team will maintain regular communication with your physician and other 
                    healthcare providers, ensuring coordinated care and prompt response to any changes 
                    in your condition or care needs.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Preparation Steps */}
      <section className="py-20 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#343A40] mb-4">
              How to Prepare for In-Home Care
            </h2>
            <p className="text-lg text-[#6C757D] max-w-3xl mx-auto">
              Proper preparation ensures successful in-home healthcare visits and optimal care outcomes. 
              Follow these essential steps to get ready.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {preparationSteps.map((step, index) => (
              <Card key={index} className="bg-white border-[#E5E7EB]">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    {step.icon}
                    <CardTitle className="text-xl font-semibold text-[#343A40]">
                      {step.title}
                    </CardTitle>
                  </div>
                  <CardDescription className="text-base text-[#6C757D]">
                    {step.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {step.details.map((detail, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <ArrowRight className="h-4 w-4 text-[#4ECDC4] mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-[#6C757D]">{detail}</span>
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
      <section className="py-16 bg-[#FFF3CD] border-l-4 border-[#FFC107]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-4">
            <AlertTriangle className="h-6 w-6 text-[#FFC107] mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-lg font-semibold text-[#343A40] mb-2">
                Important Medical Disclaimer
              </h3>
              <p className="text-[#6C757D] leading-relaxed">
                This information is for educational purposes only and does not constitute medical advice. 
                Always consult with qualified healthcare professionals for specific medical guidance and 
                treatment recommendations. In-home care services should be provided by licensed, certified 
                healthcare professionals.
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
              External Resources
            </h2>
            <p className="text-lg text-[#6C757D] max-w-3xl mx-auto">
              Connect with trusted organizations and resources for additional information 
              about in-home healthcare services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-[#4ECDC4] bg-gradient-to-r from-[#4ECDC4]/5 to-[#52B788]/5">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-[#343A40] flex items-center gap-2">
                  <ExternalLink className="h-5 w-5 text-[#4ECDC4]" />
                  National Association for Home Care & Hospice
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[#6C757D] mb-4">
                  Professional organization providing standards, advocacy, and resources for home care services.
                </p>
                <Button variant="outline" className="border-[#4ECDC4] text-[#4ECDC4] hover:bg-[#4ECDC4] hover:text-white">
                  <a href="https://www.nahc.org" target="_blank" rel="noopener noreferrer">
                    Visit Website
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-[#4ECDC4] bg-gradient-to-r from-[#4ECDC4]/5 to-[#52B788]/5">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-[#343A40] flex items-center gap-2">
                  <ExternalLink className="h-5 w-5 text-[#4ECDC4]" />
                  Medicare.gov Home Health Services
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[#6C757D] mb-4">
                  Official Medicare information about coverage and benefits for home health services.
                </p>
                <Button variant="outline" className="border-[#4ECDC4] text-[#4ECDC4] hover:bg-[#4ECDC4] hover:text-white">
                  <a href="https://www.medicare.gov/coverage/home-health-services" target="_blank" rel="noopener noreferrer">
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
              Explore these related topics to enhance your understanding of home healthcare services.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {relatedArticles.map((article, index) => (
              <Card key={index} className="bg-white border-[#E5E7EB] hover:border-[#4ECDC4] transition-colors group">
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
                    <a href={article.href}>Read Article →</a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              className="bg-[#4ECDC4] hover:bg-[#3DB5AC] text-white px-8"
              asChild
            >
              <a href="/topics">Explore All Topics</a>
            </Button>
          </div>
        </div>
      </section>
    </PageTemplate>
  );
}