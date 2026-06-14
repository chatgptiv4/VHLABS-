import { Link } from "react-router-dom";
import { Mail, Phone } from "lucide-react";
import { SITE, NAV_LINKS } from "@/lib/site";
import { NewsletterForm } from "./NewsletterForm";

export function Footer() {
  return (
    <footer className="border-t border-border/70 bg-background mt-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-16">
        <div className="grid gap-12 lg:grid-cols-4">
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <img
                src="/logo.jpg"
                alt=""
                width={32}
                height={32}
                className="h-8 w-8 rounded-lg object-cover"
              />
              <span className="font-semibold tracking-tight">{SITE.name}</span>
            </div>
            <p className="max-w-md text-sm text-muted-foreground text-pretty">{SITE.description}</p>
            <div className="space-y-1.5 text-sm">
              <a
                href={`mailto:${SITE.email}`}
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="h-4 w-4" /> {SITE.email}
              </a>
              <a
                href={SITE.phoneHref}
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Phone className="h-4 w-4" /> {SITE.phone}
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4">Navigate</h3>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/privacy" className="text-sm text-muted-foreground hover:text-foreground">
                  Privacy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-sm text-muted-foreground hover:text-foreground">
                  Terms
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4">Stay in the loop</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Security insights, engineering notes, and product launches.
            </p>
            <NewsletterForm />
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-border/60 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <p>Built with security at the core.</p>
        </div>
      </div>
    </footer>
  );
}
