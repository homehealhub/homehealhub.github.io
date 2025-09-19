import React from 'react';
import { Metadata } from 'next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import PageTemplate from './PageTemplate';
import { JSX } from "react";
import { 
  Settings, 
  Zap,
  Shield,
  Wrench,
  CheckCircle,
  AlertTriangle,
  Phone,
  Clock,
  MapPin,
  ClipboardList,
  ExternalLink,
  ArrowRight,
  Stethoscope,
  Bed,
  Car,
  Activity,
  Users,
  BookOpen,
  HelpCircle
} from 'lucide-react';

// SEO Metadata Configuration
export const metadata: Metadata = {
  title: "Medical Equipment Setup & Installation Guide | HomeHealHub",
  description: "Complete guide to medical equipment setup for home healthcare. Learn about installation, safety requirements, maintenance, and working with equipment providers for safe home care.",
  keywords: "medical equipment setup, home medical device installation, healthcare equipment safety, medical equipment maintenance, home care equipment",
  openGraph: {
    title: "Medical Equipment Setup & Installation Guide | HomeHealHub",
    description: "Professional guidance on medical equipment setup, installation, and maintenance for safe home healthcare environments.",
    type: "article",
    siteName: "HomeHealHub"
  },
  twitter: {
    card: "summary_large_image",
    title: "Medical Equipment Setup & Installation Guide | HomeHealHub",
    description: "Complete guide to medical equipment setup for home healthcare environments."
  },
  robots: {
    index: true,
    follow: true
  }
};

// JSON-LD Schema Markup
const equipmentSetupSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Medical Equipment Setup & Installation Guide",
  "description": "Comprehensive guide covering medical equipment installation, safety requirements, and maintenance for home healthcare environments.",
  "author": {
    "@type": "Organization",
    "name": "HomeHealHub"
  },
  "publisher": {
    "@type": "Organization",
    "name": "HomeHealHub",
    "logo": "https://homehealhub.com/logo.png"
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://homehealhub.com/topics/equipment-setup"
  },
  "about": [
    "Medical equipment installation",
    "Home healthcare safety",
    "Medical device maintenance",
    "Equipment setup procedures"
  ],
  "keywords": "medical equipment setup, home medical device installation, healthcare equipment safety"
};

interface EquipmentType {
  icon: React.ReactNode;
  title: string;
  description: string;
  examples: string[];
}

interface SetupStep {
  icon: React.ReactNode;
  title: string;
  description: string;
  details: string[];
}

interface SafetyConsideration {
  icon: React.ReactNode;
  title: string;
  description: string;
  requirements: string[];
}

interface MaintenanceTask {
  frequency: string;
  tasks: string[];
  badge: string;
  badgeColor: string;
}

interface RelatedArticle {
  title: string;
  category: string;
  readTime: string;
  href: string;
}

const equipmentTypes: EquipmentType[] = [
  {
    icon: <Activity className="h-6 w-6 text-[#4ECDC4]" />,
    title: "Monitoring Equipment",
    description: "Devices for tracking vital signs and health metrics in real-time.",
    examples: ["Blood pressure monitors", "Pulse oximeters", "Heart rate monitors", "Glucose meters", "Digital thermometers"]
  },
  {
    icon: <Bed className="h-6 w-6 text-[#4ECDC4]" />,
    title: "Mobility & Comfort",
    description: "Equipment to assist with movement and enhance comfort during recovery.",
    examples: ["Hospital beds", "Lift chairs", "Transfer boards", "Bed rails", "Pressure relief mattresses"]
  },
  {
    icon: <Stethoscope className="h-6 w-6 text-[#4ECDC4]" />,
    title: "Respiratory Support",
    description: "Devices to assist with breathing and respiratory therapy.",
    examples: ["Oxygen concentrators", "CPAP machines", "Nebulizers", "Ventilators", "Suction equipment"]
  },
  {
    icon: <Car className="h-6 w-6 text-[#4ECDC4]" />,
    title: "Rehabilitation Equipment",
    description: "Tools and devices to support physical therapy and recovery exercises.",
    examples: ["Exercise equipment", "Walkers", "Wheelchairs", "Physical therapy tools", "Balance training aids"]
  }
];

const setupSteps: SetupStep[] = [
  {
    icon: <ClipboardList className="h-5 w-5 text-[#007BFF]" />,
    title: "Pre-Installation Assessment",
    description: "Evaluate home environment and equipment requirements before delivery.",
    details: [
      "Measure available space and doorway clearances",
      "Assess electrical requirements and outlet locations",
      "Check flooring stability and weight capacity",
      "Identify potential safety hazards or obstacles",
      "Review equipment specifications and user manuals"
    ]
  },
  {
    icon: <Zap className="h-5 w-5 text-[#007BFF]" />,
    title: "Electrical & Safety Setup",
    description: "Ensure proper electrical connections and safety measures are in place.",
    details: [
      "Verify electrical capacity and grounding",
      "Install dedicated circuits if required",
      "Test all electrical connections and safety features",
      "Set up backup power sources when necessary",
      "Install proper surge protection"
    ]
  },
  {
    icon: <Wrench className="h-5 w-5 text-[#007BFF]" />,
    title: "Equipment Installation",
    description: "Professional installation and initial setup of medical equipment.",
    details: [
      "Position equipment according to manufacturer specifications",
      "Calibrate and test all functions",
      "Connect to monitoring systems if applicable",
      "Configure user settings and preferences",
      "Conduct initial safety checks"
    ]
  },
  {
    icon: <Users className="h-5 w-5 text-[#007BFF]" />,
    title: "Training & Documentation",
    description: "Provide comprehensive training and setup documentation.",
    details: [
      "Train patients and caregivers on proper use",
      "Demonstrate safety features and emergency procedures",
      "Provide operation manuals and quick reference guides",
      "Document installation and initial settings",
      "Schedule follow-up training sessions"
    ]
  }
];

const safetyConsiderations: SafetyConsideration[] = [
  {
    icon: <Zap className="h-5 w-5 text-[#FFC107]" />,
    title: "Electrical Safety",
    description: "Critical electrical requirements for safe equipment operation.",
    requirements: [
      "Proper grounding and electrical connections",
      "Adequate circuit capacity for equipment load",
      "GFCI protection in wet or damp areas",
      "Regular inspection of cords and plugs",
      "Backup power systems for critical equipment"
    ]
  },
  {
    icon: <MapPin className="h-5 w-5 text-[#FFC107]" />,
    title: "Placement & Space",
    description: "Proper positioning for safety and accessibility.",
    requirements: [
      "Clear pathways for emergency access",
      "Stable, level surfaces for equipment placement",
      "Adequate ventilation around equipment",
      "Safe distance from heat sources and moisture",
      "Easy access for maintenance and cleaning"
    ]
  },
  {
    icon: <Shield className="h-5 w-5 text-[#FFC107]" />,
    title: "Environmental Controls",
    description: "Maintaining proper environmental conditions for equipment.",
    requirements: [
      "Temperature and humidity control",
      "Protection from dust and contaminants",
      "Adequate lighting for safe operation",
      "Noise level considerations",
      "Protection from pets and children"
    ]
  }
];

const maintenanceTasks: MaintenanceTask[] = [
  {
    frequency: "Daily",
    tasks: [
      "Visual inspection for damage or wear",
      "Check all connections and settings",
      "Clean exterior surfaces",
      "Verify proper operation"
    ],
    badge: "Daily",
    badgeColor: "bg-[#28A745]/10 text-[#28A745]"
  },
  {
    frequency: "Weekly",
    tasks: [
      "Deep cleaning and disinfection",
      "Check and replace filters",
      "Test safety features and alarms",
      "Review usage logs and data"
    ],
    badge: "Weekly",
    badgeColor: "bg-[#007BFF]/10 text-[#007BFF]"
  },
  {
    frequency: "Monthly",
    tasks: [
      "Professional calibration check",
      "Replace consumable components",
      "Update software and settings",
      "Comprehensive safety inspection"
    ],
    badge: "Monthly",
    badgeColor: "bg-[#FFC107]/10 text-[#856404]"
  },
  {
    frequency: "As Needed",
    tasks: [
      "Professional repairs and service",
      "Equipment replacement or upgrades",
      "Emergency troubleshooting",
      "Warranty service and support"
    ],
    badge: "As Needed",
    badgeColor: "bg-[#6C757D]/10 text-[#6C757D]"
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
    title: "Understanding Insurance Coverage for Medical Equipment",
    category: "General",
    readTime: "8 min read",
    href: "/blog"
  },
  {
    title: "Emergency Procedures for Medical Equipment Failures",
    category: "Equipment",
    readTime: "6 min read",
    href: "/blog"
  }
];

export default function EquipmentSetupPage(): JSX.Element {
  return (
    <>
      {/* JSON-LD Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(equipmentSetupSchema)
        }}
      />
      
      <PageTemplate currentPage="topics">
        <main>
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="bg-[#F8F9FA] py-4">
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
                      Equipment Setup
                    </BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
          </nav>

          {/* Page Header */}
          <section className="bg-gradient-to-br from-[#4ECDC4]/5 to-[#52B788]/5 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto text-center">
                <header>
                  <div className="flex justify-center mb-6">
                    <div className="p-4 bg-[#4ECDC4] rounded-lg">
                      <Settings className="h-10 w-10 text-white" aria-hidden="true" />
                    </div>
                  </div>
                  <h1 className="text-4xl md:text-5xl font-bold text-[#343A40] mb-6">
                    Medical Equipment Setup
                  </h1>
                  <p className="text-xl text-[#6C757D] leading-relaxed max-w-3xl mx-auto">
                    Learn about medical equipment installation, safety requirements, and maintenance for 
                    home healthcare environments. Ensure proper setup and operation of essential medical 
                    devices in your home.
                  </p>
                </header>
              </div>
            </div>
          </section>

          {/* Overview Section */}
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-[#343A40] mb-8 text-center">
                  Medical Equipment in Home Settings
                </h2>
                <div className="prose prose-lg max-w-none text-[#6C757D] leading-relaxed">
                  <p className="text-lg mb-6">
                    Medical equipment setup in home environments requires careful planning, professional 
                    installation, and ongoing maintenance to ensure safe and effective operation. From basic 
                    monitoring devices to complex life-support systems, proper equipment setup is crucial 
                    for successful home healthcare outcomes.
                  </p>
                  <p className="text-lg mb-6">
                    Home medical equipment ranges from simple devices like blood pressure monitors to 
                    sophisticated systems including oxygen concentrators, hospital beds, and rehabilitation 
                    equipment. Each type of equipment has specific installation requirements, safety 
                    considerations, and maintenance protocols.
                  </p>
                  <p className="text-lg">
                    Professional installation and training ensure that equipment operates safely and 
                    effectively while providing patients and caregivers with the knowledge needed for 
                    proper daily operation and basic troubleshooting.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Types of Equipment */}
          <section className="py-20 bg-[#F8F9FA]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <header className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-[#343A40] mb-4">
                  Types of Medical Equipment
                </h2>
                <p className="text-lg text-[#6C757D] max-w-3xl mx-auto">
                  Home medical equipment encompasses a wide range of devices designed to support 
                  patient care, monitoring, and rehabilitation in residential settings.
                </p>
              </header>

              <div className="grid md:grid-cols-2 gap-8">
                {equipmentTypes.map((equipment, index) => (
                  <article key={index}>
                    <Card className="bg-white border-[#E5E7EB] hover:border-[#4ECDC4] transition-colors">
                      <CardHeader>
                        <div className="flex items-center gap-3 mb-2">
                          <div aria-hidden="true">{equipment.icon}</div>
                          <CardTitle className="text-xl font-semibold text-[#343A40]">
                            <h3>{equipment.title}</h3>
                          </CardTitle>
                        </div>
                        <CardDescription className="text-base text-[#6C757D]">
                          {equipment.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          {equipment.examples.map((example, idx) => (
                            <div key={idx} className="flex items-center gap-2">
                              <CheckCircle className="h-4 w-4 text-[#28A745] flex-shrink-0" aria-hidden="true" />
                              <span className="text-[#6C757D]">{example}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* Setup Process */}
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <header className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-[#343A40] mb-4">
                  Equipment Installation Process
                </h2>
                <p className="text-lg text-[#6C757D] max-w-3xl mx-auto">
                  Professional equipment installation follows a systematic process to ensure safety, 
                  functionality, and user readiness.
                </p>
              </header>

              <div className="grid lg:grid-cols-2 gap-8">
                {setupSteps.map((step, index) => (
                  <article key={index}>
                    <Card className="border-[#E5E7EB]">
                      <CardHeader>
                        <div className="flex items-center gap-3 mb-2">
                          <div className="flex items-center justify-center w-8 h-8 bg-[#007BFF]/10 rounded-lg">
                            <div aria-hidden="true">{step.icon}</div>
                          </div>
                          <CardTitle className="text-xl font-semibold text-[#343A40]">
                            <h3>{step.title}</h3>
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
                              <ArrowRight className="h-4 w-4 text-[#4ECDC4] mt-0.5 flex-shrink-0" aria-hidden="true" />
                              <span className="text-sm text-[#6C757D]">{detail}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* Safety Requirements */}
          <section className="py-20 bg-[#F8F9FA]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <header className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-[#343A40] mb-4">
                  Safety Considerations & Requirements
                </h2>
                <p className="text-lg text-[#6C757D] max-w-3xl mx-auto">
                  Medical equipment safety requires attention to electrical, environmental, and 
                  operational factors to prevent accidents and ensure reliable performance.
                </p>
              </header>

              <div className="grid lg:grid-cols-3 gap-8">
                {safetyConsiderations.map((safety, index) => (
                  <article key={index}>
                    <Card className="bg-white border-[#FFC107]/30">
                      <CardHeader>
                        <div className="flex items-center gap-3 mb-2">
                          <div className="flex items-center justify-center w-8 h-8 bg-[#FFC107]/10 rounded-lg">
                            <div aria-hidden="true">{safety.icon}</div>
                          </div>
                          <CardTitle className="text-lg font-semibold text-[#343A40]">
                            <h3>{safety.title}</h3>
                          </CardTitle>
                        </div>
                        <CardDescription className="text-base text-[#6C757D]">
                          {safety.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          {safety.requirements.map((req, idx) => (
                            <div key={idx} className="flex items-start gap-2">
                              <Shield className="h-4 w-4 text-[#FFC107] mt-0.5 flex-shrink-0" aria-hidden="true" />
                              <span className="text-sm text-[#6C757D]">{req}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* When Equipment is Needed */}
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-[#343A40] mb-8 text-center">
                  When Medical Equipment is Needed
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <Card className="border-[#E5E7EB]">
                    <CardHeader>
                      <CardTitle className="text-xl font-semibold text-[#343A40] flex items-center gap-2">
                        <Stethoscope className="h-5 w-5 text-[#4ECDC4]" aria-hidden="true" />
                        <h3>Medical Conditions</h3>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-[#28A745] mt-0.5 flex-shrink-0" aria-hidden="true" />
                        <span className="text-[#6C757D]">Chronic respiratory conditions requiring oxygen therapy</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-[#28A745] mt-0.5 flex-shrink-0" aria-hidden="true" />
                        <span className="text-[#6C757D]">Mobility limitations requiring assistive devices</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-[#28A745] mt-0.5 flex-shrink-0" aria-hidden="true" />
                        <span className="text-[#6C757D]">Post-surgical recovery and rehabilitation needs</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-[#28A745] mt-0.5 flex-shrink-0" aria-hidden="true" />
                        <span className="text-[#6C757D]">Chronic conditions requiring monitoring</span>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-[#E5E7EB]">
                    <CardHeader>
                      <CardTitle className="text-xl font-semibold text-[#343A40] flex items-center gap-2">
                        <Clock className="h-5 w-5 text-[#4ECDC4]" aria-hidden="true" />
                        <h3>Care Situations</h3>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-[#28A745] mt-0.5 flex-shrink-0" aria-hidden="true" />
                        <span className="text-[#6C757D]">Transitioning from hospital to home care</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-[#28A745] mt-0.5 flex-shrink-0" aria-hidden="true" />
                        <span className="text-[#6C757D]">Long-term care management at home</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-[#28A745] mt-0.5 flex-shrink-0" aria-hidden="true" />
                        <span className="text-[#6C757D]">Palliative and comfort care needs</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-[#28A745] mt-0.5 flex-shrink-0" aria-hidden="true" />
                        <span className="text-[#6C757D]">Aging in place with medical support</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* Maintenance & Troubleshooting */}
          <section className="py-20 bg-[#F8F9FA]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <header className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-[#343A40] mb-4">
                  Maintenance & Troubleshooting
                </h2>
                <p className="text-lg text-[#6C757D] max-w-3xl mx-auto">
                  Regular maintenance ensures equipment reliability and safety. Understanding basic 
                  troubleshooting helps address common issues quickly.
                </p>
              </header>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {maintenanceTasks.map((maintenance, index) => (
                  <article key={index}>
                    <Card className="bg-white border-[#E5E7EB]">
                      <CardHeader className="pb-4">
                        <div className="flex items-center justify-between mb-2">
                          <Badge className={maintenance.badgeColor}>
                            {maintenance.badge}
                          </Badge>
                          <Clock className="h-4 w-4 text-[#6C757D]" aria-hidden="true" />
                        </div>
                        <CardTitle className="text-lg font-semibold text-[#343A40]">
                          <h3>{maintenance.frequency} Tasks</h3>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          {maintenance.tasks.map((task, idx) => (
                            <div key={idx} className="flex items-start gap-2">
                              <Wrench className="h-3 w-3 text-[#4ECDC4] mt-1 flex-shrink-0" aria-hidden="true" />
                              <span className="text-sm text-[#6C757D]">{task}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </article>
                ))}
              </div>

              <div className="mt-12 max-w-4xl mx-auto">
                <Card className="border-[#007BFF]/30 bg-gradient-to-r from-[#007BFF]/5 to-[#4ECDC4]/5">
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold text-[#343A40] flex items-center gap-2">
                      <HelpCircle className="h-5 w-5 text-[#007BFF]" aria-hidden="true" />
                      <h3>Basic Troubleshooting Tips</h3>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <h4 className="font-medium text-[#343A40]">When to Call Immediately:</h4>
                        <div className="space-y-2">
                          <div className="flex items-start gap-2">
                            <AlertTriangle className="h-4 w-4 text-[#FFC107] mt-0.5 flex-shrink-0" aria-hidden="true" />
                            <span className="text-sm text-[#6C757D]">Safety alarms or unusual sounds</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <AlertTriangle className="h-4 w-4 text-[#FFC107] mt-0.5 flex-shrink-0" aria-hidden="true" />
                            <span className="text-sm text-[#6C757D]">Complete equipment failure</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <AlertTriangle className="h-4 w-4 text-[#FFC107] mt-0.5 flex-shrink-0" aria-hidden="true" />
                            <span className="text-sm text-[#6C757D]">Suspected electrical or safety issues</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Working with Equipment Providers */}
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-[#343A40] mb-8 text-center">
                  Working with Equipment Providers
                </h2>
                <div className="space-y-8">
                  <Card className="border-[#E5E7EB]">
                    <CardHeader>
                      <CardTitle className="text-xl font-semibold text-[#343A40] flex items-center gap-2">
                        <Users className="h-5 w-5 text-[#4ECDC4]" aria-hidden="true" />
                        <h3>Choosing Equipment Suppliers</h3>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="prose max-w-none text-[#6C757D]">
                      <p>
                        Select equipment providers with proper licensing, insurance, and experience in home 
                        medical equipment. Verify their accreditation with organizations like the Accreditation 
                        Commission for Health Care (ACHC) and ensure they provide 24/7 technical support.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-[#E5E7EB]">
                    <CardHeader>
                      <CardTitle className="text-xl font-semibold text-[#343A40] flex items-center gap-2">
                        <Phone className="h-5 w-5 text-[#4ECDC4]" aria-hidden="true" />
                        <h3>Service and Support Expectations</h3>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="prose max-w-none text-[#6C757D]">
                      <p>
                        Quality equipment providers offer comprehensive services including delivery, 
                        installation, training, maintenance, and emergency support. Establish clear 
                        communication channels and response time expectations for service calls.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-[#E5E7EB]">
                    <CardHeader>
                      <CardTitle className="text-xl font-semibold text-[#343A40] flex items-center gap-2">
                        <BookOpen className="h-5 w-5 text-[#4ECDC4]" aria-hidden="true" />
                        <h3>Insurance and Documentation</h3>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="prose max-w-none text-[#6C757D]">
                      <p>
                        Understand insurance coverage requirements and maintain proper documentation 
                        for equipment rentals or purchases. Keep records of prescriptions, delivery 
                        receipts, and maintenance logs for insurance and warranty purposes.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* Important Notice */}
          <section className="py-16 bg-[#FFF3CD] border-l-4 border-[#FFC107]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-start gap-4">
                <AlertTriangle className="h-6 w-6 text-[#FFC107] mt-1 flex-shrink-0" aria-hidden="true" />
                <div>
                  <h3 className="text-lg font-semibold text-[#343A40] mb-2">
                    Important Safety Notice
                  </h3>
                  <p className="text-[#6C757D] leading-relaxed">
                    Medical equipment installation should only be performed by qualified, licensed 
                    professionals. Never attempt to install, modify, or repair medical equipment yourself. 
                    Always follow manufacturer guidelines and consult with healthcare providers for 
                    equipment-related decisions. This information is for educational purposes only.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* External Resources */}
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <header className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-[#343A40] mb-4">
                  Equipment Suppliers & Resources
                </h2>
                <p className="text-lg text-[#6C757D] max-w-3xl mx-auto">
                  Connect with trusted equipment suppliers and access additional resources 
                  for medical equipment information and support.
                </p>
              </header>

              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <Card className="border-[#4ECDC4] bg-gradient-to-r from-[#4ECDC4]/5 to-[#52B788]/5">
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold text-[#343A40] flex items-center gap-2">
                      <ExternalLink className="h-5 w-5 text-[#4ECDC4]" aria-hidden="true" />
                      <h3>National Association for Medical Equipment Services</h3>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-[#6C757D] mb-4">
                      Professional organization providing standards and resources for medical equipment providers.
                    </p>
                    <Button variant="outline" className="border-[#4ECDC4] text-[#4ECDC4] hover:bg-[#4ECDC4] hover:text-white">
                      <a href="https://www.names.org" target="_blank" rel="noopener noreferrer">
                        Visit Website
                      </a>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="border-[#4ECDC4] bg-gradient-to-r from-[#4ECDC4]/5 to-[#52B788]/5">
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold text-[#343A40] flex items-center gap-2">
                      <ExternalLink className="h-5 w-5 text-[#4ECDC4]" aria-hidden="true" />
                      <h3>Medicare Equipment Coverage</h3>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-[#6C757D] mb-4">
                      Official Medicare information about coverage for durable medical equipment.
                    </p>
                    <Button variant="outline" className="border-[#4ECDC4] text-[#4ECDC4] hover:bg-[#4ECDC4] hover:text-white">
                      <a href="https://www.medicare.gov/coverage/durable-medical-equipment-coverage" target="_blank" rel="noopener noreferrer">
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
              <header className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-[#343A40] mb-4">
                  Related Articles
                </h2>
                <p className="text-lg text-[#6C757D] max-w-3xl mx-auto">
                  Explore these related topics to enhance your understanding of medical equipment 
                  and home healthcare setup.
                </p>
              </header>

              <div className="grid md:grid-cols-3 gap-8">
                {relatedArticles.map((article, index) => (
                  <article key={index}>
                    <Card className="bg-white border-[#E5E7EB] hover:border-[#4ECDC4] transition-colors group">
                      <CardHeader>
                        <div className="flex items-center justify-between mb-2">
                          <Badge variant="secondary" className="bg-[#4ECDC4]/10 text-[#4ECDC4]">
                            {article.category}
                          </Badge>
                          <span className="text-sm text-[#6C757D]">{article.readTime}</span>
                        </div>
                        <CardTitle className="text-lg font-semibold text-[#343A40] group-hover:text-[#4ECDC4] transition-colors">
                          <h3>{article.title}</h3>
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
                  </article>
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
        </main>
      </PageTemplate>
    </>
  );
}