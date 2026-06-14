import { motion } from "framer-motion";
import {
  ShieldCheck,
  Search,
  Boxes,
  Palette,
  Plug,
  HardDriveDownload,
  Gauge,
  GraduationCap,
} from "lucide-react";

const SERVICES = [
  { icon: ShieldCheck, title: "Secure Website Development", desc: "Hardened, accessible sites engineered against the OWASP Top 10." },
  { icon: Search, title: "SEO Optimization", desc: "Technical SEO, schema, sitemaps, performance — rank where it matters." },
  { icon: Boxes, title: "SaaS Development", desc: "Scalable multi-tenant platforms with secure auth and billing." },
  { icon: Palette, title: "UI / UX Design", desc: "Premium product surfaces designed to convert and delight." },
  { icon: Plug, title: "API Integration", desc: "Stripe, Twilio, OpenAI — secure, observable, well-typed." },
  { icon: HardDriveDownload, title: "Website Hardening", desc: "Headers, CSP, rate limits, secrets hygiene — close the gaps." },
  { icon: Gauge, title: "Performance Optimization", desc: "Sub-second load, smooth scroll, and 90+ Lighthouse scores." },
  { icon: GraduationCap, title: "Cybersecurity Consulting", desc: "Reviews, threat modeling, incident readiness — pragmatic." },
];

export function Services() {
  return (
    <section id="services" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionEyebrow>Services</SectionEyebrow>
        <SectionHeading>
          Engineering services built around <span className="gradient-text">security</span>.
        </SectionHeading>
        <SectionLead>
          A focused set of capabilities for teams that refuse to choose between
          speed, polish, and safety.
        </SectionLead>

        <div className="mt-14 grid gap-4 sm:gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.05 }}
              whileHover={{ y: -4 }}
              className="group relative rounded-2xl border border-border bg-card p-6 transition-colors hover:border-foreground/20"
            >
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-accent text-primary">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-base font-semibold tracking-tight">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs uppercase tracking-[0.2em] text-primary font-medium">
      {children}
    </p>
  );
}
export function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mt-3 text-3xl sm:text-5xl font-semibold tracking-tight text-balance max-w-3xl">
      {children}
    </h2>
  );
}
export function SectionLead({ children }: { children: React.ReactNode }) {
  return (
    <p className="mt-5 text-lg text-muted-foreground max-w-2xl text-pretty">
      {children}
    </p>
  );
}
