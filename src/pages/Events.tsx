import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { events, getUpcomingEvents, getPastEvents } from "@/data/events";
import { Calendar, MapPin, Users, Clock, ArrowRight, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Events = () => {
  const upcomingEvents = getUpcomingEvents();
  const pastEvents = getPastEvents();

  const EventCard = ({ event, index }: { event: typeof events[0]; index: number }) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group bg-card rounded-2xl overflow-hidden border border-border card-hover"
    >
      <div className="relative h-56 overflow-hidden">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 to-transparent" />
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
            event.status === "upcoming" 
              ? "bg-primary text-primary-foreground" 
              : "bg-muted text-muted-foreground"
          }`}>
            {event.status === "upcoming" ? "Upcoming" : "Past Event"}
          </span>
        </div>
        <div className="absolute bottom-4 left-4 right-4">
          <div className="flex flex-wrap gap-2">
            {event.categories.slice(0, 3).map((cat) => (
              <span key={cat} className="px-2 py-1 rounded-md bg-background/80 text-xs backdrop-blur-sm">
                {cat}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
          {event.title}
        </h3>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="w-4 h-4" />
            <span>{new Date(event.date).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="w-4 h-4" />
            <span>{event.time}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="w-4 h-4" />
            <span>{event.location}</span>
          </div>
        </div>

        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {event.description}
        </p>

        <div className="flex items-center justify-between pt-4 border-t border-border">
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <Users className="w-4 h-4" />
              {event.vendorCount} vendors
            </span>
            <span>{event.expectedAttendees}</span>
          </div>
          <Link
            to={`/events/${event.id}`}
            className="text-primary font-medium text-sm hover:underline flex items-center gap-1"
          >
            Details
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </motion.div>
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
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                Our Events
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
                Discover <span className="text-gradient">Market Days</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                From themed markets to grand festivals, explore our calendar of events 
                bringing together Kigali's best vendors and creators
              </p>
            </motion.div>
          </div>
        </section>

        {/* Events List */}
        <section className="section-padding bg-background">
          <div className="container-wide">
            <Tabs defaultValue="upcoming" className="w-full">
              <div className="flex justify-center mb-12">
                <TabsList className="bg-muted p-1">
                  <TabsTrigger value="upcoming" className="px-6">
                    Upcoming Events ({upcomingEvents.length})
                  </TabsTrigger>
                  <TabsTrigger value="past" className="px-6">
                    Past Events ({pastEvents.length})
                  </TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="upcoming">
                {upcomingEvents.length > 0 ? (
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {upcomingEvents.map((event, index) => (
                      <EventCard key={event.id} event={event} index={index} />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-16">
                    <Calendar className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">No Upcoming Events</h3>
                    <p className="text-muted-foreground">
                      Stay tuned! New events will be announced soon.
                    </p>
                  </div>
                )}
              </TabsContent>

              <TabsContent value="past">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {pastEvents.map((event, index) => (
                    <EventCard key={event.id} event={event} index={index} />
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-foreground text-background">
          <div className="container-wide text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Want to Be Part of Our Next Event?
              </h2>
              <p className="text-background/70 text-lg mb-8 max-w-2xl mx-auto">
                Whether you're a vendor looking to showcase your products or a sponsor 
                seeking brand exposure, we'd love to hear from you.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="bg-gradient-hero" asChild>
                  <Link to="/vendors">Apply as Vendor</Link>
                </Button>
                <Button size="lg" variant="outline" className="border-background/30 text-background hover:bg-background/10 bg-transparent" asChild>
                  <Link to="/sponsors">Become a Sponsor</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Events;
