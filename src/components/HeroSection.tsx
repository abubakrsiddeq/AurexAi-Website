import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Sparkles, Calendar, ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg-light.jpg";

const STATS = [
  { value: "500+", label: "Participants" },
  { value: "20+", label: "Speakers" },
  { value: "6", label: "Modules" },
  { value: "1 Day", label: "Immersion" },
];

const HeroSection = () => {
  const containerVars = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVars = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
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
        <motion.div
          variants={itemVars}
          className="flex items-center gap-3 px-3 py-1.5 rounded-full border border-primary/10 bg-primary/5 backdrop-blur-md mb-6"
        >
          <Sparkles size={12} className="text-accent animate-pulse" />
          <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground">
            MLSA BSEAS Presents
          </span>
          <div className="w-[1px] h-3 bg-border" />
          <span className="text-[10px] font-bold text-primary flex items-center gap-1">
            <Calendar size={12} /> MARCH 15, 2026
          </span>
        </motion.div>

        {/* Headline */}
        <motion.div variants={itemVars} className="space-y-2 mb-6">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
            <span className="text-foreground">AUREX </span>
            <span className="gradient-text italic px-2">AI 2026</span>
          </h1>
          <p className="text-base md:text-lg text-muted-foreground font-light max-w-lg mx-auto leading-relaxed">
            From Today’s Applications to Tomorrow’s Intelligence, explore
            real-world AI, hands-on learning, and expert insights shaping the
            future.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          variants={itemVars}
          className="flex flex-wrap items-center justify-center gap-4 mb-16"
        >
          <Link
            to="/register"
            className="group relative flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground text-sm font-semibold transition-all hover:ring-4 hover:ring-primary/20"
          >
            Get Early Access
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform"
            />
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
              <span className="text-xl font-bold text-foreground">
                {stat.value}
              </span>
              <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-medium">
                {stat.label}
              </span>
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
        <span className="text-[10px] uppercase tracking-widest text-muted-foreground">
          Discover
        </span>
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
    {/* Base hero image with stronger presence */}
    <img
      src={heroBg}
      alt=""
      className="w-full h-full object-cover opacity-50 scale-105"
    />

    {/* Multi-layer gradient overlay for depth */}
    <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/60 to-background" />
    <div className="absolute inset-0 bg-gradient-to-tr from-primary/8 via-transparent to-accent/8" />

    {/* Animated mesh gradient orbs */}
    <motion.div
      animate={{
        x: [0, 30, -20, 0],
        y: [0, -40, 20, 0],
        scale: [1, 1.2, 0.9, 1],
      }}
      transition={{ repeat: Infinity, duration: 20, ease: "easeInOut" }}
      className="absolute top-[-15%] left-[-5%] w-[50%] h-[50%] rounded-full blur-[100px]"
      style={{
        background:
          "radial-gradient(circle, hsl(var(--primary) / 0.2) 0%, hsl(var(--accent) / 0.1) 50%, transparent 70%)",
      }}
    />
    <motion.div
      animate={{
        x: [0, -25, 35, 0],
        y: [0, 30, -25, 0],
        scale: [1, 0.85, 1.15, 1],
      }}
      transition={{
        repeat: Infinity,
        duration: 25,
        ease: "easeInOut",
        delay: 2,
      }}
      className="absolute bottom-[-10%] right-[-10%] w-[55%] h-[55%] rounded-full blur-[100px]"
      style={{
        background:
          "radial-gradient(circle, hsl(var(--accent) / 0.2) 0%, hsl(var(--secondary) / 0.1) 50%, transparent 70%)",
      }}
    />
    <motion.div
      animate={{
        x: [0, 20, -15, 0],
        y: [0, -20, 30, 0],
        scale: [1, 1.1, 0.95, 1],
      }}
      transition={{
        repeat: Infinity,
        duration: 18,
        ease: "easeInOut",
        delay: 5,
      }}
      className="absolute top-[30%] right-[10%] w-[35%] h-[35%] rounded-full blur-[80px]"
      style={{
        background:
          "radial-gradient(circle, hsl(var(--primary) / 0.12) 0%, hsl(var(--secondary) / 0.08) 50%, transparent 70%)",
      }}
    />

    {/* Horizontal light streak */}
    <motion.div
      animate={{ opacity: [0.3, 0.6, 0.3], x: ["-10%", "5%", "-10%"] }}
      transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
      className="absolute top-[25%] left-0 right-0 h-px"
      style={{
        background:
          "linear-gradient(90deg, transparent 0%, hsl(var(--primary) / 0.2) 30%, hsl(var(--accent) / 0.3) 50%, hsl(var(--primary) / 0.2) 70%, transparent 100%)",
      }}
    />

    {/* Modern grid pattern */}
    <div
      className="absolute inset-0 opacity-[0.06]"
      style={{
        backgroundImage: `
          linear-gradient(hsl(var(--foreground) / 0.5) 1px, transparent 1px),
          linear-gradient(90deg, hsl(var(--foreground) / 0.5) 1px, transparent 1px)
        `,
        backgroundSize: "80px 80px",
      }}
    />

    {/* Subtle dot grid overlay */}
    <div
      className="absolute inset-0 opacity-[0.08]"
      style={{
        backgroundImage: `radial-gradient(circle, hsl(var(--primary)) 0.8px, transparent 0.8px)`,
        backgroundSize: "24px 24px",
      }}
    />

    {/* Radial vignette for focus */}
    <div
      className="absolute inset-0"
      style={{
        background:
          "radial-gradient(ellipse 70% 60% at 50% 45%, transparent 0%, hsl(var(--background) / 0.6) 100%)",
      }}
    />

    {/* Film grain noise texture */}
    <div
      className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox=’0 0 256 256’ xmlns=’http://www.w3.org/2000/svg’%3E%3Cfilter id=’n’%3E%3CfeTurbulence type=’fractalNoise’ baseFrequency=’0.85’ numOctaves=’4’ stitchTiles=’stitch’/%3E%3C/filter%3E%3Crect width=’100%25’ height=’100%25’ filter=’url(%23n)’ opacity=’1’/%3E%3C/svg%3E")`,
        backgroundSize: "150px 150px",
      }}
    />

    {/* Floating geometric accents */}
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
      className="absolute top-[15%] right-[15%] w-32 h-32 border border-primary/10 rounded-full opacity-40"
    />
    <motion.div
      animate={{ rotate: -360 }}
      transition={{ repeat: Infinity, duration: 45, ease: "linear" }}
      className="absolute bottom-[20%] left-[12%] w-24 h-24 border border-accent/10 rounded-full opacity-30"
    />
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, duration: 35, ease: "linear" }}
      className="absolute top-[55%] left-[65%] w-16 h-16 border border-secondary/10 rounded-lg rotate-45 opacity-25"
    />
  </div>
);

export default HeroSection;
