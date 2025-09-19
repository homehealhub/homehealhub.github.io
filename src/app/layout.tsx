import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

// Comprehensive SEO Metadata for the root layout
export const metadata: Metadata = {
  title: {
    default: "HomeHealHub | Your Gateway to Quality Home Healthcare Information",
    template: "%s | HomeHealHub"
  },
  description: "HomeHealHub provides educational resources and information about in-home healthcare services, helping families understand their options and connect with quality care providers.",
  keywords: [
    "home healthcare",
    "in-home care",
    "healthcare at home",
    "home health services",
    "family caregiving",
    "medical equipment",
    "home healthcare providers",
    "patient care",
    "healthcare education",
    "home health information"
  ],
  authors: [{ name: "HomeHealHub" }],
  creator: "HomeHealHub",
  publisher: "HomeHealHub",
  
  // Open Graph tags for social media
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://homehealhub.com",
    siteName: "HomeHealHub",
    title: "HomeHealHub | Your Gateway to Quality Home Healthcare Information",
    description: "Educational resources and information about in-home healthcare services, helping families understand their options and connect with quality care providers.",
    images: [
      {
        url: "https://homehealhub.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "HomeHealHub - Home Healthcare Education and Resources"
      }
    ]
  },
  
  // Twitter Card tags
  twitter: {
    card: "summary_large_image",
    title: "HomeHealHub | Your Gateway to Quality Home Healthcare Information",
    description: "Educational resources and information about in-home healthcare services, helping families understand their options and connect with quality care providers.",
    images: ["https://homehealhub.com/twitter-image.jpg"],
    creator: "@homehealhub"
  },
  
  // Robots directives
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  
  // Verification tags (add actual values when available)
  verification: {
    google: "google-site-verification-code",
    yandex: "yandex-verification-code",
    other: {
      "msvalidate.01": "bing-site-verification-code"
    }
  },
  
  // Category for the website
  category: "Healthcare",
  
  // Classification
  classification: "Healthcare Education",
  
  // Additional metadata
  applicationName: "HomeHealHub",
  referrer: "origin-when-cross-origin",
  
  // Manifest for PWA
  manifest: "/site.webmanifest",
  
  // Alternate languages (if multilingual support is added)
  alternates: {
    canonical: "https://homehealhub.com",
    languages: {
      "en-US": "https://homehealhub.com"
    }
  },
  
  // Additional meta tags
  other: {
    "theme-color": "#4ECDC4",
    "color-scheme": "light",
    "format-detection": "telephone=no"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Additional structured data for the organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "HomeHealHub",
              "description": "Educational resources and information about in-home healthcare services, helping families understand their options and connect with quality care providers.",
              "url": "https://homehealhub.com",
              "logo": {
                "@type": "ImageObject",
                "url": "https://homehealhub.com/logo.png",
                "width": 200,
                "height": 60
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "Customer Service",
                "email": "homehealhub@gmail.com"
              },
              "sameAs": [
                "https://facebook.com/homehealhub",
                "https://twitter.com/homehealhub",
                "https://linkedin.com/company/homehealhub"
              ],
              "foundingDate": "2024",
              "knowsAbout": [
                "Home Healthcare",
                "In-Home Medical Care",
                "Family Caregiving",
                "Medical Equipment",
                "Healthcare Education",
                "Patient Care"
              ],
              "areaServed": {
                "@type": "Country",
                "name": "United States"
              },
              "serviceType": "Healthcare Information Services"
            })
          }}
        />
        
        {/* Website structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "HomeHealHub",
              "description": "Educational resources and information about in-home healthcare services",
              "url": "https://homehealhub.com",
              "inLanguage": "en-US",
              "copyrightYear": "2024",
              "copyrightHolder": {
                "@type": "Organization",
                "name": "HomeHealHub"
              },
              "about": {
                "@type": "Thing",
                "name": "Home Healthcare Education",
                "description": "Comprehensive educational resources for families navigating home healthcare options"
              },
              "audience": {
                "@type": "Audience",
                "audienceType": "Families seeking home healthcare information"
              },
              "potentialAction": {
                "@type": "SearchAction",
                "target": {
                  "@type": "EntryPoint",
                  "urlTemplate": "https://homehealhub.com/search?q={search_term_string}"
                },
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
        
        {/* DNS prefetch for external domains */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        
        {/* Preconnect for critical external resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased" itemScope itemType="https://schema.org/WebPage">
        {/* Skip to main content for accessibility */}
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 bg-[#4ECDC4] text-white p-2 z-50"
        >
          Skip to main content
        </a>
        
        {/* Main content wrapper */}
        <div id="main-content">
          {children}
        </div>
        
        {/* Google Analytics using Next.js Script component */}
        {process.env.NODE_ENV === 'production' && (
          <>
            <Script
              src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'GA_MEASUREMENT_ID', {
                  page_title: document.title,
                  page_location: window.location.href,
                });
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}