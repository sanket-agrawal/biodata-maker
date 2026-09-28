import { Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      initials: "RS",
      name: "Rahul Sharma",
      location: "Noida, UP",
      rating: 5,
      text: "Created my biodata in just 5 minutes! The Royal Gold template looked absolutely stunning. My parents were so impressed. Got 3 positive responses within a week of sharing.",
      bgColor: "bg-yellow-100",
      textColor: "text-yellow-700",
      template: "Royal Gold Maharani"
    },
    {
      initials: "SK",
      name: "Sneha Kulkarni",
      location: "Pune, MH",
      rating: 5,
      text: "I was looking for a Marathi biodata maker and this was perfect. The templates are beautiful and I could switch to Marathi instantly. Downloaded PDF and shared on WhatsApp easily.",
      bgColor: "bg-orange-100",
      textColor: "text-orange-700",
      template: "Classic Elegant"
    },
    {
      initials: "SD",
      name: "Sunita Deshmukh",
      location: "Nagpur, MH",
      rating: 5,
      text: "Made biodata for my daughter. The Divine Ganesha template was absolutely gorgeous. Worth every rupee! The photo cropper made her picture look very professional.",
      bgColor: "bg-yellow-100",
      textColor: "text-yellow-700",
      template: "Divine Ganesha Sunset"
    },
    {
      initials: "VS",
      name: "Vikram Shukla",
      location: "Patna, Bihar",
      rating: 5,
      text: "Very easy to use. No login needed, no fuss. Just picked a free template, filled details, and PDF was ready. Shared on family WhatsApp group immediately.",
      bgColor: "bg-orange-100",
      textColor: "text-orange-700",
      template: "Traditional Red"
    },
    {
      initials: "PA",
      name: "Priya Agarwal",
      location: "Jaipur, RJ",
      rating: 5,
      text: "The premium templates are really premium! I bought the Luxury Black & Gold one and it looked like it was made by a professional designer. Family relatives kept asking where I got it from.",
      bgColor: "bg-yellow-100",
      textColor: "text-yellow-700",
      template: "Luxury Black & Gold"
    },
    {
      initials: "AK",
      name: "Amit Kumar",
      location: "Delhi",
      rating: 5,
      text: "Best free biodata maker I found online. Tried 4-5 other websites but they all had hidden charges or ugly designs. This one is genuine free + the paid ones are very affordable.",
      bgColor: "bg-orange-100",
      textColor: "text-orange-700",
      template: "Modern Minimal"
    },
    {
      initials: "MJ",
      name: "Meera Joshi",
      location: "Mumbai, MH",
      rating: 5,
      text: "Used the Gujarati language option for my brother's biodata. Everything translated perfectly. The Emerald Palace template gave it a very rich, traditional look.",
      bgColor: "bg-yellow-100",
      textColor: "text-yellow-700",
      template: "Emerald Palace Regal"
    },
    {
      initials: "RP",
      name: "Ravi Patel",
      location: "Ahmedabad, GJ",
      rating: 5,
      text: "I'm a software engineer and I appreciate good UX. This biodata maker nails it \u2014 real-time preview, smooth photo upload, instant download. Paid \u20B949 for premium template happily.",
      bgColor: "bg-orange-100",
      textColor: "text-orange-700",
      template: "Vedic Marigold Festive"
    },
    {
      initials: "NK",
      name: "Neha Kashyap",
      location: "Lucknow, UP",
      rating: 5,
      text: "Created biodatas for both my brother and sister using different templates. The Rose Quartz one for my sister looked so elegant. Both got great responses!",
      bgColor: "bg-yellow-100",
      textColor: "text-yellow-700",
      template: "Rose Quartz Deluxe"
    },
    {
      initials: "DG",
      name: "Deepak Gupta",
      location: "Bhopal, MP",
      rating: 5,
      text: "My mother specifically wanted a biodata with Ganeshay Namah at the top. This maker had exactly that option along with beautiful gold borders. She was very happy!",
      bgColor: "bg-orange-100",
      textColor: "text-orange-700",
      template: "Shubh Vivaah Bridal Crimson"
    }
  ];

  return (
    <section className="py-16 bg-white" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-xs font-bold text-orange-600 bg-orange-100 px-3.5 py-1.5 rounded-full uppercase tracking-wider">
            Trusted by Families
          </span>
          <h2 className="text-3xl font-bold text-[#8B4513] mt-3 mb-3">
            What Our Users Say
          </h2>
          <p className="text-gray-600 mb-3">
            Join 2,800+ families who created beautiful marriage biodatas
          </p>
          <div className="flex justify-center items-center gap-2 text-sm text-gray-600 font-medium">
             <div className="flex text-yellow-400">
               {[...Array(5)].map((_, i) => (
                 <Star key={i} className="w-5 h-5 fill-current" />
               ))}
             </div>
             <span className="font-bold">4.9</span>
             <span>out of 5 (2,847 reviews)</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {testimonials.slice(0, 8).map((testimonial, index) => (
            <div key={index} className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${testimonial.bgColor} ${testimonial.textColor}`}>
                  {testimonial.initials}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">{testimonial.name}</h4>
                  <p className="text-xs text-gray-500">{testimonial.location}</p>
                </div>
              </div>
              <div className="flex text-yellow-400 mb-2.5">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-3">
                &ldquo;{testimonial.text}&rdquo;
              </p>
              <p className="text-xs text-orange-600 font-semibold">
                Used: {testimonial.template}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Trust Bar */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse"></span>
            <span className="font-medium">2,847+ biodatas created this month</span>
          </div>
          <div className="hidden sm:block text-gray-300">|</div>
          <div className="flex items-center gap-1.5">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-current" />
              ))}
            </div>
            <span className="font-medium">Rated 4.9/5 by users</span>
          </div>
        </div>
      </div>
    </section>
  );
}