"use client";

import { useRef, useState, useEffect } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

const TESTIMONIALS = [
  {
    text: "These classes are a blast and my relationships in my family are stronger after each class! It is so much more than exercise and fitness, it is the magic of pure fun.",
    who: "Amy J.",
    meta: "age 39",
  },
  {
    text: "That tag game was just as exhausting as my HIIT training, but way more fun!",
    who: "Jacy R.",
    meta: "age 42",
  },
  {
    text: "Mommy, that was so much fun! When can we do it again?!?",
    who: "Anna J. T.",
    meta: "age 8",
  },
  {
    text: "Love it, I've lost 25 pounds since January! Family Phys. Ed. kickstarted it!",
    who: "Rebecca M.",
    meta: "age 38",
  },
  {
    text: "...it's so much fun, and you're sweating and smiling the whole time.",
    who: "Christina P.",
    meta: "age 39",
  },
  {
    text: "We had lots of fun! Thank you!",
    who: "Tracey S.",
    meta: "age 36",
  },
];

export function Testimonials() {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    checkScroll();
    el.addEventListener("scroll", checkScroll, { passive: true });
    window.addEventListener("resize", checkScroll);

    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, []);

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const cardWidth = 380;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -cardWidth : cardWidth,
      behavior: "smooth",
    });
  };

  return (
    <section id="testimonials" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="reveal flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="max-w-xl font-display text-4xl leading-[1.02] font-extrabold text-balance sm:text-5xl">
            What families say{" "}
            <span className="marker-hl">after the whistle</span>
          </h2>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              aria-label="Previous testimonial"
              className={`flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-ink transition-all duration-300 ${
                canScrollLeft
                  ? "cursor-pointer hover:border-ink hover:bg-ink hover:text-background active:scale-95 shadow-sm"
                  : "cursor-not-allowed opacity-30"
              }`}
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              aria-label="Next testimonial"
              className={`flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-ink transition-all duration-300 ${
                canScrollRight
                  ? "cursor-pointer hover:border-ink hover:bg-ink hover:text-background active:scale-95 shadow-sm"
                  : "cursor-not-allowed opacity-30"
              }`}
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      <div className="relative mt-12 w-full overflow-hidden">
        <div
          ref={scrollRef}
          className="flex snap-x snap-mandatory gap-6 overflow-x-auto px-5 pb-6 sm:px-8 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          <div
            aria-hidden="true"
            className="hidden shrink-0 lg:block lg:w-[max(0px,calc((100vw-80rem)/2))]"
          />
          {TESTIMONIALS.map((item, idx) => (
            <figure
              key={item.who + idx}
              className={`w-[19rem] shrink-0 snap-start rounded-[2rem] border p-7 transition-all duration-300 hover:-translate-y-2 sm:w-[23rem] ${
                idx % 3 === 1
                  ? "border-ink bg-ink text-background shadow-lift"
                  : "border-border bg-card text-foreground"
              }`}
            >
              <Quote className="h-8 w-8 text-primary" aria-hidden="true" />
              <blockquote className="mt-5 font-display text-lg leading-snug font-bold text-balance">
                &quot;{item.text}&quot;
              </blockquote>
              <figcaption
                className={`mt-6 flex items-center gap-3 text-sm ${
                  idx % 3 === 1
                    ? "text-background/70"
                    : "text-muted-foreground"
                }`}
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary font-display font-extrabold text-primary-foreground">
                  {item.who.charAt(0)}
                </span>
                <span>
                  <span
                    className={`block font-bold ${
                      idx % 3 === 1 ? "text-background" : "text-ink"
                    }`}
                  >
                    {item.who}
                  </span>
                  {item.meta}
                </span>
              </figcaption>
            </figure>
          ))}
          <div
            aria-hidden="true"
            className="hidden shrink-0 lg:block lg:w-[max(0px,calc((100vw-80rem)/2))]"
          />
        </div>
      </div>
    </section>
  );
}
