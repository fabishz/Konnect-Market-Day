export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
  socialLinks?: {
    linkedin?: string;
    twitter?: string;
  };
}

export const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: "Grace Uwimana",
    role: "Founder & CEO",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&h=400&fit=crop",
    bio: "Grace founded Konnect Market Day with a vision to create a platform where local entrepreneurs can thrive. With 10+ years in event management, she brings passion and expertise to every market.",
    socialLinks: { linkedin: "graceuwimana", twitter: "graceuwimana" },
  },
  {
    id: "2",
    name: "Emmanuel Habimana",
    role: "Operations Director",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    bio: "Emmanuel ensures every Konnect event runs smoothly. His background in logistics and vendor relations has been instrumental in scaling our operations across Kigali.",
    socialLinks: { linkedin: "emmanuelhabimana" },
  },
  {
    id: "3",
    name: "Diane Mukamana",
    role: "Marketing Lead",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
    bio: "Diane crafts the stories that bring our community together. Her creative campaigns have helped grow Konnect's reach to over 50,000 followers across social platforms.",
    socialLinks: { linkedin: "dianemukamana", twitter: "dianemukamana" },
  },
  {
    id: "4",
    name: "Patrick Nshimiye",
    role: "Vendor Relations",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    bio: "Patrick is the friendly face vendors know and trust. He personally onboards each vendor and ensures they have everything needed to succeed at our markets.",
    socialLinks: { linkedin: "patricknshimiye" },
  },
];
