import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, GraduationCap, Mic2, Scale, Trophy, Music } from "lucide-react";

const modules = [
  { icon: Brain, title: "The Aurex Hackathon", desc: "1-day AI application building challenge.", color: "text-primary" },
  { icon: GraduationCap, title: "Aurex Mastery", desc: "Hands-on workshops: AI agents, LLM deployment, practical AI dev.", color: "text-accent" },
  { icon: Mic2, title: "Aurex Insights", desc: "5–6 high-impact industry speaker sessions.", color: "text-primary" },
  { icon: Scale, title: "The Ethical Horizon", desc: "Panel discussion on AI's future with academics & industry experts.", color: "text-accent" },
  { icon: Trophy, title: "Aurex Side Competitions", desc: "Creative & technical mini-events pushing your limits.", color: "text-primary" },
  { icon: Music, title: "Aurex Resonance", desc: "Grand Finale Qawali Night — fusion of technology & culture.", color: "text-accent" },
];

const ModulesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="modules" className="section-padding">
      <div className="container mx-auto max-w-6xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold gradient-text mb-3">Core Modules</h2>
          <div className="neon-line max-w-xs mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((m, i) => (
            <motion.div
              key={m.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="glass-card-hover p-6 group"
            >
              <m.icon className={`${m.color} mb-4 transition-transform duration-300 group-hover:scale-110`} size={36} />
              <h3 className="text-lg font-heading font-semibold text-foreground mb-2">{m.title}</h3>
              <p className="text-sm text-muted-foreground">{m.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModulesSection;
