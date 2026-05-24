import type { TrustSignal as TrustSignalType } from "./site-data";

const cinzel = { fontFamily: "'Cinzel', serif" } as const;
const cormorant = { fontFamily: "'Cormorant Garamond', serif" } as const;
const jost = { fontFamily: "'Jost', sans-serif" } as const;

export function TrustSignal({ label, value, description }: TrustSignalType) {
  return (
    <div
      className="group relative overflow-hidden rounded-xl p-5 transition-all duration-300"
      style={{
        background: "rgba(4,31,43,0.55)",
        border: "1px solid rgba(165,141,102,0.18)",
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(165,141,102,0.45)";
        (e.currentTarget as HTMLDivElement).style.background = "rgba(13,77,104,0.5)";
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(165,141,102,0.18)";
        (e.currentTarget as HTMLDivElement).style.background = "rgba(4,31,43,0.55)";
      }}
    >
      <div className="flex flex-col gap-1.5">
        <p
          style={{ ...cinzel, fontSize: "10px", letterSpacing: "0.18em" }}
          className="uppercase text-[rgba(192,213,214,0.55)]"
        >
          {label}
        </p>
        <p
          style={{ ...cormorant, fontSize: "2rem", fontWeight: 300, fontStyle: "normal", lineHeight: 1 }}
          className="text-[#C4A96E]"
        >
          {value}
        </p>
        {description && (
          <p
            style={{ ...jost, fontSize: "0.82rem", fontWeight: 300, lineHeight: 1.6, letterSpacing: "0.02em" }}
            className="text-[rgba(192,213,214,0.45)]"
          >
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
