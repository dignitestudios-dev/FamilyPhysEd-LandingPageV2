import Link from "next/link";
import { BrandLogo } from "./BrandLogo";

const FOOTER_COLUMNS = [
  {
    title: "Explore",
    links: [
      { label: "Purpose", href: "/#purpose" },
      { label: "Sessions", href: "/#sessions" },
      { label: "How It Works", href: "/#how-it-works" },
      { label: "Testimonials", href: "/#testimonials" },
    ],
  },
  {
    title: "The FPE App",
    links: [
      {
        label: "Families — Apple",
        href: "https://apps.apple.com/us/app/family-phys-ed-user/id6746496337",
      },
      {
        label: "Families — Google Play",
        href: "https://play.google.com/store/apps/details?id=com.dignitestudios.familyphysusers",
      },
      {
        label: "Coaches — Apple",
        href: "https://apps.apple.com/us/app/family-phys-ed-coach/id6746495686",
      },
      {
        label: "Coaches — Google Play",
        href: "https://play.google.com/store/apps/details?id=com.dignitestudios.familyphyscoach",
      },
    ],
  },
  {
    title: "Contact",
    links: [
      {
        label: "info@familyphysed.com",
        href: "mailto:info@familyphysed.com?subject=True%20Fun",
      },
      { label: "(215) 669-7955", href: "tel:+12156697955" },
      {
        label: "YouTube channel",
        href: "https://www.youtube.com/channel/UC9tX6P5pomlkWfOnkJc3NEw",
      },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-ink pt-16 pb-10 text-background">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_2fr]">
          <div>
            <BrandLogo tone="light" />
            <p className="mt-5 max-w-sm leading-relaxed text-background/60">
              True fun. Real play. All welcome. Your favorite childhood P.E.
              games brought to life by energetic coaches — created and founded by
              a 20+ year P.E. teacher.
            </p>
          </div>

          <div className="grid gap-10 sm:grid-cols-3">
            {FOOTER_COLUMNS.map((col) => (
              <div key={col.title}>
                <h3 className="font-display text-xs font-extrabold tracking-[0.2em] text-primary uppercase">
                  {col.title}
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      {link.href.startsWith("http") || link.href.startsWith("mailto:") || link.href.startsWith("tel:") ? (
                        <a
                          href={link.href}
                          {...(link.href.startsWith("http")
                            ? { target: "_blank", rel: "noreferrer" }
                            : {})}
                          className="text-sm text-background/65 transition-colors hover:text-primary"
                        >
                          {link.label}
                        </a>
                      ) : (
                        <Link
                          href={link.href}
                          className="text-sm text-background/65 transition-colors hover:text-primary"
                        >
                          {link.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-background/12 pt-6 text-xs text-background/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Family Phys. Ed.™ All rights reserved.
          </p>
          <div className="flex flex-wrap gap-5 sm:gap-6">
            <Link href="/privacy-policy" className="transition-colors hover:text-primary">
              Privacy Policy
            </Link>
            <Link href="/terms" className="transition-colors hover:text-primary">
              Terms & Conditions
            </Link>
            <Link href="/refund-policy" className="transition-colors hover:text-primary">
              Refund Policy
            </Link>
            <Link href="/code-of-conduct" className="transition-colors hover:text-primary">
              Code of Conduct
            </Link>
            <a href="/#top" className="transition-colors hover:text-primary">
              Back to top
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
