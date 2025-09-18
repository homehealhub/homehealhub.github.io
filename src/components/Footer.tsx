import React from 'react';
import { Separator } from '@/components/ui/separator';
import { Heart } from 'lucide-react';
import { JSX } from "react";

export default function Footer(): JSX.Element {
  return (
    <footer className="bg-[#343A40] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="flex items-center justify-center w-8 h-8 bg-[#4ECDC4] rounded-lg">
                <Heart className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-xl font-semibold">HomeHealHub</h3>
            </div>
            <p className="text-gray-300 text-base leading-relaxed max-w-md">
              Empowering families with educational resources and information about
              in-home healthcare services.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="/topics" className="hover:text-[#4ECDC4] transition-colors">Topics</a></li>
              <li><a href="/blog" className="hover:text-[#4ECDC4] transition-colors">Blog</a></li>
              <li><a href="/resources" className="hover:text-[#4ECDC4] transition-colors">Resources</a></li>
              <li><a href="/about" className="hover:text-[#4ECDC4] transition-colors">About</a></li>
              <li><a href="mailto:homehealhub@gmail.com" className="hover:text-[#4ECDC4] transition-colors">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a 
                  href="https://www.luminousrehab.com/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-[#4ECDC4] transition-colors"
                >
                  Luminous Rehab
                </a>
              </li>
            </ul>
          </div>
        </div>
        <Separator className="my-8 bg-gray-600" />
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-300 text-sm">
          <p>&copy; 2025 HomeHealHub. All rights reserved.</p>
          <p>Educational content for informational purposes only.</p>
        </div>
      </div>
    </footer>
  );
}