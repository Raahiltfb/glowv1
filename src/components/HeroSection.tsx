import { ArrowRight } from 'lucide-react';

interface HeroSectionProps {
  onOpenBooking: () => void;
  onExploreTreatments: () => void;
}

export default function HeroSection({ onOpenBooking, onExploreTreatments }: HeroSectionProps) {
  return (
    <section id="hero" className="relative min-h-[92vh] md:min-h-screen w-full flex items-center justify-start pt-28 pb-16 bg-[#0D281E] overflow-hidden">
      {/* 100% Widescreen High-Resolution Green & Gold Zen Sanctuary Visual (No Faces) */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-none flex items-center justify-end">
        <img
          src="/hero-greengold-widescreen.png"
          alt="GlowFlow Green and Gold Botanical Wellness"
          className="w-full h-full object-cover object-right font-sans scale-100 transition-all duration-500"
        />
        {/* Responsive Gradient Masks for Perfect Text Contrast on Dark Emerald */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D281E] via-[#0D281E]/85 to-transparent hidden md:block w-3/5" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D281E] via-[#0D281E]/80 to-transparent md:hidden" />
      </div>

      {/* Hero Text Content Layer */}
      <div className="max-w-7xl mx-auto w-full px-6 md:px-12 relative z-10 flex flex-col items-start text-left font-commissioner">
        <div className="max-w-2xl pt-6 pb-10">
          
          {/* Top Tagline from PDF */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#14382A]/80 border border-[#D4AF37]/35 mb-4 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#E8D58C] animate-pulse" />
            <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-[#E8D58C]">
              GlowFlow Clinic &bull; Lymphatic Drainage + Wellness
            </span>
          </div>

          {/* Headline inspired by user design & PDF */}
          <h1 className="font-serif-luxury text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal leading-[0.95] tracking-tight text-white mb-4">
            <span className="gold-gradient-text block">Drain Deep.</span>
            <span className="text-[#F5E8D0] block">Glow Naturally.</span>
          </h1>

          {/* Sub-headline */}
          <div className="text-base sm:text-lg md:text-xl font-light text-[#E8D58C] tracking-wide mb-4">
            Release + Restore + Radiate &bull; Sculpting & Drainage Sanctuary
          </div>

          <div className="w-20 h-[2px] bg-gradient-to-r from-[#D4AF37] to-transparent mb-5" />

          {/* Quick Feature Badges from PDF */}
          <div className="flex flex-wrap gap-2 mb-6 text-xs text-[#EADBC8]/90">
            <span className="px-3 py-1 rounded-full bg-[#14382A]/90 border border-[#D4AF37]/25">Natural Facelift</span>
            <span className="px-3 py-1 rounded-full bg-[#14382A]/90 border border-[#D4AF37]/25">Customized Drainage</span>
            <span className="px-3 py-1 rounded-full bg-[#14382A]/90 border border-[#D4AF37]/25">Full Body Protocol</span>
            <span className="px-3 py-1 rounded-full bg-[#14382A]/90 border border-[#D4AF37]/25">Sculpting Tools</span>
          </div>

          {/* Details Bar with PDF Address */}
          <p className="text-xs sm:text-sm text-[#D8C9B4] font-light tracking-wider leading-relaxed mb-8">
            New Clifton RHS, Bandra West, Mumbai &bull; Private Appointments: +91 81041 01177 / +91 99305 09906
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={onOpenBooking}
              className="gold-btn text-xs sm:text-sm tracking-widest uppercase font-bold px-8 py-4 rounded-full cursor-pointer shadow-xl hover:brightness-105 transition-all flex items-center gap-3"
            >
              <span>Book Your Session</span>
              <ArrowRight className="w-4 h-4 text-[#0A2018]" />
            </button>

            <button
              onClick={onExploreTreatments}
              className="gold-btn-outline text-xs sm:text-sm tracking-widest uppercase font-semibold px-7 py-4 rounded-full cursor-pointer"
            >
              Explore Price List
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
