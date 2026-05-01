import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SectionHeading } from "@/components/site/SectionHeading";
interface Chakra {
  id: string;
  name: string;
  sanskrit: string;
  location: string;
  color: string;
  position: { top: string; left: string };
  theme: string;
  description: string;
  benefits: string;
}

const chakras: Chakra[] = [
  {
    id: 'crown',
    name: 'Crown Chakra',
    sanskrit: 'Sahasrara',
    location: 'Top of Head',
    color: '#9B59B6',
    position: { top: '-1%', left: '42.5%' },
    theme: 'Spiritual Awareness',
    description: 'Supports cosmic consciousness and spiritual connection, enhancing enlightenment.',
    benefits: 'Divine wisdom, universal connection, and inner peace.',
  },
  {
    id: 'third-eye',
    name: 'Third Eye Chakra',
    sanskrit: 'Ajna',
    location: 'Between Eyebrows',
    color: '#5B7EC8',
    position: { top: '9%', left: '42.5%' },
    theme: 'Inner Insight',
    description: 'Encourages intuition, reflection, and expanded awareness.',
    benefits: 'Intuition, clarity, and psychic abilities.',
  },
  {
    id: 'throat',
    name: 'Throat Chakra',
    sanskrit: 'Vishuddha',
    location: 'Throat',
    color: '#4FC3F7',
    position: { top: '20%', left: '42.5%' },
    theme: 'Clear Expression',
    description: 'Helps with honest expression and a more authentic voice.',
    benefits: 'Communication, self-expression, and truth.',
  },
  {
    id: 'heart',
    name: 'Heart Chakra',
    sanskrit: 'Anahata',
    location: 'Center of Chest',
    color: '#66BB6A',
    position: { top: '34%', left: '42.5%' },
    theme: 'Compassion',
    description: 'Brings emotional wellness, compassion, and nurturing connections.',
    benefits: 'Love, compassion, and emotional balance.',
  },
  {
    id: 'solar',
    name: 'Solar Plexus Chakra',
    sanskrit: 'Manipura',
    location: 'Upper Abdomen',
    color: '#FDD835',
    position: { top: '45%', left: '42.5%' },
    theme: 'Inner Strength',
    description: 'Strengthens confidence, authenticity, and a grounded sense of self.',
    benefits: 'Personal power, confidence, and self-esteem.',
  },
  {
    id: 'sacral',
    name: 'Sacral Chakra',
    sanskrit: 'Svadhisthana',
    location: 'Lower Abdomen',
    color: '#FF9800',
    position: { top: '55%', left: '42.5%' },
    theme: 'Vital Sensation',
    description: 'Inspires creativity, flow, and a joyful connection to life.',
    benefits: 'Creativity, passion, and emotional flow.',
  },
  {
    id: 'root',
    name: 'Root Chakra',
    sanskrit: 'Muladhara',
    location: 'Base of Spine',
    color: '#E57373',
    position: { top: '65%', left: '42.5%' },
    theme: 'Grounding',
    description: 'Supports centred connection and steadiness in holistic healing sessions.',
    benefits: 'Stability, security, and grounding.',
  },
];

export default function ChakraVisualization() {
  const [hoveredChakra, setHoveredChakra] = useState<string | null>(null);

  return (
    <div className="w-full relative overflow-hidden flex items-center justify-center py-8 px-6">
      {/* was: from-purple-100/40 via-blue-50/30 to-pink-100/40 light watercolour bg */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#083A4F] to-[#0a2d3c]" />
      <div className="absolute inset-0 bg-gradient-to-tr from-[#A58D66]/5 via-transparent to-[#407E8C]/10" />
      <div className="absolute top-0 left-0 w-full h-full opacity-40">
        {/* was: bg-purple-200/40, bg-blue-200/40, bg-pink-200/30 */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-[#A58D66]/15 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#407E8C]/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#A58D66]/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-6"
        >
        <SectionHeading
            eyebrow="Energy Centers"
            align="center"
          />
          {/* was: text-slate-800, text-slate-600 */}
          <h2 className="text-5xl md:text-6xl text-[#E5E1DD] mb-4 tracking-wide" style={{ fontFamily: 'var(--font-serif)' }}>
            Chakra Overview
          </h2>
          <p className="text-lg text-[#C0D5D6] max-w-2xl mx-auto font-light">
            These seven chakra centers offer a complete, soul-technical introduction to the energetic centers often considered in holistic healing sessions
          </p>
        </motion.div>

        <div className="relative w-full max-w-4xl mx-auto">
          <div className="relative mx-auto" style={{ width: '420px', height: '500px', position: 'relative' }}>
            <img
                src="/silhouette.svg"
                //src ="/silhoutte.png"
                alt=""
                //aria-hidden="true"
                className="h-full object-contain pointer-events-none select-none opacity-60"//absolute pointer-events-none select-none"
                  style={{
                    opacity: 0.55, /* was: 0.55 */
                    filter: 'brightness(3) sepia(100%) hue-rotate(160deg) saturate(0.5)', /* was: sepia(20%) hue-rotate(220deg) saturate(0.4) brightness(0.85) */
                    top: '-30px',
                    //left: '50%',
                    //transform: 'translateX(-50%)',
                    //height: '100%',
                    //width: 'auto',   // lets the SVG keep its natural proportions
                }}
            />

            {chakras.map((chakra, index) => (
              <motion.div
                key={chakra.id}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.6,
                  delay: 0.8 + index * 0.1,
                  ease: [0.34, 1.56, 0.64, 1],
                }}
                className="absolute"
                style={{
                  top: chakra.position.top,
                  left: chakra.position.left,
                  transform: 'translate(-50%, -50%)',
                }}
                onMouseEnter={() => setHoveredChakra(chakra.id)}
                onMouseLeave={() => setHoveredChakra(null)}
              >
                <div className="relative cursor-pointer group">
                  {/* Outer glow: gold shine radiating out (was: chakra.color) */}
                  <motion.div
                    className="absolute inset-0 rounded-full blur-2xl"
                    style={{
                      background: `radial-gradient(circle, #A58D6645 0%, transparent 70%)`,
                    }}
                    animate={{
                      scale: hoveredChakra === chakra.id ? 2.5 : 1.2,
                      opacity: hoveredChakra === chakra.id ? 0.9 : 0.5,
                    }}
                    transition={{ duration: 0.4 }}
                  />

                  {/* Middle glow: chakra color at centre fading to gold (was: pure chakra.color) */}
                  <motion.div
                    className="absolute inset-0 rounded-full blur-xl"
                    style={{
                      background: `radial-gradient(circle, ${chakra.color}70 0%, #A58D6635 50%, transparent 70%)`,
                    }}
                    animate={{
                      scale: hoveredChakra === chakra.id ? 2 : 1,
                      opacity: hoveredChakra === chakra.id ? 1 : 0.7,
                    }}
                    transition={{ duration: 0.4 }}
                  />

                  <motion.div
                    className="relative w-12 h-12 md:w-16 md:h-16 rounded-full border-2 flex items-center justify-center"
                    style={{
                      borderColor: chakra.color,
                      background: `radial-gradient(circle, ${chakra.color}30 0%, ${chakra.color}10 100%)`,
                      boxShadow: `0 0 20px ${chakra.color}40, inset 0 0 20px ${chakra.color}20`,
                    }}
                    animate={{
                      scale: hoveredChakra === chakra.id ? 1.3 : 1,
                      borderWidth: hoveredChakra === chakra.id ? 3 : 2,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      className="w-3 h-3 md:w-4 md:h-4 rounded-full"
                      style={{
                        backgroundColor: chakra.color,
                        boxShadow: `0 0 15px ${chakra.color}`,
                      }}
                      animate={{
                        scale: hoveredChakra === chakra.id ? [1, 1.2, 1] : 1,
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        repeatType: 'loop',
                      }}
                    />
                  </motion.div>

                  <AnimatePresence>
                    {hoveredChakra === chakra.id && (
                      <motion.div
                        initial={{ opacity: 0, x: -20, scale: 0.9 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        exit={{ opacity: 0, x: -20, scale: 0.9 }}
                        transition={{ duration: 0.3 }}
                        className="absolute left-20 top-1/2 -translate-y-1/2 w-72 md:w-80 pointer-events-none z-50"
                      >
                        {/* was: bg-white/90, rgba(0,0,0,0.15), inset rgba(255,255,255,0.8) */}
                        <div
                          className="relative backdrop-blur-xl rounded-2xl p-6 border shadow-2xl bg-[#061d28]/95"
                          style={{
                            borderColor: `${chakra.color}60`,
                            boxShadow: `0 20px 60px rgba(0,0,0,0.45), 0 0 40px ${chakra.color}30, inset 0 1px 0 rgba(255,255,255,0.08)`,
                          }}
                        >
                          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/40 to-transparent pointer-events-none" />

                          <div className="relative">
                            <div className="flex items-start justify-between mb-3">
                              <div>
                                <h3
                                  className="text-xl font-semibold mb-1"
                                  style={{ color: chakra.color, fontFamily: 'var(--font-serif)' }}
                                >
                                  {chakra.name}
                                </h3>
                                <p className="text-sm text-slate-400 italic">{chakra.sanskrit}</p>{/* was: text-slate-600 */}
                              </div>
                              <div
                                className="px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm"
                                style={{
                                  background: `${chakra.color}20`,
                                  color: chakra.color,
                                  border: `1px solid ${chakra.color}40`,
                                }}
                              >
                                {chakra.location}
                              </div>
                            </div>

                            <div className="mb-3">
                              <h4
                                className="text-sm font-semibold mb-1 uppercase tracking-wider"
                                style={{ color: chakra.color }}
                              >
                                {chakra.theme}
                              </h4>
                              <p className="text-sm text-slate-300 leading-relaxed">{/* was: text-slate-700 */}
                                {chakra.description}
                              </p>
                            </div>

                            <div>
                              <p className="text-xs text-slate-400 leading-relaxed">{/* was: text-slate-600 */}
                                {chakra.benefits}
                              </p>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
            className="text-center mt-12 text-[#C0D5D6]/60 text-sm font-light tracking-wide" /* was: text-slate-500 */
          >
            Hover over each chakra to explore its essence
          </motion.p>
        </div>
      </div>
    </div>
  );
}
