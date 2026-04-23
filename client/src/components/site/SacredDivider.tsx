export function SacredDivider() {
  return (
    <div className="sacred-divider" aria-hidden="true">
      <span />
      <svg width="42" height="42" viewBox="0 0 42 42" fill="none" className="opacity-80">
        <circle cx="21" cy="21" r="8.5" stroke="currentColor" strokeWidth="1.2" />
        <circle cx="21" cy="21" r="15" stroke="currentColor" strokeOpacity="0.35" />
        <path d="M21 4 L26 16 L38 21 L26 26 L21 38 L16 26 L4 21 L16 16 Z" stroke="currentColor" strokeOpacity="0.5" />
      </svg>
      <span />
    </div>
  );
}
