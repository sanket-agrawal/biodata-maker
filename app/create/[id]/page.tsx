'use client';

import { use, useState } from 'react';
import { templates } from '@/app/data/templates';
import { BiodataForm, defaultBiodataForm } from '@/app/types/biodata';
import ClassicEleganceTemplate from '@/app/components/templates/ClassicEleganceTemplate';
import { Download, Upload, FileText, Image as ImageIcon, Loader2, ChevronDown, ChevronUp } from 'lucide-react';
import { generatePDF, generateImage } from '@/app/utils/pdfGenerator';

type PageProps = {
  params: Promise<{ id: string }>;
};

export default function CreatePage({ params }: PageProps) {
  const { id } = use(params);
  const template = templates.find(t => t.id === Number(id));
  const [form, setForm] = useState<BiodataForm>(defaultBiodataForm);
  const [isDownloading, setIsDownloading] = useState(false);
  const [showDownloadMenu, setShowDownloadMenu] = useState(false);
  const [expandedSections, setExpandedSections] = useState({
    personal: true,
    family: true,
    contact: true,
    optional: false
  });

  const updateForm = (field: keyof BiodataForm, value: string) => {
    setForm(prev => ({ ...prev, [field]: value }));
  };

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        updateForm('photo', reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDownloadPDF = async () => {
    try {
      setIsDownloading(true);
      setShowDownloadMenu(false);
      const filename = `${form.name.replace(/\s+/g, '_') || 'biodata'}_biodata.pdf`;
      await generatePDF('biodata-template', filename);
    } catch (error) {
      alert('Error generating PDF. Please try again.');
      console.error(error);
    } finally {
      setIsDownloading(false);
    }
  };

  const handleDownloadPNG = async () => {
    try {
      setIsDownloading(true);
      setShowDownloadMenu(false);
      const filename = `${form.name.replace(/\s+/g, '_') || 'biodata'}_biodata.png`;
      await generateImage('biodata-template', 'png', filename);
    } catch (error) {
      alert('Error generating PNG. Please try again.');
      console.error(error);
    } finally {
      setIsDownloading(false);
    }
  };

  const handleDownloadJPG = async () => {
    try {
      setIsDownloading(true);
      setShowDownloadMenu(false);
      const filename = `${form.name.replace(/\s+/g, '_') || 'biodata'}_biodata.jpg`;
      await generateImage('biodata-template', 'jpg', filename);
    } catch (error) {
      alert('Error generating JPG. Please try again.');
      console.error(error);
    } finally {
      setIsDownloading(false);
    }
  };

  if (!template) return <div className="p-8">Invalid template</div>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50">
      {/* Header */}
      <div className="bg-white border-b shadow-sm sticky top-0 z-20">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Create Your Biodata</h1>
            <p className="text-sm text-gray-600 mt-1">Fill in your details and download</p>
          </div>
          
          {/* Download Button */}
          <div className="relative">
            <button
              onClick={() => setShowDownloadMenu(!showDownloadMenu)}
              disabled={isDownloading}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition disabled:opacity-50 disabled:cursor-not-allowed font-semibold"
            >
              {isDownloading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Generating...
                </>
              ) : (
                <>
                  <Download className="w-5 h-5" />
                  Download
                </>
              )}
            </button>

            {showDownloadMenu && !isDownloading && (
              <>
                <div 
                  className="fixed inset-0 z-10" 
                  onClick={() => setShowDownloadMenu(false)}
                />
                <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-2xl border border-gray-200 z-20 overflow-hidden">
                  <button
                    onClick={handleDownloadPDF}
                    className="w-full px-4 py-3 text-left hover:bg-pink-50 transition flex items-center gap-3 border-b"
                  >
                    <FileText className="w-5 h-5 text-red-600" />
                    <div>
                      <div className="font-semibold text-sm">PDF Document</div>
                      <div className="text-xs text-gray-500">Best for printing</div>
                    </div>
                  </button>
                  
                  <button
                    onClick={handleDownloadPNG}
                    className="w-full px-4 py-3 text-left hover:bg-pink-50 transition flex items-center gap-3 border-b"
                  >
                    <ImageIcon className="w-5 h-5 text-blue-600" />
                    <div>
                      <div className="font-semibold text-sm">PNG Image</div>
                      <div className="text-xs text-gray-500">High quality, transparent</div>
                    </div>
                  </button>
                  
                  <button
                    onClick={handleDownloadJPG}
                    className="w-full px-4 py-3 text-left hover:bg-pink-50 transition flex items-center gap-3"
                  >
                    <ImageIcon className="w-5 h-5 text-green-600" />
                    <div>
                      <div className="font-semibold text-sm">JPG Image</div>
                      <div className="text-xs text-gray-500">WhatsApp ready</div>
                    </div>
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-5 gap-6">
          {/* Left - Form (3 columns) */}
          <div className="lg:col-span-3 space-y-4">
            {/* Photo Upload Card */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <Upload className="w-5 h-5 text-pink-600" />
                Upload Photo
              </h3>
              <div className="flex items-center gap-4">
                {form.photo && (
                  <img src={form.photo} alt="Preview" className="w-24 h-24 object-cover rounded-lg border-2 border-pink-200" />
                )}
                <label className="cursor-pointer px-6 py-3 bg-gradient-to-r from-pink-100 to-purple-100 text-pink-700 rounded-lg hover:shadow-md transition flex items-center gap-2 font-semibold">
                  <Upload className="w-4 h-4" />
                  {form.photo ? 'Change Photo' : 'Choose Photo'}
                  <input type="file" accept="image/*" onChange={handlePhotoUpload} className="hidden" />
                </label>
              </div>
            </div>

            {/* Personal Details Card */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <button
                onClick={() => toggleSection('personal')}
                className="w-full px-6 py-4 flex items-center justify-between bg-gradient-to-r from-pink-50 to-purple-50 hover:from-pink-100 hover:to-purple-100 transition"
              >
                <h3 className="text-lg font-bold text-pink-700">Personal Details</h3>
                {expandedSections.personal ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
              </button>
              
              {expandedSections.personal && (
                <div className="p-6 space-y-4">
                  <input
                    type="text"
                    placeholder="Full Name *"
                    value={form.name}
                    onChange={e => updateForm('name', e.target.value)}
                    className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Date of Birth (DD/MM/YYYY)"
                      value={form.dateOfBirth}
                      onChange={e => updateForm('dateOfBirth', e.target.value)}
                      className="border-2 border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    />
                    <input
                      type="text"
                      placeholder="Place of Birth"
                      value={form.placeOfBirth}
                      onChange={e => updateForm('placeOfBirth', e.target.value)}
                      className="border-2 border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Height (e.g., 5 feet 10 inches)"
                      value={form.height}
                      onChange={e => updateForm('height', e.target.value)}
                      className="border-2 border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    />
                    <input
                      type="text"
                      placeholder="Caste"
                      value={form.caste}
                      onChange={e => updateForm('caste', e.target.value)}
                      className="border-2 border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="Gotra"
                    value={form.gotra}
                    onChange={e => updateForm('gotra', e.target.value)}
                    className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  />
                  <input
                    type="text"
                    placeholder="Education (e.g., B.Tech in Computer Science)"
                    value={form.education}
                    onChange={e => updateForm('education', e.target.value)}
                    className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  />
                  <input
                    type="text"
                    placeholder="Occupation"
                    value={form.occupation}
                    onChange={e => updateForm('occupation', e.target.value)}
                    className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  />
                  <input
                    type="text"
                    placeholder="Languages (e.g., Hindi, English, Marathi)"
                    value={form.languages}
                    onChange={e => updateForm('languages', e.target.value)}
                    className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  />
                  <input
                    type="text"
                    placeholder="Hobbies"
                    value={form.hobbies}
                    onChange={e => updateForm('hobbies', e.target.value)}
                    className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  />
                </div>
              )}
            </div>

            {/* Family Details Card */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <button
                onClick={() => toggleSection('family')}
                className="w-full px-6 py-4 flex items-center justify-between bg-gradient-to-r from-pink-50 to-purple-50 hover:from-pink-100 hover:to-purple-100 transition"
              >
                <h3 className="text-lg font-bold text-pink-700">Family Details</h3>
                {expandedSections.family ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
              </button>
              
              {expandedSections.family && (
                <div className="p-6 space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Father's Name"
                      value={form.fatherName}
                      onChange={e => updateForm('fatherName', e.target.value)}
                      className="border-2 border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    />
                    <input
                      type="text"
                      placeholder="Father's Occupation"
                      value={form.fatherOccupation}
                      onChange={e => updateForm('fatherOccupation', e.target.value)}
                      className="border-2 border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Mother's Name"
                      value={form.motherName}
                      onChange={e => updateForm('motherName', e.target.value)}
                      className="border-2 border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    />
                    <input
                      type="text"
                      placeholder="Mother's Occupation"
                      value={form.motherOccupation}
                      onChange={e => updateForm('motherOccupation', e.target.value)}
                      className="border-2 border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    />
                  </div>
                  
                  {/* Optional Family Members */}
                  <div className="border-t-2 border-gray-100 pt-4 mt-4">
                    <button
                      onClick={() => toggleSection('optional')}
                      className="text-sm text-pink-600 hover:text-pink-700 font-semibold flex items-center gap-1"
                    >
                      {expandedSections.optional ? '- Hide' : '+ Add'} more family members (optional)
                    </button>
                    
                    {expandedSections.optional && (
                      <div className="space-y-4 mt-4">
                        <div className="grid grid-cols-2 gap-4">
                          <input
                            type="text"
                            placeholder="Grandfather's Name"
                            value={form.grandfatherName}
                            onChange={e => updateForm('grandfatherName', e.target.value)}
                            className="border-2 border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                          />
                          <input
                            type="text"
                            placeholder="Grandfather's Occupation"
                            value={form.grandfatherOccupation}
                            onChange={e => updateForm('grandfatherOccupation', e.target.value)}
                            className="border-2 border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <input
                            type="text"
                            placeholder="Uncle's Name"
                            value={form.uncleName}
                            onChange={e => updateForm('uncleName', e.target.value)}
                            className="border-2 border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                          />
                          <input
                            type="text"
                            placeholder="Uncle's Occupation"
                            value={form.uncleOccupation}
                            onChange={e => updateForm('uncleOccupation', e.target.value)}
                            className="border-2 border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <input
                            type="text"
                            placeholder="Elder Brother's Name"
                            value={form.elderBrotherName}
                            onChange={e => updateForm('elderBrotherName', e.target.value)}
                            className="border-2 border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                          />
                          <input
                            type="text"
                            placeholder="Elder Brother's Occupation"
                            value={form.elderBrotherOccupation}
                            onChange={e => updateForm('elderBrotherOccupation', e.target.value)}
                            className="border-2 border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <input
                            type="text"
                            placeholder="Younger Brother's Name"
                            value={form.youngerBrotherName}
                            onChange={e => updateForm('youngerBrotherName', e.target.value)}
                            className="border-2 border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                          />
                          <input
                            type="text"
                            placeholder="Younger Brother's Occupation"
                            value={form.youngerBrotherOccupation}
                            onChange={e => updateForm('youngerBrotherOccupation', e.target.value)}
                            className="border-2 border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Contact Details Card */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <button
                onClick={() => toggleSection('contact')}
                className="w-full px-6 py-4 flex items-center justify-between bg-gradient-to-r from-pink-50 to-purple-50 hover:from-pink-100 hover:to-purple-100 transition"
              >
                <h3 className="text-lg font-bold text-pink-700">Contact Details</h3>
                {expandedSections.contact ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
              </button>
              
              {expandedSections.contact && (
                <div className="p-6 space-y-4">
                  <input
                    type="text"
                    placeholder="Contact Person Name"
                    value={form.contactPerson}
                    onChange={e => updateForm('contactPerson', e.target.value)}
                    className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  />
                  <input
                    type="text"
                    placeholder="Contact Number"
                    value={form.contactNumber}
                    onChange={e => updateForm('contactNumber', e.target.value)}
                    className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    value={form.email}
                    onChange={e => updateForm('email', e.target.value)}
                    className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  />
                </div>
              )}
            </div>
          </div>

          {/* Right - Live Preview (2 columns) */}
          <div className="lg:col-span-2">
            <div className="sticky top-24">
              <div className="bg-white rounded-xl shadow-xl p-4">
                <div className="bg-gray-50 rounded-lg p-2 border-2 border-gray-200">
                  <div className="overflow-auto" style={{ maxHeight: '700px' }}>
                    <div style={{ 
                      transform: 'scale(0.4)', 
                      transformOrigin: 'top left',
                      width: '250%'
                    }}>
                      <ClassicEleganceTemplate data={form} />
                    </div>
                  </div>
                </div>
                <p className="text-xs text-gray-500 text-center mt-3">
                  ✨ Live Preview - Changes appear instantly
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hidden template for PDF generation */}
      <div style={{ position: 'fixed', left: '-9999px', top: 0 }}>
        <ClassicEleganceTemplate data={form} />
      </div>
    </div>
  );
}