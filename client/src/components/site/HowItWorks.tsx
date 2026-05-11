import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface Chakra {
  id: string;
  name: string;
  sanskrit: string;
  location: string;
  color: string;
  y: number;
  theme: string;
  description: string;
  benefits: string;
}

const VIEWBOX = '0 0 512 512';
const SPINE_X = 256;

const chakras: Chakra[] = [
  { id: 'crown',     name: 'Crown Chakra',        sanskrit: 'Sahasrara • ',    location: 'Top of Head',      color: '#7E3FA0', y: 8,   theme: 'Spiritual Awareness • ', description: "It is considered the chakra of enlightenment, representing our connection to our life's purpose and spirituality. Those with a blocked crown chakra may seem narrow-minded, skeptical, or stubborn.", benefits: 'When this chakra is open, it is thought to help keep all the other chakras open and to bring the person bliss and enlightenment.' },
  { id: 'third-eye', name: 'Third Eye Chakra',    sanskrit: 'Ajna • ',         location: 'Between Eyebrows', color: '#3F5FAE', y: 70,  theme: 'Inner Insight • ',       description: 'People who have trouble listening to reality (who seem to not be in touch with their intuition) may also have a block. Since this chakra is physically located on the head, blockages can manifest as headaches, issues with sight or concentration, and hearing problems.',  benefits: "When open and in alignment, it's thought that people will follow their intuition and be able to see the big picture." },
  { id: 'throat',    name: 'Throat Chakra',       sanskrit: 'Vishuddha • ',    location: 'Throat',           color: '#1E8FC7', y: 135, theme: 'Clear Expression • ',    description: 'As one would expect, this chakra is connected to our ability to communicate verbally. Voice and throat problems, as well as any issues with the surrounding areas, such as the teeth, gums, and mouth, can indicate a blockage.', benefits: 'When in alignment, you will speak and listen with compassion and feel confident when you speak because you know you are being true to yourself with your words.' },
  { id: 'heart',     name: 'Heart Chakra',        sanskrit: 'Anahata • ',      location: 'Center of Chest',  color: '#3E8E41', y: 220, theme: 'Compassion • ',          description: "Blocks in our heart chakra can manifest in our physical health through heart problems, asthma, and weight issues. But blocks are often seen even more clearly through people's actions.", benefits: 'When out of alignment, it can make us feel lonely, insecure, and isolated.' },
  { id: 'solar',     name: 'Solar Plexus Chakra', sanskrit: 'Manipura • ',     location: 'Upper Abdomen',    color: '#C9A227', y: 285, theme: 'Inner Strength • ',      description: "Blockages in the third chakra are often experienced through digestive issues like ulcers, heartburn, eating disorders, and indigestion. It's the chakra of our personal power.", benefits: 'When aligned, it gives a boost to personal power, confidence, and self-esteem.' },
  { id: 'sacral',    name: 'Sacral Chakra',        sanskrit: 'Svadhisthana • ', location: 'Lower Abdomen',    color: '#E07A1F', y: 340, theme: 'Vital Sensation • ',     description: 'Issues with this chakra can be observed through problems with the associated organs, such as urinary tract infections, lower back pain, and impotence.', benefits: 'When aligned it can boost creativity, passion, and emotional flow.' },
  { id: 'root',      name: 'Root Chakra',          sanskrit: 'Muladhara • ',    location: 'Base of Spine',    color: '#C0392B', y: 390, theme: 'Grounding • ',           description: 'A blocked root chakra can manifest as physical issues, such as arthritis, constipation, or bladder or colon problems, or emotionally through feelings of insecurity about finances or our basic needs and well-being.', benefits: "When it's in alignment and open, we will feel grounded and secure, both physically and emotionally." },
];

type TabId = 'prana' | 'chakras' | 'techniques';

const tabs: { id: TabId; label: string; numeral: string }[] = [
  { id: 'chakras',    label: 'About Chakras',            numeral: 'I'   },
  { id: 'prana',      label: 'About Prana',              numeral: 'II'  },
  { id: 'techniques', label: 'Pranic Healing Techniques', numeral: 'III' },
];

const PAGE_BG_FROM   = '#F6F1E8';
const PAGE_BG_TO     = '#EFE7D6';
const TEXT_PRIMARY   = '#2A2520';
const TEXT_BODY      = '#4A4138';
const TEXT_MUTED     = '#7A6E5F';
const SURFACE        = 'rgba(255,253,247,0.85)';
const SURFACE_ACTIVE = 'rgba(255,253,247,1)';
const GOLD           = '#A58D66';

export default function HowItWorks() {
  const [activeTab, setActiveTab] = useState<TabId>('prana');
  const [hoveredChakra, setHoveredChakra] = useState<string | null>(null);
  const activeChakra = chakras.find((c) => c.id === hoveredChakra) ?? null;

  return (
    <div className="w-full relative overflow-hidden flex items-center justify-center py-8 px-12">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{ background: `linear-gradient(to bottom, ${PAGE_BG_FROM}, ${PAGE_BG_TO})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-tr from-[#A58D66]/8 via-transparent to-[#407E8C]/10" />
      <div className="absolute top-0 left-0 w-full h-full opacity-60">
        <div className="absolute top-20 left-10 w-96 h-96 bg-[#A58D66]/15 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#407E8C]/15 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#A58D66]/10 rounded-full blur-3xl" />
      </div>

      <div className="w-full relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12"
        >
          <p
            className="text-[9px] tracking-[0.26em] uppercase mb-3"
            style={{ fontFamily: "'Cinzel', serif", color: '#407E8C' }}
          >
            The Foundation
          </p>
          <h2
            className="text-5xl md:text-6xl mb-4 tracking-wide"
            style={{ fontFamily: 'var(--font-serif)', color: TEXT_PRIMARY }}
          >
            How It Works
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto font-light"
            style={{ color: TEXT_BODY }}
          >
            A grounded introduction to the principles behind every session — the energy that animates us,
            the centers it flows through, and the techniques used to restore balance.
          </p>
        </motion.div>

        {/* Soft container for tabs + content */}
        <div
          style={{
            background: 'rgba(255,253,247,0.55)',
            border: '1px solid rgba(165,141,102,0.18)',
            borderRadius: '20px',
            padding: '32px',
            backdropFilter: 'blur(8px)',
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-[260px_1fr] gap-10 md:gap-14 items-start">
            {/* LEFT — vertical tab menu */}
            <nav className="flex md:flex-col gap-2 md:gap-3 overflow-x-auto md:overflow-visible">
              {tabs.map((t) => {
                const isActive = activeTab === t.id;
                return (
                  <button
                    key={t.id}
                    onClick={() => setActiveTab(t.id)}
                    className="group relative text-start flex-shrink-0 transition-all duration-300"
                    style={{
                      background: isActive ? SURFACE_ACTIVE : SURFACE,
                      border: isActive ? `1px solid ${GOLD}99` : `1px solid ${GOLD}33`,
                      borderRadius: '8px',
                      padding: '18px 20px',
                      cursor: 'pointer',
                      boxShadow: isActive
                        ? '0 4px 20px rgba(42,37,32,0.06)'
                        : '0 1px 4px rgba(42,37,32,0.03)',
                    }}
                  >
                    <span
                      aria-hidden
                      className="absolute left-0 top-3 bottom-3 w-[2px] rounded-full transition-all"
                      style={{ background: GOLD, opacity: isActive ? 1 : 0 }}
                    />
                    <span
                      className="block text-[10.5px] tracking-[0.24em] uppercase mb-1"
                      style={{ fontFamily: "'Cinzel', serif", color: isActive ? GOLD : `${GOLD}99` }}
                    >
                      {t.numeral}
                    </span>
                    <span
                      className="block text-base md:text-lg leading-tight"
                      style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        color: isActive ? TEXT_PRIMARY : TEXT_MUTED,
                        fontWeight: 500,
                      }}
                    >
                      {t.label}
                    </span>
                  </button>
                );
              })}
            </nav>

            {/* RIGHT — content area */}
            <div className="min-h-[640px] relative">
              <AnimatePresence mode="wait">
                {activeTab === 'prana' && (
                  <motion.div
                    key="prana"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <PranaPanel />
                  </motion.div>
                )}

                {activeTab === 'chakras' && (
                  <motion.div
                    key="chakras"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <ChakrasPanel
                      hoveredChakra={hoveredChakra}
                      setHoveredChakra={setHoveredChakra}
                      active={activeChakra}
                    />
                  </motion.div>
                )}

                {activeTab === 'techniques' && (
                  <motion.div
                    key="techniques"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <TechniquesPanel />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* -------------------- TAB: Prana -------------------- */
function PranaPanel() {
  const pranaSections = [
    {
      id: 'solar',
      title: 'Solar Prana',
      glow: '#D4AF37',
      description: 'Derived from sunlight. It invigorates the whole body and promotes excellent physical health.',
    },
    {
      id: 'air',
      title: 'Air Prana',
      glow: '#5DA9B3',
      description: 'Absorbed through the lungs during breathing and directly through the skin and chakras.',
    },
    {
      id: 'earth',
      title: 'Earth Prana',
      glow: '#C08B5C',
      description: 'Absorbed through the soles of the feet. A grounding energy that increases your physical growth and endurance.',
    },
  ];

  const [activeSection, setActiveSection] = useState('solar');
  const active = pranaSections.find((s) => s.id === activeSection) ?? pranaSections[0];

  return (
    <div className="w-full flex flex-col items-start gap-12">
      {/* Understanding Prana */}
      <div className="max-w-2xl">
        <h3
          className="text-3xl mb-4 tracking-wide"
          style={{ fontFamily: 'var(--font-serif)', color: '#2A2520' }}
        >
          Understanding Prana
        </h3>
        <p
          className="text-base md:text-lg font-light leading-relaxed mb-3"
          style={{ color: '#4A4138' }}
        >
          Prana is a Sanskrit word that literally translates to "life-force." It is the invisible bio-energy or vital energy that keeps the body alive and maintains a state of good health. In your body, Prana acts as the fuel that powers every heartbeat, every thought, and every cellular process.
        </p>
        <p
          className="text-base md:text-lg font-light leading-relaxed"
          style={{ color: '#4A4138' }}
        >
          Without Prana, there is no life. When your Prana is high and flowing freely, you feel vibrant, focused, and resilient. When it is depleted or blocked, you may experience fatigue, stress, or physical illness.
        </p>
      </div>

      {/* Where do we get Prana? */}
      <div className="relative flex flex-col items-start">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/3 left-0 w-[380px] h-[380px] rounded-full bg-[#A58D66]/10 blur-3xl" />
        </div>
        <div className="flex flex-col items-start">
          <div className="max-w-2xl mb-12">
            <h3
              className="text-3xl mb-4 tracking-wide"
              style={{ fontFamily: 'var(--font-serif)', color: '#2A2520' }}
            >
              Where do we get Prana?
            </h3>
            <p
              className="text-base md:text-lg font-light leading-relaxed"
              style={{ color: '#4A4138' }}
            >
              We are constantly immersed in a sea of life-force. By understanding these sources, we can learn to recharge our internal battery more effectively. As a practitioner, I help you tap into the three primary natural sources of Prana:
            </p>
          </div>

          <div className="relative w-full h-[450px] flex items-center">
            {/* Prana nodes */}
            <div className="absolute top-[0px] left-0 flex items-center gap-30 z-20 pl-15 pr-15 ">
              <motion.div
                onMouseEnter={() => setActiveSection('solar')}
                className="cursor-pointer"
                animate={{ scale: activeSection === 'solar' ? 1.08 : 1 }}
                transition={{ duration: 0.3 }}
              >
                <PranaNode active={activeSection === 'solar'} color="#D4AF37" title="Solar" subtitle="Vitality" />
              </motion.div>

              <motion.div
                onMouseEnter={() => setActiveSection('air')}
                className="cursor-pointer"
                animate={{ scale: activeSection === 'air' ? 1.08 : 1 }}
                transition={{ duration: 0.3 }}
              >
                <PranaNode active={activeSection === 'air'} color="#5DA9B3" title="Air" subtitle="Breath" />
              </motion.div>

              <motion.div
                onMouseEnter={() => setActiveSection('earth')}
                className="cursor-pointer"
                animate={{ scale: activeSection === 'earth' ? 1.08 : 1 }}
                transition={{ duration: 0.3 }}
              >
                <PranaNode active={activeSection === 'earth'} color="#C08B5C" title="Earth" subtitle="Grounding" />
              </motion.div>
            </div>

            {/* Dynamic info panel */}
            <div className="mt-0 min-h-[220px] relative max-w-2xl w-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.id}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -18 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  <h3
                    className="text-xl mb-4"
                    style={{ color: active.glow, fontFamily: 'var(--font-serif)' }}
                  >
                    {active.title}
                  </h3>
                  <p
                    className="text-base md:text-lg leading-relaxed font-light"
                    style={{ color: '#4A4138' }}
                  >
                    {active.description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* -------------------- Prana Node -------------------- */
function PranaNode({
  active,
  color,
  title,
  subtitle,
}: {
  active: boolean;
  color: string;
  title: string;
  subtitle: string;
}) {
  return (
    <motion.div
      className="relative flex flex-col items-start"
      animate={{ y: active ? -4 : 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="absolute rounded-full"
        animate={{ width: active ? 120 : 90, height: active ? 120 : 90, opacity: active ? 0.35 : 0.16 }}
        transition={{ duration: 0.35 }}
        style={{ background: color, filter: 'blur(30px)' }}
      />
      <motion.div
        className="relative w-20 h-20 rounded-full border flex items-center justify-center backdrop-blur-md"
        animate={{ borderColor: active ? `${color}` : `${color}77` }}
        transition={{ duration: 0.3 }}
        style={{
          background: `${color}10`,
          boxShadow: active ? `0 0 30px ${color}55` : `0 0 10px ${color}22`,
        }}
      >
        <div className="text-start">
          <p
            className="text-sm uppercase tracking-[0.18em]"
            style={{ color, fontFamily: "'Cinzel', serif" }}
          >
            {title}
          </p>
          <p className="text-[11px] mt-1" style={{ color: '#7A6E5F' }}>
            {subtitle}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* -------------------- TAB: Techniques -------------------- */
function TechniquesPanel() {
  const laws = [
    { numeral: 'I',  name: 'The Law of Self-Recovery', desc: 'The body is capable of healing itself at a certain rate.' },
    { numeral: 'II', name: 'The Law of Life Energy',   desc: 'By increasing Prana in the affected part, the rate of healing is accelerated.' },
  ];
  const steps = [
    { num: '01', name: 'Cleansing',  desc: 'Before adding new energy, I gently remove diseased or congested energy from your aura and chakras. Think of this as clearing the dust so the light can shine through.' },
    { num: '02', name: 'Energizing', desc: "Once the blockages are removed, I project fresh Prana into the affected areas. This boosts your body's natural defense and repair mechanisms, allowing for faster recovery and deep emotional relief." },
  ];

  return (
    <article className="max-w-2xl w-full">
      <p className="text-[11px] tracking-[0.24em] uppercase mb-3" style={{ fontFamily: "'Cinzel', serif", color: GOLD }}>
        Energy Medicine
      </p>
      <h3 className="text-3xl md:text-4xl mb-6 leading-tight tracking-wide" style={{ fontFamily: 'var(--font-serif)', color: TEXT_PRIMARY }}>
        Pranic Healing Techniques
      </h3>

      <p className="text-base md:text-lg leading-relaxed mb-4 font-light" style={{ color: TEXT_BODY }}>
        Pranic Healing is a highly developed and tested system of energy treatment that uses <em>prana</em> to heal the whole physical body. It is a synthesis of ancient esoteric healing methods that have been rediscovered, researched and tested over decades.
      </p>
      <p className="text-base leading-relaxed mb-8 font-light" style={{ color: TEXT_BODY }}>
        Unlike other healing methods, Pranic Healing does not require drugs, gadgets, nor is there any physical contact with the subject. Physical contact is not required because the practitioner is working on the bioplasmic or energy body, and not directly on the physical body.
      </p>

      <div className="h-px mb-8" style={{ background: 'linear-gradient(to right, rgba(165,141,102,0.5), transparent)' }} />

      <p className="text-[11px] tracking-[0.2em] uppercase mb-4" style={{ fontFamily: "'Cinzel', serif", color: GOLD }}>
        How does it work?
      </p>
      <div className="space-y-3 mb-8">
        {laws.map((law) => (
          <div key={law.numeral} className="flex gap-4 items-start p-4 rounded-lg" style={{ background: 'rgba(165,141,102,0.06)', border: '1px solid rgba(165,141,102,0.15)' }}>
            <span className="shrink-0 text-xs tracking-[0.22em] pt-0.5" style={{ fontFamily: "'Cinzel', serif", color: GOLD }}>{law.numeral}</span>
            <div>
              <p className="text-base mb-1" style={{ fontFamily: 'var(--font-serif)', color: TEXT_PRIMARY, fontWeight: 500 }}>{law.name}</p>
              <p className="text-sm leading-relaxed font-light" style={{ color: TEXT_BODY }}>{law.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="h-px mb-8" style={{ background: 'linear-gradient(to right, rgba(165,141,102,0.5), transparent)' }} />

      <p className="text-[11px] tracking-[0.2em] uppercase mb-5" style={{ fontFamily: "'Cinzel', serif", color: GOLD }}>
        The session, in two steps
      </p>
      <div className="space-y-6">
        {steps.map((step) => (
          <div key={step.num} className="flex gap-5 items-start">
            <span className="shrink-0 text-4xl leading-none" style={{ fontFamily: 'var(--font-serif)', color: 'rgba(165,141,102,0.35)', fontWeight: 300 }}>{step.num}</span>
            <div className="pt-1">
              <p className="text-base md:text-lg mb-2" style={{ fontFamily: 'var(--font-serif)', color: TEXT_PRIMARY, fontWeight: 500 }}>{step.name}</p>
              <p className="text-sm md:text-base leading-relaxed font-light" style={{ color: TEXT_BODY }}>{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}

/* -------------------- TAB: Chakras -------------------- */
function ChakrasPanel({
  hoveredChakra,
  setHoveredChakra,
  active,
}: {
  hoveredChakra: string | null;
  setHoveredChakra: (id: string | null) => void;
  active: Chakra | null;
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[420px_1fr] gap-10 md:gap-14 items-center">
      {/* Silhouette + chakra dots */}
      <div className="mx-auto md:mx-0" style={{ width: '420px', height: '500px' }}>
        <svg viewBox={VIEWBOX} preserveAspectRatio="xMidYMid meet" className="w-full h-full">
          <defs>
            <filter id="chakra-glow" x="-100%" y="-100%" width="300%" height="300%">
              <feGaussianBlur stdDeviation="6" />
            </filter>
            <filter id="chakra-glow-soft" x="-100%" y="-100%" width="100%" height="100%">
              <feGaussianBlur stdDeviation="14" />
            </filter>
          </defs>

          <g
            opacity={0.75}
            style={{
              filter:
                'sepia(100%) hue-rotate(160deg) saturate(0.5) drop-shadow(0 0 2px #C4A96E) drop-shadow(0 0 12px rgba(196,169,110,0.45))',
            }}
          >
            <path
              fill="#000000"
              d="M482.752,435.574c-6.928-8.1-23.127-40.492-23.127-40.492s2.676-3.448,0-15.051
                 c-3.48-15.035-18.514-13.886-21.978-17.349c-3.479-3.472-33.549-58.424-35.863-64.792c-2.314-6.369-27.772-78.662-27.772-78.662
                 c-8.549-37.604-24.308-53.221-45.121-57.85c-20.64-4.581-31.817-3.471-41.075-11.571c-5.778-5.054-5.573-8.809-5.573-24.056
                 c0,0,6.235-5.927,10.784-14.122c5.195-9.375,7.746-22.907,7.746-22.907c5.211-2.086,5.274-4.684,7.525-12.965
                 c3.118-11.461,2.897-19.317-5.431-19.317C304.836,19.066,286.085,0,256,0c-30.07,0-48.821,19.066-46.853,56.441
                 c-8.328,0-8.564,7.856-5.432,19.317c2.251,8.281,2.314,10.879,7.51,12.965c0,0,2.55,13.532,7.762,22.907
                 c4.55,8.194,10.784,14.122,10.784,14.122c0,15.247,0.189,19.002-5.589,24.056c-9.242,8.1-20.435,6.99-41.059,11.571
                 c-20.828,4.628-36.572,20.246-45.12,57.85c0,0-25.457,72.294-27.771,78.662c-2.314,6.368-32.401,61.32-35.864,64.792
                 c-3.464,3.463-18.514,2.314-21.978,17.349c-2.676,11.603,0,15.051,0,15.051s-16.2,32.392-23.143,40.492
                 c-6.942,8.092,5.794,13.878,13.886,3.464c0.944,1.409,4.156,2.424,7.793,2.912c-28.228,31.251-12.138,71.964,31.55,69.98
                 C118.291,510.3,256,485.316,256,485.316S393.707,510.3,429.54,511.93c43.688,1.984,59.778-38.729,31.534-69.98
                 c3.652-0.488,6.864-1.503,7.808-2.912C476.974,449.452,489.695,443.666,482.752,435.574z M183.123,383.849
                 c0,0-59.274,17.626-96.192,34.234c7.604-14.154,16.357-33.423,16.357-33.423l37.029-53.212l29.504-64.218
                 c0,0,9.257,34.714,12.138,39.917C184.855,312.35,183.123,383.849,183.123,383.849z M328.891,383.849c0,0-1.732-71.498,1.149-76.702
                 c2.897-5.203,12.154-39.917,12.154-39.917l29.504,64.218l37.013,53.212c0,0,8.769,19.27,16.373,33.423
                 C388.165,401.474,328.891,383.849,328.891,383.849z"
            />
          </g>

          {chakras.map((c) => {
            const isActive = hoveredChakra === c.id;
            return (
              <g
                key={c.id}
                style={{ cursor: 'pointer' }}
                onMouseEnter={() => setHoveredChakra(c.id)}
                onMouseLeave={() => setHoveredChakra(null)}
              >
                <circle cx={SPINE_X} cy={c.y} r={36} fill="transparent" />
                <motion.circle
                  cx={SPINE_X} cy={c.y}
                  fill={'#F4F1EE'}
                  filter="url(#chakra-glow-soft)"
                  animate={{ r: isActive ? 70 : 34, opacity: isActive ? 0.55 : 0.25 }}
                  transition={{ duration: 0.4 }}
                />
                <motion.circle
                  cx={SPINE_X} cy={c.y}
                  fill={c.color}
                  filter="url(#chakra-glow)"
                  animate={{ r: isActive ? 44 : 22, opacity: isActive ? 0.7 : 0.45 }}
                  transition={{ duration: 0.4 }}
                />
                <motion.circle
                  cx={SPINE_X} cy={c.y}
                  fill="none"
                  stroke={c.color}
                  animate={{ r: isActive ? 26 : 20, strokeWidth: isActive ? 3 : 2 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.circle
                  cx={SPINE_X} cy={c.y}
                  fill={c.color}
                  animate={{ r: isActive ? [6, 7.5, 6] : 6 }}
                  transition={{ duration: 1.7, repeat: Infinity, repeatType: 'loop' }}
                />
              </g>
            );
          })}
        </svg>
      </div>

      {/* Info panel */}
      <div className="min-h-[420px] flex items-start pt-0">
        <AnimatePresence mode="wait">
          {active ? (
            <motion.div
              key={active.id}
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -12 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="relative">
                <div className="flex items-start gap-4 mb-5">
                  <div>
                    <div
                      className="inline-flex px-2 py-1 mb-4 rounded-full text-sm font-medium whitespace-nowrap"
                      style={{
                        background: `${active.color}15`,
                        color: active.color,
                        border: `1px solid ${active.color}55`,
                      }}
                    >
                      {active.sanskrit} {active.theme} {active.location}
                    </div>
                    <h3
                      className="text-xl md:text-2xl font-semibold leading-tight"
                      style={{ color: active.color, fontFamily: 'var(--font-serif)' }}
                    >
                      {active.name}
                    </h3>
                  </div>
                </div>
                <div
                  className="h-px w-full mb-5"
                  style={{ background: `linear-gradient(to right, ${active.color}55, transparent)` }}
                />
                <p className="text-base leading-relaxed mb-5 font-light" style={{ color: TEXT_BODY }}>
                  {active.description}
                </p>
                <div>
                  <p
                    className="text-[10.5px] font-semibold uppercase tracking-[0.22em] mb-2"
                    style={{ color: active.color }}
                  >
                    Benefits
                  </p>
                  <p className="text-sm leading-relaxed font-light" style={{ color: TEXT_BODY }}>
                    {active.benefits}
                  </p>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="empty-state"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="w-full text-start px-2"
            >
              <p
                className="text-[11px] font-semibold uppercase tracking-[0.24em] mb-3"
                style={{ color: GOLD }}
              >
                Seven Centers · One System
              </p>
              <h3
                className="text-3xl md:text-4xl mb-4 leading-tight"
                style={{ fontFamily: 'var(--font-serif)', color: TEXT_PRIMARY }}
              >
                Hover a chakra to begin
              </h3>
              <p
                className="text-base leading-relaxed font-light max-w-md"
                style={{ color: TEXT_MUTED }}
              >
                Each energy center governs a distinct quality of body, mind, and spirit.
                Move along the spine to explore how each one shapes the work we do together.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
