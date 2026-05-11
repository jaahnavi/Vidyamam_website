import { Link } from "wouter";
import { SacredDivider } from "@/components/site/SacredDivider";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Seo } from "@/components/site/Seo";
import { SiteLayout } from "@/components/site/SiteLayout";
import { TestimonialCard } from "@/components/site/TestimonialCard";
import { TrustSignal } from "@/components/site/TrustSignal";
import { testimonials, whyChooseUs, trustSignals } from "@/components/site/site-data";
import HowItWorks from "@/components/site/HowItWorks";
import ScrollToTop  from '@/components/site/scrolltotop';

const vidyaHero   = "/vidya-hero.jpeg";

const services = [
  {
    tag: "Core Specialty",
    title: "Chakra Alignment & Clearing",
    desc: "Precision balancing of the 11-chakra system — with special focus on the Basic and Crown chakras.",
    accent: true,
  },
  {
    tag: "Energy Work",
    title: "Pranic Energy Servicing",
    desc: "Deep cleansing of congested energy from the bioplasmic body, boosting immunity and restoring vitality.",
  },
  {
    tag: "Distant Healing",
    title: "Advanced Remote Healing",
    desc: "Powerful healing sessions conducted across any distance. Location is no barrier to your healing.",
  },
];

// ── Cinzel label style ──────────────────────────────────────
const cinzel = { fontFamily: "'Cinzel', serif" } as const;
const cormorant = { fontFamily: "'Cormorant Garamond', serif" } as const;
const jost = { fontFamily: "'Jost', sans-serif" } as const;
const mandala1 = '/1.svg' as const;
const mandala2 = '/2.svg' as const;
const mandala3 = '/3.svg' as const;

export default function Home() {
  return (
    <SiteLayout>
      <ScrollToTop />
      <Seo
        title="Home"
        path="/"
        description="Vidya's Holistic Healing — Certified Pranic Healer in Frisco, Texas. Chakra alignment, energy servicing and distant healing for a global community."
      />

      {/* ═══════════════════════════════════════════════════════
          HERO — full-bleed dark navy
      ════════════════════════════════════════════════════════ */}
      <section
        className="relative overflow-hidden"
        style={{ background: "linear-gradient(155deg, #041F2B 0%, #083A4F 55%, #0D4D68 100%)", minHeight: "100vh" }}
      >
        {/* Ambient rings */}
        {[420, 640, 860].map((s, i) => (
          <div
            key={i}
            className="pointer-events-none absolute rounded-full"
            style={{
              width: s, height: s,
              border: "2px solid rgba(165,141,102,0.07)",
              top: "50%", left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          />
        ))}
        {/* Radial gold glow */}
        <div
          className="pointer-events-none absolute"
          style={{
            top: "38%", left: "50%", transform: "translate(-50%, -50%)",
            width: 700, height: 700,
            background: "radial-gradient(ellipse, rgba(165,141,102,0.07) 0%, transparent 70%)",
          }}
        />
        <img
          src={mandala1}
          alt=""
          aria-hidden="true"
          className="absolute pointer-events-none overflow-visible" 
          style={{
            top: '50%',
            left: '50%',
            transform: 'translate(-0%, -90%)',
            width: '900px',
            height: '900px',
            opacity: 0.06,
            filter:
              'invert(78%) sepia(28%) saturate(389%) hue-rotate(2deg) brightness(92%) contrast(85%)',
          }}
        />
        

        <div className="container relative z-10 grid items-center gap-16 pt-28 pb-20 lg:grid-cols-2 lg:pt-32 lg:pb-24">

          {/* ── Left: copy ─────────────────────────────────── */}
          <div className="fade-in-section flex flex-col gap-7">
            {/* Eyebrow */}
            <span style={cinzel} className="gold-badge w-fit">
              Certified Pranic Healer · Frisco, Texas
            </span>

            {/* Logo mark */}
            <img
              src="/logo1.png"
              alt="VHH"
              className="w-20 h-20 object-contain"
              style={{ filter: "drop-shadow(0 0 24px rgba(165,141,102,0.35))" }}
            />

            {/* Headline */}
            <div>
              <h1
                style={{ ...cormorant, fontSize: "clamp(3rem, 6vw, 5rem)", fontWeight: 300, lineHeight: 1.08, letterSpacing: "-0.01em", fontStyle: "italic" }}
                className="text-white"
              >
                Heal the Need.<br />
                <em style={{ color: "#C4A96E" }}>Recalibrate Your Life.</em>
              </h1>
            </div>

            {/* Sub */}
            <p style={{ ...jost, fontWeight: 300, fontSize: "1.05rem", lineHeight: 1.85, letterSpacing: "0.03em" }}
              className="max-w-lg text-[rgba(192,213,214,0.8)]">
              With 15 years of practice and 2,000+ success stories — helping you clear energetic blockages
              and welcome a life of vibrant vital force.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 pt-1">
              <button
                onClick={() => {
                  const el = document.getElementById("contact-form");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                  else window.location.href = "/contact";
                }}
                style={{ ...cinzel, fontSize: "10px", letterSpacing: "0.18em" }}
                className="rounded-[5px] bg-[#A58D66] px-8 py-4 uppercase text-[#041F2B] shadow-[0_0_24px_rgba(165,141,102,0.28)] transition-all duration-250 hover:bg-[#C4A96E] hover:shadow-[0_0_36px_rgba(165,141,102,0.45)]"
              >
                Book a Session
              </button>
              <Link href="/services">
                <button
                  style={{ ...cinzel, fontSize: "10px", letterSpacing: "0.18em" }}
                  className="rounded-[5px] border border-[rgba(165,141,102,0.45)] bg-transparent px-8 py-4 uppercase text-[#A58D66] transition-all duration-250 hover:border-[rgba(165,141,102,0.8)] hover:bg-[rgba(165,141,102,0.08)]"
                >
                  Explore Services
                </button>
              </Link>
            </div>

            {/* Ornament */}
            <div className="flex items-center gap-3 pt-2 opacity-50">
              <div className="h-px w-14 bg-[rgba(165,141,102,0.5)]" />
              <div className="h-1.5 w-1.5 rotate-45 bg-[#A58D66]" />
              <div className="h-px w-14 bg-[rgba(165,141,102,0.5)]" />
            </div>

            {/* Trust signals */}
            <div className="grid grid-cols-3 gap-4 pt-1">
              {trustSignals.map(signal => (
                <TrustSignal key={signal.label} {...signal} />
              ))}
            </div>
          </div>

          {/* ── Right: hero image ──────────────────────────── */}
          <div className="fade-in-section relative [animation-delay:0.15s]">
            {/* Soft glow orbs */}
            <div className="soft-orb -left-8 top-10 h-32 w-32 bg-[rgba(64,126,140,0.14)]" />
            <div className="soft-orb -right-4 bottom-10 h-40 w-40 bg-[rgba(165,141,102,0.12)] [animation-delay:1.2s]" />

            {/* Image card */}
            <div
              className="relative overflow-hidden rounded-[1.75rem] p-3"
              style={{ border: "1px solid rgba(165,141,102,0.2)", background: "rgba(4,31,43,0.6)" }}
            >
              <div className="grain-overlay absolute inset-0 opacity-20 rounded-[1.75rem]" />
              <Link href="/about">
              <img
                src={vidyaHero}
                alt="Vidya Joshi at her healing practice"
                className="relative h-[520px] w-full rounded-[1.4rem] object-cover"
              />
              {/* Floating badge */}
              <div
                className="absolute inset-x-6 bottom-6 rounded-2xl border border-[rgba(165,141,102,0.3)] bg-[rgba(4,31,43,0.82)] p-5 backdrop-blur-md"
              >
                <div className="flex items-center gap-4">
                  <div
                    className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full"
                    style={{ border: "1px solid rgba(165,141,102,0.35)", background: "rgba(165,141,102,0.1)" }}
                  >
                    <img src="/logo1.png" alt="" className="h-7 w-7 object-contain" />
                  </div>
                  <div>
                    <p style={{ ...cinzel, fontSize: "10px", letterSpacing: "0.2em" }} className="uppercase text-[#A58D66] mb-1">
                      Vidya Joshi
                    </p>
                    <p style={{ ...cormorant, fontSize: "16px", fontStyle: "italic", fontWeight: 300 }}
                      className="text-white leading-snug">
                      Certified Pranic Healer &amp; Wellness Practitioner
                    </p>
                  </div>
                </div>
              </div>
            </Link>

            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SACRED DIVIDER
      ════════════════════════════════════════════════════════ */}
      <div style={{ background: "#083A4F" }}>
        <SacredDivider variant="dark" />
      </div>
       <HowItWorks/>

      {/* ═══════════════════════════════════════════════════════
          SERVICES TEASER — dark navy
      ════════════════════════════════════════════════════════ */}
      <section className="section-shell" style={{ background: "#083A4F" }}>
        <div className="container">
          {/* Header */}
          <div className="mb-14 flex flex-col items-center text-center gap-4">
            <span style={cinzel} className="eyebrow text-[#A58D66]">What We Offer</span>
            <h2 style={{ ...cormorant, fontSize: "clamp(2.4rem, 4vw, 3.5rem)", fontWeight: 300, fontStyle: "italic" }}
              className="text-white">
              Healing Services
            </h2>
            <p style={{ ...jost, fontWeight: 300, fontSize: "1rem", lineHeight: 1.8, letterSpacing: "0.03em" }}
              className="max-w-lg text-[rgba(192,213,214,0.65)]">
              Each service is tailored to your unique energetic blueprint — because no two souls carry the same need.
            </p>
          </div>

          {/* 3-col service cards */}
          <div className="grid gap-5 lg:grid-cols-3 mb-12">
            {services.map((svc, i) => (
              <div key={i} className="dark-card flex flex-col gap-4 p-7">
                <span style={{ ...cinzel, fontSize: "10px", letterSpacing: "0.2em" }}
                  className="uppercase text-[#407E8C]">
                  {svc.tag}
                </span>
                {svc.accent && <div className="h-0.5 w-7 rounded bg-[#A58D66]" />}
                <h3 style={{ ...cormorant, fontSize: "1.3rem", fontWeight: 500, fontStyle: "italic" }}
                  className="text-white leading-snug">
                  {svc.title}
                </h3>
                <p style={{ ...jost, fontWeight: 300, fontSize: "0.85rem", lineHeight: 1.8, letterSpacing: "0.02em" }}
                  className="text-[rgba(192,213,214,0.6)]">
                  {svc.desc}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="flex justify-center">
            <Link href="/services">
              <button
                style={{ ...cinzel, fontSize: "11px", letterSpacing: "0.18em" }}
                className="rounded-[5px] border border-[rgba(165,141,102,0.45)] bg-transparent px-10 py-3.5 uppercase text-[#A58D66] transition-all hover:border-[rgba(165,141,102,0.8)] hover:bg-[rgba(165,141,102,0.08)]"
              >
                View All Services
              </button>
            </Link>
          </div>
        </div>
      </section>

      <div style={{ background: "#083A4F" }}>
        <SacredDivider variant="dark" />
      </div>

      {/* ═══════════════════════════════════════════════════════
          WHY CHOOSE US — aqua tint
      ════════════════════════════════════════════════════════ */}
      <section className="relative overflow-visible section-shell"  style={{ background: "#F4F1EE" }}>
        <div className="container grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <div className="fade-in-section flex flex-col gap-6">
            <div
              className="pointer-events-none absolute overflow-visible"
              style={{
                top: "38%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: 700,
                height: 700,
              }}
            >
              
              {/* RADIAL GLOW */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(ellipse, rgba(165,141,102,0.07) 0%, transparent 70%)",
                }}
              />

              {/* GOLD RING 1 */}
              <div
                className="absolute rounded-full"
                style={{
                  width: 320,
                  height: 320,
                  border: "2px solid rgba(165,141,102,0.18)",
                  top: -140,
                  left: -180,
                }}
              />

              {/* GOLD RING 2 */}
              <div
                className="absolute rounded-full"
                style={{
                  width: 520,
                  height: 520,
                  border: "3px solid rgba(165,141,102,0.10)",
                  top: -240,
                  left: -260,
                }}
              />

              {/* GOLD RING 3 */}
              <div
                className="absolute rounded-full"
                style={{
                  width: 760,
                  height: 760,
                  border: "4px solid rgba(165,141,102,0.06)",
                  top: -360,
                  left: -360,
                }}
              />
            </div>
            <span style={cinzel} className="eyebrow text-[#407E8C]">Why Choose Us</span>
            <h2 style={{ ...cormorant, fontSize: "clamp(2.2rem, 3.5vw, 3rem)", fontWeight: 300, fontStyle: "italic" }}
              className="text-[#083A4F] leading-tight">
              A space that feels calm, credible, and supportive
            </h2>
            <div className=" flex flex-wrap gap-4 pt-1 gold-line" />
            <p style={{ ...jost, fontWeight: 300, fontSize: "0.95rem", lineHeight: 1.85, letterSpacing: "0.03em" }}
              className="text-[#2D4A56]">
              The practice is designed to feel welcoming and centered, with care that respects both
              emotional wellbeing and the need for practical clarity.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-2">
            <Link href="/about">
              <button
                style={{ ...cinzel, fontSize: "11px", letterSpacing: "0.16em" }}
                className="mt-2 w-fit rounded-[5px] bg-[#A58D66] px-7 py-3 uppercase text-[#041F2B] transition-all hover:bg-[#C4A96E]"
              >
                Meet Vidya
              </button>
            </Link>

            <Link href="/testimonials">
            <button
              className="mt-2 w-fit rounded-[5px] bg-[#A58D66] px-7 py-3 uppercase text-[#041F2B] transition-all hover:bg-[#C4A96E]"
              style={{
                 ...cinzel, fontSize: "11px", letterSpacing: "0.16em" 
              }}>
              Explore Verified Testimonials
            </button>
          </Link>
          </div>
          </div>
          
          

          <div className="grid gap-3">
            {whyChooseUs.map((reason, i) => (
              <article
                key={i}
                className="fade-in-section surface-card flex items-start gap-4 p-5"
                style={{ animationDelay: `${i * 0.07}s` }}
              >
                <div className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-[#A58D66]" />
                <p style={{ ...jost, fontWeight: 300, fontSize: "0.92rem", lineHeight: 1.75, letterSpacing: "0.02em" }}
                  className="text-[#2D4A56]">
                  {reason}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

    </SiteLayout>
  );
}
