import React from 'react';
import Header from './Header';
import Footer from './Footer';

interface PageTemplateProps {
  children: React.ReactNode;
  currentPage?: string;
  className?: string;
}

export default function PageTemplate({ 
  children, 
  currentPage = 'home',
  className = ''
}: PageTemplateProps): JSX.Element {
  return (
    <div className={`min-h-screen bg-white ${className}`}>
      <Header currentPage={currentPage} />
      
      <main className="flex-1">
        {children}
      </main>
      
      <Footer />
    </div>
  );
}