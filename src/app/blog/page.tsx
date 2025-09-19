import { Metadata } from "next";
import BlogPage from "@/components/BlogPage";
import { JSX } from "react";

// SEO Metadata for the Blog page
export const metadata: Metadata = {
  title: "Home Healthcare Blog | Expert Insights & Care Guides | HomeHealHub",
  description: "Explore our comprehensive home healthcare blog featuring expert insights on equipment setup, family training, progress monitoring, and in-home care. Evidence-based articles to help families navigate home healthcare decisions.",
  keywords: [
    "home healthcare blog",
    "home care articles",
    "healthcare insights",
    "medical equipment guides",
    "family caregiver tips",
    "home health advice",
    "patient care blog",
    "healthcare education articles",
    "home care resources",
    "medical care at home"
  ],
  openGraph: {
    title: "Home Healthcare Blog | Expert Insights & Care Guides | HomeHealHub",
    description: "Explore comprehensive home healthcare articles featuring expert insights on equipment setup, family training, and patient care at home.",
    type: "website",
    url: "https://homehealhub.com/blog",
    siteName: "HomeHealHub"
  },
  twitter: {
    card: "summary_large_image",
    title: "Home Healthcare Blog | Expert Insights & Care Guides | HomeHealHub", 
    description: "Explore comprehensive home healthcare articles featuring expert insights on equipment setup, family training, and patient care at home."
  },
  alternates: {
    canonical: "https://homehealhub.com/blog"
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function Blog(): JSX.Element {
  // Structured Data for the Blog page
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "HomeHealHub Blog",
    "description": "Expert insights and comprehensive guides on home healthcare, featuring articles on equipment setup, family training, progress monitoring, and in-home care services.",
    "url": "https://homehealhub.com/blog",
    "inLanguage": "en-US",
    "publisher": {
      "@type": "Organization",
      "name": "HomeHealHub",
      "url": "https://homehealhub.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://homehealhub.com/logo.png"
      }
    },
    "mainEntity": {
      "@type": "ItemList",
      "name": "Home Healthcare Articles",
      "description": "Collection of evidence-based articles on home healthcare topics",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "item": {
            "@type": "Article",
            "headline": "Essential Equipment for Safe Home Healthcare",
            "description": "Comprehensive guide covering monitoring equipment, mobility aids, communication systems, and maintenance protocols",
            "author": {
              "@type": "Person",
              "name": "Dr. Sarah Johnson"
            },
            "publisher": {
              "@type": "Organization", 
              "name": "HomeHealHub"
            },
            "about": {
              "@type": "Thing",
              "name": "Medical Equipment"
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
          "name": "Blog",
          "item": "https://homehealhub.com/blog"
        }
      ]
    },
    "about": [
      {
        "@type": "Thing",
        "name": "Home Healthcare Equipment",
        "description": "Medical devices and equipment for home healthcare settings"
      },
      {
        "@type": "Thing",
        "name": "Family Caregiver Training",
        "description": "Education and resources for family members providing care"
      },
      {
        "@type": "Thing",
        "name": "Progress Monitoring",
        "description": "Tools and techniques for tracking patient health and recovery"
      },
      {
        "@type": "Thing",
        "name": "In-Home Care Services",
        "description": "Professional healthcare services delivered in home environments"
      }
    ],
    "audience": {
      "@type": "Audience",
      "audienceType": "Healthcare consumers, family caregivers, and home care seekers"
    },
    "specialty": [
      "Home Healthcare Education",
      "Medical Equipment Guidance", 
      "Family Caregiver Support",
      "Patient Care Resources"
    ],
    "isAccessibleForFree": true,
    "creator": {
      "@type": "Organization",
      "name": "HomeHealHub"
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
      <BlogPage />
    </>
  );
}