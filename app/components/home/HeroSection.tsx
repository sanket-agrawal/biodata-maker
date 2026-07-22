"use client";

import Link from 'next/link';
import GenericTemplate from '../templates/GenericTemplate';
import { defaultBiodataForm } from '@/app/types/biodata';
import { templates } from '@/app/data/templates';
import { Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';

interface Props {
  onStart?: () => void;
}

export default function HeroSection({ onStart }: Props) {
  // Candidate dummy data for hero preview cards
  const candidate1 = {
    ...defaultBiodataForm,
    biodataTitle: 'BIODATA',
    godName: '|| Shree Ganeshay Namah ||',
    name: 'Mahima Jain Aggarwal',
    dateOfBirth: '05 Nov 1995',
    placeOfBirth: 'New Delhi',
    height: "5' 5\"",
    religious: 'Hindu',
    caste: 'Jain / Aggarwal',
    rashi: 'Tula',
    education: 'Delhi Univ (B.COM Hons)',
    occupation: 'Senior Consultant, KPMG',
    fatherName: 'Sh. Deepak Gupta',
    motherName: 'Smt. Madhu Gupta',
    contactNumber: '+91 9876543210',
    photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
  };

  const candidate2 = {
    ...defaultBiodataForm,
    biodataTitle: 'BIODATA',
    godName: '|| Shree Ganeshay Namah ||',
    name: 'Rakesh Gupta',
    dateOfBirth: '20 Nov 1994',
    placeOfBirth: 'New Delhi',
    rashi: 'Tula',
    height: "5' 9\"",
    education: 'B.Com (Hons), Delhi Univ',
    occupation: 'Senior Consultant, BCG',
    fatherName: 'Sh. Deepak Gupta',
    motherName: 'Smt. Madhu Gupta',
    contactNumber: '+91 9811223344',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
  };

  const candidate3 = {
    ...defaultBiodataForm,
    biodataTitle: 'BIODATA',
    godName: '|| Shree Ganeshay Namah ||',
    name: 'Saurabh Dutt',
    dateOfBirth: '20 Nov 1995',
    placeOfBirth: 'New Delhi',
    height: "5' 10\"",
    education: 'B.Tech (CS)',
    occupation: 'Software Engineer',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
  };

  const t1 = templates.find(t => t.id === 4) || templates[0];
  const t2 = templates.find(t => t.id === 1) || templates[1];
  const t3 = templates.find(t => t.id === 10) || templates[2];

  return (
    <section className="relative bg-gradient-to-br from-[#FFF8F0] via-orange-50/40 to-white py-16 lg:py-20 border-b border-orange-100/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Text Content */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-orange-700 bg-orange-100/80 px-3.5 py-1.5 rounded-full uppercase tracking-wider border border-orange-200">
              <Sparkles className="w-3.5 h-3.5 text-orange-600" />
              <span>Free Online Marriage Biodata Maker</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#8B4513] leading-[1.15] tracking-tight">
              The Ultimate <br className="hidden sm:inline" />
              Marriage Biodata Maker
            </h1>

            <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-xl">
              Create bio data for marriage online for free. Use Biodata Maker to make biodata for marriage and download in PDF, Word or Image format in minutes. No registration needed.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                href="/create"
                className="px-8 py-3.5 bg-[#C05621] hover:bg-[#9C4215] text-white font-bold text-base rounded-xl shadow-lg shadow-orange-200 transition transform hover:-translate-y-0.5"
              >
                Create Biodata
              </Link>
              <button
                onClick={onStart}
                className="px-8 py-3.5 bg-white text-[#C05621] border-2 border-[#C05621] font-bold text-base rounded-xl hover:bg-orange-50 transition"
              >
                View Templates
              </button>
            </div>

            {/* Live Count Counter */}
            <div className="pt-1 flex items-center gap-2 text-xs font-semibold text-emerald-700">
              <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-ping"></span>
              <span>14 biodatas created today • Instant Download</span>
            </div>
          </div>

          {/* Right Visual Showcase (Cleanly Framed & Contained with 0 Overflow) */}
          <div className="lg:col-span-6 relative flex justify-center items-center h-[420px] sm:h-[480px]">
            <div className="relative w-full max-w-md h-full flex items-center justify-center">
              
              {/* Back Left Tilted Card */}
              <div className="absolute left-2 top-8 w-[210px] sm:w-[230px] aspect-[1/1.414] bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden transform -rotate-6 transition duration-300 hover:rotate-0 z-10">
                <div className="absolute inset-0 flex items-start justify-center overflow-hidden pointer-events-none select-none">
                  <div className="transform scale-[0.29] origin-top-left w-[794px] h-[1123px]">
                    <GenericTemplate data={candidate1} config={t1.config} />
                  </div>
                </div>
              </div>

              {/* Front Center Featured Card */}
              <div className="absolute z-30 w-[230px] sm:w-[250px] aspect-[1/1.414] bg-white rounded-xl shadow-2xl border-2 border-amber-300 overflow-hidden transform rotate-1 transition duration-300 hover:rotate-0 hover:scale-105">
                <div className="absolute inset-0 flex items-start justify-center overflow-hidden pointer-events-none select-none">
                  <div className="transform scale-[0.31] origin-top-left w-[794px] h-[1123px]">
                    <GenericTemplate data={candidate2} config={t2.config} />
                  </div>
                </div>
              </div>

              {/* Back Right Tilted Card */}
              <div className="absolute right-2 top-12 w-[200px] sm:w-[220px] aspect-[1/1.414] bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden transform rotate-6 transition duration-300 hover:rotate-0 z-20">
                <div className="absolute inset-0 flex items-start justify-center overflow-hidden pointer-events-none select-none">
                  <div className="transform scale-[0.28] origin-top-left w-[794px] h-[1123px]">
                    <GenericTemplate data={candidate3} config={t3.config} />
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
