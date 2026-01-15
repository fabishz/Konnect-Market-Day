export interface Sponsor {
  id: string;
  name: string;
  logo: string;
  tier: "platinum" | "gold" | "silver" | "bronze";
  website?: string;
  description?: string;
}

export interface SponsorTier {
  name: string;
  price: string;
  benefits: string[];
  color: string;
}

export const sponsors: Sponsor[] = [
  {
    id: "1",
    name: "Bank of Kigali",
    logo: "https://images.unsplash.com/photo-1560472355-536de3962603?w=300&h=150&fit=crop",
    tier: "platinum",
    website: "https://www.bk.rw",
    description: "Rwanda's leading commercial bank, empowering businesses across the nation.",
  },
  {
    id: "2",
    name: "MTN Rwanda",
    logo: "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=300&h=150&fit=crop",
    tier: "platinum",
    website: "https://www.mtn.co.rw",
    description: "Connecting Rwandans through world-class telecommunications services.",
  },
  {
    id: "3",
    name: "Rwanda Development Board",
    logo: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=300&h=150&fit=crop",
    tier: "gold",
    website: "https://rdb.rw",
    description: "Driving Rwanda's economic transformation and investment promotion.",
  },
  {
    id: "4",
    name: "Bralirwa",
    logo: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=300&h=150&fit=crop",
    tier: "gold",
    website: "https://www.bralirwa.com",
    description: "Rwanda's premier beverage company, refreshing the nation since 1959.",
  },
  {
    id: "5",
    name: "Airtel Rwanda",
    logo: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=300&h=150&fit=crop",
    tier: "silver",
    description: "Providing affordable mobile services to all Rwandans.",
  },
  {
    id: "6",
    name: "Kigali Marriott Hotel",
    logo: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=300&h=150&fit=crop",
    tier: "silver",
    description: "Luxury hospitality in the heart of Kigali.",
  },
  {
    id: "7",
    name: "Rwanda Tours & Travel",
    logo: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=300&h=150&fit=crop",
    tier: "bronze",
    description: "Showcasing the beauty of Rwanda to the world.",
  },
  {
    id: "8",
    name: "Prime Insurance",
    logo: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=300&h=150&fit=crop",
    tier: "bronze",
    description: "Protecting what matters most to Rwandan families and businesses.",
  },
];

export const sponsorTiers: SponsorTier[] = [
  {
    name: "Platinum",
    price: "5,000,000 RWF",
    color: "from-slate-200 to-slate-400",
    benefits: [
      "Prime logo placement on all materials",
      "Exclusive booth location",
      "Speaking opportunity at opening ceremony",
      "10 VIP passes per event",
      "Full-page feature in event program",
      "Social media takeover day",
      "First right of refusal for next year",
    ],
  },
  {
    name: "Gold",
    price: "3,000,000 RWF",
    color: "from-yellow-300 to-yellow-600",
    benefits: [
      "Logo on main stage banner",
      "Premium booth location",
      "5 VIP passes per event",
      "Half-page feature in event program",
      "Social media spotlight posts",
      "Banner placement at entrance",
    ],
  },
  {
    name: "Silver",
    price: "1,500,000 RWF",
    color: "from-gray-300 to-gray-500",
    benefits: [
      "Logo on event banners",
      "Standard booth space",
      "3 VIP passes per event",
      "Listing in event program",
      "Social media mentions",
    ],
  },
  {
    name: "Bronze",
    price: "500,000 RWF",
    color: "from-amber-600 to-amber-800",
    benefits: [
      "Logo on sponsor wall",
      "2 general admission passes",
      "Listing in event program",
      "Website recognition",
    ],
  },
];

export const getSponsorsByTier = (tier: Sponsor["tier"]) => 
  sponsors.filter(s => s.tier === tier);
