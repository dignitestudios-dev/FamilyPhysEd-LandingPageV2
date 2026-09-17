import { cn } from "@/lib/utils";

export function BrandLogo({ className, tone = "ink" }) {
  if (tone === "light") {
    return (
      <img
        src="/logo.png"
        alt="Family Phys. Ed."
        className={cn(
          "h-16 w-auto sm:h-20 object-contain select-none",
          className
        )}
        loading="eager"
      />
    );
  }

  return (
    <img
      src="/logo-dark.png"
      alt="Family Phys. Ed."
      className={cn(
        "h-16 w-auto sm:h-20 object-contain select-none",
        className
      )}
      loading="eager"
    />
  );
}

export default BrandLogo;
