import { features } from '@/app/data/features';
import { Gift, Zap, Check } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface Props {
  onStart: () => void;
}

export default function HeroSection({ onStart }: Props) {
   const router = useRouter();
  return (
    <section className="max-w-7xl mx-auto px-4 py-16 text-center">
      <div className="inline-flex items-center gap-2 px-4 py-2 bg-pink-100 rounded-full text-pink-700 text-sm mb-6">
        <Gift className="w-4 h-4" />
        Free templates available • No credit card required
      </div>

      <h2 className="text-5xl font-bold mb-6">
        Create Beautiful Marriage
        <span className="block bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
          Biodata in Minutes
        </span>
      </h2>

      <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
        Choose a template, add details, and download professional biodata instantly.
      </p>

      <button
        onClick={onStart}
        className="px-8 py-4 bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-lg text-lg font-semibold cursor-pointer hover:shadow-2xl transition-all transform hover:scale-105 flex items-center gap-2 mx-auto"
      >
        <Zap className="w-5 h-5" />
        Start Creating Free
      </button>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 max-w-2xl mx-auto mt-12 text-sm">
        {features.map((f, i) => (
          <div key={i} className="flex items-center gap-2 text-gray-700">
            <Check className="w-4 h-4 text-green-600" />
            {f}
          </div>
        ))}
      </div>
    </section>
  );
}
