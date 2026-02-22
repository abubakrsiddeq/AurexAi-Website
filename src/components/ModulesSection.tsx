import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, GraduationCap, Mic2, Scale, Trophy, Music, ArrowUpRight } from "lucide-react";

const modules = [
  { icon: Brain, title: "The Aurex Hackathon", desc: "1-day AI application building challenge pushing the boundaries of innovation.", accent: "from-primary/10 to-accent/5" },
  { icon: GraduationCap, title: "Aurex Mastery", desc: "Hands-on workshops: AI agents, LLM deployment, practical AI development.", accent: "from-accent/10 to-secondary/5" },
  { icon: Mic2, title: "Aurex Insights", desc: "5–6 high-impact industry speaker sessions from global tech leaders.", accent: "from-secondary/10 to-primary/5" },
  { icon: Scale, title: "The Ethical Horizon", desc: "Panel discussion on AI's future with academics & industry experts.", accent: "from-primary/10 to-secondary/5" },
  { icon: Trophy, title: "Side Competitions", desc: "Creative & technical mini-events designed to challenge and inspire.", accent: "from-accent/10 to-primary/5" },
  { icon: Music, title: "Aurex Resonance", desc: "Grand Finale Qawali Night — a fusion of technology & culture.", accent: "from-secondary/10 to-accent/5" },
];

const ModulesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="modules" className="section-padding relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/3 rounded-full blur-[140px]" />

      <div className="container mx-auto max-w-6xl relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <div className="section-badge mx-auto">
            <Brain size={12} />
            Core Modules
          </div>
          <h2 className="text-4xl md:text-6xl font-heading font-bold">
            What <span className="gradient-text">Awaits You</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {modules.map((m, i) => (
            <motion.div
              key={m.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="glass-card-hover p-6 group relative overflow-hidden"
            >
              {/* Gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${m.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className="relative">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-xl bg-primary/5 border border-primary/10 group-hover:bg-primary/10 transition-colors">
                    <m.icon className="text-primary" size={22} />
                  </div>
                  <ArrowUpRight size={16} className="text-muted-foreground/0 group-hover:text-primary transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
                <h3 className="text-lg font-heading font-semibold text-foreground mb-2">{m.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{m.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModulesSection;
