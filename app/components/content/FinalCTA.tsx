import Link from 'next/link';

export default function FinalCTA() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#C05621] rounded-lg p-8 md:p-12 text-center shadow-lg">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Create Your Marriage Biodata?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-3xl mx-auto leading-relaxed">
            Start creating your marriage biodata today using a simple, trusted, and ready-to-use format. Prepare your biodata online and share it confidently with families and relatives.
          </p>
          <Link 
            href="/create"
            className="inline-block bg-white text-[#C05621] font-bold py-3 px-8 rounded-md hover:bg-orange-50 transition-colors shadow-sm"
          >
            Start Creating Biodata
          </Link>
        </div>
      </div>
    </section>
  );
}
