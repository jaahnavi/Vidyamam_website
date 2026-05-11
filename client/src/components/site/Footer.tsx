import { Link } from "wouter";
import { clinicDetails, navLinks } from "./site-data";

const cinzel = { fontFamily: "'Cinzel', serif" } as const;
const cormorant = { fontFamily: "'Cormorant Garamond', serif" } as const;
const jost = { fontFamily: "'Jost', sans-serif" } as const;

export function Footer() {
  return (
    <footer
      style={{ background: "#041F2B", borderTop: "1px solid rgba(165,141,102,0.2)" }}
    >
      <div className="container grid gap-16 py-16 lg:grid-cols-[2fr_1fr_1fr]">

        {/* Brand column */}
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-3">
            <img src="/logo1.png" alt="VHH" className="h-12 w-12 object-contain" />
            <div className="flex flex-col leading-none">
              <span style={{ ...cinzel, fontSize: "12px", letterSpacing: "0.16em" }}
                className="uppercase text-[#C4A96E]">
                Vidya's
              </span>
              <span style={{ ...jost, fontSize: "11px", letterSpacing: "0.07em" }}
                className="font-light text-[rgba(192,213,214,0.5)] mt-0.5">
                Holistic Healing
              </span>
            </div>
          </div>
          <p style={{ ...jost, fontWeight: 300, fontSize: "0.82rem", lineHeight: 1.85, letterSpacing: "0.03em" }}
            className="max-w-xs text-[rgba(192,213,214,0.55)]">
            Certified Pranic Healer dedicated to recalibrating your life force to its highest possible
            frequency. Serving a global community since 2025.
          </p>
          <div className="flex flex-col gap-1.5">
            <span style={{ ...cinzel, fontSize: "8px", letterSpacing: "0.18em" }}
              className="uppercase text-[rgba(165,141,102,0.45)]">
              Frisco, Texas · Global Practice
            </span>
            <a href={clinicDetails.phoneHref}
              style={{ ...jost, fontSize: "0.82rem", letterSpacing: "0.04em" }}
              className="font-light text-[rgba(192,213,214,0.55)] transition-colors hover:text-[#C4A96E]">
              {clinicDetails.phone}
            </a>
          </div>
        </div>

        {/* Navigate */}
        <div className="flex flex-col gap-4">
          <span style={{ ...cinzel, fontSize: "9px", letterSpacing: "0.22em" }}
            className="uppercase text-[#A58D66]">
            Navigate
          </span>
          <div className="h-px w-6 bg-[rgba(165,141,102,0.3)]" />
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              style={{ ...jost, fontSize: "0.82rem", letterSpacing: "0.03em" }}
              className="font-light text-[rgba(192,213,214,0.55)] transition-colors hover:text-[#C0D5D6]"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Connect */}
        <div className="flex flex-col gap-4">
          <span style={{ ...cinzel, fontSize: "9px", letterSpacing: "0.22em" }}
            className="uppercase text-[#A58D66]">
            Connect
          </span>
          <div className="h-px w-6 bg-[rgba(165,141,102,0.3)]" />
          <div className="flex flex-col gap-2"
            style={{ ...jost, fontWeight: 300, fontSize: "0.82rem", lineHeight: 1.75, letterSpacing: "0.03em" }}>
            <p className="text-[rgba(192,213,214,0.55)]">{clinicDetails.hours}</p>
            <a href={clinicDetails.whatsappHref}
              className="text-[rgba(192,213,214,0.55)] transition-colors hover:text-[#C4A96E]">
              WhatsApp
            </a>
            <button
              onClick={() => window.location.href = "/contact"}
              style={{ ...cinzel, fontSize: "8.5px", letterSpacing: "0.16em" }}
              className="mt-2 w-fit rounded-[4px] bg-[#A58D66] px-5 py-2.5 uppercase text-[#041F2B] transition-all hover:bg-[#C4A96E]"
            >
              Book a Session
            </button>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: "1px solid rgba(165,141,102,0.12)" }}>
        <div className="container flex items-center justify-between py-5">
          <span style={{ ...jost, fontSize: "0.7rem", letterSpacing: "0.03em" }}
            className="font-light text-[rgba(192,213,214,0.3)]">
            © 2025 Vidya's Holistic Healing. All rights reserved.
          </span>
          <span style={{ ...cinzel, fontSize: "7.5px", letterSpacing: "0.18em" }}
            className="uppercase text-[rgba(165,141,102,0.35)]">
            Heal the Need
          </span>
        </div>
      </div>
    </footer>
  );
}
