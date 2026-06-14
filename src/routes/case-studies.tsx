import { PageMeta } from "@/components/site/PageMeta";
import { SectionEyebrow, SectionHeading, SectionLead } from "@/components/site/Services";
import { CTA } from "@/components/site/CTA";

const STUDIES = [
  {
    client: "Sentinel Bank",
    industry: "Fintech",
    summary:
      "Replatformed a regional bank's customer portal with end-to-end encryption and SOC 2-aligned controls.",
    metric: "0 security findings on independent review.",
  },
  {
    client: "Helix Health",
    industry: "Healthcare",
    summary:
      "Shipped a HIPAA-aware patient portal with realtime sync, role-scoped access, and audit logging.",
    metric: "62% reduction in support tickets in 60 days.",
  },
  {
    client: "Vector Cloud",
    industry: "DevTools",
    summary:
      "Rebuilt the marketing site with edge SSR, technical SEO, and a redesigned developer experience.",
    metric: "4× organic signups in 90 days.",
  },
];

export default function CaseStudiesPage() {
  return (
    <>
            <PageMeta title="Case Studies \u2014 VHLabs" description="Outcome-focused case studies from VHLabs client engagements." ogTitle="Case Studies \u2014 VHLabs" ogDescription="Outcomes from VHLabs engagements across fintech, healthcare, and devtools." url="/case-studies" canonical="/case-studies" />
      <section className="pt-40 pb-12">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <SectionEyebrow>Case Studies</SectionEyebrow>
          <SectionHeading>Outcomes our clients can point to.</SectionHeading>
          <SectionLead>
            Three recent engagements. Different industries, same playbook: secure foundations,
            measured outcomes.
          </SectionLead>
        </div>
      </section>
      <section className="pb-16">
        <div className="mx-auto max-w-5xl px-5 sm:px-8 grid gap-6">
          {STUDIES.map((s) => (
            <article key={s.client} className="rounded-2xl border border-border bg-card p-8">
              <p className="text-xs uppercase tracking-[0.18em] text-primary">{s.industry}</p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight">{s.client}</h2>
              <p className="mt-3 text-muted-foreground">{s.summary}</p>
              <p className="mt-5 text-sm font-medium">{s.metric}</p>
            </article>
          ))}
        </div>
      </section>
      <CTA />
    </>
  );
}
