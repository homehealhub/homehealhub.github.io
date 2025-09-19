import { Metadata } from "next";
import HelloScreen from "@/components/HelloScreen";
import { JSX } from "react";

// SEO Metadata for the home page
export const metadata: Metadata = {
  title: "HomeHealHub | Your Gateway to Quality Home Healthcare Information",
  description: "HomeHealHub provides educational resources and information about in-home healthcare services, helping families understand their options and connect with quality care providers. Explore guides on equipment setup, family training, and progress monitoring.",
  keywords: [
    "home healthcare",
    "in-home care services",
    "home health information",
    "family caregiving resources",
    "medical equipment setup",
    "home healthcare providers",
    "patient care at home",
    "healthcare education",
    "home health guides",
    "quality home care"
  ],
  openGraph: {
    title: "HomeHealHub | Your Gateway to Quality Home Healthcare Information",
    description: "Educational resources and information about in-home healthcare services, helping families understand their options and connect with quality care providers.",
    type: "website",
    url: "https://homehealhub.com",
    siteName: "HomeHealHub",
    images: [
      {
        url: "https://homehealhub.com/og-home.jpg",
        width: 1200,
        height: 630,
        alt: "HomeHealHub - Your Gateway to Quality Home Healthcare Information"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "HomeHealHub | Your Gateway to Quality Home Healthcare Information",
    description: "Educational resources and information about in-home healthcare services, helping families understand their options and connect with quality care providers.",
    images: ["https://homehealhub.com/twitter-home.jpg"]
  },
  alternates: {
    canonical: "https://homehealhub.com"
  },
  robots: {
    index: true,
    follow: true
  },
  other: {
    "geo.region": "US",
    "geo.placename": "United States",
    "language": "English"
  }
};

export default function Home(): JSX.Element {
  // Structured Data for the home page
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "HomeHealHub - Your Gateway to Quality Home Healthcare Information",
    "description": "Educational resources and information about in-home healthcare services, helping families understand their options and connect with quality care providers.",
    "url": "https://homehealhub.com",
    "mainEntity": {
      "@type": "Organization",
      "name": "HomeHealHub",
      "description": "Educational platform providing comprehensive resources for home healthcare",
      "url": "https://homehealhub.com",
      "foundingDate": "2024",
      "knowsAbout": [
        "Home Healthcare Services",
        "In-Home Medical Care",
        "Family Caregiver Training",
        "Medical Equipment Setup",
        "Progress Monitoring",
        "Healthcare Education"
      ],
      "offers": {
        "@type": "Service",
        "serviceType": "Healthcare Information Services",
        "description": "Educational resources and guidance for home healthcare",
        "areaServed": {
          "@type": "Country",
          "name": "United States"
        }
      }
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://homehealhub.com"
        }
      ]
    },
    "about": [
      {
        "@type": "Thing",
        "name": "Home Healthcare",
        "description": "Medical care and services provided in the patient's home environment"
      },
      {
        "@type": "Thing",
        "name": "Family Caregiving",
        "description": "Training and support for family members providing care to loved ones"
      },
      {
        "@type": "Thing",
        "name": "Medical Equipment",
        "description": "Setup, maintenance, and safety of medical devices in home settings"
      },
      {
        "@type": "Thing",
        "name": "Healthcare Education",
        "description": "Evidence-based information and resources for healthcare decision-making"
      }
    ],
    "specialty": [
      "In-Home Healthcare Services",
      "Medical Equipment Setup",
      "Family Caregiver Training", 
      "Progress Monitoring",
      "Healthcare Provider Resources"
    ],
    "inLanguage": "en-US",
    "isAccessibleForFree": true,
    "audience": {
      "@type": "Audience",
      "audienceType": "Families seeking home healthcare information"
    }
  };

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* Main content component */}
      <HelloScreen />
    </>
  );
}