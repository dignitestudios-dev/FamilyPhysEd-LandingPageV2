import { Sparkles, ArrowRight, Users } from "lucide-react";
import { PlayMark } from "./PlayMark";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-28 pb-16 sm:pt-32 lg:pt-40 lg:pb-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -right-28 h-[26rem] w-[26rem] rounded-full bg-primary/35 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="grain-dots pointer-events-none absolute inset-x-0 top-40 h-64 opacity-40"
      />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-16">
        <div className="reveal">
          <span className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-card px-4 py-2 text-xs font-bold tracking-[0.18em] uppercase">
            <Sparkles className="h-4 w-4 text-grass" aria-hidden="true" />
            True Fun. Real Play. All Welcome.
          </span>

          <h1 className="mt-6 font-display text-[2.6rem] leading-[0.95] font-extrabold text-balance sm:text-6xl lg:text-[4.4rem]">
            Healthy fun for
            <span className="script mx-2 text-[1.15em] font-normal tracking-normal">
              everyone
            </span>
            <br className="hidden sm:block" />
            <span className="marker-hl">your favorite childhood P.E. games</span>{" "}
            brought to life.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Family Phys. Ed. sends energetic coaches to run the games you grew up
            loving — for families, kids, grown-ups and whole neighborhoods.
            Created and founded by a P.E. teacher with 20+ years in the gym.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 font-display text-base font-extrabold text-primary-foreground shadow-pop transition-transform duration-300 hover:-translate-y-1"
            >
              Book Now
              <ArrowRight
                className="h-5 w-5 transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              />
            </a>

            <a
              href="#coaches"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-ink px-8 py-4 font-display text-base font-extrabold text-ink transition-colors duration-300 hover:bg-ink hover:text-background"
            >
              <Users className="h-5 w-5" aria-hidden="true" />
              Be a Coach
            </a>
          </div>

          <p className="mt-6 text-sm font-medium text-muted-foreground">
            Sessions for families, adults and kids of every age — indoors,
            outdoors, anywhere there&apos;s room to run.
          </p>
        </div>

        <div className="reveal relative">
          <div className="relative ml-auto w-full max-w-lg">
            <div
              aria-hidden="true"
              className="absolute -top-6 -right-4 h-24 w-24 rotate-12 rounded-3xl bg-primary sm:h-32 sm:w-32"
            />
            <div className="relative overflow-hidden rounded-[2.5rem] rounded-tr-[6rem] border-4 border-ink shadow-lift">
              <img
                src="/assets/images/family phys 3.jpg"
                alt="A family of all ages laughing while playing a P.E. ball game on a sunny grass field"
                width={1920}
                height={1280}
                className="h-[26rem] w-full object-cover sm:h-[34rem]"
              />
            </div>

            {/* Floating Coach Card */}
            <div className="absolute -bottom-8 -left-4 w-52 rounded-3xl border-4 border-ink bg-card p-2 shadow-lift sm:-left-12 sm:w-60">
              <img
                src="/assets/images/FB_IMG_1684246937361.jpg"
                alt="A Family Phys. Ed. coach high-fiving a smiling child"
                width={720}
                height={1007}
                loading="lazy"
                className="h-32 w-full rounded-2xl object-cover sm:h-36"
              />
              <p className="px-2 py-2 text-sm leading-snug font-semibold">
                Real coaches. Real games. Zero sideline sitting.
              </p>
            </div>

            {/* Floating Badge */}
            <div className="absolute -top-8 -left-6 hidden items-center gap-3 rounded-2xl border-4 border-ink bg-background px-4 py-3 shadow-lift sm:flex">
              <PlayMark className="h-8 w-8 text-ink" />
              <span className="font-display text-sm leading-tight font-extrabold">
                20+ years
                <br />
                <span className="font-medium text-muted-foreground">
                  of P.E. teaching
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
