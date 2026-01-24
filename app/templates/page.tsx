import { templates } from '@/app/data/templates';
import Link from 'next/link';

export default function TemplatesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-10 text-center">Choose a Biodata Template</h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {templates.map(template => (
          <div key={template.id} className="border rounded-xl p-4 shadow hover:shadow-lg transition">
            <div
              className={`aspect-[3/4] rounded-lg bg-gradient-to-br ${template.thumbnailColor}`}
            />

            <div className="mt-4">
              <h3 className="text-lg font-semibold">{template.name}</h3>
              <p className="text-sm mt-1">
                {template.free ? (
                  <span className="text-green-600">Free</span>
                ) : (
                  <span className="text-pink-600">₹{template.price}</span>
                )}
              </p>

              <Link
                href={`/templates/${template.id}/preview`}
                className="block mt-4 text-center px-4 py-2 bg-pink-600 text-white rounded-lg"
              >
                Select
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
