"use client";

import React, { useState } from 'react';
import { Share2, Download, Copy, Check, MessageSquare, X, Sparkles } from 'lucide-react';
import { BiodataForm } from '@/app/types/biodata';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  biodata: BiodataForm;
  templateName: string;
  onDownloadAgain: (format: 'pdf' | 'png' | 'jpg') => void;
};

export default function WhatsAppModal({ isOpen, onClose, biodata, templateName, onDownloadAgain }: Props) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  // Prepare structured text message for WhatsApp sharing
  const getWhatsAppMessage = () => {
    const textLines = [
      `🙏 *Marriage Biodata of ${biodata.name || 'Candidate'}* 🙏`,
      `---`,
      biodata.dateOfBirth ? `📅 *DOB:* ${biodata.dateOfBirth}` : '',
      biodata.height ? `📏 *Height:* ${biodata.height}` : '',
      biodata.education ? `🎓 *Education:* ${biodata.education}` : '',
      biodata.occupation ? `💼 *Occupation:* ${biodata.occupation}` : '',
      biodata.caste ? `🕉️ *Caste:* ${biodata.caste}` : '',
      biodata.address ? `📍 *Location:* ${biodata.address}` : '',
      biodata.contactNumber ? `📞 *Contact:* ${biodata.contactNumber}` : '',
      `---`,
      `✨ Created elegant Biodata using *Marriage Biodata Maker* (${templateName})`,
    ].filter(Boolean);

    return encodeURIComponent(textLines.join('\n'));
  };

  const whatsappUrl = `https://api.whatsapp.com/send?text=${getWhatsAppMessage()}`;

  const handleCopyText = () => {
    const textLines = [
      `Marriage Biodata of ${biodata.name || 'Candidate'}`,
      `DOB: ${biodata.dateOfBirth}`,
      `Education: ${biodata.education}`,
      `Occupation: ${biodata.occupation}`,
      `Contact: ${biodata.contactNumber}`,
    ].filter(Boolean);

    navigator.clipboard.writeText(textLines.join('\n'));
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl relative border border-amber-100 transform transition-all scale-100">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 p-1 rounded-full hover:bg-gray-100 transition"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Success Header */}
        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-gradient-to-tr from-green-400 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg shadow-green-200">
            <Sparkles className="w-8 h-8 text-white animate-pulse" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900">Your Biodata is Ready! 🎉</h3>
          <p className="text-sm text-gray-600 mt-1">
            Downloaded successfully. Share it directly with matches or family on WhatsApp!
          </p>
        </div>

        {/* WhatsApp Direct Share Button */}
        <div className="space-y-3 mb-6">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 w-full py-3.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl shadow-lg shadow-emerald-200 transition transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <MessageSquare className="w-5 h-5" />
            <span>Send Biodata on WhatsApp</span>
          </a>

          {/* Copy Text Summary */}
          <button
            onClick={handleCopyText}
            className="flex items-center justify-center gap-2 w-full py-2.5 px-4 border border-gray-200 hover:bg-gray-50 text-gray-700 font-medium rounded-xl transition"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-green-600" />
                <span className="text-green-600 font-semibold">Summary Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-gray-500" />
                <span>Copy Summary Text</span>
              </>
            )}
          </button>
        </div>

        {/* Download Formats Option */}
        <div className="border-t border-gray-100 pt-4">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3 text-center">
            Download in another format
          </p>
          <div className="grid grid-cols-3 gap-2">
            <button
              onClick={() => onDownloadAgain('pdf')}
              className="py-2 px-3 bg-red-50 hover:bg-red-100 text-red-700 text-xs font-semibold rounded-lg flex items-center justify-center gap-1.5 transition"
            >
              <Download className="w-3.5 h-3.5" /> PDF
            </button>
            <button
              onClick={() => onDownloadAgain('png')}
              className="py-2 px-3 bg-blue-50 hover:bg-blue-100 text-blue-700 text-xs font-semibold rounded-lg flex items-center justify-center gap-1.5 transition"
            >
              <Download className="w-3.5 h-3.5" /> PNG
            </button>
            <button
              onClick={() => onDownloadAgain('jpg')}
              className="py-2 px-3 bg-amber-50 hover:bg-amber-100 text-amber-700 text-xs font-semibold rounded-lg flex items-center justify-center gap-1.5 transition"
            >
              <Download className="w-3.5 h-3.5" /> JPG
            </button>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-5 text-center">
          <button
            onClick={onClose}
            className="text-xs text-gray-400 hover:text-gray-600 underline font-medium"
          >
            Close & Edit Details
          </button>
        </div>
      </div>
    </div>
  );
}
