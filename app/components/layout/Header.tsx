import { Sparkles } from "lucide-react";
import Link from 'next/link';

export default function Header(){
    return(
              <header className="border-b border-gray-200 bg-white/80 backdrop-blur-sm sticky top-0 z-10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-pink-600" />
            <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              BiodataPlus
            </h1>
            </Link>
          </div>
        </div>
      </header>
    )
}