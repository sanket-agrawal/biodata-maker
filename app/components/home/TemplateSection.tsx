"use client";

import { templates } from "@/app/data/templates";
import GenericTemplate from "../templates/GenericTemplate";
import { defaultBiodataForm } from "@/app/types/biodata";
import Link from "next/link";

export default function TemplateSection() {
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

  return (
    <section id="templates" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 bg-gray-50">
      <div className="text-center mb-12">
        <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900">
          Choose Your Perfect Template
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Select from our collection of {templates.length} beautiful templates. 
          Both free and premium options available.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {templates.map((template) => (
          <Link href={`/create/${template.id}`} key={template.id} className="group">
            <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col h-full">
              {/* Preview Container */}
              <div className="relative aspect-[1/1.414] bg-gray-100 overflow-hidden group-hover:scale-105 transition-transform duration-500">
                {!template.free && (
                  <div className="absolute top-3 right-3 z-10 px-3 py-1 bg-gradient-to-r from-yellow-400 to-yellow-600 text-white text-xs font-bold rounded-full shadow-lg">
                    Premium
                  </div>
                )}
                
                {/* Scaled Preview - Centered and Scaled */}
                <div className="absolute inset-0 flex items-start justify-center pt-0 overflow-hidden pointer-events-none select-none">
                  <div className="origin-top transform scale-[0.4] sm:scale-[0.35] w-[794px] h-[1123px] bg-white shadow-sm">
                     <GenericTemplate data={dummyData} config={template.config} />
                  </div>
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100 z-20">
                  <span className="bg-white text-gray-900 px-6 py-2 rounded-full font-semibold shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all">
                    Use Template
                  </span>
                </div>
              </div>

              {/* Footer */}
              <div className="p-4 border-t flex items-center justify-between mt-auto bg-white z-10 relative">
                <div>
                  <h3 className="font-semibold text-gray-900 truncate pr-2" title={template.name}>
                    {template.name}
                  </h3>
                  <p className="text-xs text-gray-500 capitalize">{template.config.layout} Style</p>
                </div>
                {/* Price removed as requested */}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
