import { Metadata } from "next";
import TopicsLandingPage from "@/components/TopicsLandingPage";
import { JSX } from "react";

// SEO Metadata for the Topics page
export const metadata: Metadata = {
  title: "Home Healthcare Topics & Educational Guides | HomeHealHub Learning Center",
  description: "Explore comprehensive home healthcare topics including in-home visits, equipment setup, family training, and progress monitoring. Expert guides and evidence-based resources for families navigating home care decisions.",
  keywords: [
    "home healthcare topics",
    "home healthcare guides",
    "home care education",
    "in-home visits guide",
    "medical equipment setup",
    "family caregiver training",
    "progress monitoring",
    "home health services",
    "healthcare at home",
    "patient care guides"
  ],
  openGraph: {
    title: "Home Healthcare Topics & Educational Guides | HomeHealHub Learning Center",
    description: "Comprehensive guides covering essential home healthcare topics: in-home visits, equipment setup, family training, and progress monitoring for families.",
    type: "website",
    url: "https://homehealhub.com/topics",
    siteName: "HomeHealHub"
  },
  twitter: {
    card: "summary_large_image",
    title: "Home Healthcare Topics & Educational Guides | HomeHealHub Learning Center",
    description: "Comprehensive guides covering essential home healthcare topics: in-home visits, equipment setup, family training, and progress monitoring for families."
  },
  alternates: {
    canonical: "https://homehealhub.com/topics"
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function TopicsPage(): JSX.Element {
  // Structured Data for the Topics page
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Home Healthcare Topics & Educational Guides",
    "description": "Comprehensive educational resources covering essential home healthcare topics including in-home visits, equipment setup, family training, and progress monitoring.",
    "url": "https://homehealhub.com/topics",
    "educationalLevel": "General public",
    "learningResourceType": "Educational Guide Collection",
    "teaches": [
      "In-home healthcare services",
      "Medical equipment setup and safety",
      "Family caregiver training",
      "Patient progress monitoring",
      "Home healthcare coordination"
    ],
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
    "mainEntity": {
      "@type": "ItemList",
      "name": "Home Healthcare Topics",
      "description": "Core educational topics for home healthcare",
      "numberOfItems": 4,
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "item": {
            "@type": "Article",
            "name": "In-Home Visits",
            "description": "Comprehensive guide to professional healthcare services delivered in your home environment",
            "url": "https://homehealhub.com/topics/in-home-visits",
            "about": {
              "@type": "Thing",
              "name": "In-Home Healthcare Services"
            }
          }
        },
        {
          "@type": "ListItem",
          "position": 2,
          "item": {
            "@type": "Article",
            "name": "Equipment Setup",
            "description": "Essential information about medical equipment installation, safety requirements, and maintenance",
            "url": "https://homehealhub.com/topics/equipment-setup",
            "about": {
              "@type": "Thing",
              "name": "Medical Equipment Setup"
            }
          }
        },
        {
          "@type": "ListItem",
          "position": 3,
          "item": {
            "@type": "Article",
            "name": "Family Training",
            "description": "Training programs and resources to help family members participate effectively in home healthcare",
            "url": "https://homehealhub.com/topics/family-training",
            "about": {
              "@type": "Thing",
              "name": "Family Caregiver Training"
            }
          }
        },
        {
          "@type": "ListItem",
          "position": 4,
          "item": {
            "@type": "Article",
            "name": "Progress Monitoring",
            "description": "Tools and techniques for tracking patient progress and effective communication with providers",
            "url": "https://homehealhub.com/topics/progress-monitoring",
            "about": {
              "@type": "Thing",
              "name": "Patient Progress Monitoring"
            }
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
          "name": "Topics",
          "item": "https://homehealhub.com/topics"
        }
      ]
    },
    "about": [
      {
        "@type": "Thing",
        "name": "Home Healthcare Education",
        "description": "Comprehensive educational resources for families navigating home healthcare options"
      },
      {
        "@type": "Thing",
        "name": "Family Caregiving",
        "description": "Training and support for family members providing care to loved ones"
      },
      {
        "@type": "Thing",
        "name": "Medical Equipment Management",
        "description": "Setup, maintenance, and safety protocols for home medical equipment"
      },
      {
        "@type": "Thing",
        "name": "Healthcare Coordination",
        "description": "Communication and coordination between families and healthcare providers"
      }
    ],
    "audience": {
      "@type": "Audience",
      "audienceType": "Families and caregivers seeking home healthcare education"
    },
    "specialty": [
      "Home Healthcare Education",
      "Family Caregiver Training",
      "Medical Equipment Guidance",
      "Healthcare Communication"
    ],
    "inLanguage": "en-US",
    "isAccessibleForFree": true,
    "educationalCredentialAwarded": "None - Educational Resource"
  };

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* Main content component */}
      <TopicsLandingPage />
    </>
  );
}