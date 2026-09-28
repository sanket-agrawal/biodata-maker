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
import TrustBadges from './components/ui/TrustBadges';
import ExitIntentPopup from './components/ui/ExitIntentPopup';
import StickyMobileCTA from './components/ui/StickyMobileCTA';

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
      <TrustBadges />
      <TemplateSection />
      <WhatItDoes />
      <TargetAudience />
      <CommunityTemplates />
      <BiodataFormat />
      <WhyChooseUs />
      <Tips />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <ExitIntentPopup />
      <StickyMobileCTA />
    </div>
  );
}