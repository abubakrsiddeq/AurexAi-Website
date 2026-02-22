import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Bug, Zap, Eye, Palette } from "lucide-react";

const comps = [
  { icon: Bug, title: "The Broken Code", subtitle: "Debug-a-thon", desc: "Fix 5 hidden AI logic errors in Python/Jupyter notebook. First team achieving target accuracy wins." },
  { icon: Zap, title: "Prompt Engineering Duel", subtitle: "Prompt-Off", desc: "Compete live to craft the best AI prompts. Judged by a blind judge." },
  { icon: Eye, title: "Deepfake or Real?", subtitle: "AI Literacy Quiz", desc: "Kahoot-style quiz identifying AI-generated vs real content." },
  { icon: Palette, title: "Aurex Sticker Battle", subtitle: "Design Challenge", desc: "Design the official AUREX AI 2026 sticker. Top 5 voted on MLSA social media." },
];

const CompetitionsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="competitions" className="section-padding">
      <div className="container mx-auto max-w-6xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold gradient-text mb-3">Side Competitions</h2>
          <div className="neon-line max-w-xs mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {comps.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="glass-card-hover p-6 group"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 rounded-xl bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                  <c.icon size={22} />
                </div>
                <div>
                  <h3 className="text-base font-heading font-semibold text-foreground">{c.title}</h3>
                  <span className="text-xs text-accent">{c.subtitle}</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompetitionsSection;
