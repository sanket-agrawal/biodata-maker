'use client';

import { use, useState, useEffect, useCallback } from 'react';
import { templates } from '@/app/data/templates';
import { BiodataForm, defaultBiodataForm, defaultFieldVisibility, FieldVisibility } from '@/app/types/biodata';
import GenericTemplate from '@/app/components/templates/GenericTemplate';
import { Download, Upload, FileText, Image as ImageIcon, Loader2, ChevronDown, ChevronUp, Lock, Edit2, RotateCcw, Eye, X, CheckCircle, Sparkles } from 'lucide-react';
import { generatePDF, generateImage } from '@/app/utils/pdfGenerator';
import Script from 'next/script';
import { useLanguage } from '@/app/context/LanguageContext';
import Cropper from 'react-easy-crop';
import getCroppedImg from '@/app/utils/cropImage';
import WhatsAppModal from '@/app/components/ui/WhatsAppModal';

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
  const template = templates.find(t => t.id === Number(id)) || templates[0];
  const [form, setForm] = useState<BiodataForm>(defaultBiodataForm);
  const [fieldVisibility, setFieldVisibility] = useState<FieldVisibility>(defaultFieldVisibility);
  const [isDownloading, setIsDownloading] = useState(false);
  const [showDownloadMenu, setShowDownloadMenu] = useState(false);
  const [activeStep, setActiveStep] = useState(1);
  const [isPaid, setIsPaid] = useState(false);
  const [showWhatsAppModal, setShowWhatsAppModal] = useState(false);
  const [razorpayOrder, setRazorpayOrder] = useState<any>(null);
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
    } else {
      setIsPaid(false);
    }
  }, [template]);

  const updateForm = (field: keyof BiodataForm, value: string) => {
    setForm(prev => ({ ...prev, [field]: value }));
  };

  const addCustomField = (section: 'personal' | 'family' | 'contact') => {
    const newField = {
      id: 'custom_' + Date.now(),
      label: 'New Field',
      value: '',
      section,
    };
    setForm(prev => ({
      ...prev,
      customFields: [...(prev.customFields || []), newField],
    }));
  };

  const updateCustomField = (id: string, key: 'label' | 'value', text: string) => {
    setForm(prev => ({
      ...prev,
      customFields: (prev.customFields || []).map(f => (f.id === id ? { ...f, [key]: text } : f)),
    }));
  };

  const removeCustomField = (id: string) => {
    setForm(prev => ({
      ...prev,
      customFields: (prev.customFields || []).filter(f => f.id !== id),
    }));
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

  // Log audit tracking data to MongoDB
  const logBiodataToDatabase = async (paymentId?: string, orderId?: string) => {
    try {
      await fetch('/api/save-biodata', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          biodata: form,
          templateId: template.id,
          templateName: template.name,
          isPaid: template.free ? true : isPaid,
          razorpayOrderId: orderId || razorpayOrder?.id,
          razorpayPaymentId: paymentId,
        }),
      });
    } catch (e) {
      console.error('Failed to log audit data to MongoDB:', e);
    }
  };

  const handlePayment = async (targetFormat: 'pdf' | 'png' | 'jpg' = 'pdf') => {
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
      setRazorpayOrder(order);

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || 'rzp_test_1234567890',
        amount: order.amount,
        currency: order.currency || 'INR',
        name: 'Marriage Biodata Maker',
        description: `Unlock ${template.name}`,
        order_id: order.id,
        handler: async function (response: any) {
          // Server-side payment verification
          try {
            const verifyRes = await fetch('/api/verify-payment', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
              }),
            });
            const verifyData = await verifyRes.json();
            if (verifyData.verified) {
              setIsPaid(true);
              await logBiodataToDatabase(response.razorpay_payment_id, order.id);
              await executeFileDownload(targetFormat);
            } else {
              alert('Payment verification failed. Please contact support.');
            }
          } catch (verifyError) {
            console.error('Verification error:', verifyError);
            // Fallback for dev/mock mode
            setIsPaid(true);
            await logBiodataToDatabase(response.razorpay_payment_id, order.id);
            await executeFileDownload(targetFormat);
          }
        },
        prefill: {
          name: form.name,
          email: form.email,
          contact: form.contactNumber,
        },
        theme: {
          color: '#c2410c',
        },
      };

      if (typeof window !== 'undefined' && window.Razorpay) {
        const rzp1 = new window.Razorpay(options);
        rzp1.open();
      } else {
        // Fallback for simulation if Razorpay SDK fails to load
        if (confirm(`Simulate payment success for ${template.name} (â‚¹${template.price})?`)) {
          setIsPaid(true);
          await logBiodataToDatabase('pay_simulated_' + Date.now(), order.id);
          await executeFileDownload(targetFormat);
        }
      }
    } catch (error) {
      console.error('Payment process error:', error);
      if (confirm('Razorpay API keys missing or test mode. Unlock & download directly?')) {
        setIsPaid(true);
        await logBiodataToDatabase('pay_mock_' + Date.now(), 'order_mock_123');
        await executeFileDownload(targetFormat);
      }
    } finally {
      setIsDownloading(false);
    }
  };

  const executeFileDownload = async (format: 'pdf' | 'png' | 'jpg') => {
    try {
      setIsDownloading(true);
      setShowDownloadMenu(false);
      const cleanName = form.name ? form.name.replace(/\s+/g, '_') : 'marriage';
      const filename = `${cleanName}_biodata.${format}`;

      if (format === 'pdf') {
        await generatePDF('biodata-template', filename);
      } else {
        await generateImage('biodata-template', format, filename);
      }

      // Log download to MongoDB and show WhatsApp modal
      await logBiodataToDatabase();
      setShowWhatsAppModal(true);
    } catch (error) {
      alert(`Error generating ${format.toUpperCase()}. Please try again.`);
      console.error(error);
    } finally {
      setIsDownloading(false);
    }
  };

  const handleDownload = async (format: 'pdf' | 'png' | 'jpg') => {
    if (!template.free && !isPaid) {
      await handlePayment(format);
      return;
    }
    await executeFileDownload(format);
  };

  const renderField = (
    key: keyof BiodataForm, 
    label: string, 
    placeholder: string, 
    type: 'text' | 'date' | 'select' = 'text',
    options?: string[]
  ) => (
    <div className="bg-white p-4 rounded-xl border border-orange-100 hover:border-orange-300 hover:shadow-sm transition">
      <div className="flex justify-between items-start mb-1.5">
        <label className="font-semibold text-gray-800 text-sm flex items-center gap-1.5">
          {label}
        </label>
        <label className="flex items-center gap-1.5 cursor-pointer">
          <input 
            type="checkbox" 
            checked={!!fieldVisibility[key]} 
            onChange={() => toggleVisibility(key)}
            className="w-3.5 h-3.5 text-orange-600 rounded border-gray-300 focus:ring-orange-500"
          />
          <span className="text-xs text-gray-500">{t.form.includeInBiodata}</span>
        </label>
      </div>
      <input
        type={type}
        placeholder={placeholder}
        value={(form[key] as string) || ''}
        onChange={e => updateForm(key, e.target.value)}
      />
    </div>
  );

  const renderCustomFields = (section: 'personal' | 'family' | 'contact') => {
    const fields = (form.customFields || []).filter(f => (!f.section && section === 'personal') || f.section === section);
    return (
      <div className="space-y-3 pt-2">
        {fields.map(f => (
          <div key={f.id} className="bg-orange-50/60 p-3 rounded-xl border border-orange-200 flex items-center gap-3">
            <input
              type="text"
              placeholder="Field Label (e.g. Native Place)"
              value={f.label}
              onChange={e => updateCustomField(f.id, 'label', e.target.value)}
              className="w-1/3 border border-gray-300 rounded-lg px-2.5 py-1.5 text-xs bg-white font-semibold focus:outline-none focus:ring-1 focus:ring-orange-500"
            />
            <input
              type="text"
              placeholder="Field Value"
              value={f.value}
              onChange={e => updateCustomField(f.id, 'value', e.target.value)}
              className="flex-1 border border-gray-300 rounded-lg px-2.5 py-1.5 text-xs bg-white focus:outline-none focus:ring-1 focus:ring-orange-500"
            />
            <button
              onClick={() => removeCustomField(f.id)}
              className="text-red-500 hover:text-red-700 text-xs p-1 rounded-full hover:bg-red-50"
              title="Remove Field"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        ))}
        <button
          onClick={() => addCustomField(section)}
          className="text-xs font-bold text-orange-600 hover:text-orange-700 flex items-center gap-1 py-1 px-2.5 bg-orange-100 hover:bg-orange-200 rounded-lg transition"
        >
          + Add Custom Field
        </button>
      </div>
    );
  };

  return (
    <>
      <Script src="https://checkout.razorpay.com/v1/checkout.js" strategy="lazyOnload" />

      {/* WhatsApp Post Download Share Modal */}
      <WhatsAppModal
        isOpen={showWhatsAppModal}
        onClose={() => setShowWhatsAppModal(false)}
        biodata={form}
        templateName={template.name}
        onDownloadAgain={executeFileDownload}
      />

      <div className="min-h-screen bg-gradient-to-b from-orange-50/60 via-amber-50/30 to-white pb-20">
        
        {/* Navigation & Header Banner */}
        <div className="bg-white border-b border-orange-100 sticky top-0 z-40 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between flex-wrap gap-4">
            
            <div className="flex items-center gap-3">
              <span className="text-xs font-semibold px-2.5 py-1 bg-orange-100 text-orange-800 rounded-full">
                Step {activeStep} of 4
              </span>
              <h1 className="text-lg font-bold text-gray-900 hidden sm:block">
                Creating with: <span className="text-orange-600">{template.name}</span>
              </h1>
            </div>

            {/* Stepper controls for desktop & mobile */}
            <div className="flex items-center gap-1.5">
              {steps.map(step => (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(step.id)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition ${
                    activeStep === step.id
                      ? 'bg-orange-600 text-white shadow-md shadow-orange-200'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {step.id}. {step.label}
                </button>
              ))}
            </div>

            {/* Action CTAs */}
            <div className="flex items-center gap-3">
              {!template.free && !isPaid ? (
                <button
                  onClick={() => handlePayment('pdf')}
                  disabled={isDownloading}
                  className="flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white px-5 py-2 rounded-xl text-sm font-bold shadow-md shadow-orange-200 transition transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  {isDownloading ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <>
                      <Lock className="w-4 h-4" />
                      <span>Unlock & Download (â‚¹{template.price})</span>
                    </>
                  )}
                </button>
              ) : (
                <div className="relative">
                  <button
                    onClick={() => setShowDownloadMenu(!showDownloadMenu)}
                    disabled={isDownloading}
                    className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2 rounded-xl text-sm font-bold shadow-md shadow-emerald-200 transition"
                  >
                    {isDownloading ? (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    ) : (
                      <>
                        <Download className="w-4 h-4" />
                        <span>Download Biodata</span>
                        <ChevronDown className="w-3.5 h-3.5 ml-1" />
                      </>
                    )}
                  </button>

                  {showDownloadMenu && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-gray-100 py-1.5 z-50 animate-in fade-in">
                      <button
                        onClick={() => handleDownload('pdf')}
                        className="flex items-center gap-2 px-4 py-2.5 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 w-full text-left font-medium"
                      >
                        <FileText className="w-4 h-4 text-red-500" /> PDF Document
                      </button>
                      <button
                        onClick={() => handleDownload('png')}
                        className="flex items-center gap-2 px-4 py-2.5 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 w-full text-left font-medium"
                      >
                        <ImageIcon className="w-4 h-4 text-blue-500" /> PNG Image
                      </button>
                      <button
                        onClick={() => handleDownload('jpg')}
                        className="flex items-center gap-2 px-4 py-2.5 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 w-full text-left font-medium"
                      >
                        <ImageIcon className="w-4 h-4 text-amber-500" /> JPG High-Quality
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Main Work Area Split: Form on Left, Live Preview on Right */}
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Section: Form Steps (7 Cols) */}
            <div className="lg:col-span-6 bg-white p-6 rounded-2xl border border-orange-100 shadow-sm space-y-6">
              
              {/* Photo Upload Section */}
              <div className="bg-gradient-to-r from-orange-50 to-amber-50/50 p-5 rounded-xl border border-orange-100">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-gray-800 text-base">{t.form.photo}</h3>
                    <p className="text-xs text-gray-500 mt-0.5">Upload a clean passport size candidate photo</p>
                  </div>
                  <label className="flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white text-xs font-semibold px-4 py-2.5 rounded-lg cursor-pointer transition shadow-sm">
                    <Upload className="w-3.5 h-3.5" />
                    <span>Upload Photo</span>
                    <input type="file" accept="image/*" onChange={handlePhotoUpload} className="hidden" />
                  </label>
                </div>

                {form.photo && (
                  <div className="mt-4 flex items-center gap-4 bg-white p-3 rounded-lg border border-orange-200">
                    <img src={form.photo} alt="Preview" className="w-14 h-16 object-cover rounded border border-orange-300" />
                    <div className="flex-1">
                      <p className="text-xs font-semibold text-emerald-700 flex items-center gap-1">
                        <CheckCircle className="w-3.5 h-3.5" /> Photo Attached
                      </p>
                      <button
                        onClick={() => updateForm('photo', '')}
                        className="text-xs text-red-600 hover:underline mt-1"
                      >
                        Remove Photo
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Step 1: Basic Info */}
              {activeStep === 1 && (
                <div className="space-y-4">
                  <h2 className="text-lg font-bold text-gray-900 border-b pb-2 flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-orange-500" /> {t.form.basicInfo}
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {renderField('godName', t.form.godName, 'e.g. || Shree Ganeshay Namah ||')}
                    {renderField('biodataTitle', t.form.title, 'e.g. BIODATA')}
                    {renderField('name', t.form.fullName, 'Enter Full Name')}
                    {renderField('dateOfBirth', t.form.dob, 'DD/MM/YYYY')}
                    {renderField('timeOfBirth', t.form.tob, 'e.g. 08:30 AM')}
                    {renderField('placeOfBirth', t.form.pob, 'Birthplace City')}
                    {renderField('height', t.form.height, "e.g. 5' 9\"")}
                    {renderField('religious', t.form.religion, 'e.g. Hindu')}
                    {renderField('caste', t.form.caste, 'Enter Caste')}
                    {renderField('subCaste', t.form.subCaste, 'Sub-caste / Community')}
                    {renderField('gotra', t.form.gotra, 'Gotra')}
                    {renderField('rashi', t.form.rashi, 'Rashi')}
                    {renderField('nakshatra', t.form.nakshatra, 'Nakshatra')}
                    {renderField('manglik', t.form.manglik, 'e.g. No / Anshik')}
                    {renderField('complexion', t.form.complexion, 'e.g. Fair')}
                    {renderField('education', t.form.education, 'e.g. B.Tech / MBA')}
                    {renderField('occupation', t.form.occupation, 'e.g. Software Engineer')}
                    {renderField('salary', t.form.salary, 'e.g. 12 LPA (Optional)')}
                  </div>
                  {renderCustomFields('personal')}

                  <div className="pt-4 flex justify-end">
                    <button
                      onClick={() => setActiveStep(2)}
                      className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2.5 rounded-xl font-bold text-sm shadow-md transition"
                    >
                      Next: Family Details â†’
                    </button>
                  </div>
                </div>
              )}

              {/* Step 2: Family Details */}
              {activeStep === 2 && (
                <div className="space-y-4">
                  <h2 className="text-lg font-bold text-gray-900 border-b pb-2 flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-orange-500" /> {t.form.family}
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {renderField('fatherName', t.form.fatherName, "Father's Full Name")}
                    {renderField('fatherOccupation', t.form.fatherOcc, "Father's Occupation")}
                    {renderField('motherName', t.form.motherName, "Mother's Full Name")}
                    {renderField('motherOccupation', t.form.motherOcc, "Mother's Occupation")}
                    {renderField('brothers', t.form.brothers, 'e.g. 1 Brother (Married)')}
                    {renderField('sisters', t.form.sisters, 'e.g. 1 Sister (Unmarried)')}
                  </div>
                  {renderCustomFields('family')}

                  <div className="pt-4 flex justify-between">
                    <button
                      onClick={() => setActiveStep(1)}
                      className="px-5 py-2.5 border border-gray-200 hover:bg-gray-50 text-gray-700 rounded-xl font-semibold text-sm transition"
                    >
                      â† Back
                    </button>
                    <button
                      onClick={() => setActiveStep(3)}
                      className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2.5 rounded-xl font-bold text-sm shadow-md transition"
                    >
                      Next: Contact Details â†’
                    </button>
                  </div>
                </div>
              )}

              {/* Step 3: Contact Details */}
              {activeStep === 3 && (
                <div className="space-y-4">
                  <h2 className="text-lg font-bold text-gray-900 border-b pb-2 flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-orange-500" /> {t.form.contact}
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {renderField('contactPerson', t.form.contactPerson, 'Contact Person Name')}
                    {renderField('contactNumber', t.form.contactNo, '+91 9876543210')}
                    {renderField('email', t.form.email, 'email@example.com')}
                    {renderField('address', t.form.address, 'Full Residence Address')}
                  </div>
                  {renderCustomFields('contact')}

                  <div className="pt-4 flex justify-between">
                    <button
                      onClick={() => setActiveStep(2)}
                      className="px-5 py-2.5 border border-gray-200 hover:bg-gray-50 text-gray-700 rounded-xl font-semibold text-sm transition"
                    >
                      â† Back
                    </button>
                    <button
                      onClick={() => setActiveStep(4)}
                      className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2.5 rounded-xl font-bold text-sm shadow-md transition"
                    >
                      Preview & Download â†’
                    </button>
                  </div>
                </div>
              )}

              {/* Step 4: Final Preview & Download Options */}
              {activeStep === 4 && (
                <div className="space-y-4">
                  <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 text-emerald-900">
                    <h3 className="font-bold text-base flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-emerald-600" /> Details Saved & Ready!
                    </h3>
                    <p className="text-xs text-emerald-700 mt-1">
                      Check your live template preview on the right. Once satisfied, click download below.
                    </p>
                  </div>

                  {!template.free && !isPaid ? (
                    <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 text-center">
                      <Lock className="w-8 h-8 text-amber-600 mx-auto mb-2" />
                      <h4 className="font-bold text-gray-900">Premium Template (â‚¹{template.price})</h4>
                      <p className="text-xs text-gray-600 mt-1 mb-4">
                        Pay once via Razorpay and get unlimited HD downloads in PDF, PNG & JPG.
                      </p>
                      <button
                        onClick={() => handlePayment('pdf')}
                        disabled={isDownloading}
                        className="w-full bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white py-3 rounded-xl font-bold text-sm shadow-lg transition"
                      >
                        Unlock Now & Download
                      </button>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      <button
                        onClick={() => handleDownload('pdf')}
                        disabled={isDownloading}
                        className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-xl font-bold text-sm shadow-lg transition flex items-center justify-center gap-2"
                      >
                        <FileText className="w-5 h-5" /> Download PDF Document
                      </button>
                      <div className="grid grid-cols-2 gap-3">
                        <button
                          onClick={() => handleDownload('png')}
                          disabled={isDownloading}
                          className="py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-xl transition flex items-center justify-center gap-1.5"
                        >
                          <ImageIcon className="w-4 h-4" /> Download PNG
                        </button>
                        <button
                          onClick={() => handleDownload('jpg')}
                          disabled={isDownloading}
                          className="py-2.5 bg-amber-600 hover:bg-amber-700 text-white text-xs font-semibold rounded-xl transition flex items-center justify-center gap-1.5"
                        >
                          <ImageIcon className="w-4 h-4" /> Download JPG
                        </button>
                      </div>
                    </div>
                  )}

                  <div className="pt-2">
                    <button
                      onClick={() => setActiveStep(1)}
                      className="text-xs text-gray-500 hover:text-gray-800 underline font-medium"
                    >
                      â† Edit Basic Details Again
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Right Section: Real-time Live Render Preview (6 Cols) */}
            <div className="lg:col-span-6 sticky top-20">
              <div className="bg-gray-100/80 p-4 rounded-2xl border border-gray-200 shadow-inner flex flex-col items-center">
                <div className="w-full flex items-center justify-between mb-3 px-2">
                  <span className="text-xs font-bold text-gray-500 tracking-wider uppercase flex items-center gap-1.5">
                    <Eye className="w-4 h-4 text-orange-500" /> Live A4 Preview
                  </span>
                  <span className="text-xs text-gray-500 bg-white px-2.5 py-1 rounded-md border border-gray-200 font-medium">
                    794px Ã— 1123px (Print Standard)
                  </span>
                </div>

                {/* Scaled Preview Frame */}
                <div className="w-full overflow-auto max-h-[800px] flex justify-center bg-white rounded-xl shadow-lg border border-gray-300 p-2 relative">
                  {/* Premium Blur Overlay */}
                  {!template.free && !isPaid && (
                    <div className="absolute inset-0 z-10 flex flex-col items-center justify-end pb-8 pointer-events-none">
                      <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-white via-white/95 to-transparent"></div>
                      <div className="relative z-20 text-center pointer-events-auto">
                        <p className="text-xs font-bold text-gray-500 mb-2">Full preview unlocked after payment</p>
                        <span className="inline-flex items-center gap-1.5 bg-gradient-to-r from-amber-500 to-orange-600 text-white px-4 py-2 rounded-xl text-xs font-bold shadow-lg">
                          <Lock className="w-3 h-3" /> Unlock for ₹{template.price}
                        </span>
                      </div>
                    </div>
                  )}
                  <div className="transform scale-[0.65] origin-top my-[-180px]">
                    <GenericTemplate
                      id="biodata-template"
                      data={form}
                      config={template.config}
                      visibility={fieldVisibility}
                      watermark={!template.free && !isPaid}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Image Cropper Modal */}
        {showCropper && tempImage && (
          <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl max-w-md w-full p-5 space-y-4">
              <h3 className="font-bold text-gray-900 text-lg">Crop Candidate Photo</h3>
              <div className="relative w-full h-72 rounded-xl overflow-hidden bg-gray-900">
                <Cropper
                  image={tempImage}
                  crop={crop}
                  zoom={zoom}
                  aspect={3 / 4}
                  onCropChange={setCrop}
                  onCropComplete={onCropComplete}
                  onZoomChange={setZoom}
                />
              </div>
              <div className="flex items-center justify-between">
                <label className="text-xs font-semibold text-gray-600">Zoom Level:</label>
                <input
                  type="range"
                  min={1}
                  max={3}
                  step={0.1}
                  value={zoom}
                  onChange={e => setZoom(Number(e.target.value))}
                  className="w-48 accent-orange-600"
                />
              </div>
              <div className="flex justify-end gap-3 pt-2">
                <button
                  onClick={() => setShowCropper(false)}
                  className="px-4 py-2 border border-gray-200 text-gray-700 text-sm font-semibold rounded-lg hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  onClick={handleCropSave}
                  className="px-5 py-2 bg-orange-600 hover:bg-orange-700 text-white text-sm font-bold rounded-lg shadow"
                >
                  Save Photo
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}