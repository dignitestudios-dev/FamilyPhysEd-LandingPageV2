import { Smartphone, Zap, MapPin, ShieldCheck } from "lucide-react";

function AppleStoreIcon({ className = "h-7 w-7" }) {
  return (
    <svg
      viewBox="0 0 170 170"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.7-3.05-7.62-7.83-11.78-14.35-5.77-9.04-10.12-19.16-13.06-30.34-2.94-11.19-4.41-21.72-4.41-31.59 0-14.6 3.73-26.68 11.2-36.24 7.46-9.56 16.79-14.45 27.99-14.68 5.44 0 11.12 1.34 17.04 4.02 5.92 2.68 9.77 4.08 11.55 4.2 1.57-.12 5.68-1.63 12.33-4.53 6.64-2.9 12.44-4.23 17.39-3.99 13.51.87 24.24 5.99 32.2 15.35-11.88 7.18-17.68 16.92-17.41 29.22.27 9.8 4.09 17.91 11.45 24.32 7.37 6.42 16.14 10.15 26.31 11.2-2.17 6.44-4.7 12.76-7.59 18.96zM119.22 33.34c0-7.39 2.65-14.28 7.96-20.67 5.3-6.39 11.83-10.42 19.57-12.08.76 6.97-.93 13.79-5.07 20.47-4.14 6.68-10.13 11.08-17.98 13.2-1.02-.32-2.36-.5-4.02-.55-.33-.12-.49-.24-.46-.37z" />
    </svg>
  );
}

function GooglePlayIcon({ className = "h-7 w-7" }) {
  return (
    <svg
      viewBox="0 0 512 512"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M47.7 7.7C39.6 12.3 34.7 20.8 34.7 30.7v450.6c0 9.9 4.9 18.4 13 23l248.8-248.3L47.7 7.7z"
        fill="#00D3FF"
      />
      <path
        d="M380.3 180.2L296.5 256l83.8 75.8 96.6-55.5c14.7-8.4 23.8-23.7 23.8-40.3 0-16.5-9.1-31.9-23.8-40.3l-96.6-55.5z"
        fill="#FFCE00"
      />
      <path
        d="M47.7 504.3c7.5 4.3 16.7 4.2 24.6-.3l308-176.8L296.5 256 47.7 504.3z"
        fill="#E32C2B"
      />
      <path
        d="M380.3 180.2L72.3 3.4C64.4-1.1 55.2-1.2 47.7 3.1l248.8 248.3 83.8-71.2z"
        fill="#00E676"
      />
    </svg>
  );
}

const APP_GROUPS = [
  {
    group: "For families",
    desc: "Connect with local coaches & book play sessions",
    items: [
      {
        badgeSub: "Download on the",
        badgeTitle: "App Store",
        href: "https://apps.apple.com/us/app/family-phys-ed-user/id6746496337",
        icon: AppleStoreIcon,
      },
      {
        badgeSub: "GET IT ON",
        badgeTitle: "Google Play",
        href: "https://play.google.com/store/apps/details?id=com.dignitestudios.familyphysusers",
        icon: GooglePlayIcon,
      },
    ],
  },
  {
    group: "For coaches",
    desc: "Organize public classes & accept private bookings",
    items: [
      {
        badgeSub: "Download on the",
        badgeTitle: "App Store",
        href: "https://apps.apple.com/us/app/family-phys-ed-coach/id6746495686",
        icon: AppleStoreIcon,
      },
      {
        badgeSub: "GET IT ON",
        badgeTitle: "Google Play",
        href: "https://play.google.com/store/apps/details?id=com.dignitestudios.familyphyscoach",
        icon: GooglePlayIcon,
      },
    ],
  },
];

export function AppDownload() {
  return (
    <section id="app" className="border-y border-border bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="reveal grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2 text-xs font-bold tracking-[0.18em] text-background uppercase shadow-sm">
              <Smartphone className="h-4 w-4 text-primary" aria-hidden="true" />
              Free mobile app
            </span>

            <h2 className="mt-6 font-display text-4xl leading-[1.02] font-extrabold text-balance sm:text-5xl text-ink">
              Download the free{" "}
              <span className="script text-[1.15em] font-normal">Family</span>{" "}
              Phys. Ed. app
            </h2>

            <p className="mt-5 max-w-lg text-lg leading-relaxed text-muted-foreground">
              Connect with your local phys. ed., sports and gym teachers. Find
              coaches for all your play experiences, and meet other local fun
              families at public P.E. sessions. Coaches can accept private
              sessions and offer public classes.
            </p>

            <div className="mt-8 flex flex-wrap gap-4 text-sm font-semibold text-ink">
              <div className="inline-flex items-center gap-2 rounded-full bg-card border border-border px-4 py-2 shadow-sm">
                <Zap className="h-4 w-4 text-primary" />
                <span>Instant Booking</span>
              </div>
              <div className="inline-flex items-center gap-2 rounded-full bg-card border border-border px-4 py-2 shadow-sm">
                <MapPin className="h-4 w-4 text-grass" />
                <span>Local Coaches Near You</span>
              </div>
              <div className="inline-flex items-center gap-2 rounded-full bg-card border border-border px-4 py-2 shadow-sm">
                <ShieldCheck className="h-4 w-4 text-primary" />
                <span>Verified & Safe</span>
              </div>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {APP_GROUPS.map((item, idx) => (
              <div
                key={item.group}
                style={{ transitionDelay: `${idx * 100}ms` }}
                className="reveal flex flex-col justify-between rounded-3xl border border-border bg-card p-6 sm:p-7 shadow-[0_20px_50px_-40px_rgba(0,0,0,0.45)] transition-all duration-300 hover:border-ink hover:shadow-lift"
              >
                <div>
                  <h3 className="font-display text-xl font-extrabold text-ink">
                    {item.group}
                  </h3>
                  <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 flex flex-col gap-3">
                  {item.items.map((app) => (
                    <a
                      key={app.badgeTitle + item.group}
                      href={app.href}
                      target="_blank"
                      rel="noreferrer"
                      className="group relative flex items-center gap-3.5 rounded-2xl bg-ink px-4 py-3 text-background shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-black hover:shadow-lift active:scale-[0.98]"
                    >
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center">
                        <app.icon className="h-7 w-7 transition-transform group-hover:scale-105" />
                      </div>
                      <div className="flex flex-col text-left">
                        <span className="text-[10px] font-bold tracking-[0.12em] uppercase text-background/70 leading-none">
                          {app.badgeSub}
                        </span>
                        <span className="font-display text-base font-extrabold tracking-tight leading-tight text-background mt-0.5">
                          {app.badgeTitle}
                        </span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
