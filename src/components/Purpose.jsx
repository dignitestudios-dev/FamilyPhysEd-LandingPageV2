import { Award, HeartHandshake, Smartphone, Trees } from "lucide-react";

const PURPOSE_ITEMS = [
  {
    icon: Award,
    title: "Founded by a P.E. teacher",
    body: "20+ years of teaching physical education — every session is built on real curriculum experience.",
  },
  {
    icon: HeartHandshake,
    title: "All ages, all abilities",
    body: "Kids, parents, grandparents. Nobody gets picked last and nobody sits out.",
  },
  {
    icon: Smartphone,
    title: "On the App Store & Google Play",
    body: "The Family Phys. Ed. apps connect families with local coaches for users and coaches alike.",
  },
  {
    icon: Trees,
    title: "Private & public sessions",
    body: "Book a private session for your crew, or join a public class with other local fun families.",
  },
];

export function Purpose() {
  return (
    <section id="purpose" className="border-y border-border bg-cream py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="reveal grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {PURPOSE_ITEMS.map((item, idx) => (
            <div
              key={item.title}
              style={{ transitionDelay: `${idx * 90}ms` }}
              className="reveal group rounded-3xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-ink hover:shadow-lift"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary transition-transform duration-300 group-hover:rotate-6">
                <item.icon className="h-6 w-6 text-primary-foreground" aria-hidden="true" />
              </span>
              <h3 className="mt-5 font-display text-lg font-extrabold">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
