import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ArrowRight, ArrowLeft, PartyPopper } from "lucide-react";
import Navbar from "@/components/Navbar";

const steps = ["Personal Info", "Event Selection", "Confirmation"];

const Register = () => {
  const [step, setStep] = useState(0);
  const [regType, setRegType] = useState<"individual" | "team">("individual");
  const [form, setForm] = useState({
    name: "", email: "", university: "", github: "",
    teamName: "", category: "hackathon",
    competitions: [] as string[],
  });
  const [submitted, setSubmitted] = useState(false);

  const update = (key: string, val: string) => setForm(f => ({ ...f, [key]: val }));
  const toggleComp = (c: string) =>
    setForm(f => ({
      ...f,
      competitions: f.competitions.includes(c)
        ? f.competitions.filter(x => x !== c)
        : [...f.competitions, c],
    }));

  const canNext = step === 0
    ? form.name && form.email && form.university
    : step === 1
    ? form.category
    : true;

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Navbar />
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-center glass-card p-12 max-w-md mx-4"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring" }}
            className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary/20 flex items-center justify-center"
          >
            <PartyPopper className="text-primary" size={36} />
          </motion.div>
          <h2 className="text-2xl font-heading font-bold text-foreground mb-2">Registration Complete!</h2>
          <p className="text-muted-foreground text-sm mb-6">
            Welcome to AUREX AI 2026, {form.name}! A confirmation email has been sent to {form.email}.
          </p>
          <a
            href="/"
            className="px-6 py-2.5 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground text-sm font-semibold inline-block"
          >
            Back to Home
          </a>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-2xl">
          <h1 className="text-3xl md:text-4xl font-heading font-bold gradient-text text-center mb-8">
            Register for AUREX AI 2026
          </h1>

          {/* Progress */}
          <div className="flex items-center justify-center gap-2 mb-10">
            {steps.map((s, i) => (
              <div key={s} className="flex items-center gap-2">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold transition-colors ${
                  i <= step
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground"
                }`}>
                  {i < step ? <Check size={14} /> : i + 1}
                </div>
                <span className="text-xs text-muted-foreground hidden sm:inline">{s}</span>
                {i < steps.length - 1 && <div className={`w-8 md:w-16 h-px ${i < step ? "bg-primary" : "bg-muted"}`} />}
              </div>
            ))}
          </div>

          {/* Form steps */}
          <div className="glass-card p-6 md:p-8">
            <AnimatePresence mode="wait">
              {step === 0 && (
                <motion.div key="s0" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-5">
                  <h2 className="font-heading font-semibold text-foreground text-lg">Personal Information</h2>

                  <div className="flex gap-3">
                    {(["individual", "team"] as const).map(t => (
                      <button
                        key={t}
                        onClick={() => setRegType(t)}
                        className={`flex-1 py-2.5 rounded-xl text-sm font-medium transition-all ${
                          regType === t
                            ? "bg-primary text-primary-foreground"
                            : "bg-muted text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        {t === "individual" ? "Individual" : "Team"}
                      </button>
                    ))}
                  </div>

                  <input
                    placeholder="Full Name *"
                    value={form.name}
                    onChange={e => update("name", e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-muted border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:border-primary transition-colors"
                  />
                  <input
                    placeholder="Email Address *"
                    type="email"
                    value={form.email}
                    onChange={e => update("email", e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-muted border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:border-primary transition-colors"
                  />
                  <input
                    placeholder="University *"
                    value={form.university}
                    onChange={e => update("university", e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-muted border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:border-primary transition-colors"
                  />
                  <input
                    placeholder="GitHub Profile Link"
                    value={form.github}
                    onChange={e => update("github", e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-muted border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:border-primary transition-colors"
                  />
                  {regType === "team" && (
                    <input
                      placeholder="Team Name *"
                      value={form.teamName}
                      onChange={e => update("teamName", e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-muted border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:border-primary transition-colors"
                    />
                  )}
                </motion.div>
              )}

              {step === 1 && (
                <motion.div key="s1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-5">
                  <h2 className="font-heading font-semibold text-foreground text-lg">Event Selection</h2>

                  <div>
                    <label className="text-sm text-muted-foreground mb-2 block">Participation Category</label>
                    <select
                      value={form.category}
                      onChange={e => update("category", e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-muted border border-border text-foreground text-sm focus:outline-none focus:border-primary transition-colors"
                    >
                      <option value="hackathon">Hackathon</option>
                      <option value="workshops">Workshops Only</option>
                      <option value="full">Full Event Pass</option>
                      <option value="speaker">Speaker Session Only</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-sm text-muted-foreground mb-3 block">Side Competitions (optional)</label>
                    {["The Broken Code", "Prompt Engineering Duel", "Deepfake or Real?", "Aurex Sticker Battle"].map(c => (
                      <label key={c} className="flex items-center gap-3 mb-3 cursor-pointer group">
                        <div className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${
                          form.competitions.includes(c)
                            ? "bg-primary border-primary"
                            : "border-border group-hover:border-primary/50"
                        }`}>
                          {form.competitions.includes(c) && <Check size={12} className="text-primary-foreground" />}
                        </div>
                        <span className="text-sm text-foreground">{c}</span>
                      </label>
                    ))}
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div key="s2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-5">
                  <h2 className="font-heading font-semibold text-foreground text-lg">Review & Confirm</h2>

                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between py-2 border-b border-border">
                      <span className="text-muted-foreground">Name</span>
                      <span className="text-foreground">{form.name}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-border">
                      <span className="text-muted-foreground">Email</span>
                      <span className="text-foreground">{form.email}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-border">
                      <span className="text-muted-foreground">University</span>
                      <span className="text-foreground">{form.university}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-border">
                      <span className="text-muted-foreground">Category</span>
                      <span className="text-foreground capitalize">{form.category}</span>
                    </div>
                    {form.competitions.length > 0 && (
                      <div className="flex justify-between py-2 border-b border-border">
                        <span className="text-muted-foreground">Competitions</span>
                        <span className="text-foreground text-right">{form.competitions.join(", ")}</span>
                      </div>
                    )}
                    <div className="flex justify-between py-2 border-b border-border">
                      <span className="text-muted-foreground">Type</span>
                      <span className="text-foreground capitalize">{regType}</span>
                    </div>
                  </div>

                  <div className="glass-card p-4 mt-4">
                    <p className="text-xs text-muted-foreground">
                      💳 Payment integration will be available soon. Your registration is currently free for early birds.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex justify-between mt-8">
              <button
                onClick={() => setStep(s => s - 1)}
                disabled={step === 0}
                className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium text-muted-foreground hover:text-foreground disabled:opacity-30 transition-colors"
              >
                <ArrowLeft size={16} /> Back
              </button>

              {step < 2 ? (
                <button
                  onClick={() => setStep(s => s + 1)}
                  disabled={!canNext}
                  className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground text-sm font-semibold disabled:opacity-40 hover:shadow-[0_0_20px_-3px_hsl(var(--glow-blue)/0.5)] transition-all"
                >
                  Next <ArrowRight size={16} />
                </button>
              ) : (
                <button
                  onClick={() => setSubmitted(true)}
                  className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground text-sm font-semibold hover:shadow-[0_0_20px_-3px_hsl(var(--glow-blue)/0.5)] transition-all"
                >
                  Submit Registration <Check size={16} />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
