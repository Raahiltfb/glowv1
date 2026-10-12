import { useState } from 'react';
import { ArrowRight, Clock, CheckCircle } from 'lucide-react';

export interface TreatmentService {
  id: number;
  title: string;
  duration: string;
  durationUnit: string;
  category: 'facial' | 'body' | 'fullbody';
  tagline?: string;
  description: string;
  features?: string[];
}

interface TreatmentsSectionProps {
  onSelectTreatment: (treatmentName: string) => void;
}

export const offeringsList: TreatmentService[] = [
  {
    id: 1,
    title: "Instant Facelift",
    duration: "30",
    durationUnit: "min",
    category: "facial",
    tagline: "Quick Radiance & Contouring",
    description: "30-minute session combining lymphatic drainage, contouring tools, and hydration to refresh, sculpt, and revitalize your natural glow.",
    features: ["Lymphatic Drainage", "Contouring Tools", "Instant Hydration Glow"]
  },
  {
    id: 2,
    title: "Classic Facelift",
    duration: "60",
    durationUnit: "min",
    category: "facial",
    tagline: "Core Sculpting & Tissue Lift",
    description: "A blend of lymphatic drainage, hydration, and contouring tools, paired with premium masks for radiant, sculpted, and timeless skin.",
    features: ["Deep Tissue Sculpting", "Hydration Mask", "Timeless Radiance"]
  },
  {
    id: 3,
    title: "Eye Face Glow Up",
    duration: "70",
    durationUnit: "min",
    category: "facial",
    tagline: "Orbital Focus & De-Bloat",
    description: "Facelift and eyelift protocol using lymphatic drainage to reduce eye puffiness, chisel cheekbones, and enhance youthful radiance.",
    features: ["Targeted Eye De-Puffing", "Cheekbone Chisel", "Youthful Fluid Release"]
  },
  {
    id: 4,
    title: "Luxe Facelift",
    duration: "80",
    durationUnit: "min",
    category: "facial",
    tagline: "Restorative Ritual & Red Light",
    description: "Lymphatic drainage, red light therapy, oxygen treatments, and back massage, delivering ultimate relaxation and glowing rejuvenation.",
    features: ["Red Light Therapy", "Oxygen Infusion", "Back Massage Included"]
  },
  {
    id: 5,
    title: "Microcurrent Facelift",
    duration: "60",
    durationUnit: "min",
    category: "facial",
    tagline: "Advanced Bio-Electric Lift",
    description: "Advanced microcurrent protocol to tone muscles, diminish fine lines, stimulate collagen, and achieve sculpted facial contours.",
    features: ["Muscle Toning Microcurrent", "Wrinkle Reduction", "Collagen Stimulation"]
  },
  {
    id: 6,
    title: "Elite Glow Facelift",
    duration: "100",
    durationUnit: "min",
    category: "facial",
    tagline: "The Master Clinic Protocol",
    description: "Complete spa experience featuring lymphatic drainage, eyelift, vacuum pore cleansing, natural peel, superior hydration, and back sculpting.",
    features: ["Vacuum Pore Cleansing", "Natural Peel & Hydration", "Neck, Shoulder & Back Sculpting"]
  },
  {
    id: 7,
    title: "Head Lymphatic Drainage",
    duration: "75",
    durationUnit: "min",
    category: "body",
    tagline: "Cranial Tension & Scalp Wellness",
    description: "Gentle rhythmic movements and pressure point sculpting focused on the scalp, neck, and shoulders to release cranial tension and stimulate detox.",
    features: ["Headache & Tension Relief", "Scalp Detoxification", "Sensory Reset"]
  },
  {
    id: 8,
    title: "Brazilian Lymphatic Drainage for Hands",
    duration: "45",
    durationUnit: "min",
    category: "body",
    tagline: "Arm Contours & Node Clearance",
    description: "Specialized arm and hand detox using rhythmic strokes, underarm pumping, and sculpting tools to release fluid and enhance muscle tone.",
    features: ["Underarm Pumping", "Arm Firming & Tone", "Fluid Retention Release"]
  },
  {
    id: 9,
    title: "Brazilian Lymphatic Drainage for Breast",
    duration: "60",
    durationUnit: "min",
    category: "body",
    tagline: "Gentle Pectoral & Node Decongestion",
    description: "Non-invasive therapy with upward lifting strokes and pumping around lymph nodes to improve circulation, paired with a firming hydration mask.",
    features: ["Natural Tissue Lifting", "Hydrating Firming Mask", "Relief from Heaviness"]
  },
  {
    id: 10,
    title: "Glow Flow Stomach Lymphatic Drainage",
    duration: "90",
    durationUnit: "min",
    category: "body",
    tagline: "Deep Abdominal Detox & Cupping",
    description: "Therapeutic abdominal detox combining stomach cupping, gua sha, Brazilian wooden roller massage, sculpting machine, and body wrap.",
    features: ["Abdominal Cupping & Gua Sha", "Brazilian Wooden Roller", "Stomach Sculpting Machine & Wrap"]
  },
  {
    id: 11,
    title: "Brazilian Lymphatic Drainage for Back",
    duration: "60",
    durationUnit: "min",
    category: "body",
    tagline: "Spinal Decompression & Back Detox",
    description: "Back detox and spinal tension release using contouring tools to stimulate circulation, followed by gentle exfoliation and deep hydration.",
    features: ["Posture & Tension Relief", "Back Contour Sculpting", "Smoothing Exfoliation"]
  },
  {
    id: 12,
    title: "Brazilian Lymphatic Drainage for Legs",
    duration: "80",
    durationUnit: "min",
    category: "body",
    tagline: "Cellulite & Heavy Legs Clearance",
    description: "Detoxifying leg contouring targeting water retention and cellulite through popliteal node clearance, specialized sculpting, and exfoliation.",
    features: ["Reduces Cellulite & Bloating", "Popliteal & Femoral Clearance", "Light, Sculpted Legs"]
  },
  {
    id: 13,
    title: "Glow Flow Full Body Lymphatic Drainage",
    duration: "3",
    durationUnit: "hours",
    category: "fullbody",
    tagline: "Two Skilled Therapists Ritual",
    description: "Holistic full body therapy with two skilled therapists working simultaneously across face, chest, stomach, back, and legs for maximum systemic detox.",
    features: ["Two Therapists Simultaneously", "Head-to-Toe Clearance", "Maximum Systemic Detox"]
  }
];

export default function TreatmentsSection({ onSelectTreatment }: TreatmentsSectionProps) {
  const [activeTab, setActiveTab] = useState<'all' | 'facial' | 'body' | 'fullbody'>('all');

  const filteredOfferings = offeringsList.filter((item) => {
    if (activeTab === 'all') return true;
    return item.category === activeTab;
  });

  return (
    <section id="treatments" className="relative py-14 sm:py-20 md:py-24 px-4 sm:px-8 md:px-12 max-w-7xl mx-auto border-b border-[#D4AF37]/25 font-commissioner overflow-hidden">
      {/* Botanical Leaves Background Layer inspired by PDF */}
      <div className="absolute top-0 right-0 w-60 sm:w-80 md:w-[480px] pointer-events-none opacity-20 sm:opacity-35 md:opacity-45 select-none z-0">
        <img
          src="/botanical-leaves-right.png"
          alt=""
          className="w-full h-auto object-contain transform translate-x-12 -translate-y-8"
        />
      </div>
      <div className="absolute bottom-16 left-0 w-60 sm:w-80 md:w-[440px] pointer-events-none opacity-15 sm:opacity-25 md:opacity-35 select-none z-0">
        <img
          src="/botanical-leaves-left.png"
          alt=""
          className="w-full h-auto object-contain transform -translate-x-16 translate-y-12"
        />
      </div>

      {/* Header */}
      <div className="text-center mb-10 sm:mb-16 relative z-10">

        <h2 className="font-serif-luxury text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal leading-[1.05] sm:leading-[0.9] tracking-tight text-white mb-3 sm:mb-4">
          <span className="gold-gradient-text">Treatment Protocols</span>
        </h2>

        <p className="text-xs sm:text-sm text-[#D8C9B4] font-light max-w-2xl mx-auto leading-relaxed px-2">
          Bespoke lymphatic drainage, natural facelifts, and body contouring protocols designed to sculpt, release retained fluid, and restore vitality.
        </p>

        {/* Filter Navigation Tabs - Horizontally scrollable swipe track on mobile */}
        <div className="w-full overflow-x-auto no-scrollbar py-2 mt-6 sm:mt-8">
          <div className="inline-flex sm:flex sm:flex-wrap sm:justify-center items-center gap-2 px-1">
            {[
              { id: 'all', label: 'All Offerings (13)' },
              { id: 'facial', label: 'Facial Protocols (6)' },
              { id: 'body', label: 'Targeted Body (6)' },
              { id: 'fullbody', label: 'Full Body Ritual (1)' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`text-xs uppercase tracking-wider font-semibold px-4 sm:px-5 py-2 sm:py-2.5 rounded-full transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-[#F3E5C8] via-[#E8D58C] to-[#D4AF37] text-[#0A2018] shadow-md font-bold'
                    : 'bg-[#14382A]/80 text-[#E8D58C] border border-[#D4AF37]/30 hover:border-[#D4AF37]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Services List with Mobile-Optimized Architecture */}
      <div className="space-y-4 sm:space-y-6 relative z-10">
        {filteredOfferings.map((service) => (
          <div
            key={service.id}
            onClick={() => onSelectTreatment(service.title)}
            className="emerald-card p-4.5 sm:p-7 md:p-8 rounded-2xl md:rounded-3xl border border-[#D4AF37]/35 hover:border-[#E8D58C] cursor-pointer flex flex-col lg:flex-row lg:items-center justify-between gap-4 sm:gap-6 group relative transition-all"
          >
            {/* Mobile Top Row: Tagline & Sleek Duration Pill (Visible only on mobile <sm) */}
            <div className="flex items-center justify-between gap-2 sm:hidden pb-1 border-b border-[#D4AF37]/15">
              <span className="text-[10px] font-semibold uppercase tracking-wider text-[#E8D58C] bg-[#0A2018] px-2.5 py-0.5 rounded-full border border-[#D4AF37]/30 truncate max-w-[200px]">
                {service.tagline || (service.category === 'facial' ? 'Facial Protocol' : service.category === 'fullbody' ? 'Signature Ritual' : 'Targeted Body')}
              </span>
              <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border border-[#D4AF37]/45 bg-[#0E2D21] text-[#E8D58C] text-[11px] font-bold shrink-0">
                <Clock className="w-3 h-3 text-[#E8D58C]" />
                <span>{service.duration} {service.durationUnit.toUpperCase()}</span>
              </div>
            </div>

            {/* Left: Duration Badge & Service Details */}
            <div className="flex items-start sm:items-center gap-4 sm:gap-6 md:gap-7 flex-1">
              
              {/* Circular Gold Duration Badge from PDF (Visible on Tablet & Desktop >=sm) */}
              <div className="hidden sm:flex w-20 h-20 md:w-22 md:h-22 rounded-full border-2 border-[#D4AF37] bg-[#0E2D21] flex-col items-center justify-center shrink-0 shadow-lg text-[#E8D58C] group-hover:border-[#F3E5C8] transition-colors">
                <span className="font-serif-luxury text-2xl sm:text-3xl font-bold leading-none">
                  {service.duration}
                </span>
                <span className="text-[10px] sm:text-xs uppercase tracking-widest font-semibold text-[#D8C9B4] mt-0.5">
                  {service.durationUnit}
                </span>
              </div>

              {/* Title & Description */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2.5 sm:gap-3 flex-wrap mb-1">
                  <h3 className="font-serif-luxury text-2xl sm:text-3xl md:text-4xl text-white font-normal group-hover:text-[#E8D58C] transition-colors leading-tight">
                    {service.title}
                  </h3>
                  {service.tagline && (
                    <span className="hidden sm:inline-block text-[10px] font-semibold uppercase tracking-wider text-[#E8D58C] bg-[#0D281E] px-3 py-0.5 rounded-full border border-[#D4AF37]/30">
                      {service.tagline}
                    </span>
                  )}
                </div>

                <p className="text-xs sm:text-sm text-[#D8C9B4] font-light leading-relaxed mt-1 sm:mt-2 max-w-3xl">
                  {service.description}
                </p>

                {service.features && (
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-2.5 sm:mt-3.5">
                    {service.features.map((feat, fIdx) => (
                      <span
                        key={fIdx}
                        className="inline-flex items-center gap-1 sm:gap-1.5 text-[10px] sm:text-[11px] text-[#F5E8D0]/90 bg-[#0A2018]/60 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md border border-[#D4AF37]/20"
                      >
                        <CheckCircle className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#E8D58C] shrink-0" />
                        <span className="truncate">{feat}</span>
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Right: Booking Action */}
            <div className="flex items-center justify-end pt-3 sm:pt-4 lg:pt-0 border-t lg:border-t-0 border-[#D4AF37]/20 shrink-0 w-full sm:w-auto">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onSelectTreatment(service.title);
                }}
                className="gold-btn text-xs tracking-wider uppercase font-bold py-2.5 sm:py-3.5 px-6 sm:px-7 rounded-full flex items-center justify-center gap-2 cursor-pointer shadow-md hover:brightness-105 w-full sm:w-auto"
              >
                <span>Reserve Ritual</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#0A2018]" />
              </button>
            </div>

          </div>
        ))}
      </div>

      {/* Footer address stripe */}
      <div className="mt-14 pt-6 border-t border-[#D4AF37]/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#D8C9B4]/80">
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4 text-[#E8D58C]" />
          <span>Sessions by Appointment &bull; +91 81041 01177</span>
        </div>
        <div>
          New Clifton RHS, B wing, Ground floor, flat number 4, Prof Almeida Road, Bandra West, Mumbai 400052
        </div>
      </div>

    </section>
  );
}
