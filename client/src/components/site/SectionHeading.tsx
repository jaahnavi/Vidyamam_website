import { cn } from "@/lib/utils";

const cinzel = { fontFamily: "'Marcellus', serif" } as const;
const cormorant = { fontFamily: "'Cormorant Garamond', serif" } as const;
const jost = { fontFamily: "'Jost', sans-serif" } as const;

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
  light?: boolean; // true = text on dark bg
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={cn("mb-12 flex flex-col gap-4", align === "center" && "items-center text-center")}>
      <span
        style={{ ...cinzel, fontSize: "11px", letterSpacing: "0.26em" }}
        className={cn("uppercase", light ? "text-[#A58D66]" : "text-[#407E8C]")}
      >
        {eyebrow}
      </span>
      <h2
        style={{ ...cormorant, fontWeight: 300, fontStyle: "italic", fontSize: "clamp(2rem, 3.5vw, 2.8rem)", lineHeight: 1.15 }}
        className={light ? "text-white" : "text-[#083A4F]"}
      >
        {title}
      </h2>
      <div
        className={cn("h-0.5 w-12 rounded", align === "center" && "mx-auto")}
        style={{ background: "#A58D66" }}
      />
      <p
        style={{ ...jost, fontWeight: 300, fontSize: "0.95rem", lineHeight: 1.85, letterSpacing: "0.03em", maxWidth: "34rem" }}
        className={light ? "text-[rgba(192,213,214,0.7)]" : "text-[#2D4A56]"}
      >
        {description}
      </p>
    </div>
  );
}
