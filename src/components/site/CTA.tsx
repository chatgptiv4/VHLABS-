import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-foreground text-background p-12 sm:p-20 text-center">
          <div
            aria-hidden
            className="absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage:
                "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />
          <div
            aria-hidden
            className="absolute -top-32 left-1/2 -translate-x-1/2 h-96 w-[640px]"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(37,99,235,0.35), transparent 60%)",
            }}
          />
          <div className="relative">
            <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-balance max-w-2xl mx-auto">
              Ready to build something secure, fast, and beautiful?
            </h2>
            <p className="mt-5 text-background/70 max-w-xl mx-auto">
              Tell us about your project. We respond within one business day.
            </p>
            <div className="mt-9 flex items-center justify-center gap-3">
              <Button asChild size="lg" variant="secondary" className="group">
                <Link to="/contact">
                  Start a project
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="ghost"
                className="text-background hover:bg-background/10 hover:text-background"
              >
                <Link to="/services">See services</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
