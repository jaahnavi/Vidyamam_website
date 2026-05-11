export function SacredDivider({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const color = variant === "dark"
    ? "rgba(165,141,102,0.45)"
    : "rgba(8,58,79,0.3)";

  return (
    <div
      className="flex items-center justify-center gap-4 py-7"
      aria-hidden="true"
      style={{ color }}
    >
      <span
        style={{
          display: "block", height: "1px", width: "80px",
          background: variant === "dark"
            ? "linear-gradient(to right, transparent, rgba(165,141,102,0.5), transparent)"
            : "linear-gradient(to right, transparent, rgba(8,58,79,0.3), transparent)",
        }}
      />
      <svg width="34" height="34" viewBox="0 0 42 42" fill="none">
        <circle cx="21" cy="21" r="8.5" stroke="currentColor" strokeWidth="2.2" />
        <circle cx="21" cy="21" r="15" stroke="currentColor" strokeWidth="1.8" strokeOpacity="0.35" />
        <path
          d="M21 4 L26 16 L38 21 L26 26 L21 38 L16 26 L4 21 L16 16 Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeOpacity="0.8"
        />
      </svg>
      <span
        style={{
          display: "block", height: "1px", width: "80px",
          background: variant === "dark"
            ? "linear-gradient(to right, transparent, rgba(165,141,102,0.5), transparent)"
            : "linear-gradient(to right, transparent, rgba(8,58,79,0.3), transparent)",
        }}
      />
    </div>
  );
}
