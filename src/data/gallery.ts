export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  category: string;
  eventId?: string;
  featured?: boolean;
}

export const galleryCategories = [
  "All",
  "Events",
  "Vendors",
  "Products",
  "Community",
  "Behind the Scenes",
] as const;

export const galleryItems: GalleryItem[] = [
  {
    id: "1",
    src: "https://images.unsplash.com/photo-1555448248-2571daf6344b?w=800&h=600&fit=crop",
    alt: "Bustling market scene with colorful vendor stalls",
    category: "Events",
    featured: true,
  },
  {
    id: "2",
    src: "https://images.unsplash.com/photo-1590736969955-71cc94801759?w=800&h=600&fit=crop",
    alt: "Traditional woven baskets display",
    category: "Products",
    featured: true,
  },
  {
    id: "3",
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
    alt: "Fashion showcase at Konnect Market",
    category: "Events",
  },
  {
    id: "4",
    src: "https://images.unsplash.com/photo-1582582494705-f8ce0b0c24f0?w=800&h=600&fit=crop",
    alt: "Handcrafted African art pieces",
    category: "Products",
    featured: true,
  },
  {
    id: "5",
    src: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=800&h=600&fit=crop",
    alt: "Community gathering at market event",
    category: "Community",
  },
  {
    id: "6",
    src: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=800&h=600&fit=crop",
    alt: "Fresh roasted coffee display",
    category: "Products",
  },
  {
    id: "7",
    src: "https://images.unsplash.com/photo-1590735213920-68192a487bc2?w=800&h=600&fit=crop",
    alt: "Colorful kitenge fabric designs",
    category: "Vendors",
    featured: true,
  },
  {
    id: "8",
    src: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&h=600&fit=crop",
    alt: "Food festival preparations",
    category: "Behind the Scenes",
  },
  {
    id: "9",
    src: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800&h=600&fit=crop",
    alt: "Live art demonstration",
    category: "Events",
  },
  {
    id: "10",
    src: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&h=600&fit=crop",
    alt: "Handmade jewelry collection",
    category: "Products",
  },
  {
    id: "11",
    src: "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=800&h=600&fit=crop",
    alt: "Holiday market decorations",
    category: "Events",
  },
  {
    id: "12",
    src: "https://images.unsplash.com/photo-1532336414038-cf19250c5757?w=800&h=600&fit=crop",
    alt: "Spice vendor booth setup",
    category: "Vendors",
  },
  {
    id: "13",
    src: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=800&h=600&fit=crop",
    alt: "Natural skincare products",
    category: "Products",
  },
  {
    id: "14",
    src: "https://images.unsplash.com/photo-1493106641515-6b5631de4bb9?w=800&h=600&fit=crop",
    alt: "Pottery workshop in action",
    category: "Behind the Scenes",
  },
  {
    id: "15",
    src: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&h=600&fit=crop",
    alt: "Leather goods craftsmanship",
    category: "Vendors",
  },
  {
    id: "16",
    src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop",
    alt: "Home textiles display",
    category: "Products",
  },
];

export const getFeaturedGalleryItems = () => galleryItems.filter(item => item.featured);
