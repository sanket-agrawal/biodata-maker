import Link from 'next/link';

export default function CommunityTemplates() {
  const communities = [
    "Marathi Marriage Biodata Template",
    "Hindi Marriage Biodata Template",
    "Gujarati Marriage Biodata Template",
    "Hindu Marriage Biodata Format",
    "Muslim Marriage Biodata Format",
    "Buddhist Marriage Biodata Template",
    "Christian Marriage Biodata Template"
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-[#8B4513] mb-6">
          Marriage Biodata Templates for All Communities
        </h2>
        <p className="text-lg text-gray-700 mb-8">
          We provide marriage biodata templates for different communities and languages. Each template is easy to read and includes all important details. You can download your biodata as PDF, Word, or image and share it easily.
        </p>
        
        <div className="space-y-6">
          {communities.map((item, index) => (
            <div key={index} className="border-b border-gray-100 pb-4 last:border-0">
              <h3 className="text-xl font-semibold text-[#C05621] mb-2">{item}</h3>
              <p className="text-gray-600 mb-2">
                This {item.split(' ')[0]} biodata template is made for {item.split(' ')[0]} families. It includes family details, education, job, and preferences. You can download your {item.split(' ')[0]} marriage biodata as PDF or Word.
              </p>
              <Link href="/create" className="text-blue-600 hover:underline font-medium">
                Create {item.replace('Template', '').replace('Format', '')} Online →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
