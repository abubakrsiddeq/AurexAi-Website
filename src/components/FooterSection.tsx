import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const FooterSection = () => (
  <footer className="border-t border-border bg-card/50 backdrop-blur-xl">
    <div className="container mx-auto max-w-6xl px-4 py-14">
      <div className="grid md:grid-cols-4 gap-8">
        <div className="md:col-span-2">
          <h3 className="text-2xl font-heading font-bold gradient-text mb-3">AUREX AI 2026</h3>
          <p className="text-sm text-muted-foreground max-w-sm">The flagship AI event by MLSA BSEAS Society. Where intelligence meets innovation.</p>
          <Link
            to="/register"
            className="inline-flex items-center gap-2 mt-4 text-sm font-semibold text-primary hover:gap-3 transition-all"
          >
            Register Now <ArrowRight size={14} />
          </Link>
        </div>
        <div>
          <h4 className="font-heading font-semibold text-foreground mb-4 text-sm">Explore</h4>
          <div className="flex flex-col gap-2.5 text-sm text-muted-foreground">
            <a href="#about" className="hover:text-foreground transition-colors">About</a>
            <a href="#modules" className="hover:text-foreground transition-colors">Modules</a>
            <a href="#hackathon" className="hover:text-foreground transition-colors">Hackathon</a>
            <a href="#speakers" className="hover:text-foreground transition-colors">Speakers</a>
          </div>
        </div>
        <div>
          <h4 className="font-heading font-semibold text-foreground mb-4 text-sm">Participate</h4>
          <div className="flex flex-col gap-2.5 text-sm text-muted-foreground">
            <Link to="/register" className="hover:text-foreground transition-colors">Registration</Link>
            <a href="#workshops" className="hover:text-foreground transition-colors">Workshops</a>
            <a href="#competitions" className="hover:text-foreground transition-colors">Competitions</a>
          </div>
        </div>
      </div>
      <div className="neon-line mt-10 mb-6" />
      <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
        <p className="text-xs text-muted-foreground">
          © 2026 AUREX AI — MLSA BSEAS Society
        </p>
        <p className="text-xs text-muted-foreground">
          Powered by Innovation ✦
        </p>
      </div>
    </div>
  </footer>
);

export default FooterSection;
