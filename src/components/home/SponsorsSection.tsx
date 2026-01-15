import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { sponsors, getSponsorsByTier } from "@/data/sponsors";

export function SponsorsSection() {
  const platinumSponsors = getSponsorsByTier("platinum");
  const goldSponsors = getSponsorsByTier("gold");

  return (
    <section className="section-padding bg-muted/30">
      <div className="container-wide">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-gold/20 text-foreground text-sm font-medium mb-4">
            Our Partners
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
            Proudly Supported By
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Thank you to our amazing sponsors who make Konnect Market Day possible
          </p>
        </motion.div>

        {/* Platinum Sponsors */}
        <div className="mb-12">
          <h3 className="text-center text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-8">
            Platinum Sponsors
          </h3>
          <div className="flex flex-wrap justify-center gap-8">
            {platinumSponsors.map((sponsor, index) => (
              <motion.a
                key={sponsor.id}
                href={sponsor.website}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group relative w-48 h-24 bg-card rounded-xl border border-border p-4 flex items-center justify-center hover:border-primary hover:shadow-medium transition-all"
              >
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="max-w-full max-h-full object-contain grayscale group-hover:grayscale-0 transition-all"
                />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Gold Sponsors */}
        <div className="mb-12">
          <h3 className="text-center text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-8">
            Gold Sponsors
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            {goldSponsors.map((sponsor, index) => (
              <motion.a
                key={sponsor.id}
                href={sponsor.website}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group w-40 h-20 bg-card rounded-xl border border-border p-3 flex items-center justify-center hover:border-gold hover:shadow-soft transition-all"
              >
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="max-w-full max-h-full object-contain grayscale group-hover:grayscale-0 transition-all"
                />
              </motion.a>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12 p-8 rounded-2xl bg-gradient-hero"
        >
          <h3 className="text-2xl font-display font-bold text-primary-foreground mb-3">
            Become a Sponsor
          </h3>
          <p className="text-primary-foreground/80 mb-6 max-w-md mx-auto">
            Partner with us to reach thousands of engaged consumers and support local entrepreneurs
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="bg-background text-foreground hover:bg-background/90"
            asChild
          >
            <Link to="/sponsors">
              View Sponsorship Packages
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
