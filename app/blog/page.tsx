import Link from 'next/link';
import { blogPosts } from '@/app/data/blogs';
import { BookOpen, Calendar, Clock, ArrowRight, Sparkles } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Marriage Biodata Tips, Formats & Matrimony Guides | Biodata Maker Blog',
  description: 'Read expert advice on how to create impressive marriage biodatas, astrological details, cultural formats in Hindi, Marathi, Gujarati & avoiding common errors.',
  keywords: ['marriage biodata tips', 'matrimony format guide', 'biodata sample pdf', 'marriage biodata maker blog'],
};

export default function BlogIndexPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50/60 via-amber-50/20 to-white py-14 px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold text-orange-600 bg-orange-100 px-3 py-1 rounded-full uppercase tracking-wider">
            Matrimony & Biodata Advice
          </span>
          <h1 className="text-4xl font-extrabold text-gray-900 mt-3 mb-4">
            Guides & Tips for Creating the Perfect Marriage Biodata
          </h1>
          <p className="text-gray-600 text-base">
            Expert insights on formats, astrological entries, photo guidelines, and regional cultural traditions to help you make a lasting impression.
          </p>
        </div>

        {/* Featured Blog Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="bg-white rounded-2xl border border-orange-100 p-6 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 text-xs font-semibold text-orange-600 mb-3">
                  <span className="bg-orange-50 px-2.5 py-1 rounded-md border border-orange-100">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1 text-gray-400">
                    <Clock className="w-3.5 h-3.5" /> {post.readTime}
                  </span>
                </div>

                <h2 className="text-xl font-bold text-gray-900 hover:text-orange-600 transition mb-3">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>

                <p className="text-sm text-gray-600 line-clamp-3 leading-relaxed mb-6">
                  {post.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                <span className="text-xs text-gray-400 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" /> {post.date}
                </span>

                <Link
                  href={`/blog/${post.slug}`}
                  className="text-xs font-bold text-orange-600 hover:text-orange-700 flex items-center gap-1 group"
                >
                  Read Article <ArrowRight className="w-3.5 h-3.5 transition transform group-hover:translate-x-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Call to Action Banner */}
        <div className="mt-16 bg-gradient-to-r from-orange-600 to-amber-600 rounded-3xl p-8 text-white text-center shadow-xl">
          <Sparkles className="w-10 h-10 mx-auto mb-3 text-amber-200 animate-bounce" />
          <h3 className="text-2xl font-bold mb-2">Ready to Build Your Marriage Biodata?</h3>
          <p className="text-amber-100 max-w-xl mx-auto text-sm mb-6">
            Choose from 15+ stunning traditional and modern templates with 1-click HD PDF download & instant WhatsApp share.
          </p>
          <Link
            href="/templates"
            className="inline-block bg-white text-orange-700 px-8 py-3.5 rounded-xl font-bold text-sm shadow-lg hover:bg-orange-50 transition transform hover:scale-105"
          >
            Browse All Templates Now
          </Link>
        </div>
      </div>
    </div>
  );
}
