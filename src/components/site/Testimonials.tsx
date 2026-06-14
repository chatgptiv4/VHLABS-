import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { SectionEyebrow, SectionHeading } from "./Services";

const QUOTES = [
  {
    quote:
      "VHLabs delivered a launch that felt premium from pixel one. Lighthouse 98, zero security findings on review.",
    name: "Mara Chen",
    role: "VP Engineering, Sentinel Bank",
  },
  {
    quote:
      "The engineering bar is exceptional. Type-safe, well-tested, and the deployment runbook saved us weeks.",
    name: "David Okafor",
    role: "CTO, Helix Health",
  },
  {
    quote:
      "Organic signups quadrupled in 90 days. Their SEO and performance work was decisive.",
    name: "Sara Lindberg",
    role: "Head of Growth, Vector Cloud",
  },
  {
    quote:
      "Honest, fast, and security-minded. They flagged risks we hadn't even considered.",
    name: "Anika Rao",
    role: "Founder, Aperture AI",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 sm:py-32 bg-muted/30 border-y border-border/60">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionEyebrow>Testimonials</SectionEyebrow>
        <SectionHeading>What teams say after launch.</SectionHeading>

        <div className="mt-12">
          <Swiper
            modules={[Autoplay, Pagination]}
            slidesPerView={1}
            spaceBetween={24}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            loop
            pagination={{ clickable: true }}
            breakpoints={{ 768: { slidesPerView: 2 } }}
            className="!pb-12"
          >
            {QUOTES.map((q) => (
              <SwiperSlide key={q.name}>
                <figure className="h-full rounded-2xl bg-card border border-border p-8">
                  <blockquote className="text-lg leading-snug text-balance">
                    “{q.quote}”
                  </blockquote>
                  <figcaption className="mt-6 text-sm">
                    <div className="font-semibold">{q.name}</div>
                    <div className="text-muted-foreground">{q.role}</div>
                  </figcaption>
                </figure>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
