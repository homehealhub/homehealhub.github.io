import { Metadata } from "next";
import InHomeVisitsPage from "@/components/InHomeVisitsPage";
import { JSX } from "react";

// SEO Metadata for the In-Home Visits page
export const metadata: Metadata = {
  title: "In-Home Healthcare Visits | Professional Home Care Services Guide",
  description: "Comprehensive guide to in-home healthcare visits including types of care, preparing your home, working with healthcare professionals, and benefits of home-based medical services over facility care.",
  keywords: [
    "in-home healthcare visits",
    "home healthcare services",
    "home medical care",
    "in-home nursing",
    "home health visits",
    "professional home care",
    "home healthcare providers",
    "medical care at home",
    "home health services",
    "healthcare at home"
  ],
  openGraph: {
    title: "In-Home Healthcare Visits | Professional Home Care Services Guide",
    description: "Comprehensive guide to in-home healthcare visits, types of care provided, and how to prepare for professional healthcare services at home.",
    type: "article",
    url: "https://homehealhub.com/topics/in-home-visits",
    siteName: "HomeHealHub"
  },
  twitter: {
    card: "summary_large_image",
    title: "In-Home Healthcare Visits | Professional Home Care Services Guide",
    description: "Comprehensive guide to in-home healthcare visits, types of care provided, and how to prepare for professional healthcare services at home."
  },
  alternates: {
    canonical: "https://homehealhub.com/topics/in-home-visits"
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function InHomeVisitsPageRoute(): JSX.Element {
  // Structured Data for the In-Home Visits page
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "In-Home Healthcare Visits and Professional Home Care Services",
    "description": "Comprehensive guide to in-home healthcare visits including types of care, preparing your home, working with healthcare professionals, and benefits of home-based medical services.",
    "url": "https://homehealhub.com/topics/in-home-visits",
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
      "@id": "https://homehealhub.com/topics/in-home-visits"
    },
    "about": [
      {
        "@type": "Thing",
        "name": "In-Home Healthcare Services",
        "description": "Professional medical and healthcare services delivered in the patient's home environment"
      },
      {
        "@type": "Thing",
        "name": "Home Healthcare Providers",
        "description": "Licensed healthcare professionals who provide medical care in home settings"
      },
      {
        "@type": "Thing",
        "name": "Home Care Preparation",
        "description": "Steps and considerations for preparing the home environment for healthcare visits"
      },
      {
        "@type": "Thing",
        "name": "Home vs Facility Care",
        "description": "Comparison of benefits between home-based care and facility-based healthcare"
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
          "name": "In-Home Visits",
          "item": "https://homehealhub.com/topics/in-home-visits"
        }
      ]
    },
    "keywords": [
      "in-home healthcare visits",
      "home healthcare services",
      "home medical care",
      "professional home care",
      "home health visits",
      "healthcare at home"
    ],
    "articleSection": "Home Healthcare Services",
    "audience": {
      "@type": "Audience",
      "audienceType": "Patients and families considering in-home healthcare services"
    },
    "educationalLevel": "General public",
    "specialty": [
      "In-Home Healthcare Services",
      "Home Care Coordination",
      "Healthcare Provider Relations",
      "Home Environment Preparation"
    ],
    "inLanguage": "en-US",
    "isAccessibleForFree": true,
    "learningResourceType": "Service Guide",
    "teaches": [
      "Types of in-home healthcare services",
      "How to prepare your home for healthcare visits",
      "Working effectively with healthcare professionals",
      "Understanding benefits of home-based vs facility care",
      "Coordinating care with multiple providers"
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
      <InHomeVisitsPage />
    </>
  );
}