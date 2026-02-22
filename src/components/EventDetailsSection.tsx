import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CalendarDays, MapPin, Mail, Instagram } from "lucide-react";
import { Linkedin } from "lucide-react";

const EventDetailsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section-padding">
      <div className="container mx-auto max-w-4xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold gradient-text mb-3">Event Details</h2>
          <div className="neon-line max-w-xs mx-auto" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="glass-card p-8 md:p-12"
        >
          <div className="grid sm:grid-cols-2 gap-8">
            <div className="flex items-start gap-4">
              <CalendarDays className="text-primary mt-1 shrink-0" size={24} />
              <div>
                <h3 className="font-heading font-semibold text-foreground">Date</h3>
                <p className="text-muted-foreground text-sm mt-1">March 15, 2026 · Full Day</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MapPin className="text-primary mt-1 shrink-0" size={24} />
              <div>
                <h3 className="font-heading font-semibold text-foreground">Venue</h3>
                <p className="text-muted-foreground text-sm mt-1">BSEAS Campus Auditorium</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Mail className="text-primary mt-1 shrink-0" size={24} />
              <div>
                <h3 className="font-heading font-semibold text-foreground">Contact</h3>
                <p className="text-muted-foreground text-sm mt-1">aurexai@mlsa-bseas.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex gap-3 mt-1">
                <Instagram className="text-primary" size={24} />
                <Linkedin className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-foreground">Social Media</h3>
                <p className="text-muted-foreground text-sm mt-1">@mlsa_bseas</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EventDetailsSection;
