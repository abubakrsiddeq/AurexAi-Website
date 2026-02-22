import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Sparkles } from "lucide-react";

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto max-w-3xl text-center" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <Sparkles className="mx-auto mb-4 text-accent" size={32} />
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 gradient-text">
            About Aurex AI
          </h2>
          <div className="neon-line mb-8 max-w-xs mx-auto" />
          <p className="text-lg text-muted-foreground leading-relaxed">
            Aurex AI 2026 is a flagship AI event bringing together innovators, developers, researchers, and creators for a full-day immersive experience of Hackathons, AI workshops, tech talks, competitions, and a cultural finale. Organized by MLSA BSEAS Society, this is the convergence of technology and tomorrow.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
