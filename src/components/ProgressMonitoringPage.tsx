import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import PageTemplate from './PageTemplate';
import { 
  TrendingUp, 
  Activity,
  ClipboardList,
  CheckCircle,
  AlertTriangle,
  Clock,
  ExternalLink,
  ArrowRight,
  MessageCircle,
  FileText,
  BarChart3,
  Target,
  Eye,
  Brain,
  Settings,
  Users,
  Monitor,
  Bell,
  Smartphone,
  HelpCircle,
  LineChart
} from 'lucide-react';

interface MonitoringMethod {
  icon: React.ReactNode;
  title: string;
  description: string;
  examples: string[];
}

interface MonitoringTool {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
}

interface ObservationArea {
  category: string;
  indicators: string[];
  frequency: string;
  badge: string;
  badgeColor: string;
}

interface TechnologySolution {
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

const monitoringMethods: MonitoringMethod[] = [
  {
    icon: <Eye className="h-6 w-6 text-[#4ECDC4]" />,
    title: "Visual Observation",
    description: "Regular assessment of patient appearance, behavior, and physical condition.",
    examples: ["Skin color and condition", "Mobility and gait changes", "Facial expressions and alertness", "Posture and positioning", "Sleep patterns"]
  },
  {
    icon: <Activity className="h-6 w-6 text-[#4ECDC4]" />,
    title: "Vital Signs Monitoring",
    description: "Systematic tracking of essential physiological measurements.",
    examples: ["Blood pressure readings", "Heart rate and rhythm", "Temperature monitoring", "Respiratory rate", "Oxygen saturation levels"]
  },
  {
    icon: <Brain className="h-6 w-6 text-[#4ECDC4]" />,
    title: "Functional Assessment",
    description: "Evaluation of daily living activities and cognitive function.",
    examples: ["Activities of daily living", "Cognitive function tests", "Pain assessment scales", "Mobility and balance", "Communication abilities"]
  },
  {
    icon: <FileText className="h-6 w-6 text-[#4ECDC4]" />,
    title: "Symptom Tracking",
    description: "Systematic documentation of symptoms and their patterns.",
    examples: ["Pain levels and location", "Medication side effects", "Appetite and nutrition", "Mood and behavior changes", "Energy levels"]
  }
];

const monitoringTools: MonitoringTool[] = [
  {
    icon: <ClipboardList className="h-5 w-5 text-[#52B788]" />,
    title: "Paper-Based Logs",
    description: "Traditional documentation methods for comprehensive record keeping.",
    features: [
      "Medication administration records",
      "Daily care activity logs", 
      "Symptom tracking charts",
      "Provider visit summaries"
    ]
  },
  {
    icon: <Smartphone className="h-5 w-5 text-[#52B788]" />,
    title: "Digital Health Apps",
    description: "Mobile applications designed for health tracking and monitoring.",
    features: [
      "Medication reminders and tracking",
      "Symptom logging with trends",
      "Appointment scheduling",
      "Data sharing with providers"
    ]
  },
  {
    icon: <Monitor className="h-5 w-5 text-[#52B788]" />,
    title: "Remote Monitoring Devices",
    description: "Technology that automatically tracks and transmits health data.",
    features: [
      "Continuous vital sign monitoring",
      "Fall detection systems",
      "Medication compliance tracking",
      "Emergency alert capabilities"
    ]
  },
  {
    icon: <BarChart3 className="h-5 w-5 text-[#52B788]" />,
    title: "Clinical Assessment Tools",
    description: "Standardized instruments for measuring specific health outcomes.",
    features: [
      "Pain assessment scales",
      "Depression screening tools",
      "Functional status measures",
      "Quality of life questionnaires"
    ]
  }
];

const observationAreas: ObservationArea[] = [
  {
    category: "Physical Health",
    indicators: [
      "Changes in appetite or weight",
      "New or worsening pain symptoms",
      "Breathing difficulties or changes",
      "Skin condition and wound healing",
      "Mobility and balance issues"
    ],
    frequency: "Daily",
    badge: "Daily",
    badgeColor: "bg-[#28A745]/10 text-[#28A745]"
  },
  {
    category: "Mental/Emotional",
    indicators: [
      "Mood changes or depression signs",
      "Confusion or memory problems",
      "Anxiety or agitation levels",
      "Social withdrawal patterns",
      "Sleep disturbances"
    ],
    frequency: "Daily",
    badge: "Daily",
    badgeColor: "bg-[#28A745]/10 text-[#28A745]"
  },
  {
    category: "Functional Status",
    indicators: [
      "Ability to perform self-care tasks",
      "Changes in communication abilities",
      "Medication management capacity",
      "Safety awareness and judgment",
      "Independence in daily activities"
    ],
    frequency: "Weekly",
    badge: "Weekly",
    badgeColor: "bg-[#007BFF]/10 text-[#007BFF]"
  },
  {
    category: "Treatment Response",
    indicators: [
      "Medication effectiveness",
      "Therapy progress and outcomes",
      "Compliance with treatment plans",
      "Side effects or adverse reactions",
      "Achievement of care goals"
    ],
    frequency: "Ongoing",
    badge: "Ongoing",
    badgeColor: "bg-[#6C757D]/10 text-[#6C757D]"
  }
];

const technologySolutions: TechnologySolution[] = [
  {
    icon: <Bell className="h-5 w-5 text-[#007BFF]" />,
    title: "Alert Systems",
    description: "Automated notifications for important health events and changes.",
    benefits: [
      "Immediate alerts for emergencies",
      "Medication reminder notifications",
      "Appointment and care reminders",
      "Threshold-based health alerts"
    ]
  },
  {
    icon: <LineChart className="h-5 w-5 text-[#007BFF]" />,
    title: "Trend Analysis",
    description: "Data visualization and pattern recognition for health trends.",
    benefits: [
      "Visual charts of health metrics",
      "Pattern identification over time",
      "Comparison with baseline values",
      "Predictive health insights"
    ]
  },
  {
    icon: <Users className="h-5 w-5 text-[#007BFF]" />,
    title: "Care Coordination",
    description: "Platforms that connect all members of the healthcare team.",
    benefits: [
      "Shared access to patient data",
      "Real-time communication tools",
      "Coordinated care planning",
      "Provider collaboration features"
    ]
  }
];

const relatedArticles: RelatedArticle[] = [
  {
    title: "Understanding Progress Tracking in Home Care",
    category: "Monitoring",
    readTime: "6 min read",
    href: "/blog"
  },
  {
    title: "Digital Health Tools for Family Caregivers",
    category: "Monitoring",
    readTime: "7 min read",
    href: "/blog"
  },
  {
    title: "When to Communicate Changes to Healthcare Providers",
    category: "Monitoring",
    readTime: "5 min read",
    href: "/blog"
  }
];

export default function ProgressMonitoringPage(): JSX.Element {
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
                  Progress Monitoring
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
                <TrendingUp className="h-10 w-10 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#343A40] mb-6">
              Progress Monitoring
            </h1>
            <p className="text-xl text-[#6C757D] leading-relaxed max-w-3xl mx-auto">
              Learn effective methods for tracking patient progress, utilizing monitoring tools 
              and technologies, and communicating important changes to healthcare providers. 
              Systematic monitoring helps ensure optimal care outcomes and timely interventions.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#343A40] mb-8 text-center">
              The Importance of Progress Monitoring
            </h2>
            <div className="prose prose-lg max-w-none text-[#6C757D] leading-relaxed">
              <p className="text-lg mb-6">
                Progress monitoring in home healthcare involves the systematic observation, 
                measurement, and documentation of patient health status, treatment responses, 
                and functional abilities over time. This ongoing assessment helps healthcare 
                teams make informed decisions about care plans and interventions.
              </p>
              <p className="text-lg mb-6">
                Effective monitoring combines objective measurements with subjective observations, 
                creating a comprehensive picture of patient progress. Family members and caregivers 
                play a crucial role in this process, as they observe patients daily and can identify 
                subtle changes that might be missed during periodic provider visits.
              </p>
              <p className="text-lg">
                Modern monitoring approaches integrate traditional observation methods with 
                digital tools and remote monitoring technologies, enabling more precise tracking 
                and faster response to changes in patient condition.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Methods of Tracking Patient Progress */}
      <section className="py-20 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#343A40] mb-4">
              Methods of Tracking Patient Progress
            </h2>
            <p className="text-lg text-[#6C757D] max-w-3xl mx-auto">
              Comprehensive progress monitoring combines multiple assessment methods to 
              provide a complete picture of patient health and recovery.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {monitoringMethods.map((method, index) => (
              <Card key={index} className="bg-white border-[#E5E7EB] hover:border-[#4ECDC4] transition-colors">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    {method.icon}
                    <CardTitle className="text-xl font-semibold text-[#343A40]">
                      {method.title}
                    </CardTitle>
                  </div>
                  <CardDescription className="text-base text-[#6C757D]">
                    {method.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {method.examples.map((example, idx) => (
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

      {/* Tools and Technologies for Monitoring */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#343A40] mb-4">
              Tools and Technologies for Monitoring
            </h2>
            <p className="text-lg text-[#6C757D] max-w-3xl mx-auto">
              Modern monitoring tools range from simple paper logs to sophisticated 
              digital platforms that automate data collection and analysis.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {monitoringTools.map((tool, index) => (
              <Card key={index} className="border-[#E5E7EB]">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex items-center justify-center w-8 h-8 bg-[#52B788]/10 rounded-lg">
                      {tool.icon}
                    </div>
                    <CardTitle className="text-lg font-semibold text-[#343A40]">
                      {tool.title}
                    </CardTitle>
                  </div>
                  <CardDescription className="text-sm text-[#6C757D]">
                    {tool.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {tool.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <ArrowRight className="h-3 w-3 text-[#4ECDC4] mt-1 flex-shrink-0" />
                        <span className="text-sm text-[#6C757D]">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Family's Role in Progress Observation */}
      <section className="py-20 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#343A40] mb-4">
              Familys Role in Progress Observation
            </h2>
            <p className="text-lg text-[#6C757D] max-w-3xl mx-auto">
              Family members provide invaluable observations that help healthcare providers 
              understand patient progress and adjust care plans effectively.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {observationAreas.map((area, index) => (
              <Card key={index} className="bg-white border-[#E5E7EB]">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <Badge className={area.badgeColor}>
                      {area.badge}
                    </Badge>
                    <Clock className="h-4 w-4 text-[#6C757D]" />
                  </div>
                  <CardTitle className="text-lg font-semibold text-[#343A40]">
                    {area.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {area.indicators.map((indicator, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <Eye className="h-3 w-3 text-[#4ECDC4] mt-1 flex-shrink-0" />
                        <span className="text-sm text-[#6C757D]">{indicator}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* When to Communicate Changes to Providers */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#343A40] mb-8 text-center">
              When to Communicate Changes to Providers
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-[#DC3545]/30 bg-[#DC3545]/5">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-[#343A40] flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-[#DC3545]" />
                    Urgent Communication
                  </CardTitle>
                  <CardDescription className="text-base text-[#6C757D]">
                    Contact healthcare providers immediately for these situations:
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-[#DC3545] mt-0.5 flex-shrink-0" />
                    <span className="text-[#6C757D]">Sudden changes in consciousness or alertness</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-[#DC3545] mt-0.5 flex-shrink-0" />
                    <span className="text-[#6C757D]">Severe or worsening pain symptoms</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-[#DC3545] mt-0.5 flex-shrink-0" />
                    <span className="text-[#6C757D]">Breathing difficulties or chest pain</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-[#DC3545] mt-0.5 flex-shrink-0" />
                    <span className="text-[#6C757D]">Signs of infection or fever</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-[#DC3545] mt-0.5 flex-shrink-0" />
                    <span className="text-[#6C757D]">Medication reactions or adverse effects</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-[#FFC107]/30 bg-[#FFC107]/5">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-[#343A40] flex items-center gap-2">
                    <Clock className="h-5 w-5 text-[#856404]" />
                    Routine Communication
                  </CardTitle>
                  <CardDescription className="text-base text-[#6C757D]">
                    Schedule communication for these observations:
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-[#856404] mt-0.5 flex-shrink-0" />
                    <span className="text-[#6C757D]">Gradual changes in appetite or weight</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-[#856404] mt-0.5 flex-shrink-0" />
                    <span className="text-[#6C757D]">Mood or behavioral pattern changes</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-[#856404] mt-0.5 flex-shrink-0" />
                    <span className="text-[#6C757D]">Sleep pattern disturbances</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-[#856404] mt-0.5 flex-shrink-0" />
                    <span className="text-[#6C757D]">Changes in functional abilities</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-[#856404] mt-0.5 flex-shrink-0" />
                    <span className="text-[#6C757D]">Questions about treatment effectiveness</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Understanding Care Plan Adjustments */}
      <section className="py-20 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#343A40] mb-8 text-center">
              Understanding Care Plan Adjustments
            </h2>
            <div className="space-y-8">
              <Card className="border-[#E5E7EB]">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-[#343A40] flex items-center gap-2">
                    <Target className="h-5 w-5 text-[#4ECDC4]" />
                    When Care Plans Change
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose max-w-none text-[#6C757D]">
                  <p>
                    Care plans are living documents that evolve based on patient progress, 
                    changing needs, and response to treatments. Regular monitoring data helps 
                    healthcare teams identify when modifications are needed to optimize care 
                    outcomes and patient quality of life.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-[#E5E7EB]">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-[#343A40] flex items-center gap-2">
                    <MessageCircle className="h-5 w-5 text-[#4ECDC4]" />
                    Participating in Care Plan Reviews
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose max-w-none text-[#6C757D]">
                  <p>
                    Family input is valuable during care plan reviews. Come prepared with 
                    specific observations, questions about treatment goals, and feedback 
                    about whats working well or causing challenges. Your daily observations 
                    provide insights that clinical assessments might miss.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-[#E5E7EB]">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-[#343A40] flex items-center gap-2">
                    <Settings className="h-5 w-5 text-[#4ECDC4]" />
                    Adapting to New Care Strategies
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose max-w-none text-[#6C757D]">
                  <p>
                    When care plans change, ensure you understand new procedures, medication 
                    adjustments, or therapy modifications. Ask for additional training if 
                    needed and maintain open communication about any concerns or difficulties 
                    implementing new care strategies.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Documentation and Reporting */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#343A40] mb-8 text-center">
              Documentation and Reporting Best Practices
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-[#E5E7EB]">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-[#343A40] flex items-center gap-2">
                    <FileText className="h-5 w-5 text-[#4ECDC4]" />
                    Effective Documentation
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-[#28A745] mt-0.5 flex-shrink-0" />
                    <span className="text-[#6C757D]">Record specific dates, times, and observations</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-[#28A745] mt-0.5 flex-shrink-0" />
                    <span className="text-[#6C757D]">Use objective, factual descriptions</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-[#28A745] mt-0.5 flex-shrink-0" />
                    <span className="text-[#6C757D]">Note patterns and trends over time</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-[#28A745] mt-0.5 flex-shrink-0" />
                    <span className="text-[#6C757D]">Include patient responses to interventions</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-[#E5E7EB]">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-[#343A40] flex items-center gap-2">
                    <MessageCircle className="h-5 w-5 text-[#4ECDC4]" />
                    Sharing Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 text-[#4ECDC4] mt-0.5 flex-shrink-0" />
                    <span className="text-[#6C757D]">Organize information before provider meetings</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 text-[#4ECDC4] mt-0.5 flex-shrink-0" />
                    <span className="text-[#6C757D]">Use clear, concise language</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 text-[#4ECDC4] mt-0.5 flex-shrink-0" />
                    <span className="text-[#6C757D]">Prioritize most important observations</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 text-[#4ECDC4] mt-0.5 flex-shrink-0" />
                    <span className="text-[#6C757D]">Maintain patient privacy and confidentiality</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Solutions for Monitoring */}
      <section className="py-20 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#343A40] mb-4">
              Technology Solutions for Monitoring
            </h2>
            <p className="text-lg text-[#6C757D] max-w-3xl mx-auto">
              Modern technology offers sophisticated tools to enhance monitoring 
              capabilities and improve care coordination.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {technologySolutions.map((solution, index) => (
              <Card key={index} className="bg-white border-[#E5E7EB]">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="flex items-center justify-center w-8 h-8 bg-[#007BFF]/10 rounded-lg">
                      {solution.icon}
                    </div>
                    <CardTitle className="text-lg font-semibold text-[#343A40]">
                      {solution.title}
                    </CardTitle>
                  </div>
                  <CardDescription className="text-base text-[#6C757D]">
                    {solution.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {solution.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-[#28A745] mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-[#6C757D]">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 max-w-4xl mx-auto">
            <Card className="border-[#007BFF]/30 bg-gradient-to-r from-[#007BFF]/5 to-[#4ECDC4]/5">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-[#343A40] flex items-center gap-2">
                  <HelpCircle className="h-5 w-5 text-[#007BFF]" />
                  Choosing the Right Technology
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <h4 className="font-medium text-[#343A40]">Consider These Factors:</h4>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-[#28A745] mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-[#6C757D]">Patient comfort with technology</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-[#28A745] mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-[#6C757D]">Integration with existing healthcare systems</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-[#28A745] mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-[#6C757D]">Cost and insurance coverage</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-medium text-[#343A40]">Benefits of Digital Solutions:</h4>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <ArrowRight className="h-4 w-4 text-[#4ECDC4] mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-[#6C757D]">Automated data collection and analysis</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <ArrowRight className="h-4 w-4 text-[#4ECDC4] mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-[#6C757D]">Real-time alerts and notifications</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <ArrowRight className="h-4 w-4 text-[#4ECDC4] mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-[#6C757D]">Easier sharing with healthcare providers</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
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
                Important Monitoring Notice
              </h3>
              <p className="text-[#6C757D] leading-relaxed">
                Progress monitoring should complement, not replace, professional healthcare 
                assessments. Family observations are valuable but should always be interpreted 
                by qualified healthcare providers. Never delay seeking professional medical 
                attention based solely on monitoring data. This information is for educational 
                purposes only and does not constitute medical advice.
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
              Monitoring Resources & Tools
            </h2>
            <p className="text-lg text-[#6C757D] max-w-3xl mx-auto">
              Access trusted resources for health monitoring tools, educational materials, 
              and professional guidance on progress tracking.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-[#4ECDC4] bg-gradient-to-r from-[#4ECDC4]/5 to-[#52B788]/5">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-[#343A40] flex items-center gap-2">
                  <ExternalLink className="h-5 w-5 text-[#4ECDC4]" />
                  Agency for Healthcare Research and Quality
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[#6C757D] mb-4">
                  Federal agency providing evidence-based healthcare quality tools and monitoring resources.
                </p>
                <Button variant="outline" className="border-[#4ECDC4] text-[#4ECDC4] hover:bg-[#4ECDC4] hover:text-white">
                  <a href="https://www.ahrq.gov" target="_blank" rel="noopener noreferrer">
                    Visit Website
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-[#4ECDC4] bg-gradient-to-r from-[#4ECDC4]/5 to-[#52B788]/5">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-[#343A40] flex items-center gap-2">
                  <ExternalLink className="h-5 w-5 text-[#4ECDC4]" />
                  Centers for Disease Control and Prevention
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[#6C757D] mb-4">
                  Health monitoring guidelines and tools for chronic disease management and prevention.
                </p>
                <Button variant="outline" className="border-[#4ECDC4] text-[#4ECDC4] hover:bg-[#4ECDC4] hover:text-white">
                  <a href="https://www.cdc.gov/chronicdisease" target="_blank" rel="noopener noreferrer">
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
              Explore these related topics to enhance your understanding of progress 
              monitoring and home healthcare coordination.
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