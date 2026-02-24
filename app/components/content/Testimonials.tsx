import { Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      initials: "RS",
      name: "Rahul Sharma",
      location: "Noida",
      rating: 5,
      text: "इस वेबसाइट ने काम बहुत आसान कर दिया! मैंने सिर्फ 5 मिनट में अपना बायोडाटा तैयार किया और Image, PDF and Word फॉर्मेट में मिल गया। बहुत बढ़िया!",
      bgColor: "bg-yellow-100",
      textColor: "text-yellow-700"
    },
    {
      initials: "SK",
      name: "Sneha Kulkarni",
      location: "Mumbai",
      rating: 5,
      text: "I created my marriage biodata in English within minutes using this free biodata maker. The templates are clean and easy to use. I would definitely recommend it.",
      bgColor: "bg-orange-100",
      textColor: "text-orange-700"
    },
    {
      initials: "SD",
      name: "Sunita Deshmukh",
      location: "Nagpur",
      rating: 5,
      text: "Very easy to use biodata maker. I got my marriage biodata ready in PDF and Word formats without any trouble.",
      bgColor: "bg-yellow-100",
      textColor: "text-yellow-700"
    },
    {
      initials: "VS",
      name: "Vikram Sharma",
      location: "Patna",
      rating: 5,
      text: "I created a marriage biodata for my daughter using this biodata maker. The Word format made it easy to make changes. Simple and helpful.",
      bgColor: "bg-orange-100",
      textColor: "text-orange-700"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#8B4513] mb-4">
            What Users Say
          </h2>
          <p className="text-gray-600 mb-2">
            Here's what people say after using our biodata maker
          </p>
          <div className="flex justify-center items-center gap-2 text-sm text-gray-600 font-medium">
             <div className="flex text-yellow-400">
               {[...Array(5)].map((_, i) => (
                 <Star key={i} className="w-5 h-5 fill-current" />
               ))}
             </div>
             <span>5.0 out of 5 (1129 reviews)</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${testimonial.bgColor} ${testimonial.textColor}`}>
                  {testimonial.initials}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">{testimonial.name}</h4>
                  <p className="text-xs text-gray-500">{testimonial.location}</p>
                </div>
              </div>
              <div className="flex text-yellow-400 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                {testimonial.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
