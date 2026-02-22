import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronDown, Sparkles, Calendar, ArrowRight, MousePointer2 } from "lucide-react";
import heroBg from "@/assets/hero-bg-light.jpg";

const STATS = [
  { value: "500+", label: "Participants" },
  { value: "20+", label: "Speakers" },
  { value: "6", label: "Modules" },
  { value: "1 Day", label: "Immersion" },
];

const HeroSection = () => {
  // Animation Variants
  const containerVars = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const itemVars = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-background py-20">
      {/* Background Layer */}
      <BackgroundOverlay />

      <motion.div 
        variants={containerVars}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-5xl mx-auto px-6 flex flex-col items-center text-center"
      >
        {/* Event Badge */}
        <motion.div variants={itemVars} className="flex items-center gap-3 px-3 py-1.5 rounded-full border border-primary/10 bg-primary/5 backdrop-blur-md mb-6">
          <Sparkles size={12} className="text-accent animate-pulse" />
          <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground">
            MLSA BSEAS Presents
          </span>
          <div className="w-[1px] h-3 bg-border" />
          <span className="text-[10px] font-bold text-primary flex items-center gap-1">
            <Calendar size={12} /> MARCH 15, 2026
          </span>
        </motion.div>

        {/* Headline - Scaled Down for Elegance */}
        <motion.div variants={itemVars} className="space-y-2 mb-6">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
            <span className="text-foreground">The Future of </span>
            <span className="gradient-text italic px-2">AUREX</span>
          </h1>
          <p className="text-base md:text-lg text-muted-foreground font-light max-w-lg mx-auto leading-relaxed">
            A premium one-day immersion into the nexus of <span className="text-foreground font-medium">Artificial Intelligence</span> and human creativity.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div variants={itemVars} className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <Link
            to="/register"
            className="group relative flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground text-sm font-semibold transition-all hover:ring-4 hover:ring-primary/20"
          >
            Get Early Access
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          
          <a
            href="#modules"
            className="px-6 py-3 rounded-xl border border-border bg-background/50 backdrop-blur-sm text-sm font-semibold hover:bg-secondary/50 transition-colors"
          >
            View Modules
          </a>
        </motion.div>

        {/* Refined Stats Grid */}
        <motion.div 
          variants={itemVars}
          className="grid grid-cols-2 md:grid-cols-4 gap-0 rounded-2xl border border-border/50 bg-background/40 backdrop-blur-xl overflow-hidden"
        >
          {STATS.map((stat, idx) => (
            <div 
              key={idx} 
              className="px-8 py-5 flex flex-col items-center justify-center border-r border-b md:border-b-0 border-border/50 last:border-none"
            >
              <span className="text-xl font-bold text-foreground">{stat.value}</span>
              <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-medium">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-widest text-muted-foreground">Discover</span>
        <div className="w-5 h-8 border-2 border-muted-foreground/30 rounded-full flex justify-center p-1">
          <motion.div 
            animate={{ y: [0, 12, 0] }} 
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-1 h-1 bg-primary rounded-full" 
          />
        </div>
      </motion.div>
    </section>
  );
};

const BackgroundOverlay = () => (
  <div className="absolute inset-0 z-0">
    <img src={heroBg} alt="" className="w-full h-full object-cover opacity-40" />
    <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
    
    {/* Subtle Orbs */}
    <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px] animate-pulse" />
    <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-accent/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: "1s" }} />
    
    {/* Clean Dot Matrix Pattern */}
    <div className="absolute inset-0 opacity-[0.15]" style={{
      backgroundImage: `radial-gradient(circle, hsl(var(--foreground)) 1px, transparent 1px)`,
      backgroundSize: "32px 32px"
    }} />
  </div>
);

export default HeroSection;
