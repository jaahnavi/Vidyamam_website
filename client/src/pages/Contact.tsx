import React, { useState } from 'react';
import { Seo } from '@/components/site/Seo';
import { SiteLayout } from '@/components/site/SiteLayout';
import ScrollToTop from '@/components/site/scrolltotop';

const mandala4 = '/4.svg' as const;

const SERVICES = [
  'Basic Healing',
  'Emotional Healing',
  'Chakra Healing',
  '7 Chakras Balance',
  'Monthly Maintenance',
  'Daily Wellness Program',
];

// ── Shared styles ─────────────────────────────────────────
const discHeader: React.CSSProperties = {
  fontFamily: "'Cinzel', serif", fontSize: '14px',
  letterSpacing: '0.24em', textTransform: 'uppercase',
  color: '#C4A96E', margin: '6px 0 12px',
  paddingBottom: '8px',
  borderBottom: '1px solid rgba(165,141,102,0.2)',
};

const inputStyle: React.CSSProperties = {
  fontFamily: "'Jost', sans-serif", fontSize: '14px',
  background: 'rgba(4,31,43,0.6)',
  border: '1px solid rgba(165,141,102,0.25)',
  borderRadius: '6px', padding: '12px 14px',
  color: 'white', width: '100%', outline: 'none',
  transition: 'border-color 250ms', boxSizing: 'border-box',
};

const labelStyle: React.CSSProperties = {
  fontFamily: "'Jost', sans-serif", fontWeight: 400,
  fontSize: '13px', color: 'rgba(192,213,214,0.7)',
  display: 'block', marginBottom: '5px', letterSpacing: '0.04em',
};

// ── Helper components ─────────────────────────────────────

function SectionHead({ n, title }: { n: string; title: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', margin: '20px 0 14px' }}>
      <span style={{
        fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic',
        color: '#A58D66', fontSize: '13px', flexShrink: 0,
      }}>{n}.</span>
      <span style={{
        fontFamily: "'Cinzel', serif", fontSize: '12px',
        letterSpacing: '0.1em', textTransform: 'uppercase',
        color: '#C4A96E', flexShrink: 0,
      }}>{title}</span>
      <div style={{ flex: 1, height: '1px', background: 'rgba(165,141,102,0.2)' }} />
    </div>
  );
}

function YesNo({
  label, value, onChange, children,
}: {
  label: string;
  value: '' | 'yes' | 'no';
  onChange: (v: 'yes' | 'no') => void;
  children?: React.ReactNode;
}) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px',
        padding: '10px 14px', background: 'rgba(4,31,43,0.5)',
        border: '1px solid rgba(165,141,102,0.2)', borderRadius: '6px',
      }}>
        <span style={{
          fontFamily: "'Jost', sans-serif", fontSize: '15px',
          color: 'rgba(192,213,214,0.82)', flex: 1, lineHeight: 1.4,
        }}>{label}</span>
        <div style={{ display: 'flex', gap: '6px', flexShrink: 0 }}>
          {(['yes', 'no'] as const).map(opt => (
            <button key={opt} type="button" onClick={() => onChange(opt)} style={{
              fontFamily: "'Cinzel', serif", fontSize: '12px', fontWeight:600, letterSpacing: '0.14em',
              textTransform: 'uppercase', padding: '5px 12px', borderRadius: '3px',
              cursor: 'pointer', border: '1px solid rgba(165,141,102,0.4)',
              background: value === opt ? '#A58D66' : 'transparent',
              color: value === opt ? '#041F2B' : 'rgba(165,141,102,0.75)',
              transition: 'all 180ms',
            }}>{opt}</button>
          ))}
        </div>
      </div>
      {children}
    </div>
  );
}

function Pills({
  options, value, onChange,
}: {
  options: { label: string; value: string }[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
      {options.map(opt => (
        <button key={opt.value} type="button" onClick={() => onChange(opt.value)} style={{
          fontFamily: "'Cinzel', serif", fontSize: '12px', fontWeight: 600,letterSpacing: '0.0em',
          textTransform: 'uppercase', padding: '8px 16px', borderRadius: '4px',
          cursor: 'pointer', border: '1px solid rgba(165,141,102,0.4)',
          background: value === opt.value ? '#A58D66' : 'transparent',
          color: value === opt.value ? '#041F2B' : 'rgba(165,141,102,0.8)',
          transition: 'all 180ms',
        }}>{opt.label}</button>
      ))}
    </div>
  );
}

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

// ── Form state ────────────────────────────────────────────
interface FormState {
  name: string; dob: string; email: string; phone: string; emergencyContact: string;
  mainReason: string; conditionType: '' | 'physical' | 'emotional';
  goal1: string; goal2: string; goal3: string;
  hasPacemaker: '' | 'yes=' | 'no';
  isPregnant: '' | 'yes' | 'no'; pregnancyWeeks: string;
  hadOrganTransplant: '' | 'yes' | 'no';
  hasHypertension: '' | 'yes' | 'no';
  hasKidneyDisorder: '' | 'yes' | 'no';
  hasPhysicianCare: '' | 'yes' | 'no';
  stressLevel: '' | 'low' | 'moderate' | 'high' | 'severe';
  energyLevel: '' | 'low' | 'moderate' | 'vibrant';
  smokesAlcohol: '' | 'yes' | 'no';
  openToHygiene: '' | 'yes' | 'no';
  service: string; message: string; consent: boolean;
}

const defaultForm: FormState = {
  name: '', dob: '', email: '', phone: '', emergencyContact: '',
  mainReason: '', conditionType: '', goal1: '', goal2: '', goal3: '',
  hasPacemaker: '', isPregnant: '', pregnancyWeeks: '',
  hadOrganTransplant: '', hasHypertension: '', hasKidneyDisorder: '', hasPhysicianCare: '',
  stressLevel: '', energyLevel: '', smokesAlcohol: '', openToHygiene: '',
  service: '', message: '', consent: false,
};

// ── Page ──────────────────────────────────────────────────
export default function Contact() {
  const [form, setForm] = useState<FormState>(defaultForm);
  const [submitted, setSubmitted] = useState(false);
  const [showDisclaimer, setShowDisclaimer] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const set = <K extends keyof FormState>(key: K, value: FormState[K]) =>
    setForm(prev => ({ ...prev, [key]: value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const payload = {
        name: form.name, email: form.email, phone: form.phone,
        dob: form.dob || undefined,
        emergencyContact: form.emergencyContact || undefined,
        mainReason: form.mainReason || undefined,
        conditionType: form.conditionType || undefined,
        goal1: form.goal1 || undefined, goal2: form.goal2 || undefined, goal3: form.goal3 || undefined,
        hasPacemaker: form.hasPacemaker || undefined,
        isPregnant: form.isPregnant || undefined,
        pregnancyWeeks: form.pregnancyWeeks || undefined,
        hadOrganTransplant: form.hadOrganTransplant || undefined,
        hasHypertension: form.hasHypertension || undefined,
        hasKidneyDisorder: form.hasKidneyDisorder || undefined,
        hasPhysicianCare: form.hasPhysicianCare || undefined,
        stressLevel: form.stressLevel || undefined,
        energyLevel: form.energyLevel || undefined,
        smokesAlcohol: form.smokesAlcohol || undefined,
        openToHygiene: form.openToHygiene || undefined,
        service: form.service || undefined,
        message: form.message || undefined,
      };
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
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

      <section
        className="px-4 sm:px-10 md:px-16 lg:px-20 pt-24 pb-16 md:py-24"
        style={{ background: '#E5E1DD' }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-start max-w-5xl mx-auto">

          {/* Left — text */}
          <div className="fade-in-section" style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
            <span style={{
              fontFamily: "'Cinzel', serif", fontSize: '12px', letterSpacing: '0.26em',
              textTransform: 'uppercase', color: '#407E8C',
            }}>Begin Your Journey</span>

            <h2 style={{
              fontFamily: "'Cormorant Garamond', serif", fontWeight: 400,
              fontSize: 'clamp(28px, 5vw, 48px)', lineHeight: 1.1, color: '#083A4F', margin: 0,
            }}>Book a Session</h2>

            <div style={{ width: '48px', height: '2px', background: '#A58D66', borderRadius: '1px' }} />

            <p style={{
              fontFamily: "'Jost', sans-serif", fontWeight: 300,
              fontSize: '15px', lineHeight: 1.85, color: '#2D4A56',
            }}>
              Every healing journey begins with a single step. Share a bit about yourself and your wellness
              goals — Vidya will review your intake and reach out personally.
            </p>

            <blockquote style={{
              fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic',
              fontWeight: 500, fontSize: '19px', lineHeight: 1.7,
              color: '#407E8C', borderLeft: '2px solid #A58D66',
              paddingLeft: '20px', margin: 0,
            }}>
              "Just as we service our cars to ensure a smooth journey, we must service our prana
              to ensure a vibrant life."
            </blockquote>

            <div style={{ display: 'flex', fontWeight: 400, flexDirection: 'column', gap: '12px', marginTop: '8px' }}>
              {[
                'Supportive Healing Experience',
                'In-Person Sessions · Frisco, Texas',
                'Distant Healing · Available Worldwide',
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
              className="block absolute pointer-events-none overflow-visible"
              style={{
                top: '50%', left: '50%',
                transform: 'translate(-100%, -30%)',
                width: '1100px', height: '1100px',
                opacity: 0.09,
                filter: 'invert(48%) sepia(18%) saturate(900%) hue-rotate(150deg) brightness(90%) contrast(88%)',
              }}
            />
          </div>

          {/* Right — form */}
          <div className="fade-in-section" style={{
            background: '#083A4F', borderRadius: '16px',
            padding: 'clamp(20px, 4vw, 36px) clamp(16px, 4vw, 32px)',
            boxShadow: '0 16px 64px rgba(8,58,79,0.2)',
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
                  Your intake has been received. Vidya will reach out once your request has been reviewed.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm(defaultForm); }}
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
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>

                <h3 style={{
                  fontFamily: "'Cinzel', serif", fontSize: '12px', letterSpacing: '0.2em',
                  textTransform: 'uppercase', color: '#C4A96E', margin: '0 0 4px',
                }}>Client Intake Form</h3>

                {/* §1 Client Profile */}
                <SectionHead n="1" title="Client Profile" />

                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                  <div style={{ flex: '1 1 160px' }}>
                    <label style={labelStyle}>Full Name *</label>
                    <input
                      value={form.name} onChange={e => set('name', e.target.value)}
                      placeholder="Your full name" required style={inputStyle}
                    />
                  </div>
                  <div style={{ flex: '1 1 140px' }}>
                    <label style={labelStyle}>Date of Birth</label>
                    <input
                      type="date" value={form.dob} onChange={e => set('dob', e.target.value)}
                      style={{ ...inputStyle, colorScheme: 'dark' }}
                    />
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                  <div style={{ flex: '1 1 160px' }}>
                    <label style={labelStyle}>Email *</label>
                    <input
                      type="email" value={form.email} onChange={e => set('email', e.target.value)}
                      placeholder="you@example.com" required style={inputStyle}
                    />
                  </div>
                  <div style={{ flex: '1 1 140px' }}>
                    <label style={labelStyle}>Phone *</label>
                    <input
                      type="tel" value={form.phone} onChange={e => set('phone', e.target.value)}
                      placeholder="+1 (555) 000-0000" required style={inputStyle}
                    />
                  </div>
                </div>

                <div>
                  <label style={labelStyle}>Emergency Contact (Name & Phone)</label>
                  <input
                    value={form.emergencyContact} onChange={e => set('emergencyContact', e.target.value)}
                    placeholder="e.g. Jane Doe — +1 (555) 123-4567" style={inputStyle}
                  />
                </div>

                {/* §2 Wellness Focus */}
                <SectionHead n="2" title="Wellness Focus & Primary Concerns" />

                <div>
                  <label style={labelStyle}>Main reason for your visit</label>
                  <textarea
                    value={form.mainReason} onChange={e => set('mainReason', e.target.value)}
                    placeholder="Describe what brought you here..." rows={3}
                    style={{ ...inputStyle, resize: 'vertical' }}
                  />
                </div>

                <div>
                  <label style={labelStyle}>Type of condition</label>
                  <Pills
                    options={[
                      { label: 'Physical Pain / Ailment', value: 'physical' },
                      { label: 'Stress / Emotional / Psychological', value: 'emotional' },
                    ]}
                    value={form.conditionType}
                    onChange={v => set('conditionType', v as FormState['conditionType'])}
                  />
                </div>

                <div>
                  <label style={labelStyle}>Top wellness goals</label>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
                    {(['goal1', 'goal2', 'goal3'] as const).map((key, i) => (
                      <input
                        key={key} value={form[key]} onChange={e => set(key, e.target.value)}
                        placeholder={`Goal ${i + 1}`} style={inputStyle}
                      />
                    ))}
                  </div>
                </div>

                {/* §3 Health Screening */}
                <SectionHead n="3" title="Health Screening" />
                <p style={{
                  fontFamily: "'Jost', sans-serif", fontSize: '14px',
                  color: 'rgba(192,213,214,0.55)', margin: '-6px 0 4px', lineHeight: 1.5,
                }}>
                  Required for Pranic Healing safety compliance. Please answer each question.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
                  <YesNo label="Pacemaker or electrical medical implants?" value={form.hasPacemaker} onChange={v => set('hasPacemaker', v)} />
                  <YesNo label="Currently pregnant?" value={form.isPregnant} onChange={v => set('isPregnant', v )}>
                    {form.isPregnant === 'yes' && (
                      <input
                        value={form.pregnancyWeeks} onChange={e => set('pregnancyWeeks', e.target.value)}
                        placeholder="How many weeks?" style={inputStyle}
                      />
                    )}
                  </YesNo>
                  <YesNo label="Organ transplant history?" value={form.hadOrganTransplant} onChange={v => set('hadOrganTransplant', v)} />
                  <YesNo label="Severe high blood pressure (hypertension)?" value={form.hasHypertension} onChange={v => set('hasHypertension', v)} />
                  <YesNo label="Severe kidney disorders?" value={form.hasKidneyDisorder} onChange={v => set('hasKidneyDisorder', v)} />
                  <YesNo label="Currently under care of a physician or psychiatrist?" value={form.hasPhysicianCare} onChange={v => set('hasPhysicianCare', v)} />
                </div>

                {/* §4 Lifestyle */}
                <SectionHead n="4" title="Energy & Lifestyle" />

                <div>
                  <label style={labelStyle}>Current stress level</label>
                  <Pills
                    options={[
                      { label: 'Low', value: 'low' }, { label: 'Moderate', value: 'moderate' },
                      { label: 'High', value: 'high' }, { label: 'Severe', value: 'severe' },
                    ]}
                    value={form.stressLevel}
                    onChange={v => set('stressLevel', v as FormState['stressLevel'])}
                  />
                </div>

                <div>
                  <label style={labelStyle}>Daily energy level</label>
                  <Pills
                    options={[
                      { label: 'Low', value: 'low' }, { label: 'Moderate', value: 'moderate' },
                      { label: 'Vibrant', value: 'vibrant' },
                    ]}
                    value={form.energyLevel}
                    onChange={v => set('energyLevel', v as FormState['energyLevel'])}
                  />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
                  <YesNo label="Do you smoke or regularly consume alcohol?" value={form.smokesAlcohol} onChange={v => set('smokesAlcohol', v)} />
                  <YesNo label="Open to energetic hygiene habits (e.g. salt water baths)?" value={form.openToHygiene} onChange={v => set('openToHygiene', v)} />
                </div>

                {/* Service & Notes */}
                <div style={{ marginTop: '8px' }}>
                  <label style={labelStyle}>Service of interest</label>
                  <select
                    value={form.service} onChange={e => set('service', e.target.value)}
                    style={{ ...inputStyle, color: form.service ? 'white' : 'rgba(255,255,255,0.35)' }}>
                    <option value="">Select a service</option>
                    {SERVICES.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>

                <div>
                  <label style={labelStyle}>Additional notes (optional)</label>
                  <textarea
                    value={form.message} onChange={e => set('message', e.target.value)}
                    placeholder="Anything else you'd like Vidya to know..."
                    rows={3} style={{ ...inputStyle, resize: 'vertical' }}
                  />
                </div>

                {/* Disclaimer accordion */}
                <div style={{
                  marginTop: '4px', border: '1px solid rgba(165,141,102,0.25)',
                  borderRadius: '6px', background: 'rgba(4,31,43,0.45)',
                }}>
                  <button
                    type="button" onClick={() => setShowDisclaimer(s => !s)}
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
                      transition: 'transform 250ms ease-out', lineHeight: 1, display: 'inline-block',
                    }}>⌄</span>
                  </button>

                  {showDisclaimer && (
                    <div style={{
                      padding: '4px 18px 18px', borderTop: '1px solid rgba(165,141,102,0.18)',
                      maxHeight: '280px', overflowY: 'auto',
                      fontFamily: "'Jost', sans-serif", fontWeight: 300,
                      fontSize: '11.5px', lineHeight: 1.75, color: 'rgba(192,213,214,0.78)',
                    }}>
                      <p style={{
                        fontFamily: "'Cinzel', serif", fontSize: '8.5px', letterSpacing: '0.22em',
                        textTransform: 'uppercase', color: '#A58D66', margin: '14px 0 10px',
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
                        claims. For educational and spiritual purposes only.
                      </DiscItem>

                      <p style={{ ...discHeader, marginTop: '20px' }}>Part B — Client Consent & Acknowledgment</p>
                      <p style={{ margin: '0 0 10px', fontStyle: 'italic', color: 'rgba(192,213,214,0.65)' }}>
                        By submitting this form I confirm that:
                      </p>
                      <DiscItem n="1">I have read and understood the disclaimer above in full.</DiscItem>
                      <DiscItem n="2">I am participating voluntarily and may stop a session at any time.</DiscItem>
                      <DiscItem n="3">
                        I remain fully responsible for my health choices. I will consult my doctor / mental health
                        provider about any medical or psychological concerns and will not discontinue or change
                        prescribed medication without consulting my licensed provider.
                      </DiscItem>
                      <DiscItem n="4">
                        For emergencies I will call 911 or local emergency services immediately. Pranic Healing
                        is not for emergencies.
                      </DiscItem>
                      <DiscItem n="5">
                        Sessions may be in-person or remote. I understand no physical touch is involved.
                      </DiscItem>
                      <DiscItem n="6">
                        Confidentiality — Sessions are confidential, except as required by law.
                      </DiscItem>
                      <DiscItem n="7">
                        Release of Liability — I hereby release Vidya's Holistic Healings LLC and its
                        practitioners from any and all claims or liabilities arising out of sessions provided.
                        I take full responsibility for my own health and well-being.
                      </DiscItem>

                      <p style={{
                        margin: '18px 0 4px', paddingTop: '14px',
                        borderTop: '1px solid rgba(165,141,102,0.18)',
                        fontStyle: 'italic', color: 'rgba(196,169,110,0.85)',
                      }}>
                        By checking the box below you agree to this Disclaimer & Client Consent.
                      </p>
                    </div>
                  )}
                </div>

                {/* Consent checkbox */}
                <label style={{
                  display: 'flex', alignItems: 'flex-start', gap: '12px',
                  cursor: 'pointer', marginTop: '4px',
                  fontFamily: "'Jost', sans-serif", fontWeight: 300,
                  fontSize: '12px', lineHeight: 1.6, color: 'rgba(192,213,214,0.75)',
                }}>
                  <input
                    type="checkbox" checked={form.consent} onChange={e => set('consent', e.target.checked)}
                    required
                    style={{
                      appearance: 'none', WebkitAppearance: 'none',
                      width: '16px', height: '16px', flexShrink: 0, marginTop: '2px',
                      border: '1px solid rgba(165,141,102,0.5)', borderRadius: '3px',
                      cursor: 'pointer', background: form.consent ? '#A58D66' : 'transparent',
                      backgroundImage: form.consent
                        ? "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><path d='M3 8 L7 12 L13 4' stroke='%23041F2B' stroke-width='2' fill='none' stroke-linecap='round' stroke-linejoin='round'/></svg>\")"
                        : 'none',
                      backgroundSize: 'contain', transition: 'all 200ms',
                    }}
                  />
                  <span>
                    I have read and agree to the{' '}
                    <button
                      type="button" onClick={() => setShowDisclaimer(true)}
                      style={{
                        background: 'none', border: 'none', padding: 0,
                        color: '#C4A96E', textDecoration: 'underline',
                        textDecorationColor: 'rgba(196,169,110,0.4)',
                        textUnderlineOffset: '3px', cursor: 'pointer', font: 'inherit',
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
                  type="submit" disabled={!form.consent || loading}
                  style={{
                    fontFamily: "'Cinzel', serif", fontSize: '12px', fontWeight:600, letterSpacing: '0.18em',
                    textTransform: 'uppercase', marginTop: '8px',
                    background: form.consent && !loading ? '#A58D66' : 'rgba(165,141,102,0.3)',
                    color: form.consent && !loading ? '#041F2B' : 'rgba(4,31,43,0.6)',
                    border: 'none', borderRadius: '5px', padding: '16px',
                    cursor: form.consent && !loading ? 'pointer' : 'not-allowed',
                    boxShadow: form.consent && !loading ? '0 0 20px rgba(165,141,102,0.25)' : 'none',
                    transition: 'background 250ms',
                  }}
                  onMouseEnter={e => { if (form.consent && !loading) e.currentTarget.style.background = '#C4A96E'; }}
                  onMouseLeave={e => { if (form.consent && !loading) e.currentTarget.style.background = '#A58D66'; }}>
                  {loading ? 'Sending…' : 'Submit Intake & Begin My Journey'}
                </button>

              </form>
            )}
          </div>

        </div>
      </section>
    </SiteLayout>
  );
}
