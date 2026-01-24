'use client';

import { useState } from 'react';
import { FileDown, Sparkles, Gift, Zap, Check } from 'lucide-react';
import { templates } from './data/templates';
import { features } from './data/features';
import HeroSection from './components/home/HeroSection';
import FeatureSection from './components/home/FeatureSection';
import TemplateSection from './components/home/TemplateSection';
import CTASection from './components/home/CTASection';

export default function Home() {
  const [selectedTemplate, setSelectedTemplate] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      {/* Header */}


      {/* Hero Section */}
       <HeroSection onStart={()=> setSelectedTemplate(1)}/>

      {/* Features */}
       <FeatureSection/>

      {/* Templates Preview */}
      <TemplateSection
       selectedTemplate={selectedTemplate}
        onSelectTemplate={setSelectedTemplate}
      />

      {/* CTA */}
       <CTASection onStart={() => setSelectedTemplate(1)} />
    </div>
  );
}