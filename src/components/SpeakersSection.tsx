import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Linkedin, Mic2 } from "lucide-react";

const speakers = [
  { name: "Dr. Ayesha Khan", company: "DeepMind", bio: "Research Lead in Reinforcement Learning" },
  { name: "Hassan Rizvi", company: "Microsoft", bio: "Principal PM — Azure AI Services" },
  { name: "Sarah Ahmed", company: "OpenAI", bio: "ML Engineer — Safety & Alignment" },
  { name: "Prof. Ali Raza", company: "LUMS", bio: "Professor of Computer Science & AI Ethics" },
  { name: "Zainab Malik", company: "Google", bio: "Staff Engineer — TensorFlow Core" },
  { name: "Omar Farooq", company: "NVIDIA", bio: "Senior Architect — LLM Infrastructure" },
];

const SpeakersSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="speakers" className="section-padding relative overflow-hidden">
      <div className="absolute top-20 left-10 w-[400px] h-[400px] bg-accent/3 rounded-full blur-[140px]" />

      <div className="container mx-auto max-w-6xl relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <div className="section-badge mx-auto">
            <Mic2 size={12} />
            Featured Speakers
          </div>
          <h2 className="text-4xl md:text-6xl font-heading font-bold">
            Learn from the <span className="gradient-text">Best</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {speakers.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08 }}
              className="glass-card-hover p-6 text-center group"
            >
              <div className="w-20 h-20 mx-auto mb-5 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/10 flex items-center justify-center text-xl font-heading font-bold text-primary group-hover:scale-105 transition-transform">
                {s.name.split(" ").map(n => n[0]).join("")}
              </div>
              <h3 className="font-heading font-semibold text-foreground">{s.name}</h3>
              <p className="text-sm text-primary font-medium mt-0.5">{s.company}</p>
              <p className="text-xs text-muted-foreground mt-2">{s.bio}</p>
              <button className="mt-4 text-muted-foreground hover:text-primary transition-colors">
                <Linkedin size={16} />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpeakersSection;
