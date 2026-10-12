import { ArrowRight } from 'lucide-react';

interface HeroSectionProps {
  onOpenBooking: () => void;
  onExploreTreatments: () => void;
}

export default function HeroSection({ onOpenBooking, onExploreTreatments }: HeroSectionProps) {
  return (
    <section id="hero" className="relative min-h-[88vh] md:min-h-screen w-full flex items-center justify-start pt-24 sm:pt-28 pb-14 sm:pb-16 bg-[#0D281E] overflow-hidden">
      {/* 100% Widescreen High-Resolution Green & Gold Zen Sanctuary Visual (No Faces) */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-none flex items-center justify-end">
        <img
          src="/hero-greengold-widescreen.png"
          alt="GlowFlow Green and Gold Botanical Wellness"
          className="w-full h-full object-cover object-right font-sans scale-100 transition-all duration-500"
        />
        {/* Responsive Gradient Masks for Perfect Text Contrast on Dark Emerald */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D281E] via-[#0D281E]/85 to-transparent hidden md:block w-3/5" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D281E] via-[#0D281E]/85 to-[#0D281E]/40 md:hidden" />
      </div>

      {/* Hero Text Content Layer */}
      <div className="max-w-7xl mx-auto w-full px-5 sm:px-8 md:px-12 relative z-10 flex flex-col items-start text-left font-commissioner">
        <div className="max-w-3xl pt-2 sm:pt-6 pb-6 sm:pb-10 w-full">

          {/* Top Tagline */}
          <div className="text-[11px] sm:text-xs md:text-sm font-semibold uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#E8D58C] mb-3 sm:mb-4 flex items-center gap-2">
            <span className="w-5 sm:w-7 h-[1px] bg-[#D4AF37]/60" />
            <span>Full Body Lymphatic Artistry</span>
          </div>

          {/* Headline inspired by user design & PDF */}
          <h1 className="font-serif-luxury text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal leading-[1.02] sm:leading-[0.95] tracking-tight text-white mb-3 sm:mb-4">
            <span className="gold-gradient-text block">Drain Deep.</span>
            <span className="text-[#F5E8D0] block">Glow Naturally.</span>
          </h1>

          {/* Sub-headline */}
          <div className="text-sm sm:text-lg md:text-xl font-light text-[#E8D58C] tracking-wide mb-3 sm:mb-4">
            Release + Restore + Radiate
          </div>

          <div className="w-16 sm:w-20 h-[2px] bg-gradient-to-r from-[#D4AF37] to-transparent mb-4 sm:mb-5" />

          {/* Details Bar with PDF Address - Kept strictly single-line without breaking viewport */}
          <div className="w-full overflow-x-auto no-scrollbar mb-6 sm:mb-8">
            <p className="text-[11px] sm:text-xs md:text-sm text-[#D8C9B4] font-light tracking-wide whitespace-nowrap inline-block">
              New Clifton RHS, Bandra West, Mumbai &bull; 91 81041 01177 / 91 99305 09906
            </p>
          </div>

          {/* CTA Buttons - Full-width stacked on mobile, row on tablet/desktop */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
            <button
              onClick={onOpenBooking}
              className="gold-btn text-xs sm:text-sm tracking-widest uppercase font-bold px-7 sm:px-8 py-3.5 sm:py-4 rounded-full cursor-pointer shadow-xl hover:brightness-105 transition-all flex items-center justify-center gap-3 w-full sm:w-auto text-center"
            >
              <span>Book Your Session</span>
              <ArrowRight className="w-4 h-4 text-[#0A2018]" />
            </button>

            <button
              onClick={onExploreTreatments}
              className="gold-btn-outline text-xs sm:text-sm tracking-widest uppercase font-semibold px-6 sm:px-7 py-3.5 sm:py-4 rounded-full cursor-pointer text-center w-full sm:w-auto"
            >
              Explore Treatments
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
