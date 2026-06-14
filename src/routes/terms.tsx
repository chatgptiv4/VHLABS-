import { PageMeta } from "@/components/site/PageMeta";

export default function TermsPage() {
  return (
    <>
            <PageMeta title="Terms of Service \u2014 VHLabs" description="The terms that govern your use of the VHLabs website and services." url="/terms" canonical="/terms" />
      <article className="pt-40 pb-24">
        <div className="mx-auto max-w-3xl px-5 sm:px-8 prose prose-neutral">
          <h1 className="text-4xl font-semibold tracking-tight">Terms of Service</h1>
          <p className="text-sm text-muted-foreground">Last updated: April 2026</p>

          <h2 className="mt-10 text-xl font-semibold">Acceptance</h2>
          <p>
            By using vhlabs.dev, you agree to these Terms. If you do not agree, please do not use
            the site.
          </p>

          <h2 className="mt-8 text-xl font-semibold">Use of the site</h2>
          <p>
            You may use the site for lawful purposes only. You may not attempt to compromise the
            security of the site or its users.
          </p>

          <h2 className="mt-8 text-xl font-semibold">Intellectual property</h2>
          <p>
            All content on this site is owned by VHLabs or its licensors and is protected by
            applicable laws.
          </p>

          <h2 className="mt-8 text-xl font-semibold">Disclaimer</h2>
          <p>
            The site is provided "as is" without warranties of any kind. VHLabs is not liable for
            indirect or consequential damages arising from your use of the site.
          </p>

          <h2 className="mt-8 text-xl font-semibold">Contact</h2>
          <p>
            Questions about these Terms? Email{" "}
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
