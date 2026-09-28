"use client";

import Link from 'next/link';
import { Sparkles } from 'lucide-react';

export default function StickyMobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white/95 backdrop-blur-md border-t border-orange-200 shadow-[0_-4px_20px_rgba(0,0,0,0.1)] px-4 py-3">
      <div className="flex items-center justify-between gap-3 max-w-lg mx-auto">
        <div className="flex-1 min-w-0">
          <p className="text-xs font-bold text-gray-900 truncate">Create Marriage Biodata</p>
          <p className="text-[10px] text-gray-500 truncate">Free templates • Instant PDF download</p>
        </div>
        <Link
          href="/create"
          className="flex items-center gap-1.5 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white px-5 py-2.5 rounded-xl font-bold text-sm shadow-lg shadow-orange-200 transition transform hover:scale-105 whitespace-nowrap"
        >
          <Sparkles className="w-3.5 h-3.5" />
          Start Free
        </Link>
      </div>
    </div>
  );
}