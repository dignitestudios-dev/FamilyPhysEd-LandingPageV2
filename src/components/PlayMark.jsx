export function PlayMark({ className = "h-8 w-8" }) {
  return (
    <svg
      viewBox="0 0 64 64"
      role="img"
      aria-label="Family Phys. Ed. play mark"
      className={className}
    >
      <path
        d="M10 6.5 58 32 10 57.5Z"
        fill="var(--color-primary)"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinejoin="round"
      />
      <circle cx="24" cy="25" r="2.8" fill="currentColor" />
      <circle cx="35" cy="26" r="2.8" fill="currentColor" />
      <path
        d="M22 37c4.5 4.5 12 4 16-1.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="3.4"
        strokeLinecap="round"
      />
    </svg>
  );
}
