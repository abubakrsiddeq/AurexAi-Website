import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Clock, User, BarChart3, Wrench } from "lucide-react";

const workshops = [
  { title: "Building AI Agents from Scratch", level: "Intermediate", duration: "2 hours", instructor: "Hassan Rizvi" },
  { title: "Deploying LLMs at Scale", level: "Advanced", duration: "2.5 hours", instructor: "Omar Farooq" },
  { title: "Intro to Prompt Engineering", level: "Beginner", duration: "1.5 hours", instructor: "Sarah Ahmed" },
  { title: "AI Ethics & Responsible AI", level: "Beginner", duration: "1.5 hours", instructor: "Prof. Ali Raza" },
];

const levelStyle: Record<string, string> = {
  Beginner: "text-primary bg-primary/5 border-primary/10",
  Intermediate: "text-accent bg-accent/5 border-accent/10",
  Advanced: "text-secondary bg-secondary/5 border-secondary/10",
};

const WorkshopsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="workshops" className="section-padding relative overflow-hidden">
      <div className="absolute bottom-20 right-0 w-[400px] h-[400px] bg-primary/3 rounded-full blur-[140px]" />

      <div className="container mx-auto max-w-5xl relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <div className="section-badge mx-auto">
            <Wrench size={12} />
            Hands-On Learning
          </div>
          <h2 className="text-4xl md:text-6xl font-heading font-bold">
            <span className="gradient-text">Workshops</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          {workshops.map((w, i) => (
            <motion.div
              key={w.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              className="glass-card-hover p-6"
            >
              <h3 className="font-heading font-semibold text-foreground mb-4">{w.title}</h3>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className={`px-3 py-1.5 rounded-lg border font-medium ${levelStyle[w.level]}`}>
                  <BarChart3 size={11} className="inline mr-1.5 -mt-0.5" />{w.level}
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-muted text-muted-foreground">
                  <Clock size={11} className="inline mr-1.5 -mt-0.5" />{w.duration}
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-muted text-muted-foreground">
                  <User size={11} className="inline mr-1.5 -mt-0.5" />{w.instructor}
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
