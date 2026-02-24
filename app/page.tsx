'use client';

import HeroSection from './components/home/HeroSection';
import TemplateSection from './components/home/TemplateSection';
import WhatItDoes from './components/content/WhatItDoes';
import TargetAudience from './components/content/TargetAudience';
import CommunityTemplates from './components/content/CommunityTemplates';
import BiodataFormat from './components/content/BiodataFormat';
import WhyChooseUs from './components/content/WhyChooseUs';
import Tips from './components/content/Tips';
import FAQ from './components/content/FAQ';
import Testimonials from './components/content/Testimonials';
import FinalCTA from './components/content/FinalCTA';

export default function Home() {
  const scrollToTemplates = () => {
    const element = document.getElementById('templates');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      <HeroSection onStart={scrollToTemplates}/>
      <TemplateSection />
      <WhatItDoes />
      <TargetAudience />
      <CommunityTemplates />
      <BiodataFormat />
      <WhyChooseUs />
      <Tips />
      <FAQ />
      <Testimonials />
      <FinalCTA />
    </div>
  );
}
