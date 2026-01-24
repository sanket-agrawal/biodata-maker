interface Props {
  onStart: () => void;
}

export default function CTASection({ onStart }: Props) {
  return (
    <section className="bg-gradient-to-r from-pink-600 to-purple-600 py-16 lg:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          Ready to Create Your Perfect Biodata?
        </h3>

        <p className="text-lg md:text-xl mb-8 opacity-90">
          Join thousands who've created beautiful marriage biodata with us
        </p>

        <button
          onClick={onStart}
          className="px-8 py-4 bg-white text-pink-600 rounded-lg text-lg font-bold hover:shadow-2xl transition-all transform hover:scale-105"
        >
          Get Started Now - It's Free
        </button>

        <p className="text-sm mt-4 opacity-75">
          No signup required • Download instantly
        </p>
      </div>
    </section>
  );
}
