import { CheckCircle2 } from 'lucide-react';

export default function WhyChooseUs() {
  const features = [
    "Easy to Use: Fill in your details and your biodata is ready",
    "Biodata Templates: More than 25 templates for different communities",
    "Biodata Format Options: Choose the format that suits you",
    "PDF Download: Download your marriage biodata as PDF",
    "Word Download: Get your biodata in Word format for editing",
    "Helpful Suggestions: Get simple tips while filling details",
    "Marriage Resume Option: Create a simple marriage resume",
    "Photo Upload: Add your photo to the biodata",
    "Multiple Languages: Available in Marathi, Hindi, Gujarati, and English",
    "Instant Download: Download your biodata immediately",
    "Private & Safe: Your details are not shared with anyone"
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-[#8B4513] mb-8">
          What You Get with Our Biodata Maker
        </h2>
        <p className="text-lg text-gray-700 mb-8">
          Our biodata maker gives you all the basic things needed to create a clean and easy-to-read marriage biodata.
        </p>

        <div className="grid md:grid-cols-2 gap-4">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-orange-50 transition-colors">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
              <span className="text-gray-700">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
