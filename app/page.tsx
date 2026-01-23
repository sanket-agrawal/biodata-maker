'use client';

import { useState } from 'react';
import { FileDown, Sparkles, Gift, Zap, Check } from 'lucide-react';

export default function Home() {
  const [selectedTemplate, setSelectedTemplate] = useState<number | null>(null);

  const templates = [
    { id: 1, name: 'Classic Elegance', color: 'from-purple-100 to-pink-100', free: true },
    { id: 2, name: 'Modern Minimal', color: 'from-blue-100 to-cyan-100', free: true },
    { id: 3, name: 'Royal Gold', color: 'from-amber-100 to-yellow-100', free: false },
  ];

  const features = [
    'Beautiful professional templates',
    'No signup required for free templates',
    'Download in PDF, PNG, or JPG',
    'WhatsApp-ready formats',
    'Print-quality output',
    'Mobile friendly'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-pink-600" />
            <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              BiodataMaker
            </h1>
          </div>
          <button className="px-4 py-2 bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all font-medium">
            Sign In
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-pink-100 rounded-full text-pink-700 text-sm font-medium mb-6">
            <Gift className="w-4 h-4" />
            Free templates available • No credit card required
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Create Beautiful Marriage
            <span className="block bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mt-2">
              Biodata in Minutes
            </span>
          </h2>
          
          <p className="text-lg sm:text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Choose from stunning templates, add your details, and download professional biodata in PDF, PNG, or JPG format. Perfect for Indian marriages.
          </p>

          <div className="flex gap-4 justify-center flex-wrap mb-12">
            <button 
              onClick={() => setSelectedTemplate(1)}
              className="px-8 py-4 bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-lg text-lg font-semibold hover:shadow-xl transition-all transform hover:scale-105"
            >
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5" />
                Start Creating Free
              </div>
            </button>
            <button className="px-8 py-4 border-2 border-gray-300 rounded-lg text-lg font-semibold hover:border-pink-600 hover:text-pink-600 transition-all">
              View Examples
            </button>
          </div>

          {/* Quick Features */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 max-w-2xl mx-auto text-sm">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2 text-gray-700">
                <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-white/50 rounded-3xl">
        <h3 className="text-3xl font-bold text-center mb-12">Why Choose BiodataMaker?</h3>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 rounded-xl hover:bg-white transition-all">
            <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Sparkles className="w-8 h-8 text-pink-600" />
            </div>
            <h4 className="text-xl font-bold mb-3">Beautiful Templates</h4>
            <p className="text-gray-600">Professional designs better than Canva, specially crafted for Indian marriage biodata with cultural sensitivity</p>
          </div>
          
          <div className="text-center p-6 rounded-xl hover:bg-white transition-all">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="w-8 h-8 text-purple-600" />
            </div>
            <h4 className="text-xl font-bold mb-3">Instant Download</h4>
            <p className="text-gray-600">Fill the form and download immediately. No waiting, no signup walls, no hidden charges for basic templates</p>
          </div>
          
          <div className="text-center p-6 rounded-xl hover:bg-white transition-all">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FileDown className="w-8 h-8 text-blue-600" />
            </div>
            <h4 className="text-xl font-bold mb-3">Multiple Formats</h4>
            <p className="text-gray-600">Download as high-quality PDF for printing or PNG/JPG for easy sharing on WhatsApp and social media</p>
          </div>
        </div>
      </section>

      {/* Templates Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="text-center mb-12">
          <h3 className="text-3xl lg:text-4xl font-bold mb-4">Choose Your Template</h3>
          <p className="text-gray-600 text-lg">Start with our free templates or unlock premium designs</p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {templates.map(template => (
            <div 
              key={template.id}
              onClick={() => setSelectedTemplate(template.id)}
              className="group cursor-pointer"
            >
              <div className={`relative aspect-[3/4] bg-gradient-to-br ${template.color} rounded-xl shadow-lg group-hover:shadow-2xl transition-all transform group-hover:scale-105 overflow-hidden`}>
                {!template.free && (
                  <div className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-yellow-400 to-yellow-600 text-white text-sm font-bold rounded-full shadow-lg">
                    Premium
                  </div>
                )}
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <div className="text-center w-full">
                    <div className="w-24 h-24 bg-white/70 rounded-full mx-auto mb-6 border-4 border-white/50"></div>
                    <div className="space-y-3">
                      <div className="h-4 bg-white/70 rounded-full"></div>
                      <div className="h-4 bg-white/70 rounded-full w-3/4 mx-auto"></div>
                      <div className="h-3 bg-white/50 rounded-full w-1/2 mx-auto mt-6"></div>
                      <div className="h-3 bg-white/50 rounded-full w-2/3 mx-auto"></div>
                      <div className="h-3 bg-white/50 rounded-full w-3/4 mx-auto"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4 text-center">
                <h4 className="text-lg font-semibold">{template.name}</h4>
                <p className="text-sm text-gray-600 mt-1">
                  {template.free ? (
                    <span className="text-green-600 font-medium">Free Forever</span>
                  ) : (
                    <span className="font-medium">₹49 one-time</span>
                  )}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-6 py-3 text-pink-600 font-semibold hover:text-pink-700 transition-all">
            View All Templates →
          </button>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-pink-600 to-purple-600 py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Ready to Create Your Perfect Biodata?
          </h3>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            Join thousands who've created beautiful marriage biodata with us
          </p>
          <button 
            onClick={() => setSelectedTemplate(1)}
            className="px-8 py-4 bg-white text-pink-600 rounded-lg text-lg font-bold hover:shadow-2xl transition-all transform hover:scale-105"
          >
            Get Started Now - It's Free
          </button>
          <p className="text-sm mt-4 opacity-75">No signup required • Download instantly</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 border-t py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-600 text-sm">
          <p>© 2025 BiodataMaker. Made with ❤️ for Indian families</p>
        </div>
      </footer>
    </div>
  );
}