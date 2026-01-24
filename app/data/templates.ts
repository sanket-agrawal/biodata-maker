export type Template = {
  id: number;
  name: string;
  category: 'basic' | 'premium';
  free: boolean;
  price?: number;
  thumbnailColor: string;
};

export const templates: Template[] = [
  { id: 1, name: 'Classic Elegance', category: 'basic', free: true, thumbnailColor: 'from-purple-100 to-pink-100' },
  { id: 2, name: 'Modern Minimal', category: 'basic', free: true, thumbnailColor: 'from-blue-100 to-cyan-100' },
  { id: 3, name: 'Traditional Indian', category: 'basic', free: true, thumbnailColor: 'from-orange-100 to-red-100' },
  { id: 4, name: 'Soft Pastel', category: 'basic', free: true, thumbnailColor: 'from-pink-50 to-purple-50' },
  { id: 5, name: 'Simple White', category: 'basic', free: true, thumbnailColor: 'from-gray-50 to-white' },
  { id: 6, name: 'Clean Resume Style', category: 'basic', free: true, thumbnailColor: 'from-slate-100 to-gray-100' },

  { id: 7, name: 'Royal Gold', category: 'premium', free: false, price: 49, thumbnailColor: 'from-amber-100 to-yellow-100' },
  { id: 8, name: 'Luxury Black', category: 'premium', free: false, price: 79, thumbnailColor: 'from-gray-800 to-black' },
  { id: 9, name: 'Maroon Classic', category: 'premium', free: false, price: 59, thumbnailColor: 'from-rose-200 to-red-200' },
  { id: 10, name: 'Elite Serif', category: 'premium', free: false, price: 99, thumbnailColor: 'from-indigo-100 to-purple-100' },
  { id: 11, name: 'Wedding Scroll', category: 'premium', free: false, price: 79, thumbnailColor: 'from-yellow-50 to-amber-50' },
  { id: 12, name: 'Grand Heritage', category: 'premium', free: false, price: 99, thumbnailColor: 'from-orange-200 to-yellow-200' },
];
