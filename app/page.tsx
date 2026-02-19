'use client';

import { useState } from 'react';
import HeroSection from './components/home/HeroSection';
import FeatureSection from './components/home/FeatureSection';
import TemplateSection from './components/home/TemplateSection';
import CTASection from './components/home/CTASection';

export default function Home() {
  const scrollToTemplates = () => {
    const element = document.getElementById('templates');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      {/* Hero Section */}
       <HeroSection onStart={scrollToTemplates}/>

      {/* Features */}
       <FeatureSection/>

      {/* Templates List */}
      <TemplateSection />

      {/* CTA */}
       <CTASection onStart={scrollToTemplates} />
    </div>
  );
}
