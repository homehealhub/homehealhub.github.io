import { Metadata } from "next";
import ProgressMonitoringPage from "@/components/ProgressMonitoringPage";
import { JSX } from "react";

// SEO Metadata for the Progress Monitoring page
export const metadata: Metadata = {
  title: "Progress Monitoring in Home Healthcare | Patient Tracking & Communication Guide",
  description: "Learn effective methods for tracking patient progress in home healthcare settings. Discover monitoring tools, observation techniques, care plan adjustments, and communication strategies with healthcare providers.",
  keywords: [
    "progress monitoring",
    "patient progress tracking",
    "home healthcare monitoring",
    "health monitoring tools",
    "patient observation techniques",
    "care plan adjustments",
    "healthcare communication",
    "remote patient monitoring",
    "health tracking methods",
    "patient assessment tools"
  ],
  openGraph: {
    title: "Progress Monitoring in Home Healthcare | Patient Tracking & Communication Guide",
    description: "Comprehensive guide to tracking patient progress, utilizing monitoring tools, and communicating with healthcare providers in home care settings.",
    type: "article",
    url: "https://homehealhub.com/topics/progress-monitoring",
    siteName: "HomeHealHub"
  },
  twitter: {
    card: "summary_large_image",
    title: "Progress Monitoring in Home Healthcare | Patient Tracking & Communication Guide",
    description: "Comprehensive guide to tracking patient progress, utilizing monitoring tools, and communicating with healthcare providers in home care settings."
  },
  alternates: {
    canonical: "https://homehealhub.com/topics/progress-monitoring"
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function ProgressMonitoringPageRoute(): JSX.Element {
  // Structured Data for the Progress Monitoring page
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Progress Monitoring in Home Healthcare",
    "description": "Comprehensive guide to tracking patient progress, utilizing monitoring tools, and communicating with healthcare providers in home care settings.",
    "url": "https://homehealhub.com/topics/progress-monitoring",
    "author": {
      "@type": "Organization",
      "name": "HomeHealHub"
    },
    "publisher": {
      "@type": "Organization",
      "name": "HomeHealHub",
      "logo": {
        "@type": "ImageObject",
        "url": "https://homehealhub.com/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://homehealhub.com/topics/progress-monitoring"
    },
    "about": [
      {
        "@type": "Thing",
        "name": "Progress Monitoring",
        "description": "Systematic observation and measurement of patient health status and treatment responses"
      },
      {
        "@type": "Thing",
        "name": "Patient Tracking",
        "description": "Methods and tools for monitoring patient health and recovery progress"
      },
      {
        "@type": "Thing",
        "name": "Healthcare Communication",
        "description": "Effective communication strategies between families and healthcare providers"
      },
      {
        "@type": "Thing",
        "name": "Care Plan Management",
        "description": "Understanding and participating in care plan adjustments and reviews"
      }
    ],
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
          "name": "Progress Monitoring",
          "item": "https://homehealhub.com/topics/progress-monitoring"
        }
      ]
    },
    "keywords": [
      "progress monitoring",
      "patient progress tracking",
      "health monitoring tools",
      "patient observation",
      "care plan adjustments",
      "healthcare communication"
    ],
    "articleSection": "Healthcare Monitoring",
    "audience": {
      "@type": "Audience",
      "audienceType": "Families and caregivers monitoring patient progress at home"
    },
    "educationalLevel": "General public",
    "specialty": [
      "Patient Progress Assessment",
      "Health Monitoring Technologies",
      "Healthcare Communication",
      "Care Coordination"
    ],
    "inLanguage": "en-US",
    "isAccessibleForFree": true,
    "learningResourceType": "Monitoring Guide",
    "teaches": [
      "Methods of tracking patient progress",
      "Tools and technologies for monitoring",
      "Family's role in progress observation",
      "When to communicate changes to providers",
      "Understanding care plan adjustments",
      "Documentation and reporting best practices"
    ]
  };

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* Main content component */}
      <ProgressMonitoringPage />
    </>
  );
}