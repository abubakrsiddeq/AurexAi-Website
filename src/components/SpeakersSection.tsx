import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Linkedin } from "lucide-react";

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
    <section id="speakers" className="section-padding">
      <div className="container mx-auto max-w-6xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold gradient-text mb-3">Speakers</h2>
          <div className="neon-line max-w-xs mx-auto" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {speakers.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              className="glass-card-hover p-6 text-center group"
            >
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center text-2xl font-heading font-bold text-foreground">
                {s.name.split(" ").map(n => n[0]).join("")}
              </div>
              <h3 className="font-heading font-semibold text-foreground">{s.name}</h3>
              <p className="text-sm text-primary mt-0.5">{s.company}</p>
              <p className="text-xs text-muted-foreground mt-2">{s.bio}</p>
              <button className="mt-3 text-muted-foreground hover:text-primary transition-colors">
                <Linkedin size={18} />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpeakersSection;
