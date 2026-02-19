export type TemplateColorTheme = {
  primary: string;
  secondary: string;
  text: string;
  background: string;
  accent: string;
  border: string;
};

export type TemplateFont = {
  heading: string;
  body: string;
};

export type TemplateLayout = 'classic' | 'modern-sidebar' | 'centered' | 'minimal';

export type TemplateConfig = {
  id: number;
  name: string;
  layout: TemplateLayout;
  colors: TemplateColorTheme;
  fonts: TemplateFont;
  borderStyle: 'none' | 'simple' | 'double' | 'decorated';
  headerStyle: 'simple' | 'boxed' | 'underlined' | 'centered-box';
  sectionStyle: 'simple' | 'boxed' | 'underlined' | 'background';
  showPhoto: boolean;
  watermark?: string;
};
