import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Instagram, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { vendors } from "@/data/vendors";

export function FeaturedVendorsSection() {
  const featuredVendors = vendors.filter(v => v.featured).slice(0, 6);

  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-accent/50 text-accent-foreground text-sm font-medium mb-4">
            Meet Our Vendors
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
            Featured <span className="text-gradient">Creators</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover talented artisans, entrepreneurs, and creators bringing unique products to Konnect Market Day
          </p>
        </motion.div>

        {/* Vendors Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredVendors.map((vendor, index) => (
            <motion.div
              key={vendor.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-card rounded-2xl overflow-hidden card-hover border border-border"
            >
              {/* Cover Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={vendor.coverImage}
                  alt={vendor.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-background/90 text-xs font-medium">
                  {vendor.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <img
                    src={vendor.logo}
                    alt={`${vendor.name} logo`}
                    className="w-14 h-14 rounded-xl object-cover border-2 border-border"
                  />
                  <div>
                    <h3 className="font-semibold text-lg">{vendor.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {vendor.eventsParticipated} events participated
                    </p>
                  </div>
                </div>

                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {vendor.description}
                </p>

                {/* Products Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {vendor.products.slice(0, 3).map((product) => (
                    <span
                      key={product}
                      className="px-2 py-1 rounded-md bg-muted text-xs text-muted-foreground"
                    >
                      {product}
                    </span>
                  ))}
                </div>

                {/* Social Links */}
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex gap-2">
                    {vendor.socialLinks.instagram && (
                      <a
                        href={`https://instagram.com/${vendor.socialLinks.instagram}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        <Instagram className="w-4 h-4" />
                      </a>
                    )}
                    {vendor.socialLinks.website && (
                      <a
                        href={`https://${vendor.socialLinks.website}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                  <Link
                    to={`/vendors/${vendor.id}`}
                    className="text-sm font-medium text-primary hover:underline"
                  >
                    View Profile
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button size="lg" variant="outline" asChild>
            <Link to="/vendors">
              View All Vendors
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
