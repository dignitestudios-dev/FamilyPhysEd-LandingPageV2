"use client";

import { useEffect } from "react";

export function useScrollReveal() {
  useEffect(() => {
    const reveals = Array.from(document.querySelectorAll(".reveal"));
    if (!reveals.length) return;

    if (
      typeof IntersectionObserver === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      reveals.forEach((el) => el.classList.add("is-revealed"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: "0px 0px -10% 0px",
        threshold: 0.08,
      }
    );

    reveals.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}
