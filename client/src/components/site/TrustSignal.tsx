import type { TrustSignal as TrustSignalType } from "./site-data";

export function TrustSignal({ label, value, description }: TrustSignalType) {
  return (
    <div className="group relative overflow-hidden rounded-xl border border-primary/10 bg-gradient-to-br from-white/80 to-white/40 p-6 transition-all duration-300 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="relative space-y-2">
        <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground/70">{label}</p>
        <p className="text-4xl font-bold text-primary">{value}</p>
        {description && <p className="text-sm text-muted-foreground">{description}</p>}
      </div>
    </div>
  );
}
