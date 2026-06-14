import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck, Lock, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      {/* Background grid */}
      <div aria-hidden className="absolute inset-0 bg-grid bg-grid-fade" />
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-[600px] -z-10"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(37,99,235,0.12), transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 backdrop-blur px-3 py-1.5 text-xs text-muted-foreground"
          >
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary" />
            Security-first web engineering
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-6 text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-balance"
          >
            Secure websites built for the <span className="gradient-text">modern internet.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="mt-6 text-lg text-muted-foreground text-pretty max-w-2xl mx-auto"
          >
            VHLabs designs and engineers premium digital experiences with a security-first
            foundation — scalable architecture, blazing performance, and SEO that wins.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3"
          >
            <Button asChild size="lg" className="group">
              <Link to="/contact">
                Book consultation
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="ghost">
              <Link to="/services">Explore services</Link>
            </Button>
          </motion.div>
        </div>

        {/* Floating UI cards */}
        <div className="relative mt-20 hidden md:block">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mx-auto max-w-4xl"
          >
            <div className="grid grid-cols-3 gap-4">
              <FloatCard
                icon={<ShieldCheck className="h-4 w-4" />}
                title="Threat hardened"
                value="OWASP Top 10"
                delay={0.4}
              />
              <FloatCard
                icon={<Zap className="h-4 w-4" />}
                title="Lighthouse"
                value="98 / 100"
                delay={0.5}
              />
              <FloatCard
                icon={<Lock className="h-4 w-4" />}
                title="TLS"
                value="A+ rated"
                delay={0.6}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function FloatCard({
  icon,
  title,
  value,
  delay,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className="rounded-2xl border border-border bg-card/70 backdrop-blur p-5 shadow-[var(--shadow-card)]"
    >
      <div className="flex items-center gap-2 text-xs text-muted-foreground">
        <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-accent text-primary">
          {icon}
        </span>
        {title}
      </div>
      <div className="mt-3 text-2xl font-semibold tracking-tight">{value}</div>
    </motion.div>
  );
}
