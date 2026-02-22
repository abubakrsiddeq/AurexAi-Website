import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Sparkles } from "lucide-react";

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/3 rounded-full blur-[150px]" />

      <div className="container mx-auto max-w-4xl text-center relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="section-badge mx-auto">
            <Sparkles size={12} />
            About The Event
          </div>
          <h2 className="text-4xl md:text-6xl font-heading font-bold mb-8">
            The Future of <span className="gradient-text">AI is Here</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Aurex AI 2026 is a flagship AI event bringing together innovators, developers, researchers, and creators for a full-day immersive experience of Hackathons, AI workshops, tech talks, competitions, and a cultural finale.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
