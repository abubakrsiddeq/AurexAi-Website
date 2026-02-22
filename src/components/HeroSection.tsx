import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronDown, Sparkles, Calendar, ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg-light.jpg";

const stats = [
  { value: "500+", label: "Participants" },
  { value: "20+", label: "Speakers" },
  { value: "6", label: "Modules" },
  { value: "1 Day", label: "Immersion" },
];

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    {/* Full background image */}
    <div className="absolute inset-0">
      <img src={heroBg} alt="" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-br from-background/40 via-background/60 to-primary/10" />
    </div>

    {/* Animated gradient orbs */}
    <div className="absolute top-20 right-20 w-[500px] h-[500px] bg-primary/8 rounded-full blur-[150px] animate-glow-pulse" />
    <div className="absolute bottom-20 left-10 w-[400px] h-[400px] bg-accent/8 rounded-full blur-[130px] animate-glow-pulse" style={{ animationDelay: "2s" }} />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[160px] animate-glow-pulse" style={{ animationDelay: "1s" }} />

    {/* Grid pattern overlay */}
    <div className="absolute inset-0 opacity-[0.03]" style={{
      backgroundImage: "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
      backgroundSize: "60px 60px"
    }} />

    <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8"
      >
        <Sparkles size={14} className="text-accent" />
        <span className="text-xs font-medium text-muted-foreground tracking-wide">MLSA BSEAS Society Presents</span>
        <Calendar size={14} className="text-primary" />
        <span className="text-xs font-semibold text-primary">March 15, 2026</span>
      </motion.div>

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.7 }}
        className="text-6xl md:text-8xl lg:text-9xl font-heading font-bold mb-6 leading-[0.9]"
      >
        <span className="gradient-text">AUREX</span>
        <br />
        <span className="text-foreground">AI 2026</span>
      </motion.h1>

      {/* Tagline */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="text-lg md:text-xl text-muted-foreground font-light mb-10 max-w-xl mx-auto"
      >
        Where Intelligence Meets Innovation
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
      >
        <Link
          to="/register"
          className="group inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold text-lg hover:shadow-[0_8px_40px_-8px_hsl(var(--glow-blue)/0.4)] transition-all duration-300 hover:scale-[1.02]"
        >
          Register Now
          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </Link>
        <a
          href="#modules"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl glass-card text-foreground font-semibold text-lg hover:border-primary/40 transition-all duration-300"
        >
          Explore Modules
        </a>
      </motion.div>

      {/* Stats bar */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
        className="glass-card inline-flex divide-x divide-border rounded-2xl"
      >
        {stats.map((s) => (
          <div key={s.label} className="px-6 md:px-10 py-4 text-center">
            <p className="text-xl md:text-2xl font-heading font-bold gradient-text">{s.value}</p>
            <p className="text-xs text-muted-foreground mt-0.5">{s.label}</p>
          </div>
        ))}
      </motion.div>
    </div>

    {/* Scroll indicator */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5 }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2"
    >
      <a href="#about" className="flex flex-col items-center gap-1">
        <span className="text-xs text-muted-foreground">Scroll</span>
        <ChevronDown className="text-muted-foreground animate-float" size={20} />
      </a>
    </motion.div>
  </section>
);

export default HeroSection;
