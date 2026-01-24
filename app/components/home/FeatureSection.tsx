import { FileDown, Sparkles, Zap } from "lucide-react";

export default function FeatureSection(){
    return (
              <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-white/50 rounded-3xl">
                <h3 className="text-3xl font-bold text-center mb-12">Why Choose BiodataMaker?</h3>
                
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center p-6 rounded-xl hover:bg-white transition-all">
                    <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Sparkles className="w-8 h-8 text-pink-600" />
                    </div>
                    <h4 className="text-xl font-bold mb-3">Beautiful Templates</h4>
                    <p className="text-gray-600">Professional designs better than Canva, specially crafted for Indian marriage biodata with cultural sensitivity</p>
                  </div>
                  
                  <div className="text-center p-6 rounded-xl hover:bg-white transition-all">
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Zap className="w-8 h-8 text-purple-600" />
                    </div>
                    <h4 className="text-xl font-bold mb-3">Instant Download</h4>
                    <p className="text-gray-600">Fill the form and download immediately. No waiting, no signup walls, no hidden charges for basic templates</p>
                  </div>
                  
                  <div className="text-center p-6 rounded-xl hover:bg-white transition-all">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <FileDown className="w-8 h-8 text-blue-600" />
                    </div>
                    <h4 className="text-xl font-bold mb-3">Multiple Formats</h4>
                    <p className="text-gray-600">Download as high-quality PDF for printing or PNG/JPG for easy sharing on WhatsApp and social media</p>
                  </div>
                </div>
              </section>
    )
}