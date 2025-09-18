import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import PageTemplate from './PageTemplate';
import { 
  Heart,
  Shield,
  Users,
  CheckCircle,
  BookOpen,
  Award,
  Mail,
  Clock,
  AlertTriangle,
  Star
} from 'lucide-react';

const AboutPage = () => {
  return (
    <PageTemplate currentPage="about">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#F8F9FA] to-white py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-[#343A40] mb-6 leading-tight">
              About HomeHealHub
            </h1>
            <p className="text-xl text-[#6C757D] mb-8 leading-relaxed">
              Empowering families with trusted, evidence-based information about in-home healthcare services
            </p>
            <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-[#6C757D]">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-[#28A745]" />
                <span>Evidence-Based</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-[#28A745]" />
                <span>Expert-Reviewed</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="h-5 w-5 text-[#28A745]" />
                <span>Family-Focused</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="border-[#4ECDC4] bg-gradient-to-r from-[#4ECDC4]/5 to-[#52B788]/5 mb-12">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-[#4ECDC4] rounded-lg">
                    <Heart className="h-8 w-8 text-white" />
                  </div>
                </div>
                <CardTitle className="text-3xl font-bold text-[#343A40] mb-4">
                  Our Mission
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-lg text-[#6C757D] leading-relaxed max-w-3xl mx-auto">
                  HomeHealHub provides educational resources and information about in-home healthcare services, 
                  helping families understand their options and connect with quality care providers. We believe 
                  that informed families make better healthcare decisions and achieve better outcomes for their loved ones.
                </p>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-[#E5E7EB] hover:border-[#4ECDC4] transition-colors">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-[#F8F9FA] rounded-lg">
                      <Star className="h-6 w-6 text-[#4ECDC4]" />
                    </div>
                    <CardTitle className="text-xl text-[#343A40]">Our Vision</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-[#6C757D] leading-relaxed">
                    To be the most trusted educational resource for families navigating in-home healthcare, 
                    providing clear, accessible information that empowers confident decision-making.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-[#E5E7EB] hover:border-[#4ECDC4] transition-colors">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-[#F8F9FA] rounded-lg">
                      <Users className="h-6 w-6 text-[#4ECDC4]" />
                    </div>
                    <CardTitle className="text-xl text-[#343A40]">Our Values</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="text-[#6C757D] space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-[#28A745] flex-shrink-0" />
                      <span>Evidence-based information</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-[#28A745] flex-shrink-0" />
                      <span>Clear, accessible communication</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-[#28A745] flex-shrink-0" />
                      <span>Family-centered approach</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-[#28A745] flex-shrink-0" />
                      <span>Trustworthy partnerships</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Content Standards Section */}
      <section className="py-20 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#343A40] mb-4">
                Content Standards & Editorial Process
              </h2>
              <p className="text-lg text-[#6C757D] max-w-3xl mx-auto">
                We maintain the highest standards for content accuracy, relevance, and accessibility
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="bg-white border-[#E5E7EB]">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-[#4ECDC4]/10 rounded-lg">
                      <BookOpen className="h-6 w-6 text-[#4ECDC4]" />
                    </div>
                    <CardTitle className="text-xl text-[#343A40]">Content Sourcing</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="text-[#6C757D] space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-[#28A745] flex-shrink-0 mt-0.5" />
                      <span>Peer-reviewed medical literature</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-[#28A745] flex-shrink-0 mt-0.5" />
                      <span>Government health agencies (CDC, CMS, NIH)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-[#28A745] flex-shrink-0 mt-0.5" />
                      <span>Professional healthcare organizations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-[#28A745] flex-shrink-0 mt-0.5" />
                      <span>Licensed healthcare professionals</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-white border-[#E5E7EB]">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-[#4ECDC4]/10 rounded-lg">
                      <Shield className="h-6 w-6 text-[#4ECDC4]" />
                    </div>
                    <CardTitle className="text-xl text-[#343A40]">Editorial Standards</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="text-[#6C757D] space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-[#28A745] flex-shrink-0 mt-0.5" />
                      <span>Multi-step fact-checking process</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-[#28A745] flex-shrink-0 mt-0.5" />
                      <span>Expert review before publication</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-[#28A745] flex-shrink-0 mt-0.5" />
                      <span>Regular content updates and reviews</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-[#28A745] flex-shrink-0 mt-0.5" />
                      <span>Clear distinction between education and advice</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-white border-[#E5E7EB]">
              <CardHeader>
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-[#4ECDC4]/10 rounded-lg">
                    <Award className="h-6 w-6 text-[#4ECDC4]" />
                  </div>
                  <CardTitle className="text-xl text-[#343A40]">Review Process</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="bg-[#4ECDC4]/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                      <span className="text-[#4ECDC4] font-bold">1</span>
                    </div>
                    <h4 className="font-semibold text-[#343A40] mb-2">Research & Writing</h4>
                    <p className="text-sm text-[#6C757D]">Content created using verified sources and evidence-based research</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-[#4ECDC4]/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                      <span className="text-[#4ECDC4] font-bold">2</span>
                    </div>
                    <h4 className="font-semibold text-[#343A40] mb-2">Expert Review</h4>
                    <p className="text-sm text-[#6C757D]">Healthcare professionals review for accuracy and medical soundness</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-[#4ECDC4]/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                      <span className="text-[#4ECDC4] font-bold">3</span>
                    </div>
                    <h4 className="font-semibold text-[#343A40] mb-2">Publication</h4>
                    <p className="text-sm text-[#6C757D]">Final editing for clarity and accessibility before publication</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Medical Disclaimer Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="border-[#FFC107] bg-[#FFC107]/5">
              <CardHeader>
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-[#FFC107]/20 rounded-lg">
                    <AlertTriangle className="h-6 w-6 text-[#FFC107]" />
                  </div>
                  <CardTitle className="text-2xl text-[#343A40]">Important Medical Disclaimer</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-[#6C757D]">
                  <p className="leading-relaxed">
                    <strong className="text-[#343A40]">Educational Purpose Only:</strong> The information provided on HomeHealHub 
                    is for educational purposes only and is not intended as medical advice, diagnosis, or treatment recommendations.
                  </p>
                  <p className="leading-relaxed">
                    <strong className="text-[#343A40]">Consult Healthcare Professionals:</strong> Always consult with qualified 
                    healthcare professionals before making any healthcare decisions or implementing any care strategies discussed on this site.
                  </p>
                  <p className="leading-relaxed">
                    <strong className="text-[#343A40]">Individual Circumstances:</strong> Healthcare needs vary greatly between 
                    individuals. What works for one person may not be appropriate for another.
                  </p>
                  <p className="leading-relaxed">
                    <strong className="text-[#343A40]">Emergency Situations:</strong> In case of medical emergencies, 
                    call 911 or seek immediate professional medical attention. Do not rely on this website for emergency medical guidance.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact & Updates Section */}
      <section className="py-20 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#343A40] mb-4">
                Stay Connected
              </h2>
              <p className="text-lg text-[#6C757D] max-w-3xl mx-auto">
                We value your feedback and are committed to continuous improvement
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-white border-[#E5E7EB]">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-[#4ECDC4]/10 rounded-lg">
                      <Mail className="h-6 w-6 text-[#4ECDC4]" />
                    </div>
                    <CardTitle className="text-xl text-[#343A40]">Contact Us</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-[#6C757D] mb-4 leading-relaxed">
                    Have feedback about our content? Suggestions for new topics? We would love to hear from you.
                  </p>
                  <Button 
                    className="bg-[#4ECDC4] hover:bg-[#3DB5AC] text-white"
                    asChild
                  >
                    <a href="mailto:homehealhub@gmail.com" className="inline-flex items-center">
                      Send Feedback
                      <Mail className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-white border-[#E5E7EB]">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-[#4ECDC4]/10 rounded-lg">
                      <Clock className="h-6 w-6 text-[#4ECDC4]" />
                    </div>
                    <CardTitle className="text-xl text-[#343A40]">Content Updates</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-[#6C757D] mb-4 leading-relaxed">
                    Our content is regularly reviewed and updated to ensure accuracy and relevance.
                  </p>
                  <div className="flex items-center gap-2 text-sm text-[#6C757D]">
                    <CheckCircle className="h-4 w-4 text-[#28A745]" />
                    <span>Last comprehensive review: September 2025</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Separator className="my-12" />
          </div>
        </div>
      </section>
    </PageTemplate>
  );
};

export default AboutPage;