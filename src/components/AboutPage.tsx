import { ShieldCheck, Award, MapPin, Phone, Mail } from 'lucide-react';

interface AboutPageProps {
  onOpenBooking: () => void;
}

export const clinicDisciplines = [
  {
    title: "Facial Osteopathy & Contour",
    subtitle: "Precision Fascia Release",
    description: "Specialized manual pumping to unmask defined cheekbones, chisel jawlines, and alleviate orbital fluid congestion.",
    badge: "Clinical Facial Protocol",
  },
  {
    title: "Systemic Node Clearance",
    subtitle: "Full Body Lymphatic Mapping",
    description: "Systemic node stimulation to facilitate deep tissue metabolic detoxification, reduce whole-body water retention, and restore balance.",
    badge: "Whole-Body Protocol",
  },
  {
    title: "Sculpting Tools & Cryo-Jade",
    subtitle: "Ancient & Modern Synergy",
    description: "Integrates medicinal jade Gua Sha, Kansa wands, Brazilian wooden rollers, and microcurrent sculpting devices.",
    badge: "Advanced Tools",
  },
  {
    title: "Abdominal & Waist Contouring",
    subtitle: "Visceral Drainage & Cupping",
    description: "Targeted stomach de-bloating combining vacuum cupping, manual peristaltic pumping, and toning body wraps.",
    badge: "Targeted Body",
  },
  {
    title: "Post-Treatment Recovery Care",
    subtitle: "Gentle Fluid Management",
    description: "Gentle, non-invasive rhythmic osteopathic pressure designed to speed fluid clearance, ease inflammation, and restore skin elasticity.",
    badge: "Recovery Protocol",
  },
  {
    title: "Dual-Therapist Full Body Ritual",
    subtitle: "Synchronized Holistic Therapy",
    description: "Two skilled lymphatic practitioners working simultaneously across full body pathways for unmatched relaxation and contouring results.",
    badge: "Signature Ritual",
  },
];

export default function AboutPage({ onOpenBooking }: AboutPageProps) {
  return (
    <div className="relative pt-28 pb-20 px-6 md:px-12 max-w-7xl mx-auto min-h-screen bg-[#0D281E] text-[#F5E8D0] font-commissioner overflow-hidden">
      {/* Botanical Leaves Background Layer */}
      <div className="absolute top-10 right-0 w-72 sm:w-96 pointer-events-none opacity-40 select-none z-0">
        <img
          src="/botanical-leaves-right.png"
          alt=""
          className="w-full h-auto object-contain transform translate-x-12 -translate-y-8"
        />
      </div>
      <div className="absolute top-1/2 left-0 w-72 sm:w-80 pointer-events-none opacity-30 select-none z-0">
        <img
          src="/botanical-leaves-left.png"
          alt=""
          className="w-full h-auto object-contain transform -translate-x-12"
        />
      </div>
      
      {/* SECTION 1: ABOUT GLOW FLOW & FOUNDER PHILOSOPHY */}
      <div className="mb-24 relative z-10">
        <div className="flex items-center justify-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#E8D58C] mb-3">
          <span className="w-8 h-[1px] bg-[#D4AF37]/50" />
          <span>Clinic Sanctuary & Philosophy</span>
          <span className="w-8 h-[1px] bg-[#D4AF37]/50" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mt-6">
          
          {/* Left Column: Signature Green & Gold Zen Emblem Frame (NO FACES) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border-2 border-[#D4AF37]/40 shadow-2xl bg-gradient-to-br from-[#14382A] via-[#0E2D21] to-[#081C14] p-8 sm:p-10 flex flex-col items-center justify-center text-center">
              
              {/* Concentric Gold Rings Graphic inspired by PDF Cover */}
              <div className="relative w-44 h-44 sm:w-52 sm:h-52 rounded-full border border-[#D4AF37]/30 flex items-center justify-center mb-6">
                <div className="w-36 h-36 sm:w-42 sm:h-42 rounded-full border border-[#D4AF37]/50 flex items-center justify-center">
                  <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full border-2 border-[#E8D58C] bg-[#0A2018] flex flex-col items-center justify-center shadow-inner">
                    <span className="font-serif-luxury text-4xl sm:text-5xl font-bold text-[#E8D58C] leading-none">
                      GF
                    </span>
                    <span className="text-[9px] uppercase tracking-widest text-[#D8C9B4] font-semibold mt-1">
                      CLINIC
                    </span>
                  </div>
                </div>
                {/* Floating gold orb */}
                <div className="absolute top-2 right-6 w-3 h-3 rounded-full bg-[#E8D58C] shadow-[0_0_12px_#E8D58C]" />
              </div>

              <div className="text-white">
                <h4 className="font-serif-luxury text-3xl sm:text-4xl leading-tight font-normal text-white">
                  Glow Flow Studio
                </h4>
                <p className="text-xs text-[#D8C9B4] font-light mt-2 max-w-xs leading-relaxed">
                  Bandra West, Mumbai &bull; Non-invasive natural facelift and systemic fluid therapy
                </p>
              </div>

              {/* Verified Badge */}
              <div className="mt-6 pt-5 border-t border-[#D4AF37]/25 w-full flex items-center justify-around text-xs text-[#E8D58C]">
                <div className="flex items-center gap-1.5">
                  <Award className="w-4 h-4" />
                  <span>Clinical Standard</span>
                </div>
                <div className="w-1 h-1 rounded-full bg-[#D4AF37]" />
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4" />
                  <span>100% Non-Invasive</span>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Detailed Text & Story */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="font-serif-luxury text-4xl sm:text-5xl md:text-6xl text-white font-normal leading-[1.05] tracking-tight">
              <span className="gold-gradient-text">"True facial definition is not created on the surface;</span>{" "}
              <span>it is unmasked from within."</span>
            </h1>

            <div className="w-20 h-[2px] bg-gradient-to-r from-[#D4AF37] to-transparent my-4" />

            <p className="text-[#D8C9B4] text-base md:text-lg leading-relaxed font-light">
              Founded in Mumbai, GlowFlow Clinic was established to offer a refined clinical standard for manual lymphatic drainage, natural facelifts, and biological rejuvenation.
            </p>

            <p className="text-[#D8C9B4] text-sm md:text-base leading-relaxed font-light">
              Trained in osteopathic fascia release, Brazilian lymphatic drainage, and anatomical fluid mapping, our practitioners utilize a rhythmic, pump-driven methodology. We naturally sculpt jawlines, decongest orbital fluid, relieve whole-body bloating, and restore youthful elasticity without needles or invasive interventions.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#D4AF37]/25">
              <div className="flex items-start gap-3 p-4 rounded-xl emerald-card">
                <ShieldCheck className="w-5 h-5 text-[#E8D58C] shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-semibold text-white uppercase tracking-wider">
                    Non-Invasive Protocols
                  </div>
                  <div className="text-[11px] text-[#D8C9B4] mt-0.5">
                    Anatomical rhythm & natural sculpting
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-xl emerald-card">
                <MapPin className="w-5 h-5 text-[#E8D58C] shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-semibold text-white uppercase tracking-wider">
                    Bandra West Sanctuary
                  </div>
                  <div className="text-[11px] text-[#D8C9B4] mt-0.5">
                    Private bespoke clinic suites
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenBooking}
                className="gold-btn text-xs tracking-widest uppercase font-bold px-8 py-4 rounded-full cursor-pointer shadow-lg hover:brightness-105 transition-all"
              >
                Book a Private Consultation
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* SECTION 2: CLINICAL METHODOLOGY & DISCIPLINES (NO HUMAN FACES) */}
      <div className="pt-12 border-t border-[#D4AF37]/25">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#E8D58C] mb-2">
            <span className="w-8 h-[1px] bg-[#D4AF37]/50" />
            <span>Master Therapies</span>
            <span className="w-8 h-[1px] bg-[#D4AF37]/50" />
          </div>
          <h2 className="font-serif-luxury text-5xl sm:text-6xl md:text-7xl text-white font-normal leading-none tracking-wide">
            <span className="gold-gradient-text">Our Clinical Disciplines</span>
          </h2>
          <p className="text-xs md:text-sm text-[#D8C9B4] font-light max-w-xl mx-auto mt-2">
            Every session is customized by certified specialists in manual lymphatic mapping, facial sculpting, and body detox protocols.
          </p>
        </div>

        {/* 6 Grid of Disciplines with Gold Accents */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {clinicDisciplines.map((item, idx) => (
            <div
              key={idx}
              className="emerald-card p-6 rounded-2xl flex flex-col justify-between text-left group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#E8D58C] bg-[#0A2018] px-3 py-1 rounded-full border border-[#D4AF37]/30">
                    {item.badge}
                  </span>
                </div>

                <div className="text-xs text-[#D8C9B4]/80 uppercase tracking-wider mb-1">
                  {item.subtitle}
                </div>

                <h3 className="font-serif-luxury text-2xl md:text-3xl text-white font-normal leading-snug mb-3 group-hover:text-[#E8D58C] transition-colors">
                  {item.title}
                </h3>

                <div className="w-12 h-[1px] bg-[#D4AF37]/35 mb-3" />

                <p className="text-xs text-[#D8C9B4] leading-relaxed font-light">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-[#D4AF37]/20 flex items-center justify-between text-[11px] text-[#E8D58C] font-semibold">
                <span>By Certified Specialist</span>
                <span className="w-2 h-2 rounded-full bg-[#E8D58C]" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION 3: CLINIC CONTACT STRIPE */}
      <div className="mt-16 p-8 rounded-3xl emerald-card border border-[#D4AF37]/35 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <div className="text-xs uppercase tracking-widest text-[#E8D58C] font-semibold mb-1">
            Clinic Visit & Consultations
          </div>
          <h3 className="font-serif-luxury text-3xl text-white font-normal">
            GlowFlow Clinic Sanctuary &bull; Bandra West
          </h3>
          <p className="text-xs text-[#D8C9B4] font-light mt-1">
            New Clifton RHS, B wing, Ground floor, flat number 4, Prof Almeida Road, Bandra West, Mumbai - 400052
          </p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="tel:8104101177"
            className="gold-btn text-xs tracking-wider uppercase font-bold px-6 py-3 rounded-full flex items-center gap-2"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Call +91 8104101177</span>
          </a>
          <a
            href="mailto:2glowflow@gmail.com"
            className="gold-btn-outline text-xs tracking-wider uppercase font-semibold px-6 py-3 rounded-full flex items-center gap-2"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Email Clinic</span>
          </a>
        </div>
      </div>

    </div>
  );
}
