import { TemplateConfig } from '@/app/types/template';

export type Template = {
  id: number;
  name: string;
  category: 'basic' | 'premium';
  free: boolean;
  price?: number;
  thumbnailColor: string;
  config: TemplateConfig;
};

const createConfig = (
  id: number,
  name: string,
  layout: TemplateConfig['layout'],
  primary: string,
  secondary: string,
  fontHeading: string,
  fontBody: string,
  border: TemplateConfig['borderStyle'] = 'simple',
  header: TemplateConfig['headerStyle'] = 'simple',
  section: TemplateConfig['sectionStyle'] = 'simple'
): TemplateConfig => ({
  id,
  name,
  layout,
  colors: {
    primary,
    secondary,
    text: '#1f2937',
    background: '#ffffff',
    accent: primary,
    border: primary
  },
  fonts: {
    heading: fontHeading,
    body: fontBody
  },
  borderStyle: border,
  headerStyle: header,
  sectionStyle: section,
  showPhoto: true
});

export const templates: Template[] = [
  // --- FREE TEMPLATES (1-10) ---
  {
    id: 1,
    name: 'Classic Elegance',
    category: 'basic',
    free: true,
    thumbnailColor: 'from-purple-100 to-pink-100',
    config: createConfig(1, 'Classic Elegance', 'classic', '#b8860b', '#fef3c7', 'Georgia, serif', 'Arial, sans-serif', 'double', 'simple', 'underlined')
  },
  {
    id: 2,
    name: 'Modern Minimal',
    category: 'basic',
    free: true,
    thumbnailColor: 'from-blue-100 to-cyan-100',
    config: createConfig(2, 'Modern Minimal', 'minimal', '#2563eb', '#dbeafe', 'Helvetica, sans-serif', 'Helvetica, sans-serif', 'none', 'simple', 'simple')
  },
  {
    id: 3,
    name: 'Traditional Red',
    category: 'basic',
    free: true,
    thumbnailColor: 'from-red-100 to-orange-100',
    config: createConfig(3, 'Traditional Red', 'classic', '#dc2626', '#fee2e2', 'Times New Roman, serif', 'Times New Roman, serif', 'decorated', 'boxed', 'boxed')
  },
  {
    id: 4,
    name: 'Simple Blue',
    category: 'basic',
    free: true,
    thumbnailColor: 'from-blue-50 to-indigo-50',
    config: createConfig(4, 'Simple Blue', 'classic', '#3b82f6', '#eff6ff', 'Verdana, sans-serif', 'Arial, sans-serif', 'simple', 'underlined', 'simple')
  },
  {
    id: 5,
    name: 'Green Nature',
    category: 'basic',
    free: true,
    thumbnailColor: 'from-green-100 to-emerald-100',
    config: createConfig(5, 'Green Nature', 'modern-sidebar', '#16a34a', '#dcfce7', 'Trebuchet MS, sans-serif', 'Trebuchet MS, sans-serif', 'none', 'centered-box', 'background')
  },
  {
    id: 6,
    name: 'Purple Haze',
    category: 'basic',
    free: true,
    thumbnailColor: 'from-purple-100 to-violet-100',
    config: createConfig(6, 'Purple Haze', 'centered', '#7c3aed', '#ede9fe', 'Garamond, serif', 'Arial, sans-serif', 'double', 'boxed', 'underlined')
  },
  {
    id: 7,
    name: 'Grey Professional',
    category: 'basic',
    free: true,
    thumbnailColor: 'from-gray-100 to-slate-100',
    config: createConfig(7, 'Grey Professional', 'minimal', '#475569', '#f1f5f9', 'Arial, sans-serif', 'Arial, sans-serif', 'simple', 'simple', 'simple')
  },
  {
    id: 8,
    name: 'Orange Sunset',
    category: 'basic',
    free: true,
    thumbnailColor: 'from-orange-100 to-amber-100',
    config: createConfig(8, 'Orange Sunset', 'classic', '#ea580c', '#ffedd5', 'Georgia, serif', 'Verdana, sans-serif', 'simple', 'underlined', 'background')
  },
  {
    id: 9,
    name: 'Teal Ocean',
    category: 'basic',
    free: true,
    thumbnailColor: 'from-teal-100 to-cyan-100',
    config: createConfig(9, 'Teal Ocean', 'modern-sidebar', '#0d9488', '#ccfbf1', 'Tahoma, sans-serif', 'Arial, sans-serif', 'none', 'centered-box', 'boxed')
  },
  {
    id: 10,
    name: 'Pink Rose',
    category: 'basic',
    free: true,
    thumbnailColor: 'from-pink-100 to-rose-100',
    config: createConfig(10, 'Pink Rose', 'centered', '#e11d48', '#ffe4e6', 'Courier New, monospace', 'Courier New, monospace', 'decorated', 'boxed', 'underlined')
  },

  // --- PAID TEMPLATES (11-35) ---
  {
    id: 11,
    name: 'Royal Gold Premium',
    category: 'premium',
    free: false,
    price: 49,
    thumbnailColor: 'from-yellow-200 to-amber-200',
    config: createConfig(11, 'Royal Gold Premium', 'classic', '#b45309', '#fef3c7', 'Playfair Display, serif', 'Lato, sans-serif', 'decorated', 'centered-box', 'boxed')
  },
  {
    id: 12,
    name: 'Luxury Black Gold',
    category: 'premium',
    free: false,
    price: 99,
    thumbnailColor: 'from-gray-800 to-black',
    config: createConfig(12, 'Luxury Black Gold', 'modern-sidebar', '#000000', '#fbbf24', 'Cinzel, serif', 'Montserrat, sans-serif', 'double', 'boxed', 'background')
  },
  {
    id: 13,
    name: 'Emerald Elite',
    category: 'premium',
    free: false,
    price: 59,
    thumbnailColor: 'from-emerald-200 to-green-200',
    config: createConfig(13, 'Emerald Elite', 'centered', '#065f46', '#d1fae5', 'Merriweather, serif', 'Open Sans, sans-serif', 'double', 'underlined', 'underlined')
  },
  {
    id: 14,
    name: 'Sapphire Blue',
    category: 'premium',
    free: false,
    price: 69,
    thumbnailColor: 'from-blue-200 to-indigo-200',
    config: createConfig(14, 'Sapphire Blue', 'classic', '#1e3a8a', '#dbeafe', 'Roboto Slab, serif', 'Roboto, sans-serif', 'decorated', 'centered-box', 'boxed')
  },
  {
    id: 15,
    name: 'Crimson King',
    category: 'premium',
    free: false,
    price: 79,
    thumbnailColor: 'from-red-200 to-rose-200',
    config: createConfig(15, 'Crimson King', 'modern-sidebar', '#991b1b', '#fee2e2', 'Lora, serif', 'Nunito, sans-serif', 'simple', 'boxed', 'background')
  },
  {
    id: 16,
    name: 'Violet Vintage',
    category: 'premium',
    free: false,
    price: 49,
    thumbnailColor: 'from-violet-200 to-purple-200',
    config: createConfig(16, 'Violet Vintage', 'classic', '#5b21b6', '#ede9fe', 'Playfair Display, serif', 'Raleway, sans-serif', 'decorated', 'underlined', 'underlined')
  },
  {
    id: 17,
    name: 'Golden Hour',
    category: 'premium',
    free: false,
    price: 59,
    thumbnailColor: 'from-orange-200 to-yellow-200',
    config: createConfig(17, 'Golden Hour', 'centered', '#c2410c', '#ffedd5', 'Merriweather, serif', 'Lato, sans-serif', 'double', 'centered-box', 'boxed')
  },
  {
    id: 18,
    name: 'Silver Lining',
    category: 'premium',
    free: false,
    price: 49,
    thumbnailColor: 'from-slate-200 to-gray-200',
    config: createConfig(18, 'Silver Lining', 'minimal', '#334155', '#f8fafc', 'Montserrat, sans-serif', 'Roboto, sans-serif', 'simple', 'simple', 'simple')
  },
  {
    id: 19,
    name: 'Forest Deep',
    category: 'premium',
    free: false,
    price: 69,
    thumbnailColor: 'from-green-800 to-emerald-800',
    config: createConfig(19, 'Forest Deep', 'modern-sidebar', '#14532d', '#dcfce7', 'Cinzel, serif', 'Open Sans, sans-serif', 'none', 'boxed', 'background')
  },
  {
    id: 20,
    name: 'Berry Blush',
    category: 'premium',
    free: false,
    price: 59,
    thumbnailColor: 'from-pink-300 to-rose-300',
    config: createConfig(20, 'Berry Blush', 'classic', '#be123c', '#ffe4e6', 'Lora, serif', 'Nunito, sans-serif', 'decorated', 'underlined', 'underlined')
  },
  {
    id: 21,
    name: 'Ocean Depth',
    category: 'premium',
    free: false,
    price: 79,
    thumbnailColor: 'from-cyan-700 to-blue-700',
    config: createConfig(21, 'Ocean Depth', 'centered', '#0e7490', '#cffafe', 'Roboto Slab, serif', 'Roboto, sans-serif', 'double', 'centered-box', 'boxed')
  },
  {
    id: 22,
    name: 'Lavender Love',
    category: 'premium',
    free: false,
    price: 49,
    thumbnailColor: 'from-purple-200 to-fuchsia-200',
    config: createConfig(22, 'Lavender Love', 'classic', '#7e22ce', '#f3e8ff', 'Playfair Display, serif', 'Raleway, sans-serif', 'simple', 'underlined', 'simple')
  },
  {
    id: 23,
    name: 'Autumn Brown',
    category: 'premium',
    free: false,
    price: 59,
    thumbnailColor: 'from-amber-700 to-orange-700',
    config: createConfig(23, 'Autumn Brown', 'modern-sidebar', '#78350f', '#fef3c7', 'Merriweather, serif', 'Lato, sans-serif', 'none', 'boxed', 'background')
  },
  {
    id: 24,
    name: 'Midnight Blue',
    category: 'premium',
    free: false,
    price: 89,
    thumbnailColor: 'from-blue-900 to-indigo-900',
    config: createConfig(24, 'Midnight Blue', 'minimal', '#1e3a8a', '#eff6ff', 'Montserrat, sans-serif', 'Roboto, sans-serif', 'double', 'simple', 'simple')
  },
  {
    id: 25,
    name: 'Cherry Red',
    category: 'premium',
    free: false,
    price: 69,
    thumbnailColor: 'from-red-600 to-rose-600',
    config: createConfig(25, 'Cherry Red', 'classic', '#b91c1c', '#fee2e2', 'Cinzel, serif', 'Open Sans, sans-serif', 'decorated', 'centered-box', 'boxed')
  },
  {
    id: 26,
    name: 'Teal Elegance',
    category: 'premium',
    free: false,
    price: 59,
    thumbnailColor: 'from-teal-600 to-emerald-600',
    config: createConfig(26, 'Teal Elegance', 'centered', '#0f766e', '#ccfbf1', 'Lora, serif', 'Nunito, sans-serif', 'double', 'underlined', 'underlined')
  },
  {
    id: 27,
    name: 'Peach Perfect',
    category: 'premium',
    free: false,
    price: 49,
    thumbnailColor: 'from-orange-100 to-red-100',
    config: createConfig(27, 'Peach Perfect', 'modern-sidebar', '#c2410c', '#ffedd5', 'Playfair Display, serif', 'Raleway, sans-serif', 'none', 'boxed', 'background')
  },
  {
    id: 28,
    name: 'Slate Modern',
    category: 'premium',
    free: false,
    price: 59,
    thumbnailColor: 'from-slate-600 to-gray-600',
    config: createConfig(28, 'Slate Modern', 'minimal', '#334155', '#f1f5f9', 'Montserrat, sans-serif', 'Roboto, sans-serif', 'simple', 'simple', 'simple')
  },
  {
    id: 29,
    name: 'Indigo Imperial',
    category: 'premium',
    free: false,
    price: 79,
    thumbnailColor: 'from-indigo-700 to-violet-700',
    config: createConfig(29, 'Indigo Imperial', 'classic', '#4338ca', '#e0e7ff', 'Cinzel, serif', 'Lato, sans-serif', 'decorated', 'centered-box', 'boxed')
  },
  {
    id: 30,
    name: 'Olive Grove',
    category: 'premium',
    free: false,
    price: 49,
    thumbnailColor: 'from-lime-600 to-green-600',
    config: createConfig(30, 'Olive Grove', 'centered', '#3f6212', '#ecfccb', 'Merriweather, serif', 'Open Sans, sans-serif', 'double', 'underlined', 'underlined')
  },
  {
    id: 31,
    name: 'Coral Reef',
    category: 'premium',
    free: false,
    price: 69,
    thumbnailColor: 'from-rose-400 to-pink-400',
    config: createConfig(31, 'Coral Reef', 'modern-sidebar', '#e11d48', '#ffe4e6', 'Lora, serif', 'Nunito, sans-serif', 'none', 'boxed', 'background')
  },
  {
    id: 32,
    name: 'Sky High',
    category: 'premium',
    free: false,
    price: 59,
    thumbnailColor: 'from-sky-400 to-blue-400',
    config: createConfig(32, 'Sky High', 'classic', '#0284c7', '#e0f2fe', 'Playfair Display, serif', 'Raleway, sans-serif', 'simple', 'underlined', 'simple')
  },
  {
    id: 33,
    name: 'Mocha Magic',
    category: 'premium',
    free: false,
    price: 49,
    thumbnailColor: 'from-stone-500 to-neutral-500',
    config: createConfig(33, 'Mocha Magic', 'centered', '#57534e', '#f5f5f4', 'Roboto Slab, serif', 'Roboto, sans-serif', 'double', 'centered-box', 'boxed')
  },
  {
    id: 34,
    name: 'Ruby Rich',
    category: 'premium',
    free: false,
    price: 89,
    thumbnailColor: 'from-red-800 to-rose-800',
    config: createConfig(34, 'Ruby Rich', 'modern-sidebar', '#9f1239', '#ffe4e6', 'Cinzel, serif', 'Montserrat, sans-serif', 'double', 'boxed', 'background')
  },
  {
    id: 35,
    name: 'Zen Garden',
    category: 'premium',
    free: false,
    price: 99,
    thumbnailColor: 'from-green-700 to-emerald-700',
    config: createConfig(35, 'Zen Garden', 'minimal', '#15803d', '#dcfce7', 'Lora, serif', 'Open Sans, sans-serif', 'none', 'simple', 'simple')
  }
];
