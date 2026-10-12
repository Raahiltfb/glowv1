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
    description: "A 70-minute facelift and eyelift using lymphatic drainage and specialized tools to reduce eye puffiness, sculpt face, refresh skin, and enhance youthful radiance.",
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
    description: "An advanced treatment with microcurrent device to tone muscles, reduce wrinkles, boost collagen, and achieve radiant, youthful skin.",
    features: ["Muscle Toning Microcurrent", "Wrinkle Reduction", "Collagen Stimulation"]
  },
  {
    id: 6,
    title: "Elite Glow Facelift",
    duration: "100",
    durationUnit: "min",
    category: "facial",
    tagline: "The Master Clinic Protocol",
    description: "A 100-minute complete spa experience featuring lymphatic drainage, eyelift, sculpting tools, microcurrent, and vacuum technology to remove whiteheads, blackheads, and cleanse pores naturally. Complete with a natural peel, superior hydration, and neck, shoulder, and back sculpting, this luxurious treatment is for rejuvenates & relaxation.",
    features: ["Vacuum Pore Cleansing", "Natural Peel & Hydration", "Neck, Shoulder & Back Sculpting"]
  },
  {
    id: 7,
    title: "Head Lymphatic Drainage",
    duration: "75",
    durationUnit: "min",
    category: "body",
    tagline: "Cranial Tension & Scalp Wellness",
    description: "A deeply relaxing therapy designed to stimulate lymph flow, release built-up tension, improve circulation and promote overall scalp wellness naturally. The technique involves gentle rhythmic movements, pressure point stimulation and sculpting massage focused around the scalp, neck and shoulder area to encourage detoxification and relaxation.",
    features: ["Headache & Tension Relief", "Scalp Detoxification", "Sensory Reset"]
  },
  {
    id: 8,
    title: "Brazilian Lymphatic Drainage for Hands",
    duration: "45",
    durationUnit: "min",
    category: "body",
    tagline: "Arm Contours & Node Clearance",
    description: "Glow Flow hand lymphatic drainage is a specialized treatment focused on detoxifying, sculpting and revitalizing the hands and arms through precise lymphatic techniques. The session includes gentle rhythmic strokes, upward lifting movements, lymphatic pumping toward the underarms and targeted sculpting using advanced tools to enhance tone and definition.",
    features: ["Underarm Pumping", "Arm Firming & Tone", "Fluid Retention Release"]
  },
  {
    id: 9,
    title: "Brazilian Lymphatic Drainage for Breast",
    duration: "60",
    durationUnit: "min",
    category: "body",
    tagline: "Gentle Pectoral & Node Decongestion",
    description: "Glow Flow breast lymphatic drainage is a non-invasive therapy designed to detox, sculpt and rejuvenate the breast area naturally. The technique involves rhythmic hand movements, upward lifting strokes, circular pumping around lymph nodes and sculpting massage directed toward the underarms and collarbone to improve lymph flow, with a gentle polish and deeply hydrating mask.",
    features: ["Natural Tissue Lifting", "Hydrating Firming Mask", "Relief from Heaviness"]
  },
  {
    id: 10,
    title: "Glow Flow Stomach Lymphatic Drainage",
    duration: "90",
    durationUnit: "min",
    category: "body",
    tagline: "Deep Abdominal Detox & Cupping",
    description: "The Glow Flow stomach lymphatic drainage is a deeply therapeutic treatment designed to detoxify, de-bloat and sculpt the abdominal area. The service begins with a stomach lymphatic drainage massage, followed by stomach cupping therapy, gua sha, Brazilian wooden roller massage, body polishing, sculpting machine, body wrapping, and calming shoulder massage.",
    features: ["Abdominal Cupping & Gua Sha", "Brazilian Wooden Roller", "Stomach Sculpting Machine & Wrap"]
  },
  {
    id: 11,
    title: "Brazilian Lymphatic Drainage for Back",
    duration: "60",
    durationUnit: "min",
    category: "body",
    tagline: "Spinal Decompression & Back Detox",
    description: "Experience the ultimate back detox with Brazilian lymphatic drainage for back. This revitalizing treatment begins with a therapeutic lymphatic massage to stimulate circulation, release trapped toxins and reduce bloating. Using sculpting tools, we contour the back to relieve tension, followed by gentle exfoliation and deep nourishment to hydrate and promote elasticity.",
    features: ["Posture & Tension Relief", "Back Contour Sculpting", "Smoothing Exfoliation"]
  },
  {
    id: 12,
    title: "Brazilian Lymphatic Drainage for Legs",
    duration: "80",
    durationUnit: "min",
    category: "body",
    tagline: "Cellulite & Heavy Legs Clearance",
    description: "Experience the ultimate leg transformation with Brazilian lymphatic drainage. This rejuvenating treatment begins with a detoxifying lymphatic drainage massage to stimulate circulation and reduce water retention. Using specialized sculpting tools, we contour and define the legs, targeting stubborn puffiness, gentle exfoliation, and deep skin nourishment to reduce cellulite.",
    features: ["Reduces Cellulite & Bloating", "Popliteal & Femoral Clearance", "Light, Sculpted Legs"]
  },
  {
    id: 13,
    title: "Glow Flow Full Body Lymphatic Drainage",
    duration: "3",
    durationUnit: "hours",
    category: "fullbody",
    tagline: "Two Skilled Therapists Ritual",
    description: "Glow Flow full body lymphatic drainage is a holistic therapy designed to detoxify, sculpt and rejuvenate the entire body. The treatment includes face, chest, stomach, back, legs and hand lymphatic drainage using rhythmic massage techniques, upward lifting strokes and targeted lymphatic pumping. Two skilled therapists work simultaneously to ensure balanced, effective and deeply relaxing results.",
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
    <section id="treatments" className="relative py-24 px-6 md:px-12 max-w-7xl mx-auto border-b border-[#D4AF37]/25 font-commissioner overflow-hidden">
      {/* Botanical Leaves Background Layer inspired by PDF */}
      <div className="absolute top-0 right-0 w-72 sm:w-96 md:w-[480px] pointer-events-none opacity-45 select-none z-0">
        <img
          src="/botanical-leaves-right.png"
          alt=""
          className="w-full h-auto object-contain transform translate-x-12 -translate-y-8"
        />
      </div>
      <div className="absolute bottom-16 left-0 w-72 sm:w-96 md:w-[440px] pointer-events-none opacity-35 select-none z-0">
        <img
          src="/botanical-leaves-left.png"
          alt=""
          className="w-full h-auto object-contain transform -translate-x-16 translate-y-12"
        />
      </div>

      {/* Header */}
      <div className="text-center mb-16 relative z-10">

        <h2 className="font-serif-luxury text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-normal leading-[0.9] tracking-tight text-white mb-4">
          <span className="gold-gradient-text">Treatment Protocols</span>
        </h2>

        <p className="text-xs md:text-sm text-[#D8C9B4] font-light max-w-2xl mx-auto leading-relaxed">
          Bespoke lymphatic drainage, natural facelifts, and body contouring protocols designed to sculpt, release retained fluid, and restore vitality.
        </p>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap justify-center items-center gap-2 mt-8">
          {[
            { id: 'all', label: 'All Offerings (13)' },
            { id: 'facial', label: 'Facial Protocols (6)' },
            { id: 'body', label: 'Targeted Body (6)' },
            { id: 'fullbody', label: 'Full Body Ritual (1)' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`text-xs uppercase tracking-wider font-semibold px-5 py-2.5 rounded-full transition-all cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-[#F3E5C8] via-[#E8D58C] to-[#D4AF37] text-[#0A2018] shadow-md'
                  : 'bg-[#14382A]/70 text-[#E8D58C] border border-[#D4AF37]/30 hover:border-[#D4AF37]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Services List in PDF Card Design without Pricing */}
      <div className="space-y-6 relative z-10">
        {filteredOfferings.map((service) => (
          <div
            key={service.id}
            onClick={() => onSelectTreatment(service.title)}
            className="emerald-card p-6 sm:p-8 rounded-2xl md:rounded-3xl border border-[#D4AF37]/35 hover:border-[#E8D58C] cursor-pointer flex flex-col lg:flex-row lg:items-center justify-between gap-6 group relative"
          >
            {/* Left: Duration Badge & Service Details */}
            <div className="flex items-start sm:items-center gap-5 sm:gap-7 flex-1">
              
              {/* Circular Gold Duration Badge from PDF */}
              <div className="w-18 h-18 sm:w-22 sm:h-22 rounded-full border-2 border-[#D4AF37] bg-[#0E2D21] flex flex-col items-center justify-center shrink-0 shadow-lg text-[#E8D58C] group-hover:border-[#F3E5C8] transition-colors">
                <span className="font-serif-luxury text-2xl sm:text-3xl font-bold leading-none">
                  {service.duration}
                </span>
                <span className="text-[10px] sm:text-xs uppercase tracking-widest font-semibold text-[#D8C9B4] mt-0.5">
                  {service.durationUnit}
                </span>
              </div>

              {/* Title & Description */}
              <div className="flex-1">
                <div className="flex items-center gap-3 flex-wrap mb-1">
                  <h3 className="font-serif-luxury text-2xl sm:text-3xl md:text-4xl text-white font-normal group-hover:text-[#E8D58C] transition-colors">
                    {service.title}
                  </h3>
                  {service.tagline && (
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-[#E8D58C] bg-[#0D281E] px-3 py-0.5 rounded-full border border-[#D4AF37]/30">
                      {service.tagline}
                    </span>
                  )}
                </div>

                <p className="text-xs sm:text-sm text-[#D8C9B4] font-light leading-relaxed mt-2 max-w-3xl">
                  {service.description}
                </p>

                {service.features && (
                  <div className="flex flex-wrap gap-2 mt-3.5">
                    {service.features.map((feat, fIdx) => (
                      <span
                        key={fIdx}
                        className="inline-flex items-center gap-1.5 text-[11px] text-[#F5E8D0]/90 bg-[#0A2018]/60 px-2.5 py-1 rounded-md border border-[#D4AF37]/20"
                      >
                        <CheckCircle className="w-3 h-3 text-[#E8D58C]" />
                        <span>{feat}</span>
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Right: Booking Action */}
            <div className="flex items-center justify-end pt-4 lg:pt-0 border-t lg:border-t-0 border-[#D4AF37]/20 shrink-0">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onSelectTreatment(service.title);
                }}
                className="gold-btn text-xs tracking-wider uppercase font-bold px-7 py-3.5 rounded-full flex items-center gap-2 cursor-pointer shadow-md hover:brightness-105 shrink-0"
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
