import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Sparkles, Calendar, ArrowRight } from "lucide-react";

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
            From Today's Applications to Tomorrow's Intelligence, explore
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
    {/* === Modern Generative Background === */}

    {/* Base gradient canvas — deep, rich foundation */}
    <div
      className="absolute inset-0"
      style={{
        background: `
          radial-gradient(ellipse 80% 50% at 50% -20%, hsl(var(--primary) / 0.15) 0%, transparent 60%),
          radial-gradient(ellipse 60% 40% at 80% 110%, hsl(var(--secondary) / 0.12) 0%, transparent 55%),
          radial-gradient(ellipse 70% 45% at 10% 80%, hsl(var(--accent) / 0.10) 0%, transparent 50%),
          linear-gradient(180deg, hsl(var(--background)) 0%, hsl(var(--background) / 0.95) 50%, hsl(var(--background)) 100%)
        `,
      }}
    />

    {/* Aurora band 1 — primary color, top-left drift */}
    <motion.div
      animate={{
        x: ["-5%", "8%", "-3%", "-5%"],
        y: ["-8%", "5%", "-12%", "-8%"],
        rotate: [-8, -5, -10, -8],
        scaleX: [1, 1.15, 0.95, 1],
      }}
      transition={{ repeat: Infinity, duration: 22, ease: "easeInOut" }}
      className="absolute top-[-10%] left-[5%] w-[70%] h-[45%]"
      style={{
        background:
          "linear-gradient(135deg, hsl(var(--primary) / 0.18) 0%, hsl(var(--accent) / 0.12) 40%, transparent 70%)",
        filter: "blur(80px)",
        borderRadius: "40% 60% 70% 30% / 40% 50% 60% 50%",
      }}
    />

    {/* Aurora band 2 — accent/secondary, bottom-right drift */}
    <motion.div
      animate={{
        x: ["3%", "-6%", "5%", "3%"],
        y: ["5%", "-8%", "10%", "5%"],
        rotate: [5, 10, 3, 5],
        scaleX: [1, 0.9, 1.1, 1],
      }}
      transition={{
        repeat: Infinity,
        duration: 26,
        ease: "easeInOut",
        delay: 3,
      }}
      className="absolute bottom-[-5%] right-[0%] w-[65%] h-[50%]"
      style={{
        background:
          "linear-gradient(315deg, hsl(var(--secondary) / 0.16) 0%, hsl(var(--accent) / 0.10) 35%, transparent 65%)",
        filter: "blur(90px)",
        borderRadius: "60% 40% 30% 70% / 50% 60% 40% 50%",
      }}
    />

    {/* Aurora band 3 — center accent bloom */}
    <motion.div
      animate={{
        scale: [1, 1.08, 0.95, 1],
        opacity: [0.6, 1, 0.7, 0.6],
        x: [0, 15, -10, 0],
      }}
      transition={{
        repeat: Infinity,
        duration: 18,
        ease: "easeInOut",
        delay: 6,
      }}
      className="absolute top-[25%] left-[25%] w-[50%] h-[40%]"
      style={{
        background:
          "radial-gradient(ellipse at center, hsl(var(--primary) / 0.10) 0%, hsl(var(--accent) / 0.06) 40%, transparent 70%)",
        filter: "blur(70px)",
        borderRadius: "50%",
      }}
    />

    {/* Animated prismatic light sweep */}
    <motion.div
      animate={{
        x: ["-100%", "200%"],
        opacity: [0, 0.5, 0.8, 0.5, 0],
      }}
      transition={{
        repeat: Infinity,
        duration: 8,
        ease: "easeInOut",
        repeatDelay: 6,
      }}
      className="absolute top-[38%] left-0 w-[40%] h-[2px]"
      style={{
        background:
          "linear-gradient(90deg, transparent 0%, hsl(var(--primary) / 0.4) 20%, hsl(var(--accent) / 0.6) 50%, hsl(var(--secondary) / 0.4) 80%, transparent 100%)",
        filter: "blur(1px)",
      }}
    />

    {/* Second prismatic sweep — vertical, subtle */}
    <motion.div
      animate={{
        y: ["-100%", "200%"],
        opacity: [0, 0.3, 0.5, 0.3, 0],
      }}
      transition={{
        repeat: Infinity,
        duration: 10,
        ease: "easeInOut",
        repeatDelay: 8,
        delay: 4,
      }}
      className="absolute top-0 left-[55%] w-[1px] h-[30%]"
      style={{
        background:
          "linear-gradient(180deg, transparent 0%, hsl(var(--accent) / 0.3) 30%, hsl(var(--primary) / 0.4) 60%, transparent 100%)",
        filter: "blur(1px)",
      }}
    />

    {/* Isometric grid — fine lines, modern tech aesthetic */}
    <div
      className="absolute inset-0 opacity-[0.04]"
      style={{
        backgroundImage: `
          linear-gradient(hsl(var(--foreground) / 0.6) 1px, transparent 1px),
          linear-gradient(90deg, hsl(var(--foreground) / 0.6) 1px, transparent 1px)
        `,
        backgroundSize: "60px 60px",
      }}
    />

    {/* Diamond micro-pattern overlay */}
    <div
      className="absolute inset-0 opacity-[0.025]"
      style={{
        backgroundImage: `
          linear-gradient(45deg, hsl(var(--primary) / 0.5) 1px, transparent 1px),
          linear-gradient(-45deg, hsl(var(--primary) / 0.5) 1px, transparent 1px)
        `,
        backgroundSize: "40px 40px",
      }}
    />

    {/* Concentric rings — hero focus point */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.08, 0.04, 0.08] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        className="w-[500px] h-[500px] rounded-full border border-primary/10"
      />
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.06, 0.03, 0.06] }}
        transition={{
          repeat: Infinity,
          duration: 6,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full border border-accent/8"
      />
      <motion.div
        animate={{ scale: [1, 1.08, 1], opacity: [0.04, 0.02, 0.04] }}
        transition={{
          repeat: Infinity,
          duration: 6,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] rounded-full border border-secondary/8"
      />
    </div>

    {/* Floating particles — small luminous dots */}
    {[
      { top: "12%", left: "18%", size: 3, dur: 15, delay: 0 },
      { top: "25%", left: "75%", size: 2, dur: 18, delay: 2 },
      { top: "60%", left: "85%", size: 4, dur: 20, delay: 5 },
      { top: "70%", left: "10%", size: 2, dur: 16, delay: 3 },
      { top: "40%", left: "45%", size: 3, dur: 22, delay: 7 },
      { top: "85%", left: "55%", size: 2, dur: 19, delay: 1 },
      { top: "15%", left: "60%", size: 3, dur: 17, delay: 4 },
      { top: "50%", left: "25%", size: 2, dur: 21, delay: 6 },
    ].map((p, i) => (
      <motion.div
        key={i}
        animate={{
          y: [0, -20, 10, -15, 0],
          x: [0, 10, -8, 5, 0],
          opacity: [0.3, 0.7, 0.4, 0.8, 0.3],
        }}
        transition={{
          repeat: Infinity,
          duration: p.dur,
          ease: "easeInOut",
          delay: p.delay,
        }}
        className="absolute rounded-full"
        style={{
          top: p.top,
          left: p.left,
          width: p.size,
          height: p.size,
          background: `radial-gradient(circle, hsl(var(--primary) / 0.8) 0%, hsl(var(--accent) / 0.4) 60%, transparent 100%)`,
          boxShadow: `0 0 ${p.size * 4}px ${p.size}px hsl(var(--primary) / 0.15)`,
        }}
      />
    ))}

    {/* Gradient fade overlays for content readability */}
    <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-transparent to-background/90" />
    <div className="absolute inset-0 bg-gradient-to-r from-background/30 via-transparent to-background/30" />

    {/* Radial focus vignette — draws eyes to center */}
    <div
      className="absolute inset-0"
      style={{
        background:
          "radial-gradient(ellipse 65% 55% at 50% 45%, transparent 0%, hsl(var(--background) / 0.7) 100%)",
      }}
    />

    {/* Subtle noise texture for depth */}
    <div
      className="absolute inset-0 opacity-[0.025] mix-blend-overlay pointer-events-none"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
        backgroundSize: "128px 128px",
      }}
    />
  </div>
);

export default HeroSection;
