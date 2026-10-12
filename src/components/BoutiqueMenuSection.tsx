import type { ReactNode } from 'react';

interface BoutiqueMenuSectionProps {
  onSelectMenu: (menuTitle: string) => void;
}

export interface MenuItem {
  title: string;
  tagline: string;
  iconSvg: ReactNode;
}

export const menuItems: MenuItem[] = [
  {
    title: "Face Yoga",
    tagline: "Facial Muscle Tone",
    iconSvg: (
      <svg className="w-12 h-12 text-[#E8D58C] shrink-0" viewBox="0 0 100 100" fill="none" stroke="currentColor">
        <circle cx="50" cy="38" r="22" strokeWidth="1.8" />
        <path d="M38 35C42 31 58 31 62 35" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M38 46C43 51 57 51 62 46" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M50 64C50 64 40 70 40 78C40 83 50 86 50 86C50 86 60 83 60 78C60 70 50 64 50 64Z" strokeWidth="1.4" fill="currentColor" fillOpacity="0.1" />
        <path d="M50 86C40 84 34 78 34 73" strokeWidth="1.4" strokeLinecap="round" />
        <path d="M50 86C60 84 66 78 66 73" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Facial Acupressure",
    tagline: "Meridian Flow",
    iconSvg: (
      <svg className="w-12 h-12 text-[#E8D58C] shrink-0" viewBox="0 0 100 100" fill="none" stroke="currentColor">
        <circle cx="50" cy="44" r="22" strokeWidth="1.8" />
        <circle cx="36" cy="34" r="2.5" fill="currentColor" />
        <circle cx="64" cy="34" r="2.5" fill="currentColor" />
        <circle cx="50" cy="30" r="2.5" fill="currentColor" />
        <circle cx="34" cy="47" r="2.5" fill="currentColor" />
        <circle cx="66" cy="47" r="2.5" fill="currentColor" />
        <circle cx="40" cy="56" r="2.5" fill="currentColor" />
        <circle cx="60" cy="56" r="2.5" fill="currentColor" />
        <circle cx="50" cy="60" r="2.5" fill="currentColor" />
        <path d="M30 26C30 16 70 16 70 26" strokeWidth="1.4" strokeDasharray="3 3" />
      </svg>
    ),
  },
  {
    title: "Kansa Therapy",
    tagline: "Bronze Alkalizing",
    iconSvg: (
      <svg className="w-12 h-12 text-[#E8D58C] shrink-0" viewBox="0 0 100 100" fill="none" stroke="currentColor">
        <path d="M24 44C24 66 35 76 50 76C65 76 76 66 76 44H24Z" strokeWidth="2" strokeLinejoin="round" fill="currentColor" fillOpacity="0.15" />
        <path d="M20 44H80" strokeWidth="2.2" strokeLinecap="round" />
        <path d="M72 18L40 60" strokeWidth="3.5" strokeLinecap="round" />
        <circle cx="74" cy="16" r="5.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Gua Sha",
    tagline: "Medicinal Jade Sculpt",
    iconSvg: (
      <svg className="w-12 h-12 text-[#E8D58C] shrink-0" viewBox="0 0 100 100" fill="none" stroke="currentColor">
        <path d="M34 24C41 18 57 18 70 30C80 40 80 58 68 70C55 82 35 76 25 63C18 50 24 33 34 24Z" strokeWidth="2" strokeLinejoin="round" fill="currentColor" fillOpacity="0.1" />
        <path d="M44 36C47 33 57 36 60 42" strokeWidth="1.6" strokeDasharray="3 3" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Facial Reflexology",
    tagline: "Sensory Rebalance",
    iconSvg: (
      <svg className="w-12 h-12 text-[#E8D58C] shrink-0" viewBox="0 0 100 100" fill="none" stroke="currentColor">
        <circle cx="50" cy="38" r="22" strokeWidth="1.8" />
        <path d="M38 35C42 31 58 31 62 35" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M38 46C43 51 57 51 62 46" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M34 68C40 62 60 62 66 68C72 74 66 86 50 86C34 86 28 74 34 68Z" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M50 64V76" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function BoutiqueMenuSection({ onSelectMenu }: BoutiqueMenuSectionProps) {
  return (
    <section className="relative py-14 sm:py-20 px-4 sm:px-8 md:px-12 max-w-7xl mx-auto border-b border-[#D4AF37]/25 font-commissioner overflow-hidden">
      {/* Botanical Leaves Background Accent */}
      <div className="absolute top-0 right-0 w-52 sm:w-80 pointer-events-none opacity-20 sm:opacity-30 select-none z-0">
        <img
          src="/botanical-leaves-right.png"
          alt=""
          className="w-full h-auto object-contain transform translate-x-12 -translate-y-8"
        />
      </div>

      {/* Title */}
      <div className="text-center mb-8 sm:mb-12 relative z-10">
        <div className="text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#E8D58C] font-semibold mb-2">
          Specialty Studio Disciplines
        </div>
        <h2 className="font-serif-luxury text-3xl sm:text-5xl md:text-6xl font-normal leading-tight tracking-wide text-white">
          <span className="gold-gradient-text">Also on the Menu</span>
        </h2>
        <p className="text-xs sm:text-sm text-[#D8C9B4] font-light max-w-lg mx-auto mt-2 px-2">
          Complementary holistic rituals to pair with your lymphatic drainage sessions.
        </p>
      </div>

      {/* 2-Column Luxury Grid on Mobile, 5-Column on Desktop */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 relative z-10">
        {menuItems.map((item, idx) => (
          <div
            key={idx}
            onClick={() => onSelectMenu(item.title)}
            className={`emerald-card p-3.5 sm:p-5 flex flex-col items-center text-center justify-between gap-3 sm:gap-4 cursor-pointer group hover:border-[#E8D58C] transition-all rounded-xl sm:rounded-2xl ${
              idx === menuItems.length - 1 ? 'col-span-2 sm:col-span-1' : ''
            }`}
          >
            <div className="p-2 sm:p-3 rounded-full bg-[#0E2D21] border border-[#D4AF37]/35 group-hover:scale-105 transition-transform duration-300">
              <div className="w-8 h-8 sm:w-10 sm:h-10 text-[#E8D58C] flex items-center justify-center">
                {item.iconSvg}
              </div>
            </div>
            <div>
              <div className="text-[9px] sm:text-[10px] uppercase tracking-wider text-[#D8C9B4]/80 font-medium mb-0.5 sm:mb-1">
                {item.tagline}
              </div>
              <h3 className="font-serif-luxury text-lg sm:text-2xl text-white font-medium leading-tight group-hover:text-[#E8D58C] transition-colors">
                {item.title}
              </h3>
            </div>
            <span className="text-[10px] uppercase tracking-wider font-semibold text-[#E8D58C] group-hover:text-white transition-colors">
              Reserve &rarr;
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
