import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Clock, User, BarChart3 } from "lucide-react";

const workshops = [
  { title: "Building AI Agents from Scratch", level: "Intermediate", duration: "2 hours", instructor: "Hassan Rizvi" },
  { title: "Deploying LLMs at Scale", level: "Advanced", duration: "2.5 hours", instructor: "Omar Farooq" },
  { title: "Intro to Prompt Engineering", level: "Beginner", duration: "1.5 hours", instructor: "Sarah Ahmed" },
  { title: "AI Ethics & Responsible AI", level: "Beginner", duration: "1.5 hours", instructor: "Prof. Ali Raza" },
];

const levelColor: Record<string, string> = {
  Beginner: "text-green-400 bg-green-400/10",
  Intermediate: "text-primary bg-primary/10",
  Advanced: "text-accent bg-accent/10",
};

const WorkshopsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="workshops" className="section-padding">
      <div className="container mx-auto max-w-5xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold gradient-text mb-3">Workshops</h2>
          <div className="neon-line max-w-xs mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {workshops.map((w, i) => (
            <motion.div
              key={w.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              className="glass-card-hover p-6"
            >
              <h3 className="font-heading font-semibold text-foreground mb-3">{w.title}</h3>
              <div className="flex flex-wrap gap-3 text-xs">
                <span className={`px-2.5 py-1 rounded-full font-medium ${levelColor[w.level]}`}>
                  <BarChart3 size={12} className="inline mr-1" />{w.level}
                </span>
                <span className="px-2.5 py-1 rounded-full bg-muted text-muted-foreground">
                  <Clock size={12} className="inline mr-1" />{w.duration}
                </span>
                <span className="px-2.5 py-1 rounded-full bg-muted text-muted-foreground">
                  <User size={12} className="inline mr-1" />{w.instructor}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkshopsSection;
