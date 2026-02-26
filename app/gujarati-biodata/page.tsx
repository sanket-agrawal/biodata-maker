import { Metadata } from 'next';
import LanguagePage from '@/app/components/LanguagePage';
import { languagePages } from '@/app/data/languagePages';

const pageData = languagePages['gujarati-biodata'];

export const metadata: Metadata = {
  title: pageData.metadata.title,
  description: pageData.metadata.description,
  keywords: pageData.metadata.keywords,
};

export default function GujaratiBiodataPage() {
  return <LanguagePage data={pageData} />;
}
