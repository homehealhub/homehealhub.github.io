import React from 'react';
import { Separator } from '@/components/ui/separator';
import { Heart } from 'lucide-react';
import { JSX } from "react";

// Structured Data for Organization
const organizationStructuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "HomeHealHub",
  "description": "Educational resources and information about in-home healthcare services",
  "url": "https://homehealhub.com",
  "logo": "https://homehealhub.com/images/logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "email": "homehealhub@gmail.com",
    "contactType": "Customer Service"
  },
  "sameAs": [
    "https://homehealhub.com/about",
    "https://homehealhub.com/resources"
  ]
};

export default function Footer(): JSX.Element {
  return (
    <>
      {/* Organization Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationStructuredData) }}
      />

      <footer className="bg-[#343A40] text-white py-16" role="contentinfo">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Company Information */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="flex items-center justify-center w-8 h-8 bg-[#4ECDC4] rounded-lg">
                  <Heart className="h-5 w-5 text-white" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-semibold">HomeHealHub</h3>
              </div>
              <p className="text-gray-300 text-base leading-relaxed max-w-md">
                Empowering families with educational resources and information about
                in-home healthcare services.
              </p>
            </div>

            {/* Site Navigation */}
            <nav aria-label="Footer navigation">
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-300" role="list">
                <li>
                  <a 
                    href="/topics" 
                    className="hover:text-[#4ECDC4] transition-colors"
                    aria-label="Browse home healthcare topics and guides"
                  >
                    Topics
                  </a>
                </li>
                <li>
                  <a 
                    href="/blog" 
                    className="hover:text-[#4ECDC4] transition-colors"
                    aria-label="Read our latest blog articles on home healthcare"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a 
                    href="/resources" 
                    className="hover:text-[#4ECDC4] transition-colors"
                    aria-label="Access external healthcare resources and providers"
                  >
                    Resources
                  </a>
                </li>
                <li>
                  <a 
                    href="/about" 
                    className="hover:text-[#4ECDC4] transition-colors"
                    aria-label="Learn about HomeHealHub's mission and approach"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a 
                    href="mailto:homehealhub@gmail.com" 
                    className="hover:text-[#4ECDC4] transition-colors"
                    aria-label="Send us an email for questions or feedback"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </nav>

            {/* External Resources */}
            <nav aria-label="External resources">
              <h4 className="font-semibold mb-4">Featured Partners</h4>
              <ul className="space-y-2 text-gray-300" role="list">
                <li>
                  <a
                    href="https://www.luminousrehab.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#4ECDC4] transition-colors"
                    aria-label="Visit Luminous Rehab - our featured rehabilitation partner (opens in new tab)"
                  >
                    Luminous Rehab
                  </a>
                </li>
                <li>
                  <a
                    href="/resources"
                    className="hover:text-[#4ECDC4] transition-colors"
                    aria-label="View all healthcare provider resources"
                  >
                    View All Resources →
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <Separator className="my-8 bg-gray-600" />

          {/* Footer Bottom */}
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-300 text-sm">
            <div className="flex flex-col md:flex-row gap-4 md:gap-8 mb-4 md:mb-0">
              <p>&copy; 2025 HomeHealHub. All rights reserved.</p>
            </div>
            <p className="text-center md:text-right">
              Educational content for informational purposes only.
              <br className="md:hidden" />
              <span className="hidden md:inline"> | </span>
              <strong>Not medical advice.</strong>
            </p>
          </div>

          {/* Additional SEO Elements */}
          <div className="mt-8 pt-4 border-t border-gray-600">
            <div className="text-xs text-gray-400 text-center">
              <p className="mb-2">
                <strong>HomeHealHub</strong> - Your trusted source for home healthcare education and resources.
              </p>
              <p>
                Topics: In-Home Visits | Equipment Setup | Family Training | Progress Monitoring
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}