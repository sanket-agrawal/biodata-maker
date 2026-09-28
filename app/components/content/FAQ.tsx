"use client";

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Script from 'next/script';

const faqs = [
  {
    question: "What is marriage biodata, and why is it important?",
    answer: "A marriage biodata is a document containing personal information, family background, education, and profession, among other essential details that are needed during the marriage negotiations. It assists families in knowing about the background of a person and is widely exchanged in the process of marriage proposals and meetings."
  },
  {
    question: "How do I create a marriage biodata online for free?",
    answer: "Using our free Biodata Maker, simply choose a template (3 free options available), fill in your personal and family details, preview your biodata in real-time, and download instantly in PDF, PNG, or JPG format. No registration or sign-up required."
  },
  {
    question: "Is this biodata maker really free?",
    answer: "Yes! We offer 3 completely free templates with full features including photo upload, PDF/image download, and WhatsApp sharing. Premium templates (12 designs) are available starting at just \u20B949 for those who want more ornate, traditional designs with gold borders and religious motifs."
  },
  {
    question: "What formats can I download my marriage biodata in?",
    answer: "You can download your biodata in three formats: PDF (best for printing and email), PNG (high-quality image, ideal for WhatsApp), and JPG (compressed image, great for sharing on social media). All downloads are high-resolution and print-ready."
  },
  {
    question: "Is my personal data safe and private?",
    answer: "Absolutely. Your biodata details are processed entirely in your browser and are never stored on our servers. We do not share, sell, or store any personal information. The only data we log (with your consent) is download analytics to improve our service."
  },
  {
    question: "Can I create a biodata in Marathi, Hindi, or other languages?",
    answer: "Yes! Our biodata maker supports multiple languages including English, Hindi, Marathi, Gujarati, Bengali, Tamil, and Telugu. You can switch languages anytime and all form labels, headers, and section titles will automatically translate."
  },
  {
    question: "What details should I include in my marriage biodata?",
    answer: "A complete marriage biodata typically includes: Full Name, Date of Birth, Height, Religion/Caste/Gotra, Rashi & Nakshatra, Education, Occupation & Salary, Father's and Mother's details, Siblings information, Contact details, and a recent photograph. Our form guides you through all these sections step by step."
  },
  {
    question: "Can I add a photo to my marriage biodata?",
    answer: "Yes! You can upload any photo and our built-in photo cropper lets you resize and adjust it perfectly for the biodata format (3:4 portrait ratio). The photo appears professionally placed in your chosen template design."
  },
  {
    question: "What is the difference between free and premium templates?",
    answer: "Free templates offer clean, professional designs perfect for everyday use. Premium templates (starting at \u20B949) feature ornate gold borders, religious motifs (Ganesha, Om, Radha-Krishna), luxury color schemes (black & gold, emerald, crimson), and more sophisticated typography \u2014 designed to make a strong first impression."
  },
  {
    question: "How do I pay for premium templates?",
    answer: "We use Razorpay, India\u2019s most trusted payment gateway. You can pay via UPI, credit/debit card, net banking, or wallets. Payment is a one-time fee per template \u2014 no subscriptions. Once paid, you get unlimited downloads of your biodata in all formats."
  },
  {
    question: "Can I edit my biodata after downloading?",
    answer: "Yes! Since all data stays in your browser during the session, you can go back, edit any field, and download again. For premium templates, once unlocked, you can download unlimited times during your session."
  },
  {
    question: "Do you offer refunds for premium templates?",
    answer: "Yes, we offer a 7-day money-back guarantee. If you're not satisfied with a premium template, contact us at support@biodatamaker.app within 7 days of purchase for a full refund. No questions asked."
  },
  {
    question: "Can I share my biodata on WhatsApp?",
    answer: "Absolutely! After downloading, our WhatsApp sharing modal lets you send your biodata summary directly to any WhatsApp contact or group. You can also copy the text summary to your clipboard for easy sharing."
  },
];

// Schema.org FAQ structured data for Google rich results
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
};

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <section className="py-16 bg-orange-50 mb-0" id="faq">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs font-bold text-orange-600 bg-orange-100 px-3.5 py-1.5 rounded-full uppercase tracking-wider">
              Got Questions?
            </span>
            <h2 className="text-3xl font-bold text-[#8B4513] mt-3 mb-2">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 text-sm">
              Everything you need to know about creating your marriage biodata
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl border transition-all duration-300 overflow-hidden ${
                  openIndex === index 
                    ? 'border-orange-300 shadow-md shadow-orange-100' 
                    : 'border-orange-100 shadow-sm hover:border-orange-200'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <h3 className={`font-bold text-sm sm:text-base pr-4 transition ${
                    openIndex === index ? 'text-[#C05621]' : 'text-gray-900'
                  }`}>
                    {faq.question}
                  </h3>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition ${
                    openIndex === index 
                      ? 'bg-orange-100 text-orange-600' 
                      : 'bg-gray-100 text-gray-500'
                  }`}>
                    {openIndex === index ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </div>
                </button>
                
                <div className={`transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                } overflow-hidden`}>
                  <p className="px-5 pb-5 text-gray-700 text-sm leading-relaxed border-t border-orange-50 pt-4">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}