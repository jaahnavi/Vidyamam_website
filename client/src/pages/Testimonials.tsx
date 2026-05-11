import { useRef, useState } from 'react';
import { Seo } from '@/components/site/Seo';
import { SiteLayout } from '@/components/site/SiteLayout';
import ScrollToTop  from '@/components/site/scrolltotop';

const mandala1 = '/1.svg';

const ALL_REVIEWS_LINK =
  'https://www.google.com/maps/place/Dr+Vidya\'s+Holistic+Healing+Center/@18.4754285,73.8614218,17z/data=!4m8!3m7!1s0x3bc2ebd7612fe59f:0xaa69d0ea1ab65ee0!8m2!3d18.4754285!4d73.8614218!9m1!1b1!16s%2Fg%2F11vwd97pwn?hl=en-US';

const TESTIMONIALS = [
  {
    quote: 'I feel very happy & fortunate to share my feedback on Vidyatai\'s healing treatment. I was badly suffering with cervical spondylosis a few years back. After 2–3 months of allopathy medicine, nothing had changed — neck pain was unbearable. When I approached Vidyatai, after only 4 days of treatment I recovered fully. I referred her to a friend with the same problem, and surprisingly he also got full relief. Even today, if I face any neck pain, Vidyatai treats it from the US and I get relief in 2–3 hours. Just like a miracle.',
    author: 'Viv Pasarkar',
    location: 'Pune, India · 4 months ago',
    concern: 'Cervical Spondylosis',
    link: 'https://www.google.com/maps/reviews/@18.4754285,73.8614218,17z/data=!4m6!14m5!1m4!2m3!1sCi9DQUlRQUNvZENodHljRjlvT2tGeFZVTjVkMGxVTWtvek9XMURhelZtVEhRNVdIYxAB!2m1!1s0x0:0xaa69d0ea1ab65ee0?hl=en-US',
  },
  {
    quote: 'After a severe injury and nerve damage in my right arm that required major surgery, I came home to an arm I could barely use. A lifelong skeptic of alternative medicine, I felt I had nothing to lose when Vidya offered to try Pranic Healing. During my very first session, my thumb and index finger suddenly twitched. It may seem small, but for me it was nothing short of a miracle. More than the movement, what she gave me was hope — and that\'s what carried me through the long recovery ahead.',
    author: 'Kinjal Mehta',
    location: '5 months ago',
    concern: 'Post-Surgery Nerve Damage',
    link: 'https://www.google.com/maps/reviews/@18.4754285,73.8614218,17z/data=!4m6!14m5!1m4!2m3!1sCi9DQUlRQUNvZENodHljRjlvT210NFduSjFXVGxaTVhSZlptWjFhRGt3WVhkR2FtYxAB!2m1!1s0x0:0xaa69d0ea1ab65ee0?hl=en-US',
  },
  {
    quote: 'For two long years, I struggled with unbearable back pain. I tried everything I could think of, but nothing brought me relief. Then a close friend suggested I try Pranic Healing — and I cannot express how grateful I am that I listened. It has now been six beautiful, pain-free months. My back pain is gone, my mind feels lighter, and my life feels restored. Vidya ji, you didn\'t just heal my pain — you gave me my life back.',
    author: 'Ruchi Mishra',
    location: '5 months ago',
    concern: 'Chronic Back Pain',
    link: 'https://www.google.com/maps/reviews/@18.4754285,73.8614218,17z/data=!4m6!14m5!1m4!2m3!1sCi9DQUlRQUNvZENodHljRjlvT2pSNFNtTlFWemRpY1ZkM1puUXdPVlZrZEVsTFRWRRAB!2m1!1s0x0:0xaa69d0ea1ab65ee0?hl=en-US',
  },
  {
    quote: 'Taking classes from Vidya ma\'am was a turning point in my PCOS journey. Her approach addressed both physical and emotional aspects. Her expertise and genuine care created a supportive environment where I felt happy and confident to share my thoughts. Thanks to her guidance, I\'m now more active and getting my periods on time since I had sessions with her. I now live a life free from the constraints of PCOS.',
    author: 'Thoshini Garikipati',
    location: 'A year ago',
    concern: 'PCOS',
    link: 'https://www.google.com/maps/reviews/@18.4754285,73.8614218,17z/data=!4m6!14m5!1m4!2m3!1sChdDSUhNMG9nS0VJQ0FnSURUOG9qNzNnRRAB!2m1!1s0x0:0xaa69d0ea1ab65ee0?hl=en-US',
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollTo = (idx: number) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.children[idx] as HTMLElement | undefined;
    if (!card) return;
    const left = card.offsetLeft - (track.clientWidth - card.clientWidth) / 2;
    track.scrollTo({ left, behavior: 'smooth' });
    setActive(idx);
  };

  const onScroll = () => {
    const track = trackRef.current;
    if (!track) return;
    const center = track.scrollLeft + track.clientWidth / 2;
    let closest = 0, closestDist = Infinity;
    for (let i = 0; i < track.children.length; i++) {
      const c = track.children[i] as HTMLElement;
      const cardCenter = c.offsetLeft + c.clientWidth / 2;
      const d = Math.abs(cardCenter - center);
      if (d < closestDist) { closestDist = d; closest = i; }
    }
    if (closest !== active) setActive(closest);
  };

  const prev = () => scrollTo(Math.max(0, active - 1));
  const next = () => scrollTo(Math.min(TESTIMONIALS.length - 1, active + 1));

  return (
    <SiteLayout>
      <ScrollToTop />
      <Seo
        title="Testimonials"
        path="/testimonials"
        description="Read testimonials shared by clients of Vidya's Holistic Healing."
      />

      <style>{`
        .t-track::-webkit-scrollbar { display: none; }
      `}</style>

      <section style={{
        background: 'linear-gradient(180deg, #041F2B 0%, #083A4F 100%)',
        padding: '100px 0',
        position: 'relative', overflow: 'hidden',
      }}>
        {/* Mandala accent */}
        <img src={mandala1} alt="" aria-hidden="true"
          style={{
            position: 'absolute', top: '-120px', right: '-120px',
            width: '440px', height: '440px', opacity: 0.05,
            filter: 'invert(78%) sepia(28%) saturate(389%) hue-rotate(2deg) brightness(92%) contrast(85%)',
            pointerEvents: 'none',
          }} />

        {/* Header */}
        <div className="fade-in-section flex flex-col gap-7" style={{ textAlign: 'center', marginBottom: '60px', padding: '0 80px' }}>
          <span style={{
            fontFamily: "'Cinzel', serif", fontSize: '11px', letterSpacing: '0.26em',
            textTransform: 'uppercase', color: '#A58D66', display: 'block', marginBottom: '16px',
          }}>Client Experiences</span>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif", fontWeight: 400,
            fontSize: '44px', color: 'white', margin: 0,
          }}>Transformations</h2>
        </div>

        {/* Carousel */}
        <div  className="fade-in-section flex flex-col gap-7" style={{ position: 'relative', maxWidth: '1280px', margin: '0 auto 40px' }}>
          {/* Prev arrow */}
          <button
            onClick={prev}
            disabled={active === 0}
            aria-label="Previous testimonial"
            style={{
              position: 'absolute', left: '12px', top: '50%',
              transform: 'translateY(-50%)', zIndex: 3,
              width: '48px', height: '48px', borderRadius: '50%',
              background: 'rgba(4,31,43,0.85)',
              border: '1px solid rgba(165,141,102,0.4)',
              color: active === 0 ? 'rgba(165,141,102,0.3)' : '#C4A96E',
              cursor: active === 0 ? 'default' : 'pointer',
              fontSize: '18px', fontFamily: "'Cormorant Garamond', serif",
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              transition: 'all 200ms', backdropFilter: 'blur(6px)',
            }}
            onMouseEnter={e => {
              if (active !== 0) {
                e.currentTarget.style.background = 'rgba(165,141,102,0.18)';
                e.currentTarget.style.borderColor = '#C4A96E';
              }
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'rgba(4,31,43,0.85)';
              e.currentTarget.style.borderColor = 'rgba(165,141,102,0.4)';
            }}>
            ‹
          </button>

          {/* Next arrow */}
          <button
            onClick={next}
            disabled={active === TESTIMONIALS.length - 1}
            aria-label="Next testimonial"
            style={{
              position: 'absolute', right: '12px', top: '50%',
              transform: 'translateY(-50%)', zIndex: 3,
              width: '48px', height: '48px', borderRadius: '50%',
              background: 'rgba(4,31,43,0.85)',
              border: '1px solid rgba(165,141,102,0.4)',
              color: active === TESTIMONIALS.length - 1 ? 'rgba(165,141,102,0.3)' : '#C4A96E',
              cursor: active === TESTIMONIALS.length - 1 ? 'default' : 'pointer',
              fontSize: '18px', fontFamily: "'Cormorant Garamond', serif",
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              transition: 'all 200ms', backdropFilter: 'blur(6px)',
            }}
            onMouseEnter={e => {
              if (active !== TESTIMONIALS.length - 1) {
                e.currentTarget.style.background = 'rgba(165,141,102,0.18)';
                e.currentTarget.style.borderColor = '#C4A96E';
              }
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'rgba(4,31,43,0.85)';
              e.currentTarget.style.borderColor = 'rgba(165,141,102,0.4)';
            }}>
            ›
          </button>

          {/* Track */}
          <div
            ref={trackRef}
            onScroll={onScroll}
            className="t-track"
            style={{
              display: 'flex', gap: '28px',
              overflowX: 'auto', scrollSnapType: 'x mandatory',
              scrollbarWidth: 'none', msOverflowStyle: 'none',
              padding: '12px 80px',
            }}>
            {TESTIMONIALS.map((t, i) => (
              <article
                key={i}
                style={{
                  flex: '0 0 640px', maxWidth: '640px',
                  scrollSnapAlign: 'center',
                  background: active === i ? 'rgba(255,255,255,0.06)' : 'rgba(255,255,255,0.03)',
                  border: active === i ? '1px solid rgba(165,141,102,0.45)' : '1px solid rgba(165,141,102,0.15)',
                  borderTop: active === i ? '2px solid #A58D66' : '2px solid rgba(165,141,102,0.25)',
                  borderRadius: '8px', padding: '40px 36px',
                  transition: 'background 280ms ease-out, border 280ms ease-out',
                  display: 'flex', flexDirection: 'column', gap: '20px',
                  opacity: active === i ? 1 : 0.7,
                }}>
                <div style={{
                  display: 'flex', justifyContent: 'space-between',
                  alignItems: 'flex-start', gap: '16px',
                }}>
                  <div style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: '56px', lineHeight: 0.7, color: '#A58D66', opacity: 0.5,
                  }}>"</div>
                  <span style={{
                    fontFamily: "'Cinzel', serif", fontSize: '10px', letterSpacing: '0.18em',
                    textTransform: 'uppercase', color: '#C4A96E',
                    border: '1px solid rgba(196,169,110,0.4)', borderRadius: '3px',
                    padding: '5px 10px', whiteSpace: 'nowrap',
                  }}>{t.concern}</span>
                </div>

                <p style={{
                  fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic',
                  fontWeight: 300, fontSize: '19px', lineHeight: 1.75,
                  color: 'rgba(255,255,255,0.9)', margin: 0, flexGrow: 1,
                }}>{t.quote}</p>

                <div style={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
                  paddingTop: '16px', borderTop: '1px solid rgba(165,141,102,0.18)',
                }}>
                  <div>
                    <div style={{
                      fontFamily: "'Cinzel', serif", fontSize: '11.5px', letterSpacing: '0.18em',
                      textTransform: 'uppercase', color: '#407E8C',
                    }}>{t.author}</div>
                    <div style={{
                      fontFamily: "'Jost', sans-serif", fontSize: '12.5px',
                      color: 'rgba(192,213,214,0.65)', marginTop: '4px',
                    }}>{t.location}</div>
                  </div>
                  <a
                    href={t.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontFamily: "'Cinzel', serif", fontSize: '10.5px', letterSpacing: '0.18em',
                      textTransform: 'uppercase', color: 'rgba(165,141,102,0.85)',
                      textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px',
                    }}
                    onMouseEnter={e => { e.currentTarget.style.color = '#C4A96E'; }}
                    onMouseLeave={e => { e.currentTarget.style.color = 'rgba(165,141,102,0.85)'; }}>
                    <span>Verified · Google</span>
                    <span style={{ fontSize: '11px' }}>↗</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginBottom: '40px' }}>
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              style={{
                width: active === i ? '28px' : '8px', height: '8px',
                borderRadius: '4px',
                background: active === i ? '#A58D66' : 'rgba(165,141,102,0.3)',
                border: 'none', padding: 0, cursor: 'pointer',
                transition: 'all 280ms ease-out',
              }}
            />
          ))}
        </div>

        {/* All reviews link */}
        <div style={{ textAlign: 'center', padding: '0 80px' }}>
          <a
            href={ALL_REVIEWS_LINK}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "'Cinzel', serif", fontSize: '11.5px', letterSpacing: '0.2em',
              textTransform: 'uppercase', color: '#A58D66', textDecoration: 'none',
              border: '1px solid rgba(165,141,102,0.5)', borderRadius: '5px',
              padding: '14px 36px', display: 'inline-flex', gap: '10px', alignItems: 'center',
              transition: 'all 250ms',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'rgba(165,141,102,0.1)';
              e.currentTarget.style.color = '#C4A96E';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.color = '#A58D66';
            }}>
            Read All Google Reviews <span>↗</span>
          </a>
        </div>
      </section>
    </SiteLayout>
  );
}
