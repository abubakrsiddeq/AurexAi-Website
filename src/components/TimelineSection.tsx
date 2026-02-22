import { motion, useInView } from "framer-motion";
import { useRef } from "react";

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
    <section id="hackathon" className="section-padding">
      <div className="container mx-auto max-w-3xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold gradient-text mb-3">Hackathon Timeline</h2>
          <div className="neon-line max-w-xs mx-auto" />
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-primary/20" />

          {events.map((e, i) => (
            <motion.div
              key={e.time}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className={`relative flex items-start mb-8 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } flex-row`}
            >
              {/* Dot */}
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary glow-blue z-10 mt-2" />

              {/* Card */}
              <div className={`glass-card-hover p-5 ml-10 md:ml-0 md:w-[calc(50%-2rem)] ${
                i % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
              }`}>
                <span className="text-xs font-semibold text-primary tracking-wide">{e.time}</span>
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
