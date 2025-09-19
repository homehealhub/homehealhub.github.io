"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Heart, Menu, X } from 'lucide-react';
import { JSX } from "react";

interface HeaderProps {
  currentPage?: string;
}

// Structured Data for Website Navigation
const navigationStructuredData = {
  "@context": "https://schema.org",
  "@type": "SiteNavigationElement",
  "name": "Main Navigation",
  "url": "https://homehealhub.com",
  "hasPart": [
    {
      "@type": "WebPage",
      "name": "Home Healthcare Topics",
      "url": "https://homehealhub.com/topics",
      "description": "Educational guides on in-home visits, equipment setup, family training, and progress monitoring"
    },
    {
      "@type": "WebPage", 
      "name": "Healthcare Blog",
      "url": "https://homehealhub.com/blog",
      "description": "Latest articles and insights on home healthcare practices and family caregiving"
    },
    {
      "@type": "WebPage",
      "name": "Healthcare Resources",
      "url": "https://homehealhub.com/resources", 
      "description": "Directory of trusted home healthcare providers and support organizations"
    },
    {
      "@type": "WebPage",
      "name": "About HomeHealHub",
      "url": "https://homehealhub.com/about",
      "description": "Learn about our mission to provide educational resources for home healthcare"
    }
  ]
};

export default function Header({ currentPage = 'home' }: HeaderProps): JSX.Element {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { 
      href: '/', 
      label: 'Home', 
      key: 'home',
      description: 'HomeHealHub homepage with healthcare topic overview'
    },
    { 
      href: '/topics', 
      label: 'Topics', 
      key: 'topics',
      description: 'Comprehensive guides on home healthcare topics'
    },
    { 
      href: '/blog', 
      label: 'Blog', 
      key: 'blog',
      description: 'Latest articles on home healthcare and family caregiving'
    },
    { 
      href: '/resources', 
      label: 'Resources', 
      key: 'resources',
      description: 'Directory of healthcare providers and support services'
    },
    { 
      href: '/about', 
      label: 'About', 
      key: 'about',
      description: 'Learn about HomeHealHub mission and editorial standards'
    }
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Navigation Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(navigationStructuredData) }}
      />

      <header 
        className="bg-white shadow-sm border-b border-[#E5E7EB] sticky top-0 z-50" 
        role="banner"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo and Brand */}
            <div className="flex items-center space-x-3">
              <a 
                href="/" 
                className="flex items-center space-x-3 group"
                aria-label="HomeHealHub - Home healthcare education and resources"
              >
                <div className="flex items-center justify-center w-10 h-10 bg-[#4ECDC4] rounded-lg group-hover:bg-[#3DB5AC] transition-colors">
                  <Heart className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <div>
                  <h1 className="text-xl font-semibold text-[#343A40] group-hover:text-[#4ECDC4] transition-colors">
                    HomeHealHub
                  </h1>
                </div>
              </a>
            </div>

            {/* Desktop Navigation */}
            <nav 
              className="hidden md:flex items-center space-x-8" 
              role="navigation"
              aria-label="Main navigation"
            >
              {navItems.map((item) => (
                <a
                  key={item.key}
                  href={item.href}
                  className={`font-medium transition-colors ${
                    currentPage === item.key
                      ? 'text-[#4ECDC4] border-b-2 border-[#4ECDC4] pb-1'
                      : 'text-[#6C757D] hover:text-[#4ECDC4] focus:text-[#4ECDC4]'
                  }`}
                  aria-label={item.description}
                  {...(currentPage === item.key && { 'aria-current': 'page' })}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <Button 
              variant="outline" 
              className="md:hidden"
              onClick={toggleMobileMenu}
              aria-label={isMobileMenuOpen ? "Close mobile menu" : "Open mobile menu"}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" aria-hidden="true" />
              ) : (
                <Menu className="h-5 w-5" aria-hidden="true" />
              )}
            </Button>
          </div>

          {/* Mobile Navigation Menu */}
          {isMobileMenuOpen && (
            <nav 
              id="mobile-menu"
              className="md:hidden py-4 border-t border-[#E5E7EB] bg-white"
              role="navigation"
              aria-label="Mobile navigation"
            >
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <a
                    key={item.key}
                    href={item.href}
                    className={`font-medium transition-colors px-2 py-2 rounded-md ${
                      currentPage === item.key
                        ? 'text-[#4ECDC4] bg-[#4ECDC4]/5'
                        : 'text-[#6C757D] hover:text-[#4ECDC4] hover:bg-[#4ECDC4]/5 focus:text-[#4ECDC4]'
                    }`}
                    onClick={closeMobileMenu}
                    aria-label={item.description}
                    {...(currentPage === item.key && { 'aria-current': 'page' })}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </nav>
          )}
        </div>

        {/* Skip Navigation Link for Accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-[#4ECDC4] text-white px-4 py-2 rounded-md z-50 focus:z-60"
        >
          Skip to main content
        </a>
      </header>
    </>
  );
}