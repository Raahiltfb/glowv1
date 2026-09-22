import { useEffect, useRef, useState } from 'react';


interface FeatureItem {
  id: string;
  title: string;
  description: string;
  videoUrl: string;
}

const featuresData: FeatureItem[] = [
  {
    id: 'feature-0',
    title: 'Built for ease, not urgency',
    description:
      'Drift strips away the noise that makes organizing feel draining. Every surface is made to be soft, quiet, and intuitive so you can move forward, not get stuck decoding.',
    videoUrl:
      'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260702_102608_5fa1187d-9ac6-44fb-82ab-54376200abc0.mp4',
  },
  {
    id: 'feature-1',
    title: 'The gentlest way to start',
    description:
      'Beginning your day should feel natural, not daunting. Drift eases you into motion with subtle cues and a quiet view of what deserves your energy right now.',
    videoUrl:
      'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260625_174131_395bc785-bb21-4e65-abf6-27c56f0764b6.mp4',
  },
  {
    id: 'feature-2',
    title: 'Deep, undivided focus',
    description:
      'No interruptions, no clutter. Drift holds you in the present task with a stripped-back layout that softens all else until you are truly ready to shift.',
    videoUrl:
      'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260525_052706_d2e390fd-1846-4fe7-a4d8-8d2f1c875358.mp4',
  },
];

export default function FeaturesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [revealedCards, setRevealedCards] = useState<{ [key: number]: boolean }>({});
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const activeObserverOptions = {
      root: null,
      rootMargin: '-30% 0px -30% 0px',
      threshold: 0.4,
    };

    const activeObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = Number(entry.target.getAttribute('data-index'));
          if (!isNaN(index)) {
            setActiveIndex(index);
          }
        }
      });
    }, activeObserverOptions);

    const revealObserverOptions = {
      root: null,
      threshold: 0.15,
    };

    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = Number(entry.target.getAttribute('data-index'));
          if (!isNaN(index)) {
            setRevealedCards((prev) => ({ ...prev, [index]: true }));
          }
        }
      });
    }, revealObserverOptions);

    cardRefs.current.forEach((card) => {
      if (card) {
        activeObserver.observe(card);
        revealObserver.observe(card);
      }
    });

    return () => {
      activeObserver.disconnect();
      revealObserver.disconnect();
    };
  }, []);

  const scrollToCard = (index: number) => {
    const card = cardRefs.current[index];
    if (card) {
      card.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <section id="features" className="px-5 md:px-10 lg:px-16 py-20 md:py-40 lg:py-48 relative min-h-screen">
      {/* Fixed Background Image */}
      <img
        src="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260709_082449_46df5cc4-ad98-4541-9236-a2659c1478a4.png&w=1920&q=85"
        alt="Features Background"
        className="fixed inset-0 w-full h-full object-cover -z-10 pointer-events-none"
      />

      <div className="max-w-[1400px] mx-auto lg:grid lg:grid-cols-[400px_1fr] xl:grid-cols-[460px_1fr] gap-24 xl:gap-48">
        {/* Left Column (Sticky on Desktop) */}
        <div className="lg:sticky lg:top-0 lg:h-screen lg:flex lg:flex-col lg:justify-between lg:py-32 mb-16 lg:mb-0">
          <div>
            <h2 className="text-white text-2xl sm:text-3xl lg:text-[46px] leading-[1.2] font-normal tracking-tight">
              Software that flows with your mind, not over it
            </h2>

            {/* Nav buttons (hidden below lg) */}
            <div className="hidden lg:flex flex-col gap-3 mt-12">
              {featuresData.map((feature, index) => {
                const isActive = activeIndex === index;
                return (
                  <button
                    key={feature.id}
                    onClick={() => scrollToCard(index)}
                    className={`text-left px-5 py-3.5 rounded-2xl text-sm font-medium transition-all duration-300 cursor-pointer ${
                      isActive
                        ? 'bg-black/20 text-white backdrop-blur-sm'
                        : 'bg-black/20 text-white/40 backdrop-blur-sm hover:text-white/70'
                    }`}
                  >
                    {feature.title}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Bottom CTA (hidden below lg) */}
          <div className="hidden lg:block">
            <p className="text-white/80 text-sm font-medium mb-4">
              No noise. No complicated systems. Just your day, gently sorted.
            </p>
            <button
              onClick={() => alert("Start for free clicked!")}
              className="bg-white text-black text-sm font-medium px-5 py-2.5 rounded-xl hover:bg-white/90 transition-colors cursor-pointer shadow-md"
            >
              Start for free
            </button>
          </div>
        </div>

        {/* Right Column (Scrolling Cards) */}
        <div className="flex flex-col gap-12 md:gap-16">
          {featuresData.map((feature, index) => {
            const isRevealed = !!revealedCards[index];
            return (
              <div
                key={feature.id}
                ref={(el) => { cardRefs.current[index] = el; }}
                data-index={index}
                className={`bg-black/20 backdrop-blur-sm rounded-3xl p-6 md:p-10 flex flex-col gap-6 border border-white/10 transition-all duration-700 ease-out transform ${
                  isRevealed
                    ? 'translate-x-0 opacity-100'
                    : 'translate-x-16 opacity-0'
                }`}
              >
                {/* SVG Logo */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 256 256"
                  fill="none"
                  className="shrink-0"
                >
                  <path
                    d="M 256 256 L 178 256 C 150.386 256 128 233.614 128 206 L 128 256 L 0 256 L 0 192 C 0 156.654 28.654 128 64 128 C 99.346 128 128 156.654 128 192 L 128 128 L 256 128 Z M 78 0 C 105.614 0 128 22.386 128 50 L 128 0 L 256 0 L 256 64 C 256 99.346 227.346 128 192 128 C 156.654 128 128 99.346 128 64 L 128 128 L 0 128 L 0 0 Z"
                    fill="rgba(255,255,255,0.8)"
                  />
                </svg>

                {/* Title */}
                <h3 className="text-white text-xl md:text-2xl font-medium tracking-tight">
                  {feature.title}
                </h3>

                {/* Video */}
                <div className="aspect-video rounded-2xl overflow-hidden bg-black/30 w-full relative">
                  <video
                    src={feature.videoUrl}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Description */}
                <p className="text-white/60 font-medium text-sm md:text-base leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
