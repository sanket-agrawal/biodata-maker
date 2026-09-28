"use client";

import { useState, useEffect } from 'react';
import { X, Gift, Clock, Sparkles } from 'lucide-react';
import Link from 'next/link';

export default function ExitIntentPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const [countdown, setCountdown] = useState(15);
  const [isCounting, setIsCounting] = useState(false);

  useEffect(() => {
    // Don't show if already shown this session
    if (typeof window !== 'undefined' && sessionStorage.getItem('exit_popup_shown')) {
      setHasShown(true);
      return;
    }

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShown) {
        setIsVisible(true);
        setHasShown(true);
        setIsCounting(true);
        sessionStorage.setItem('exit_popup_shown', 'true');
      }
    };

    // Also trigger on mobile after 60 seconds of inactivity
    let mobileTimer: NodeJS.Timeout;
    const resetMobileTimer = () => {
      clearTimeout(mobileTimer);
      mobileTimer = setTimeout(() => {
        if (!hasShown) {
          setIsVisible(true);
          setHasShown(true);
          setIsCounting(true);
          sessionStorage.setItem('exit_popup_shown', 'true');
        }
      }, 60000);
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('touchstart', resetMobileTimer, { passive: true });
    resetMobileTimer();

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('touchstart', resetMobileTimer);
      clearTimeout(mobileTimer);
    };
  }, [hasShown]);

  // Countdown timer
  useEffect(() => {
    if (!isCounting || countdown <= 0) return;
    const timer = setInterval(() => {
      setCountdown(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [isCounting, countdown]);

  if (!isVisible) return null;

  const minutes = Math.floor(countdown / 60);
  const seconds = countdown % 60;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-3xl max-w-md w-full p-8 shadow-2xl relative border-2 border-amber-200 transform animate-bounce-in">
        
        {/* Close */}
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 p-1.5 rounded-full hover:bg-gray-100 transition"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Icon */}
        <div className="text-center mb-5">
          <div className="w-20 h-20 bg-gradient-to-tr from-amber-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-xl shadow-amber-200">
            <Gift className="w-10 h-10 text-white" />
          </div>
          <h3 className="text-2xl font-extrabold text-gray-900">
            Wait! Special Offer 🎁
          </h3>
          <p className="text-sm text-gray-600 mt-2">
            Get <span className="font-bold text-orange-600">any Premium Template</span> at a special price — only for you!
          </p>
        </div>

        {/* Urgency Timer */}
        {countdown > 0 && (
          <div className="bg-red-50 border border-red-200 rounded-xl p-3 text-center mb-5">
            <div className="flex items-center justify-center gap-2 text-red-700 text-sm font-bold">
              <Clock className="w-4 h-4 animate-pulse" />
              <span>Offer expires in {minutes}:{seconds.toString().padStart(2, '0')}</span>
            </div>
          </div>
        )}

        {/* Discount Showcase */}
        <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-5 text-center mb-5 border border-amber-200">
          <p className="text-xs text-gray-500 uppercase tracking-wider font-bold mb-1">Premium Templates from</p>
          <div className="flex items-center justify-center gap-3">
            <span className="text-2xl text-gray-400 line-through font-bold">₹299</span>
            <span className="text-4xl font-black text-orange-600">₹49</span>
          </div>
          <p className="text-xs text-emerald-700 font-bold mt-1">
            <Sparkles className="w-3 h-3 inline" /> Save up to 83% — Limited Time!
          </p>
        </div>

        {/* CTA */}
        <Link
          href="/templates"
          onClick={() => setIsVisible(false)}
          className="block w-full text-center bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white py-3.5 rounded-xl font-bold text-base shadow-lg shadow-orange-200 transition transform hover:-translate-y-0.5"
        >
          Browse Premium Templates →
        </Link>

        <button
          onClick={() => setIsVisible(false)}
          className="block w-full text-center mt-3 text-xs text-gray-400 hover:text-gray-600 underline"
        >
          No thanks, I'll stick with free
        </button>
      </div>
    </div>
  );
}