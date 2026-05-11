import React, { useState } from 'react';
import { Seo } from '@/components/site/Seo';
import { SiteLayout } from '@/components/site/SiteLayout';
import ScrollToTop  from '@/components/site/scrolltotop';

const mandala4 = '/4.svg' as const;

const SERVICES = [
  'Chakra Alignment & Clearing',
  'Pranic Energy Servicing',
  'Advanced Remote Healing',
  'Spiritual Coaching',
  'Naturopathy & Yoga',
  'Energy Body Diagnosis',
];

// ── Shared styles ─────────────────────────────────────────
const discHeader: React.CSSProperties = {
  fontFamily: "'Cinzel', serif", fontSize: '10px',
  letterSpacing: '0.24em', textTransform: 'uppercase',
  color: '#C4A96E', margin: '6px 0 12px',
  paddingBottom: '8px',
  borderBottom: '1px solid rgba(165,141,102,0.2)',
};

const inputStyle: React.CSSProperties = {
  fontFamily: "'Jost', sans-serif", fontSize: '14px',
  background: 'rgba(4,31,43,0.6)',
  border: '1px solid rgba(165,141,102,0.25)',
  borderRadius: '6px', padding: '14px 16px',
  color: 'white', width: '100%', outline: 'none',
  transition: 'border-color 250ms',
};

// ── Disclaimer item ───────────────────────────────────────
function DiscItem({ n, t, children }: { n: string; t?: string; children: React.ReactNode }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '24px 1fr', gap: '8px', margin: '0 0 10px' }}>
      <span style={{
        fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic',
        color: '#A58D66', fontSize: '13px', lineHeight: 1.6,
      }}>{n}.</span>
      <span>
        {t && (
          <span style={{
            fontFamily: "'Cinzel', serif", fontSize: '9px',
            letterSpacing: '0.16em', textTransform: 'uppercase',
            color: '#C0D5D6', display: 'block', marginBottom: '3px',
          }}>{t}</span>
        )}
        {children}
      </span>
    </div>
  );
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '', consent: false });
  const [submitted, setSubmitted] = useState(false);
  const [showDisclaimer, setShowDisclaimer] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const body = {
        name: form.name,
        email: form.email,
        phone: form.phone,
        message: form.service
          ? `Service: ${form.service}\n\n${form.message}`
          : form.message,
      };
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      const data = await res.json() as { success?: boolean; error?: string };
      if (!res.ok || !data.success) throw new Error(data.error || 'Submission failed.');
      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <SiteLayout>
      <ScrollToTop />
      <Seo
        title="Contact"
        path="/contact"
        description="Book a session with Vidya Joshi — Certified Pranic Healer based in Frisco, Texas."
      />

      <section style={{ background: '#E5E1DD', padding: '100px 80px' }}>
        <div style={{
          maxWidth: '1100px', margin: '0 auto',
          display: 'grid', gridTemplateColumns: '1fr 1fr',
          gap: '80px', alignItems: 'start',
        }}>
        

          {/* Left — text */}
          <div className="fade-in-section flex flex-col gap-7" style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
            <span style={{
              fontFamily: "'Cinzel', serif", fontSize: '11px', letterSpacing: '0.26em',
              textTransform: 'uppercase', color: '#407E8C',
            }}>Begin Your Journey</span>

            <h2 style={{
              fontFamily: "'Cormorant Garamond', serif", fontWeight: 400,
              fontSize: '48px', lineHeight: 1.1, color: '#083A4F', margin: 0,
            }}>Book a Session</h2>

            <div style={{ width: '48px', height: '2px', background: '#A58D66', borderRadius: '1px' }} />

            <p style={{
              fontFamily: "'Jost', sans-serif", fontWeight: 300,
              fontSize: '15px', lineHeight: 1.85, color: '#2D4A56',
            }}>
              Every healing journey begins with a single step. Share your need, and together we will
              recalibrate your life force to its highest possible frequency.
            </p>

            <blockquote style={{
              fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic',
              fontWeight: 300, fontSize: '17px', lineHeight: 1.7,
              color: '#407E8C', borderLeft: '2px solid #A58D66',
              paddingLeft: '20px', margin: 0,
            }}>
              "Just as we service our cars to ensure a smooth journey, we must service our prana
              to ensure a vibrant life."
            </blockquote>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '8px' }}>
              {[
                'In-Person Sessions · Frisco, Texas',
                'Distant Healing · Available Worldwide',
                'Response within 24 hours',
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{
                    width: '6px', height: '6px', background: '#A58D66',
                    borderRadius: '50%', flexShrink: 0,
                  }} />
                  <span style={{
                    fontFamily: "'Jost', sans-serif", fontSize: '14.5px',
                    color: '#2D4A56', letterSpacing: '0.04em',
                  }}>{item}</span>
                </div>
              ))}
            </div>

            <img
              src={mandala4}
              alt=""
              aria-hidden="true"
              className="absolute pointer-events-none overflow-visible" 
              style={{
                top: '50%',
                left: '50%',
                transform: 'translate(-100%, -20%)',
                width: '1100px',
                height: '1100px',
                opacity: 0.09,
                filter:
                  'invert(48%) sepia(18%) saturate(900%) hue-rotate(150deg) brightness(90%) contrast(88%)',
              }}
            />
          </div>

          {/* Right — form */}
          <div className="fade-in-section flex flex-col gap-7" style={{
            background: '#083A4F', borderRadius: '16px',
            padding: '40px 36px', boxShadow: '0 16px 64px rgba(8,58,79,0.2)',
          }}>
            {submitted ? (
              <div style={{
                textAlign: 'center', padding: '40px 0',
                display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center',
              }}>
                <img src="/logo1.png" alt="VHH" style={{ width: '80px', opacity: 0.9 }} />
                <h3 style={{
                  fontFamily: "'Cormorant Garamond', serif", fontWeight: 400,
                  fontSize: '28px', color: 'white',
                }}>Thank You</h3>
                <p style={{
                  fontFamily: "'Jost', sans-serif", fontWeight: 300,
                  fontSize: '14px', color: 'rgba(192,213,214,0.7)', lineHeight: 1.7,
                }}>
                  Your request has been received. Vidya will reach out within 24 hours to confirm
                  your session.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  style={{
                    fontFamily: "'Cinzel', serif", fontSize: '9px', letterSpacing: '0.16em',
                    textTransform: 'uppercase', background: 'transparent', color: '#A58D66',
                    border: '1px solid rgba(165,141,102,0.4)', borderRadius: '4px',
                    padding: '10px 24px', cursor: 'pointer', marginTop: '8px',
                  }}>
                  Submit Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <h3 style={{
                  fontFamily: "'Cinzel', serif", fontSize: '11px', letterSpacing: '0.2em',
                  textTransform: 'uppercase', color: '#C4A96E', margin: '0 0 8px',
                }}>Session Request</h3>

                <input
                  placeholder="Your Name"
                  value={form.name}
                  onChange={e => setForm({ ...form, name: e.target.value })}
                  style={inputStyle}
                  required
                />
                <input
                  placeholder="Email Address"
                  type="email"
                  value={form.email}
                  onChange={e => setForm({ ...form, email: e.target.value })}
                  style={inputStyle}
                  required
                />
                <input
                  placeholder="Phone Number"
                  type="tel"
                  value={form.phone}
                  onChange={e => setForm({ ...form, phone: e.target.value })}
                  style={inputStyle}
                  required
                />
                <select
                  value={form.service}
                  onChange={e => setForm({ ...form, service: e.target.value })}
                  style={{ ...inputStyle, color: form.service ? 'white' : 'rgba(255,255,255,0.4)' }}>
                  <option value="">Select a Service</option>
                  {SERVICES.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
                <textarea
                  placeholder="Tell Vidya about your need..."
                  value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                  rows={4}
                  style={{ ...inputStyle, resize: 'vertical' }}
                />

                {/* Disclaimer panel — collapsible */}
                <div style={{
                  marginTop: '8px',
                  border: '1px solid rgba(165,141,102,0.25)',
                  borderRadius: '6px',
                  background: 'rgba(4,31,43,0.45)',
                }}>
                  <button
                    type="button"
                    onClick={() => setShowDisclaimer(s => !s)}
                    style={{
                      width: '100%', display: 'flex', alignItems: 'center',
                      justifyContent: 'space-between', gap: '12px',
                      padding: '14px 16px', cursor: 'pointer',
                      background: 'transparent', border: 'none', textAlign: 'left',
                    }}>
                    <span style={{
                      fontFamily: "'Cinzel', serif", fontSize: '9.5px', letterSpacing: '0.22em',
                      textTransform: 'uppercase', color: '#C4A96E',
                    }}>Disclaimer & Client Consent</span>
                    <span style={{
                      fontFamily: "'Cinzel', serif", fontSize: '14px', color: '#A58D66',
                      transform: showDisclaimer ? 'rotate(180deg)' : 'rotate(0)',
                      transition: 'transform 250ms ease-out', lineHeight: 1,
                      display: 'inline-block',
                    }}>⌄</span>
                  </button>

                  {showDisclaimer && (
                    <div style={{
                      padding: '4px 18px 18px',
                      borderTop: '1px solid rgba(165,141,102,0.18)',
                      maxHeight: '280px', overflowY: 'auto',
                      fontFamily: "'Jost', sans-serif", fontWeight: 300,
                      fontSize: '11.5px', lineHeight: 1.75,
                      color: 'rgba(192,213,214,0.78)',
                    }}>
                      <p style={{
                        fontFamily: "'Cinzel', serif", fontSize: '8.5px',
                        letterSpacing: '0.22em', textTransform: 'uppercase',
                        color: '#A58D66', margin: '14px 0 10px',
                      }}>Vidya Joshi · Pranic Healing Practitioner · Frisco, TX | Pune, India</p>

                      <p style={discHeader}>Part A — Disclaimer</p>

                      <DiscItem n="1" t="Nature of Service">
                        Pranic Healing is a no-touch, energy-based system developed by GrandMaster Choa Kok Sui.
                        It is offered as a complementary and spiritual practice to support relaxation, stress
                        relief, and overall well-being.
                      </DiscItem>
                      <DiscItem n="2" t="Not Medical or Mental Health Care">
                        I am not a licensed physician, psychologist, counselor, or healthcare provider. Pranic
                        Healing does not diagnose, prescribe, treat, cure, or prevent any medical or psychological
                        condition. It is not a substitute for professional medical, psychiatric, or psychological care.
                      </DiscItem>
                      <DiscItem n="3" t="Complementary Only">
                        Sessions are intended to work alongside, not replace, any treatment you receive from
                        qualified healthcare professionals. Always consult your doctor regarding your health concerns.
                      </DiscItem>
                      <DiscItem n="4" t="Individual Results Vary">
                        Experiences and outcomes of Pranic Healing differ for each person. No guarantees or
                        warranties are made regarding specific results.
                      </DiscItem>
                      <DiscItem n="5" t="Scope of Practice">
                        Services provided are spiritual / energetic in nature. I do not interfere with prescribed
                        medication or medical procedures. No physical touch is involved in sessions.
                      </DiscItem>
                      <DiscItem n="6" t="Legal Compliance">
                        This practice complies with guidelines for complementary therapies. It is not intended to
                        violate the Drugs and Magic Remedies Act, 1954 (India) or US FTC regulations on health
                        claims. This content is not evaluated by the FDA and is not intended to diagnose, treat,
                        cure, or prevent any disease. For educational and spiritual purposes only.
                      </DiscItem>

                      <p style={{ ...discHeader, marginTop: '20px' }}>Part B — Client Consent & Acknowledgment</p>
                      <p style={{ margin: '0 0 10px', fontStyle: 'italic', color: 'rgba(192,213,214,0.65)' }}>
                        By booking a session, applying techniques shared on this account, or attending a group
                        event, I confirm that:
                      </p>
                      <DiscItem n="1">I have read and understood the disclaimer above in full.</DiscItem>
                      <DiscItem n="2">I am participating voluntarily and may stop a session at any time.</DiscItem>
                      <DiscItem n="3">
                        I remain fully responsible for my health choices. I will consult my doctor / mental health
                        provider about any medical or psychological concerns. I will not discontinue or change
                        prescribed medication or treatment without consulting my licensed provider.
                      </DiscItem>
                      <DiscItem n="4">
                        For emergencies, I will call 911 or my local emergency services immediately. Pranic Healing
                        is not for emergencies.
                      </DiscItem>
                      <DiscItem n="5">
                        Sessions may be in-person or remote. I understand no physical touch is involved.
                      </DiscItem>
                      <DiscItem n="6">
                        Confidentiality — Sessions are confidential, except as required by law.
                      </DiscItem>
                      <DiscItem n="7">
                        Minors — If I am under 18, my parent or guardian has reviewed and agrees to these terms.
                      </DiscItem>

                      <p style={{
                        margin: '18px 0 4px', paddingTop: '14px',
                        borderTop: '1px solid rgba(165,141,102,0.18)',
                        fontStyle: 'italic', color: 'rgba(196,169,110,0.85)',
                      }}>
                        By proceeding to book or attend a session, you agree to this Disclaimer & Client
                        Consent. For individual 1:1 sessions, a separate signature may be requested.
                      </p>
                    </div>
                  )}
                </div>

                {/* Consent checkbox */}
                <label style={{
                  display: 'flex', alignItems: 'flex-start', gap: '12px',
                  cursor: 'pointer', marginTop: '4px',
                  fontFamily: "'Jost', sans-serif", fontWeight: 300,
                  fontSize: '12px', lineHeight: 1.6,
                  color: 'rgba(192,213,214,0.75)',
                }}>
                  <input
                    type="checkbox"
                    checked={form.consent}
                    onChange={e => setForm({ ...form, consent: e.target.checked })}
                    required
                    style={{
                      appearance: 'none', WebkitAppearance: 'none',
                      width: '16px', height: '16px', flexShrink: 0,
                      marginTop: '2px',
                      border: '1px solid rgba(165,141,102,0.5)',
                      borderRadius: '3px', cursor: 'pointer',
                      background: form.consent ? '#A58D66' : 'transparent',
                      backgroundImage: form.consent
                        ? "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><path d='M3 8 L7 12 L13 4' stroke='%23041F2B' stroke-width='2' fill='none' stroke-linecap='round' stroke-linejoin='round'/></svg>\")"
                        : 'none',
                      backgroundSize: 'contain',
                      transition: 'all 200ms',
                    }}
                  />
                  <span>
                    I have read and agree to the{' '}
                    <button
                      type="button"
                      onClick={() => setShowDisclaimer(true)}
                      style={{
                        background: 'none', border: 'none', padding: 0,
                        color: '#C4A96E', textDecoration: 'underline',
                        textDecorationColor: 'rgba(196,169,110,0.4)',
                        textUnderlineOffset: '3px', cursor: 'pointer',
                        font: 'inherit',
                      }}>
                      Disclaimer & Client Consent
                    </button>
                    {' '}above. I understand Pranic Healing is complementary and not a substitute for medical care.
                  </span>
                </label>

                {error && (
                  <p style={{
                    fontFamily: "'Jost', sans-serif", fontSize: '12px',
                    color: '#f87171', margin: '0', textAlign: 'center',
                  }}>{error}</p>
                )}

                <button
                  type="submit"
                  disabled={!form.consent || loading}
                  style={{
                    fontFamily: "'Cinzel', serif", fontSize: '10px', letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    background: form.consent && !loading ? '#A58D66' : 'rgba(165,141,102,0.3)',
                    color: form.consent && !loading ? '#041F2B' : 'rgba(4,31,43,0.6)',
                    border: 'none', borderRadius: '5px', padding: '16px',
                    cursor: form.consent && !loading ? 'pointer' : 'not-allowed', marginTop: '8px',
                    boxShadow: form.consent && !loading ? '0 0 20px rgba(165,141,102,0.25)' : 'none',
                    transition: 'background 250ms',
                  }}
                  onMouseEnter={e => { if (form.consent && !loading) e.currentTarget.style.background = '#C4A96E'; }}
                  onMouseLeave={e => { if (form.consent && !loading) e.currentTarget.style.background = '#A58D66'; }}>
                  {loading ? 'Sending…' : 'Begin My Journey'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
