import { Link } from "wouter";
import { SacredDivider } from "@/components/site/SacredDivider";
import { Seo } from "@/components/site/Seo";
import { SiteLayout } from "@/components/site/SiteLayout";
import { TrustSignal } from "@/components/site/TrustSignal";
import { whyChooseUs, trustSignals } from "@/components/site/site-data";
import HowItWorks from "@/components/site/HowItWorks";
import ScrollToTop  from '@/components/site/scrolltotop';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

const vidyaHero   = "/vidya-hero.png";

// ── Cinzel label style ──────────────────────────────────────
const cinzel = { fontFamily: "'Marcellus', serif" } as const;
const cormorant = { fontFamily: "'Cormorant Garamond', serif" } as const;
const marcellus = { fontFamily: "'Marcellus', serif" } as const;
const jost = { fontFamily: "'Jost', sans-serif" } as const;
const mandala1 = '/1.svg' as const;

export default function Home() {
  return (
    <SiteLayout>
      <ScrollToTop />
      <Seo
        title="Home"
        path="/"
        description="Vidya's Holistic Healings — Certified Pranic Healer in Frisco, Texas. Chakra alignment, energy servicing and distant healings for a global community."
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
            <span style={{fontFamily: "Marcellus", fontSize: "14px", fontWeight: 500}} className="gold-badge w-fit">
              Certified Pranic Healer · Frisco, Texas
            </span>

            {/* Logo mark */}
            <img
              src="/logo4.png"
              alt="VHH"
              className="w-16 h-16 md:w-32 md:h-32 lg:w-40 lg:h-40 object-contain "
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
                style={{ ...cinzel, fontSize: "14px", letterSpacing: "0.18em", fontWeight:600 }}
                className="rounded-[5px] bg-[#A58D66] px-6 py-4 uppercase text-[#041F2B] shadow-[0_0_24px_rgba(165,141,102,0.28)] transition-all duration-250 hover:bg-[#C4A96E] hover:shadow-[0_0_36px_rgba(165,141,102,0.45)]"
              >
                Book a Session
              </button>
              <Link href="/services">
                <button
                  style={{ ...cinzel, fontSize: "14px", letterSpacing: "0.18em", fontWeight:600 }}
                  className="rounded-[5px] border border-[rgba(165,141,102,0.45)] bg-transparent px-8 py-4 uppercase text-[#A58D66] transition-all duration-250 hover:border-[rgba(165,141,102,0.8)] hover:bg-[rgba(165,141,102,0.08)]"
                >
                  Explore Services
                </button>
              </Link>
            </div>

            {/* Ornament 
            <div className="flex items-center gap-3 pt-2 opacity-50">
              <div className="h-px w-14 bg-[rgba(165,141,102,0.5)]" />
              <div className="h-1.5 w-1.5 rotate-45 bg-[#A58D66]" />
              <div className="h-px w-14 bg-[rgba(165,141,102,0.5)]" />
            </div>*/}

            {/* Trust signals */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-1">
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
                className="absolute inset-x-6 bottom-6 rounded-2xl border border-[rgba(165,141,102,0.3)] bg-[rgba(4,31,43,0.82)] p-3 backdrop-blur-md"
              >
                <div className="flex items-center gap-4">
                  <div
                    className="flex h-17 w-17 flex-shrink-0 items-center justify-center rounded-full"
                  >
                    <img src="/logo4.png" alt="" className="h-12 w-12 object-contain" />
                  </div>
                  <div>
                    <p style={{ ...cinzel, fontSize: "16px", letterSpacing: "0.15em", fontWeight: "bold"  }} className="uppercase text-[#A58D66] mb-1">
                      Vidya Joshi
                    </p>
                    <p style={{ ...cormorant, fontSize: "18px", fontStyle: "italic", fontWeight: 300 }}
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
          AILMENTS WE HEAL — dark navy
      ════════════════════════════════════════════════════════ */}
      <section className="section-shell relative overflow-hidden" style={{ background: "#083A4F" }}>
        <div className="pointer-events-none absolute rounded-full" style={{ top: "-200px", right: "-200px", width: "600px", height: "600px", border: "1px solid rgba(165,141,102,0.08)" }} />
        <div className="pointer-events-none absolute rounded-full" style={{ bottom: "-300px", left: "-200px", width: "700px", height: "700px", border: "1px solid rgba(165,141,102,0.06)" }} />
        <div className="container relative z-10">
          <div className="mb-10 md:mb-16 flex flex-col items-center text-center gap-3 md:gap-[18px]">
            <span style={{ ...cinzel, fontSize: "15px", letterSpacing: "0.26em", textTransform: "uppercase" as const, color: "#A58D66" }}>What We Address</span>
            <h2 style={{ ...cormorant, fontSize: "clamp(2rem,6vw,3.2rem)", fontWeight: 300, fontStyle: "italic", lineHeight: 1.12, letterSpacing: "-0.01em" }} className="text-white">
              Ailments We <em style={{ color: "#C4A96E", fontStyle: "italic" }}>Heal</em>
            </h2>
            <div className="h-0.5 w-12 rounded bg-[#A58D66]" />
            <p style={{ ...jost, fontWeight: 300, fontSize: "16px", lineHeight: 1.8, letterSpacing: "0.02em", maxWidth: "560px" }} className="text-[rgba(192,213,214,0.7)] text-center mx-auto">
              Pranic Healing supports the body's natural recovery across a wide spectrum of concerns.
              Tap any category to see the tailored healing packages.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[14px] md:gap-[16px]">
            {[
              {
                num: "01", tag: "Chronic & Metabolic", title: "Chronic & Metabolic Ailments",
                items: ["Diabetes", "High & Low Blood Pressure", "PCOS & Hormonal Imbalances", "Thyroid Disruptions"],
                href: "/services#pkg-chakra",
              },
              {
                num: "02", tag: "Pain & Nervous System", title: "Pain & Nervous System",
                items: ["Migraines & Headaches", "Insomnia & Sleep Disorders", "Chronic Fatigue Syndrome", "Arthritis & Back Pain"],
                href: "/services#pkg-chakra",
              },
              {
                num: "03", tag: "Digestive & Respiratory", title: "Digestive & Respiratory",
                items: ["IBS, Acid Reflux, Ulcers", "Asthma & Allergies", "Sinusitis", "Gastrointestinal Issues"],
                href: "/services#pkg-basic",
              },
              {
                num: "04", tag: "Psychological & Emotional", title: "Psychological & Emotional",
                items: ["Anxiety & Panic Attacks", "Depression & Deep Grief", "Chronic Stress & Burnout", "Emotional Patterns"],
                href: "/services#pkg-emotional",
              },
            ].map((a, i) => (
              <a
                key={i}
                href={a.href}
                style={{
                  background: "rgba(4,31,43,0.65)",
                  border: "1px solid rgba(165,141,102,0.2)",
                  borderRadius: "14px",
                  padding: "24px 22px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "14px",
                  color: "inherit",
                  textDecoration: "none",
                  transition: "all 0.3s",
                  position: "relative",
                  overflow: "hidden",
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget;
                  el.style.background = "rgba(13,77,104,0.75)";
                  el.style.borderColor = "rgba(165,141,102,0.5)";
                  el.style.transform = "translateY(-4px)";
                  el.style.boxShadow = "0 16px 48px rgba(4,31,43,0.55)";
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget;
                  el.style.background = "rgba(4,31,43,0.65)";
                  el.style.borderColor = "rgba(165,141,102,0.2)";
                  el.style.transform = "translateY(0)";
                  el.style.boxShadow = "none";
                }}
              >
                <div style={{ ...cormorant, fontSize: "42px", lineHeight: 1, color: "#C4A96E", opacity: 0.4, fontWeight: 300, fontStyle: "italic" }}>{a.num}</div>
                <span style={{ ...cinzel, fontSize: "15px", letterSpacing: "0.2em", fontWeight:500, textTransform: "uppercase" as const, color: "#407E8C" }}>{a.tag}</span>
                <h3 style={{ ...cormorant, fontWeight: 500, fontStyle: "italic", fontSize: "22px", lineHeight: 1.25, color: "white", letterSpacing: "-0.005em" }}>{a.title}</h3>
                <ul style={{ display: "flex", flexDirection: "column", gap: "7px", listStyle: "none", padding: 0, margin: "4px 0 0" }}>
                  {a.items.map((item, j) => (
                    <li key={j} style={{ ...jost, fontWeight: 300, fontSize: "17px", lineHeight: 1.55, color: "rgba(192,213,214,0.75)", display: "flex", alignItems: "flex-start", gap: "8px" }}>
                      <span style={{ display: "inline-block", width: "4px", height: "4px", borderRadius: "50%", background: "#A58D66", flexShrink: 0, marginTop: "8px" }} />
                      {item}
                    </li>
                  ))}
                </ul>
                <div style={{ ...cinzel, fontSize: "15px", fontWeight:800, letterSpacing: "0.2em", textTransform: "uppercase" as const, color: "#A58D66", marginTop: "auto", paddingTop: "14px", borderTop: "1px solid rgba(165,141,102,0.15)", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "8px" }}>
                  <span>See Packages</span>
                  <span style={{ fontSize: "14px" }}>→</span>
                </div>
              </a>
            ))}
          </div>
          <p style={{ ...jost, fontWeight: 300, fontSize: "16px", lineHeight: 1.6, color: "rgba(192,213,214,0.45)", maxWidth: "680px", fontStyle: "italic", textAlign: "center", marginTop: "40px", marginLeft: "auto", marginRight: "auto" }}>
            Pranic Healing is complementary to medical care, not a substitute for it. Always consult a licensed physician for diagnosis and treatment.
          </p>
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
            <span style={{fontStyle: "cinzel", fontSize:15 }} className="eyebrow text-[#407E8C]">Why Choose Us</span>
            <h2 style={{ ...cormorant, fontSize: "clamp(2.2rem, 3.5vw, 3rem)", fontWeight: 300, fontStyle: "italic" }}
              className="text-[#083A4F] leading-tight">
              A space that feels calm, credible, and supportive
            </h2>
            <div className=" flex flex-wrap gap-4 pt-1 gold-line" />
            <p style={{ ...jost, fontWeight: 300, fontSize: "1.08rem", lineHeight: 1.85, letterSpacing: "0.03em" }}
              className="text-[#2D4A56]">
              The practice is designed to feel welcoming and centered, with care that respects both
              emotional wellbeing and the need for practical clarity.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-2">
            <Link href="/about">
              <button
                style={{ ...marcellus, fontSize: "14px", letterSpacing: "0.16em", fontWeight: 600 }}
                className="mt-2 w-fit rounded-[5px] bg-[#A58D66] px-7 py-3 uppercase text-[#041F2B] transition-all hover:bg-[#C4A96E]"
              >
                Meet Vidya
              </button>
            </Link>

            <Link href="/testimonials">
            <button
              className="mt-2 w-fit rounded-[5px] bg-[#A58D66] px-7 py-3 uppercase text-[#041F2B] transition-all hover:bg-[#C4A96E]"
              style={{
                 ...marcellus, fontSize: "13px", letterSpacing: "0.16em" , fontWeight: 800
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
                <p style={{ ...jost, fontWeight: 300, fontSize: "1rem", lineHeight: 1.75, letterSpacing: "0.02em" }}
                  className="text-[#2D4A56]">
                  {reason}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          FAQ — dark navy
      ════════════════════════════════════════════════════════ */}
      <section id="faq" className="section-shell relative overflow-hidden" style={{ background: "linear-gradient(160deg, #041F2B 0%, #083A4F 100%)" }}>
        <div className="pointer-events-none absolute rounded-full" style={{ top: "-160px", right: "-160px", width: "500px", height: "500px", border: "1px solid rgba(165,141,102,0.07)" }} />
        <div className="pointer-events-none absolute rounded-full" style={{ bottom: "-200px", left: "-160px", width: "560px", height: "560px", border: "1px solid rgba(165,141,102,0.05)" }} />
        <div className="container relative z-10 max-w-3xl">
          <div className="mb-10 md:mb-14 flex flex-col items-center text-center gap-3">
            <span style={{ ...cinzel, fontSize: "13px", letterSpacing: "0.26em", textTransform: "uppercase" as const, color: "#A58D66" }}>
              Common Questions
            </span>
            <h2 style={{ ...cormorant, fontSize: "clamp(2rem,5vw,3rem)", fontWeight: 300, fontStyle: "italic", lineHeight: 1.12, letterSpacing: "-0.01em" }} className="text-white">
              Frequently Asked <em style={{ color: "#C4A96E" }}>Questions</em>
            </h2>
            <div className="h-0.5 w-12 rounded bg-[#A58D66]" />
          </div>

          <Accordion type="single" collapsible className="flex flex-col gap-3">
            {[
              {
                q: "What is Pranic Healing?",
                a: "A gentle, no-touch energy therapy. It cleanses and rebalances your energy centers (chakras) to help your body's natural ability to heal itself faster.",
              },
              {
                q: "How does it work?",
                a: "It is based on the principle that the physical body follows the energy body. By removing stagnant energy and replacing it with fresh prana (life force), we support your overall well-being.",
              },
              {
                q: "Do you touch the client?",
                a: "No. You remain fully clothed, and the session is performed by working on your energy field.",
              },
              {
                q: "Can it be done remotely?",
                a: "Yes. Energy is not limited by distance, so we can achieve the same results whether you are in the same room or at home.",
              },
              {
                q: "Is it a substitute for medicine?",
                a: "No. It is a complementary practice. It works alongside your medical treatments to support you; it does not replace the need for a doctor.",
              },
              {
                q: "How many sessions do I need?",
                a: "It depends on your goals. Some clients feel a shift in one session, while others benefit from a series of treatments for chronic issues. We will discuss a plan that works for you.",
              },
            ].map((item, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                style={{
                  background: "rgba(4,31,43,0.6)",
                  border: "1px solid rgba(165,141,102,0.2)",
                  borderRadius: "12px",
                  padding: "0 24px",
                  overflow: "hidden",
                }}
                className="border-b-0"
              >
                <AccordionTrigger
                  style={{ ...cormorant, fontSize: "clamp(1.3rem,2.5vw,1.5rem)", fontWeight: 400, fontStyle: "italic", color: "#C4A96E", letterSpacing: "0.08em", paddingTop: "20px", paddingBottom: "20px" }}
                  className="hover:no-underline [&>svg]:text-[#A58D66]"
                >
                  {item.q}
                </AccordionTrigger>
                <AccordionContent>
                  <p style={{ ...jost, fontWeight: 400, fontSize: "18px", lineHeight: 1.85, color: "rgba(192,213,214,0.8)", paddingBottom: "20px" }}>
                    {item.a}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

    </SiteLayout>
  );
}
