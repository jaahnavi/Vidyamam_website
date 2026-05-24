import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SectionHeading } from "@/components/site/SectionHeading";

interface Chakra {
  id: string;
  name: string;
  sanskrit: string;
  location: string;
  color: string;
  y: number;         // <-- SVG y-coordinate, replaces position.top
  theme: string;
  description: string;
  benefits: string;
}

// === TUNE THESE TO YOUR SVG ===
const VIEWBOX = '0 0 512 512';   // copy from your silhouette.svg
const SPINE_X = 256;             // x-coordinate of the body's spine
// ==============================

const chakras: Chakra[] = [
  { id: 'crown',     name: 'Crown Chakra',        sanskrit: 'Sahasrara',   location: 'Top of Head',        color: '#9B59B6', y: 8,  theme: 'Spiritual Awareness', description: 'Supports cosmic consciousness and spiritual connection, enhancing enlightenment.', benefits: 'Divine wisdom, universal connection, and inner peace.' },
  { id: 'third-eye', name: 'Third Eye Chakra',    sanskrit: 'Ajna',        location: 'Between Eyebrows',   color: '#5B7EC8', y: 70, theme: 'Inner Insight',       description: 'Encourages intuition, reflection, and expanded awareness.',                       benefits: 'Intuition, clarity, and psychic abilities.' },
  { id: 'throat',    name: 'Throat Chakra',       sanskrit: 'Vishuddha',   location: 'Throat',             color: '#4FC3F7', y: 135, theme: 'Clear Expression',    description: 'Helps with honest expression and a more authentic voice.',                        benefits: 'Communication, self-expression, and truth.' },
  { id: 'heart',     name: 'Heart Chakra',        sanskrit: 'Anahata',     location: 'Center of Chest',    color: '#66BB6A', y: 220, theme: 'Compassion',          description: 'Brings emotional wellness, compassion, and nurturing connections.',               benefits: 'Love, compassion, and emotional balance.' },
  { id: 'solar',     name: 'Solar Plexus Chakra', sanskrit: 'Manipura',    location: 'Upper Abdomen',      color: '#FDD835', y: 285, theme: 'Inner Strength',      description: 'Strengthens confidence, authenticity, and a grounded sense of self.',             benefits: 'Personal power, confidence, and self-esteem.' },
  { id: 'sacral',    name: 'Sacral Chakra',       sanskrit: 'Svadhisthana',location: 'Lower Abdomen',      color: '#FF9800', y: 340, theme: 'Vital Sensation',     description: 'Inspires creativity, flow, and a joyful connection to life.',                     benefits: 'Creativity, passion, and emotional flow.' },
  { id: 'root',      name: 'Root Chakra',         sanskrit: 'Muladhara',   location: 'Base of Spine',      color: '#E57373', y: 390, theme: 'Grounding',           description: 'Supports centred connection and steadiness in holistic healings sessions.',        benefits: 'Stability, security, and grounding.' },
];

export default function ChakraVisualization() {
  const [hoveredChakra, setHoveredChakra] = useState<string | null>(null);
  const active = chakras.find((c) => c.id === hoveredChakra) ?? null;

  return (
    <div className="w-full relative overflow-hidden flex items-center justify-center py-8 px-6">
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#083A4F] to-[#0a2d3c]" />
      <div className="absolute inset-0 bg-gradient-to-tr from-[#A58D66]/5 via-transparent to-[#407E8C]/10" />
      <div className="absolute top-0 left-0 w-full h-full opacity-40">
        <div className="absolute top-20 left-10 w-96 h-96 bg-[#A58D66]/15 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#407E8C]/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#A58D66]/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl w-full relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-10"
        >
          <SectionHeading eyebrow="Energy Centers" align="center" />
          <h2 className="text-5xl md:text-6xl text-[#E5E1DD] mb-4 tracking-wide" style={{ fontFamily: 'var(--font-serif)' }}>
            Chakra Overview
          </h2>
          <p className="text-lg text-[#C0D5D6] max-w-2xl mx-auto font-light">
            These seven chakra centers offer a complete, soul-technical introduction to the energetic centers often considered in holistic healings sessions
          </p>
        </motion.div>

        {/* Two-column layout */}
        <div className="relative w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-[420px_1fr] gap-10 md:gap-16 items-center">
          {/* LEFT — single SVG containing silhouette + dots */}
          <div className="mx-auto md:mx-0" style={{ width: '420px', height: '500px' }}>
            <svg
              viewBox={VIEWBOX}
              preserveAspectRatio="xMidYMid meet"
              className="w-full h-full"
            >
              <defs>
                {/* Reusable glow filter */}
                <filter id="chakra-glow" x="-100%" y="-100%" width="300%" height="300%">
                  <feGaussianBlur stdDeviation="6" />
                </filter>
                <filter id="chakra-glow-soft" x="-100%" y="-100%" width="300%" height="300%">
                  <feGaussianBlur stdDeviation="14" />
                </filter>
              </defs>

              {/* === SILHOUETTE BODY ===
                   Replace the contents of this <g> with the <path>/<g>/<polygon>
                   from inside your silhouette.svg.
                   Just open silhouette.svg, copy everything BETWEEN <svg> and </svg>,
                   and paste it here.
              */}
              
              <g
                opacity={0.55}
                style={{
                  filter:
                    'brightness(3) sepia(100%) hue-rotate(160deg) saturate(0.5) drop-shadow(0 0 2px #C4A96E) drop-shadow(0 0 12px rgba(196,169,110,0.45))',
                }}
              >
                <path fill="#000000"
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
                  C388.165,401.474,328.891,383.849,328.891,383.849z"/>
              </g>
                {/* === CHAKRA DOTS === */}
                {chakras.map((c) => {
                  const isActive = hoveredChakra === c.id;
                  return (
                    <g
                      key={c.id}
                      style={{ cursor: 'pointer' }}
                      onMouseEnter={() => setHoveredChakra(c.id)}
                      onMouseLeave={() => setHoveredChakra(null)}
                    >
                      {/* Big invisible hit area */}
                      <circle cx={SPINE_X} cy={c.y} r={36} fill="transparent" />

                      {/* Outer gold glow */}
                      <motion.circle
                        cx={SPINE_X}
                        cy={c.y}
                        fill="#A58D66"
                        filter="url(#chakra-glow-soft)"
                        animate={{
                          r: isActive ? 70 : 34,
                          opacity: isActive ? 0.9 : 0.45,
                        }}
                        transition={{ duration: 0.4 }}
                      />

                      {/* Middle chakra-color glow */}
                      <motion.circle
                        cx={SPINE_X}
                        cy={c.y}
                        fill={c.color}
                        filter="url(#chakra-glow)"
                        animate={{
                          r: isActive ? 44 : 22,
                          opacity: isActive ? 0.85 : 0.55,
                        }}
                        transition={{ duration: 0.4 }}
                      />

                      {/* Ring */}
                      <motion.circle
                        cx={SPINE_X}
                        cy={c.y}
                        fill="none"
                        stroke={c.color}
                        animate={{
                          r: isActive ? 26 : 20,
                          strokeWidth: isActive ? 3 : 2,
                        }}
                        transition={{ duration: 0.3 }}
                      />

                      {/* Core dot */}
                      <motion.circle
                        cx={SPINE_X}
                        cy={c.y}
                        fill={c.color}
                        animate={{
                          r: isActive ? [6, 7.5, 6] : 6,
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          repeatType: 'loop',
                        }}
                      />
                    </g>
                  );
                })}
            </svg>
          </div>

          {/* RIGHT — info panel (unchanged) */}
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
                          className="inline-flex px-2 py-1 mb-4 rounded-full text-sm font-medium backdrop-blur-sm whitespace-nowrap"
                          style={{
                            background: `${active.color}20`,
                            color: active.color,
                            border: `1px solid ${active.color}40`,
                          }}
                        >
                          {active.location}
                         </div>

                        <p className="text-[13px] font-semibold uppercase tracking-[0.24em] mb-2" style={{ color: active.color }}>
                          {active.theme}
                        </p>
                        <h3 className="text-3xl md:text-4xl font-semibold leading-tight" style={{ color: active.color, fontFamily: 'var(--font-serif)' }}>
                          {active.name}
                        </h3>
                        <p className="text-m text-slate-400 italic mt-1">{active.sanskrit}</p>
                     
                        
                      </div>
                    </div>

                    <div
                      className="h-px w-full mb-5"
                      style={{ background: `linear-gradient(to right, ${active.color}55, transparent)` }}
                    />

                    <p className="text-base text-slate-200 leading-relaxed mb-5 font-light">{active.description}</p>

                    <div>
                      <p className="text-[12px] font-semibold uppercase tracking-[0.22em] mb-2" style={{ color: `${active.color}cc` }}>
                        Benefits
                      </p>
                      <p className="text-sm text-slate-300 leading-relaxed font-light">{active.benefits}</p>
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
                  className="w-full text-left px-2"
                >
                  <p className="text-[13px] font-semibold uppercase tracking-[0.24em] text-[#A58D66] mb-3">
                    Seven Centers · One System
                  </p>
                  <h3 className="text-3xl md:text-4xl text-[#E5E1DD] mb-4 leading-tight" style={{ fontFamily: 'var(--font-serif)' }}>
                    Hover a chakra to begin
                  </h3>
                  <p className="text-base text-[#C0D5D6]/70 leading-relaxed font-light max-w-md">
                    Each energy center governs a distinct quality of body, mind, and spirit.
                    Move along the spine to explore how each one shapes the work we do together.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}

