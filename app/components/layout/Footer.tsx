import Link from 'next/link';
import { Mail, MapPin } from 'lucide-react';

export default function Footer() {
  const socialLinks = [
    "Facebook", "Pinterest", "Instagram", "X (Twitter)", "YouTube", "Reddit", "Medium", "Quora", "SoundCloud"
  ];

  return (
    <footer className="bg-[#5D2E14] text-orange-50 py-12 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand & Description */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white">Biodata Maker</h3>
            <p className="text-orange-100/80 leading-relaxed">
              Create biodata for marriage online using simple templates for all communities. Download biodata format in PDF, Word, or image. Please note this is not a matchmaking or dating service.
            </p>
            <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-orange-200">
              {socialLinks.map((link) => (
                <a key={link} href="#" className="hover:text-white transition-colors">
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'Templates', 'Create Biodata', 'About Us', 'Contact Us'].map((item) => (
                <li key={item}>
                  <Link href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`} className="hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Languages */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Languages</h4>
            <ul className="space-y-3">
              {['Marathi Biodata', 'Gujarati Biodata', 'English Biodata', 'Bengali Biodata', 'Tamil Biodata', 'Telugu Biodata'].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase().replace(' ', '-')}`} className="hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Communities */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Communities</h4>
            <ul className="space-y-3">
              {['Muslim Biodata', 'Hindu Biodata', 'Buddhist Biodata'].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase().replace(' ', '-')}`} className="hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info & Copyright */}
        <div className="border-t border-orange-900/50 pt-8 text-center text-xs text-orange-200/60 space-y-4">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <div className="flex items-center gap-2">
              <Mail className="w-3 h-3" />
              <span>Email: support@biodatamaker.app</span>
            </div>
            <div className="hidden md:block">|</div>
             <div>Telegram: @biodatamaker</div>
          </div>
          
          <div className="flex items-center justify-center gap-2">
            <MapPin className="w-3 h-3" />
            <span>Delhi - 110088</span>
          </div>

          <div className="pt-4">
            <span className="block md:inline mb-2 md:mb-0">© {new Date().getFullYear()} Biodata Maker. All rights reserved.</span>
            <span className="hidden md:inline mx-2">|</span>
            <div className="inline-flex gap-4">
              <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link>
              <Link href="/refund-policy" className="hover:text-white transition-colors">Refund Policy</Link>
              <Link href="/sitemap" className="hover:text-white transition-colors">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
