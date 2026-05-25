import { Instagram, MessageCircle } from "lucide-react";
import { Link } from "wouter";
import { clinicDetails, navLinks } from "./site-data";

const marcellus = { fontFamily: "'Marcellus', serif" } as const;
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
              <span style={{ ...marcellus, fontSize: "16px", letterSpacing: "0.16em" }}
                className="uppercase text-[#C4A96E]">
                Vidya's
              </span>
              <span style={{ ...jost, fontSize: "15px", letterSpacing: "0.07em" }}
                className="font-light text-[rgba(192,213,214,0.5)] mt-0.5">
                Holistic Healings
              </span>
            </div>
          </div>
          <p style={{ ...jost, fontWeight: 400, fontSize: "1.06rem", lineHeight: 1.85, letterSpacing: "0.03em" }}
            className="max-w-xs text-[rgba(192,213,214,0.55)]">
            Certified Pranic Healer dedicated to recalibrating your life force to its highest possible
            frequency. Serving a global community since 2025.
          </p>
          <div className="flex flex-col gap-1.5">
            <span style={{ ...marcellus, fontSize: "14px", letterSpacing: "0.18em", fontWeight:600 }}
              className="uppercase text-[rgba(165,141,102,0.45)]">
              Frisco, Texas · Global Practice
            </span>
            <a href={clinicDetails.phoneHref}
              style={{ ...jost, fontSize: "1.05rem", letterSpacing: "0.04em", fontWeight:400  }}
              className="font-light text-[rgba(192,213,214,0.55)] transition-colors hover:text-[#C4A96E]">
              {clinicDetails.phone}
            </a>
          </div>
        </div>

        {/* Navigate */}
        <div className="flex flex-col gap-4">
          <span style={{ ...marcellus, fontSize: "14px", letterSpacing: "0.22em", fontWeight:500  }}
            className="uppercase text-[#A58D66]">
            Navigate
          </span>
          <div className="h-px w-6 bg-[rgba(165,141,102,0.3)]" />
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              style={{ ...jost, fontSize: "1.08rem", letterSpacing: "0.03em" }}
              className="font-light text-[rgba(192,213,214,0.55)] transition-colors hover:text-[#C0D5D6]"
              onClick={(e: React.MouseEvent) => {
                if (link.href.includes('#')) {
                  const hashId = link.href.split('#')[1];
                  const el = document.getElementById(hashId);
                  if (el) {
                    e.preventDefault();
                    el.scrollIntoView({ behavior: 'smooth' });
                  }
                }
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Connect */}
        <div className="flex flex-col gap-4">
          <span style={{ ...marcellus, fontSize: "13px", letterSpacing: "0.22em" }}
            className="uppercase text-[#A58D66]">
            Connect
          </span>
          <div className="h-px w-6 bg-[rgba(165,141,102,0.3)]" />
          <div className="flex flex-col gap-2"
            style={{ ...jost, fontWeight: 300, fontSize: "1rem", lineHeight: 1.75, letterSpacing: "0.03em" }}>
            <p className="text-[rgba(192,213,214,0.55)]">{clinicDetails.hours}</p>
            <div className="flex items-center gap-3">
              <a
                href={clinicDetails.whatsappHref}
                target="_blank"
                rel="noreferrer"
                aria-label="Chat on WhatsApp"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[rgba(37,211,102,0.12)] text-[#25D366] transition-all hover:bg-[rgba(37,211,102,0.25)]"
              >
                <MessageCircle className="h-4 w-4" />
              </a>
              <a
                href={clinicDetails.instagramHref}
                target="_blank"
                rel="noreferrer"
                aria-label="Follow on Instagram"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[rgba(165,141,102,0.12)] text-[#C4A96E] transition-all hover:bg-[rgba(165,141,102,0.25)]"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: "1px solid rgba(165,141,102,0.12)" }}>
        <div className="container flex items-center justify-between py-5">
          <span style={{ ...jost, fontSize: "0.9rem", letterSpacing: "0.03em" }}
            className="font-light text-[rgba(192,213,214,0.3)]">
            © 2025 Vidya's Holistic Healings. All rights reserved.
          </span>
          <span style={{ ...marcellus, fontSize: "12px", letterSpacing: "0.18em" }}
            className="uppercase text-[rgba(165,141,102,0.35)]">
            Heal the Need
          </span>
        </div>
      </div>
    </footer>
  );
}
