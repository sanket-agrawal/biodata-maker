'use client';

import { useState } from 'react';
import { FileDown, Sparkles, Gift, Zap, Check } from 'lucide-react';
import { templates } from './data/templates';
import { features } from './data/features';
import HeroSection from './components/home/HeroSection';
import FeatureSection from './components/home/FeatureSection';
import TemplateSection from './components/home/TemplateSection';
import CTASection from './components/home/CTASection';
import { BiodataForm } from './types/biodata';
import TemplatePreview from './components/home/TemplatePreview';

export default function Home() {
  const [selectedTemplate, setSelectedTemplate] = useState<number | null>(null);

    const biodata: BiodataForm = {
    name: "Sanket Agrawal",
    dateOfBirth: "22/07/1997",
    placeOfBirth: "Dondaicha, Dhule",
    occupation: "Software Engineer",
    education: "B.Tech",
    fatherName: "Shri. Sanjay Agrawal",
    motherName: "Mamta",
    contactNumber: "+91 XXXXX XXXXX",
  };


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

      <TemplatePreview
        selectedTemplate={selectedTemplate}
        data={biodata}
      />


      {/* CTA */}
       <CTASection onStart={() => setSelectedTemplate(1)} />
    </div>
  );
}