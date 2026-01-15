import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { sponsors, sponsorTiers, getSponsorsByTier } from "@/data/sponsors";
import { Check, ArrowRight, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Sponsors = () => {
  const platinumSponsors = getSponsorsByTier("platinum");
  const goldSponsors = getSponsorsByTier("gold");
  const silverSponsors = getSponsorsByTier("silver");
  const bronzeSponsors = getSponsorsByTier("bronze");

  const SponsorGrid = ({ sponsors: sponsorList, columns = 4 }: { sponsors: typeof sponsors; columns?: number }) => (
    <div className={`grid grid-cols-2 ${columns >= 3 ? 'md:grid-cols-3' : ''} ${columns >= 4 ? 'lg:grid-cols-4' : ''} gap-6`}>
      {sponsorList.map((sponsor, index) => (
        <motion.a
          key={sponsor.id}
          href={sponsor.website}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="group bg-card rounded-xl border border-border p-6 hover:border-primary hover:shadow-medium transition-all"
        >
          <img
            src={sponsor.logo}
            alt={sponsor.name}
            className="w-full h-20 object-contain mb-4 grayscale group-hover:grayscale-0 transition-all"
          />
          <h4 className="font-semibold text-center">{sponsor.name}</h4>
          {sponsor.description && (
            <p className="text-xs text-muted-foreground text-center mt-2 line-clamp-2">
              {sponsor.description}
            </p>
          )}
        </motion.a>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-warm">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center max-w-3xl mx-auto"
            >
              <span className="inline-block px-4 py-2 rounded-full bg-gold/20 text-foreground text-sm font-medium mb-6">
                Partnership Opportunities
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
                Our <span className="text-gradient">Partners</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Join the brands that are helping shape Rwanda's entrepreneurial future 
                through Konnect Market Day
              </p>
            </motion.div>
          </div>
        </section>

        {/* Current Sponsors */}
        <section className="section-padding bg-background">
          <div className="container-wide">
            {/* Platinum */}
            <div className="mb-16">
              <div className="text-center mb-8">
                <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-slate-200 to-slate-400 text-foreground text-sm font-semibold mb-2">
                  Platinum Partners
                </span>
              </div>
              <SponsorGrid sponsors={platinumSponsors} columns={2} />
            </div>

            {/* Gold */}
            <div className="mb-16">
              <div className="text-center mb-8">
                <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-yellow-300 to-yellow-600 text-foreground text-sm font-semibold mb-2">
                  Gold Partners
                </span>
              </div>
              <SponsorGrid sponsors={goldSponsors} columns={3} />
            </div>

            {/* Silver */}
            <div className="mb-16">
              <div className="text-center mb-8">
                <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-gray-300 to-gray-500 text-foreground text-sm font-semibold mb-2">
                  Silver Partners
                </span>
              </div>
              <SponsorGrid sponsors={silverSponsors} columns={4} />
            </div>

            {/* Bronze */}
            <div>
              <div className="text-center mb-8">
                <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-amber-600 to-amber-800 text-primary-foreground text-sm font-semibold mb-2">
                  Bronze Partners
                </span>
              </div>
              <SponsorGrid sponsors={bronzeSponsors} columns={4} />
            </div>
          </div>
        </section>

        {/* Sponsorship Packages */}
        <section className="section-padding bg-muted/30">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Sponsorship Packages
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Partner with us to reach engaged audiences and support local entrepreneurship
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {sponsorTiers.map((tier, index) => (
                <motion.div
                  key={tier.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`bg-card rounded-2xl border border-border overflow-hidden ${
                    tier.name === "Gold" ? "ring-2 ring-gold" : ""
                  }`}
                >
                  <div className={`bg-gradient-to-r ${tier.color} p-6 text-center`}>
                    <h3 className="text-2xl font-bold text-foreground">{tier.name}</h3>
                    <p className="text-3xl font-bold text-foreground mt-2">{tier.price}</p>
                    <p className="text-sm text-foreground/70">per event</p>
                  </div>
                  <div className="p-6">
                    <ul className="space-y-3">
                      {tier.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Sponsor */}
        <section className="section-padding bg-background">
          <div className="container-wide">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                  Why Partner With{" "}
                  <span className="text-gradient">Konnect?</span>
                </h2>
                <p className="text-muted-foreground text-lg mb-8">
                  Konnect Market Day offers unparalleled brand exposure to a highly engaged, 
                  purchase-ready audience. Our sponsors don't just get visibility—they become 
                  part of a community movement.
                </p>

                <div className="space-y-6">
                  {[
                    { value: "15,000+", label: "Monthly foot traffic" },
                    { value: "50,000+", label: "Social media reach per event" },
                    { value: "85%", label: "Attendee purchase rate" },
                    { value: "92%", label: "Sponsor satisfaction rate" },
                  ].map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-4"
                    >
                      <div className="text-3xl font-bold text-primary">{stat.value}</div>
                      <div className="text-muted-foreground">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-foreground text-background rounded-2xl p-8 md:p-12"
              >
                <h3 className="text-2xl font-display font-bold mb-6">
                  Interested in Sponsoring?
                </h3>
                <p className="text-background/70 mb-8">
                  Let's discuss how we can create a customized partnership that meets 
                  your marketing objectives and budget.
                </p>

                <div className="space-y-4 mb-8">
                  <a
                    href="mailto:sponsors@konnectmarketday.rw"
                    className="flex items-center gap-3 text-background/80 hover:text-background transition-colors"
                  >
                    <Mail className="w-5 h-5 text-gold" />
                    sponsors@konnectmarketday.rw
                  </a>
                  <a
                    href="tel:+250788123456"
                    className="flex items-center gap-3 text-background/80 hover:text-background transition-colors"
                  >
                    <Phone className="w-5 h-5 text-gold" />
                    +250 788 123 456
                  </a>
                </div>

                <Button size="lg" className="w-full bg-gradient-hero">
                  Request Sponsorship Deck
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Sponsors;
