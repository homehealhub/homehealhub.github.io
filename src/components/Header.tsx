import React from 'react';
import { Button } from '@/components/ui/button';
import { Heart, Menu } from 'lucide-react';
import { JSX } from "react";

interface HeaderProps {
  currentPage?: string;
}

export default function Header({ currentPage = 'home' }: HeaderProps): JSX.Element {
  const navItems = [
    { href: '/', label: 'Home', key: 'home' },
    { href: '/topics', label: 'Topics', key: 'topics' },
    { href: '/blog', label: 'Blog', key: 'blog' },
    { href: '/resources', label: 'Resources', key: 'resources' },
    { href: '/about', label: 'About', key: 'about' }
  ];

  return (
    <header className="bg-white shadow-sm border-b border-[#E5E7EB] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-3">
            <div className="flex items-center justify-center w-10 h-10 bg-[#4ECDC4] rounded-lg">
              <Heart className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-semibold text-[#343A40]">HomeHealHub</h1>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a 
                key={item.key}
                href={item.href} 
                className={`font-medium transition-colors ${
                  currentPage === item.key 
                    ? 'text-[#4ECDC4]' 
                    : 'text-[#6C757D] hover:text-[#4ECDC4]'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>
          
          <Button variant="outline" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
}