import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Clock } from "lucide-react";

const events = [
  { time: "09:00 AM", title: "Ignition", desc: "Final briefing & start signal" },
  { time: "11:00 AM", title: "Checkpoint 1", desc: "Mentor validation" },
  { time: "01:00 PM", title: "Working Lunch", desc: "Coding continues" },
  { time: "03:00 PM", title: "Checkpoint 2", desc: "Feature Freeze" },
  { time: "05:00 PM", title: "Submission", desc: "GitHub + 3-slide pitch" },
  { time: "05:30 PM", title: "Rapid Pitch", desc: "2-minute elevator pitch" },
];

const TimelineSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="hackathon" className="section-padding relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-primary/3 rounded-full blur-[140px]" />

      <div className="container mx-auto max-w-3xl relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <div className="section-badge mx-auto">
            <Clock size={12} />
            Hackathon Day
          </div>
          <h2 className="text-4xl md:text-6xl font-heading font-bold">
            The <span className="gradient-text">Timeline</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/30 via-accent/30 to-transparent" />

          {events.map((e, i) => (
            <motion.div
              key={e.time}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className={`relative flex items-start mb-6 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } flex-row`}
            >
              {/* Dot */}
              <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary glow-blue z-10 mt-5" />

              {/* Card */}
              <div className={`glass-card-hover p-5 ml-14 md:ml-0 md:w-[calc(50%-2rem)] ${
                i % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
              }`}>
                <span className="text-xs font-bold text-primary tracking-wider">{e.time}</span>
                <h3 className="text-base font-heading font-semibold text-foreground mt-1">{e.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{e.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
