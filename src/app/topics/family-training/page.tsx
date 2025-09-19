import { Metadata } from "next";
import FamilyTrainingPage from "@/components/FamilyTrainingPage";
import { JSX } from "react";

// SEO Metadata for the Family Training page
export const metadata: Metadata = {
  title: "Family Caregiver Training & Education | Home Healthcare Skills Guide",
  description: "Comprehensive family caregiver training guide covering essential care techniques, communication strategies, documentation, and emotional support resources. Learn to provide effective home healthcare support for your loved ones.",
  keywords: [
    "family caregiver training",
    "caregiver education",
    "home healthcare training",
    "family care techniques",
    "caregiver communication skills",
    "home care education",
    "family caregiver resources",
    "caregiver support training",
    "home healthcare skills",
    "family caregiving guide"
  ],
  openGraph: {
    title: "Family Caregiver Training & Education | Home Healthcare Skills Guide",
    description: "Comprehensive family caregiver training covering essential care techniques, communication strategies, and support resources for home healthcare.",
    type: "article",
    url: "https://homehealhub.com/topics/family-training",
    siteName: "HomeHealHub"
  },
  twitter: {
    card: "summary_large_image",
    title: "Family Caregiver Training & Education | Home Healthcare Skills Guide",
    description: "Comprehensive family caregiver training covering essential care techniques, communication strategies, and support resources for home healthcare."
  },
  alternates: {
    canonical: "https://homehealhub.com/topics/family-training"
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function FamilyTrainingPageRoute(): JSX.Element {
  // Structured Data for the Family Training page
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Family Caregiver Training & Education for Home Healthcare",
    "description": "Comprehensive family caregiver training guide covering essential care techniques, communication strategies, documentation, and emotional support resources.",
    "url": "https://homehealhub.com/topics/family-training",
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
      "@id": "https://homehealhub.com/topics/family-training"
    },
    "about": [
      {
        "@type": "Thing",
        "name": "Family Caregiver Training",
        "description": "Educational programs and resources for family members providing home healthcare"
      },
      {
        "@type": "Thing",
        "name": "Care Techniques",
        "description": "Basic healthcare skills and techniques for family caregivers"
      },
      {
        "@type": "Thing",
        "name": "Communication Strategies",
        "description": "Effective communication between caregivers, patients, and healthcare providers"
      },
      {
        "@type": "Thing",
        "name": "Caregiver Support",
        "description": "Emotional support and resources for family caregivers"
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
          "name": "Family Training",
          "item": "https://homehealhub.com/topics/family-training"
        }
      ]
    },
    "keywords": [
      "family caregiver training",
      "caregiver education",
      "home healthcare training",
      "family care techniques",
      "caregiver communication",
      "caregiver support"
    ],
    "articleSection": "Caregiver Education",
    "audience": {
      "@type": "Audience",
      "audienceType": "Family members providing care to loved ones"
    },
    "educationalLevel": "General public",
    "specialty": [
      "Family Caregiver Education",
      "Home Healthcare Training",
      "Caregiver Communication Skills",
      "Emotional Support Resources"
    ],
    "inLanguage": "en-US",
    "isAccessibleForFree": true,
    "learningResourceType": "Training Guide",
    "teaches": [
      "Basic care techniques",
      "Communication with healthcare providers",
      "Documentation and record keeping",
      "Emotional support strategies",
      "Safety protocols for caregivers"
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
      <FamilyTrainingPage />
    </>
  );
}