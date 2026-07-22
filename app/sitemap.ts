import { MetadataRoute } from 'next';
import { blogPosts } from '@/app/data/blogs';
import { templates } from '@/app/data/templates';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://biodatamaker.com';

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: new Date() },
    { url: `${baseUrl}/templates`, lastModified: new Date() },
    { url: `${baseUrl}/blog`, lastModified: new Date() },
    { url: `${baseUrl}/hindu-biodata`, lastModified: new Date() },
    { url: `${baseUrl}/marathi-biodata`, lastModified: new Date() },
    { url: `${baseUrl}/gujarati-biodata`, lastModified: new Date() },
    { url: `${baseUrl}/muslim-biodata`, lastModified: new Date() },
    { url: `${baseUrl}/bengali-biodata`, lastModified: new Date() },
    { url: `${baseUrl}/english-biodata`, lastModified: new Date() },
    { url: `${baseUrl}/privacy-policy`, lastModified: new Date() },
    { url: `${baseUrl}/terms`, lastModified: new Date() },
    { url: `${baseUrl}/refund-policy`, lastModified: new Date() },
  ];

  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(),
  }));

  const templateRoutes: MetadataRoute.Sitemap = templates.map((template) => ({
    url: `${baseUrl}/create/${template.id}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...blogRoutes, ...templateRoutes];
}
