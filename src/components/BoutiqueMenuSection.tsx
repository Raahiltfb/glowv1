import type { ReactNode } from 'react';

interface BoutiqueMenuSectionProps {
  onSelectMenu: (menuTitle: string) => void;
}

export interface MenuItem {
  title: string;
  subtitle?: string;
  iconSvg: ReactNode;
}

export const menuItems: MenuItem[] = [
  {
    title: "Face Yoga",
    iconSvg: (
      <svg className="w-14 h-14 text-[#8C6D38] shrink-0" viewBox="0 0 100 100" fill="none" stroke="currentColor">
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
    iconSvg: (
      <svg className="w-14 h-14 text-[#8C6D38] shrink-0" viewBox="0 0 100 100" fill="none" stroke="currentColor">
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
    iconSvg: (
      <svg className="w-14 h-14 text-[#8C6D38] shrink-0" viewBox="0 0 100 100" fill="none" stroke="currentColor">
        <path d="M24 44C24 66 35 76 50 76C65 76 76 66 76 44H24Z" strokeWidth="2" strokeLinejoin="round" fill="currentColor" fillOpacity="0.15" />
        <path d="M20 44H80" strokeWidth="2.2" strokeLinecap="round" />
        <path d="M72 18L40 60" strokeWidth="3.5" strokeLinecap="round" />
        <circle cx="74" cy="16" r="5.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Gua Sha",
    iconSvg: (
      <svg className="w-14 h-14 text-[#8C6D38] shrink-0" viewBox="0 0 100 100" fill="none" stroke="currentColor">
        <path d="M34 24C41 18 57 18 70 30C80 40 80 58 68 70C55 82 35 76 25 63C18 50 24 33 34 24Z" strokeWidth="2" strokeLinejoin="round" fill="currentColor" fillOpacity="0.1" />
        <path d="M44 36C47 33 57 36 60 42" strokeWidth="1.6" strokeDasharray="3 3" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Facial Reflexology",
    iconSvg: (
      <svg className="w-14 h-14 text-[#8C6D38] shrink-0" viewBox="0 0 100 100" fill="none" stroke="currentColor">
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
    <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto border-b border-[#C5A880]/20">
      {/* Title Bar in Dongle font */}
      <div className="text-center mb-10">
        <h2 className="font-dongle text-6xl sm:text-7xl md:text-8xl font-normal leading-none tracking-wide text-[#3A2E1E]">
          Also on the menu
        </h2>
      </div>

      {/* Grid of 5 Horizontal Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {menuItems.map((item, idx) => (
          <div
            key={idx}
            onClick={() => onSelectMenu(item.title)}
            className="reference-card p-4 flex items-center justify-start gap-4 cursor-pointer group hover:border-[#C5A880]/60 transition-all"
          >
            <div className="group-hover:scale-105 transition-transform duration-300 text-[#8C6D38]">
              {item.iconSvg}
            </div>
            <h3 className="font-dongle text-3xl md:text-4xl text-[#8C6D38] font-normal leading-none">
              {item.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}
