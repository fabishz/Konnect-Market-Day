import { motion } from "framer-motion";
import { ShoppingBag, Users, Calendar, Heart, Sparkles, Handshake } from "lucide-react";
import artisanCrafts from "@/assets/artisan-crafts.jpg";
import foodMarket from "@/assets/food-market.jpg";
import fashionMarket from "@/assets/fashion-market.jpg";

const features = [
  {
    icon: ShoppingBag,
    title: "Unique Products",
    description: "Discover handcrafted goods, artisanal food, fashion, and more from local creators",
  },
  {
    icon: Users,
    title: "Community Connection",
    description: "Meet the makers behind the products and connect with fellow market enthusiasts",
  },
  {
    icon: Calendar,
    title: "Regular Events",
    description: "Join us monthly for themed markets featuring different categories and experiences",
  },
  {
    icon: Heart,
    title: "Support Local",
    description: "Every purchase directly supports Rwandan entrepreneurs and their families",
  },
  {
    icon: Sparkles,
    title: "Live Entertainment",
    description: "Enjoy music, performances, and activities that bring the market to life",
  },
  {
    icon: Handshake,
    title: "Networking",
    description: "Build valuable connections with vendors, sponsors, and like-minded individuals",
  },
];

export function AboutSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-3 py-1 rounded-full bg-forest/10 text-forest text-sm font-medium mb-4">
              About Konnect
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
              More Than Just a{" "}
              <span className="text-gradient">Market</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Konnect Market Day is Kigali's premier community marketplace, bringing together 
              the best local vendors, artisans, and entrepreneurs under one roof. We create 
              spaces where creativity thrives, connections are made, and Rwandan innovation shines.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.slice(0, 4).map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden">
                  <img
                    src={artisanCrafts}
                    alt="Artisan crafts"
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden">
                  <img
                    src={foodMarket}
                    alt="Food market"
                    className="w-full h-64 object-cover"
                  />
                </div>
              </div>
              <div className="pt-8">
                <div className="rounded-2xl overflow-hidden">
                  <img
                    src={fashionMarket}
                    alt="Fashion market"
                    className="w-full h-80 object-cover"
                  />
                </div>
              </div>
            </div>
            
            {/* Floating Stats Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute -bottom-6 -left-6 bg-foreground text-background rounded-2xl p-6 shadow-strong"
            >
              <div className="text-4xl font-bold text-gold mb-1">100%</div>
              <div className="text-sm text-background/70">Made in Rwanda</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
