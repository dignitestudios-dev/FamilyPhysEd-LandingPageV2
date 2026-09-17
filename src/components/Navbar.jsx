"use client";

import { useState, useEffect } from "react";
import { BrandLogo } from "./BrandLogo";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Purpose", href: "/#purpose" },
  { label: "Sessions", href: "/#sessions" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "FPE App", href: "/#app" },
  { label: "Testimonials", href: "/#testimonials" },
  { label: "Contact", href: "/#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-background/85 border-b border-border shadow-[0_10px_30px_-24px_rgba(0,0,0,0.6)] backdrop-blur-xl"
          : "bg-transparent"
      )}
    >
      <nav
        aria-label="Main"
        className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-3 sm:px-8 lg:py-4"
      >
        <a href="/#top" className="shrink-0" aria-label="Family Phys. Ed. home">
          <BrandLogo />
        </a>

        <ul className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="relative text-[0.92rem] font-medium text-ink-soft transition-colors hover:text-ink after:absolute after:-bottom-1.5 after:left-0 after:h-[3px] after:w-0 after:rounded-full after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href="/#contact"
            className="hidden rounded-full bg-ink px-6 py-3 text-sm font-bold tracking-wide text-background transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-lift sm:inline-flex"
          >
            Book a Session
          </a>
          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-ink lg:hidden"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <div
        className={cn(
          "overflow-hidden border-t border-border bg-background transition-[max-height,opacity] duration-500 lg:hidden",
          menuOpen ? "max-h-[70vh] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <ul className="flex flex-col gap-1 px-5 py-4">
          {NAV_LINKS.map((item, idx) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setMenuOpen(false)}
                style={{ transitionDelay: `${idx * 40}ms` }}
                className="block rounded-xl px-3 py-3 font-display text-xl font-semibold text-ink transition-colors hover:bg-muted"
              >
                {item.label}
              </a>
            </li>
          ))}
          <li className="mt-2">
            <a
              href="/#contact"
              onClick={() => setMenuOpen(false)}
              className="block rounded-full bg-primary px-6 py-4 text-center font-bold text-primary-foreground"
            >
              Book a Session
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Navbar;
