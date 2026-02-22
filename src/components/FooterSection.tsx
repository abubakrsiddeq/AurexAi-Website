import { Link } from "react-router-dom";

const FooterSection = () => (
  <footer className="border-t border-glass-border bg-card/40">
    <div className="container mx-auto max-w-6xl px-4 py-12">
      <div className="grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-heading font-bold gradient-text mb-3">AUREX AI 2026</h3>
          <p className="text-sm text-muted-foreground">Organized by MLSA BSEAS Society</p>
          <p className="text-xs text-muted-foreground mt-2">Powered by Innovation</p>
        </div>
        <div>
          <h4 className="font-heading font-semibold text-foreground mb-3 text-sm">Quick Links</h4>
          <div className="flex flex-col gap-2 text-sm text-muted-foreground">
            <a href="#about" className="hover:text-foreground transition-colors">About</a>
            <a href="#modules" className="hover:text-foreground transition-colors">Modules</a>
            <a href="#hackathon" className="hover:text-foreground transition-colors">Hackathon</a>
            <a href="#speakers" className="hover:text-foreground transition-colors">Speakers</a>
          </div>
        </div>
        <div>
          <h4 className="font-heading font-semibold text-foreground mb-3 text-sm">Get Involved</h4>
          <div className="flex flex-col gap-2 text-sm text-muted-foreground">
            <Link to="/register" className="hover:text-foreground transition-colors">Register Now</Link>
            <a href="#workshops" className="hover:text-foreground transition-colors">Workshops</a>
            <a href="#competitions" className="hover:text-foreground transition-colors">Competitions</a>
          </div>
        </div>
      </div>
      <div className="neon-line mt-8 mb-4" />
      <p className="text-xs text-muted-foreground text-center">
        © 2026 AUREX AI — MLSA BSEAS Society. All rights reserved.
      </p>
    </div>
  </footer>
);

export default FooterSection;
