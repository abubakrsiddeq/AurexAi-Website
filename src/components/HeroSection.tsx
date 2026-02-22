import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    {/* Background */}
    <div className="absolute inset-0">
      <img src={heroBg} alt="" className="w-full h-full object-cover opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/90 to-background" />
    </div>

    {/* Glow orbs */}
    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-glow-pulse" />
    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[120px] animate-glow-pulse" style={{ animationDelay: "1.5s" }} />

    <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-sm md:text-base tracking-[0.3em] uppercase text-muted-foreground mb-4"
      >
        MLSA BSEAS Society Presents
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold gradient-text text-glow mb-6"
      >
        AUREX AI 2026
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="text-lg md:text-2xl text-muted-foreground font-light mb-10"
      >
        Where Intelligence Meets Innovation
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="flex flex-col sm:flex-row gap-4 justify-center"
      >
        <Link
          to="/register"
          className="px-8 py-3.5 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold hover:shadow-[0_0_30px_-5px_hsl(var(--glow-blue)/0.5)] transition-all duration-300 hover:scale-105"
        >
          Register Now
        </Link>
        <a
          href="#modules"
          className="px-8 py-3.5 rounded-full border border-glass-border text-foreground font-semibold hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
        >
          Explore Modules
        </a>
      </motion.div>
    </div>

    {/* Scroll indicator */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5 }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2"
    >
      <a href="#about">
        <ChevronDown className="text-muted-foreground animate-float" size={28} />
      </a>
    </motion.div>
  </section>
);

export default HeroSection;
