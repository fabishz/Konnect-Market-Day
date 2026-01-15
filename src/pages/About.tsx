import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { teamMembers } from "@/data/team";
import { Target, Eye, Heart, Award, Users, Calendar } from "lucide-react";
import heroMarket from "@/assets/hero-market.jpg";

const values = [
  {
    icon: Heart,
    title: "Community First",
    description: "We believe in the power of community. Every decision we make puts our vendors and visitors at the center.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We strive for excellence in every market, ensuring memorable experiences for all participants.",
  },
  {
    icon: Users,
    title: "Inclusivity",
    description: "Konnect is for everyone. We celebrate diversity and create spaces where all are welcome.",
  },
];

const milestones = [
  { year: "2024", title: "The Beginning", description: "Konnect Market Day launched with 40 vendors" },
  { year: "2024", title: "Growing Community", description: "Reached 10,000 total visitors" },
  { year: "2024", title: "Food Festival", description: "Our first themed market drew record crowds" },
  { year: "2025", title: "Expansion", description: "Planning markets in multiple locations" },
];

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={heroMarket}
              alt="About Konnect Market Day"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-foreground/80" />
          </div>
          <div className="relative z-10 container-wide text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-2 rounded-full bg-primary/20 text-primary-foreground text-sm font-medium mb-6">
                Our Story
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-background mb-6">
                About Konnect Market Day
              </h1>
              <p className="text-xl text-background/80 max-w-3xl mx-auto">
                Building Rwanda's most vibrant marketplace community, one market at a time
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="section-padding bg-background">
          <div className="container-wide">
            <div className="grid md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-8 rounded-2xl bg-gradient-hero text-primary-foreground"
              >
                <Target className="w-12 h-12 mb-6" />
                <h2 className="text-2xl font-display font-bold mb-4">Our Mission</h2>
                <p className="text-primary-foreground/90">
                  To create a platform that empowers local entrepreneurs, celebrates Rwandan creativity, 
                  and builds meaningful connections between makers and their communities. We're committed 
                  to fostering economic growth while preserving cultural heritage.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-8 rounded-2xl bg-forest text-accent-foreground"
              >
                <Eye className="w-12 h-12 mb-6" />
                <h2 className="text-2xl font-display font-bold mb-4">Our Vision</h2>
                <p className="text-accent-foreground/90">
                  To become East Africa's leading market platform, setting the standard for how 
                  communities shop, connect, and support local businesses. We envision a future 
                  where every Rwandan entrepreneur has access to a thriving marketplace.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="section-padding bg-muted/30">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Our Story</h2>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                Konnect Market Day was born from a simple idea: that Kigali deserved a market 
                experience that matched its growing entrepreneurial spirit. What started as a 
                small gathering of 40 vendors has grown into the city's most anticipated monthly event.
              </p>
            </motion.div>

            {/* Timeline */}
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-border hidden md:block" />
              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`flex flex-col md:flex-row items-center gap-8 ${
                      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                      <div className="bg-card p-6 rounded-2xl border border-border inline-block">
                        <span className="text-primary font-bold">{milestone.year}</span>
                        <h3 className="text-xl font-semibold mt-2">{milestone.title}</h3>
                        <p className="text-muted-foreground mt-2">{milestone.description}</p>
                      </div>
                    </div>
                    <div className="w-4 h-4 rounded-full bg-primary relative z-10" />
                    <div className="flex-1" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="section-padding bg-background">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Our Values</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                The principles that guide everything we do
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center p-8 rounded-2xl bg-card border border-border card-hover"
                >
                  <div className="w-16 h-16 rounded-2xl bg-gradient-hero flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="section-padding bg-muted/30">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Meet the Team</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                The passionate people behind Konnect Market Day
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group text-center"
                >
                  <div className="relative mb-6 overflow-hidden rounded-2xl">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <h3 className="text-lg font-semibold">{member.name}</h3>
                  <p className="text-primary font-medium text-sm mb-2">{member.role}</p>
                  <p className="text-muted-foreground text-sm">{member.bio}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Impact Stats */}
        <section className="section-padding bg-foreground text-background">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Our Impact</h2>
              <p className="text-background/70 text-lg">
                Numbers that tell our story
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: "6", label: "Markets Hosted" },
                { value: "100+", label: "Vendors Supported" },
                { value: "15K+", label: "Total Visitors" },
                { value: "50M+", label: "RWF in Sales" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold text-gold mb-2">{stat.value}</div>
                  <div className="text-background/60">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
