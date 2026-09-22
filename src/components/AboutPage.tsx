import { ShieldCheck, Heart } from 'lucide-react';

interface AboutPageProps {
  onOpenBooking: () => void;
}

export const founderDetails = {
  name: "Master Practitioner & Founder",
  title: "Founder & Lead Lymphatic Specialist",
  quote: "True facial definition is not created on the surface; it is unmasked from within.",
  bioParagraph1: "Founded in Mumbai, Glow Flow was established to set a clinical standard for manual lymphatic drainage, facial sculpting, and non-invasive biological rejuvenation.",
  bioParagraph2: "Trained in osteopathic fascia release and anatomical fluid mapping, our founder brings a holistic, pump-driven methodology to unmask natural jawlines, relieve systemic puffiness, and restore skin vitality without invasive procedures.",
};

export const staffMembers = [
  {
    name: "Ananya V.",
    title: "Senior Facial Osteopath",
    description: "Specialized in precision facial fascia release, cheekbone contour lifting, and cold quartz sculpting rituals.",
    image: "/staff-ananya.png",
  },
  {
    name: "Rhea M.",
    title: "Clinical Lymphatic Specialist",
    description: "Expert in systemic node clearance, fluid retention relief, and full body metabolic detox activation.",
    image: "/staff-rhea.png",
  },
  {
    name: "Priya S.",
    title: "Body Sculpting Specialist",
    description: "Focuses on waist & abdomen drainage, post-edema recovery, and targeted contour refinement.",
    image: "/staff-priya.png",
  },
  {
    name: "Meera K.",
    title: "Fascia & Gua Sha Therapist",
    description: "Master practitioner in medicinal white jade Gua Sha, jawline chisel, and neck fluid drainage.",
    image: "/staff-meera.png",
  },
  {
    name: "Tanya R.",
    title: "Post-Op & Recovery Specialist",
    description: "Dedicated to post-treatment fluid management, gentle pumping protocol, and deep relaxation.",
    image: "/staff-tanya.png",
  },
];

export default function AboutPage({ onOpenBooking }: AboutPageProps) {
  return (
    <div className="pt-28 pb-20 px-6 md:px-12 max-w-7xl mx-auto min-h-screen bg-[#FAF8F5]">
      
      {/* SECTION 1: ABOUT THE FOUNDER (Tall Portrait Image + Description) */}
      <div className="mb-24">
        <div className="flex items-center justify-center gap-3 font-commissioner text-xs font-semibold uppercase tracking-[0.25em] text-[#8C6D38] mb-3">
          <span className="w-8 h-[1px] bg-[#C5A880]/40" />
          <span>About The Founder</span>
          <span className="w-8 h-[1px] bg-[#C5A880]/40" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mt-6">
          
          {/* Left Column: Tall Portrait Image */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-[#C5A880]/40 shadow-2xl bg-[#FAF8F5] aspect-[3/4]">
              <img
                src="/founder-portrait.png"
                alt="Glow Flow Studio Founder & Lead Master Practitioner"
                className="w-full h-full object-cover object-top hover:scale-102 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="font-commissioner text-[10px] uppercase tracking-widest text-[#E5C384] font-semibold mb-1">
                  Founder & Master Practitioner
                </div>
                <h4 className="font-dongle text-3.5xl leading-none font-normal">
                  Glow Flow Studio Founder
                </h4>
                <p className="font-commissioner text-xs text-white/80 font-light">
                  Lead Therapist in Lymphatic Osteopathy & Sculpting
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Detailed Text & Story */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="font-dongle text-5xl sm:text-6xl md:text-7xl text-[#3A2E1E] font-normal leading-[0.9] tracking-tight">
              "{founderDetails.quote}"
            </h1>

            <div className="w-20 h-[2px] bg-gradient-to-r from-[#C5A880] to-transparent my-4" />

            <p className="font-commissioner text-[#555555] text-base md:text-lg leading-relaxed font-light">
              {founderDetails.bioParagraph1}
            </p>

            <p className="font-commissioner text-[#555555] text-sm md:text-base leading-relaxed font-light">
              {founderDetails.bioParagraph2}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#C5A880]/20">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-[#C5A880]/30 shadow-xs">
                <ShieldCheck className="w-5 h-5 text-[#8C6D38] shrink-0 mt-0.5" />
                <div>
                  <div className="font-commissioner text-xs font-semibold text-[#3A2E1E] uppercase tracking-wider">100% Non-Invasive</div>
                  <div className="font-commissioner text-[11px] text-[#777777] mt-0.5">Anatomical pump pressure</div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-[#C5A880]/30 shadow-xs">
                <Heart className="w-5 h-5 text-[#8C6D38] shrink-0 mt-0.5" />
                <div>
                  <div className="font-commissioner text-xs font-semibold text-[#3A2E1E] uppercase tracking-wider">Khar West Sanctuary</div>
                  <div className="font-commissioner text-[11px] text-[#777777] mt-0.5">Private Mumbai studio</div>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenBooking}
                className="gold-btn font-commissioner text-xs tracking-widest uppercase font-semibold px-8 py-4 rounded-full cursor-pointer shadow-lg hover:brightness-105 transition-all"
              >
                Book a Session with Founder
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* SECTION 2: THE 5 PRACTITIONERS / STAFF CARDS (Spacious Grid with Large Portrait Headshots) */}
      <div className="pt-12 border-t border-[#C5A880]/20">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 font-commissioner text-xs font-semibold uppercase tracking-[0.25em] text-[#8C6D38] mb-2">
            <span className="w-8 h-[1px] bg-[#C5A880]/40" />
            <span>Clinical Team</span>
            <span className="w-8 h-[1px] bg-[#C5A880]/40" />
          </div>
          <h2 className="font-dongle text-6xl sm:text-7xl md:text-8xl text-[#3A2E1E] font-normal leading-none tracking-wide">
            Our Expert Practitioner Team
          </h2>
          <p className="font-commissioner text-xs md:text-sm text-[#555555] font-light max-w-xl mx-auto mt-2">
            Meet our certified team of specialists trained in manual lymphatic mapping, facial sculpting, and body detox protocols.
          </p>
        </div>

        {/* Spacious 3-Column Grid for Large Headshots */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {staffMembers.map((member, idx) => (
            <div
              key={idx}
              className="reference-card p-5 rounded-2xl flex flex-col justify-between text-left bg-white border border-[#C5A880]/30 hover:border-[#C5A880]/60 transition-all group shadow-sm hover:shadow-xl"
            >
              <div>
                {/* Large Portrait Headshot */}
                <div className="relative aspect-[3/4] w-full rounded-xl overflow-hidden mb-5 border border-[#C5A880]/20 bg-[#FAF8F5]">
                  <img
                    src={member.image}
                    alt={`${member.name} - ${member.title}`}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
                </div>
                
                <h3 className="font-dongle text-4xl text-[#3A2E1E] leading-none font-normal mb-1">
                  {member.name}
                </h3>
                
                <div className="font-commissioner text-xs text-[#8C6D38] font-semibold uppercase tracking-wider mb-3">
                  {member.title}
                </div>
                
                <div className="w-12 h-[1px] bg-[#C5A880]/30 mb-3" />
                
                <p className="font-commissioner text-xs text-[#555555] leading-relaxed font-light">
                  {member.description}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-[#C5A880]/15 flex items-center justify-between font-commissioner text-[10px] text-[#8C6D38] uppercase tracking-wider font-medium">
                <span>Certified Specialist</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880]" />
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
