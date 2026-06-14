import { PageMeta } from "@/components/site/PageMeta";
import { Services as ServicesGrid } from "@/components/site/Services";
import { Process } from "@/components/site/Process";
import { CTA } from "@/components/site/CTA";

export default function ServicesPage() {
  return (
    <>
            <PageMeta title="Services \u2014 VHLabs" description="Secure web development, SaaS engineering, SEO optimization, cybersecurity consulting, and performance work \u2014 by VHLabs." ogTitle="Services \u2014 VHLabs" ogDescription="Secure web development, SaaS, SEO and security consulting." url="/services" canonical="/services" />
      <div className="pt-32" />
      <ServicesGrid />
      <Process />
      <CTA />
    </>
  );
}
