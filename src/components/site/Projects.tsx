import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { SectionEyebrow, SectionHeading } from "./Services";

const PROJECTS = [
  {
    name: "Sentinel Bank",
    tag: "Fintech · Web app",
    blurb: "Hardened banking dashboard with end-to-end encryption.",
  },
  {
    name: "Helix Health",
    tag: "Healthcare · SaaS",
    blurb: "HIPAA-aware patient portal with realtime sync.",
  },
  {
    name: "Vector Cloud",
    tag: "DevTools · Marketing",
    blurb: "Brand site that 4×'d organic signups in 90 days.",
  },
  {
    name: "Quanta Pay",
    tag: "Payments · Platform",
    blurb: "PCI-aware checkout, sub-100ms p95 latency.",
  },
  {
    name: "Aperture AI",
    tag: "AI · Product",
    blurb: "Realtime AI workspace with role-scoped access.",
  },
  {
    name: "Cinder Labs",
    tag: "Cybersecurity · Brand",
    blurb: "Marketing site for an SOC 2 audit firm.",
  },
];

const GRADIENTS = [
  "linear-gradient(135deg, #2563eb 0%, #0a0a0a 100%)",
  "linear-gradient(135deg, #1d4ed8 0%, #3b82f6 100%)",
  "linear-gradient(135deg, #0a0a0a 0%, #2563eb 100%)",
  "linear-gradient(135deg, #3b82f6 0%, #0a0a0a 100%)",
  "linear-gradient(135deg, #1e40af 0%, #60a5fa 100%)",
  "linear-gradient(135deg, #0a0a0a 0%, #1d4ed8 100%)",
];

export function Projects() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <SectionEyebrow>Selected work</SectionEyebrow>
            <SectionHeading>Recent client projects.</SectionHeading>
          </div>
          <Link
            to="/projects"
            className="text-sm text-primary hover:underline inline-flex items-center gap-1"
          >
            View all <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((p, i) => (
            <motion.article
              key={p.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.06 }}
              whileHover={{ y: -4 }}
              className="group rounded-2xl border border-border overflow-hidden bg-card"
            >
              <div
                className="aspect-[16/10] relative overflow-hidden"
                style={{ background: GRADIENTS[i % GRADIENTS.length] }}
              >
                <div
                  aria-hidden
                  className="absolute inset-0 opacity-30"
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, rgba(255,255,255,0.18) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.18) 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                  }}
                />
                <div className="absolute bottom-4 left-4 right-4 rounded-lg bg-white/95 backdrop-blur p-3 shadow-lg">
                  <div className="h-1.5 w-12 rounded bg-foreground/80 mb-1.5" />
                  <div className="h-1 w-24 rounded bg-foreground/30" />
                </div>
              </div>
              <div className="p-6">
                <p className="text-xs text-muted-foreground">{p.tag}</p>
                <h3 className="mt-2 text-lg font-semibold tracking-tight">{p.name}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{p.blurb}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
