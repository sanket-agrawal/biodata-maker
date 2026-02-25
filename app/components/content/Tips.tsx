export default function Tips() {
  const dos = [
    "Use a recent and clear photo",
    "Share correct and honest details",
    "Add family background information",
    "Mention your hobbies and interests",
    "Keep the biodata short and neat",
    "Use simple and clear language",
    "Add contact details properly",
    "Use a ready biodata template to keep things clear"
  ];

  const donts = [
    "Avoid old or unclear photos",
    "Don't exaggerate your details",
    "Avoid negative or unnecessary information",
    "Don't share too much personal information",
    "Don't make the biodata too long",
    "Avoid slang or confusing words",
    "Don't add information that is not needed",
    "Avoid messy or unclear formatting"
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-[#8B4513] mb-4">
          Tips for Creating a Good Marriage Biodata
        </h2>
        <p className="text-lg text-gray-700 mb-12">
          These simple tips can help you make a clear and easy-to-read marriage biodata.
        </p>

        <div className="space-y-12">
          {/* Do's */}
          <div>
            <h3 className="text-xl font-bold text-green-800 bg-green-50 px-4 py-2 rounded-t-lg inline-block mb-4">
              What You Should Do
            </h3>
            <ul className="grid md:grid-cols-2 gap-4 bg-green-50/30 p-6 rounded-lg border border-green-100">
              {dos.map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-gray-700">
                  <span className="w-2 h-2 bg-green-500 rounded-full" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Don'ts */}
          <div>
            <h3 className="text-xl font-bold text-red-800 bg-red-50 px-4 py-2 rounded-t-lg inline-block mb-4">
              What You Should Avoid
            </h3>
            <ul className="grid md:grid-cols-2 gap-4 bg-red-50/30 p-6 rounded-lg border border-red-100">
              {donts.map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-gray-700">
                  <span className="w-2 h-2 bg-red-500 rounded-full" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
