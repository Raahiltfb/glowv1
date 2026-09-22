export default function Hero() {

  const scrollToInfoSection = () => {
    const section = document.getElementById('about');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="h-screen w-full overflow-hidden relative flex flex-col justify-end pb-12 md:pb-16 px-4 mb-[-25px]">
      
      {/* High-Resolution Auto-Playing Looping Video Background */}
      <video
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260711_090308_1dd0cea7-f9ba-4db4-8147-c7d746061c9e.mp4"
        autoPlay
        muted
        loop
        playsInline
        poster="/hero-portrait.jpg?v=2"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Semi-transparent Overlay */}
      <div className="absolute inset-0 bg-black/25" />

      {/* Bottom-Aligned Hero Content */}
      <div className="relative z-20 max-w-4xl mx-auto text-center flex flex-col items-center">
        
        {/* Main Headline: "Glow Naturally" with Instrument Serif Italic for "Naturally" */}
        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[96px] font-normal text-white leading-[1.1] tracking-tight mb-4 text-center">
          <span>Glow </span>
          <em
            className="not-italic"
            style={{
              fontFamily: "'Instrument Serif', serif",
              fontStyle: 'italic',
            }}
          >
            Naturally
          </em>
        </h1>

        {/* Supporting Line in Titlecase */}
        <p className="text-white/90 text-sm md:text-base font-medium max-w-[420px] mx-auto mb-8 text-center leading-relaxed">
          Face Workout | Brazilian Lymphatic Drainage
        </p>

        {/* Hero Bottom CTA Bar */}
        <div className="bg-black/30 backdrop-blur-md rounded-xl flex flex-row items-center pl-6 pr-1 py-1 max-w-full border border-white/15 shadow-lg">
          <span className="text-white text-sm font-medium mr-4">
            Want to learn more?
          </span>

          <button
            onClick={scrollToInfoSection}
            className="bg-white text-black text-sm font-medium px-5 py-2.5 rounded-xl hover:bg-white/90 transition-colors cursor-pointer shrink-0 shadow-sm"
          >
            Discover Lymphatic Drainage
          </button>
        </div>

      </div>

    </div>
  );
}
