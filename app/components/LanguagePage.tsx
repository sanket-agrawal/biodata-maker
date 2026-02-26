'use client';

import Link from 'next/link';
import { CheckCircle2, Star } from 'lucide-react';
import { templates } from '@/app/data/templates';
import GenericTemplate from './templates/GenericTemplate';
import { defaultBiodataForm } from '@/app/types/biodata';
import { LanguagePageData } from '@/app/data/languagePages';

const dummyData = {
  ...defaultBiodataForm,
  name: "Aditi Sharma",
  dateOfBirth: "15/08/1998",
  occupation: "Software Engineer",
  education: "B.Tech (CS)",
  placeOfBirth: "Mumbai, MH",
  fatherName: "Rajesh Sharma",
  motherName: "Priya Sharma",
  height: "5'6\"",
};

const testimonials = [
  {
    initials: "RS", name: "Rahul Sharma", location: "Noida", rating: 5,
    text: "इस वेबसाइट ने काम बहुत आसान कर दिया! मैंने सिर्फ 5 मिनट में अपना बायोडाटा तैयार किया और Image, PDF and Word फॉर्मेट में मिल गया। बहुत बढ़िया!",
    bgColor: "bg-yellow-100", textColor: "text-yellow-700",
  },
  {
    initials: "SK", name: "Sneha Kulkarni", location: "Mumbai", rating: 5,
    text: "I created my marriage biodata in English within minutes using this free biodata maker. The templates are clean and easy to use. I would definitely recommend it.",
    bgColor: "bg-orange-100", textColor: "text-orange-700",
  },
  {
    initials: "SD", name: "Sunita Deshmukh", location: "Nagpur", rating: 5,
    text: "Very easy to use biodata maker. I got my marriage biodata ready in PDF and Word formats without any trouble.",
    bgColor: "bg-yellow-100", textColor: "text-yellow-700",
  },
  {
    initials: "VS", name: "Vikram Sharma", location: "Patna", rating: 5,
    text: "I created a marriage biodata for my daughter using this biodata maker. The Word format made it easy to make changes. Simple and helpful.",
    bgColor: "bg-orange-100", textColor: "text-orange-700",
  },
];

export default function LanguagePage({ data }: { data: LanguagePageData }) {
  const scrollToTemplates = () => {
    document.getElementById('templates')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#FFF8F0] to-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold text-[#8B4513] leading-tight mb-6">
              {data.heroTitle}
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              {data.heroDescription}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/create"
                className="px-8 py-3 bg-[#C05621] text-white font-semibold rounded-lg hover:bg-[#9C4215] transition-colors text-lg shadow-sm"
              >
                {data.ctaText}
              </Link>
              <button
                onClick={scrollToTemplates}
                className="px-8 py-3 bg-white text-[#C05621] border-2 border-[#C05621] font-semibold rounded-lg hover:bg-orange-50 transition-colors text-lg"
              >
                {data.viewTemplatesText}
              </button>
            </div>
          </div>

          <div className="mt-16 bg-[#FFFBEB] border border-[#FEF3C7] rounded-xl p-8 shadow-sm">
            <div className="grid md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-[#FEF3C7]">
              <div className="px-4">
                <p className="text-sm text-gray-500 uppercase tracking-wide font-medium mb-1">{data.featureBar.noRegistration}</p>
                <p className="text-xl font-bold text-[#92400E]">{data.featureBar.noRegistrationSub}</p>
              </div>
              <div className="px-4 pt-4 md:pt-0">
                <p className="text-sm text-gray-500 uppercase tracking-wide font-medium mb-1">{data.featureBar.templates}</p>
                <p className="text-xl font-bold text-[#92400E]">{data.featureBar.templatesSub}</p>
              </div>
              <div className="px-4 pt-4 md:pt-0">
                <p className="text-sm text-gray-500 uppercase tracking-wide font-medium mb-1">{data.featureBar.download}</p>
                <p className="text-xl font-bold text-[#92400E]">{data.featureBar.downloadSub}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Template Section */}
      <section id="templates" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 bg-gray-50">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-[#1a202c]">
            {data.templateSection.title}
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            {data.templateSection.subtitle}
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {templates.map((template) => (
            <div key={template.id} className="group flex flex-col items-center">
              <Link href={`/create/${template.id}`} className="w-full">
                <div className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col h-full relative">
                  <div className="relative aspect-[1/1.414] bg-gray-100 overflow-hidden group-hover:scale-105 transition-transform duration-500">
                    <div className="absolute inset-0 flex items-start justify-center pt-0 overflow-hidden pointer-events-none select-none">
                      <div className="origin-top transform scale-[0.4] sm:scale-[0.35] w-[794px] h-[1123px] bg-white shadow-sm">
                        <GenericTemplate data={dummyData} config={template.config} />
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100 z-20">
                      <span className="bg-white text-gray-900 px-6 py-2 rounded-full font-semibold shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all">
                        Use Template
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
              <h3 className="mt-4 font-medium text-gray-900 text-center">{template.name}</h3>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link
            href="/templates"
            className="inline-block px-8 py-3 bg-[#C05621] text-white font-semibold rounded-lg hover:bg-[#9C4215] transition-colors"
          >
            {data.templateSection.viewAll}
          </Link>
        </div>
      </section>

      {/* What It Does */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#8B4513] mb-6">{data.whatItDoes.title}</h2>
          <div className="prose prose-lg text-gray-700">
            {data.whatItDoes.paragraphs.map((p, i) => (
              <p key={i} className={i > 0 ? 'mt-4' : ''}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-16 bg-orange-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#8B4513] mb-6">{data.targetAudience.title}</h2>
          <p className="text-lg text-gray-700 mb-6">{data.targetAudience.intro}</p>
          <ul className="space-y-3 list-disc list-inside text-gray-700 text-lg ml-4">
            {data.targetAudience.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
          <p className="mt-6 text-gray-700">{data.targetAudience.outro}</p>
        </div>
      </section>

      {/* Community Templates */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#8B4513] mb-6">{data.communityTemplates.title}</h2>
          <p className="text-lg text-gray-700 mb-8">{data.communityTemplates.description}</p>
        </div>
      </section>

      {/* Biodata Format */}
      <section className="py-16 bg-orange-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#8B4513] mb-8">{data.biodataFormat.title}</h2>
          <p className="text-lg text-gray-700 mb-8">{data.biodataFormat.description}</p>
          <div className="space-y-8">
            {data.biodataFormat.sections.map((section, i) => (
              <div key={i} className="border-l-4 border-yellow-400 pl-6 py-2 bg-white rounded-r-lg shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{section.title}</h3>
                <p className="text-gray-700">{section.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#8B4513] mb-8">{data.whyChooseUs.title}</h2>
          <p className="text-lg text-gray-700 mb-8">{data.whyChooseUs.description}</p>
          <div className="grid md:grid-cols-2 gap-4">
            {data.whyChooseUs.features.map((feature, i) => (
              <div key={i} className="flex items-start gap-3 p-3 rounded-lg hover:bg-orange-50 transition-colors">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tips */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#8B4513] mb-4">{data.tips.title}</h2>
          <p className="text-lg text-gray-700 mb-12">{data.tips.description}</p>
          <div className="space-y-12">
            <div>
              <h3 className="text-xl font-bold text-green-800 bg-green-50 px-4 py-2 rounded-t-lg inline-block mb-4">
                {data.tips.dosTitle}
              </h3>
              <ul className="grid md:grid-cols-2 gap-4 bg-green-50/30 p-6 rounded-lg border border-green-100">
                {data.tips.dos.map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-700">
                    <span className="w-2 h-2 bg-green-500 rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-red-800 bg-red-50 px-4 py-2 rounded-t-lg inline-block mb-4">
                {data.tips.dontsTitle}
              </h3>
              <ul className="grid md:grid-cols-2 gap-4 bg-red-50/30 p-6 rounded-lg border border-red-100">
                {data.tips.donts.map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-700">
                    <span className="w-2 h-2 bg-red-500 rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-orange-50 mb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#8B4513] mb-8">{data.faq.title}</h2>
          <div className="space-y-8">
            {data.faq.items.map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-orange-100">
                <h3 className="text-xl font-bold text-[#C05621] mb-3">{item.question}</h3>
                <p className="text-gray-700 leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#8B4513] mb-4">{data.testimonials.title}</h2>
            <p className="text-gray-600 mb-2">{data.testimonials.subtitle}</p>
            <div className="flex justify-center items-center gap-2 text-sm text-gray-600 font-medium">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <span>5.0 out of 5 (1129 reviews)</span>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((t, index) => (
              <div key={index} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${t.bgColor} ${t.textColor}`}>
                    {t.initials}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">{t.name}</h4>
                    <p className="text-xs text-gray-500">{t.location}</p>
                  </div>
                </div>
                <div className="flex text-yellow-400 mb-3">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{t.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#C05621] rounded-lg p-8 md:p-12 text-center shadow-lg">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{data.finalCta.title}</h2>
            <p className="text-white/90 text-lg mb-8 max-w-3xl mx-auto leading-relaxed">{data.finalCta.description}</p>
            <Link
              href="/create"
              className="inline-block bg-white text-[#C05621] font-bold py-3 px-8 rounded-md hover:bg-orange-50 transition-colors shadow-sm"
            >
              {data.finalCta.buttonText}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
