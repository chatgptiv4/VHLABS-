import { motion } from "framer-motion";
import { Zap, ShieldCheck, Search, Smartphone, Target, TrendingUp } from "lucide-react";
import { SectionEyebrow, SectionHeading } from "./Services";

const FEATURES = [
  { icon: Zap, title: "Lightning fast", desc: "Edge-rendered, optimized assets, sub-second loads." },
  { icon: ShieldCheck, title: "Secure infrastructure", desc: "Hardened headers, TLS A+, least-privilege defaults." },
  { icon: Search, title: "SEO optimized", desc: "Semantic markup, schema, and per-route metadata." },
  { icon: Smartphone, title: "Responsive design", desc: "Premium experience from 320px to ultrawide." },
  { icon: Target, title: "Conversion focused", desc: "Clear hierarchy, fast forms, measured outcomes." },
  { icon: TrendingUp, title: "Scalable systems", desc: "Architectures that grow from MVP to millions." },
];

export function Features() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionEyebrow>Why VHLabs</SectionEyebrow>
        <SectionHeading>Built to perform under pressure.</SectionHeading>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.05 }}
              className="rounded-2xl border border-border bg-card p-7"
            >
              <f.icon className="h-5 w-5 text-primary" />
              <h3 className="mt-5 text-base font-semibold tracking-tight">{f.title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
