import { Sparkles } from "lucide-react";

interface ChakraCardProps {
  name: string;
  tone: string;
  meaning: string;
  color: string;
}

export function ChakraCard({ name, tone, meaning, color }: ChakraCardProps) {
  return (
    <article className="surface-card group relative overflow-hidden p-6">
      <div
        className="absolute inset-x-0 top-0 h-1.5 transition-all duration-300 group-hover:h-2.5"
        style={{ backgroundColor: color }}
      />
      <div className="flex items-center gap-3">
        <div
          className="chakra-ring flex h-12 w-12 items-center justify-center rounded-full border border-white/60"
          style={{ boxShadow: `inset 0 0 0 1px ${color}40` }}
        >
          <Sparkles className="h-5 w-5" style={{ color }} />
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-muted-foreground">{tone}</p>
          <h3 className="text-2xl font-semibold text-foreground">{name}</h3>
        </div>
      </div>
      <p className="mt-5 text-sm text-muted-foreground sm:text-base">{meaning}</p>
    </article>
  );
}
