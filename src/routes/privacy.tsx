import { PageMeta } from "@/components/site/PageMeta";

export default function PrivacyPage() {
  return (
    <>
            <PageMeta title="Privacy Policy \u2014 VHLabs" description="How VHLabs collects, uses, and protects your information." url="/privacy" canonical="/privacy" />
      <article className="pt-40 pb-24">
        <div className="mx-auto max-w-3xl px-5 sm:px-8 prose prose-neutral">
          <h1 className="text-4xl font-semibold tracking-tight">Privacy Policy</h1>
          <p className="text-sm text-muted-foreground">Last updated: April 2026</p>

          <h2 className="mt-10 text-xl font-semibold">Overview</h2>
          <p>
            VHLabs respects your privacy. This policy describes what we collect when you use our
            website and contact our team.
          </p>

          <h2 className="mt-8 text-xl font-semibold">Information we collect</h2>
          <p>
            When you submit our contact form, we collect your name, email, phone (optional), company
            (optional), budget (optional), and message. We use this only to respond to your inquiry.
          </p>

          <h2 className="mt-8 text-xl font-semibold">How we use information</h2>
          <p>
            We use submissions to follow up about your project and, with consent, to send occasional
            updates. We do not sell your data.
          </p>

          <h2 className="mt-8 text-xl font-semibold">Security</h2>
          <p>
            Submissions are stored in a secured backend with row-level access controls.
            Communications are encrypted in transit (TLS).
          </p>

          <h2 className="mt-8 text-xl font-semibold">Contact</h2>
          <p>
            Questions? Email{" "}
            <a href="mailto:contact@vhlabs.dev" className="text-primary">
              contact@vhlabs.dev
            </a>
            .
          </p>
        </div>
      </article>
    </>
  );
}
