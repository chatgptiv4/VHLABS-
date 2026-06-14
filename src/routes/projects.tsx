import { PageMeta } from "@/components/site/PageMeta";
import { Projects } from "@/components/site/Projects";
import { CTA } from "@/components/site/CTA";

export default function ProjectsPage() {
  return (
    <>
            <PageMeta title="Projects \u2014 VHLabs" description="Selected work by VHLabs: fintech, healthcare, AI, and developer tooling." ogTitle="Projects \u2014 VHLabs" ogDescription="Recent client projects shipped by VHLabs." url="/projects" canonical="/projects" />
      <div className="pt-32" />
      <Projects />
      <CTA />
    </>
  );
}
