'use client';

import { use, useState, useEffect, useCallback } from 'react';
import { templates } from '@/app/data/templates';
import { BiodataForm, defaultBiodataForm, defaultFieldVisibility, FieldVisibility } from '@/app/types/biodata';
import GenericTemplate from '@/app/components/templates/GenericTemplate';
import { Download, Upload, FileText, Image as ImageIcon, Loader2, ChevronDown, ChevronUp, Lock, Edit2, RotateCcw, Eye, X } from 'lucide-react';
import { generatePDF, generateImage } from '@/app/utils/pdfGenerator';
import Script from 'next/script';
import { useLanguage } from '@/app/context/LanguageContext';
import Cropper from 'react-easy-crop';
import getCroppedImg from '@/app/utils/cropImage';

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
  const [fieldVisibility, setFieldVisibility] = useState<FieldVisibility>(defaultFieldVisibility);
  const [isDownloading, setIsDownloading] = useState(false);
  const [showDownloadMenu, setShowDownloadMenu] = useState(false);
  const [activeStep, setActiveStep] = useState(1);
  const [isPaid, setIsPaid] = useState(false);
  const [showMobilePreview, setShowMobilePreview] = useState(false); // Kept for backward compat but unused in new flow
  const { t, language, setLanguage } = useLanguage();

  // Cropper state
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [rotation, setRotation] = useState(0);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [tempImage, setTempImage] = useState<string | null>(null);
  const [showCropper, setShowCropper] = useState(false);

  const steps = [
    { id: 1, label: t.form.basicInfo },
    { id: 2, label: t.form.family },
    { id: 3, label: t.form.contact },
    { id: 4, label: 'Preview & Download' }
  ];

  // If template is free, mark as paid automatically
  useEffect(() => {
    if (template?.free) {
      setIsPaid(true); 
    }
  }, [template]);

  const updateForm = (field: keyof BiodataForm, value: string) => {
    setForm(prev => ({ ...prev, [field]: value }));
  };

  const toggleVisibility = (field: keyof BiodataForm) => {
    setFieldVisibility(prev => ({ ...prev, [field]: !prev[field] }));
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setTempImage(reader.result as string);
        setShowCropper(true);
      };
      reader.readAsDataURL(file);
    }
  };

  const onCropComplete = useCallback((croppedArea: any, croppedAreaPixels: any) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  const handleCropSave = async () => {
    if (tempImage && croppedAreaPixels) {
      try {
        const croppedImage = await getCroppedImg(tempImage, croppedAreaPixels, rotation);
        if (croppedImage) {
          updateForm('photo', croppedImage);
          setShowCropper(false);
          setTempImage(null);
        }
      } catch (e) {
        console.error(e);
      }
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
        body: JSON.stringify({ amount: template.price || 49 }),
      });

      const order = await response.json();

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || 'rzp_test_1234567890',
        amount: order.amount,
        currency: order.currency,
        name: 'Biodata Maker',
        description: `Payment for ${template.name}`,
        order_id: order.id,
        handler: function (response: any) {
          setIsPaid(true);
          alert('Payment Successful! You can now download your biodata.');
        },
        prefill: {
          name: form.name,
          email: form.email,
          contact: form.contactNumber,
        },
        theme: {
          color: '#C05621',
        },
      };

      const rzp1 = new window.Razorpay(options);
      rzp1.open();
    } catch (error) {
      console.error('Payment failed', error);
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

  const renderField = (
    key: keyof BiodataForm, 
    label: string, 
    placeholder: string, 
    type: 'text' | 'date' | 'select' = 'text',
    options?: string[]
  ) => (
    <div className="bg-white p-4 rounded-lg border border-orange-100 hover:shadow-sm transition-shadow">
      <div className="flex justify-between items-start mb-2">
        <label className="font-semibold text-gray-700 flex items-center gap-1">
          {label}
          <Edit2 className="w-3 h-3 text-orange-400" />
        </label>
        <label className="flex items-center gap-2 cursor-pointer">
          <input 
            type="checkbox" 
            checked={!!fieldVisibility[key]} 
            onChange={() => toggleVisibility(key)}
            className="w-4 h-4 text-orange-600 rounded border-gray-300 focus:ring-orange-500"
          />
          <span className="text-xs text-gray-500">{t.form.includeInBiodata}</span>
        </label>
      </div>
      <input
        type={type}
        placeholder={placeholder}
        value={form[key] || ''}
        onChange={e => updateForm(key, e.target.value)}
        className="w-full border border-gray-200 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500 text-sm"
      />
    </div>
  );

  return (
    <div className="min-h-screen bg-orange-50/30 font-sans pb-20 lg:pb-0">
      <Script src="https://checkout.razorpay.com/v1/checkout.js" />
      
      {/* Stepper Header */}
      <div className="bg-white border-b sticky top-0 z-30 shadow-sm overflow-x-auto">
        <div className="max-w-7xl mx-auto px-4 py-4 min-w-[320px]">
          <div className="flex items-center justify-between md:justify-center md:space-x-8">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <div 
                  className={`flex items-center justify-center w-8 h-8 rounded-full font-bold text-sm flex-shrink-0 ${
                    activeStep >= step.id 
                      ? 'bg-[#C05621] text-white' 
                      : 'bg-gray-100 text-gray-400'
                  }`}
                >
                  {step.id}
                </div>
                <span 
                  className={`ml-2 text-sm font-medium whitespace-nowrap ${
                    activeStep >= step.id ? 'text-gray-900' : 'text-gray-400'
                  }`}
                >
                  {step.label}
                </span>
                {index < steps.length - 1 && (
                  <div className={`w-8 md:w-12 h-0.5 mx-2 md:mx-4 ${activeStep > step.id ? 'bg-[#C05621]' : 'bg-gray-200'}`} />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
          
          {/* Main Form Section - Full Width now */}
          <div className="space-y-6">
            
            {/* Language & Header Info - Only show on Step 1 */}
            {activeStep === 1 && (
            <div className="bg-white rounded-xl shadow-sm border border-orange-100 p-4 md:p-6 space-y-6">
              <div>
                <h3 className="text-sm font-semibold text-[#C05621] mb-3">{t.form.chooseLanguage}</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    { code: 'en', label: 'English' },
                    { code: 'mr', label: 'मराठी' },
                    { code: 'hi', label: 'हिंदी' },
                    { code: 'gu', label: 'ગુજરાતી' },
                    { code: 'te', label: 'తెలుగు' },
                  ].map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => setLanguage(lang.code as any)}
                      className={`px-3 py-1.5 md:px-4 md:py-2 rounded-md text-sm font-medium border transition-colors ${
                        language === lang.code 
                          ? 'bg-[#C05621] text-white border-[#C05621]' 
                          : 'bg-white text-gray-700 border-gray-200 hover:border-[#C05621]'
                      }`}
                    >
                      {lang.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 pt-4 border-t border-gray-100">
                <div>
                  <label className="block text-sm font-semibold text-[#C05621] mb-2">{t.form.biodataTitle}</label>
                  <input 
                    type="text" 
                    value={form.biodataTitle} 
                    onChange={e => updateForm('biodataTitle', e.target.value)}
                    className="w-full border border-gray-200 rounded-md px-3 py-2 focus:ring-1 focus:ring-orange-500 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#C05621] mb-2">{t.form.godName}</label>
                   <div className="flex gap-2">
                      <div className="relative group w-10 h-10 rounded-full overflow-hidden border border-gray-200 bg-orange-50 flex-shrink-0">
                         <img src="/assets/ganesha.png" alt="God" className="w-full h-full object-cover opacity-50" onError={(e) => e.currentTarget.style.display='none'} />
                         <div className="absolute inset-0 flex items-center justify-center text-[8px] text-center text-gray-500">Photo</div>
                      </div>
                      <input 
                        type="text" 
                        value={form.godName} 
                        onChange={e => updateForm('godName', e.target.value)}
                        className="w-full border border-gray-200 rounded-md px-3 py-2 focus:ring-1 focus:ring-orange-500 outline-none"
                      />
                   </div>
                   <button className="text-xs text-[#C05621] font-medium mt-1 hover:underline">
                      {t.form.changeGodPhoto}
                   </button>
                </div>
              </div>
            </div>
            )}

            {/* Step 1: Personal Details */}
            {activeStep === 1 && (
              <div className="space-y-6">
                <div className="bg-orange-50/50 p-4 rounded-t-xl border-b border-orange-100">
                  <h2 className="text-lg font-bold text-[#8B4513] flex items-center gap-2">
                    {t.form.personalDetails} <Edit2 className="w-4 h-4" />
                  </h2>
                </div>
                
                <div className="space-y-4">
                  {renderField('name', t.form.name, 'Enter your full name')}
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    {renderField('dateOfBirth', t.form.dob, 'DD/MM/YYYY')}
                    {renderField('timeOfBirth', t.form.timeOfBirth, 'e.g. 10:30 AM')}
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    {renderField('height', t.form.height, 'e.g. 5\'8" or 173 cm')}
                    {renderField('placeOfBirth', t.form.placeOfBirth, 'City, State')}
                  </div>

                  {renderField('religious', t.form.religious, 'Select your Religion')}
                  {renderField('caste', t.form.caste, 'Select your Caste')}
                  {renderField('rashi', t.form.rashi, 'Select your Rashi (Zodiac sign)')}
                  {renderField('nakshatra', t.form.nakshatra, 'Select your Nakshatra')}
                  {renderField('manglik', t.form.manglik, 'Select your Manglik status')}
                  {renderField('gotra', t.form.gotra, 'Select your Gotra')}
                  {renderField('gan', t.form.gan, 'Select your Gan')}
                  {renderField('complexion', t.form.complexion, 'Select your Complexion')}
                  {renderField('bloodGroup', t.form.bloodGroup, 'Select your Blood Group')}
                  {renderField('education', t.form.education, 'e.g. B.Tech in Computer Science')}
                  {renderField('occupation', t.form.occupation, 'e.g. Software Engineer at TCS')}
                  {renderField('salary', t.form.salary, 'Annual salary in INR')}
                  
                   <button className="w-full py-3 border-2 border-dashed border-orange-200 text-[#C05621] rounded-lg font-medium hover:bg-orange-50 transition-colors">
                      {t.form.addNewField}
                   </button>
                </div>
              </div>
            )}

            {/* Step 2: Family Details */}
            {activeStep === 2 && (
              <div className="space-y-6">
                <div className="bg-orange-50/50 p-4 rounded-t-xl border-b border-orange-100">
                  <h2 className="text-lg font-bold text-[#8B4513] flex items-center gap-2">
                    {t.form.familyDetails} <Edit2 className="w-4 h-4" />
                  </h2>
                </div>
                
                <div className="space-y-4">
                  {renderField('fatherName', t.form.fatherName, "Father's Full Name")}
                  {renderField('fatherOccupation', t.form.fatherOccupation, "Father's Occupation")}
                  {renderField('motherName', t.form.motherName, "Mother's Full Name")}
                  {renderField('motherOccupation', t.form.motherOccupation, "Mother's Occupation")}
                  {renderField('brothers', 'Brothers', "e.g., 1 Elder, Working in USA")}
                  {renderField('sisters', 'Sisters', "e.g., 2, 1 Married")}
                </div>
              </div>
            )}

            {/* Step 3: Contact Details */}
            {activeStep === 3 && (
              <div className="space-y-6">
                 <div className="bg-orange-50/50 p-4 rounded-t-xl border-b border-orange-100">
                  <h2 className="text-lg font-bold text-[#8B4513] flex items-center gap-2">
                    {t.form.contactDetails} <Edit2 className="w-4 h-4" />
                  </h2>
                </div>

                <div className="space-y-4">
                  {renderField('contactPerson', t.form.contactPerson, "Contact Person Name")}
                  {renderField('contactNumber', t.form.contactNumber, "Mobile Number")}
                  {renderField('email', t.form.email, "Email Address")}
                  {renderField('address', 'Address', "Residential Address")}
                  
                  {/* Photo Upload with Tips */}
                  <div className="grid md:grid-cols-2 gap-6">
                     <div className="bg-white p-6 rounded-lg border border-orange-100 text-center">
                        <h4 className="font-semibold text-gray-700 mb-4">{t.form.choosePhoto}</h4>
                         <div className="flex flex-col items-center gap-4">
                            <div className="relative w-32 h-32 bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center border border-gray-200">
                              {form.photo ? (
                                <img src={form.photo} alt="Preview" className="w-full h-full object-cover" />
                              ) : (
                                <ImageIcon className="w-8 h-8 text-gray-400" />
                              )}
                            </div>
                            <label className="cursor-pointer px-6 py-2 bg-[#C05621] text-white rounded-lg hover:bg-[#9C4215] transition shadow-sm flex items-center gap-2 text-sm font-medium">
                              <Upload className="w-4 h-4" />
                              {t.form.uploadPhoto}
                              <input type="file" accept="image/*" onChange={handlePhotoUpload} className="hidden" />
                            </label>
                            <p className="text-xs text-gray-500">Upload your profile photo, biodata with photos get more attention.</p>
                        </div>
                     </div>

                     <div className="bg-orange-50 p-6 rounded-lg border border-orange-100">
                        <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                           <span className="text-lg">📸</span> Photo Tips
                        </h4>
                        <ul className="text-xs space-y-2 text-gray-600 list-disc pl-4">
                           <li>Use a clear, recent photo with good lighting</li>
                           <li>Face should be clearly visible and centered</li>
                           <li>Avoid group photos or heavily filtered images</li>
                           <li>Professional or formal attire recommended</li>
                           <li>Image will be cropped to 4:5 ratio automatically</li>
                        </ul>
                     </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Preview */}
            {activeStep === 4 && (
              <div className="space-y-6">
                 <div className="bg-orange-50/50 p-4 rounded-t-xl border-b border-orange-100 flex justify-between items-center">
                  <h2 className="text-lg font-bold text-[#8B4513] flex items-center gap-2">
                    Biodata Preview
                  </h2>
                </div>
                
                <div className="bg-gray-100 p-8 rounded-xl border border-gray-200 overflow-auto flex justify-center">
                   <div style={{ transform: 'scale(0.6)', transformOrigin: 'top center', height: '700px', width: '794px' }}>
                      <GenericTemplate data={form} config={template.config} />
                   </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex flex-col-reverse md:flex-row justify-between items-center pt-6 border-t border-gray-200 mt-8 gap-4 pb-12">
               <button 
                  onClick={() => setForm(defaultBiodataForm)}
                  className="flex items-center gap-2 text-gray-500 hover:text-red-500 font-medium text-sm transition-colors"
                >
                  <RotateCcw className="w-4 h-4" />
                  {t.form.resetForm}
                </button>
                
                <div className="flex gap-3 w-full md:w-auto">
                   {activeStep > 1 && (
                      <button 
                        onClick={() => setActiveStep(prev => prev - 1)}
                        className="flex-1 md:flex-none px-6 py-2.5 bg-gray-100 text-gray-700 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
                      >
                        Previous
                      </button>
                   )}
                   
                   {activeStep < 4 ? (
                      <button 
                        onClick={() => setActiveStep(prev => prev + 1)}
                        className="flex-1 md:flex-none px-8 py-2.5 bg-[#C05621] text-white rounded-lg font-semibold hover:bg-[#9C4215] transition-colors shadow-sm flex items-center justify-center gap-2"
                      >
                        {t.form.nextStep}
                      </button>
                   ) : (
                     <div className="relative w-full md:w-auto">
                         {!isPaid ? (
                           <button
                             onClick={handlePayment}
                             disabled={isDownloading}
                             className="w-full md:w-auto px-8 py-2.5 bg-[#C05621] text-white rounded-lg font-semibold hover:bg-[#9C4215] transition-colors shadow-sm flex items-center justify-center gap-2"
                           >
                             {isDownloading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Lock className="w-4 h-4" />}
                             Pay to Download
                           </button>
                         ) : (
                           <button
                             onClick={() => setShowDownloadMenu(!showDownloadMenu)}
                             disabled={isDownloading}
                             className="w-full md:w-auto px-8 py-2.5 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors shadow-sm flex items-center justify-center gap-2"
                           >
                             <Download className="w-5 h-5" />
                             Download
                           </button>
                         )}
                         
                         {showDownloadMenu && (
                           <div className="absolute right-0 bottom-full mb-2 w-48 bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden z-50">
                             <button onClick={() => handleDownload('pdf')} className="w-full px-4 py-2 text-left hover:bg-gray-50 text-sm">PDF</button>
                             <button onClick={() => handleDownload('png')} className="w-full px-4 py-2 text-left hover:bg-gray-50 text-sm">PNG</button>
                             <button onClick={() => handleDownload('jpg')} className="w-full px-4 py-2 text-left hover:bg-gray-50 text-sm">JPG</button>
                           </div>
                         )}
                     </div>
                   )}
                </div>
            </div>
          </div>
      </div>

       {/* Cropper Modal */}
       {showCropper && tempImage && (
        <div className="fixed inset-0 z-[60] bg-black/70 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-lg overflow-hidden flex flex-col max-h-[90vh]">
            <div className="p-4 border-b flex justify-between items-center">
              <h3 className="font-bold text-lg">Crop Your Photo</h3>
              <button onClick={() => setShowCropper(false)}><X className="w-5 h-5" /></button>
            </div>
            <div className="relative h-80 bg-gray-900">
               <Cropper
                  image={tempImage}
                  crop={crop}
                  zoom={zoom}
                  aspect={4 / 5}
                  onCropChange={setCrop}
                  onCropComplete={onCropComplete}
                  onZoomChange={setZoom}
               />
            </div>
            <div className="p-4 space-y-4">
               <div>
                  <label className="text-xs font-semibold text-gray-500 uppercase">Zoom</label>
                  <input
                    type="range"
                    value={zoom}
                    min={1}
                    max={3}
                    step={0.1}
                    aria-labelledby="Zoom"
                    onChange={(e) => setZoom(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#C05621]"
                  />
               </div>
               <div className="flex gap-3 justify-end pt-2">
                  <button 
                    onClick={() => setShowCropper(false)}
                    className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg font-medium"
                  >
                    Cancel
                  </button>
                  <button 
                    onClick={handleCropSave}
                    className="px-6 py-2 bg-[#C05621] text-white rounded-lg font-medium hover:bg-[#9C4215]"
                  >
                    Apply
                  </button>
               </div>
            </div>
          </div>
        </div>
      )}

       {/* Hidden template for PDF generation */}
       <div style={{ position: 'fixed', left: '-9999px', top: 0 }}>
        <GenericTemplate data={form} config={template.config} id="biodata-template" />
      </div>
    </div>
  );
}