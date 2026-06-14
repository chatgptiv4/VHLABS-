import type { ReactNode } from "react";

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  iso: string;
  read: string;
  author: string;
  tags: string[];
  content: ReactNode;
};

const H2 = ({ children }: { children: ReactNode }) => (
  <h2 className="mt-12 mb-4 text-2xl font-semibold tracking-tight">{children}</h2>
);
const P = ({ children }: { children: ReactNode }) => (
  <p className="mb-5 leading-relaxed text-foreground/85">{children}</p>
);
const UL = ({ children }: { children: ReactNode }) => (
  <ul className="mb-6 list-disc pl-6 space-y-2 text-foreground/85">{children}</ul>
);

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "owasp-top-10-practical-checklist-2026",
    title: "The OWASP Top 10, Translated For Teams That Actually Ship",
    excerpt:
      "A working checklist for product teams who don't have the luxury of slowing down. Concrete patterns, not buzzwords.",
    date: "April 12, 2026",
    iso: "2026-04-12",
    read: "8 min read",
    author: "VHLabs Engineering",
    tags: ["Security", "Engineering"],
    content: (
      <>
        <P>
          Most security guides read like a compliance audit. They list everything,
          they recommend everything, and by the end you have a 60-page PDF and
          no clear next step. That isn't useful when a release is going out on
          Friday. So this is the version we actually hand to teams we work with —
          short, opinionated, and structured around what will hurt you first.
        </P>

        <H2>1. Broken access control is still the #1 thing that gets you</H2>
        <P>
          It is almost always boring. A user changes <code>/orders/42</code> to{" "}
          <code>/orders/43</code> and sees someone else's invoice. An admin
          endpoint forgets a role check. A JWT is trusted without verifying its
          signature. None of this requires a sophisticated attacker.
        </P>
        <UL>
          <li>Every route checks "is this user allowed to read this row?" — not just "is this user logged in?"</li>
          <li>Authorization lives next to the data layer, not sprinkled in controllers.</li>
          <li>Default deny. If you forgot to add a policy, the answer is no.</li>
        </UL>

        <H2>2. Injection isn't dead, it just changed shape</H2>
        <P>
          Classic SQL injection is rarer in modern stacks because everyone uses
          an ORM. But injection has moved up the stack. NoSQL operator
          injection, prompt injection into LLMs, command injection through
          shell-outs in a build script. The rule is the same: never concatenate
          untrusted input into a command, a query, or a prompt.
        </P>

        <H2>3. Treat secrets like radioactive material</H2>
        <P>
          A surprising amount of "we got hacked" stories end with "the AWS key
          was in a public repo." Use a secret manager, rotate aggressively, and
          assume any secret that ever touched a developer laptop is already
          compromised.
        </P>

        <H2>4. Logging that's actually useful in an incident</H2>
        <P>
          Log the auth decision, not just the request. When something goes
          wrong at 2am, you don't want to reverse-engineer why a request was
          allowed — you want a line that says <em>user 42, role member, denied
          access to org 99</em>.
        </P>

        <H2>5. Patch on a schedule, not on a panic</H2>
        <P>
          A weekly dependency update job is worth more than any individual
          security tool. The teams that get burned by CVEs are almost always
          the ones running a version of a library that's two years behind.
        </P>

        <P>
          The boring stuff wins. Most breaches we've seen weren't elegant —
          they were a missed access check, a hardcoded credential, or a
          dependency nobody had upgraded in 18 months. Build the habits, and
          you take most of the surface area off the table.
        </P>
      </>
    ),
  },
  {
    slug: "seo-that-compounds",
    title: "SEO That Compounds: Structure, Schema, And Speed",
    excerpt:
      "Three levers that pay back over months, not weeks — and what we do for clients who want to rank without playing tricks.",
    date: "March 28, 2026",
    iso: "2026-03-28",
    read: "6 min read",
    author: "VHLabs Growth",
    tags: ["SEO", "Performance"],
    content: (
      <>
        <P>
          We get asked a lot of variations of the same question: "how do I rank
          on Google?" The honest answer is that there is no overnight version
          of it. But there is a version that compounds, and most teams skip it
          because it looks unglamorous.
        </P>

        <H2>Structure: write for the URL, not just the page</H2>
        <P>
          A site that ranks consistently has a clean information hierarchy.
          Categories, then sub-categories, then leaf pages. Google figures out
          what your site is "about" by reading the shape of it. If every page
          lives at the root, every page is competing with every other page for
          authority.
        </P>

        <H2>Schema: tell crawlers what they're looking at</H2>
        <P>
          Structured data (JSON-LD) is the cheapest SEO win available. Mark up
          your organization, your articles, your products, your FAQs. The
          payoff is rich results in search — and richer results get clicked.
        </P>

        <H2>Speed: the silent ranking factor</H2>
        <P>
          Core Web Vitals are real. A site that loads in 1.2s on a mid-tier
          phone outranks the same content on a site that takes 4 seconds. The
          fixes are usually unglamorous: fewer third-party scripts, smarter
          image formats, server-side rendering for the first paint.
        </P>

        <P>
          None of these compound in week one. They compound in month six. The
          mistake is treating SEO like a campaign — it's a system, and the
          teams that win are the ones that build the system once and keep it
          tidy.
        </P>
      </>
    ),
  },
  {
    slug: "designing-trust",
    title: "Designing Trust: The Small Cues That Signal A Secure Product",
    excerpt:
      "Users decide whether to trust a website in under a second. Here are the design choices that move the needle.",
    date: "March 10, 2026",
    iso: "2026-03-10",
    read: "5 min read",
    author: "VHLabs Design",
    tags: ["Design", "UX"],
    content: (
      <>
        <P>
          Trust is not a feature. It's the residue of dozens of small
          decisions, made consistently. When we design for clients in
          regulated industries — fintech, health, B2B SaaS — we obsess about
          the cues users use to decide "is this real?" within the first second.
        </P>

        <H2>The basics, done well, beat the flashy stuff</H2>
        <UL>
          <li>HTTPS, no mixed content, no scary browser warnings.</li>
          <li>A real address and phone number in the footer.</li>
          <li>Faces and names on the about page. Stock photos kill trust.</li>
          <li>Copy that sounds like a human wrote it.</li>
        </UL>

        <H2>Don't fake social proof</H2>
        <P>
          Fake testimonials are easy to spot and they poison the rest of your
          site. If you don't have customer quotes yet, lead with the work.
          Show what you've shipped.
        </P>

        <H2>Slow things down at the right moments</H2>
        <P>
          When a user is about to do something irreversible — pay, delete,
          publish — add friction. A confirmation step communicates that the
          system is careful. Speed everywhere else, friction where it matters.
        </P>

        <P>
          The pattern: be quietly competent. Trust is built in the absence of
          the things that break it.
        </P>
      </>
    ),
  },
  {
    slug: "from-zero-to-first-paying-customer",
    title: "From Zero To First Paying Customer: A Founder's Web Stack",
    excerpt:
      "What we'd ship on day one if we were a solo founder again — chosen for speed to revenue, not engineering pride.",
    date: "February 22, 2026",
    iso: "2026-02-22",
    read: "7 min read",
    author: "VHLabs Founders",
    tags: ["Startups", "Engineering"],
    content: (
      <>
        <P>
          If you are pre-revenue, you don't have a technology problem. You
          have a distribution problem. So the stack should answer one question:
          how fast can we test the offer?
        </P>

        <H2>One framework, one database, one host</H2>
        <P>
          Don't shop around. Pick a stack you (or your contractor) already
          ship in, and resist every urge to over-engineer. A boring monolith
          on a single VPS will get you to your first 1,000 customers without
          breaking a sweat.
        </P>

        <H2>The waitlist is not the product</H2>
        <P>
          Build a landing page, take real payments, and skip the "join the
          waitlist" flow until you actually have a queue. A pre-order button
          that charges a real card tells you ten times more than an email
          collector.
        </P>

        <H2>Analytics you'll actually look at</H2>
        <P>
          Plausible, Fathom, or PostHog. Set up three events: visit, sign-up,
          paid. Anything beyond that is procrastination disguised as
          measurement.
        </P>

        <P>
          The first version of a product is supposed to look small. If it
          doesn't, you spent too long.
        </P>
      </>
    ),
  },
  {
    slug: "what-we-look-for-in-a-pen-test",
    title: "What We Actually Look For In A Penetration Test",
    excerpt:
      "An inside view of how we approach a pen-test engagement, what we find most often, and what teams should fix first.",
    date: "February 5, 2026",
    iso: "2026-02-05",
    read: "9 min read",
    author: "VHLabs Security",
    tags: ["Security", "Audit"],
    content: (
      <>
        <P>
          A penetration test is not a checklist exercise. It is an attempt to
          build a story: starting with whatever a stranger on the internet
          can see, how far can they get? The deliverable is not a scan
          report. It's a chain of small flaws that, taken together, give us
          your data.
        </P>

        <H2>The recon hour</H2>
        <P>
          Before we touch the app, we read your marketing site, your GitHub,
          your job postings, and your LinkedIn. We're looking for stack hints
          and team structure. By the time we hit your login page, we usually
          have a theory of what's behind it.
        </P>

        <H2>What we find every single time</H2>
        <UL>
          <li>An admin endpoint that trusts a header instead of a session.</li>
          <li>A "forgot password" flow that leaks whether an email exists.</li>
          <li>Rate limits on the login form but not on the password-reset form.</li>
          <li>An S3 bucket with object listing turned on.</li>
          <li>A staging environment with production data and no auth.</li>
        </UL>

        <H2>What to fix first</H2>
        <P>
          The report will have a "critical" section. Start there, then fix
          anything that involves authentication or authorization, then
          everything else. Don't chase the easy ones because they look
          satisfying — the critical ones are where breaches start.
        </P>

        <P>
          Pen-tests are most valuable when teams treat them as a conversation,
          not a grade. The best engagements end with the engineering team
          knowing more about their own system than they did before.
        </P>
      </>
    ),
  },
];

export const getPost = (slug: string) =>
  BLOG_POSTS.find((p) => p.slug === slug);
