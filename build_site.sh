#!/usr/bin/env bash
set -euo pipefail

cd /home/ubuntu/dr-vidya-holistic-healing-center
mkdir -p client/src/components/site client/src/pages server

cat <<'EOF' > client/index.html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1" />
    <meta name="theme-color" content="#f7f1e7" />
    <meta
      name="description"
      content="Dr Vidya's Holistic Healing Center in Pune offers compassionate Pranic Healing, chakra balancing, and gentle support for stress and anxiety."
    />
    <meta
      name="keywords"
      content="Pranic Healing Pune, holistic healing Pune, chakra balancing Pune, stress healing, anxiety healing, Dr Vidya"
    />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="Dr Vidya's Holistic Healing Center" />
    <meta
      property="og:description"
      content="Guiding you toward balance, healing, and inner peace through Pranic Healing in Pune, India."
    />
    <meta property="og:site_name" content="Dr Vidya's Holistic Healing Center" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Manrope:wght@400;500;600;700;800&display=swap"
      rel="stylesheet"
    />
    <title>Dr Vidya's Holistic Healing Center</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
    <script defer src="%VITE_ANALYTICS_ENDPOINT%/umami" data-website-id="%VITE_ANALYTICS_WEBSITE_ID%"></script>
  </body>
</html>
EOF

cat <<'EOF' > client/src/index.css
@import "tailwindcss";
@import "tw-animate-css";

@custom-variant dark (&:is(.dark *));

@theme inline {
  --font-sans: "Manrope", sans-serif;
  --font-display: "Cormorant Garamond", serif;
  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: calc(var(--radius) - 2px);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) + 4px);
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-card: var(--card);
  --color-card-foreground: var(--card-foreground);
  --color-popover: var(--popover);
  --color-popover-foreground: var(--popover-foreground);
  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);
  --color-secondary: var(--secondary);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-muted: var(--muted);
  --color-muted-foreground: var(--muted-foreground);
  --color-accent: var(--accent);
  --color-accent-foreground: var(--accent-foreground);
  --color-destructive: var(--destructive);
  --color-destructive-foreground: var(--destructive-foreground);
  --color-border: var(--border);
  --color-input: var(--input);
  --color-ring: var(--ring);
  --color-chart-1: var(--chart-1);
  --color-chart-2: var(--chart-2);
  --color-chart-3: var(--chart-3);
  --color-chart-4: var(--chart-4);
  --color-chart-5: var(--chart-5);
  --color-sidebar: var(--sidebar);
  --color-sidebar-foreground: var(--sidebar-foreground);
  --color-sidebar-primary: var(--sidebar-primary);
  --color-sidebar-primary-foreground: var(--sidebar-primary-foreground);
  --color-sidebar-accent: var(--sidebar-accent);
  --color-sidebar-accent-foreground: var(--sidebar-accent-foreground);
  --color-sidebar-border: var(--sidebar-border);
  --color-sidebar-ring: var(--sidebar-ring);
}

:root {
  --radius: 1.25rem;
  --background: oklch(0.977 0.015 85.45);
  --foreground: oklch(0.32 0.028 43.17);
  --card: oklch(0.992 0.011 84.2 / 92%);
  --card-foreground: oklch(0.32 0.028 43.17);
  --popover: oklch(0.995 0.01 84.2);
  --popover-foreground: oklch(0.32 0.028 43.17);
  --primary: oklch(0.46 0.21 292.5);
  --primary-foreground: oklch(0.985 0.005 88);
  --secondary: oklch(0.94 0.022 84.6);
  --secondary-foreground: oklch(0.35 0.03 43);
  --muted: oklch(0.955 0.016 84.6);
  --muted-foreground: oklch(0.55 0.03 48.3);
  --accent: oklch(0.92 0.042 168.8);
  --accent-foreground: oklch(0.3 0.028 156.4);
  --destructive: oklch(0.58 0.22 27.8);
  --destructive-foreground: oklch(0.99 0.005 88);
  --border: oklch(0.87 0.023 78.7);
  --input: oklch(0.9 0.02 80.4);
  --ring: oklch(0.46 0.21 292.5 / 35%);
  --sidebar: oklch(0.985 0.01 84.2);
  --sidebar-foreground: oklch(0.32 0.028 43.17);
  --sidebar-primary: oklch(0.46 0.21 292.5);
  --sidebar-primary-foreground: oklch(0.985 0.005 88);
  --sidebar-accent: oklch(0.92 0.042 168.8);
  --sidebar-accent-foreground: oklch(0.3 0.028 156.4);
  --sidebar-border: oklch(0.87 0.023 78.7);
  --sidebar-ring: oklch(0.46 0.21 292.5 / 35%);
  --chart-1: #7B2CBF;
  --chart-2: #3A0CA3;
  --chart-3: #0077B6;
  --chart-4: #2D6A4F;
  --chart-5: #F4A261;
  --chakra-purple: #7B2CBF;
  --chakra-indigo: #3A0CA3;
  --chakra-blue: #0077B6;
  --chakra-green: #2D6A4F;
  --chakra-yellow: #F4A261;
  --chakra-orange: #E76F51;
  --chakra-red: #D62828;
  --shadow-soft: 0 18px 60px rgba(89, 63, 34, 0.12);
  --shadow-card: 0 14px 35px rgba(89, 63, 34, 0.08);
}

.dark {
  --background: oklch(0.19 0.02 60);
  --foreground: oklch(0.92 0.01 85);
  --card: oklch(0.23 0.02 60 / 90%);
  --card-foreground: oklch(0.92 0.01 85);
  --popover: oklch(0.23 0.02 60);
  --popover-foreground: oklch(0.92 0.01 85);
  --secondary: oklch(0.27 0.02 58);
  --secondary-foreground: oklch(0.92 0.01 85);
  --muted: oklch(0.25 0.02 58);
  --muted-foreground: oklch(0.77 0.015 74);
  --accent: oklch(0.29 0.04 168);
  --accent-foreground: oklch(0.94 0.01 85);
  --border: oklch(0.35 0.02 55 / 35%);
  --input: oklch(0.35 0.02 55 / 35%);
}

html {
  scroll-behavior: smooth;
}

body {
  min-height: 100vh;
  background:
    radial-gradient(circle at top left, rgba(123, 44, 191, 0.09), transparent 30%),
    radial-gradient(circle at top right, rgba(45, 106, 79, 0.08), transparent 28%),
    linear-gradient(180deg, #fbf7ef 0%, #f6efe3 100%);
  font-family: var(--font-sans);
}

::selection {
  background: rgba(123, 44, 191, 0.16);
}

@keyframes fade-up {
  from {
    opacity: 0;
    transform: translateY(18px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slow-float {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-7px);
  }
}

@layer base {
  * {
    @apply border-border outline-ring/50;
  }

  body {
    @apply bg-background text-foreground antialiased;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: var(--font-display);
    letter-spacing: -0.02em;
  }

  p {
    @apply leading-7;
  }

  button:not(:disabled),
  [role="button"]:not([aria-disabled="true"]),
  [type="button"]:not(:disabled),
  [type="submit"]:not(:disabled),
  [type="reset"]:not(:disabled),
  a[href],
  select:not(:disabled),
  input[type="checkbox"]:not(:disabled),
  input[type="radio"]:not(:disabled) {
    @apply cursor-pointer;
  }
}

@layer components {
  .container {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    padding-left: 1rem;
    padding-right: 1rem;
  }

  .flex {
    min-height: 0;
    min-width: 0;
  }

  .section-shell {
    @apply relative py-16 sm:py-20 lg:py-24;
  }

  .eyebrow {
    @apply inline-flex items-center gap-2 rounded-full border border-primary/12 bg-white/65 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-primary shadow-sm backdrop-blur;
  }

  .section-title {
    @apply text-4xl font-semibold text-foreground sm:text-5xl;
  }

  .section-copy {
    @apply max-w-2xl text-base text-muted-foreground sm:text-lg;
  }

  .surface-card {
    @apply rounded-[1.75rem] border border-white/70 bg-card/90 backdrop-blur-sm transition-all duration-300;
    box-shadow: var(--shadow-card);
  }

  .surface-card:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-soft);
  }

  .fade-in-section {
    animation: fade-up 0.8s ease-out both;
  }

  .soft-orb {
    @apply absolute rounded-full blur-3xl;
    animation: slow-float 9s ease-in-out infinite;
  }

  .sacred-divider {
    @apply flex items-center justify-center gap-3 py-6 text-primary/50;
  }

  .sacred-divider span {
    @apply h-px w-16 bg-gradient-to-r from-transparent via-primary/40 to-transparent sm:w-24;
  }

  .grain-overlay {
    background-image: radial-gradient(rgba(255, 255, 255, 0.35) 0.8px, transparent 0.8px);
    background-size: 14px 14px;
  }

  .chakra-ring {
    background: radial-gradient(circle, rgba(255,255,255,0.75) 0%, rgba(255,255,255,0.2) 45%, transparent 70%);
  }

  @media (min-width: 640px) {
    .container {
      padding-left: 1.5rem;
      padding-right: 1.5rem;
    }
  }

  @media (min-width: 1024px) {
    .container {
      padding-left: 2rem;
      padding-right: 2rem;
      max-width: 1280px;
    }
  }
}
EOF

cat <<'EOF' > client/src/App.tsx
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/services" component={Services} />
      <Route path="/testimonials" component={Testimonials} />
      <Route path="/contact" component={Contact} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster richColors />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
EOF

cat <<'EOF' > client/src/components/site/site-data.ts
export type NavLinkItem = {
  href: string;
  label: string;
};

export type ChakraItem = {
  name: string;
  meaning: string;
  color: string;
  tone: string;
};

export type TestimonialItem = {
  quote: string;
  author: string;
};

export const navLinks: NavLinkItem[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/contact", label: "Contact" },
];

export const chakras: ChakraItem[] = [
  {
    name: "Crown Chakra",
    meaning: "Supports clarity, spiritual connection, and a wider sense of calm.",
    color: "#7B2CBF",
    tone: "Spiritual Awareness",
  },
  {
    name: "Third Eye Chakra",
    meaning: "Encourages intuition, reflection, and mental steadiness.",
    color: "#3A0CA3",
    tone: "Inner Insight",
  },
  {
    name: "Throat Chakra",
    meaning: "Helps with honest expression and a more relaxed communication flow.",
    color: "#0077B6",
    tone: "Clear Expression",
  },
  {
    name: "Heart Chakra",
    meaning: "Brings emotional softness, compassion, and harmony within relationships.",
    color: "#2D6A4F",
    tone: "Compassion",
  },
  {
    name: "Solar Plexus Chakra",
    meaning: "Strengthens confidence, steadiness, and a grounded sense of self.",
    color: "#F4A261",
    tone: "Inner Strength",
  },
  {
    name: "Sacral Chakra",
    meaning: "Supports emotional flow, creativity, and a healthier connection to joy.",
    color: "#E76F51",
    tone: "Vital Flow",
  },
  {
    name: "Root Chakra",
    meaning: "Encourages stability, security, and a calm connection with the body.",
    color: "#D62828",
    tone: "Grounding",
  },
];

export const testimonials: TestimonialItem[] = [
  {
    quote: "For my health issues she has treated & guided me very effectively.",
    author: "Rashmi Pasarkar",
  },
  {
    quote: "Vidya's energy is soothing, strong and healing in nature.",
    author: "Saritha Nayak",
  },
  {
    quote: "I wish her success in healing more people.",
    author: "Veena Raina",
  },
];

export const clinicDetails = {
  name: "Dr Vidya's Holistic Healing Center",
  phone: "+91 84850 56757",
  phoneHref: "tel:+918485056757",
  whatsappHref: "https://wa.me/918485056757",
  address: "H-4, Soba Savera Apartment, Bibwewadi, Pune, Maharashtra 411037, India",
  hours: "Opens 11 AM, Reopens 6 PM",
  mapEmbed:
    "https://www.google.com/maps?q=H-4%2C%20Soba%20Savera%20Apartment%2C%20Bibwewadi%2C%20Pune%2C%20Maharashtra%20411037%2C%20India&z=15&output=embed",
};

export const whyChooseUs = [
  "Compassionate guidance focused on emotional ease and everyday balance.",
  "Gentle, non-technical explanations that help you feel informed and comfortable.",
  "A calm clinic setting designed for clarity, trust, and personal attention.",
  "Supportive healing sessions that respect your pace and wellbeing goals.",
];
EOF

cat <<'EOF' > client/src/components/site/Seo.tsx
import { useEffect } from "react";

interface SeoProps {
  title: string;
  description: string;
  path?: string;
}

function upsertMeta(selector: string, attributes: Record<string, string>) {
  let element = document.head.querySelector(selector) as HTMLMetaElement | null;

  if (!element) {
    element = document.createElement("meta");
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element?.setAttribute(key, value);
  });
}

export function Seo({ title, description, path = "/" }: SeoProps) {
  useEffect(() => {
    const pageTitle = `${title} | Dr Vidya's Holistic Healing Center`;
    document.title = pageTitle;

    upsertMeta('meta[name="description"]', { name: "description", content: description });
    upsertMeta('meta[property="og:title"]', { property: "og:title", content: pageTitle });
    upsertMeta('meta[property="og:description"]', { property: "og:description", content: description });

    let canonical = document.head.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }

    canonical.href = `${window.location.origin}${path}`;
  }, [description, path, title]);

  return null;
}
EOF

cat <<'EOF' > client/src/components/site/SacredDivider.tsx
export function SacredDivider() {
  return (
    <div className="sacred-divider" aria-hidden="true">
      <span />
      <svg width="42" height="42" viewBox="0 0 42 42" fill="none" className="opacity-80">
        <circle cx="21" cy="21" r="8.5" stroke="currentColor" strokeWidth="1.2" />
        <circle cx="21" cy="21" r="15" stroke="currentColor" strokeOpacity="0.35" />
        <path d="M21 4 L26 16 L38 21 L26 26 L21 38 L16 26 L4 21 L16 16 Z" stroke="currentColor" strokeOpacity="0.5" />
      </svg>
      <span />
    </div>
  );
}
EOF

cat <<'EOF' > client/src/components/site/SectionHeading.tsx
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
}

export function SectionHeading({ eyebrow, title, description, align = "left" }: SectionHeadingProps) {
  return (
    <div className={cn("mb-12 space-y-4", align === "center" && "mx-auto text-center")}>
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="section-title">{title}</h2>
      <p className="section-copy">{description}</p>
    </div>
  );
}
EOF

cat <<'EOF' > client/src/components/site/ChakraCard.tsx
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
EOF

cat <<'EOF' > client/src/components/site/TestimonialCard.tsx
import { Quote } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  author: string;
}

export function TestimonialCard({ quote, author }: TestimonialCardProps) {
  return (
    <figure className="surface-card relative h-full p-7">
      <Quote className="mb-6 h-8 w-8 text-primary/40" />
      <blockquote className="text-lg leading-8 text-foreground">“{quote}”</blockquote>
      <figcaption className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
        {author}
      </figcaption>
    </figure>
  );
}
EOF

cat <<'EOF' > client/src/components/site/PageHero.tsx
interface PageHeroProps {
  eyebrow: string;
  title: string;
  description: string;
}

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="section-shell overflow-hidden pt-28 sm:pt-32">
      <div className="container relative">
        <div className="soft-orb left-0 top-12 h-28 w-28 bg-[rgba(123,44,191,0.12)]" />
        <div className="soft-orb right-8 top-4 h-32 w-32 bg-[rgba(45,106,79,0.12)] [animation-delay:1.5s]" />
        <div className="surface-card fade-in-section relative overflow-hidden px-6 py-12 sm:px-10 sm:py-16 lg:px-14">
          <div className="grain-overlay absolute inset-0 opacity-20" />
          <div className="relative max-w-3xl space-y-5">
            <span className="eyebrow">{eyebrow}</span>
            <h1 className="text-5xl font-semibold sm:text-6xl">{title}</h1>
            <p className="max-w-2xl text-lg text-muted-foreground sm:text-xl">{description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
EOF

cat <<'EOF' > client/src/components/site/Navbar.tsx
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
            <Button asChild className="rounded-full bg-primary px-6 text-primary-foreground hover:bg-primary/90">
              <Link href="/contact">Book a Consultation</Link>
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
            <Button asChild className="mt-2 w-full rounded-full bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="/contact" onClick={() => setMenuOpen(false)}>
                Book a Consultation
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
EOF

cat <<'EOF' > client/src/components/site/Footer.tsx
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
EOF

cat <<'EOF' > client/src/components/site/ContactForm.tsx
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Please enter your name."),
  email: z.string().email("Please enter a valid email address."),
  phone: z
    .string()
    .min(10, "Please enter a phone number.")
    .regex(/^[+]?[-()\d\s]{10,}$/, "Please enter a valid phone number."),
  message: z.string().min(10, "Please share a little more about your needs."),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const defaultValues: ContactFormValues = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

export function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues,
  });

  const onSubmit = async (values: ContactFormValues) => {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });

    const data = (await response.json()) as { success?: boolean; message?: string; error?: string };

    if (!response.ok || !data.success) {
      throw new Error(data.error || "Unable to submit your message right now.");
    }

    toast.success(data.message || "Your consultation request has been received.");
    reset(defaultValues);
  };

  return (
    <form
      id="contact-form"
      className="surface-card space-y-5 p-6 sm:p-8"
      onSubmit={handleSubmit(async values => {
        try {
          await onSubmit(values);
        } catch (error) {
          const message = error instanceof Error ? error.message : "Something went wrong. Please try again.";
          toast.error(message);
        }
      })}
      noValidate
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-semibold text-foreground">
            Name
          </label>
          <Input id="name" placeholder="Your full name" {...register("name")} />
          {errors.name && <p className="text-sm text-destructive">{errors.name.message}</p>}
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-semibold text-foreground">
            Email
          </label>
          <Input id="email" type="email" placeholder="you@example.com" {...register("email")} />
          {errors.email && <p className="text-sm text-destructive">{errors.email.message}</p>}
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="phone" className="text-sm font-semibold text-foreground">
          Phone
        </label>
        <Input id="phone" placeholder="+91 98765 43210" {...register("phone")} />
        {errors.phone && <p className="text-sm text-destructive">{errors.phone.message}</p>}
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-semibold text-foreground">
          Message
        </label>
        <Textarea
          id="message"
          rows={5}
          placeholder="Tell us how we can support your wellbeing."
          className="resize-none"
          {...register("message")}
        />
        {errors.message && <p className="text-sm text-destructive">{errors.message.message}</p>}
      </div>

      <Button type="submit" className="w-full rounded-full bg-primary text-primary-foreground hover:bg-primary/90" disabled={isSubmitting}>
        {isSubmitting ? (
          <span className="inline-flex items-center gap-2">
            <Loader2 className="h-4 w-4 animate-spin" />
            Sending request
          </span>
        ) : (
          "Send Consultation Request"
        )}
      </Button>
    </form>
  );
}
EOF

cat <<'EOF' > client/src/components/site/SiteLayout.tsx
import { MessageCircle } from "lucide-react";
import type { ReactNode } from "react";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";
import { clinicDetails } from "./site-data";

interface SiteLayoutProps {
  children: ReactNode;
}

export function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>{children}</main>
      <Footer />
      <a
        href={clinicDetails.whatsappHref}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-5 right-5 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_18px_36px_rgba(37,211,102,0.35)] transition-transform duration-300 hover:-translate-y-1"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </div>
  );
}
EOF

cat <<'EOF' > client/src/pages/Home.tsx
import { Button } from "@/components/ui/button";
import { HeartHandshake, Leaf, Sparkles, ShieldCheck } from "lucide-react";
import { Link } from "wouter";
import { ChakraCard } from "@/components/site/ChakraCard";
import { SacredDivider } from "@/components/site/SacredDivider";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Seo } from "@/components/site/Seo";
import { SiteLayout } from "@/components/site/SiteLayout";
import { TestimonialCard } from "@/components/site/TestimonialCard";
import { chakras, testimonials, whyChooseUs } from "@/components/site/site-data";

const heroImage = "https://d2xsxph8kpxj0f.cloudfront.net/310519663585662648/ErWs2ocR65P7dstuQdjKqk/dr-vidya-hero-48qiHYvgTfdpqamVWLszJr.webp";

const introPoints = [
  {
    icon: HeartHandshake,
    title: "Supportive care",
    copy: "Every session is approached with empathy, patience, and personal attention.",
  },
  {
    icon: Leaf,
    title: "Calm environment",
    copy: "Our space is designed to feel grounding, quiet, and easy to settle into.",
  },
  {
    icon: ShieldCheck,
    title: "Professional guidance",
    copy: "You receive clear, gentle explanations without overwhelming terminology.",
  },
];

export default function Home() {
  return (
    <SiteLayout>
      <Seo
        title="Home"
        path="/"
        description="Discover Dr Vidya's Holistic Healing Center in Pune for Pranic Healing, chakra balancing, and gentle support for stress and anxiety."
      />

      <section className="section-shell overflow-hidden pt-28 sm:pt-32">
        <div className="container grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div className="fade-in-section relative space-y-8">
            <span className="eyebrow">Pune Wellness Clinic</span>
            <div className="space-y-5">
              <h1 className="max-w-3xl text-5xl font-semibold leading-[0.95] sm:text-6xl lg:text-7xl">
                Dr Vidya&apos;s Holistic Healing Center
              </h1>
              <p className="max-w-2xl text-lg text-muted-foreground sm:text-xl">
                Guiding you toward balance, healing, and inner peace through Pranic Healing.
              </p>
            </div>
            <p className="max-w-2xl text-base text-muted-foreground sm:text-lg">
              Holistic healing can offer a quiet, supportive path for people navigating emotional strain,
              anxious thoughts, fatigue, and the need to feel more centered in daily life.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg" className="rounded-full bg-primary px-7 text-primary-foreground hover:bg-primary/90">
                <Link href="/contact">Book a Consultation</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full border-primary/20 bg-white/70 px-7 text-foreground hover:bg-white">
                <Link href="/services">Explore Services</Link>
              </Button>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {introPoints.map(point => (
                <article key={point.title} className="surface-card p-5">
                  <point.icon className="h-6 w-6 text-primary" />
                  <h2 className="mt-4 text-2xl font-semibold">{point.title}</h2>
                  <p className="mt-2 text-sm text-muted-foreground">{point.copy}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="fade-in-section relative [animation-delay:0.12s]">
            <div className="soft-orb -left-8 top-16 h-28 w-28 bg-[rgba(58,12,163,0.12)]" />
            <div className="soft-orb -right-4 bottom-12 h-36 w-36 bg-[rgba(244,162,97,0.14)] [animation-delay:1.1s]" />
            <div className="surface-card relative overflow-hidden rounded-[2rem] p-3">
              <div className="grain-overlay absolute inset-0 opacity-20" />
              <img
                src={heroImage}
                alt="Calm consultation setting at Dr Vidya's Holistic Healing Center"
                className="relative h-[520px] w-full rounded-[1.6rem] object-cover"
              />
              <div className="absolute inset-x-8 bottom-8 rounded-[1.5rem] border border-white/70 bg-white/78 p-5 shadow-lg backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <div className="chakra-ring flex h-12 w-12 items-center justify-center rounded-full border border-primary/15">
                    <Sparkles className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.24em] text-muted-foreground">Personal Healing Support</p>
                    <p className="text-lg font-semibold text-foreground">A calm and professional space for balance</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SacredDivider />

      <section className="section-shell pt-0">
        <div className="container grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
          <div className="fade-in-section">
            <SectionHeading
              eyebrow="Gentle Introduction"
              title="What is Pranic Healing?"
              description="Pranic Healing is a gentle, energy-based healing approach that aims to support the body's natural ability to regain balance and calm. It is often experienced as a quiet complement to emotional wellness practices, especially when stress and anxiety feel overwhelming."
            />
          </div>
          <div className="fade-in-section grid gap-5 sm:grid-cols-2 [animation-delay:0.1s]">
            <article className="surface-card p-6">
              <h3 className="text-2xl font-semibold">Non-invasive support</h3>
              <p className="mt-3 text-muted-foreground">
                Sessions are designed to feel gentle and supportive, without physical strain or complicated processes.
              </p>
            </article>
            <article className="surface-card p-6">
              <h3 className="text-2xl font-semibold">Clarity for the mind</h3>
              <p className="mt-3 text-muted-foreground">
                Many people seek Pranic Healing when they want emotional steadiness, calm thinking, and inner quiet.
              </p>
            </article>
            <article className="surface-card p-6 sm:col-span-2">
              <h3 className="text-2xl font-semibold">A holistic approach to anxiety support</h3>
              <p className="mt-3 text-muted-foreground">
                The focus is not only on symptoms, but also on helping you feel grounded, emotionally supported,
                and more connected to your natural sense of balance.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section-shell bg-white/50">
        <div className="container">
          <SectionHeading
            eyebrow="Energy Centers"
            title="Chakra Overview"
            description="These seven chakra cards offer a simple, non-technical introduction to the energetic centers often considered in holistic healing sessions."
            align="center"
          />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {chakras.map(chakra => (
              <div key={chakra.name} className="fade-in-section">
                <ChakraCard {...chakra} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="container grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12">
          <div className="fade-in-section">
            <SectionHeading
              eyebrow="Why Patients Choose Us"
              title="A space that feels calm, credible, and supportive"
              description="The clinic is designed to feel welcoming and centered, with care that respects both emotional wellbeing and the need for practical clarity."
            />
            <Button asChild className="rounded-full bg-primary px-7 text-primary-foreground hover:bg-primary/90">
              <Link href="/about">Meet Dr Vidya</Link>
            </Button>
          </div>
          <div className="grid gap-4">
            {whyChooseUs.map(reason => (
              <article key={reason} className="surface-card fade-in-section flex items-start gap-4 p-5">
                <div className="mt-1 h-3 w-3 rounded-full bg-primary" />
                <p className="text-base text-muted-foreground">{reason}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell bg-white/55">
        <div className="container">
          <SectionHeading
            eyebrow="Client Words"
            title="Kind feedback from people we have supported"
            description="A few reflections from clients who experienced Dr Vidya's healing guidance and presence."
            align="center"
          />
          <div className="grid gap-5 lg:grid-cols-3">
            {testimonials.map(item => (
              <div key={item.author} className="fade-in-section">
                <TestimonialCard {...item} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
EOF

cat <<'EOF' > client/src/pages/About.tsx
import { BadgeCheck, Flower2, ScrollText } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { SacredDivider } from "@/components/site/SacredDivider";
import { Seo } from "@/components/site/Seo";
import { SiteLayout } from "@/components/site/SiteLayout";

const aboutImage = "https://d2xsxph8kpxj0f.cloudfront.net/310519663585662648/ErWs2ocR65P7dstuQdjKqk/dr-vidya-about-iaGYw3775JGArbT7yMbqBc.webp";

const certifications = [
  "Certified Pranic Healing Practitioner",
  "Advanced Energy Healing Training Placeholder",
  "Holistic Wellness Education Placeholder",
];

export default function About() {
  return (
    <SiteLayout>
      <Seo
        title="About"
        path="/about"
        description="Learn about Dr Vidya, her healing philosophy, and the calm, professional approach at Dr Vidya's Holistic Healing Center in Pune."
      />

      <PageHero
        eyebrow="About Dr Vidya"
        title="Healing with presence, clarity, and compassion"
        description="Dr Vidya's approach is rooted in calm attention, holistic awareness, and the belief that emotional ease can grow through thoughtful healing support."
      />

      <section className="section-shell pt-0">
        <div className="container grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-14">
          <div className="surface-card fade-in-section overflow-hidden p-3">
            <img
              src={aboutImage}
              alt="Portrait of Dr Vidya in a calm healing environment"
              className="h-full min-h-[420px] w-full rounded-[1.5rem] object-cover"
            />
          </div>
          <div className="fade-in-section space-y-6 [animation-delay:0.1s]">
            <span className="eyebrow">Bio Placeholder</span>
            <h2 className="section-title">A grounded and reassuring presence for people seeking balance</h2>
            <p className="text-lg text-muted-foreground">
              Dr Vidya offers a healing environment that feels both serene and professional. Her practice is centered on
              listening carefully, understanding emotional patterns with sensitivity, and guiding each person toward a more stable inner rhythm.
            </p>
            <p className="text-base text-muted-foreground">
              This biography section is intentionally kept flexible so her full professional story, healing journey, and client-centered values can be added later without changing the design structure.
            </p>
            <div className="grid gap-4 sm:grid-cols-3">
              <article className="surface-card p-5">
                <Flower2 className="h-6 w-6 text-primary" />
                <h3 className="mt-4 text-2xl font-semibold">Calm Presence</h3>
                <p className="mt-2 text-sm text-muted-foreground">A soothing environment that supports ease and openness.</p>
              </article>
              <article className="surface-card p-5">
                <BadgeCheck className="h-6 w-6 text-[var(--chakra-green)]" />
                <h3 className="mt-4 text-2xl font-semibold">Professional Care</h3>
                <p className="mt-2 text-sm text-muted-foreground">Support delivered with clarity, respect, and integrity.</p>
              </article>
              <article className="surface-card p-5">
                <ScrollText className="h-6 w-6 text-[var(--chakra-yellow)]" />
                <h3 className="mt-4 text-2xl font-semibold">Holistic Guidance</h3>
                <p className="mt-2 text-sm text-muted-foreground">A steady approach that sees emotional wellbeing as interconnected.</p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <SacredDivider />

      <section className="section-shell pt-0">
        <div className="container grid gap-8 lg:grid-cols-2">
          <article className="surface-card fade-in-section p-8 sm:p-10">
            <span className="eyebrow">Certifications</span>
            <h2 className="mt-5 text-4xl font-semibold">Training and credentials</h2>
            <div className="mt-6 space-y-4">
              {certifications.map(item => (
                <div key={item} className="flex items-start gap-4 rounded-2xl bg-white/75 px-4 py-4">
                  <div className="mt-1 h-3 w-3 rounded-full bg-primary" />
                  <p className="text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>
          </article>

          <article className="surface-card fade-in-section p-8 sm:p-10 [animation-delay:0.08s]">
            <span className="eyebrow">Healing Philosophy</span>
            <h2 className="mt-5 text-4xl font-semibold">A philosophy rooted in balance rather than pressure</h2>
            <p className="mt-6 text-muted-foreground">
              Healing is approached as a process of restoring steadiness, not forcing change. The clinic's philosophy is to create enough calm,
              trust, and supportive attention for the body and mind to reconnect with a more balanced state.
            </p>
            <p className="mt-4 text-muted-foreground">
              This approach values compassion, patience, and clarity. It avoids dramatic language and instead focuses on what is practical,
              reassuring, and helpful for people who simply want to feel more settled within themselves.
            </p>
          </article>
        </div>
      </section>
    </SiteLayout>
  );
}
EOF

cat <<'EOF' > client/src/pages/Services.tsx
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/PageHero";
import { SacredDivider } from "@/components/site/SacredDivider";
import { Seo } from "@/components/site/Seo";
import { SiteLayout } from "@/components/site/SiteLayout";

const servicesImage = "https://d2xsxph8kpxj0f.cloudfront.net/310519663585662648/ErWs2ocR65P7dstuQdjKqk/dr-vidya-services-HrEm9sV3fpnR2pj76YzsBC.webp";

const services = [
  {
    title: "Pranic Healing Sessions",
    copy: "A calm, guided healing session intended to help you feel more settled, balanced, and emotionally lighter. The process is explained in simple language so you always know what to expect.",
    accent: "#7B2CBF",
  },
  {
    title: "Chakra Balancing",
    copy: "Focused support for restoring harmony across the body's energy centers. This service is often chosen by people who feel mentally scattered, emotionally heavy, or out of rhythm in everyday life.",
    accent: "#2D6A4F",
  },
  {
    title: "Stress & Anxiety Healing",
    copy: "A gentle healing experience for people navigating tension, restlessness, worry, or emotional overload. Sessions aim to create a deeper sense of calm, steadiness, and inner quiet.",
    accent: "#E76F51",
  },
];

export default function Services() {
  return (
    <SiteLayout>
      <Seo
        title="Services"
        path="/services"
        description="Explore Pranic Healing sessions, chakra balancing, and stress and anxiety healing at Dr Vidya's Holistic Healing Center in Pune."
      />

      <PageHero
        eyebrow="Services"
        title="Simple, supportive healing services"
        description="Each service is designed to feel clear, calming, and accessible, especially for people who want gentle support without technical language or complicated processes."
      />

      <section className="section-shell pt-0">
        <div className="container grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="fade-in-section grid gap-5">
            {services.map(service => (
              <article key={service.title} className="surface-card overflow-hidden p-7 sm:p-8">
                <div className="mb-5 h-1.5 w-20 rounded-full" style={{ backgroundColor: service.accent }} />
                <h2 className="text-3xl font-semibold">{service.title}</h2>
                <p className="mt-4 text-muted-foreground">{service.copy}</p>
              </article>
            ))}
          </div>
          <div className="fade-in-section [animation-delay:0.08s]">
            <div className="surface-card overflow-hidden p-4">
              <img
                src={servicesImage}
                alt="Abstract geometric wellness artwork representing chakra-inspired healing services"
                className="h-[520px] w-full rounded-[1.6rem] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <SacredDivider />

      <section className="section-shell pt-0">
        <div className="container">
          <article className="surface-card fade-in-section grid gap-8 p-8 sm:p-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <span className="eyebrow">Next Step</span>
              <h2 className="mt-5 text-4xl font-semibold">Not sure which service is right for you?</h2>
              <p className="mt-4 max-w-2xl text-muted-foreground">
                A consultation can help you understand which healing approach may feel most supportive for your current concerns, whether that is emotional stress, anxiety, or a general need for balance.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row lg:justify-end">
              <Button asChild className="rounded-full bg-primary px-7 text-primary-foreground hover:bg-primary/90">
                <Link href="/contact">Book a Consultation</Link>
              </Button>
              <Button asChild variant="outline" className="rounded-full border-primary/20 bg-white/70 px-7 text-foreground hover:bg-white">
                <Link href="/about">Learn About Dr Vidya</Link>
              </Button>
            </div>
          </article>
        </div>
      </section>
    </SiteLayout>
  );
}
EOF

cat <<'EOF' > client/src/pages/Testimonials.tsx
import { PageHero } from "@/components/site/PageHero";
import { Seo } from "@/components/site/Seo";
import { SiteLayout } from "@/components/site/SiteLayout";
import { TestimonialCard } from "@/components/site/TestimonialCard";
import { testimonials } from "@/components/site/site-data";

export default function Testimonials() {
  return (
    <SiteLayout>
      <Seo
        title="Testimonials"
        path="/testimonials"
        description="Read testimonials shared by clients of Dr Vidya's Holistic Healing Center in Pune."
      />

      <PageHero
        eyebrow="Testimonials"
        title="Words of trust and appreciation"
        description="A few heartfelt reflections from clients who experienced Dr Vidya's healing guidance."
      />

      <section className="section-shell pt-0">
        <div className="container">
          <div className="surface-card fade-in-section mb-10 p-8 text-center sm:p-12">
            <p className="mx-auto max-w-3xl text-2xl font-medium leading-10 text-foreground sm:text-3xl">
              “Vidya's energy is soothing, strong and healing in nature.”
            </p>
            <p className="mt-5 text-sm font-semibold uppercase tracking-[0.22em] text-muted-foreground">Saritha Nayak</p>
          </div>
          <div className="grid gap-5 lg:grid-cols-3">
            {testimonials.map(item => (
              <div key={item.author} className="fade-in-section">
                <TestimonialCard {...item} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
EOF

cat <<'EOF' > client/src/pages/Contact.tsx
import { Mail, MapPin, PhoneCall, TimerReset } from "lucide-react";
import { ContactForm } from "@/components/site/ContactForm";
import { PageHero } from "@/components/site/PageHero";
import { Seo } from "@/components/site/Seo";
import { SiteLayout } from "@/components/site/SiteLayout";
import { clinicDetails } from "@/components/site/site-data";

const contactItems = [
  {
    icon: MapPin,
    label: "Address",
    value: clinicDetails.address,
  },
  {
    icon: PhoneCall,
    label: "Phone",
    value: clinicDetails.phone,
    href: clinicDetails.phoneHref,
  },
  {
    icon: TimerReset,
    label: "Hours",
    value: clinicDetails.hours,
  },
  {
    icon: Mail,
    label: "Message",
    value: "Use the form below and we will get back to you soon.",
  },
];

export default function Contact() {
  return (
    <SiteLayout>
      <Seo
        title="Contact"
        path="/contact"
        description="Contact Dr Vidya's Holistic Healing Center in Pune to book a consultation and view clinic location details."
      />

      <PageHero
        eyebrow="Contact"
        title="Book a consultation or ask a question"
        description="Reach out for a consultation, share what support you are looking for, or visit the clinic in Bibwewadi, Pune."
      />

      <section className="section-shell pt-0">
        <div className="container grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
          <div className="fade-in-section space-y-5">
            {contactItems.map(item => (
              <article key={item.label} className="surface-card flex items-start gap-4 p-5 sm:p-6">
                <div className="chakra-ring flex h-12 w-12 items-center justify-center rounded-full border border-primary/15">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">{item.label}</p>
                  {item.href ? (
                    <a href={item.href} className="mt-1 block text-lg text-foreground hover:text-primary">
                      {item.value}
                    </a>
                  ) : (
                    <p className="mt-1 text-base text-muted-foreground">{item.value}</p>
                  )}
                </div>
              </article>
            ))}
          </div>
          <div className="fade-in-section [animation-delay:0.08s]">
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="section-shell pt-0">
        <div className="container">
          <div className="surface-card overflow-hidden p-3">
            <iframe
              title="Map for Dr Vidya's Holistic Healing Center"
              src={clinicDetails.mapEmbed}
              className="h-[420px] w-full rounded-[1.6rem] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
EOF

cat <<'EOF' > server/contact.ts
import { z } from "zod";

export const contactSubmissionSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().min(10, "Phone is required"),
  message: z.string().min(10, "Message is required"),
});

export type ContactSubmission = z.infer<typeof contactSubmissionSchema>;

export async function submitContactMessage(rawInput: unknown) {
  const input = contactSubmissionSchema.parse(rawInput);

  console.log("[Contact Submission]", {
    name: input.name,
    email: input.email,
    phone: input.phone,
    message: input.message,
    receivedAt: new Date().toISOString(),
  });

  return {
    success: true,
    message: "Consultation request received. We will contact you soon.",
  } as const;
}
EOF

cat <<'EOF' > server/contact.test.ts
import { describe, expect, it, vi } from "vitest";
import { submitContactMessage } from "./contact";

describe("submitContactMessage", () => {
  it("returns a success response for a valid submission", async () => {
    const logSpy = vi.spyOn(console, "log").mockImplementation(() => undefined);

    const result = await submitContactMessage({
      name: "Asha Kulkarni",
      email: "asha@example.com",
      phone: "+91 98765 43210",
      message: "I would like to book a consultation for stress support.",
    });

    expect(result).toEqual({
      success: true,
      message: "Consultation request received. We will contact you soon.",
    });
    expect(logSpy).toHaveBeenCalledOnce();

    logSpy.mockRestore();
  });

  it("rejects invalid submission data", async () => {
    await expect(
      submitContactMessage({
        name: "A",
        email: "not-an-email",
        phone: "123",
        message: "short",
      }),
    ).rejects.toThrow();
  });
});
EOF

cat <<'EOF' > server/_core/index.ts
import express from "express";
import { createServer } from "http";
import net from "net";
import { ZodError } from "zod";
import { createExpressMiddleware } from "@trpc/server/adapters/express";
import { registerOAuthRoutes } from "./oauth";
import { registerStorageProxy } from "./storageProxy";
import { appRouter } from "../routers";
import { createContext } from "./context";
import { serveStatic, setupVite } from "./vite";
import { submitContactMessage } from "../contact";

function isPortAvailable(port: number): Promise<boolean> {
  return new Promise(resolve => {
    const server = net.createServer();
    server.listen(port, () => {
      server.close(() => resolve(true));
    });
    server.on("error", () => resolve(false));
  });
}

async function findAvailablePort(startPort: number = 3000): Promise<number> {
  for (let port = startPort; port < startPort + 20; port++) {
    if (await isPortAvailable(port)) {
      return port;
    }
  }
  throw new Error(`No available port found starting from ${startPort}`);
}

async function startServer() {
  const app = express();
  const server = createServer(app);

  app.use(express.json({ limit: "50mb" }));
  app.use(express.urlencoded({ limit: "50mb", extended: true }));

  registerStorageProxy(app);
  registerOAuthRoutes(app);

  app.post("/api/contact", async (req, res) => {
    try {
      const result = await submitContactMessage(req.body);
      res.status(200).json(result);
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(400).json({
          success: false,
          error: error.issues[0]?.message || "Invalid submission data",
        });
        return;
      }

      console.error("[Contact API] submission failed", error);
      res.status(500).json({
        success: false,
        error: "Unable to process the consultation request right now.",
      });
    }
  });

  app.use(
    "/api/trpc",
    createExpressMiddleware({
      router: appRouter,
      createContext,
    }),
  );

  if (process.env.NODE_ENV === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }

  const preferredPort = parseInt(process.env.PORT || "3000");
  const port = await findAvailablePort(preferredPort);

  if (port !== preferredPort) {
    console.log(`Port ${preferredPort} is busy, using port ${port} instead`);
  }

  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}

startServer().catch(console.error);
EOF

cat <<'EOF' > server/_core/storageProxy.ts
import type { Express } from "express";
import { ENV } from "./env";

export function registerStorageProxy(app: Express) {
  app.get("/manus-storage/*", async (req, res) => {
    const key = (req.params as Record<string, string | undefined>)["0"];

    if (!key) {
      res.status(400).send("Missing storage key");
      return;
    }

    if (!ENV.forgeApiUrl || !ENV.forgeApiKey) {
      res.status(500).send("Storage proxy not configured");
      return;
    }

    try {
      const forgeUrl = new URL("v1/storage/presign/get", ENV.forgeApiUrl.replace(/\/+$/, "") + "/");
      forgeUrl.searchParams.set("path", key);

      const forgeResp = await fetch(forgeUrl, {
        headers: { Authorization: `Bearer ${ENV.forgeApiKey}` },
      });

      if (!forgeResp.ok) {
        const body = await forgeResp.text().catch(() => "");
        console.error(`[StorageProxy] forge error: ${forgeResp.status} ${body}`);
        res.status(502).send("Storage backend error");
        return;
      }

      const { url } = (await forgeResp.json()) as { url: string };
      if (!url) {
        res.status(502).send("Empty signed URL from backend");
        return;
      }

      res.set("Cache-Control", "no-store");
      res.redirect(307, url);
    } catch (err) {
      console.error("[StorageProxy] failed:", err);
      res.status(502).send("Storage proxy error");
    }
  });
}
EOF

chmod +x build_site.sh
