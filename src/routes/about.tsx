import { PageMeta } from "@/components/site/PageMeta";
import { Stats } from "@/components/site/Stats";
import { CTA } from "@/components/site/CTA";
import { SectionEyebrow, SectionHeading, SectionLead } from "@/components/site/Services";

export default function AboutPage() {
  return (
    <>
            <PageMeta title="About \u2014 VHLabs" description="VHLabs is a security-first web agency engineering premium products for modern teams." ogTitle="About \u2014 VHLabs" ogDescription="Security-first engineering, premium design, measurable outcomes." url="/about" canonical="/about" />
      <section className="pt-40 pb-16">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <SectionEyebrow>About VHLabs</SectionEyebrow>
          <SectionHeading>A web agency wired for security.</SectionHeading>
          <SectionLead>
            We're a small, senior team that ships secure, fast, beautiful products. We've worked on
            fintech, healthcare, AI, and developer tools — and we treat security as a design
            constraint, not a checkbox.
          </SectionLead>
          <div className="mt-10 prose prose-neutral max-w-none text-foreground/80 text-pretty">
            <p>
              VHLabs was founded on a simple idea: the modern web should be premium, accessible, and
              safe by default. We build with type-safe languages, server-rendered frameworks, and
              hardened infrastructure so that the experience your users see is as solid as the
              systems behind it.
            </p>
            <p>
              Every engagement comes with code review, automated testing, dependency auditing,
              OWASP-aligned threat modeling, and a launch runbook. We don't hand off mysteries — we
              hand off systems.
            </p>
          </div>
        </div>
      </section>
      <Stats />
      <CTA />
    </>
  );
}
