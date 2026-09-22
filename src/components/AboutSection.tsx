import { MapPin, ShieldCheck, Heart, User } from 'lucide-react';

interface AboutSectionProps {
  onOpenBooking: () => void;
}

export const founderMember = {
  name: "Lead Founder & Master Practitioner",
  title: "Founder & Master Lymphatic Specialist",
};

export const staffMembers = [
  { name: "Senior Facial Osteopath", title: "Facial Sculpting Specialist" },
  { name: "Clinical Lymphatic Specialist", title: "Full Body Detox Therapist" },
  { name: "Body Sculpting Specialist", title: "Contour & Drainage Specialist" },
  { name: "Fascia & Gua Sha Therapist", title: "Precision Release Specialist" },
  { name: "Recovery & Drainage Specialist", title: "Lymphatic Activation Specialist" },
];

export default function AboutSection({ onOpenBooking }: AboutSectionProps) {
  return (
    <section id="about-glow" className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-b border-[#C5A880]/20">
      {/* Header in Dongle font */}
      <div className="text-center mb-16">
        <h2 className="font-dongle text-5xl sm:text-6xl md:text-7xl text-[#3A2E1E] font-normal leading-[0.9] tracking-wide max-w-4xl mx-auto">
          True facial definition is not created on the surface; it is unmasked from within.
        </h2>
      </div>

      {/* Main 2 Column Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
        {/* Left Column: Biological Science & Founder Bio */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 font-commissioner text-xs font-semibold uppercase tracking-[0.25em] text-[#8C6D38]">
            <span className="w-6 h-[1px] bg-[#C5A880]" />
            <span>About Glow Flow</span>
          </div>

          <h3 className="font-dongle text-4xl md:text-5xl text-[#8C6D38] font-normal leading-none">
            The Science of Interstitial Flow
          </h3>

          <p className="font-commissioner text-[#555555] text-base leading-relaxed font-light">
            Modern stress, environmental factors, and metabolic slowdown cause fluid buildup in delicate fascial pathways, resulting in puffiness, loss of contour, and skin fatigue.
          </p>

          <p className="font-commissioner text-[#555555] text-sm leading-relaxed font-light">
            Unlike the circulatory system, the lymphatic system has no central pump. Glow Flow applies rhythmic, directional manual pressure to clear stagnant fluid, accelerate waste evacuation, and restore natural jawline & cheekbone architecture.
          </p>

          <div className="grid grid-cols-2 gap-6 pt-4 border-t border-[#C5A880]/20">
            <div>
              <div className="font-dongle text-5xl text-[#8C6D38] leading-none">100%</div>
              <div className="font-commissioner text-[11px] uppercase tracking-wider text-[#777777] mt-1">Non-Invasive Protocol</div>
            </div>
            <div>
              <div className="font-dongle text-5xl text-[#8C6D38] leading-none">Khar West</div>
              <div className="font-commissioner text-[11px] uppercase tracking-wider text-[#777777] mt-1">Private Mumbai Sanctuary</div>
            </div>
          </div>
        </div>

        {/* Right Column: Studio Card */}
        <div className="reference-card rounded-2xl p-8 lg:p-10 relative overflow-hidden bg-gradient-to-br from-[#FFFFFF] via-[#FAF8F5] to-[#F5F0E8] border border-[#C5A880]/30">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-[#E5C384]/20 border border-[#C5A880]/50 flex items-center justify-center text-[#8C6D38]">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-dongle text-3xl text-[#3A2E1E] font-normal leading-none">Glow Flow Studio</h4>
              <p className="font-commissioner text-[#777777] text-xs">404 Mangal Bhavna CHS, Khar West, Mumbai</p>
            </div>
          </div>

          <p className="font-commissioner text-[#444444] text-sm leading-relaxed font-light mb-8">
            Our private sanctuary in Khar West provides a serene, restorative space dedicated strictly to personalized body and facial lymphatic artistry.
          </p>

          <div className="space-y-4 mb-8">
            <div className="flex items-start gap-3 text-xs text-[#555555] font-commissioner">
              <ShieldCheck className="w-4 h-4 text-[#8C6D38] shrink-0 mt-0.5" />
              <span>Certified anatomical practitioners trained in manual lymphatic mapping.</span>
            </div>
            <div className="flex items-start gap-3 text-xs text-[#555555] font-commissioner">
              <Heart className="w-4 h-4 text-[#8C6D38] shrink-0 mt-0.5" />
              <span>Individualized targeted drainage protocols for optimal systemic flow.</span>
            </div>
          </div>

          <button
            onClick={onOpenBooking}
            className="w-full gold-btn font-commissioner text-xs tracking-widest uppercase font-semibold py-3.5 rounded-full cursor-pointer"
          >
            Reserve Your Private Session
          </button>
        </div>
      </div>

      {/* Team Showcase Subsection: 1 Founder + 5 Staff Grid */}
      <div className="pt-8 border-t border-[#C5A880]/20">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 font-commissioner text-xs font-semibold uppercase tracking-[0.25em] text-[#8C6D38] mb-1">
            <span className="w-8 h-[1px] bg-[#C5A880]/40" />
            <span>Clinical Excellence</span>
            <span className="w-8 h-[1px] bg-[#C5A880]/40" />
          </div>
          <h3 className="font-dongle text-5xl md:text-6xl text-[#3A2E1E] leading-none mt-1">
            Our Expert Practitioner Team
          </h3>
        </div>

        {/* 1 Founder Card on Top */}
        <div className="max-w-md mx-auto mb-6">
          <div className="reference-card p-5 rounded-2xl flex items-center justify-center gap-4 text-center bg-gradient-to-r from-[#FAF6EE] via-[#FFFFFF] to-[#FAF6EE] border border-[#C5A880]/40 shadow-sm">
            <div className="w-12 h-12 rounded-full bg-[#C5A880]/20 border border-[#C5A880]/50 flex items-center justify-center text-[#8C6D38] shrink-0">
              <User className="w-6 h-6" />
            </div>
            <div className="text-left">
              <h4 className="font-dongle text-3xl text-[#3A2E1E] leading-none font-normal">
                {founderMember.name}
              </h4>
              <p className="font-commissioner text-xs text-[#8C6D38] font-semibold uppercase tracking-wider">
                {founderMember.title}
              </p>
            </div>
          </div>
        </div>

        {/* 5 Staff Cards Underneath */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {staffMembers.map((member, idx) => (
            <div key={idx} className="reference-card p-4 rounded-xl flex flex-col items-center text-center bg-white border border-[#C5A880]/30">
              <div className="w-10 h-10 rounded-full bg-[#C5A880]/15 border border-[#C5A880]/35 flex items-center justify-center text-[#8C6D38] mb-2 shrink-0">
                <User className="w-5 h-5" />
              </div>
              <h4 className="font-dongle text-2.5xl md:text-3xl text-[#3A2E1E] leading-none font-normal">
                {member.name}
              </h4>
              <p className="font-commissioner text-[11px] text-[#8C6D38] font-medium uppercase tracking-wider mt-1">
                {member.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
