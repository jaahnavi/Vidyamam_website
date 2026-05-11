const cinzel = { fontFamily: "'Cinzel', serif" } as const;
const cormorant = { fontFamily: "'Cormorant Garamond', serif" } as const;
const jost = { fontFamily: "'Jost', sans-serif" } as const;

interface TestimonialCardProps {
  quote: string;
  author: string;
}

export function TestimonialCard({ quote, author }: TestimonialCardProps) {
  return (
    <figure
      className="group relative flex h-full flex-col gap-5 rounded-xl p-7 transition-all duration-280"
      style={{
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(165,141,102,0.15)",
        borderTop: "2px solid rgba(165,141,102,0.3)",
      }}
      onMouseEnter={e => {
        const el = e.currentTarget as HTMLElement;
        el.style.background = "rgba(255,255,255,0.07)";
        el.style.borderTopColor = "rgba(165,141,102,0.7)";
        el.style.borderColor = "rgba(165,141,102,0.4)";
      }}
      onMouseLeave={e => {
        const el = e.currentTarget as HTMLElement;
        el.style.background = "rgba(255,255,255,0.04)";
        el.style.borderTopColor = "rgba(165,141,102,0.3)";
        el.style.borderColor = "rgba(165,141,102,0.15)";
      }}
    >
      {/* Large open quote */}
      <div
        style={{ ...cormorant, fontSize: "3.5rem", lineHeight: 1, fontStyle: "normal" }}
        className="text-[#A58D66] opacity-35 select-none"
      >
        "
      </div>

      {/* Quote text */}
      <blockquote
        style={{ ...cormorant, fontStyle: "italic", fontWeight: 300, fontSize: "1.05rem", lineHeight: 1.8 }}
        className="flex-1 text-[rgba(255,255,255,0.85)]"
      >
        {quote}
      </blockquote>

      {/* Author */}
      <figcaption
        style={{ ...cinzel, fontSize: "8.5px", letterSpacing: "0.16em" }}
        className="uppercase text-[#407E8C]"
      >
        — {author}
      </figcaption>
    </figure>
  );
}
