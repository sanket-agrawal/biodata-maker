import { templates } from "@/app/data/templates";

interface Props {
  selectedTemplate: number | null;
  onSelectTemplate: (id: number) => void;
}

export default function TemplateSection({ onSelectTemplate }: Props){
    return (
              <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="text-center mb-12">
          <h3 className="text-3xl lg:text-4xl font-bold mb-4">Choose Your Template</h3>
          <p className="text-gray-600 text-lg">Start with our free templates or unlock premium designs</p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {templates.map(template => (
            <div 
              key={template.id}
              onClick={() => onSelectTemplate(template.id)}
              className="group cursor-pointer"
            >
              <div className={`relative aspect-[3/4] bg-gradient-to-br ${template.thumbnailColor} rounded-xl shadow-lg group-hover:shadow-2xl transition-all transform group-hover:scale-105 overflow-hidden`}>
                {!template.free && (
                  <div className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-yellow-400 to-yellow-600 text-white text-sm font-bold rounded-full shadow-lg">
                    Premium
                  </div>
                )}
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <div className="text-center w-full">
                    <div className="w-24 h-24 bg-white/70 rounded-full mx-auto mb-6 border-4 border-white/50"></div>
                    <div className="space-y-3">
                      <div className="h-4 bg-white/70 rounded-full"></div>
                      <div className="h-4 bg-white/70 rounded-full w-3/4 mx-auto"></div>
                      <div className="h-3 bg-white/50 rounded-full w-1/2 mx-auto mt-6"></div>
                      <div className="h-3 bg-white/50 rounded-full w-2/3 mx-auto"></div>
                      <div className="h-3 bg-white/50 rounded-full w-3/4 mx-auto"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4 text-center">
                <h4 className="text-lg font-semibold">{template.name}</h4>
                <p className="text-sm text-gray-600 mt-1">
                  {template.free ? (
                    <span className="text-green-600 font-medium">Free Forever</span>
                  ) : (
                    <span className="font-medium">₹49 one-time</span>
                  )}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-6 py-3 text-pink-600 font-semibold hover:text-pink-700 transition-all">
            View All Templates →
          </button>
        </div>
      </section>
    )
}