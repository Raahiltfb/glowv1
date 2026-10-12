import { useState } from 'react';


const treatmentMenu = [
  {
    id: 1,
    name: "Clinical Lymphatic Drainage",
    duration: "60 MIN",
    description: "Targeted gentle pumping technique designed to clear metabolic fluid buildup, reduce facial puffiness, and stimulate deep lymphatic circulation across the neck and face.",
    bookingQuery: "Clinical Lymphatic Drainage (60 MIN)"
  },
  {
    id: 2,
    name: "Facial Sculpting & Gua Sha Protocol",
    duration: "75 MIN",
    description: "An intensive manual sculpting ritual utilizing hand-carved medicinal stone tools to release facial fascia tension, chisel jawline definition, and enhance natural cheek volume.",
    bookingQuery: "Facial Sculpting & Gua Sha Protocol (75 MIN)"
  },
  {
    id: 3,
    name: "Full Body Metabolic Detox Ritual",
    duration: "90 MIN",
    description: "Comprehensive body lymphatic stimulation focusing on key node pathways to relieve systemic fluid retention, boost metabolic circulation, and leave skin deeply energized.",
    bookingQuery: "Full Body Metabolic Detox Ritual (90 MIN)"
  },
  {
    id: 4,
    name: "Signature Glow Flow Combination",
    duration: "105 MIN",
    description: "Our premier clinical ritual combining full body lymphatic drainage with intensive facial sculpting, cold therapy, and custom herbal oil infusion for maximum contouring.",
    bookingQuery: "Signature Glow Flow Combination (105 MIN)"
  }
];

export default function LymphaticSection() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const getWhatsAppUrl = (serviceQuery: string) => {
    const text = encodeURIComponent(`Hello Glow Flow, I would like to book the ${serviceQuery}.`);
    return `https://wa.me/919999999999?text=${text}`;
  };

  return (
    <div className="bg-[#000000] text-white">

      {/* 1. PHILOSOPHY & ANATOMY SECTION */}
      <section id="lymphatic-drainage" className="py-24 px-6 max-w-7xl mx-auto border-t border-[#2A2621]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 relative">

          {/* Vertical Divider for Desktop */}
          <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-[1px] bg-[#2A2621]" />

          {/* Left Column: Biological Statement */}
          <div className="md:pr-8">
            <span className="font-mono text-xs tracking-[0.22em] text-[#C5A880] uppercase block mb-6">
              01 / PHILOSOPHY & ANATOMY
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-white font-light leading-snug mb-6">
              True facial definition is not created on the surface; it is unmasked from within.
            </h2>
            <p className="text-white/70 text-sm md:text-base leading-relaxed font-light">
              Modern stress, environmental toxicity, and metabolic slowdown cause interstitial fluid stagnation, resulting in facial puffiness, loss of jawline definition, and skin dullness. Glow Flow applies precise manual pump pressure to unlock the body’s natural drainage pathways.
            </p>
          </div>

          {/* Right Column: 3 Technical Benefits */}
          <div className="md:pl-8 flex flex-col gap-8">
            <span className="font-mono text-xs tracking-[0.22em] text-[#C5A880] uppercase block">
              TECHNICAL BENEFITS
            </span>

            <div className="border-b border-[#2A2621] pb-6">
              <div className="flex items-baseline gap-3 mb-2">
                <span className="font-mono text-xs text-[#C5A880]">01.</span>
                <h3 className="font-serif text-xl text-white">Fluid Retention Reduction</h3>
              </div>
              <p className="text-white/60 text-xs md:text-sm leading-relaxed">
                Simulated manual lymphatic activation encourages systemic interstitial fluid clearance, instantly relieving micro-edema around the eyes and cheekbones.
              </p>
            </div>

            <div className="border-b border-[#2A2621] pb-6">
              <div className="flex items-baseline gap-3 mb-2">
                <span className="font-mono text-xs text-[#C5A880]">02.</span>
                <h3 className="font-serif text-xl text-white">Metabolic Flow & Detoxification</h3>
              </div>
              <p className="text-white/60 text-xs md:text-sm leading-relaxed">
                Stimulates deep tissue node pathways to accelerate metabolic waste evacuation, boosting cellular oxygenation and biological radiance.
              </p>
            </div>

            <div className="border-b border-[#2A2621] pb-6">
              <div className="flex items-baseline gap-3 mb-2">
                <span className="font-mono text-xs text-[#C5A880]">03.</span>
                <h3 className="font-serif text-xl text-white">Facial & Body Contouring</h3>
              </div>
              <p className="text-white/60 text-xs md:text-sm leading-relaxed">
                Restores natural cheekbone architecture and jawline symmetry through directional fascia manipulation without invasive procedures.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 2. BOUTIQUE TREATMENT MENU */}
      <section className="py-24 px-6 max-w-7xl mx-auto border-t border-[#2A2621]">
        <div className="mb-12">
          <span className="font-mono text-xs tracking-[0.22em] text-[#C5A880] uppercase block mb-3">
            02 / CLINICAL MENU
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-[#C5A880] font-light uppercase">
            BOUTIQUE TREATMENT MENU
          </h2>
        </div>

        <div className="border-t border-[#2A2621]">
          {treatmentMenu.map((item) => {
            const isExpanded = expandedId === item.id;
            return (
              <div
                key={item.id}
                className="border-b border-[#2A2621] cursor-pointer group transition-colors"
                onClick={() => toggleExpand(item.id)}
              >
                <div className="py-6 px-4 grid grid-cols-1 md:grid-cols-3 items-center gap-4">
                  <div className="font-serif text-xl text-white group-hover:text-[#C5A880] transition-colors">
                    {item.name}
                  </div>
                  <div className="font-mono text-xs text-white/60 tracking-wider">
                    {item.duration}
                  </div>
                  <div className="font-mono text-lg text-[#C5A880] text-right">
                    {isExpanded ? '−' : '+'}
                  </div>
                </div>

                {isExpanded && (
                  <div className="px-4 pb-6 pt-2 border-t border-dashed border-[#2A2621] text-white/80 text-sm leading-relaxed">
                    <p>{item.description}</p>
                    <div className="mt-4">
                      <a
                        href={getWhatsAppUrl(item.bookingQuery)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block font-mono text-xs uppercase tracking-widest text-black bg-[#C5A880] border border-[#C5A880] px-5 py-2.5 hover:bg-white hover:border-white transition-none"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Reserve {item.name} via WhatsApp →
                      </a>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
}
