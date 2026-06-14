const LOGOS = [
  "Northwind", "Acme Labs", "Sentinel", "Helix", "Vector", "Quanta", "Aperture", "Cinder",
];

export function TrustStrip() {
  return (
    <section className="border-y border-border/60 bg-muted/30 py-10" aria-label="Trusted by">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <p className="text-center text-xs uppercase tracking-[0.18em] text-muted-foreground">
          Trusted by security-conscious teams worldwide
        </p>
        <div className="relative mt-6 overflow-hidden">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10"
          />
          <div className="flex w-max marquee gap-14 items-center">
            {[...LOGOS, ...LOGOS].map((l, i) => (
              <span
                key={i}
                className="text-xl sm:text-2xl font-semibold tracking-tight text-muted-foreground/70"
              >
                {l}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
