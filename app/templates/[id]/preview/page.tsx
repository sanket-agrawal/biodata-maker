import { templates } from '@/app/data/templates';
import Link from 'next/link';

type PageProps = {
  params: Promise<{ id: string }>;
};

export default async function PreviewPage({ params }: PageProps) {
    const { id } = await params;
  const template = templates.find(t => t.id === Number(id));

  if (!template) return <div>Template not found</div>;

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10">
      {/* Left Preview */}
      <div className={`aspect-[3/4] rounded-xl bg-gradient-to-br ${template.thumbnailColor}`} />

      {/* Right CTA */}
      <div>
        <h2 className="text-3xl font-bold mb-4">{template.name}</h2>
        <p className="mb-6">
          {template.free ? 'Free Template' : `Premium Template – ₹${template.price}`}
        </p>

        <Link
          href={`/create/${template.id}`}
          className="inline-block px-6 py-3 bg-pink-600 text-white rounded-lg text-lg"
        >
          Create with this Template
        </Link>
      </div>
    </div>
  );
}
