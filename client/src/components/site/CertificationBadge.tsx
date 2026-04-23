import { CheckCircle2 } from "lucide-react";
import type { Certification } from "./site-data";

export function CertificationBadge({ title, issuer }: Certification) {
  return (
    <div className="group relative flex items-start gap-4 rounded-lg border border-primary/10 bg-white/60 p-4 transition-all duration-300 hover:border-primary/20 hover:bg-white/80 hover:shadow-md">
      <div className="mt-0.5 flex-shrink-0">
        <CheckCircle2 className="h-5 w-5 text-primary/70 transition-colors duration-300 group-hover:text-primary" />
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-sm font-semibold text-foreground">{title}</p>
        <p className="text-xs text-muted-foreground">{issuer}</p>
      </div>
    </div>
  );
}
