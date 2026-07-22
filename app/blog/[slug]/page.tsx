import { blogPosts } from '@/app/data/blogs';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, User, Share2, Sparkles } from 'lucide-react';
import { Metadata } from 'next';

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find(p => p.slug === slug);
  if (!post) return { title: 'Article Not Found' };

  return {
    title: `${post.title} | Marriage Biodata Maker`,
    description: post.excerpt,
    keywords: post.metaKeywords,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    notFound();
  }

  // Schema.org Article JSON-LD
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    author: {
      '@type': 'Person',
      name: post.author,
    },
    datePublished: post.date,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen bg-gradient-to-b from-orange-50/40 via-white to-white py-12 px-4">
        <div className="max-w-4xl mx-auto">
          
          {/* Back link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs font-semibold text-orange-600 hover:text-orange-700 mb-8 bg-orange-50 px-3 py-1.5 rounded-lg border border-orange-100 transition"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Blog Articles
          </Link>

          {/* Article Header */}
          <header className="mb-10 border-b border-gray-100 pb-8">
            <span className="text-xs font-bold text-orange-600 uppercase tracking-wider bg-orange-100 px-3 py-1 rounded-full">
              {post.category}
            </span>

            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-4 mb-4 leading-tight">
              {post.title}
            </h1>

            <p className="text-gray-600 text-lg leading-relaxed mb-6 font-medium">
              {post.excerpt}
            </p>

            <div className="flex flex-wrap items-center gap-6 text-xs text-gray-500 font-medium">
              <span className="flex items-center gap-1.5">
                <User className="w-4 h-4 text-orange-500" /> {post.author}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-orange-500" /> {post.date}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-orange-500" /> {post.readTime}
              </span>
            </div>
          </header>

          {/* Article Content */}
          <article className="prose prose-orange max-w-none text-gray-800 leading-relaxed space-y-6">
            {post.content.split('\n\n').map((paragraph, index) => {
              if (paragraph.startsWith('## ')) {
                return (
                  <h2 key={index} className="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b border-orange-100 pb-2">
                    {paragraph.replace('## ', '')}
                  </h2>
                );
              }
              if (paragraph.startsWith('### ')) {
                return (
                  <h3 key={index} className="text-xl font-semibold text-gray-800 mt-6 mb-3">
                    {paragraph.replace('### ', '')}
                  </h3>
                );
              }
              return (
                <p key={index} className="text-base text-gray-700 leading-7">
                  {paragraph}
                </p>
              );
            })}
          </article>

          {/* Bottom CTA Box */}
          <div className="mt-14 bg-gradient-to-r from-amber-500 to-orange-600 rounded-2xl p-6 text-white text-center shadow-lg">
            <h3 className="text-xl font-bold mb-2">Create Your Marriage Biodata in 2 Minutes</h3>
            <p className="text-xs text-amber-100 mb-4 max-w-lg mx-auto">
              Select from 3 Free and 12 Ultra-Premium designs with instant PDF download and WhatsApp share.
            </p>
            <Link
              href="/templates"
              className="inline-block bg-white text-orange-700 px-6 py-3 rounded-xl font-bold text-sm shadow hover:bg-orange-50 transition"
            >
              Choose Template & Build Now
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
