import { ArrowRight } from 'lucide-react';

interface HeroSectionProps {
  onOpenBooking: () => void;
  onExploreTreatments: () => void;
}

export default function HeroSection({ onOpenBooking }: HeroSectionProps) {
  return (
    <section id="hero" className="relative min-h-[90vh] md:min-h-screen w-full flex items-center justify-start pt-28 pb-16 bg-[#FAF8F5] overflow-hidden">
      {/* 100% Widescreen Background Image with Soft Seamless Blending */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-none">
        <img
          src="/hero-banner-plain.png"
          alt="Glow Flow Plain Luxury Spa Visual"
          className="w-full h-full object-cover object-right font-sans scale-105"
        />
        {/* Responsive Gradient Masks for Perfect Contrast on Text */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FAF8F5] via-[#FAF8F5]/85 to-transparent hidden md:block w-3/5" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#FAF8F5] via-[#FAF8F5]/80 to-transparent md:hidden" />
      </div>

      {/* Hero Text Content Layer */}
      <div className="max-w-7xl mx-auto w-full px-6 md:px-12 relative z-10 flex flex-col items-start text-left font-commissioner">
        <div className="max-w-2xl pt-6 pb-10">
          
          {/* Top Tagline */}
          <div className="text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] text-[#8C6D38] mb-4">
            Your Full Body Lymphatic Artistry
          </div>

          {/* Headline inspired by user design */}
          <h1 className="font-dongle text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-normal leading-[0.85] tracking-tight text-[#3A2E1E] mb-4">
            <span className="gold-gradient-text block">Drain Deep.</span>
            <span className="text-[#3A2E1E] block">Glow Naturally.</span>
          </h1>

          {/* Sub-headline */}
          <div className="text-lg sm:text-xl md:text-2xl font-light text-[#8C6D38] tracking-wide mb-4">
            Release + Restore + Radiate
          </div>

          <div className="w-16 h-[2px] bg-gradient-to-r from-[#C5A880] to-transparent mb-5" />

          {/* Details Bar */}
          <p className="text-xs sm:text-sm text-[#555555] font-light tracking-wider leading-relaxed mb-8">
            Full-body & targeted lymphatic drainage &bull; Face yoga &bull; Natural facelift &bull; Khar West, Mumbai
          </p>

          {/* CTA Button */}
          <button
            onClick={onOpenBooking}
            className="gold-btn text-xs sm:text-sm tracking-widest uppercase font-bold px-8 py-4 rounded-full cursor-pointer shadow-xl hover:brightness-105 transition-all flex items-center gap-3"
          >
            <span>Book Your Session</span>
            <ArrowRight className="w-4 h-4 text-black" />
          </button>
        </div>
      </div>
    </section>
  );
}
