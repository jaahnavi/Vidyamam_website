import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "wouter";
import { clinicDetails, navLinks } from "./site-data";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [location] = useLocation();

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/50 bg-[rgba(251,247,239,0.8)] backdrop-blur-xl">
      <div className="container">
        <nav className="flex items-center justify-between py-4" aria-label="Primary navigation">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full border border-primary/15 bg-white/80 shadow-sm">
              <span className="text-lg font-bold text-primary">DV</span>
            </div>
            <div>
              <p className="font-display text-2xl font-semibold leading-none text-foreground">Dr Vidya's</p>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">Holistic Healing Center</p>
            </div>
          </Link>

          <div className="hidden items-center gap-8 lg:flex">
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-semibold tracking-[0.14em] uppercase text-muted-foreground transition-colors duration-200 hover:text-primary",
                  location === link.href && "text-primary",
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <a href={clinicDetails.phoneHref} className="text-sm font-medium text-muted-foreground hover:text-primary">
              {clinicDetails.phone}
            </a>
            <Button
              onClick={() => {
                const contactForm = document.getElementById("contact-form");
                if (contactForm) {
                  contactForm.scrollIntoView({ behavior: "smooth" });
                } else {
                  window.location.href = "/contact";
                }
              }}
              className="rounded-full bg-primary px-6 text-primary-foreground hover:bg-primary/90"
            >
              Book a Consultation
            </Button>
          </div>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-primary/15 bg-white/80 text-primary lg:hidden"
            aria-expanded={menuOpen}
            aria-label="Toggle navigation"
            onClick={() => setMenuOpen(open => !open)}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>
      </div>

      {menuOpen && (
        <div className="border-t border-primary/10 bg-[rgba(251,247,239,0.96)] lg:hidden">
          <div className="container space-y-2 py-4">
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "block rounded-2xl px-4 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-muted-foreground transition hover:bg-white/80 hover:text-primary",
                  location === link.href && "bg-white/90 text-primary",
                )}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button
              onClick={() => {
                setMenuOpen(false);
                const contactForm = document.getElementById("contact-form");
                if (contactForm) {
                  contactForm.scrollIntoView({ behavior: "smooth" });
                } else {
                  window.location.href = "/contact";
                }
              }}
              className="mt-2 w-full rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Book a Consultation
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
