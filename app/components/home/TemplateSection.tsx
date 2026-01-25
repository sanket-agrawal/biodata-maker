"use client";

import ClassicEleganceTemplate from "../templates/ClassicEleganceTemplate";
import RoyalBlueClassicTemplate from "../templates/RoyalClassicBlue";

interface TemplateMeta {
  id: number;
  name: string;
  free: boolean;
  price?: number;
  component: React.ComponentType<any>;
}

const templates: TemplateMeta[] = [
  {
    id: 1,
    name: "Classic Elegance",
    free: true,
    component: ClassicEleganceTemplate,
  },
  {
    id: 2,
    name: "Royal Blue Classic",
    free: false,
    price: 49,
    component: RoyalBlueClassicTemplate,
  },
];

interface Props {
  selectedTemplate: number | null;
  onSelectTemplate: (id: number) => void;
}

export default function TemplateSection({
  selectedTemplate,
  onSelectTemplate,
}: Props) {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
      {/* Header */}
      <div className="text-center mb-12">
        <h3 className="text-3xl lg:text-4xl font-bold mb-4">
          Choose Your Template
        </h3>
        <p className="text-gray-600 text-lg">
          Start with our free templates or unlock premium designs
        </p>
      </div>

      {/* Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {templates.map((template) => {
          const TemplateComponent = template.component;

          return (
            <div
              key={template.id}
              onClick={() => onSelectTemplate(template.id)}
              className={`cursor-pointer transition-all ${
                selectedTemplate === template.id
                  ? "ring-4 ring-pink-500 rounded-xl"
                  : ""
              }`}
            >
              <div className="relative aspect-[3/4] bg-white rounded-xl shadow-lg hover:shadow-2xl overflow-hidden">
                {/* Premium badge */}
                {!template.free && (
                  <div className="absolute top-4 right-4 z-20 px-3 py-1 bg-gradient-to-r from-yellow-400 to-yellow-600 text-white text-sm font-bold rounded-full shadow-lg">
                    Premium
                  </div>
                )}

                {/* Template thumbnail (scaled real template) */}
                <div className="absolute inset-0 origin-top-left scale-[0.22] pointer-events-none">
                  <TemplateComponent
                    data={{
                      name: "Preview Name",
                      dateOfBirth: "22/07/1997",
                      placeOfBirth: "Pune",
                      occupation: "Software Engineer",
                      education: "B.Tech",
                      fatherName: "Shri. Sanjay Agrawal",
                      motherName: "Mamta",
                    }}
                  />
                </div>
              </div>

              {/* Name + Price */}
              <div className="mt-4 text-center">
                <h4 className="text-lg font-semibold">{template.name}</h4>
                <p className="text-sm text-gray-600 mt-1">
                  {template.free ? (
                    <span className="text-green-600 font-medium">
                      Free Forever
                    </span>
                  ) : (
                    <span className="font-medium">
                      ₹{template.price} one-time
                    </span>
                  )}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer CTA */}
      <div className="text-center mt-12">
        <button className="px-6 py-3 text-pink-600 font-semibold hover:text-pink-700 transition-all">
          View All Templates →
        </button>
      </div>
    </section>
  );
}
