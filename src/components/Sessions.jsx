import { ArrowUpRight } from "lucide-react";

const SESSIONS_DATA = [
  {
    img: "/assets/images/IMG_0279.JPG.jpg",
    alt: "A family laughing and playing physical education games on a field",
    tag: "Families",
    title: "Private Play Sessions",
    body: "Your group versus the games you grew up on. A coach brings the equipment, the rules and the energy — you bring the family.",
    cta: "Book a session",
    href: "#contact",
    span: "lg:col-span-7",
    height: "h-72 sm:h-96",
  },
  {
    img: "/assets/images/IMG_0313.JPG.jpg",
    alt: "A large group of families playing together in a community P.E. class",
    tag: "Community",
    title: "Public P.E. Classes",
    body: "Meet up with other local fun families at public sessions run by coaches near you.",
    cta: "Find a class",
    href: "#app",
    span: "lg:col-span-5",
    height: "h-72 sm:h-80",
  },
  {
    img: "/assets/images/1782917347421.jpg",
    alt: "Adults and group playing lively active games",
    tag: "Grown-ups",
    title: "Adult & Group Games",
    body: "Tag that hits harder than HIIT. Private groups, friends, teams and workplaces — all welcome.",
    cta: "Get details",
    href: "#contact",
    span: "lg:col-span-5",
    height: "h-72 sm:h-80",
  },
];

export function Sessions() {
  return (
    <section id="sessions" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="reveal max-w-2xl">
          <p className="text-xs font-bold tracking-[0.22em] text-muted-foreground uppercase">
            What we offer
          </p>
          <h2 className="mt-4 font-display text-4xl leading-[1.02] font-extrabold text-balance sm:text-5xl">
            Sessions built around <span className="marker-hl">play</span>, not workouts.
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Kickball, tag, broomball, pirate soccer, spot shots — the games you loved as a kid, coached for whoever shows up.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-12">
          {SESSIONS_DATA.map((item, idx) => (
            <article
              key={item.title}
              style={{ transitionDelay: `${idx * 90}ms` }}
              className={`reveal group relative overflow-hidden rounded-[2rem] border border-border bg-card transition-all duration-500 hover:-translate-y-2 hover:shadow-lift ${item.span}`}
            >
              <div className={`relative overflow-hidden ${item.height}`}>
                <img
                  src={item.img}
                  alt={item.alt}
                  width={1000}
                  height={800}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
                />
                <span className="absolute top-4 left-4 rounded-full bg-primary px-4 py-1.5 text-xs font-extrabold tracking-widest text-primary-foreground uppercase">
                  {item.tag}
                </span>
              </div>
              <div className="p-6 sm:p-8">
                <h3 className="font-display text-2xl font-extrabold sm:text-3xl">
                  {item.title}
                </h3>
                <p className="mt-3 max-w-md leading-relaxed text-muted-foreground">
                  {item.body}
                </p>
                <a
                  href={item.href}
                  className="mt-6 inline-flex items-center gap-2 font-display text-sm font-extrabold tracking-wide uppercase underline-offset-8 hover:underline"
                >
                  {item.cta}
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}

          <div className="reveal relative flex flex-col justify-between overflow-hidden rounded-[2rem] bg-ink p-8 text-background lg:col-span-7">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-16 -right-16 h-56 w-56 rounded-full bg-primary/25 blur-2xl"
            />
            <div className="relative">
              <p className="text-xs font-bold tracking-[0.22em] text-primary uppercase">
                For coaches
              </p>
              <h3 className="mt-4 font-display text-3xl leading-tight font-extrabold sm:text-4xl">
                Great coaches, extra income.
              </h3>
              <p className="mt-4 max-w-md leading-relaxed text-background/70">
                We help P.E., sports and gym teachers organize their own sessions — accept private bookings and run public classes for families in your area.
              </p>
            </div>
            <a
              href="#coaches"
              className="relative mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-primary px-7 py-3.5 font-display font-extrabold text-primary-foreground transition-transform duration-300 hover:-translate-y-1"
            >
              Be a Coach
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
