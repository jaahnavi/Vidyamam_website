import React from 'react';
import { Link } from 'wouter';
import { SacredDivider } from '@/components/site/SacredDivider';
import { Seo } from '@/components/site/Seo';
import { SiteLayout } from '@/components/site/SiteLayout';
import ScrollToTop  from '@/components/site/scrolltotop';

const about1  = '/vidya-about-1.jpeg';
const about2  = '/vidya-about-2.jpeg';
const lotus   = '/lotus1.svg';
const mandala2 = '/2.svg' as const;
const mandala3 = '/3.svg' as const;

const STAT_DATA = [
  { value: '15+',    label: 'Years of Practice' },
  { value: '2,000+', label: 'Clients Globally' },
  { value: 'Frisco', label: 'Dallas, Texas' },
  { value: 'Global', label: 'In-Person · Distant' },
];

const CRED_DATA = [
  { title: 'Associate Certified Pranic Healer',
    desc: 'A professional designation in energy medicine.' },
  { title: 'Advanced & Basic Pranic Healing',
    desc: 'Expertise in color pranas and energy restoration techniques.' },
  { title: 'Pranic Psychotherapy',
    desc: 'Specialization in emotional and mental healing — trauma, anxiety, stress patterns.' },
  { title: 'Crystal Healing',
    desc: 'Vibrational use of crystals to amplify and direct healing energy.' },
  { title: 'Diploma in Naturopathy & Yoga',
    desc: 'Training in natural health systems, body chemistry, and energetic alignment.' },
];

// ── Shared text styles ─────────────────────────────────────
const eyebrow = (color = '#A58D66'): React.CSSProperties => ({
  fontFamily: "'Cinzel', serif", fontSize: '12px', letterSpacing: '0.26em',
  textTransform: 'uppercase', color, display: 'inline-block',
});
const display = (size: string, color: string): React.CSSProperties => ({
  fontFamily: "'Cormorant Garamond', serif", fontWeight: 400,
  fontSize: size, lineHeight: 1.15, color, margin: 0,
  letterSpacing: '-0.01em',
});
const body = (color: string): React.CSSProperties => ({
  fontFamily: "'Jost', sans-serif", fontWeight: 300,
  fontSize: '15px', lineHeight: 1.85, color, margin: 0,
});

export default function About() {
  return (
    <SiteLayout>
      <ScrollToTop />
      <Seo
        title="About"
        path="/about"
        description="Learn about Vidya Joshi, her healing philosophy, and holistic healings approach."
      />

      <div style={{ background: '#F4F1EE' }}>

        {/* ════════════════════════════════════════════════════════════
             1 · INTRO  — Photo left · text right
           ════════════════════════════════════════════════════════════ */}
        <section
          className="px-4 sm:px-10 md:px-16 lg:px-20 pt-24 md:pt-28 pb-16 md:pb-24 relative overflow-hidden"
          style={{ background: '#F4F1EE' }}
        >
          <img src={lotus} alt="" aria-hidden="true"
            style={{
              position: 'absolute', top: '20%', left: '90%',
              transform: 'translate(-50%, -50%)',
              width: '900px', height: '900px',
              opacity: 0.12,
              pointerEvents: 'none',
            }} />

          {/* Top eyebrow centered */}
          <div className="fade-in-section flex flex-col gap-7" style={{ textAlign: 'center', marginBottom: '72px' }}>
            <span style={eyebrow('#A58D66')}>The Visionary Behind the Healings</span>
            <h1 style={{ ...display('clamp(32px, 6vw, 64px)', '#083A4F'), marginTop: '20px', fontWeight: 400 }}>
              About <em style={{ fontStyle: 'italic', color: '#A58D66' }}>Vidya Joshi</em>
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center max-w-5xl mx-auto">
            {/* Photo left */}
              <div className="fade-in-section flex flex-col gap-7" style={{ position: 'relative' }}>
                <div style={{
                  position: 'absolute', inset: '-14px -14px 14px 14px',
                  border: '1px solid rgba(165,141,102,0.45)',
                  borderRadius: '4px', pointerEvents: 'none',
                }} />
                <div style={{
                  position: 'relative',
                  borderRadius: '4px', overflow: 'hidden',
                  boxShadow: '0 24px 60px rgba(8,58,79,0.25)',
                  aspectRatio: '4 / 5',
                }}>
                  <img src={about1} alt="Vidya Joshi"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                </div>
                {/* Gold seal badge — hidden on very small screens to prevent clipping */}
                <div className="hidden sm:flex fade-in-section flex-col gap-7" style={{
                  position: 'absolute', bottom: '-28px', right: '-20px',
                  width: '120px', height: '120px', borderRadius: '50%',
                  background: 'linear-gradient(135deg, #083A4F 0%, #0D4D68 100%)',
                  border: '1px solid rgba(165,141,102,0.5)',
                  flexDirection: 'column',
                  alignItems: 'center', justifyContent: 'center',
                  boxShadow: '0 12px 32px rgba(8,58,79,0.35)',
                  gap: '2px',
                }}>
                  <span style={{ ...display('30px', '#C4A96E'), fontWeight: 300 }}>15+</span>
                  <span style={{ fontFamily: "'Cinzel', serif", fontSize: '7px',
                    letterSpacing: '0.22em', textTransform: 'uppercase',
                    color: 'rgba(192,213,214,0.75)' }}>Years</span>
                </div>
              </div>

            {/* Text right */}
            <div className="fade-in-section flex flex-col gap-7" style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
              <span style={eyebrow('#407E8C')}>Certified Pranic Healer</span>
              <h2 style={display('40px', '#083A4F')}>
                Healing with presence,<br />
                <em style={{ fontStyle: 'italic', color: '#A58D66' }}>clarity & compassion.</em>
              </h2>
              <p style={body('#2D4A56')}>
                Vidya Joshi is a Certified Pranic Healer and wellness practitioner with over fifteen years
                in energy medicine — and a proven track record of transforming lives. Working with more than
                two thousand clients globally, she brings practical wisdom and clinical experience to every
                session.
              </p>
              <p style={body('#2D4A56')}>
                Based in the Dallas–Frisco area, she leads <em>Vidya's Holistic Healings</em>, offering both
                in-person and distant sessions to a global community. Her approach is rooted in a simple
                belief — that physical vitality is a direct reflection of energetic health, and that prana
                is the fuel for life.
              </p>
              <blockquote style={{
                fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic',
                fontWeight: 500, fontSize: '20px', lineHeight: 1.5,
                color: '#083A4F', borderLeft: '2px solid #A58D66',
                paddingLeft: '22px', margin: '8px 0 0', maxWidth: '440px',
              }}>
                Her mission is simple yet profound —  to heal the need.
              </blockquote>

              {/* Stat strip — 2 columns always (works for both mobile and desktop in this narrow column) */}
              <div style={{
                display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '0', marginTop: '20px',
                borderTop: '1px solid rgba(165,141,102,0.3)',
                borderBottom: '1px solid rgba(165,141,102,0.3)',
              }}>
                {STAT_DATA.map((s, i) => (
                  <div key={i} style={{
                    padding: '18px 12px',
                    borderRight: i % 2 === 0 ? '1px solid rgba(165,141,102,0.2)' : 'none',
                  }}>
                    <div style={{
                      fontFamily: "'Cormorant Garamond', serif", fontWeight: 400,
                      fontSize: '24px', color: '#083A4F', lineHeight: 1,
                    }}>{s.value}</div>
                    <div style={{
                      fontFamily: "'Cinzel', serif", fontSize: '12px', fontWeight: 600,
                      letterSpacing: '0.18em', textTransform: 'uppercase',
                      color: '#407E8C', marginTop: '8px',
                    }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════
             2 · NOTE FROM SOUL — Lotus mandala behind, dark navy
           ════════════════════════════════════════════════════════════ */}
        <section
          className="px-4 sm:px-12 md:px-20 py-12 md:py-20 relative overflow-hidden"
          style={{ background: 'linear-gradient(180deg, #041F2B 0%, #083A4F 60%, #041F2B 100%)' }}
        >
          <img src={mandala2} alt="" aria-hidden="true"
            style={{
              position: 'absolute', top: '60%', left: '5%',
              transform: 'translate(-50%, -50%)',
              width: '1100px', height: '1100px',
              opacity: 0.07,
              filter: 'invert(78%) sepia(28%) saturate(389%) hue-rotate(2deg) brightness(92%) contrast(85%)',
              pointerEvents: 'none',
            }} />

          <img src={mandala3} alt="" aria-hidden="true"
            style={{
              position: 'absolute', top: '20%', left: '90%',
              transform: 'translate(-50%, -50%)',
              width: '500px', height: '500px',
              opacity: 0.07,
              filter: 'invert(78%) sepia(28%) saturate(389%) hue-rotate(2deg) brightness(92%) contrast(85%)',
              pointerEvents: 'none',
            }} />


          <div style={{
            position: 'relative', zIndex: 2,
            maxWidth: '760px', margin: '0 auto', textAlign: 'center',
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px',
          }}>
            <span style={eyebrow('#C4A96E')}>A Note from My Soul to Yours</span>

            <h2 style={{ ...display('clamp(26px, 5vw, 48px)', 'white'), fontWeight: 300 }}>
              You don't have to carry your burdens<br />
              <em style={{ fontStyle: 'italic', color: '#C4A96E' }}>alone.</em>
            </h2>

            <div style={{ width: '60px', height: '1px', background: 'rgba(196,169,110,0.5)' }} />

            <p style={{
              fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic',
              fontWeight: 300, fontSize: 'clamp(16px, 3vw, 22px)', lineHeight: 1.75,
              color: 'rgba(255,255,255,0.88)', margin: 0,
            }}>
              I often see how easily we care for everything around us — yet neglect our own energy.
              Just as we wouldn't expect a car to function without regular servicing, our energy
              system also needs attention, care, and alignment.
            </p>

            <p style={{
              fontFamily: "'Jost', sans-serif", fontWeight: 300, fontSize: '15px',
              lineHeight: 1.95, color: 'rgba(192,213,214,0.78)', margin: 0,
              maxWidth: '620px',
            }}>
              Your light is already within you. Sometimes, it simply needs to be uncovered.
              If you are feeling tired, stuck, or out of balance, my work is to support your body
              and mind in remembering how to heal themselves. In every session — whether in person
              or distant — I hold a space of presence, care, and{' '}
              <em style={{ color: '#C4A96E', fontFamily: "'Cormorant Garamond', serif", fontSize: '17px' }}>Tathastu</em> for you.
            </p>

            <p style={{
              fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic',
              fontWeight: 400, fontSize: 'clamp(16px, 3vw, 22px)', lineHeight: 1.5,
              color: '#C4A96E', margin: '8px 0 0',
            }}>
              Your light is already there. I am here to help you let it shine.
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginTop: '12px' }}>
              <div style={{ width: '48px', height: '1px', background: 'rgba(165,141,102,0.4)' }} />
              <span style={{
                fontFamily: "'Cinzel', serif", fontSize: '13px', letterSpacing: '0.32em',
                textTransform: 'uppercase', color: '#A58D66',
              }}>Om Shanti · Tathastu</span>
              <div style={{ width: '48px', height: '1px', background: 'rgba(165,141,102,0.4)' }} />
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════
             3 · CREDENTIALS — credentials left · photo right
           ════════════════════════════════════════════════════════════ */}
        <section
          className="px-4 sm:px-10 md:px-16 lg:px-20 py-12 md:py-20 relative"
          style={{ background: '#F4F1EE' }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center max-w-5xl mx-auto">
            {/* Credentials text left */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <span style={eyebrow('#407E8C')}>Credentials & Certifications</span>
              <h2 style={display('clamp(24px, 4vw, 40px)', '#083A4F')}>
                Grounded in <em style={{ fontStyle: 'italic', color: '#A58D66' }}>experience</em><br />
                and formal training.
              </h2>

              <p style={{ ...body('#2D4A56'), maxWidth: '520px' }}>
                Vidya's work combines traditional naturopathic principles with advanced energy
                healing protocols — a safe, structured, and professional approach to sustained
                wellness. Below are her qualifications.
              </p>

              <ul style={{ listStyle: 'none', padding: 0, margin: '0px 0 0',
                  display: 'flex', flexDirection: 'column', gap: '4px' }}>
                {CRED_DATA.map((c, i) => (
                  <li key={i} style={{
                    display: 'grid', gridTemplateColumns: '30px 1fr',
                    gap: '12px', padding: '5px 0',
                    borderTop: '1px solid rgba(165,141,102,0.22)',
                    borderBottom: i === CRED_DATA.length - 1 ? '1px solid rgba(165,141,102,0.22)' : 'none',
                    alignItems: 'baseline',
                  }}>
                    <span style={{
                      fontFamily: "'Cormorant Garamond', serif", fontWeight: 300,
                      fontSize: '24px', color: '#A58D66', lineHeight: 1,
                    }}>{String(i + 1).padStart(2, '0')}</span>
                    <div>
                      <div style={{
                        fontFamily: "'Cinzel', serif", fontSize: '15px',
                        letterSpacing: '0.16em', textTransform: 'uppercase',
                        color: '#083A4F', fontWeight: 500, marginBottom: '2px',
                      }}>{c.title}</div>
                      <div style={{
                        fontFamily: "'Jost', sans-serif", fontWeight: 300,
                        fontSize: '13.5px', lineHeight: 1.75, color: '#2D4A56',
                      }}>{c.desc}</div>
                    </div>
                  </li>
                ))}
              </ul>

              <p style={{
                fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic',
                fontWeight: 400, fontSize: '17px', lineHeight: 1.6,
                color: '#407E8C', margin: '12px 0 0', maxWidth: '480px',
              }}>
                Fifteen years of practice. Two thousand stories. An approach rooted in
                authenticity and measurable results.
              </p>
            </div>

            {/* Photo right */}
            <div style={{ position: 'relative' }}>
              {/* Decorative frame border — hidden on mobile to prevent off-screen overflow */}
              <div className="hidden sm:block" style={{
                position: 'absolute', inset: '14px -14px -14px 14px',
                border: '1px solid rgba(165,141,102,0.45)',
                borderRadius: '4px', pointerEvents: 'none',
              }} />
              <div style={{
                position: 'relative',
                borderRadius: '4px', overflow: 'hidden',
                boxShadow: '0 24px 60px rgba(8,58,79,0.25)',
                aspectRatio: '4 / 5',
              }}>
                <img src={about2} alt="Vidya Joshi"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>
              {/* Floating label — hidden on mobile where left: -32px goes off-screen */}
              <div className="hidden sm:block" style={{
                position: 'absolute', top: '32px', left: '-32px',
                background: '#083A4F', color: '#C4A96E',
                padding: '10px 18px',
                fontFamily: "'Cinzel', serif", fontSize: '9px',
                letterSpacing: '0.24em', textTransform: 'uppercase',
                border: '1px solid rgba(165,141,102,0.4)',
                boxShadow: '0 8px 24px rgba(8,58,79,0.3)',
              }}>
                2,000+ Success Stories
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════
             4 · SERVICES — what she does
           ════════════════════════════════════════════════════════════ */}
        <section
          className="px-4 sm:px-10 md:px-16 lg:px-20 py-10 md:py-16 relative overflow-visible"
          style={{ background: 'linear-gradient(180deg, #083A4F 0%, #041F2B 100%)' }}
        >
          <img src={lotus} alt="" aria-hidden="true"
            style={{
              position: 'absolute', top: '90%', left: '10%',
              transform: 'translate(-50%, -50%)',
              width: '600px', height: '600px',
              opacity: 0.07,
              filter: 'invert(22%) sepia(28%) saturate(389%) hue-rotate(182deg) brightness(92%) contrast(85%)',
              pointerEvents: 'none',
            }} />

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0px' }}>
                <span style={eyebrow('#C4A96E')}>Approach to Healings</span>
                <p style={{
                  fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic',
                  fontWeight: 300, fontSize: '20px', lineHeight: 1.55,
                  color: 'white', margin: 0, maxWidth: '640px', gap:'20px',
                }}>
                  This work is not about temporary relaxation. It is about
                  recalibrating your life force so you can function at your
                  <em style={{ color: '#C4A96E' }}> highest possible state.</em>
                </p>
              </div>
              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', margin: 12 }}>
              
              
                <Link href="/services">
                  <button
                    style={{
                      fontFamily: "'Cinzel', serif", fontSize: '12px', letterSpacing: '0.2em', fontWeight: 600,
                      textTransform: 'uppercase', background: 'transparent', color: '#C4A96E',
                      border: '1px solid rgba(196,169,110,0.5)', borderRadius: '4px', padding: '16px 36px',
                      cursor: 'pointer', transition: 'all 250ms',
                    }}
                    onMouseEnter={e => { e.currentTarget.style.background = 'rgba(196,169,110,0.1)'; e.currentTarget.style.borderColor = '#C4A96E'; }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'rgba(196,169,110,0.5)'; }}>
                    Explore Services
                  </button>
                </Link>
                <Link href="/testimonials">
                  <button
                    style={{
                      fontFamily: "'Cinzel', serif", fontSize: '10px', letterSpacing: '0.2em', fontWeight: 600,
                      textTransform: 'uppercase', background: 'transparent', color: '#C4A96E',
                      border: '1px solid rgba(196,169,110,0.5)', borderRadius: '4px', padding: '16px 36px',
                      cursor: 'pointer', transition: 'all 250ms',
                    }}
                    onMouseEnter={e => { e.currentTarget.style.background = 'rgba(196,169,110,0.1)'; e.currentTarget.style.borderColor = '#C4A96E'; }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'rgba(196,169,110,0.5)'; }}>
                    Explore Verified Testimonials
                  </button>
                </Link>
              </div>


        </section>

      </div>
    </SiteLayout>
  );
}
