import { Metadata } from "next";
import ResourcesPage from "@/components/ResourcesPage";
import { JSX } from "react";

// SEO Metadata for the Resources page
export const metadata: Metadata = {
  title: "Healthcare Resources & Provider Directory | HomeHealHub Partners",
  description: "Find trusted healthcare providers, medical equipment suppliers, and educational resources for home healthcare. Explore our verified directory of home health services, government resources, and support organizations.",
  keywords: [
    "healthcare resources",
    "home healthcare providers",
    "medical equipment suppliers",
    "healthcare directory",
    "home health services",
    "healthcare partners",
    "medical resources",
    "healthcare support organizations",
    "government healthcare resources",
    "home care providers"
  ],
  openGraph: {
    title: "Healthcare Resources & Provider Directory | HomeHealHub Partners",
    description: "Find trusted healthcare providers, medical equipment suppliers, and educational resources for home healthcare in our comprehensive directory.",
    type: "website",
    url: "https://homehealhub.com/resources",
    siteName: "HomeHealHub"
  },
  twitter: {
    card: "summary_large_image",
    title: "Healthcare Resources & Provider Directory | HomeHealHub Partners",
    description: "Find trusted healthcare providers, medical equipment suppliers, and educational resources for home healthcare in our comprehensive directory."
  },
  alternates: {
    canonical: "https://homehealhub.com/resources"
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function Resources(): JSX.Element {
  // Structured Data for the Resources page
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Healthcare Resources & Provider Directory",
    "description": "Comprehensive directory of trusted healthcare providers, medical equipment suppliers, and educational resources for home healthcare needs.",
    "url": "https://homehealhub.com/resources",
    "mainEntity": {
      "@type": "ItemList",
      "name": "Healthcare Resources Directory", 
      "description": "Curated collection of healthcare providers and resources for home care",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "item": {
            "@type": "Organization",
            "name": "Healthcare Providers",
            "description": "Professional healthcare services delivered in home settings",
            "category": "Healthcare Provider"
          }
        },
        {
          "@type": "ListItem",
          "position": 2,
          "item": {
            "@type": "Organization", 
            "name": "Equipment Suppliers",
            "description": "Medical equipment and supplies for home healthcare",
            "category": "Medical Equipment Supplier"
          }
        },
        {
          "@type": "ListItem",
          "position": 3,
          "item": {
            "@type": "Organization",
            "name": "Educational Resources",
            "description": "Training and educational materials for caregivers",
            "category": "Educational Organization"
          }
        },
        {
          "@type": "ListItem",
          "position": 4,
          "item": {
            "@type": "GovernmentOrganization",
            "name": "Government Resources",
            "description": "Official government healthcare information and services",
            "category": "Government Healthcare"
          }
        },
        {
          "@type": "ListItem",
          "position": 5,
          "item": {
            "@type": "Organization",
            "name": "Support Organizations", 
            "description": "Non-profit organizations providing healthcare support",
            "category": "Support Organization"
          }
        }
      ]
    },
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
          "name": "Resources",
          "item": "https://homehealhub.com/resources"
        }
      ]
    },
    "about": [
      {
        "@type": "Thing",
        "name": "Healthcare Provider Directory",
        "description": "Verified healthcare professionals and organizations offering home care services"
      },
      {
        "@type": "Thing",
        "name": "Medical Equipment Resources",
        "description": "Suppliers and information for home healthcare equipment and supplies"
      },
      {
        "@type": "Thing",
        "name": "Healthcare Education",
        "description": "Training resources and educational materials for family caregivers"
      },
      {
        "@type": "Thing",
        "name": "Government Healthcare Services",
        "description": "Official government resources for healthcare information and benefits"
      }
    ],
    "audience": {
      "@type": "Audience",
      "audienceType": "Individuals and families seeking home healthcare services and resources"
    },
    "specialty": [
      "Healthcare Provider Matching",
      "Medical Equipment Sourcing",
      "Caregiver Education Resources",
      "Healthcare Support Services"
    ],
    "isAccessibleForFree": true,
    "publisher": {
      "@type": "Organization",
      "name": "HomeHealHub",
      "url": "https://homehealhub.com"
    },
    "inLanguage": "en-US"
  };

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* Main content component */}
      <ResourcesPage />
    </>
  );
}