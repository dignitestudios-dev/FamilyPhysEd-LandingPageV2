import { cn } from "@/lib/utils";

export function PlayMark({ className = "h-8 w-8", alt = "Family Phys. Ed." }) {
  return (
    <img
      src="/logo.png"
      alt={alt}
      className={cn("inline-block object-contain", className)}
      loading="eager"
    />
  );
}

export default PlayMark;
