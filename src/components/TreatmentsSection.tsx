import type { ReactNode } from 'react';

export interface Treatment {
  id: number;
  title: string;
  description: string;
  duration?: string;
  price?: string;
  iconSvg: ReactNode;
}

interface TreatmentsSectionProps {
  onSelectTreatment: (treatmentName: string) => void;
}

export const lymphaticTreatments: Treatment[] = [
  {
    id: 1,
    title: "Full Body Lymphatic Drainage",
    description: "Depuff, detox, feel lighter from head to toe.",
    iconSvg: (
      <svg className="w-14 h-14 md:w-16 md:h-16 text-[#8C6D38] shrink-0" viewBox="0 0 100 100" fill="none" stroke="currentColor">
        <circle cx="50" cy="14" r="6" strokeWidth="1.6" />
        <path d="M47 20C47 22 43 25 38 27" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M53 20C53 22 57 25 62 27" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M38 27C37 36 36 46 39 56C40 60 44 63 46 66" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M62 27C63 36 64 46 61 56C60 60 56 63 54 66" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M38 27L24 44C22 46 19 54 21 58" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M62 27L76 44C78 46 81 54 79 58" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M46 66L44 88M54 66L56 88" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M50 24V64" strokeWidth="1.2" strokeDasharray="3 3" />
        <path d="M30 40C38 35 62 35 70 40" strokeWidth="1.2" strokeDasharray="3 3" />
        <circle cx="50" cy="27" r="2" fill="currentColor" />
        <circle cx="42" cy="35" r="1.8" fill="currentColor" />
        <circle cx="58" cy="35" r="1.8" fill="currentColor" />
        <circle cx="50" cy="46" r="1.8" fill="currentColor" />
        <circle cx="45" cy="58" r="1.8" fill="currentColor" />
        <circle cx="55" cy="58" r="1.8" fill="currentColor" />
        <circle cx="45" cy="74" r="1.8" fill="currentColor" />
        <circle cx="55" cy="74" r="1.8" fill="currentColor" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Face & Neck Drainage",
    description: "Sculpt, lift, reduce puffiness.",
    iconSvg: (
      <svg className="w-14 h-14 md:w-16 md:h-16 text-[#8C6D38] shrink-0" viewBox="0 0 100 100" fill="none" stroke="currentColor">
        <path d="M58 14C48 14 36 20 32 30C30 35 28 40 24 44C22 46 24 48 28 49C26 51 27 53 29 54C27 56 29 58 33 59C31 63 35 67 41 67C49 67 57 64 63 54" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M60 46C64 44 65 52 61 54" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M41 67C43 74 45 81 47 88" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M63 54C65 67 67 77 71 88" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M43 85C53 83 65 83 75 85" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M36 44C44 46 52 50 55 60C57 70 55 77 55 83" strokeWidth="1.4" strokeDasharray="3 3" strokeLinecap="round" />
        <path d="M52 80L55 85L58 80" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M28 36C38 32 50 32 58 38" strokeWidth="1.2" strokeDasharray="2 3" strokeLinecap="round" />
        <circle cx="48" cy="64" r="2" fill="currentColor" />
        <circle cx="58" cy="57" r="2" fill="currentColor" />
        <circle cx="55" cy="74" r="2" fill="currentColor" />
        <circle cx="55" cy="83" r="2.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Breast Lymphatic Drainage",
    description: "Gentle release and comfort.",
    iconSvg: (
      <svg className="w-14 h-14 md:w-16 md:h-16 text-[#8C6D38] shrink-0" viewBox="0 0 100 100" fill="none" stroke="currentColor">
        <path d="M20 22C38 18 62 18 80 22" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M44 14V20M56 14V20" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M50 20V50" strokeWidth="1.2" strokeDasharray="3 3" />
        <path d="M24 38C24 58 38 66 50 66C62 66 76 58 76 38" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M46 60C38 54 30 44 26 32" strokeWidth="1.4" strokeDasharray="3 3" strokeLinecap="round" />
        <path d="M24 36L26 30L30 34" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M54 60C62 54 70 44 74 32" strokeWidth="1.4" strokeDasharray="3 3" strokeLinecap="round" />
        <path d="M76 36L74 30L70 34" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M20 68C34 76 66 76 80 68" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 4,
    title: "Arms & Underarm Drainage",
    description: "Ease heaviness and fluid.",
    iconSvg: (
      <svg className="w-14 h-14 md:w-16 md:h-16 text-[#8C6D38] shrink-0" viewBox="0 0 100 100" fill="none" stroke="currentColor">
        <path d="M30 88V50C30 42 34 38 42 36L68 18" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M68 18C74 14 82 20 78 26L56 52C50 58 46 64 46 88" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M68 18L84 10" strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="38" cy="38" r="2.5" fill="currentColor" />
        <circle cx="43" cy="34" r="2" fill="currentColor" />
        <circle cx="44" cy="40" r="2" fill="currentColor" />
        <path d="M72 20C62 27 52 32 44 36" strokeWidth="1.4" strokeDasharray="3 3" strokeLinecap="round" />
        <path d="M48 38L42 37L45 32" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M34 78C34 65 36 52 38 42" strokeWidth="1.4" strokeDasharray="3 3" strokeLinecap="round" />
        <path d="M35 46L38 40L41 46" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: 5,
    title: "Abdomen & Waist Drainage",
    description: "Bloat down, softer midsection.",
    iconSvg: (
      <svg className="w-14 h-14 md:w-16 md:h-16 text-[#8C6D38] shrink-0" viewBox="0 0 100 100" fill="none" stroke="currentColor">
        <path d="M28 18C34 32 32 46 26 64C24 72 28 82 32 88" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M72 18C66 32 68 46 74 64C76 72 72 82 68 88" strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="50" cy="52" r="2.5" fill="currentColor" />
        <path d="M34 44C44 50 56 50 66 44" strokeWidth="1.4" strokeDasharray="3 3" strokeLinecap="round" />
        <path d="M36 62C44 68 56 68 64 62" strokeWidth="1.4" strokeDasharray="3 3" strokeLinecap="round" />
        <path d="M36 68L34 82M64 68L66 82" strokeWidth="1.4" strokeDasharray="3 3" strokeLinecap="round" />
        <path d="M31 78L34 84L37 78" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M63 78L66 84L69 78" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="34" cy="83" r="2.5" fill="currentColor" />
        <circle cx="66" cy="83" r="2.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    id: 6,
    title: "Legs & Thighs Drainage",
    description: "Lighter legs, less water retention.",
    iconSvg: (
      <svg className="w-14 h-14 md:w-16 md:h-16 text-[#8C6D38] shrink-0" viewBox="0 0 100 100" fill="none" stroke="currentColor">
        <path d="M26 14C28 30 26 46 24 60C22 72 25 82 28 90" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M44 14C43 30 41 46 39 60C37 72 36 82 35 90" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M56 14C57 30 59 46 61 60C63 72 64 82 65 90" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M74 14C72 30 74 46 76 60C78 72 75 82 72 90" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M29 52C32 50 36 50 38 52" strokeWidth="1.4" strokeLinecap="round" />
        <path d="M62 52C64 50 68 50 71 52" strokeWidth="1.4" strokeLinecap="round" />
        <path d="M31 84C34 70 36 54 37 36C38 28 39 20 40 16" strokeWidth="1.4" strokeDasharray="3 3" strokeLinecap="round" />
        <path d="M37 20L40 14L43 20" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M69 84C66 70 64 54 63 36C62 28 61 20 60 16" strokeWidth="1.4" strokeDasharray="3 3" strokeLinecap="round" />
        <path d="M57 20L60 14L63 20" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="33" cy="52" r="2" fill="currentColor" />
        <circle cx="67" cy="52" r="2" fill="currentColor" />
        <circle cx="40" cy="18" r="2.5" fill="currentColor" />
        <circle cx="60" cy="18" r="2.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    id: 7,
    title: "Targeted Zone Session",
    description: "Choose one area that needs extra flow.",
    iconSvg: (
      <svg className="w-14 h-14 md:w-16 md:h-16 text-[#8C6D38] shrink-0" viewBox="0 0 100 100" fill="none" stroke="currentColor">
        <circle cx="50" cy="50" r="34" strokeWidth="1.8" />
        <circle cx="50" cy="50" r="22" strokeWidth="1.4" strokeDasharray="3 3" />
        <circle cx="50" cy="50" r="6" fill="currentColor" />
        <path d="M50 6V16M50 84V94M6 50H16M84 50H94" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function TreatmentsSection({ onSelectTreatment }: TreatmentsSectionProps) {
  const row1 = lymphaticTreatments.slice(0, 4);
  const row2 = lymphaticTreatments.slice(4, 7);

  return (
    <section id="treatments" className="py-20 px-6 md:px-12 max-w-7xl mx-auto border-b border-[#C5A880]/20">
      {/* Title Bar in Dongle font */}
      <div className="text-center mb-10">
        <h2 className="font-dongle text-6xl sm:text-7xl md:text-8xl font-normal leading-none tracking-wide text-[#3A2E1E]">
          Lymphatic Drainage Treatments
        </h2>
      </div>

      {/* Row 1: 4 Cards Across */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
        {row1.map((t) => (
          <div
            key={t.id}
            onClick={() => onSelectTreatment(t.title)}
            className="reference-card p-5 flex items-start gap-3.5 cursor-pointer group hover:border-[#C5A880]/60 transition-all"
          >
            {/* Left: Number Badge + Icon */}
            <div className="flex items-center gap-2 shrink-0 mt-0.5">
              <span className="w-6 h-6 rounded-full border border-[#C5A880]/50 bg-[#FAF6EE] flex items-center justify-center font-commissioner text-xs font-bold text-[#8C6D38]">
                {t.id}
              </span>
              <div className="group-hover:scale-105 transition-transform duration-300">
                {t.iconSvg}
              </div>
            </div>

            {/* Right: Title & Description */}
            <div className="flex-1">
              <h3 className="font-dongle text-3.5xl md:text-4xl text-[#8C6D38] font-normal leading-[0.88]">
                {t.title}
              </h3>
              <div className="w-14 h-[1px] bg-[#C5A880]/30 my-1.5" />
              <p className="font-commissioner text-[#555555] text-xs font-light leading-snug">
                {t.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Row 2: 3 Cards Across */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {row2.map((t) => (
          <div
            key={t.id}
            onClick={() => onSelectTreatment(t.title)}
            className="reference-card p-5 flex items-start gap-3.5 cursor-pointer group hover:border-[#C5A880]/60 transition-all"
          >
            {/* Left: Number Badge + Icon */}
            <div className="flex items-center gap-2 shrink-0 mt-0.5">
              <span className="w-6 h-6 rounded-full border border-[#C5A880]/50 bg-[#FAF6EE] flex items-center justify-center font-commissioner text-xs font-bold text-[#8C6D38]">
                {t.id}
              </span>
              <div className="group-hover:scale-105 transition-transform duration-300">
                {t.iconSvg}
              </div>
            </div>

            {/* Right: Title & Description */}
            <div className="flex-1">
              <h3 className="font-dongle text-3.5xl md:text-4xl text-[#8C6D38] font-normal leading-[0.88]">
                {t.title}
              </h3>
              <div className="w-14 h-[1px] bg-[#C5A880]/30 my-1.5" />
              <p className="font-commissioner text-[#555555] text-xs font-light leading-snug">
                {t.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
