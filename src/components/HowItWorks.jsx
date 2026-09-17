const STEPS = [
  {
    n: "01",
    title: "Download the app",
    body: "Grab the free Family Phys. Ed. app on the App Store or Google Play.",
  },
  {
    n: "02",
    title: "Find your coach",
    body: "Connect with local P.E., sports and gym teachers coaching near you.",
  },
  {
    n: "03",
    title: "Book or join",
    body: "Reserve a private session, or hop into a public class with other local families.",
  },
  {
    n: "04",
    title: "Play together",
    body: "Show up, laugh hard, sweat a little and build habits that stick.",
  },
];

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden bg-ink py-20 text-background sm:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent"
      />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="reveal flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="max-w-xl font-display text-4xl leading-[1.02] font-extrabold text-balance sm:text-5xl">
            How it works
          </h2>
          <p className="max-w-md text-background/70">
            Four steps between you and the best hour your family has had all week.
          </p>
        </div>

        <ol className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, idx) => (
            <li
              key={step.n}
              style={{ transitionDelay: `${idx * 100}ms` }}
              className="reveal group relative border-t-2 border-background/15 pt-6 transition-colors duration-300 hover:border-primary"
            >
              <span className="font-display text-5xl font-extrabold text-primary">
                {step.n}
              </span>
              <h3 className="mt-4 font-display text-xl font-extrabold">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-background/65">
                {step.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
