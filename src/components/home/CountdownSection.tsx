import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { getNextEvent } from "@/data/events";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export function CountdownSection() {
  const nextEvent = getNextEvent();
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    if (!nextEvent) return;

    const targetDate = new Date(nextEvent.date + "T09:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [nextEvent]);

  if (!nextEvent) return null;

  const timeUnits = [
    { value: timeLeft.days, label: "Days" },
    { value: timeLeft.hours, label: "Hours" },
    { value: timeLeft.minutes, label: "Minutes" },
    { value: timeLeft.seconds, label: "Seconds" },
  ];

  return (
    <section className="section-padding bg-gradient-warm">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Event Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Upcoming Event
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
              {nextEvent.title}
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              {nextEvent.description}
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">
                    {new Date(nextEvent.date).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}
                  </p>
                  <p className="text-sm text-muted-foreground">{nextEvent.time}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">{nextEvent.location}</p>
                  <p className="text-sm text-muted-foreground">{nextEvent.address}</p>
                </div>
              </div>
            </div>

            <Button size="lg" className="bg-gradient-hero" asChild>
              <Link to={`/events/${nextEvent.id}`}>
                View Event Details
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </motion.div>

          {/* Countdown Timer */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-foreground rounded-3xl p-8 md:p-12"
          >
            <h3 className="text-background text-center text-xl font-semibold mb-8">
              Event Starts In
            </h3>
            <div className="grid grid-cols-4 gap-3 md:gap-6">
              {timeUnits.map((unit, i) => (
                <div key={unit.label} className="text-center">
                  <div className="bg-background/10 rounded-2xl p-4 md:p-6 mb-2">
                    <span className="text-3xl md:text-5xl font-bold text-background">
                      {String(unit.value).padStart(2, "0")}
                    </span>
                  </div>
                  <span className="text-xs md:text-sm text-background/70 uppercase tracking-wide">
                    {unit.label}
                  </span>
                </div>
              ))}
            </div>
            
            <div className="mt-8 pt-8 border-t border-background/10">
              <div className="flex flex-wrap justify-center gap-4 text-sm text-background/70">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-gold" />
                  {nextEvent.vendorCount}+ Vendors
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  {nextEvent.expectedAttendees} Expected
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
