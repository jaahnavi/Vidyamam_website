import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "wouter";
import { clinicDetails, navLinks } from "./site-data";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [location] = useLocation();

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[rgba(165,141,102,0.2)] bg-[rgba(4,31,43,0.92)] backdrop-blur-xl transition-all duration-300">
      <div className="container">
        <nav className="flex h-[72px] items-center justify-between" aria-label="Primary navigation">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <img
              src="/logo1.png"
              alt="Vidya's Holistic Healing"
              className="h-18 w-10 object-contain"
            />
            <div className="flex flex-col leading-none">
              <span
                style={{ fontFamily: "'Cinzel', serif", fontSize: "16px", letterSpacing: "0.16em" }}
                className="uppercase text-[#C4A96E]"
              >
                Vidya's
              </span>
              <span
                style={{ fontFamily: "'Jost', sans-serif", fontSize: "14px", letterSpacing: "0.08em" }}
                className="text-[rgba(192,213,214,0.6)] font-light"
              >
                Holistic Healing
              </span>
            </div>
          </Link>

          {/* Desktop nav links */}
          <div className="hidden items-center gap-8 lg:flex">
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "pb-0.5 text-[11.5px] font-medium uppercase tracking-[0.18em] transition-colors duration-200",
                  "border-b border-transparent",
                  location === link.href
                    ? "border-[rgba(165,141,102,0.6)] text-[#C4A96E]"
                    : "text-white/85 hover:text-[#C4A96E]"
                )}
                style={{ fontFamily: "'Cinzel', serif" }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden items-center gap-4 lg:flex">
            <a
              href={clinicDetails.phoneHref}
              className="text-xs font-light tracking-wide text-[rgba(192,213,214,0.55)] hover:text-[#C4A96E] transition-colors"
              style={{ fontFamily: "'Jost', sans-serif" }}
            >
              {clinicDetails.phone}
            </a>
            <button
              onClick={() => {
                const el = document.getElementById("contact-form");
                if (el) el.scrollIntoView({ behavior: "smooth" });
                else window.location.href = "/contact";
              }}
              className="rounded-[5px] bg-[#A58D66] px-5 py-2.5 text-[11.5px] font-bold  uppercase tracking-[0.16em] text-[#041F2B] transition-all duration-200 hover:bg-[#C4A96E] hover:shadow-[0_0_20px_rgba(165,141,102,0.3)]"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              Book a Session
            </button>
          </div>

          {/* Mobile menu toggle */}
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-[rgba(165,141,102,0.3)] text-[#A58D66] lg:hidden"
            aria-expanded={menuOpen}
            aria-label="Toggle navigation"
            onClick={() => setMenuOpen(open => !open)}
          >
            {menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </nav>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="border-t border-[rgba(165,141,102,0.15)] bg-[rgba(4,31,43,0.97)] lg:hidden">
          <div className="container space-y-1 py-4">
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "block rounded-md px-4 py-3 text-[10px] uppercase tracking-[0.18em] transition-colors",
                  location === link.href
                    ? "bg-[rgba(165,141,102,0.1)] text-[#C4A96E]"
                    : "text-[rgba(192,213,214,0.65)] hover:text-[#C4A96E]"
                )}
                style={{ fontFamily: "'Cinzel', serif" }}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2">
              <button
                onClick={() => {
                  setMenuOpen(false);
                  const el = document.getElementById("contact-form");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                  else window.location.href = "/contact";
                }}
                className="w-full rounded-[5px] bg-[#A58D66] py-3 text-[9px] font-medium uppercase tracking-[0.18em] text-[#041F2B] hover:bg-[#C4A96E]"
                style={{ fontFamily: "'Cinzel', serif" }}
              >
                Book a Session
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
