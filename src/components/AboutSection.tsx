import { ShieldCheck } from 'lucide-react';

interface AboutSectionProps {
  onOpenBooking: () => void;
}

interface AboutSectionProps {
  onOpenBooking: () => void;
}

export default function AboutSection({ onOpenBooking }: AboutSectionProps) {
  return (
    <section id="about" className="relative py-16 sm:py-24 px-4 sm:px-8 md:px-12 max-w-7xl mx-auto border-b border-[#D4AF37]/25 font-commissioner overflow-hidden">
      {/* Botanical Leaves Background Layer */}
      <div className="absolute top-10 right-0 w-52 sm:w-80 md:w-96 pointer-events-none opacity-15 sm:opacity-30 md:opacity-40 select-none z-0">
        <img
          src="/botanical-leaves-right.png"
          alt=""
          className="w-full h-auto object-contain transform translate-x-12 -translate-y-8"
        />
      </div>
      <div className="absolute bottom-10 left-0 w-52 sm:w-80 pointer-events-none opacity-15 sm:opacity-25 md:opacity-30 select-none z-0">
        <img
          src="/botanical-leaves-left.png"
          alt=""
          className="w-full h-auto object-contain transform -translate-x-12"
        />
      </div>

      {/* SECTION 1: ABOUT GLOW FLOW & FOUNDER PHILOSOPHY */}
      <div className="mb-14 sm:mb-20 relative z-10">
        <div className="flex items-center justify-center gap-2.5 sm:gap-3 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#E8D58C] mb-3">
          <span className="w-6 sm:w-8 h-[1px] bg-[#D4AF37]/50" />
          <span>Clinic Philosophy</span>
          <span className="w-6 sm:w-8 h-[1px] bg-[#D4AF37]/50" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch mt-5 sm:mt-6">

          {/* Left Column: Signature Green & Gold Zen Emblem Frame */}
          <div className="lg:col-span-5 flex">
            <div className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-[#D4AF37]/40 shadow-2xl bg-gradient-to-br from-[#14382A] via-[#0E2D21] to-[#081C14] p-6 sm:p-10 lg:p-12 flex flex-col items-center justify-center text-center min-h-[340px] sm:min-h-[420px] lg:min-h-[480px]">

              {/* Logo Emblem */}
              <div className="w-full flex flex-col items-center justify-center my-auto">
                <img
                  src="/glowflow-logo-transparent.png"
                  alt="GlowFlow"
                  className="w-52 sm:w-64 lg:w-80 max-w-[320px] h-auto object-contain filter drop-shadow-[0_8px_20px_rgba(0,0,0,0.35)]"
                />
              </div>

            </div>
          </div>

          {/* Right Column: Detailed Text & Story */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6">
            <h2 className="font-serif-luxury text-3xl sm:text-5xl md:text-6xl text-white font-normal leading-[1.1] sm:leading-[1.05] tracking-tight">
              <span className="gold-gradient-text">"True facial definition is not created on the surface;</span>{" "}
              <span>it is unmasked from within."</span>
            </h2>

            <div className="w-16 sm:w-20 h-[2px] bg-gradient-to-r from-[#D4AF37] to-transparent my-3 sm:my-4" />

            <p className="text-[#D8C9B4] text-sm sm:text-base md:text-lg leading-relaxed font-light">
              Founded in Mumbai, GlowFlow Clinic was established to offer a refined clinical standard for manual lymphatic drainage, natural facelifts, and biological rejuvenation.
            </p>

            <p className="text-[#D8C9B4] text-xs sm:text-sm md:text-base leading-relaxed font-light">
              Trained in osteopathic fascia release, Brazilian lymphatic drainage, and anatomical fluid mapping, our practitioners utilize a rhythmic, pump-driven methodology. We naturally sculpt jawlines, decongest orbital fluid, relieve whole-body bloating, and restore youthful elasticity without needles or invasive interventions.
            </p>

            <div className="pt-3 sm:pt-4 border-t border-[#D4AF37]/25">
              <div className="flex items-start gap-3 p-3.5 sm:p-4 rounded-xl emerald-card max-w-md">
                <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-[#E8D58C] shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-semibold text-white uppercase tracking-wider">
                    Non-Invasive Protocols
                  </div>
                  <div className="text-[11px] text-[#D8C9B4] mt-0.5">
                    Anatomical rhythm & natural sculpting
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenBooking}
                className="gold-btn text-xs tracking-widest uppercase font-bold py-3.5 px-7 sm:px-8 rounded-full cursor-pointer shadow-lg hover:brightness-105 transition-all w-full sm:w-auto text-center"
              >
                Book a Private Consultation
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
