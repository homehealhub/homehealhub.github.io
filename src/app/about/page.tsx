import { Metadata } from "next";
import AboutPage from "@/components/AboutPage";
import { JSX } from "react";

// SEO Metadata for the About page
export const metadata: Metadata = {
  title: "About HomeHealHub | Our Mission & Healthcare Education Standards",
  description: "Learn about HomeHealHub's mission to provide evidence-based home healthcare education. Discover our editorial standards, content review process, and commitment to helping families navigate home care options safely.",
  keywords: [
    "about HomeHealHub",
    "home healthcare education",
    "medical content standards",
    "healthcare editorial process",
    "evidence-based healthcare",
    "home care mission",
    "healthcare content review",
    "medical education standards",
    "home healthcare expertise",
    "healthcare information quality"
  ],
  openGraph: {
    title: "About HomeHealHub | Our Mission & Healthcare Education Standards",
    description: "Learn about HomeHealHub's mission to provide evidence-based home healthcare education and our commitment to helping families navigate home care options.",
    type: "website",
    url: "https://homehealhub.com/about",
    siteName: "HomeHealHub"
  },
  twitter: {
    card: "summary_large_image",
    title: "About HomeHealHub | Our Mission & Healthcare Education Standards",
    description: "Learn about HomeHealHub's mission to provide evidence-based home healthcare education and our commitment to helping families navigate home care options."
  },
  alternates: {
    canonical: "https://homehealhub.com/about"
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function About(): JSX.Element {
  // Structured Data for the About page
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About HomeHealHub",
    "description": "Learn about HomeHealHub's mission to provide evidence-based home healthcare education and our commitment to helping families navigate home care options safely.",
    "url": "https://homehealhub.com/about",
    "mainEntity": {
      "@type": "Organization",
      "name": "HomeHealHub",
      "description": "Educational platform providing evidence-based resources for home healthcare",
      "url": "https://homehealhub.com",
      "foundingDate": "2024",
      "mission": "HomeHealHub provides educational resources and information about in-home healthcare services, helping families understand their options and connect with quality care providers.",
      "knowsAbout": [
        "Home Healthcare Services",
        "Medical Equipment Setup",
        "Family Caregiver Training",
        "Progress Monitoring",
        "Healthcare Provider Resources",
        "Evidence-Based Healthcare"
      ],
      "areaServed": {
        "@type": "Country",
        "name": "United States"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "Customer Service",
        "email": "homehealhub@gmail.com"
      },
      "publishingPrinciples": {
        "@type": "CreativeWork",
        "name": "Editorial Standards and Review Process",
        "description": "Comprehensive 3-step editorial process ensuring content accuracy and medical review"
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
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "About",
          "item": "https://homehealhub.com/about"
        }
      ]
    },
    "about": [
      {
        "@type": "Thing",
        "name": "Healthcare Education Standards",
        "description": "Evidence-based content creation and medical review processes"
      },
      {
        "@type": "Thing",
        "name": "Editorial Integrity",
        "description": "Comprehensive review process for healthcare information accuracy"
      },
      {
        "@type": "Thing",
        "name": "Content Sourcing",
        "description": "Professional healthcare expertise and authoritative medical sources"
      }
    ],
    "specialty": [
      "Healthcare Content Development",
      "Medical Information Review",
      "Evidence-Based Education",
      "Home Healthcare Expertise"
    ],
    "inLanguage": "en-US",
    "isAccessibleForFree": true,
    "audience": {
      "@type": "Audience",
      "audienceType": "Healthcare consumers and family caregivers"
    },
    "creator": {
      "@type": "Organization",
      "name": "HomeHealHub",
      "description": "Healthcare education organization focused on home care resources"
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
      <AboutPage />
    </>
  );
}