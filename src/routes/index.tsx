import { PageMeta } from "@/components/site/PageMeta";
import { Hero } from "@/components/site/Hero";
import { TrustStrip } from "@/components/site/TrustStrip";
import { Services } from "@/components/site/Services";
import { Process } from "@/components/site/Process";
import { Features } from "@/components/site/Features";
import { Projects } from "@/components/site/Projects";
import { Testimonials } from "@/components/site/Testimonials";
import { Stats } from "@/components/site/Stats";
import { CTA } from "@/components/site/CTA";
import { ContactForm } from "@/components/site/ContactForm";
import { SectionEyebrow, SectionHeading, SectionLead } from "@/components/site/Services";
import { SITE } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <PageMeta title={`${SITE.name} — ${SITE.tagline}`} url="/" canonical="/" />
      <Hero />
      <TrustStrip />
      <Services />
      <About />
      <Process />
      <Features />
      <Projects />
      <Testimonials />
      <Stats />
      <ContactBlock />
      <CTA />
    </>
  );
}

function About() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-2 gap-12 items-start">
        <div>
          <SectionEyebrow>About</SectionEyebrow>
          <SectionHeading>Security is not a feature. It's a foundation.</SectionHeading>
          <SectionLead>
            We build the modern web the way it should be built — with secure defaults, scalable
            architecture, performance budgets, and a clean code culture. Every line passes review.
            Every dependency gets audited. Every launch comes with a runbook.
          </SectionLead>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {[
            { k: "Security-first", v: "Hardened by default" },
            { k: "Scalable", v: "From MVP to scale" },
            { k: "Modern", v: "Edge, type-safe, tested" },
            { k: "Measured", v: "Performance budgets" },
          ].map((b) => (
            <div key={b.k} className="rounded-2xl border border-border bg-card p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-primary">{b.k}</p>
              <p className="mt-2 text-lg font-semibold tracking-tight">{b.v}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactBlock() {
  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-2 gap-12">
        <div>
          <SectionEyebrow>Contact</SectionEyebrow>
          <SectionHeading>Start a project.</SectionHeading>
          <SectionLead>
            Share a few details and we'll respond within one business day. Prefer email? Reach us
            directly.
          </SectionLead>
          <ul className="mt-8 space-y-2 text-sm">
            <li><a className="text-foreground hover:text-primary transition-colors" href={`mailto:${SITE.email}`}>{SITE.email}</a></li>
            <li><a className="text-muted-foreground hover:text-foreground transition-colors" href={SITE.phoneHref}>{SITE.phone}</a></li>
          </ul>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}