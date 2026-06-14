export const SITE = {
  name: "VHLabs",
  domain: "vhlabs.dev",
  url: "https://vhlabs.dev",
  tagline: "Secure Websites Built For The Modern Internet",
  description:
    "VHLabs is a premium cybersecurity-focused web agency building secure websites, scalable SaaS platforms, and SEO-optimized digital experiences.",
  email: "contact@vhlabs.dev",
  phone: "+2348102353929",
  phoneHref: "tel:+2348102353929",
  social: {
    twitter: "https://twitter.com/",
    github: "https://github.com/",
    linkedin: "https://www.linkedin.com/",
  },
  formspree: {
    contact: (import.meta.env.VITE_FORMSPREE_CONTACT_ID as string) || "xzdwqeyk",
    newsletter: (import.meta.env.VITE_FORMSPREE_NEWSLETTER_ID as string) || "xeedwavv",
  },
} as const;

export const formspreeUrl = (id: string) => `https://formspree.io/f/${id}`;

export const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/case-studies", label: "Case Studies" },
  { to: "/about", label: "About" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
] as const;
