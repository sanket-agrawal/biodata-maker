import Link from 'next/link';
import { Check } from 'lucide-react';

interface Props {
  onStart: () => void;
}

export default function HeroSection({ onStart }: Props) {
  return (
    <section className="bg-gradient-to-br from-[#FFF8F0] to-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-left space-y-8">
            <h1 className="text-5xl lg:text-6xl font-bold text-[#8B4513] leading-tight">
              Free Marriage Biodata Maker
            </h1>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              Create bio data for marriage online for free. Use Biodata Maker to make biodata for marriage and download in PDF, Word or Image format in minutes. No registration needed.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link 
                href="/create"
                className="px-8 py-3 bg-[#C05621] text-white font-semibold rounded-lg hover:bg-[#9C4215] transition-colors text-lg shadow-sm"
              >
                Create Biodata
              </Link>
              <button 
                onClick={onStart}
                className="px-8 py-3 bg-white text-[#C05621] border-2 border-[#C05621] font-semibold rounded-lg hover:bg-orange-50 transition-colors text-lg"
              >
                View Templates
              </button>
            </div>
          </div>

          {/* Right Image Placeholder */}
          <div className="relative h-[400px] lg:h-[500px] w-full flex items-center justify-center">
            {/* Using a placeholder visual since we don't have the exact image assets yet */}
            <div className="relative w-full h-full max-w-md mx-auto">
              <div className="absolute top-0 right-0 w-48 h-64 bg-white shadow-xl rounded-lg transform rotate-6 border border-gray-100 p-2 z-10">
                 <div className="w-full h-full bg-gray-50 rounded flex items-center justify-center text-xs text-gray-400">Template 1</div>
              </div>
              <div className="absolute top-8 left-8 w-48 h-64 bg-white shadow-xl rounded-lg transform -rotate-6 border border-gray-100 p-2 z-20">
                 <div className="w-full h-full bg-pink-50 rounded flex items-center justify-center text-xs text-gray-400">Template 2</div>
              </div>
              <div className="absolute bottom-0 right-16 w-52 h-72 bg-white shadow-2xl rounded-lg transform rotate-2 border border-gray-100 p-2 z-30">
                 <div className="w-full h-full bg-orange-50 rounded flex items-center justify-center text-xs text-gray-400">Featured Template</div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Bar */}
        <div className="mt-16 bg-[#FFFBEB] border border-[#FEF3C7] rounded-xl p-8 shadow-sm">
          <div className="grid md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-[#FEF3C7]">
            <div className="px-4">
              <p className="text-sm text-gray-500 uppercase tracking-wide font-medium mb-1">No Registration Required</p>
              <p className="text-xl font-bold text-[#92400E]">Create Biodata Quickly</p>
            </div>
            <div className="px-4 pt-4 md:pt-0">
              <p className="text-sm text-gray-500 uppercase tracking-wide font-medium mb-1">25+ Templates</p>
              <p className="text-xl font-bold text-[#92400E]">All Communities</p>
            </div>
            <div className="px-4 pt-4 md:pt-0">
              <p className="text-sm text-gray-500 uppercase tracking-wide font-medium mb-1">Multiple Formats</p>
              <p className="text-xl font-bold text-[#92400E]">PDF, Word & Image</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
