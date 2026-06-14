import { PageMeta } from "@/components/site/PageMeta";
import { ContactForm } from "@/components/site/ContactForm";
import { SectionEyebrow, SectionHeading, SectionLead } from "@/components/site/Services";
import { SITE } from "@/lib/site";
import { Mail, Phone, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <>
            <PageMeta title="Contact \u2014 VHLabs" description="Book a consultation with VHLabs. We respond within one business day." ogTitle="Contact \u2014 VHLabs" ogDescription="Book a consultation with VHLabs." url="/contact" canonical="/contact" />
      <section className="pt-40 pb-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-2 gap-12">
          <div>
            <SectionEyebrow>Contact</SectionEyebrow>
            <SectionHeading>Let's build something secure.</SectionHeading>
            <SectionLead>
              Tell us about your project and we'll get back within one business day with next steps.
            </SectionLead>

            <ul className="mt-10 space-y-4">
              <li className="flex items-start gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-primary">
                  <Mail className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <a href={`mailto:${SITE.email}`} className="font-medium hover:text-primary">
                    {SITE.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-primary">
                  <Phone className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <a href={SITE.phoneHref} className="font-medium hover:text-primary">
                    {SITE.phone}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-primary">
                  <Clock className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-sm text-muted-foreground">Response time</p>
                  <p className="font-medium">Within 1 business day</p>
                </div>
              </li>
            </ul>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
