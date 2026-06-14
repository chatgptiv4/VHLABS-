import { motion } from "framer-motion";
import { SectionEyebrow, SectionHeading, SectionLead } from "./Services";

const STEPS = [
  { n: "01", title: "Discovery", desc: "Goals, audience, threat surface, success metrics." },
  { n: "02", title: "Strategy", desc: "Architecture, stack, security posture, SEO plan." },
  { n: "03", title: "Design", desc: "Brand-aligned UI systems, prototypes, accessibility." },
  { n: "04", title: "Development", desc: "Type-safe, tested, code-reviewed engineering." },
  { n: "05", title: "Security Testing", desc: "OWASP checks, dependency audits, penetration review." },
  { n: "06", title: "Deployment", desc: "CDN, observability, runbooks, post-launch monitoring." },
];

export function Process() {
  return (
    <section className="py-24 sm:py-32 bg-muted/30 border-y border-border/60">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionEyebrow>Process</SectionEyebrow>
        <SectionHeading>A repeatable path from idea to production.</SectionHeading>
        <SectionLead>
          Every engagement follows a tight, transparent process with security
          baked in at every stage.
        </SectionLead>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {STEPS.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.06 }}
              className="rounded-2xl bg-card border border-border p-7"
            >
              <div className="text-xs font-mono text-primary">{s.n}</div>
              <h3 className="mt-3 text-lg font-semibold tracking-tight">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
