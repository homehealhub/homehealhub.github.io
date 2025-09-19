import { Metadata } from "next";
import EquipmentSetupPage from "@/components/EquipmentSetupPage";
import { JSX } from "react";

// SEO Metadata for the Equipment Setup page
export const metadata: Metadata = {
  title: "Medical Equipment Setup for Home Healthcare | Installation & Safety Guide",
  description: "Comprehensive guide to medical equipment setup at home. Learn about installation, safety protocols, maintenance, and working with suppliers for home healthcare equipment including mobility aids and monitoring devices.",
  keywords: [
    "medical equipment setup",
    "home healthcare equipment",
    "medical device installation",
    "home medical equipment safety",
    "healthcare equipment maintenance",
    "medical equipment suppliers",
    "home care equipment guide",
    "medical device safety protocols",
    "equipment installation home",
    "healthcare equipment troubleshooting"
  ],
  openGraph: {
    title: "Medical Equipment Setup for Home Healthcare | Installation & Safety Guide",
    description: "Comprehensive guide to medical equipment setup, installation, safety protocols, and maintenance for home healthcare environments.",
    type: "article",
    url: "https://homehealhub.com/topics/equipment-setup",
    siteName: "HomeHealHub"
  },
  twitter: {
    card: "summary_large_image",
    title: "Medical Equipment Setup for Home Healthcare | Installation & Safety Guide",
    description: "Comprehensive guide to medical equipment setup, installation, safety protocols, and maintenance for home healthcare environments."
  },
  alternates: {
    canonical: "https://homehealhub.com/topics/equipment-setup"
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function EquipmentSetupPageRoute(): JSX.Element {
  // Structured Data for the Equipment Setup page
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Medical Equipment Setup for Home Healthcare",
    "description": "Comprehensive guide to medical equipment setup, installation, safety protocols, and maintenance for home healthcare environments.",
    "url": "https://homehealhub.com/topics/equipment-setup",
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
      "@id": "https://homehealhub.com/topics/equipment-setup"
    },
    "about": [
      {
        "@type": "Thing",
        "name": "Medical Equipment Setup",
        "description": "Installation and configuration of medical devices in home environments"
      },
      {
        "@type": "Thing",
        "name": "Healthcare Equipment Safety",
        "description": "Safety protocols and requirements for home medical equipment"
      },
      {
        "@type": "Thing",
        "name": "Equipment Maintenance",
        "description": "Maintenance procedures and troubleshooting for medical devices"
      },
      {
        "@type": "Thing",
        "name": "Medical Device Installation",
        "description": "Professional installation services and procedures for home healthcare equipment"
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
          "name": "Equipment Setup",
          "item": "https://homehealhub.com/topics/equipment-setup"
        }
      ]
    },
    "keywords": [
      "medical equipment setup",
      "home healthcare equipment",
      "medical device installation",
      "healthcare equipment safety",
      "equipment maintenance",
      "medical equipment suppliers"
    ],
    "articleSection": "Healthcare Equipment",
    "audience": {
      "@type": "Audience",
      "audienceType": "Patients and families setting up home healthcare equipment"
    },
    "educationalLevel": "General public",
    "specialty": [
      "Medical Equipment Installation",
      "Healthcare Equipment Safety",
      "Home Care Technology",
      "Medical Device Maintenance"
    ],
    "inLanguage": "en-US",
    "isAccessibleForFree": true,
    "learningResourceType": "Guide"
  };

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* Main content component */}
      <EquipmentSetupPage />
    </>
  );
}