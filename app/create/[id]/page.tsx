'use client';

import { use, useState, useEffect } from 'react';
import { templates } from '@/app/data/templates';
import { BiodataForm, defaultBiodataForm } from '@/app/types/biodata';
import GenericTemplate from '@/app/components/templates/GenericTemplate';
import { Download, Upload, FileText, Image as ImageIcon, Loader2, ChevronDown, ChevronUp, Lock } from 'lucide-react';
import { generatePDF, generateImage } from '@/app/utils/pdfGenerator';
import Script from 'next/script';
import { useLanguage } from '@/app/context/LanguageContext';

type PageProps = {
  params: Promise<{ id: string }>;
};

declare global {
  interface Window {
    Razorpay: any;
  }
}

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
  const [isPaid, setIsPaid] = useState(false);
  const { t } = useLanguage();

  // If template is free, mark as paid automatically
  useEffect(() => {
    if (template?.free) {
      setIsPaid(true);
    }
  }, [template]);

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

  const handlePayment = async () => {
    if (!template) return;

    setIsDownloading(true);
    try {
      const response = await fetch('/api/create-order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ amount: template.price }),
      });

      const order = await response.json();

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || 'rzp_test_1234567890', // Fallback for dev
        amount: order.amount,
        currency: order.currency,
        name: 'Biodata Maker',
        description: `Payment for ${template.name}`,
        order_id: order.id,
        handler: function (response: any) {
          // Verify payment on backend ideally, but for now trust frontend
          setIsPaid(true);
          alert('Payment Successful! You can now download your biodata.');
        },
        prefill: {
          name: form.name,
          email: form.email,
          contact: form.contactNumber,
        },
        theme: {
          color: '#db2777',
        },
      };

      const rzp1 = new window.Razorpay(options);
      rzp1.open();
    } catch (error) {
      console.error('Payment failed', error);
      // For development/demo without keys, simulate success
      if (confirm('Razorpay keys missing or error. Simulate success?')) {
         setIsPaid(true);
      }
    } finally {
      setIsDownloading(false);
    }
  };

  const handleDownload = async (format: 'pdf' | 'png' | 'jpg') => {
    if (!isPaid) {
      await handlePayment();
      return;
    }

    try {
      setIsDownloading(true);
      setShowDownloadMenu(false);
      const filename = `${form.name.replace(/\s+/g, '_') || 'biodata'}_biodata.${format}`;
      
      if (format === 'pdf') {
        await generatePDF('biodata-template', filename);
      } else {
        await generateImage('biodata-template', format, filename);
      }
    } catch (error) {
      alert(`Error generating ${format.toUpperCase()}. Please try again.`);
      console.error(error);
    } finally {
      setIsDownloading(false);
    }
  };

  if (!template) return <div className="p-8">Invalid template</div>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50">
      <Script src="https://checkout.razorpay.com/v1/checkout.js" />
      
      {/* Header */}
      <div className="bg-white border-b shadow-sm sticky top-0 z-20">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-xl md:text-2xl font-bold text-gray-900">Create Your Biodata</h1>
            <p className="text-sm text-gray-600 mt-1">
              Template: <span className="font-semibold text-pink-600">{template.name}</span>
              {!template.free && !isPaid && (
                <span className="ml-2 px-2 py-0.5 bg-yellow-100 text-yellow-800 text-xs rounded-full border border-yellow-200">
                  ₹{template.price}
                </span>
              )}
            </p>
          </div>
          
          {/* Download Button */}
          <div className="relative">
            {!isPaid ? (
               <button
                onClick={handlePayment}
                disabled={isDownloading}
                className="flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 bg-gradient-to-r from-yellow-500 to-amber-600 text-white rounded-lg hover:shadow-lg transition disabled:opacity-50 font-semibold"
              >
                {isDownloading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Lock className="w-4 h-4" />}
                <span>Pay ₹{template.price} to Download</span>
              </button>
            ) : (
              <button
                onClick={() => setShowDownloadMenu(!showDownloadMenu)}
                disabled={isDownloading}
                className="flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition disabled:opacity-50 disabled:cursor-not-allowed font-semibold"
              >
                {isDownloading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span className="hidden md:inline">Generating...</span>
                  </>
                ) : (
                  <>
                    <Download className="w-5 h-5" />
                    <span>Download</span>
                  </>
                )}
              </button>
            )}

            {showDownloadMenu && !isDownloading && (
              <>
                <div 
                  className="fixed inset-0 z-10" 
                  onClick={() => setShowDownloadMenu(false)}
                />
                <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-2xl border border-gray-200 z-20 overflow-hidden">
                  <button
                    onClick={() => handleDownload('pdf')}
                    className="w-full px-4 py-3 text-left hover:bg-pink-50 transition flex items-center gap-3 border-b"
                  >
                    <FileText className="w-5 h-5 text-red-600" />
                    <div>
                      <div className="font-semibold text-sm">PDF Document</div>
                      <div className="text-xs text-gray-500">Best for printing</div>
                    </div>
                  </button>
                  
                  <button
                    onClick={() => handleDownload('png')}
                    className="w-full px-4 py-3 text-left hover:bg-pink-50 transition flex items-center gap-3 border-b"
                  >
                    <ImageIcon className="w-5 h-5 text-blue-600" />
                    <div>
                      <div className="font-semibold text-sm">PNG Image</div>
                      <div className="text-xs text-gray-500">High quality, transparent</div>
                    </div>
                  </button>
                  
                  <button
                    onClick={() => handleDownload('jpg')}
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
          <div className="lg:col-span-3 space-y-4 order-2 lg:order-1">
            {/* Photo Upload Card */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <Upload className="w-5 h-5 text-pink-600" />
                {t.form.uploadPhoto}
              </h3>
              <div className="flex items-center gap-4">
                {form.photo && (
                  <img src={form.photo} alt="Preview" className="w-24 h-24 object-cover rounded-lg border-2 border-pink-200" />
                )}
                <label className="cursor-pointer px-6 py-3 bg-gradient-to-r from-pink-100 to-purple-100 text-pink-700 rounded-lg hover:shadow-md transition flex items-center gap-2 font-semibold">
                  <Upload className="w-4 h-4" />
                  {form.photo ? t.form.changePhoto : t.form.choosePhoto}
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
                <h3 className="text-lg font-bold text-pink-700">{t.form.personalDetails}</h3>
                {expandedSections.personal ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
              </button>
              
              {expandedSections.personal && (
                <div className="p-6 space-y-4">
                  <input
                    type="text"
                    placeholder={t.form.name + " *"}
                    value={form.name}
                    onChange={e => updateForm('name', e.target.value)}
                    className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder={t.form.dob + " (DD/MM/YYYY)"}
                      value={form.dateOfBirth}
                      onChange={e => updateForm('dateOfBirth', e.target.value)}
                      className="border-2 border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    />
                    <input
                      type="text"
                      placeholder={t.form.placeOfBirth}
                      value={form.placeOfBirth}
                      onChange={e => updateForm('placeOfBirth', e.target.value)}
                      className="border-2 border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder={t.form.height}
                      value={form.height}
                      onChange={e => updateForm('height', e.target.value)}
                      className="border-2 border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    />
                    <input
                      type="text"
                      placeholder={t.form.caste}
                      value={form.caste}
                      onChange={e => updateForm('caste', e.target.value)}
                      className="border-2 border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    />
                  </div>
                  <input
                    type="text"
                    placeholder={t.form.gotra}
                    value={form.gotra}
                    onChange={e => updateForm('gotra', e.target.value)}
                    className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  />
                  <input
                    type="text"
                    placeholder={t.form.education}
                    value={form.education}
                    onChange={e => updateForm('education', e.target.value)}
                    className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  />
                  <input
                    type="text"
                    placeholder={t.form.occupation}
                    value={form.occupation}
                    onChange={e => updateForm('occupation', e.target.value)}
                    className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  />
                  <input
                    type="text"
                    placeholder={t.form.languages}
                    value={form.languages}
                    onChange={e => updateForm('languages', e.target.value)}
                    className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  />
                  <input
                    type="text"
                    placeholder={t.form.hobbies}
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
                <h3 className="text-lg font-bold text-pink-700">{t.form.familyDetails}</h3>
                {expandedSections.family ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
              </button>
              
              {expandedSections.family && (
                <div className="p-6 space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder={t.form.fatherName}
                      value={form.fatherName}
                      onChange={e => updateForm('fatherName', e.target.value)}
                      className="border-2 border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    />
                    <input
                      type="text"
                      placeholder={t.form.fatherOccupation}
                      value={form.fatherOccupation}
                      onChange={e => updateForm('fatherOccupation', e.target.value)}
                      className="border-2 border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder={t.form.motherName}
                      value={form.motherName}
                      onChange={e => updateForm('motherName', e.target.value)}
                      className="border-2 border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    />
                    <input
                      type="text"
                      placeholder={t.form.motherOccupation}
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
                      {expandedSections.optional ? t.form.hideMember : t.form.addMember} {t.form.optional}
                    </button>
                    
                    {expandedSections.optional && (
                      <div className="space-y-4 mt-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <input
                            type="text"
                            placeholder={t.form.grandfatherName}
                            value={form.grandfatherName}
                            onChange={e => updateForm('grandfatherName', e.target.value)}
                            className="border-2 border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                          />
                          <input
                            type="text"
                            placeholder={t.form.grandfatherOccupation}
                            value={form.grandfatherOccupation}
                            onChange={e => updateForm('grandfatherOccupation', e.target.value)}
                            className="border-2 border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                          />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <input
                            type="text"
                            placeholder={t.form.uncleName}
                            value={form.uncleName}
                            onChange={e => updateForm('uncleName', e.target.value)}
                            className="border-2 border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                          />
                          <input
                            type="text"
                            placeholder={t.form.uncleOccupation}
                            value={form.uncleOccupation}
                            onChange={e => updateForm('uncleOccupation', e.target.value)}
                            className="border-2 border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                          />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <input
                            type="text"
                            placeholder={t.form.elderBrotherName}
                            value={form.elderBrotherName}
                            onChange={e => updateForm('elderBrotherName', e.target.value)}
                            className="border-2 border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                          />
                          <input
                            type="text"
                            placeholder={t.form.elderBrotherOccupation}
                            value={form.elderBrotherOccupation}
                            onChange={e => updateForm('elderBrotherOccupation', e.target.value)}
                            className="border-2 border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                          />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <input
                            type="text"
                            placeholder={t.form.youngerBrotherName}
                            value={form.youngerBrotherName}
                            onChange={e => updateForm('youngerBrotherName', e.target.value)}
                            className="border-2 border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                          />
                          <input
                            type="text"
                            placeholder={t.form.youngerBrotherOccupation}
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
                <h3 className="text-lg font-bold text-pink-700">{t.form.contactDetails}</h3>
                {expandedSections.contact ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
              </button>
              
              {expandedSections.contact && (
                <div className="p-6 space-y-4">
                  <input
                    type="text"
                    placeholder={t.form.contactPerson}
                    value={form.contactPerson}
                    onChange={e => updateForm('contactPerson', e.target.value)}
                    className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  />
                  <input
                    type="text"
                    placeholder={t.form.contactNumber}
                    value={form.contactNumber}
                    onChange={e => updateForm('contactNumber', e.target.value)}
                    className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  />
                  <input
                    type="email"
                    placeholder={t.form.email}
                    value={form.email}
                    onChange={e => updateForm('email', e.target.value)}
                    className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  />
                </div>
              )}
            </div>
          </div>

          {/* Right - Live Preview (2 columns) */}
          <div className="lg:col-span-2 order-1 lg:order-2">
            <div className="sticky top-24">
              <div className="bg-white rounded-xl shadow-xl p-4">
                <div className="bg-gray-50 rounded-lg p-2 border-2 border-gray-200">
                  <div className="overflow-auto" style={{ maxHeight: '700px' }}>
                    {/* Scale transform for preview */}
                    <div style={{ 
                      transform: 'scale(0.4)', 
                      transformOrigin: 'top left',
                      width: '250%' // Compensate for scale(0.4) -> 1/0.4 = 2.5
                    }}>
                      <GenericTemplate data={form} config={template.config} />
                    </div>
                  </div>
                </div>
                <p className="text-xs text-gray-500 text-center mt-3 flex items-center justify-center gap-1">
                  ✨ Live Preview - Changes appear instantly
                  {!template.free && !isPaid && <Lock className="w-3 h-3 ml-1" />}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hidden template for PDF generation */}
      <div style={{ position: 'fixed', left: '-9999px', top: 0 }}>
        <GenericTemplate data={form} config={template.config} id="biodata-template" />
      </div>
    </div>
  );
}
