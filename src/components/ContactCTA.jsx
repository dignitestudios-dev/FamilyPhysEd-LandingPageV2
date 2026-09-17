import { Mail, Phone } from "lucide-react";
import { PlayMark } from "./PlayMark";

export function ContactCTA() {
  return (
    <section id="contact" className="px-5 pb-20 sm:px-8 sm:pb-28">
      <div
        id="coaches"
        className="reveal relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-primary px-6 py-16 text-primary-foreground sm:px-14 sm:py-20"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 -left-20 h-72 w-72 rounded-full bg-background/25 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="grain-dots pointer-events-none absolute inset-0 opacity-30"
        />

        <div className="relative mx-auto max-w-3xl text-center">
          <PlayMark className="mx-auto h-12 w-12 text-ink" />

          <h2 className="mt-6 font-display text-4xl leading-[1.02] font-extrabold text-balance sm:text-6xl">
            Let&apos;s play.
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-ink/75">
            Tell us who&apos;s playing and where. We&apos;ll match you with an
            energetic coach and bring the games — true fun, real play, all
            welcome.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="mailto:info@familyphysed.com?subject=True%20Fun"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-8 py-4 font-display text-base font-extrabold text-background transition-transform duration-300 hover:-translate-y-1"
            >
              <Mail className="h-5 w-5" aria-hidden="true" />
              info@familyphysed.com
            </a>

            <a
              href="tel:+12156697955"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-ink px-8 py-4 font-display text-base font-extrabold text-ink transition-colors duration-300 hover:bg-ink hover:text-background"
            >
              <Phone className="h-5 w-5" aria-hidden="true" />
              (215) 669-7955
            </a>
          </div>

          <p className="mt-6 text-sm font-semibold text-ink/70">
            Coaches welcome too — organize your own sessions and earn additional
            income.
          </p>
        </div>
      </div>
    </section>
  );
}
