"use client";

import React from 'react';
import { usePathname } from 'next/navigation';
import Header from './Header';
import Footer from './Footer';
import { JSX } from "react";

interface PageTemplateProps {
  children: React.ReactNode;
  currentPage?: string;
  className?: string;
  // SEO Props (for metadata API in layout.tsx or page.tsx)
  additionalMeta?: React.ReactNode;
}

export default function PageTemplate({
  children,
  currentPage = 'home',
  className = '',
  additionalMeta
}: PageTemplateProps): JSX.Element {
  
  // Generate structured data for current page
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://homehealhub.com';
  
  // Default organization structured data
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "HomeHealHub",
    "url": baseUrl,
    "description": "Educational resources and information about in-home healthcare services",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "email": "contact@homehealhub.com"
    }
  };

  return (
    <>
      {/* Additional meta tags can be passed in */}
      {additionalMeta}
      
      {/* Default structured data for all pages */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema)
        }}
      />
      
      <div className={`min-h-screen bg-white ${className}`}>
        {/* Skip to main content for accessibility */}
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-teal-600 text-white px-4 py-2 rounded-md z-50"
        >
          Skip to main content
        </a>
        
        <Header currentPage={currentPage} />
        
        <main 
          id="main-content"
          className="flex-1"
          role="main"
          aria-label="Main content"
        >
          {children}
        </main>
        
        <Footer />
      </div>
    </>
  );
}