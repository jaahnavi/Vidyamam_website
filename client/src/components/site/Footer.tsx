import { Link } from "wouter";
import { clinicDetails, navLinks } from "./site-data";

export function Footer() {
  return (
    <footer className="border-t border-primary/10 bg-white/60 backdrop-blur-sm">
      <div className="container grid gap-10 py-12 lg:grid-cols-[1.2fr_0.8fr_1fr]">
        <div className="space-y-4">
          <p className="font-display text-3xl font-semibold text-foreground">{clinicDetails.name}</p>
          <p className="max-w-md text-sm text-muted-foreground">
            A calm, responsive wellness space in Pune offering compassionate support through Pranic Healing,
            chakra balancing, and gentle care for emotional wellbeing.
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-muted-foreground">Navigate</p>
          <div className="mt-4 grid gap-3 text-sm">
            {navLinks.map(link => (
              <Link key={link.href} href={link.href} className="text-foreground transition-colors hover:text-primary">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="space-y-3 text-sm text-muted-foreground">
          <p className="text-sm font-semibold uppercase tracking-[0.24em]">Visit & Connect</p>
          <p>{clinicDetails.address}</p>
          <a href={clinicDetails.phoneHref} className="block text-foreground hover:text-primary">
            {clinicDetails.phone}
          </a>
          <p>{clinicDetails.hours}</p>
        </div>
      </div>
    </footer>
  );
}
