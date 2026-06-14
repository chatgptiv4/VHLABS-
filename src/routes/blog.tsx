import { PageMeta } from "@/components/site/PageMeta";
import { Link } from "react-router-dom";
import { SectionEyebrow, SectionHeading, SectionLead } from "@/components/site/Services";
import { BLOG_POSTS } from "@/lib/blog";

export default function BlogPage() {
  return (
    <>
            <PageMeta title="Blog \u2014 VHLabs" description="Notes on security, engineering, SEO, and design from the VHLabs team." ogTitle="Blog \u2014 VHLabs" ogDescription="Notes on security, engineering, and design." url="/blog" canonical="/blog" />
      <section className="pt-40 pb-12">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <SectionEyebrow>Writing</SectionEyebrow>
          <SectionHeading>Notes from the team.</SectionHeading>
          <SectionLead>
            Essays on security, engineering, and design — written for the people who build and ship.
          </SectionLead>
        </div>
      </section>
      <section className="pb-24">
        <div className="mx-auto max-w-4xl px-5 sm:px-8 divide-y divide-border">
          {BLOG_POSTS.map((p) => (
            <Link key={p.slug} to={`/blog/${p.slug}`} className="block py-8 group">
              <p className="text-xs text-muted-foreground">
                <time dateTime={p.iso}>{p.date}</time> · {p.read} · {p.tags.join(" · ")}
              </p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight group-hover:text-primary transition-colors">
                {p.title}
              </h2>
              <p className="mt-2 text-muted-foreground max-w-2xl">{p.excerpt}</p>
              <p className="mt-3 text-sm text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                Read article →
              </p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
