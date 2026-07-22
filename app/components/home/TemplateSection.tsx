"use client";

import { templates } from "@/app/data/templates";
import GenericTemplate from "../templates/GenericTemplate";
import { defaultBiodataForm } from "@/app/types/biodata";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function TemplateSection() {
  // Sample realistic candidate profiles for template preview showcase
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
      languages: "Hindi, English",
      hobbies: "Photography, Politics, Fitness",
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
    <section id="templates" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 bg-gradient-to-b from-orange-50/50 via-amber-50/20 to-white">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <span className="text-xs font-bold text-orange-600 bg-orange-100 px-3.5 py-1.5 rounded-full uppercase tracking-wider">
          Handcrafted Designs
        </span>
        <h2 className="text-3xl lg:text-4xl font-extrabold mb-3 text-gray-900 mt-3">
          Beautifully Handcrafted Marriage Biodata Templates
        </h2>
        <p className="text-gray-600 text-base">
          Choose your favorite design, add your details, and download instant high-resolution PDF or image.
        </p>
      </div>

      {/* Grid of Realistic Full Biodata Previews (Matching Image 4) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {templates.slice(0, 6).map((template, index) => {
          const candidateData = candidates[index % candidates.length];
          return (
            <div key={template.id} className="group flex flex-col items-center">
              <Link href={`/create/${template.id}`} className="w-full">
                <div className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden border border-orange-100 flex flex-col relative group-hover:-translate-y-1">
                  
                  {/* Full Document Aspect Container */}
                  <div className="relative aspect-[1/1.414] bg-gray-50 overflow-hidden">
                    
                    {/* Render Real Full Document Preview */}
                    <div className="absolute inset-0 flex items-start justify-center overflow-hidden pointer-events-none select-none">
                      <div className="transform scale-[0.38] origin-top w-[794px] h-[1123px] bg-white shadow-sm">
                        <GenericTemplate data={candidateData} config={template.config} />
                      </div>
                    </div>

                    {/* Hover CTA Overlay */}
                    <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] transition-opacity duration-300 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 z-30 p-4">
                      <span className="bg-orange-600 text-white px-6 py-2.5 rounded-xl font-bold text-sm shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 flex items-center gap-2">
                        <span>Use This Template</span>
                        <ArrowRight className="w-4 h-4" />
                      </span>
                      <p className="text-xs text-white/90 mt-2 font-medium">
                        {template.free ? 'Free Download' : `Premium Template – ₹${template.price}`}
                      </p>
                    </div>
                  </div>

                  {/* Card Title & Tagline */}
                  <div className="p-4 bg-white border-t border-gray-100 flex items-center justify-between">
                    <div>
                      <h3 className="font-bold text-gray-900 text-base group-hover:text-orange-600 transition">
                        {template.name}
                      </h3>
                      <p className="text-xs text-gray-500 mt-0.5 font-medium">
                        {template.config.borderStyle.replace('-', ' ')} border
                      </p>
                    </div>

                    {template.free ? (
                      <span className="text-xs font-extrabold text-emerald-700 bg-emerald-100 px-2.5 py-1 rounded-full">
                        FREE
                      </span>
                    ) : (
                      <span className="text-xs font-extrabold text-amber-800 bg-amber-100 px-2.5 py-1 rounded-full">
                        ₹{template.price}
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>

      {/* View All Button */}
      <div className="mt-14 text-center">
        <Link
          href="/templates"
          className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-bold rounded-xl shadow-lg shadow-orange-200 transition transform hover:scale-105"
        >
          <span>View All 15+ Templates</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}
