interface HeroSectionProps {
  onOpenBooking: () => void;
  onExploreTreatments: () => void;
}

export default function HeroSection({ onOpenBooking }: HeroSectionProps) {
  return (
    <section id="hero" className="relative min-h-screen w-full flex items-center justify-start pt-24 pb-16 bg-[#FAF8F5] overflow-hidden">
      {/* 100% Full-Bleed Widescreen Background Image (Melts seamlessly into background with no cutoffs or strips) */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-none">
        <img
          src="/hero-widescreen-clean.png?v=3"
          alt="Glow Flow Widescreen Luxury Spa Visual"
          className="w-full h-full object-cover object-right font-sans"
        />
        {/* Soft Linear Gradient Overlay for Perfect Color Melting on Left & Bottom */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FAF8F5] via-[#FAF8F5]/75 to-transparent hidden md:block" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#FAF8F5] via-[#FAF8F5]/65 to-transparent md:hidden" />
      </div>

      {/* Hero Text Content Layer (Positioned on Left) */}
      <div className="max-w-7xl mx-auto w-full px-6 md:px-12 relative z-10 flex flex-col items-start text-left">
        <div className="max-w-2xl pt-8 pb-12 md:py-12">
          {/* Main Tagline / Headline (Positioned higher up on mobile) */}
          <h1 className="font-dongle text-7xl sm:text-8xl md:text-9xl lg:text-[115px] font-normal leading-[0.82] tracking-tight text-[#3A2E1E] mb-32 md:mb-3">
            <span className="gold-gradient-text block">Release. Restore. Radiate.</span>
          </h1>

          {/* Byline & CTA (Positioned lower down on mobile) */}
          <p className="font-commissioner text-base sm:text-lg md:text-xl text-[#554433] tracking-[0.2em] uppercase font-light mb-8">
            Your full body lymphatic artistry
          </p>

          {/* Clean CTA Button */}
          <button
            onClick={onOpenBooking}
            className="gold-btn font-commissioner text-sm tracking-widest uppercase px-9 py-4 rounded-full cursor-pointer shadow-xl hover:brightness-105 transition-all"
          >
            Book Your Session
          </button>
        </div>
      </div>
    </section>
  );
}
