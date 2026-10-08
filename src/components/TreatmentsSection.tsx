import { useState } from 'react';
import type { ReactNode } from 'react';
import { ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';

export interface FacialSubService {
  name: string;
  tagline: string;
  description: string;
}

export interface ServiceItem {
  id: number;
  title: string;
  badge?: string;
  description: string;
  subServices?: FacialSubService[];
  iconSvg: ReactNode;
}

interface TreatmentsSectionProps {
  onSelectTreatment: (treatmentName: string) => void;
}

export const facialSubServices: FacialSubService[] = [
  { name: "Instant Facial", tagline: "Quick Radiance", description: "Express puffiness relief & instant glowing skin hydration" },
  { name: "Classic Facial", tagline: "Core Sculpting", description: "Deep manual lymphatic drainage & facial tissue sculpting" },
  { name: "Eye & Face Lymphatic", tagline: "Orbital Focus", description: "Targeted eye de-bloating & full facial fluid clearance" },
  { name: "Luxe Facial", tagline: "Restorative Ritual", description: "Premium restorative ritual with deep fascia contouring" },
  { name: "Microcurrent Sculpting", tagline: "Bio-Electric Lift", description: "Microcurrent muscle toning & fluid elevation" },
  { name: "Elite Facial", tagline: "Master Protocol", description: "Ultimate clinical facial sculpting & multi-layer detox" },
  { name: "RF (Radio Frequency) Facial", tagline: "Thermal Firming", description: "Radio frequency collagen stimulation & firming drainage" },
];

export const servicesList: ServiceItem[] = [
  {
    id: 1,
    title: "Facial Lymphatic Drainage",
    badge: "7 Facial Rituals",
    description: "Precision facial fascia release, jawline sculpting, and systemic orbital de-bloating.",
    subServices: facialSubServices,
    iconSvg: (
      <svg className="w-10 h-10 text-[#8C6D38]" viewBox="0 0 100 100" fill="none" stroke="currentColor">
        <path d="M58 14C48 14 36 20 32 30C30 35 28 40 24 44C22 46 24 48 28 49C26 51 27 53 29 54C27 56 29 58 33 59C31 63 35 67 41 67C49 67 57 64 63 54" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M60 46C64 44 65 52 61 54" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M41 67C43 74 45 81 47 88" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M63 54C65 67 67 77 71 88" strokeWidth="1.6" strokeLinecap="round" />
        <circle cx="48" cy="64" r="2" fill="currentColor" />
        <circle cx="58" cy="57" r="2" fill="currentColor" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Head Lymphatic Drainage",
    description: "Cranial fluid mapping, scalp tension release & deep sensory relaxation.",
    iconSvg: (
      <svg className="w-10 h-10 text-[#8C6D38]" viewBox="0 0 100 100" fill="none" stroke="currentColor">
        <circle cx="50" cy="40" r="24" strokeWidth="1.8" />
        <path d="M30 40C30 25 70 25 70 40" strokeWidth="1.4" strokeDasharray="3 3" />
        <path d="M50 16V26M35 22L41 28M65 22L59 28" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M42 64C44 72 45 80 47 88M58 64C56 72 55 80 53 88" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Neck & Shoulder Lymphatic Drainage",
    description: "Relieve cervical tightness, posture strain & trapped upper body fluid congestion.",
    iconSvg: (
      <svg className="w-10 h-10 text-[#8C6D38]" viewBox="0 0 100 100" fill="none" stroke="currentColor">
        <path d="M36 20C36 30 38 42 42 52L24 64C20 66 18 74 18 84" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M64 20C64 30 62 42 58 52L76 64C80 66 82 74 82 84" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M42 52C46 56 54 56 58 52" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M26 70C42 66 58 66 74 70" strokeWidth="1.4" strokeDasharray="3 3" />
      </svg>
    ),
  },
  {
    id: 4,
    title: "Back Lymphatic Drainage",
    description: "Paravertebral fluid drainage, spinal decompression & deep back tissue detox.",
    iconSvg: (
      <svg className="w-10 h-10 text-[#8C6D38]" viewBox="0 0 100 100" fill="none" stroke="currentColor">
        <path d="M30 18C38 24 38 76 30 84M70 18C62 24 62 76 70 84" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M50 16V86" strokeWidth="1.5" strokeDasharray="4 3" />
        <circle cx="50" cy="28" r="2.5" fill="currentColor" />
        <circle cx="50" cy="44" r="2.5" fill="currentColor" />
        <circle cx="50" cy="60" r="2.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    id: 5,
    title: "Arms Lymphatic Drainage",
    description: "Bicep, tricep & axillary node clearance to reduce arm heaviness and water buildup.",
    iconSvg: (
      <svg className="w-10 h-10 text-[#8C6D38]" viewBox="0 0 100 100" fill="none" stroke="currentColor">
        <path d="M30 88V50C30 42 34 38 42 36L68 18" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M68 18C74 14 82 20 78 26L56 52C50 58 46 64 46 88" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="38" cy="38" r="2.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    id: 6,
    title: "Breast / Chest Lymphatic Drainage",
    description: "Gentle pectoral release, axillary node stimulation & chest area decongestion.",
    iconSvg: (
      <svg className="w-10 h-10 text-[#8C6D38]" viewBox="0 0 100 100" fill="none" stroke="currentColor">
        <path d="M20 22C38 18 62 18 80 22" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M24 38C24 58 38 66 50 66C62 66 76 58 76 38" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M50 20V50" strokeWidth="1.2" strokeDasharray="3 3" />
      </svg>
    ),
  },
  {
    id: 7,
    title: "Stomach Lymphatic Drainage",
    description: "De-bloat abdomen, stimulate visceral fluid circulation & soften waistline contours.",
    iconSvg: (
      <svg className="w-10 h-10 text-[#8C6D38]" viewBox="0 0 100 100" fill="none" stroke="currentColor">
        <path d="M28 18C34 32 32 46 26 64C24 72 28 82 32 88" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M72 18C66 32 68 46 74 64C76 72 72 82 68 88" strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="50" cy="52" r="2.5" fill="currentColor" />
        <path d="M34 44C44 50 56 50 66 44" strokeWidth="1.4" strokeDasharray="3 3" />
      </svg>
    ),
  },
  {
    id: 8,
    title: "Glutes Lymphatic Drainage",
    badge: "Exclusively for Females",
    description: "Gluteal fascia clearance, lower body fluid mobilization & localized sculpt.",
    iconSvg: (
      <svg className="w-10 h-10 text-[#8C6D38]" viewBox="0 0 100 100" fill="none" stroke="currentColor">
        <path d="M22 28C34 22 46 22 50 32C54 22 66 22 78 28C84 48 76 74 50 82C24 74 16 48 22 28Z" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M50 32V78" strokeWidth="1.4" strokeDasharray="3 3" />
      </svg>
    ),
  },
  {
    id: 9,
    title: "Legs & Thighs Lymphatic Drainage",
    description: "Femoral & popliteal node clearance to relieve heavy legs and water retention.",
    iconSvg: (
      <svg className="w-10 h-10 text-[#8C6D38]" viewBox="0 0 100 100" fill="none" stroke="currentColor">
        <path d="M26 14C28 30 26 46 24 60C22 72 25 82 28 90" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M44 14C43 30 41 46 39 60C37 72 36 82 35 90" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M56 14C57 30 59 46 61 60C63 72 64 82 65 90" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M74 14C72 30 74 46 76 60C78 72 75 82 72 90" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 10,
    title: "Full Body Lymphatic Drainage",
    badge: "Systemic Clinical Ritual",
    description: "Comprehensive head-to-toe clinical lymphatic mapping & systemic fluid elimination.",
    iconSvg: (
      <svg className="w-10 h-10 text-[#8C6D38]" viewBox="0 0 100 100" fill="none" stroke="currentColor">
        <circle cx="50" cy="14" r="6" strokeWidth="1.6" />
        <path d="M47 20C47 22 43 25 38 27" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M53 20C53 22 57 25 62 27" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M38 27C37 36 36 46 39 56C40 60 44 63 46 66" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M62 27C63 36 64 46 61 56C60 60 56 63 54 66" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M46 66L44 88M54 66L56 88" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="50" cy="27" r="2" fill="currentColor" />
        <circle cx="50" cy="46" r="2" fill="currentColor" />
      </svg>
    ),
  },
];

export default function TreatmentsSection({ onSelectTreatment }: TreatmentsSectionProps) {
  const [facialExpanded, setFacialExpanded] = useState(true);

  const facialService = servicesList[0];
  const bodyServices = servicesList.slice(1);

  return (
    <section id="treatments" className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-b border-[#C5A880]/20 font-commissioner">

      {/* Elegant Header */}
      <div className="text-center mb-16">
        <div className="flex items-center justify-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#8C6D38] mb-3">
          <span className="w-10 h-[1px] bg-[#C5A880]/50" />
          <span>Clinical Lymphatic Directory</span>
          <span className="w-10 h-[1px] bg-[#C5A880]/50" />
        </div>

        <h2 className="font-dongle text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-normal leading-[0.85] tracking-tight text-[#3A2E1E]">
          Our Lymphatic Drainage Services
        </h2>

        <p className="text-xs md:text-sm text-[#555555] font-light max-w-2xl mx-auto mt-3 leading-relaxed">
          Targeted manual lymphatic protocols designed to release fluid retention, unmask natural contours, and activate systemic detox.
        </p>
      </div>

      {/* 1. MASTER FEATURED CARD: FACIAL LYMPHATIC DRAINAGE (Service #1) */}
      <div className="mb-12 rounded-3xl bg-gradient-to-br from-white via-[#FAF8F5] to-[#FAF6EE] border-2 border-[#C5A880]/40 p-6 sm:p-10 shadow-xl relative overflow-hidden">

        {/* Top Header Row */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-[#C5A880]/25">
          <div className="flex items-start gap-4">
            <span className="w-10 h-10 rounded-full bg-[#FAF6EE] border border-[#C5A880]/50 flex items-center justify-center font-mono text-sm font-bold text-[#8C6D38] shrink-0 mt-1 shadow-inner">
              01
            </span>
            <div>
              <div className="flex items-center gap-3 flex-wrap">
                <h3 className="font-dongle text-5xl sm:text-6xl text-[#3A2E1E] leading-none font-normal">
                  {facialService.title}
                </h3>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#8C6D38] bg-[#FAF6EE] px-3.5 py-1 rounded-full border border-[#C5A880]/40">
                  7 Facial Sessions Available
                </span>
              </div>
              <p className="text-xs sm:text-sm text-[#555555] font-light mt-1 max-w-xl">
                {facialService.description}
              </p>
            </div>
          </div>

          {/* Toggle facial sessions button */}
          <button
            onClick={() => setFacialExpanded(!facialExpanded)}
            className="self-start md:self-auto gold-btn text-xs font-bold tracking-widest uppercase px-6 py-3 rounded-full flex items-center gap-2 cursor-pointer shadow-md shrink-0"
          >
            <span>{facialExpanded ? 'Collapse Facial Menu' : 'View All 7 Facial Sessions'}</span>
            {facialExpanded ? <ChevronUp className="w-4 h-4 text-black" /> : <ChevronDown className="w-4 h-4 text-black" />}
          </button>
        </div>

        {/* 7 Facial Sub-services Grid */}
        {facialExpanded && (
          <div className="mt-8">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8C6D38] mb-4">
              Select Facial Treatment Protocol:
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {facialSubServices.map((sub, idx) => (
                <div
                  key={idx}
                  onClick={() => onSelectTreatment(sub.name)}
                  className="group relative rounded-2xl p-5 bg-white border border-[#C5A880]/30 hover:border-[#C5A880] shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col justify-between"
                >
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-[#8C6D38] mb-1">
                      {sub.tagline}
                    </div>
                    <h4 className="font-dongle text-3.5xl text-[#3A2E1E] leading-none font-normal group-hover:text-[#8C6D38] transition-colors mb-2">
                      {sub.name}
                    </h4>
                    <p className="text-xs text-[#555555] font-light leading-relaxed mb-4">
                      {sub.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#C5A880]/15 flex items-center justify-between text-[10px] font-bold uppercase tracking-widest text-[#8C6D38] group-hover:text-black transition-colors">
                    <span>Reserve Session</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* 2. BODY SERVICES GRID (Services #2 through #10) */}
      <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8C6D38] mb-6 text-center">
        Targeted Body Lymphatic Protocols (Services 02 &ndash; 10)
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {bodyServices.map((service) => (
          <div
            key={service.id}
            onClick={() => onSelectTreatment(service.title)}
            className="group rounded-2xl p-7 bg-white border border-[#C5A880]/30 hover:border-[#C5A880] shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between"
          >
            <div>
              {/* Header Info */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-[#FAF6EE] border border-[#C5A880]/40 flex items-center justify-center font-mono text-xs font-bold text-[#8C6D38]">
                    {service.id < 10 ? `0${service.id}` : service.id}
                  </span>
                  <div className="group-hover:scale-110 transition-transform duration-300">
                    {service.iconSvg}
                  </div>
                </div>

                {service.badge && (
                  <span className="text-[9px] font-bold uppercase tracking-wider text-[#8C6D38] bg-[#FAF6EE] px-3 py-1 rounded-full border border-[#C5A880]/30">
                    {service.badge}
                  </span>
                )}
              </div>

              <h3 className="font-dongle text-4xl text-[#3A2E1E] leading-none font-normal mb-2 group-hover:text-[#8C6D38] transition-colors">
                {service.title}
              </h3>

              <div className="w-12 h-[1px] bg-[#C5A880]/30 mb-3" />

              <p className="text-xs text-[#555555] font-light leading-relaxed mb-6">
                {service.description}
              </p>
            </div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                onSelectTreatment(service.title);
              }}
              className="w-full text-xs font-bold tracking-widest uppercase text-[#8C6D38] bg-[#FAF6EE] border border-[#C5A880]/40 hover:bg-gradient-to-r hover:from-[#E5C384] hover:to-[#C5A880] hover:text-black py-3 rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs"
            >
              <span>Book {service.title}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        ))}
      </div>

    </section>
  );
}
