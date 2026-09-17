import { Laugh, UsersRound, Heart, Sparkles } from "lucide-react";

const WHY_ITEMS = [
  {
    icon: Laugh,
    title: "Pure fun first",
    body: "You're sweating and smiling the whole time — the workout is the side effect.",
  },
  {
    icon: UsersRound,
    title: "Stronger families",
    body: "Families tell us their relationships feel stronger after every single class.",
  },
  {
    icon: Heart,
    title: "Healthy habits",
    body: "Movement you actually look forward to is movement you keep doing.",
  },
  {
    icon: Sparkles,
    title: "Everyone belongs",
    body: "Age 6 or 66, athlete or absolute beginner — all welcome, always.",
  },
];

export function WhyUs() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="reveal relative">
          <div
            aria-hidden="true"
            className="absolute -bottom-6 -left-6 h-40 w-40 rounded-full bg-primary/40 blur-2xl"
          />
          <div className="relative overflow-hidden rounded-[2.5rem] rounded-bl-[6rem] border-4 border-ink shadow-lift">
            <img
              src="/assets/images/FB_IMG_1684246960497.jpeg"
              alt="A Family Phys. Ed. coach and children enjoying games"
              width={720}
              height={1280}
              loading="lazy"
              className="h-[24rem] w-full object-cover sm:h-[32rem]"
            />
          </div>
          <div className="absolute -right-3 bottom-8 max-w-[13rem] rounded-2xl border-4 border-ink bg-primary p-4 shadow-lift">
            <p className="font-display text-sm leading-snug font-extrabold text-primary-foreground">
              &quot;It is so much more than exercise — it is the magic of pure fun.&quot;
            </p>
          </div>
        </div>

        <div>
          <div className="reveal max-w-xl">
            <p className="text-xs font-bold tracking-[0.22em] text-muted-foreground uppercase">
              Why families keep coming back
            </p>
            <h2 className="mt-4 font-display text-4xl leading-[1.02] font-extrabold text-balance sm:text-5xl">
              More than fitness. It&apos;s{" "}
              <span className="script text-[1.15em] font-normal">family</span>{" "}
              time that moves.
            </h2>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {WHY_ITEMS.map((item, idx) => (
              <div
                key={item.title}
                style={{ transitionDelay: `${idx * 80}ms` }}
                className="reveal rounded-2xl border-l-4 border-primary bg-cream p-5 transition-transform duration-300 hover:-translate-y-1"
              >
                <item.icon className="h-6 w-6 text-foreground" aria-hidden="true" />
                <h3 className="mt-3 font-display text-lg font-extrabold">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
