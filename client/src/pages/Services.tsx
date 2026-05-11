import { useState } from 'react';
import { Link } from 'wouter';
import { Seo } from '@/components/site/Seo';
import { SiteLayout } from '@/components/site/SiteLayout';
import ScrollToTop  from '@/components/site/scrolltotop';

const SERVICES = [
  {
    tag: 'Core Specialty',
    title: 'Chakra Alignment & Clearing',
    desc: 'Precision balancing of the 11-chakra system — with special focus on the Basic (Root) and Crown chakras to keep you grounded and inspired simultaneously.',
    highlight: true,
  },
  {
    tag: 'Energy Work',
    title: 'Pranic Energy Servicing',
    desc: 'Deep cleansing of congested and diseased energy from the bioplasmic body, boosting immunity, accelerating physical recovery, and restoring vitality.',
    highlight: false,
  },
  {
    tag: 'Distant Healing',
    title: 'Advanced Remote Healing',
    desc: 'Powerful Pranic Healing sessions conducted across any distance. Location is no barrier to your healing — our global clients confirm this.',
    highlight: false,
  },
  {
    tag: 'Coaching',
    title: 'Spiritual Coaching',
    desc: 'Personalized guidance to manifest your Golden Life using the sacred principles of Om and Tathastu. Align intention with universal energy.',
    highlight: false,
  },
  {
    tag: 'Holistic Health',
    title: 'Naturopathy & Yoga',
    desc: 'Rooted in a Diploma in Naturopathy and Yoga, Vidya weaves natural healing principles into every session for whole-body restoration.',
    highlight: false,
  },
  {
    tag: 'Assessment',
    title: 'Energy Body Diagnosis',
    desc: 'Scanning and mapping the aura and chakras to identify energetic deficiencies and congestion — the foundation of every personalized healing plan.',
    highlight: false,
  },
];

export default function Services() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <SiteLayout>
      <ScrollToTop />
      <Seo
        title="Services"
        path="/services"
        description="Explore Pranic Healing, chakra balancing, energy servicing, and spiritual coaching with Vidya Joshi."
      />

      <section style={{ background: '#083A4F', padding: '100px 80px', position: 'relative', overflow: 'hidden' }}>
        {/* 5.svg — top-left, ~15% visible */}
        <img src="/5.svg" alt="" aria-hidden="true"
          style={{
            position: 'absolute', top: '0', left: '0',
            transform: 'translate(-30%, -30%)',
            width: '900px', height: '900px',
            opacity: 0.1,
            filter: 'invert(78%) sepia(28%) saturate(389%) hue-rotate(2deg) brightness(92%) contrast(85%)',
            pointerEvents: 'none',
          }} />

        {/* Gold rings — bottom-right */}
        <div style={{
          position: 'absolute', bottom: '0', right: '0',
          transform: 'translate(40%, 40%)',
          width: '880px', height: '880px',
          borderRadius: '50%',
          border: '1px solid rgba(165,141,102,0.45)',
          boxShadow: '0 0 0 36px rgba(165,141,102,0.07), 0 0 0 72px rgba(165,141,102,0.05), 0 0 0 108px rgba(165,141,102,0.03)',
          pointerEvents: 'none',
        }} />

        {/* Header */}
        <div className="fade-in-section flex flex-col gap-7" style={{ textAlign: 'center', marginBottom: '64px' }}>
          <span style={{
            fontFamily: "'Cinzel', serif", fontSize: '11px', letterSpacing: '0.26em',
            textTransform: 'uppercase', color: '#A58D66', display: 'block', marginBottom: '16px',
          }}>What We Offer</span>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif", fontWeight: 400,
            fontSize: '48px', lineHeight: 1.15, color: 'white', margin: '0 0 20px',
          }}>Healing Services</h2>
          <p style={{
            fontFamily: "'Jost', sans-serif", fontWeight: 300,
            fontSize: '16px', lineHeight: 1.8, color: 'rgba(192,213,214,0.7)',
            maxWidth: '520px', margin: '0 auto',
          }}>
            Each service is tailored to your unique energetic blueprint — because no two souls carry the same need.
          </p>
        </div>

        {/* Grid */}
        <div className="fade-in-section flex flex-col gap-7" style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '20px', maxWidth: '1100px', margin: '0 auto 56px',
        }}>
          {SERVICES.map((svc, i) => (
            <div
              key={i}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                background: hovered === i ? 'rgba(13,77,104,0.9)' : 'rgba(4,31,43,0.75)',
                border: hovered === i ? '1px solid rgba(165,141,102,0.55)' : '1px solid rgba(165,141,102,0.2)',
                borderRadius: '12px', padding: '32px 28px',
                cursor: 'pointer', transition: 'all 280ms ease-out',
                transform: hovered === i ? 'translateY(-4px)' : 'translateY(0)',
                boxShadow: hovered === i ? '0 12px 40px rgba(4,31,43,0.45)' : '0 4px 20px rgba(4,31,43,0.2)',
                display: 'flex', flexDirection: 'column', gap: '12px',
              }}>
              <span style={{
                fontFamily: "'Cinzel', serif", fontSize: '10.5px', letterSpacing: '0.2em',
                textTransform: 'uppercase', color: '#407E8C',
              }}>{svc.tag}</span>
              {svc.highlight && (
                <div style={{ width: '28px', height: '2px', background: '#A58D66', borderRadius: '1px' }} />
              )}
              <h3 style={{
                fontFamily: "'Cormorant Garamond', serif", fontWeight: 500,
                fontSize: '20px', color: 'white', lineHeight: 1.3, margin: 0,
              }}>{svc.title}</h3>
              <p style={{
                fontFamily: "'Jost', sans-serif", fontWeight: 300,
                fontSize: '14px', lineHeight: 1.75, color: 'rgba(192,213,214,0.78)',
                margin: 0,
              }}>{svc.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div  className="fade-in-section flex flex-col gap-7" style={{ textAlign: 'center' }}>
          <Link href="/contact">
            <button
              style={{
                fontFamily: "'Cinzel', serif", fontSize: '11.5px', letterSpacing: '0.18em',
                textTransform: 'uppercase', background: 'transparent', color: '#A58D66',
                border: '1px solid rgba(165,141,102,0.5)', borderRadius: '5px',
                padding: '14px 40px', cursor: 'pointer', transition: 'all 250ms',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'rgba(165,141,102,0.1)';
                e.currentTarget.style.color = '#C4A96E';
                e.currentTarget.style.borderColor = '#C4A96E';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = '#A58D66';
                e.currentTarget.style.borderColor = 'rgba(165,141,102,0.5)';
              }}>
              Book Your Session
            </button>
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
