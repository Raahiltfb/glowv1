import { useState } from 'react';
import { Quote, Award, Play, CheckCircle2, Star } from 'lucide-react';

export const beforeAfterCases = [
  {
    id: 'case-1',
    title: 'Facial Sculpting & Jawline Definition',
    category: 'Face & Neck Protocol',
    timeframe: '45-Min Single Session',
    metric: 'Visible Jawline Lift & Depuff',
    beforeDesc: 'Subcutaneous fluid accumulation around cheeks, softening of jawline definition.',
    afterDesc: 'Sharp facial contouring, elevated cheekbone architecture, zero downtime.',
    tag: 'Verified Clinical Result',
    imgBefore: '/hero-portrait.jpg',
    imgAfter: '/founder-portrait.png',
  },
  {
    id: 'case-2',
    title: 'Full Body Fluid Clearance & Detox',
    category: 'Full Body Metabolic Protocol',
    timeframe: '90-Min Detox Ritual',
    metric: 'Systemic Fluid Release',
    beforeDesc: 'Heaviness in legs and waist due to interstitial edema and prolonged travel.',
    afterDesc: 'Instant lightness, depuffed limbs, restored metabolic flow across node pathways.',
    tag: 'Verified Clinical Result',
    imgBefore: '/product-mask.png',
    imgAfter: '/staff-rhea.png',
  },
  {
    id: 'case-3',
    title: 'Arms & Underarm Nodal Unblocking',
    category: 'Underarm & Upper Body Protocol',
    timeframe: '60-Min Focused Session',
    metric: 'Axillary Drainage Clearance',
    beforeDesc: 'Axillary node congestion creating upper arm tightness and fluid buildup.',
    afterDesc: 'Evacuated fluid blockage, relaxed shoulder fascia, sculpted arm line.',
    tag: 'Verified Clinical Result',
    imgBefore: '/staff-meera.png',
    imgAfter: '/staff-ananya.png',
  },
];

export const videoTestimonials = [
  {
    id: 'video-1',
    clientName: 'Celebrity Client & Fashion Icon',
    location: 'Bandra West, Mumbai',
    treatment: 'Facial Sculpting & Lymphatic Drainage',
    videoUrl: 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260711_090308_1dd0cea7-f9ba-4db4-8147-c7d746061c9e.mp4',
    poster: '/hero-white-gold.png',
    quote: 'Glow Flow is my non-negotiable before major shoots and red carpet events. The jawline lift is immediate and completely natural.',
    duration: '0:45 Reel',
  },
  {
    id: 'video-2',
    clientName: 'Rhea S. — Studio Member',
    location: 'Khar West, Mumbai',
    treatment: 'Full Body Metabolic Detox Ritual',
    videoUrl: 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260711_090308_1dd0cea7-f9ba-4db4-8147-c7d746061c9e.mp4',
    poster: '/staff-priya.png',
    quote: 'I used to struggle with heavy legs after flying. One session of full body drainage clears the fluid retention completely.',
    duration: '1:10 Experience',
  },
];

export const textTestimonials = [
  {
    name: 'Ananya M.',
    role: 'Fashion Creator • Juhu',
    quote: 'No facial treatment in Mumbai comes close to Glow Flow. Their anatomical Gua Sha and manual pumping protocol visibly lifts cheekbones naturally without any downtime.',
    rating: 5,
    tag: 'Verified Review',
  },
  {
    name: 'Dr. Tanya V.',
    role: 'Wellness Physician • Worli',
    quote: 'As a medical practitioner, I appreciate the anatomical precision of their lymphatic node activation. It effectively targets edema while being deeply relaxing.',
    rating: 5,
    tag: 'Doctor Recommended',
  },
  {
    name: 'Meera K.',
    role: 'Studio Client • Pali Hill',
    quote: 'The studio environment in Khar West is serene and spotless. My skin looks radiant and sculpted for days after every session.',
    rating: 5,
    tag: 'Verified Review',
  },
];

export default function TestimonialsSection() {
  const [activeTab, setActiveTab] = useState<'beforeAfter' | 'video' | 'reviews'>('beforeAfter');

  return (
    <section id="testimonials" className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-b border-[#C5A880]/20">
      {/* Section Header */}
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-3 font-commissioner text-xs font-semibold uppercase tracking-[0.25em] text-[#8C6D38] mb-2">
          <span className="w-8 h-[1px] bg-[#C5A880]/40" />
          <span>Clinical Proof & Client Reviews</span>
          <span className="w-8 h-[1px] bg-[#C5A880]/40" />
        </div>
        <h2 className="font-dongle text-6xl sm:text-7xl md:text-8xl font-normal leading-none tracking-wide text-[#3A2E1E]">
          Results, Video Reviews & Testimonials
        </h2>
        <p className="font-commissioner text-xs md:text-sm text-[#555555] font-light max-w-2xl mx-auto mt-2">
          Real client transformations, video session reviews, and verified feedback from leading actors, fashion icons, and medical professionals.
        </p>

        {/* Category Switcher Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mt-8">
          <button
            onClick={() => setActiveTab('beforeAfter')}
            className={`font-commissioner text-xs font-semibold uppercase tracking-wider px-6 py-2.5 rounded-full transition-all cursor-pointer ${
              activeTab === 'beforeAfter'
                ? 'bg-[#8C6D38] text-white shadow-md'
                : 'bg-white text-[#8C6D38] border border-[#C5A880]/40 hover:bg-[#FAF6EE]'
            }`}
          >
            Photo Reviews & Before / Afters
          </button>
          <button
            onClick={() => setActiveTab('video')}
            className={`font-commissioner text-xs font-semibold uppercase tracking-wider px-6 py-2.5 rounded-full transition-all cursor-pointer ${
              activeTab === 'video'
                ? 'bg-[#8C6D38] text-white shadow-md'
                : 'bg-white text-[#8C6D38] border border-[#C5A880]/40 hover:bg-[#FAF6EE]'
            }`}
          >
            Video Testimonials
          </button>
          <button
            onClick={() => setActiveTab('reviews')}
            className={`font-commissioner text-xs font-semibold uppercase tracking-wider px-6 py-2.5 rounded-full transition-all cursor-pointer ${
              activeTab === 'reviews'
                ? 'bg-[#8C6D38] text-white shadow-md'
                : 'bg-white text-[#8C6D38] border border-[#C5A880]/40 hover:bg-[#FAF6EE]'
            }`}
          >
            Verified Client Reviews
          </button>
        </div>
      </div>

      {/* 1. PHOTO REVIEWS & BEFORE / AFTERS */}
      {activeTab === 'beforeAfter' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {beforeAfterCases.map((item) => (
            <div key={item.id} className="reference-card rounded-2xl p-6 bg-white flex flex-col justify-between border border-[#C5A880]/30 shadow-sm">
              <div>
                {/* Header Tag */}
                <div className="flex items-center justify-between mb-4 font-commissioner text-xs">
                  <span className="font-semibold text-[#8C6D38] flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#8C6D38]" />
                    {item.tag}
                  </span>
                  <span className="font-mono text-[11px] text-[#777777] bg-[#FAF6EE] px-2.5 py-1 rounded-full border border-[#C5A880]/30">
                    {item.timeframe}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-dongle text-4xl text-[#3A2E1E] leading-none font-normal mb-1">
                  {item.title}
                </h3>
                <div className="font-commissioner text-xs text-[#8C6D38] font-semibold uppercase tracking-wider mb-4">
                  {item.category}
                </div>

                {/* Side-by-Side Visual Comparison Card */}
                <div className="grid grid-cols-2 gap-3 mb-5">
                  <div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-[#FAF8F5] border border-[#C5A880]/30">
                    <img src={item.imgBefore} alt="Before Treatment" className="w-full h-full object-cover filter brightness-95" />
                    <div className="absolute top-2 left-2 bg-black/70 text-white font-commissioner text-[10px] uppercase font-bold px-2 py-0.5 rounded">
                      BEFORE
                    </div>
                  </div>
                  <div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-[#FAF8F5] border-2 border-[#C5A880]">
                    <img src={item.imgAfter} alt="After Treatment" className="w-full h-full object-cover" />
                    <div className="absolute top-2 left-2 bg-[#8C6D38] text-white font-commissioner text-[10px] uppercase font-bold px-2 py-0.5 rounded">
                      AFTER
                    </div>
                  </div>
                </div>

                {/* Result Breakdown */}
                <div className="p-3 bg-[#FAF6EE] rounded-xl border border-[#C5A880]/30 mb-4 font-commissioner text-xs text-[#555555]">
                  <div className="font-bold text-[#3A2E1E] mb-1 text-sm">
                    Result: {item.metric}
                  </div>
                  <p className="font-light leading-relaxed">
                    <span className="font-semibold text-[#8C6D38]">Before:</span> {item.beforeDesc}
                  </p>
                  <p className="font-light leading-relaxed mt-1">
                    <span className="font-semibold text-[#8C6D38]">After:</span> {item.afterDesc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* 2. VIDEO TESTIMONIALS */}
      {activeTab === 'video' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {videoTestimonials.map((v) => (
            <div key={v.id} className="reference-card rounded-2xl overflow-hidden p-5 bg-white border border-[#C5A880]/30 shadow-md">
              {/* Video Player */}
              <div className="relative aspect-video rounded-xl overflow-hidden bg-black/10 mb-4 group">
                <video
                  src={v.videoUrl}
                  controls
                  playsInline
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md text-white font-mono text-[10px] px-2.5 py-1 rounded-full flex items-center gap-1.5">
                  <Play className="w-3 h-3 fill-white" />
                  <span>{v.duration}</span>
                </div>
              </div>

              {/* Client & Video Metadata */}
              <div className="p-2 font-commissioner">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-dongle text-3xl text-[#3A2E1E] leading-none font-normal">
                    {v.clientName}
                  </h3>
                  <span className="font-commissioner text-[10px] uppercase font-bold tracking-wider text-[#8C6D38] bg-[#FAF6EE] px-2.5 py-1 rounded-full border border-[#C5A880]/30">
                    {v.location}
                  </span>
                </div>
                <div className="text-xs text-[#8C6D38] font-semibold uppercase tracking-wide mb-3">
                  Protocol: {v.treatment}
                </div>
                <p className="text-xs text-[#555555] font-light leading-relaxed italic bg-[#FAF8F5] p-3 rounded-lg border border-[#C5A880]/20">
                  "{v.quote}"
                </p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* 3. VERIFIED CLIENT REVIEWS */}
      {activeTab === 'reviews' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {textTestimonials.map((item, idx) => (
            <div key={idx} className="reference-card p-6 rounded-2xl flex flex-col justify-between bg-white border border-[#C5A880]/30">
              <div>
                {/* Rating & Tag */}
                <div className="flex items-center justify-between mb-4 font-commissioner text-xs">
                  <div className="flex items-center gap-1 text-[#8C6D38]">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#8C6D38]" />
                    ))}
                  </div>
                  <span className="font-commissioner text-[10px] font-bold tracking-widest uppercase text-[#8C6D38] bg-[#FAF6EE] px-2.5 py-1 rounded-full border border-[#C5A880]/30">
                    {item.tag}
                  </span>
                </div>

                <Quote className="w-8 h-8 text-[#C5A880]/40 mb-2" />

                <p className="font-commissioner text-xs md:text-sm text-[#555555] font-light leading-relaxed mb-6 italic">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-[#C5A880]/20 flex items-center justify-between font-commissioner">
                <div>
                  <h4 className="font-dongle text-3xl text-[#3A2E1E] leading-none font-normal">
                    {item.name}
                  </h4>
                  <p className="font-commissioner text-[11px] text-[#777777]">
                    {item.role}
                  </p>
                </div>
                <Award className="w-5 h-5 text-[#8C6D38]" />
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
