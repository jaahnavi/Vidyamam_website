import { useState } from 'react';
import { Link } from 'wouter';
import { Seo } from '@/components/site/Seo';
import { SiteLayout } from '@/components/site/SiteLayout';
import ScrollToTop from '@/components/site/scrolltotop';

const cinzel = { fontFamily: "'Cinzel', serif" } as const;
const cormorant = { fontFamily: "'Cormorant Garamond', serif" } as const;
const jost = { fontFamily: "'Jost', sans-serif" } as const;

function CheckIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"
      style={{ width: 14, height: 14, color: "#A58D66", flexShrink: 0, marginTop: 3 }}>
      <path d="M3 8l3.5 3.5L13 5" />
    </svg>
  );
}

function PriceRow({ label, value, featured }: { label: string; value: string; featured?: boolean }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 10, padding: "8px 0", borderBottom: "1px dashed rgba(165,141,102,0.18)" }}>
      <span style={{ ...jost, fontWeight: 400, fontSize: 13.5, color: featured ? "rgba(192,213,214,0.7)" : "#5C7A87", letterSpacing: "0.01em" }}>{label}</span>
      <span style={{ ...cormorant, fontWeight: 500, fontSize: 22, color: featured ? "#C4A96E" : "#083A4F", lineHeight: 1, letterSpacing: "-0.01em" }}>{value}</span>
    </div>
  );
}

const iconBox: React.CSSProperties = {
  width: 46, height: 46, borderRadius: 12,
  background: "rgba(165,141,102,0.1)",
  border: "1px solid rgba(165,141,102,0.3)",
  display: "flex", alignItems: "center", justifyContent: "center",
  flexShrink: 0,
};

const featuredIconBox: React.CSSProperties = {
  ...iconBox,
  background: "rgba(165,141,102,0.18)",
  border: "1px solid rgba(165,141,102,0.5)",
};

export default function Services() {
  const [hovered, setHovered] = useState<string | null>(null);
  const [addonHovered, setAddonHovered] = useState<number | null>(null);

  const card = (id: string): React.CSSProperties => ({
    background: "white",
    border: `1px solid ${hovered === id ? "rgba(165,141,102,0.45)" : "rgba(165,141,102,0.22)"}`,
    borderRadius: 18,
    padding: "28px 24px",
    display: "flex",
    flexDirection: "column",
    gap: 16,
    transition: "all 0.3s",
    boxShadow: hovered === id ? "0 18px 48px rgba(8,58,79,0.16)" : "0 4px 24px rgba(8,58,79,0.06)",
    transform: hovered === id ? "translateY(-4px)" : "translateY(0)",
    position: "relative",
  });

  const featuredCard = (id: string): React.CSSProperties => ({
    background: "#083A4F",
    border: `1px solid ${hovered === id ? "rgba(165,141,102,0.7)" : "rgba(165,141,102,0.4)"}`,
    borderRadius: 18,
    padding: "40px 24px 28px",
    display: "flex",
    flexDirection: "column",
    gap: 16,
    transition: "all 0.3s",
    boxShadow: hovered === id ? "0 18px 48px rgba(8,58,79,0.3)" : "0 4px 24px rgba(8,58,79,0.1)",
    transform: hovered === id ? "translateY(-4px)" : "translateY(0)",
    position: "relative",
    color: "white",
  });

  const includesList: React.CSSProperties = {
    display: "flex", flexDirection: "column", gap: 9,
    padding: "14px 0",
    borderTop: "1px solid rgba(165,141,102,0.18)",
    borderBottom: "1px solid rgba(165,141,102,0.18)",
    listStyle: "none", margin: 0,
  };

  const includesListFeatured: React.CSSProperties = {
    ...includesList,
    borderTop: "1px solid rgba(165,141,102,0.25)",
    borderBottom: "1px solid rgba(165,141,102,0.25)",
  };

  const includeItem: React.CSSProperties = {
    ...jost, fontWeight: 300, fontSize: 13.5, lineHeight: 1.5,
    color: "#2D4A56", display: "flex", alignItems: "flex-start", gap: 10,
  };

  const includeItemFeatured: React.CSSProperties = {
    ...includeItem, color: "rgba(192,213,214,0.78)",
  };

  const ctaBase: React.CSSProperties = {
    ...cinzel, fontSize: 12, fontWeight: 400, letterSpacing: "0.2em", textTransform: "uppercase",
    background: "#083A4F", color: "#C4A96E",
    borderRadius: 6, padding: "14px 18px", marginTop: 6,
    textAlign: "center", textDecoration: "none", display: "block", transition: "all 0.25s",
  };

  const ctaFeatured: React.CSSProperties = {
    ...ctaBase, background: "#A58D66", color: "#041F2B",
  };

  const pkgTitle = (featured?: boolean): React.CSSProperties => ({
    ...cormorant, fontWeight: 500, fontStyle: "italic", fontSize: 24,
    lineHeight: 1.2, letterSpacing: "-0.005em",
    color: featured ? "white" : "#083A4F", margin: 0,
  });

  const pkgSub = (featured?: boolean): React.CSSProperties => ({
    ...jost, fontWeight: 300, fontSize: 14, lineHeight: 1.55,
    color: featured ? "rgba(192,213,214,0.7)" : "#5C7A87",
    marginTop: 4, marginBottom: 0,
  });

  return (
    <SiteLayout>
      <ScrollToTop />
      <Seo
        title="Healing Packages"
        path="/services"
        description="Explore Pranic Healing packages — chakra balancing, emotional healing, group programs and more with Vidya Joshi."
      />

      <section style={{ background: "#F4F1EE", padding: "88px 0 80px" }}>
        <div className="container">

          {/* ── Header ── */}
          <div style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: 14, marginBottom: 64 }}>
            <span style={{ ...cinzel, fontSize: 12, letterSpacing: "0.26em", textTransform: "uppercase", color: "#407E8C" }}>
              Healing Packages
            </span>
            <h1 style={{ ...cormorant, fontSize: "clamp(2rem,6vw,3.2rem)", fontWeight: 500, fontStyle: "italic", lineHeight: 1.12, letterSpacing: "-0.01em", color: "#083A4F" }}>
              Choose Your <em style={{ color: "#C4A96E" }}>Path</em>
            </h1>
            <div style={{ width: 48, height: 2, background: "#A58D66", borderRadius: 1 }} />
            <p style={{ ...jost, fontWeight: 300, fontSize: 15, lineHeight: 1.8, letterSpacing: "0.02em", maxWidth: 560, color: "#2D4A56", textAlign: "center", margin: 0 }}>
              Simple, transparent pricing. Each package combines aura cleansing, chakra balancing
              and energy restoration — tailored to where you are right now.
            </p>
          </div>

          {/* ── Packages grid ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[18px] md:gap-5">

            {/* Basic Healing */}
            <article id="pkg-basic" style={card("basic")} onMouseEnter={() => setHovered("basic")} onMouseLeave={() => setHovered(null)}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
                <div style={iconBox}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="#A58D66" strokeWidth="1.5" style={{ width: 24, height: 24 }}>
                    <path d="M12 2 L12 22 M2 12 L22 12" strokeLinecap="round" />
                    <circle cx="12" cy="12" r="5" />
                  </svg>
                </div>
                <div>
                  <h3 style={pkgTitle()}>Basic Healing</h3>
                  <p style={pkgSub()}>Stress relief &amp; energy balance</p>
                </div>
              </div>
              <ul style={includesList}>
                {["Aura cleansing & chakra balancing", "Stress & energy cleansing", "Guided relaxation tips"].map((item, i) => (
                  <li key={i} style={includeItem}><CheckIcon />{item}</li>
                ))}
              </ul>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <PriceRow label="Single Session" value="$49" />
                <PriceRow label="4 Sessions (Monthly)" value="$179" />
              </div>
              <Link href="/contact" style={ctaBase}>Book Basic Healing</Link>
            </article>

            {/* Emotional Healing */}
            <article id="pkg-emotional" style={card("emotional")} onMouseEnter={() => setHovered("emotional")} onMouseLeave={() => setHovered(null)}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
                <div style={iconBox}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="#A58D66" strokeWidth="1.5" style={{ width: 24, height: 24 }}>
                    <path d="M12 21s-7-4.5-7-10a4 4 0 017-2.6A4 4 0 0119 11c0 5.5-7 10-7 10z" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <h3 style={pkgTitle()}>Emotional Healing</h3>
                  <p style={pkgSub()}>Anxiety, grief &amp; inner peace</p>
                </div>
              </div>
              <ul style={includesList}>
                {["Heart & solar plexus healing", "Energy cord cleansing", "Personalized healing guidance"].map((item, i) => (
                  <li key={i} style={includeItem}><CheckIcon />{item}</li>
                ))}
              </ul>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <PriceRow label="Single Session" value="$69" />
                <PriceRow label="4 Sessions" value="$249" />
              </div>
              <Link href="/contact" style={ctaBase}>Book Emotional Healing</Link>
            </article>

            {/* Chakra Healing — featured */}
            <article id="pkg-chakra" className="sm:col-span-2 lg:col-span-1" style={featuredCard("chakra")} onMouseEnter={() => setHovered("chakra")} onMouseLeave={() => setHovered(null)}>
              <div style={{ position: "absolute", top: -12, left: "50%", transform: "translateX(-50%)", background: "#A58D66", color: "#041F2B", ...cinzel, fontSize: 8.5, letterSpacing: "0.22em", textTransform: "uppercase", padding: "6px 16px", borderRadius: 999, whiteSpace: "nowrap" }}>
                Most Popular
              </div>
              <div style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
                <div style={featuredIconBox}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="#A58D66" strokeWidth="1.5" style={{ width: 24, height: 24 }}>
                    <circle cx="12" cy="12" r="3" />
                    <circle cx="12" cy="12" r="7" strokeOpacity="0.6" />
                    <circle cx="12" cy="12" r="10" strokeOpacity="0.3" />
                  </svg>
                </div>
                <div>
                  <h3 style={pkgTitle(true)}>Chakra Healing</h3>
                  <p style={pkgSub(true)}>Full chakra alignment &amp; vitality</p>
                </div>
              </div>
              <ul style={includesListFeatured}>
                {["Full chakra scanning & balancing", "Aura cleansing & energizing", "Distant healing support between sessions"].map((item, i) => (
                  <li key={i} style={includeItemFeatured}><CheckIcon />{item}</li>
                ))}
              </ul>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <PriceRow label="Single Session" value="$89" featured />
                <PriceRow label="4 Sessions" value="$329" featured />
              </div>
              <Link href="/contact" style={ctaFeatured}>Book Chakra Healing</Link>
            </article>

            {/* 7 Chakras Balance */}
            <article id="pkg-7chakras" style={card("7chakras")} onMouseEnter={() => setHovered("7chakras")} onMouseLeave={() => setHovered(null)}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
                <div style={iconBox}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="#A58D66" strokeWidth="1.5" style={{ width: 24, height: 24 }}>
                    <circle cx="12" cy="4" r="1.5" />
                    <circle cx="12" cy="8" r="1.5" />
                    <circle cx="12" cy="12" r="1.5" />
                    <circle cx="12" cy="16" r="1.5" />
                    <circle cx="12" cy="20" r="1.5" />
                    <path d="M12 5.5 V6.5 M12 9.5 V10.5 M12 13.5 V14.5 M12 17.5 V18.5" strokeOpacity="0.5" />
                  </svg>
                </div>
                <div>
                  <h3 style={pkgTitle()}>7 Chakras Balance</h3>
                  <p style={pkgSub()}>7-day group healing — one chakra each day</p>
                </div>
              </div>
              <ul style={includesList}>
                {["Daily focused cleansing & energizing", "Group setting — collective resonance", "WhatsApp guidance throughout"].map((item, i) => (
                  <li key={i} style={includeItem}><CheckIcon />{item}</li>
                ))}
              </ul>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <PriceRow label="7 Days Group Program" value="$77" />
              </div>
              <Link href="/contact" style={ctaBase}>Join Group Program</Link>
            </article>

            {/* Monthly Maintenance */}
            <article id="pkg-monthly" style={card("monthly")} onMouseEnter={() => setHovered("monthly")} onMouseLeave={() => setHovered(null)}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
                <div style={iconBox}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="#A58D66" strokeWidth="1.5" style={{ width: 24, height: 24 }}>
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7 V12 L15.5 14" strokeLinecap="round" />
                  </svg>
                </div>
                <div>
                  <h3 style={pkgTitle()}>Monthly Maintenance</h3>
                  <p style={pkgSub()}>Ongoing energetic alignment</p>
                </div>
              </div>
              <ul style={includesList}>
                {["Monthly energy cleansing", "Chakra rebalancing tune-up", "Continuity for sustained wellness"].map((item, i) => (
                  <li key={i} style={includeItem}><CheckIcon />{item}</li>
                ))}
              </ul>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <PriceRow label="1 Monthly Session" value="$59" />
                <PriceRow label="3 Months" value="$159" />
              </div>
              <Link href="/contact" style={ctaBase}>Start Maintenance</Link>
            </article>

            {/* Daily Wellness Program */}
            <article id="pkg-daily" style={card("daily")} onMouseEnter={() => setHovered("daily")} onMouseLeave={() => setHovered(null)}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
                <div style={iconBox}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="#A58D66" strokeWidth="1.5" style={{ width: 24, height: 24 }}>
                    <path d="M5 12c0-3.87 3.13-7 7-7s7 3.13 7 7" strokeLinecap="round" />
                    <path d="M3 14 L21 14" strokeLinecap="round" />
                    <path d="M7 18 L17 18" strokeLinecap="round" strokeOpacity="0.5" />
                  </svg>
                </div>
                <div>
                  <h3 style={pkgTitle()}>Daily Wellness Program</h3>
                  <p style={pkgSub()}>Group healing &amp; meditation, daily</p>
                </div>
              </div>
              <ul style={includesList}>
                {["Daily 15–20 min group healing", "Guided meditation & affirmations", "WhatsApp healing support"].map((item, i) => (
                  <li key={i} style={includeItem}><CheckIcon />{item}</li>
                ))}
              </ul>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <PriceRow label="Weekly Access" value="$39" />
                <PriceRow label="Monthly Membership" value="$111" />
              </div>
              <Link href="/contact" style={ctaBase}>Join Daily Program</Link>
            </article>

          </div>

          {/* ── Add-ons ── 
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 md:gap-4 rounded-[18px] p-7 md:p-8 lg:p-9" style={{ background: "#E5E1DD" }}>
            <div className="sm:col-span-2 lg:col-span-3" style={{ display: "flex", flexDirection: "column", gap: 6, marginBottom: 8 }}>
              <h3 style={{ ...cormorant, fontWeight: 300, fontStyle: "italic", fontSize: 24, color: "#083A4F", margin: 0 }}>Add-On Services</h3>
              <p style={{ ...jost, fontWeight: 300, fontSize: 13, color: "#5C7A87", margin: 0 }}>Layer onto any package or book individually.</p>
            </div>
            {[
              { name: "Crystal Healing", price: "$25" },
              { name: "Guided Meditation Session", price: "$19" },
              { name: "Relationship Harmony Healing", price: "$59" },
              { name: "Prosperity & Abundance Healing", price: "$59" },
              { name: "Home Energy Cleansing (Remote)", price: "$99" },
              { name: "Distance Healing (Global)", price: "Included" },
            ].map((addon, i) => (
              <div
                key={i}
                style={{
                  background: "white",
                  border: `1px solid ${addonHovered === i ? "rgba(165,141,102,0.5)" : "rgba(165,141,102,0.2)"}`,
                  borderRadius: 12,
                  padding: "18px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: 12,
                  transition: "all 0.25s",
                  transform: addonHovered === i ? "translateY(-2px)" : "translateY(0)",
                  boxShadow: addonHovered === i ? "0 8px 24px rgba(8,58,79,0.08)" : "none",
                }}
                onMouseEnter={() => setAddonHovered(i)}
                onMouseLeave={() => setAddonHovered(null)}
              >
                <span style={{ ...jost, fontWeight: 400, fontSize: 13.5, color: "#083A4F", letterSpacing: "0.01em" }}>{addon.name}</span>
                <span style={{ ...cormorant, fontWeight: 500, fontSize: 18, color: "#A58D66" }}>{addon.price}</span>
              </div>
            ))}
          </div>*/}

          {/* ── Ailments cross-link strip ── */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-[auto_1fr] gap-[18px] md:gap-8 rounded-[18px] p-7 md:p-8" style={{ background: "#083A4F", alignItems: "center" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <h3 style={{ ...cormorant, fontWeight: 300, fontStyle: "italic", fontSize: 22, color: "white", lineHeight: 1.2, margin: 0 }}>Not sure which package fits?</h3>
              <p style={{ ...jost, fontWeight: 300, fontSize: 13, color: "rgba(192,213,214,0.65)", maxWidth: 260, margin: 0 }}>Browse by the concern you're working through.</p>
            </div>
            <div style={{ display: "flex", fontSize: 25, flexWrap: "wrap", gap: 8 }}>
              {[
                { label: "Chronic & Metabolic", href: "#pkg-chakra" },
                { label: "Pain & Nervous System", href: "#pkg-chakra" },
                { label: "Digestive & Respiratory", href: "#pkg-basic" },
                { label: "Anxiety & Stress", href: "#pkg-emotional" },
                { label: "Grief & Depression", href: "#pkg-emotional" },
                { label: "Ongoing Maintenance", href: "#pkg-monthly" },
              ].map((tag, i) => (
                <a
                  key={i}
                  href={tag.href}
                  style={{ ...cinzel, fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase", background: "rgba(165,141,102,0.12)", color: "#C4A96E", border: "1px solid rgba(165,141,102,0.3)", padding: "8px 14px", borderRadius: 999, textDecoration: "none", transition: "all 0.25s" }}
                  onMouseEnter={e => { e.currentTarget.style.background = "rgba(165,141,102,0.25)"; e.currentTarget.style.borderColor = "rgba(165,141,102,0.6)"; }}
                  onMouseLeave={e => { e.currentTarget.style.background = "rgba(165,141,102,0.12)"; e.currentTarget.style.borderColor = "rgba(165,141,102,0.3)"; }}
                >
                  {tag.label}
                </a>
              ))}
            </div>
          </div>

          {/* ── Disclaimer ── */}
          <div style={{ marginTop: 32, padding: "20px 22px", background: "rgba(255,255,255,0.5)", border: "1px solid rgba(165,141,102,0.2)", borderRadius: 12, ...jost, fontWeight: 300, fontSize: 14, lineHeight: 1.65, color: "#5C7A87", fontStyle: "italic", textAlign: "center" }}>
            Pranic Healing is a complementary energy practice intended to support overall wellness and relaxation.
            It is not a substitute for medical diagnosis, treatment, or professional healthcare services. Results may vary from person to person.
          </div>

        </div>
      </section>
    </SiteLayout>
  );
}
