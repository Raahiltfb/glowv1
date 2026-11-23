import { useState } from 'react';
import { ArrowRight, Clock, CheckCircle, ChevronDown } from 'lucide-react';

export interface TreatmentService {
  id: number;
  title: string;
  duration: string;
  durationUnit: string;
  category: 'facial' | 'body' | 'fullbody';
  tagline?: string;
  description?: string;
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
    category: "facial",
    tagline: "Cranial Tension & Scalp Wellness",
    description: "A deeply relaxing therapy designed to stimulate lymph flow, release built-up tension, improve circulation and promote overall scalp wellness naturally. The technique involves gentle rhythmic movements, pressure point stimulation and sculpting massage focused around the scalp, neck and shoulder area to encourage detoxification and relaxation. The process helps reduce puffiness, heaviness and stress while boosting blood circulation and supporting healthier scalp function. Benefits include relief from headaches and tension, reduced fluid retention, improved relaxation, enhanced circulation, a refreshed feeling and an overall sense of rejuvenation and well-being. Regular sessions support stress relief, scalp nourishment and a calmer mind and body.",
    features: ["Headache & Tension Relief", "Scalp Detoxification", "Sensory Reset"]
  },
  {
    id: 8,
    title: "Neck & Shoulder Lymphatic Drainage w Ultrasound",
    duration: "60",
    durationUnit: "min",
    category: "body",
    tagline: "Deep Tissue Ultrasound & Nodal Release",
    description: "This involves gentle, rhythmic movements around the collarbones, sides of the neck, and shoulder region, directing lymph toward the major lymphatic drainage areas near the collarbones. It may help reduce mild fluid retention, puffiness, and swelling while promoting relaxation. The Ultrasound Therapy profile highlights how specialized clinical centers utilize ultrasound machines to deliver deep tissue heating, which increases blood flow and relaxes stubborn myofascial knots.",
    features: ["Ultrasound Deep Heating", "Collarbone Clearance", "Myofascial Tension Release"]
  },
  {
    id: 9,
    title: "Brazilian Lymphatic Drainage for Hands",
    duration: "45",
    durationUnit: "min",
    category: "body",
    tagline: "Arm Contours & Node Clearance",
    description: "Glow Flow hand lymphatic drainage is a specialized treatment focused on detoxifying, sculpting and revitalizing the hands and arms through precise lymphatic techniques. The session includes gentle rhythmic strokes, upward lifting movements, lymphatic pumping toward the underarms and targeted sculpting using advanced tools to enhance tone and definition. The treatment works on releasing fluid retention, improving lymph circulation and refining arm contours, followed by deep hydration to restore softness and skin health. Benefits include reduced puffiness, improved circulation, smoother and firmer skin, visible sculpting of the hands and arms, relief from heaviness and a lighter, more toned, and refreshed appearance with regular sessions.",
    features: ["Underarm Pumping", "Arm Firming & Tone", "Fluid Retention Release"]
  },
  {
    id: 10,
    title: "Brazilian Lymphatic Drainage for Breast",
    duration: "60",
    durationUnit: "min",
    category: "body",
    tagline: "Gentle Pectoral & Node Decongestion",
    description: "Glow Flow breast lymphatic drainage is a non-invasive therapy designed to detox, sculpt and rejuvenate the breast area naturally. The technique involves rhythmic hand movements, upward lifting strokes, circular pumping around lymph nodes and sculpting massage directed toward the underarms and collarbone to improve lymph flow. The process also includes a gentle polish to exfoliate and boost circulation, followed by a deeply hydrating mask to nourish and firm the skin. Benefits include reduced heaviness and fluid retention, improved firmness and shape, enhanced circulation, relief from tenderness, smoother skin texture and overall breast wellness. Regular sessions support natural lifting and a more contoured appearance.",
    features: ["Natural Tissue Lifting", "Hydrating Firming Mask", "Relief from Heaviness"]
  },
  {
    id: 11,
    title: "Brazilian Lymphatic Drainage for Glutes",
    duration: "60",
    durationUnit: "min",
    category: "body",
    tagline: "Glute Sculpting & Fluid Flow",
    description: "Glow Flow breast lymphatic drainage is a non-invasive therapy designed to detox, sculpt and rejuvenate the breast area naturally. The technique involves rhythmic hand movements, upward lifting strokes, circular pumping around lymph nodes and sculpting massage directed toward the underarms and collarbone to improve lymph flow. The process also includes a gentle polish to exfoliate and boost circulation, followed by a deeply hydrating mask to nourish and firm the skin. Benefits include reduced heaviness and fluid retention, improved firmness and shape, enhanced circulation, relief from tenderness, smoother skin texture and overall breast wellness. Regular sessions support natural lifting and a more contoured appearance.",
    features: ["Glute Contour Lift", "Nodal Drainage Pumping", "Fascia Release & Tone"]
  },
  {
    id: 12,
    title: "Glow Flow Stomach Lymphatic Drainage",
    duration: "90",
    durationUnit: "min",
    category: "body",
    tagline: "Deep Abdominal Detox & Cupping",
    description: "The Glow Flow stomach lymphatic drainage is a deeply therapeutic treatment designed to detoxify, de-bloat and sculpt the abdominal area. The service begins with a stomach lymphatic drainage massage, followed by stomach cupping therapy. Next, gua sha massage and Brazilian wooden roller massage further enhance lymph flow and break down fluid retention. The skin is then renewed through body polishing and cleansing, preparing it for the stomach sculpting machine to tone and firm. Finally, a relaxing stomach body wrapping nourishes the skin, and a calming shoulder massage completes the experience, leaving you lighter, sculpted and deeply relaxed.",
    features: ["Abdominal Cupping & Gua Sha", "Brazilian Wooden Roller", "Stomach Sculpting Machine & Wrap"]
  },
  {
    id: 13,
    title: "Brazilian Lymphatic Drainage for Back",
    duration: "60",
    durationUnit: "min",
    category: "body",
    tagline: "Spinal Decompression & Back Detox",
    description: "Experience the ultimate back detox with Brazilian lymphatic drainage for back. This revitalizing treatment begins with a therapeutic lymphatic massage to stimulate circulation, release trapped toxins and reduce bloating. Using sculpting tools, we contour the back to relieve tension and define natural curves. A gentle exfoliation smooths the skin, removing dead cells and enhancing glow. The session ends with deep nourishment to hydrate the skin, reduce inflammation and promote elasticity. The result? A lighter, sculpted back with improved posture, smoother texture and a renewed sense of wellness. Ideal for those seeking relief, radiance and full-body balance from within.",
    features: ["Posture & Tension Relief", "Back Contour Sculpting", "Smoothing Exfoliation"]
  },
  {
    id: 14,
    title: "Brazilian Lymphatic Drainage for Legs",
    duration: "80",
    durationUnit: "min",
    category: "body",
    tagline: "Cellulite & Heavy Legs Clearance",
    description: "Experience the ultimate leg transformation with Brazilian lymphatic drainage. This rejuvenating treatment begins with a detoxifying lymphatic drainage massage to stimulate circulation and reduce water retention. Using specialized sculpting tools, we contour and define the legs, targeting stubborn puffiness and improving tone. Gentle exfoliation follows to smooth the skin and enhance product absorption. The final step is deep skin nourishment, delivering essential hydration and nutrients to reduce cellulite and boost elasticity. The result? Visibly slimmer, sculpted legs that feel lighter, smoother and refreshed. A perfect session for those seeking wellness, beauty and a natural glow from within.",
    features: ["Reduces Cellulite & Bloating", "Popliteal & Femoral Clearance", "Light, Sculpted Legs"]
  },
  {
    id: 15,
    title: "Glow Flow Full Body Lymphatic Drainage",
    duration: "3",
    durationUnit: "hours",
    category: "fullbody",
    tagline: "Two Skilled Therapists Ritual",
    description: "Glow Flow full body lymphatic drainage is a holistic therapy designed to detoxify, sculpt and rejuvenate the entire body. The treatment includes face, chest, stomach, back, legs and hand lymphatic drainage using rhythmic massage techniques, upward lifting strokes and targeted lymphatic pumping to stimulate flow and release fluid retention. Sculpting tools are used to enhance contouring and improve muscle tone, while selective polishing in specific areas boosts circulation and smoothens skin texture. The session is completed with full body hydration to deeply nourish the skin. Two skilled therapists work simultaneously to ensure balanced, effective and deeply relaxing full body results. Benefits include reduced bloating and puffiness, improved circulation, visible sculpting, lighter body feel, enhanced skin texture and overall relaxation and wellness.",
    features: ["Two Therapists Simultaneously", "Head-to-Toe Clearance", "Maximum Systemic Detox"]
  }
];

export default function TreatmentsSection({ onSelectTreatment }: TreatmentsSectionProps) {
  const [openIds, setOpenIds] = useState<number[]>([1]);

  const toggleItem = (id: number) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const faceServices = offeringsList.slice(0, 7);
  const nonFaceServices = offeringsList.slice(7);

  return (
    <section id="treatments" className="relative py-14 sm:py-20 md:py-24 px-4 sm:px-8 md:px-12 max-w-7xl mx-auto border-b border-[#D4AF37]/25 font-commissioner overflow-hidden">
      {/* Botanical Leaves Background Layer */}
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
      <div className="text-center mb-10 sm:mb-14 relative z-10">
        <div className="flex items-center justify-center gap-2.5 sm:gap-3 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#E8D58C] mb-2">
          <span className="w-6 sm:w-8 h-[1px] bg-[#D4AF37]/50" />
          <span>Clinical Offerings & Protocols</span>
          <span className="w-6 sm:w-8 h-[1px] bg-[#D4AF37]/50" />
        </div>
        <h2 className="font-serif-luxury text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal leading-[1.05] sm:leading-[0.9] tracking-tight text-white mb-3 sm:mb-4">
          <span className="gold-gradient-text">Treatment Protocols</span>
        </h2>
        <p className="text-xs sm:text-sm text-[#D8C9B4] font-light max-w-2xl mx-auto leading-relaxed px-2">
          Bespoke lymphatic drainage, natural facelifts, and body contouring protocols designed to sculpt, release retained fluid, and restore vitality.
        </p>
      </div>

      {/* SECTION A: 7 FACE SERVICES (7 DROPDOWNS) */}
      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="mb-4 sm:mb-6 flex items-center justify-between border-b border-[#D4AF37]/25 pb-3">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#E8D58C]" />
            <h3 className="font-serif-luxury text-2xl sm:text-3xl text-white font-normal">
              Facial Protocols <span className="text-sm font-sans text-[#E8D58C] font-semibold">(7 Services)</span>
            </h3>
          </div>
          <span className="text-[11px] text-[#D8C9B4]/70 uppercase tracking-wider hidden sm:inline-block">
            Tap to view protocol details
          </span>
        </div>

        <div className="space-y-3 sm:space-y-3.5">
          {faceServices.map((service, idx) => {
            const isOpen = openIds.includes(service.id);
            return (
              <div
                key={service.id}
                className="emerald-card rounded-xl sm:rounded-2xl border border-[#D4AF37]/35 overflow-hidden transition-all duration-300"
              >
                {/* Dropdown Header Row */}
                <button
                  type="button"
                  onClick={() => toggleItem(service.id)}
                  className="w-full p-3.5 sm:p-5 flex items-center justify-between gap-3 text-left cursor-pointer hover:bg-[#184232]/50 transition-colors"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                    <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-[#D4AF37]/50 bg-[#0E2D21] flex items-center justify-center text-xs font-bold text-[#E8D58C] shrink-0">
                      0{idx + 1}
                    </span>
                    <div className="min-w-0">
                      <h4 className="font-serif-luxury text-xl sm:text-2xl text-white font-normal truncate">
                        {service.title}
                      </h4>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 sm:gap-3 shrink-0">
                    <div className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full border border-[#D4AF37]/45 bg-[#0E2D21] text-[#E8D58C] text-xs font-bold">
                      <Clock className="w-3.5 h-3.5 text-[#E8D58C]" />
                      <span>{service.duration} {service.durationUnit.toUpperCase()}</span>
                    </div>
                    <div className={`p-1 text-[#E8D58C] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                      <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                  </div>
                </button>

                {/* Dropdown Drawer: Description, Features & Reserve Button */}
                {isOpen && (
                  <div className="px-4 pb-4 pt-3 sm:px-5 sm:pb-5 border-t border-[#D4AF37]/20 flex flex-col gap-3.5 animate-fade bg-[#0A2018]/40">
                    {service.description && (
                      <p className="text-xs sm:text-sm text-[#D8C9B4] font-light leading-relaxed">
                        {service.description}
                      </p>
                    )}

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-1 border-t border-[#D4AF37]/15">
                      {service.features && (
                        <div className="flex flex-wrap gap-1.5 sm:gap-2">
                          {service.features.map((feat, fIdx) => (
                            <span
                              key={fIdx}
                              className="inline-flex items-center gap-1.5 text-[11px] text-[#F5E8D0]/90 bg-[#0D281E] px-2.5 py-1 rounded-md border border-[#D4AF37]/25"
                            >
                              <CheckCircle className="w-3 h-3 text-[#E8D58C] shrink-0" />
                              <span>{feat}</span>
                            </span>
                          ))}
                        </div>
                      )}

                      <button
                        onClick={() => onSelectTreatment(service.title)}
                        className="gold-btn text-xs tracking-wider uppercase font-bold py-2.5 px-6 rounded-full flex items-center justify-center gap-2 cursor-pointer shadow-md hover:brightness-105 shrink-0 w-full sm:w-auto text-center"
                      >
                        <span>Reserve Ritual</span>
                        <ArrowRight className="w-3.5 h-3.5 text-[#0A2018]" />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* SECTION B: NON-FACE SERVICES BENEATH IT */}
        <div className="mt-12 sm:mt-16 pt-8 sm:pt-10 border-t border-[#D4AF37]/25">
          <div className="mb-4 sm:mb-6 flex items-center justify-between border-b border-[#D4AF37]/25 pb-3">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#E8D58C]" />
              <h3 className="font-serif-luxury text-2xl sm:text-3xl text-white font-normal">
                Targeted Body & Full Body Rituals <span className="text-sm font-sans text-[#E8D58C] font-semibold">(8 Services)</span>
              </h3>
            </div>
            <span className="text-[11px] text-[#D8C9B4]/70 uppercase tracking-wider hidden sm:inline-block">
              Tap to view protocol details
            </span>
          </div>

          <div className="space-y-3 sm:space-y-3.5">
            {nonFaceServices.map((service, idx) => {
              const isOpen = openIds.includes(service.id);
              return (
                <div
                  key={service.id}
                  className="emerald-card rounded-xl sm:rounded-2xl border border-[#D4AF37]/35 overflow-hidden transition-all duration-300"
                >
                  {/* Dropdown Header Row */}
                  <button
                    type="button"
                    onClick={() => toggleItem(service.id)}
                    className="w-full p-3.5 sm:p-5 flex items-center justify-between gap-3 text-left cursor-pointer hover:bg-[#184232]/50 transition-colors"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                      <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-[#D4AF37]/50 bg-[#0E2D21] flex items-center justify-center text-xs font-bold text-[#E8D58C] shrink-0">
                        0{idx + 8}
                      </span>
                      <div className="min-w-0">
                        <h4 className="font-serif-luxury text-xl sm:text-2xl text-white font-normal truncate">
                          {service.title}
                        </h4>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 sm:gap-3 shrink-0">
                      <div className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full border border-[#D4AF37]/45 bg-[#0E2D21] text-[#E8D58C] text-xs font-bold">
                        <Clock className="w-3.5 h-3.5 text-[#E8D58C]" />
                        <span>{service.duration} {service.durationUnit.toUpperCase()}</span>
                      </div>
                      <div className={`p-1 text-[#E8D58C] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                        <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                    </div>
                  </button>

                  {/* Dropdown Drawer: Description, Features & Reserve Button */}
                  {isOpen && (
                    <div className="px-4 pb-4 pt-3 sm:px-5 sm:pb-5 border-t border-[#D4AF37]/20 flex flex-col gap-3.5 animate-fade bg-[#0A2018]/40">
                      {service.description && (
                        <p className="text-xs sm:text-sm text-[#D8C9B4] font-light leading-relaxed">
                          {service.description}
                        </p>
                      )}

                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-1 border-t border-[#D4AF37]/15">
                        {service.features && (
                          <div className="flex flex-wrap gap-1.5 sm:gap-2">
                            {service.features.map((feat, fIdx) => (
                              <span
                                key={fIdx}
                                className="inline-flex items-center gap-1.5 text-[11px] text-[#F5E8D0]/90 bg-[#0D281E] px-2.5 py-1 rounded-md border border-[#D4AF37]/25"
                              >
                                <CheckCircle className="w-3 h-3 text-[#E8D58C] shrink-0" />
                                <span>{feat}</span>
                              </span>
                            ))}
                          </div>
                        )}

                        <button
                          onClick={() => onSelectTreatment(service.title)}
                          className="gold-btn text-xs tracking-wider uppercase font-bold py-2.5 px-6 rounded-full flex items-center justify-center gap-2 cursor-pointer shadow-md hover:brightness-105 shrink-0 w-full sm:w-auto text-center"
                        >
                          <span>Reserve Ritual</span>
                          <ArrowRight className="w-3.5 h-3.5 text-[#0A2018]" />
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Footer address stripe */}
      <div className="mt-14 pt-6 border-t border-[#D4AF37]/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#D8C9B4]/80 relative z-10 max-w-4xl mx-auto">
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4 text-[#E8D58C]" />
          <span>Sessions by Appointment &bull; +91 81041 01177</span>
        </div>
        <div>
          New Clifton RHS, Bandra West, Mumbai 400052
        </div>
      </div>

    </section>
  );
}
