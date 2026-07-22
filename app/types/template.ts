export type TemplateColorTheme = {
  primary: string;
  secondary: string;
  text: string;
  background: string;
  accent: string;
  border: string;
  headerBg?: string;
  headerText?: string;
};

export type TemplateFont = {
  heading: string;
  body: string;
};

export type TemplateLayout = 'classic' | 'modern-sidebar' | 'centered' | 'minimal' | 'royal-grid' | 'circle-avatar-center';

export type TemplateConfig = {
  id: number;
  name: string;
  layout: TemplateLayout;
  colors: TemplateColorTheme;
  fonts: TemplateFont;
  borderStyle: 'none' | 'simple' | 'double' | 'decorated' | 'ornate-gold' | 'royal-vintage' | 'mandala' | 'gold-filigree-corners';
  headerStyle: 'simple' | 'boxed' | 'underlined' | 'centered-box' | 'royal-banner' | 'sacred-header' | 'center-title-maroon';
  sectionStyle: 'simple' | 'boxed' | 'underlined' | 'background' | 'ribbon' | 'gold-accent' | 'cursive-center';
  symbol?: 'ganesha' | 'om' | 'swastik' | 'radha-krishna' | 'lotus' | 'none';
  showPhoto: boolean;
  watermark?: string;
};
