"use client";

import { useState } from "react";
import { templates } from "@/app/data/templates";
import GenericTemplate from "../components/templates/GenericTemplate";
import { defaultBiodataForm } from "@/app/types/biodata";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Crown, TrendingUp, Star, ShieldCheck } from "lucide-react";

export default function TemplatesPage() {
  const [filter, setFilter] = useState<'all' | 'free' | 'premium'>('all');

  const filteredTemplates = templates.filter(t => {
    if (filter === 'free') return t.free;
    if (filter === 'premium') return !t.free;
    return true;
  });

  // Sample candidate data
  const candidates = [
    {
      ...defaultBiodataForm,
      biodataTitle: 'BIODATA',
      godName: '|| Shree Ganeshay Namah ||',
      name: "Saurabh Kumar Singh",
      dateOfBirth: "04/05/1997",
      placeOfBirth: "Delhi, India",
      height: "5 feet 9 inches",
      caste: "Brahmin",
      gotra: "Mittal",
      education: "MD from Amity University",
      occupation: "Marketing Manager - Zomato",
      fatherName: "Dr. SD Kumar Singh",
      fatherOccupation: "Retired Maths Professor",
      motherName: "Smt. Madhu Singh",
      motherOccupation: "Homemaker",
      contactPerson: "Sh. Deepak Kumar Singh",
      contactNumber: "+91 9876543210",
      email: "deepak.kumar@example.com",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    },
    {
      ...defaultBiodataForm,
      biodataTitle: 'BIODATA',
      godName: '|| Shree Ganeshay Namah ||',
      name: "Mahima Jain Aggarwal",
      dateOfBirth: "05 November 1995",
      placeOfBirth: "New Delhi",
      height: "5 feet 5 inches",
      religious: "Hindu",
      rashi: "Tula (Libra)",
      nakshatra: "Swati",
      complexion: "Fair",
      education: "Delhi University, 2018 (B.COM Hons)",
      occupation: "Senior Consultant, KPMG",
      fatherName: "Sh. Deepak Gupta",
      fatherOccupation: "Business (Steel Trading)",
      motherName: "Smt. Madhu Gupta",
      motherOccupation: "Homemaker",
      brothers: "1 Brother (Unmarried)",
      contactPerson: "Sh. Deepak Gupta",
      contactNumber: "+91 9811223344",
      photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
    },
    {
      ...defaultBiodataForm,
      biodataTitle: 'BIODATA',
      godName: '|| Shree Ganeshay Namah ||',
      name: "Rakesh Gupta",
      dateOfBirth: "20 November 1994",
      timeOfBirth: "07:20 PM",
      placeOfBirth: "New Delhi",
      rashi: "Tula (Libra)",
      nakshatra: "Ashwini",
      complexion: "Fair",
      height: "5 feet 9 inches",
      gotra: "Bansal",
      education: "Delhi University, 2016 (B.COM Hons)",
      occupation: "Senior Consultant, BCG",
      fatherName: "Sh. Deepak Gupta",
      fatherOccupation: "Business (Motor Parts Trading)",
      motherName: "Smt. Madhu Gupta",
      motherOccupation: "Homemaker",
      brothers: "1 Brother (Unmarried)",
      contactPerson: "Sh. Deepak Gupta",
      contactNumber: "+91 9811223344",
      address: "M-Block, Greater Kailash, New Delhi",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    },
    {
      ...defaultBiodataForm,
      biodataTitle: 'BIODATA',
      godName: '|| Shree Ganeshay Namah ||',
      name: "Aditi Sharma",
      dateOfBirth: "15/08/1998",
      placeOfBirth: "Mumbai, MH",
      height: "5' 6\"",
      religious: "Hindu",
      caste: "Brahmin",
      education: "B.Tech (Computer Science)",
      occupation: "Software Engineer",
      fatherName: "Rajesh Sharma",
      motherName: "Priya Sharma",
      contactPerson: "Rajesh Sharma",
      contactNumber: "+91 9988776655",
      photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50/60 via-amber-50/20 to-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Title & Headline */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-bold text-orange-600 bg-orange-100 px-3.5 py-1.5 rounded-full uppercase tracking-wider">
            15+ HD MARRIAGE TEMPLATES
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-3 mb-3">
            Choose Your Marriage Biodata Template
          </h1>
          <p className="text-gray-600 text-sm sm:text-base">
            Select from 3 100% Free templates or 12 Ultra-Premium designs with golden borders, Ganesha motifs, and instant PDF/WhatsApp download.
          </p>
          {/* Pricing Banner */}
          <div className="mt-4 inline-flex items-center gap-2 bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-full px-5 py-2">
            <TrendingUp className="w-4 h-4 text-emerald-600" />
            <span className="text-sm text-gray-700">
              Premium from <span className="line-through text-gray-400 font-medium">{'\u20B9'}199</span>{' '}
              <span className="font-extrabold text-orange-600">{'\u20B9'}49</span>
            </span>
            <span className="text-[10px] bg-red-500 text-white px-1.5 py-0.5 rounded font-bold">SALE</span>
          </div>
        </div>

        {/* Filter Tab Bar */}
        <div className="flex justify-center items-center gap-2 mb-12">
          <button
            onClick={() => setFilter('all')}
            className={`px-5 py-2.5 rounded-xl text-xs font-bold transition ${
              filter === 'all'
                ? 'bg-orange-600 text-white shadow-md shadow-orange-200'
                : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
            }`}
          >
            All Templates ({templates.length})
          </button>
          <button
            onClick={() => setFilter('free')}
            className={`px-5 py-2.5 rounded-xl text-xs font-bold transition ${
              filter === 'free'
                ? 'bg-emerald-600 text-white shadow-md shadow-emerald-200'
                : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
            }`}
          >
            Free Templates (3)
          </button>
          <button
            onClick={() => setFilter('premium')}
            className={`px-5 py-2.5 rounded-xl text-xs font-bold transition ${
              filter === 'premium'
                ? 'bg-amber-600 text-white shadow-md shadow-amber-200'
                : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
            }`}
          >
            Premium Designs (12)
          </button>
        </div>

        {/* Template Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredTemplates.map((template, index) => {
            const candidateData = candidates[index % candidates.length];
            const discount = template.originalPrice && template.price 
              ? Math.round(((template.originalPrice - template.price) / template.originalPrice) * 100)
              : 0;

            return (
              <div
                key={template.id}
                className="bg-white border border-orange-100 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col justify-between group hover:-translate-y-1"
              >
                {/* Real Document Preview Frame */}
                <div className="relative aspect-[1/1.414] bg-gray-50 overflow-hidden">
                  
                  {/* Free / Paid Price Tag Badge */}
                  <div className="absolute top-3 left-3 z-20">
                    {template.free ? (
                      <span className="bg-emerald-600 text-white text-[11px] font-extrabold px-3 py-1 rounded-full shadow flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3" /> FREE
                      </span>
                    ) : (
                      <div className="flex flex-col gap-1">
                        <span className="bg-amber-500 text-white text-[11px] font-extrabold px-3 py-1 rounded-full shadow flex items-center gap-1">
                          <Crown className="w-3 h-3 text-yellow-200" /> {'\u20B9'}{template.price}
                        </span>
                        {template.originalPrice && (
                          <span className="text-[10px] text-gray-500 line-through bg-white/90 px-2 py-0.5 rounded-full text-center">
                            {'\u20B9'}{template.originalPrice}
                          </span>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Discount Badge */}
                  {discount > 0 && (
                    <div className="absolute top-3 right-3 z-20 bg-red-500 text-white text-[10px] font-black px-2 py-0.5 rounded-full shadow-lg">
                      {discount}% OFF
                    </div>
                  )}

                  {/* Render Actual Scaled A4 Template Document */}
                  <div className="absolute inset-0 flex items-start justify-center overflow-hidden pointer-events-none select-none">
                    <div className="transform scale-[0.38] origin-top w-[794px] h-[1123px] bg-white shadow-sm">
                      <GenericTemplate data={candidateData} config={template.config} />
                    </div>
                  </div>

                  {/* Hover Overlay CTA */}
                  <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] transition-opacity duration-300 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 z-30 p-4">
                    <Link
                      href={`/create/${template.id}`}
                      className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2.5 rounded-xl font-bold text-sm shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 flex items-center gap-2"
                    >
                      <span>Create Biodata</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>

                {/* Card Title & Information */}
                <div className="p-4 bg-white border-t border-gray-100 flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-gray-900 text-base group-hover:text-orange-600 transition">
                      {template.name}
                    </h3>
                    <p className="text-xs text-gray-500 mt-0.5 font-medium line-clamp-1">
                      {template.tagline}
                    </p>
                  </div>

                  <Link
                    href={`/create/${template.id}`}
                    className="px-4 py-2 bg-orange-50 hover:bg-orange-100 text-orange-700 text-xs font-bold rounded-lg transition border border-orange-200 shrink-0 ml-2"
                  >
                    Select
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Trust Strip */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-6 text-xs text-gray-500 bg-gray-50 rounded-2xl px-6 py-4 border border-gray-100">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <span>Secure Razorpay Payments</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-blue-500" />
              <span>7-Day Money-Back Guarantee</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Star className="w-4 h-4 text-yellow-500 fill-current" />
              <span>4.9/5 from 2,847 reviews</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}