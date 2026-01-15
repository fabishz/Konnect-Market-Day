import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getNextEvent } from "@/data/events";
import heroImage from "@/assets/hero-market.jpg";

export function HeroSection() {
  const nextEvent = getNextEvent();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Vibrant Konnect Market Day"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-wide pt-24 pb-16">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium text-primary-foreground">
              {nextEvent ? `Next Event: ${new Date(nextEvent.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric' })}` : "Events Coming Soon"}
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-background leading-tight mb-6"
          >
            Where Creativity{" "}
            <span className="text-gradient bg-gradient-sunset">Meets</span>{" "}
            Community
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-background/80 mb-8 max-w-2xl"
          >
            Kigali's premier market experience showcasing local artisans, entrepreneurs, and creators. 
            Discover unique products, connect with makers, and celebrate Rwandan innovation.
          </motion.p>

          {/* Event Info */}
          {nextEvent && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-6 mb-10"
            >
              <div className="flex items-center gap-2 text-background/80">
                <Calendar className="w-5 h-5 text-gold" />
                <span>{new Date(nextEvent.date).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}</span>
              </div>
              <div className="flex items-center gap-2 text-background/80">
                <MapPin className="w-5 h-5 text-gold" />
                <span>{nextEvent.location}</span>
              </div>
            </motion.div>
          )}

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            <Button
              size="lg"
              className="bg-gradient-hero hover:opacity-90 text-primary-foreground font-semibold px-8 h-14 text-base"
              asChild
            >
              <Link to="/vendor-registration">
                Become a Vendor
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-background/30 text-background hover:bg-background/10 h-14 text-base px-8 bg-transparent"
              asChild
            >
              <Link to="/events">Explore Events</Link>
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap gap-8 mt-16 pt-8 border-t border-background/20"
          >
            {[
              { value: "100+", label: "Vendors" },
              { value: "15K+", label: "Visitors" },
              { value: "6", label: "Events Hosted" },
              { value: "50K+", label: "Community Members" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-background">{stat.value}</div>
                <div className="text-sm text-background/60">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
