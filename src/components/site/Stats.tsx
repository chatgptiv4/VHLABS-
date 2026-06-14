import { useEffect, useRef, useState } from "react";

const STATS = [
  { value: 180, suffix: "+", label: "Projects shipped" },
  { value: 240, suffix: "+", label: "Security audits" },
  { value: 98, suffix: "", label: "Avg. Lighthouse score" },
  { value: 99, suffix: "%", label: "Client satisfaction" },
];

export function Stats() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10">
          {STATS.map((s) => (
            <div key={s.label} className="text-center">
              <Counter to={s.value} suffix={s.suffix} />
              <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Counter({ to, suffix }: { to: number; suffix?: string }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const startedRef = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !startedRef.current) {
          startedRef.current = true;
          const start = performance.now();
          const duration = 1400;
          const tick = (t: number) => {
            const p = Math.min(1, (t - start) / duration);
            const eased = 1 - Math.pow(1 - p, 3);
            setN(Math.round(to * eased));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [to]);

  return (
    <div
      ref={ref}
      className="text-4xl sm:text-6xl font-semibold tracking-tight tabular-nums"
    >
      {n}
      {suffix}
    </div>
  );
}
