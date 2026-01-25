"use client";

import ClassicEleganceTemplate from "../templates/ClassicEleganceTemplate";
import RoyalBlueClassicTemplate from "../templates/RoyalClassicBlue";
import { BiodataForm } from "@/app/types/biodata";

const templateMap: Record<number, React.ComponentType<any>> = {
  1: ClassicEleganceTemplate,
  2: RoyalBlueClassicTemplate,
};

interface Props {
  selectedTemplate: number | null;
  data: BiodataForm;
}

export default function TemplatePreview({ selectedTemplate, data }: Props) {
  if (!selectedTemplate) return null;

  const TemplateComponent = templateMap[selectedTemplate];
  if (!TemplateComponent) return null;

  return (
    <div className="flex justify-center my-16">
      <TemplateComponent data={data} />
    </div>
  );
}
