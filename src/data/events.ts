export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  address: string;
  description: string;
  image: string;
  vendorCount: number;
  expectedAttendees: string;
  categories: string[];
  status: "upcoming" | "past" | "ongoing";
  highlights: string[];
}

export const events: Event[] = [
  {
    id: "1",
    title: "Konnect Market Day - February Edition",
    date: "2025-02-15",
    time: "9:00 AM - 6:00 PM",
    location: "Kigali Convention Centre",
    address: "KG 2 Roundabout, Kigali, Rwanda",
    description: "Join us for our biggest market day yet! Featuring over 80 vendors, live music, food trucks, and networking opportunities. This edition celebrates local artisans and sustainable products.",
    image: "https://images.unsplash.com/photo-1555448248-2571daf6344b?w=800&h=500&fit=crop",
    vendorCount: 85,
    expectedAttendees: "3,000+",
    categories: ["Arts & Crafts", "Fashion", "Food & Beverages", "Beauty"],
    status: "upcoming",
    highlights: ["Live Music", "Kids Zone", "Networking Lounge", "Free Parking"],
  },
  {
    id: "2",
    title: "Konnect Holiday Special",
    date: "2024-12-21",
    time: "10:00 AM - 8:00 PM",
    location: "Nyamirambo Stadium",
    address: "Nyamirambo, Kigali, Rwanda",
    description: "A festive celebration featuring holiday-themed products, gift shopping opportunities, and seasonal treats. Perfect for finding unique gifts for loved ones.",
    image: "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=800&h=500&fit=crop",
    vendorCount: 120,
    expectedAttendees: "5,000+",
    categories: ["Gifts", "Fashion", "Food", "Decorations"],
    status: "past",
    highlights: ["Santa's Corner", "Gift Wrapping Station", "Carol Performances", "Late Night Shopping"],
  },
  {
    id: "3",
    title: "Konnect Fashion Forward",
    date: "2025-03-22",
    time: "11:00 AM - 7:00 PM",
    location: "Kigali Heights",
    address: "KG 7 Ave, Kigali, Rwanda",
    description: "A fashion-focused edition showcasing Rwanda's best designers, tailors, and textile artisans. Includes runway shows and style workshops.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=500&fit=crop",
    vendorCount: 60,
    expectedAttendees: "2,500+",
    categories: ["Fashion", "Textiles", "Accessories", "Beauty"],
    status: "upcoming",
    highlights: ["Runway Shows", "Style Workshops", "Designer Meet & Greet", "Photo Booth"],
  },
  {
    id: "4",
    title: "Konnect Food Festival",
    date: "2024-11-16",
    time: "10:00 AM - 9:00 PM",
    location: "Car Free Zone, Kigali",
    address: "KN 3 Ave, Kigali, Rwanda",
    description: "A culinary celebration featuring Rwanda's finest food vendors, cooking demonstrations, and taste testing sessions. From street food to gourmet experiences.",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&h=500&fit=crop",
    vendorCount: 70,
    expectedAttendees: "4,000+",
    categories: ["Food", "Beverages", "Spices", "Cooking Equipment"],
    status: "past",
    highlights: ["Chef Demonstrations", "Taste Testing", "Cooking Competitions", "Beer Garden"],
  },
  {
    id: "5",
    title: "Konnect Arts & Culture",
    date: "2025-04-19",
    time: "9:00 AM - 5:00 PM",
    location: "Inema Arts Center",
    address: "KG 563 St, Kigali, Rwanda",
    description: "Celebrating Rwandan art and culture with local artists, craftspeople, and performers. Live painting, workshops, and traditional performances.",
    image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800&h=500&fit=crop",
    vendorCount: 50,
    expectedAttendees: "1,500+",
    categories: ["Art", "Crafts", "Music", "Performance"],
    status: "upcoming",
    highlights: ["Live Painting", "Art Workshops", "Traditional Dance", "Artist Talks"],
  },
  {
    id: "6",
    title: "Konnect Launch Edition",
    date: "2024-06-15",
    time: "10:00 AM - 6:00 PM",
    location: "Kigali Convention Centre",
    address: "KG 2 Roundabout, Kigali, Rwanda",
    description: "The inaugural Konnect Market Day that started it all. A celebration of local entrepreneurship and community spirit.",
    image: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=800&h=500&fit=crop",
    vendorCount: 40,
    expectedAttendees: "1,200+",
    categories: ["Mixed", "All Categories"],
    status: "past",
    highlights: ["Opening Ceremony", "Live Entertainment", "Community Awards"],
  },
];

export const getUpcomingEvents = () => events.filter(e => e.status === "upcoming");
export const getPastEvents = () => events.filter(e => e.status === "past");
export const getNextEvent = () => events.find(e => e.status === "upcoming");
