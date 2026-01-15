import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Store, TrendingUp, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const benefits = [
  "Access to thousands of potential customers",
  "Professional booth setup and display",
  "Marketing and social media exposure",
  "Networking with fellow entrepreneurs",
  "Flexible payment options",
  "Dedicated vendor support team",
];

const stats = [
  { icon: Store, value: "100+", label: "Active Vendors" },
  { icon: Users, value: "15K+", label: "Monthly Visitors" },
  { icon: TrendingUp, value: "85%", label: "Vendor Return Rate" },
];

export function VendorCTASection() {
  return (
    <section className="section-padding bg-foreground text-background">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-3 py-1 rounded-full bg-gold/20 text-gold text-sm font-medium mb-4">
              For Vendors
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
              Grow Your Business{" "}
              <span className="text-gold">With Us</span>
            </h2>
            <p className="text-background/70 text-lg mb-8">
              Join Rwanda's fastest-growing market community. Whether you're a seasoned 
              entrepreneur or just starting out, Konnect Market Day provides the platform 
              you need to reach new customers and grow your brand.
            </p>

            {/* Benefits List */}
            <ul className="space-y-3 mb-8">
              {benefits.map((benefit, index) => (
                <motion.li
                  key={benefit}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-gold flex-shrink-0" />
                  <span className="text-background/80">{benefit}</span>
                </motion.li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-gradient-hero hover:opacity-90"
                asChild
              >
                <Link to="/vendor-registration">
                  Apply Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-background/30 text-background hover:bg-background/10 bg-transparent"
                asChild
              >
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </motion.div>

          {/* Stats Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="grid gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-center gap-6 p-6 rounded-2xl bg-background/5 border border-background/10"
              >
                <div className="w-16 h-16 rounded-xl bg-gradient-hero flex items-center justify-center">
                  <stat.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <div>
                  <div className="text-4xl font-bold">{stat.value}</div>
                  <div className="text-background/60">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
