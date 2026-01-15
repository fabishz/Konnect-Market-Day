import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter, Mail, MapPin, Phone } from "lucide-react";

const footerLinks = {
  explore: [
    { name: "Events", path: "/events" },
    { name: "Vendors", path: "/vendors" },
    { name: "Gallery", path: "/gallery" },
    { name: "Sponsors", path: "/sponsors" },
  ],
  company: [
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Blog", path: "/blog" },
    { name: "Careers", path: "/careers" },
  ],
  vendors: [
    { name: "Apply Now", path: "/vendors" },
    { name: "Vendor Guidelines", path: "/guidelines" },
    { name: "Success Stories", path: "/stories" },
    { name: "FAQs", path: "/faq" },
  ],
};

const socialLinks = [
  { name: "Instagram", icon: Instagram, href: "https://instagram.com/konnectmarketday" },
  { name: "Facebook", icon: Facebook, href: "https://facebook.com/konnectmarketday" },
  { name: "Twitter", icon: Twitter, href: "https://twitter.com/konnectmarket" },
];

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container-wide section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-12 h-12 rounded-lg bg-gradient-hero flex items-center justify-center">
                <span className="text-2xl font-bold text-primary-foreground">K</span>
              </div>
              <div>
                <span className="font-display text-2xl font-bold">Konnect</span>
                <span className="text-sm block text-muted-foreground -mt-1">Market Day</span>
              </div>
            </Link>
            <p className="text-muted-foreground mb-6 max-w-sm">
              Connecting communities, empowering entrepreneurs, and celebrating Rwandan creativity through vibrant market experiences.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-muted/20 hover:bg-primary transition-colors flex items-center justify-center"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="font-semibold mb-4">Explore</h4>
            <ul className="space-y-3">
              {footerLinks.explore.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-background transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-background transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">For Vendors</h4>
            <ul className="space-y-3">
              {footerLinks.vendors.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-background transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Row */}
        <div className="mt-16 pt-8 border-t border-muted/20 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-center gap-3">
            <MapPin className="w-5 h-5 text-primary" />
            <span className="text-sm text-muted-foreground">Kigali, Rwanda</span>
          </div>
          <div className="flex items-center gap-3">
            <Mail className="w-5 h-5 text-primary" />
            <a href="mailto:hello@konnectmarketday.rw" className="text-sm text-muted-foreground hover:text-background">
              hello@konnectmarketday.rw
            </a>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="w-5 h-5 text-primary" />
            <a href="tel:+250788123456" className="text-sm text-muted-foreground hover:text-background">
              +250 788 123 456
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-muted/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Konnect Market Day. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <Link to="/privacy" className="hover:text-background">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-background">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
