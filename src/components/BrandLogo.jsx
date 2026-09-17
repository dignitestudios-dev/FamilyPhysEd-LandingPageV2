import { cn } from "@/lib/utils";
import { PlayMark } from "./PlayMark";

export function BrandLogo({ className, tone = "ink" }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 select-none",
        tone === "light" ? "text-background" : "text-ink",
        className
      )}
    >
      <span className="script text-2xl leading-none sm:text-[1.7rem]">
        Family
      </span>
      <PlayMark className="h-7 w-7 shrink-0 sm:h-8 sm:w-8" />
      <span className="font-display text-[0.95rem] font-extrabold tracking-[0.16em] uppercase sm:text-base">
        Phys. Ed.
      </span>
    </span>
  );
}
