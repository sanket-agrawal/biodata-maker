"use client";

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-bold text-[#8B4513]">
              Biodata Maker
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            <Link href="/" className="text-gray-700 hover:text-[#8B4513] px-1 py-2 text-sm font-medium transition-colors">
              Home
            </Link>
            <Link href="/templates" className="text-gray-700 hover:text-[#8B4513] px-1 py-2 text-sm font-medium transition-colors">
              Templates
            </Link>
            <Link href="/marathi-biodata" className="text-gray-700 hover:text-[#8B4513] px-1 py-2 text-sm font-medium transition-colors">
              Marathi Biodata
            </Link>
            <Link href="/english-biodata" className="text-gray-700 hover:text-[#8B4513] px-1 py-2 text-sm font-medium transition-colors">
              English Biodata
            </Link>
            <Link href="/muslim-biodata" className="text-gray-700 hover:text-[#8B4513] px-1 py-2 text-sm font-medium transition-colors">
              Muslim Biodata
            </Link>
          </nav>

          {/* Right side button */}
          <div className="hidden md:flex items-center">
            <Link 
              href="/create" 
              className="bg-[#C05621] hover:bg-[#9C4215] text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200"
            >
              Create Biodata
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-[#8B4513] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#8B4513]"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              href="/" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[#8B4513] hover:bg-gray-50 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/templates" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[#8B4513] hover:bg-gray-50 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Templates
            </Link>
            <Link 
              href="/marathi-biodata" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[#8B4513] hover:bg-gray-50 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Marathi Biodata
            </Link>
            <Link 
              href="/english-biodata" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[#8B4513] hover:bg-gray-50 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              English Biodata
            </Link>
            <Link 
              href="/muslim-biodata" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[#8B4513] hover:bg-gray-50 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Muslim Biodata
            </Link>
            <div className="pt-4 pb-2 px-3">
              <Link 
                href="/create" 
                className="block w-full text-center bg-[#C05621] hover:bg-[#9C4215] text-white px-4 py-2 rounded-md text-base font-medium transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Create Biodata
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
