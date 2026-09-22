export const galleryItems = [
  {
    type: 'video',
    title: 'Facial Lymphatic Drainage & Jaw Sculpting Protocol',
    subtitle: 'Live session before & after contour definition video',
    videoUrl: 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260711_090308_1dd0cea7-f9ba-4db4-8147-c7d746061c9e.mp4',
    posterUrl: '/hero-white-gold.png',
  },
  {
    type: 'image',
    title: 'Khar West Studio Sanctuary Treatment Room',
    subtitle: 'Private clinical sanctuary atmosphere',
    imgUrl: '/hero-white-gold.png',
  },
  {
    type: 'image',
    title: 'Hand-Carved Gua Sha & Herbal Elixir Ritual',
    subtitle: 'Medicinal quartz & 24K gold serum application',
    imgUrl: '/product-guasha.png',
  },
  {
    type: 'image',
    title: 'Full Body Metabolic Detox Therapy',
    subtitle: 'Lymphatic node stimulation & fluid release',
    imgUrl: '/product-mask.png',
  },
];

export default function GallerySection() {
  return (
    <section id="gallery" className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-b border-[#C5A880]/20">
      {/* Title Bar */}
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-3 font-commissioner text-xs font-semibold uppercase tracking-[0.25em] text-[#8C6D38] mb-2">
          <span className="w-8 h-[1px] bg-[#C5A880]/40" />
          <span>Sanctuary & Rejuvenation Gallery</span>
          <span className="w-8 h-[1px] bg-[#C5A880]/40" />
        </div>
        <h2 className="font-dongle text-6xl sm:text-7xl md:text-8xl font-normal leading-none tracking-wide text-[#3A2E1E]">
          Visuals & Rejuvenation Videos
        </h2>
        <p className="font-commissioner text-xs md:text-sm text-[#555555] font-light max-w-xl mx-auto mt-2">
          Explore our Khar West studio sanctuary, before-and-after facial sculpting results, and clinical protocols.
        </p>
      </div>

      {/* Featured Main Video Showcase */}
      <div className="mb-12 reference-card rounded-2xl overflow-hidden p-4 md:p-6 bg-white border border-[#C5A880]/30 shadow-md">
        <div className="relative aspect-video rounded-xl overflow-hidden bg-black/5 group">
          <video
            src={galleryItems[0].videoUrl}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
            <div className="inline-flex items-center gap-2 text-[#E5C384] text-xs font-semibold uppercase tracking-wider mb-1">
              <span>Featured Procedure Video</span>
            </div>
            <h3 className="font-dongle text-4xl sm:text-5xl leading-none font-normal">
              {galleryItems[0].title}
            </h3>
            <p className="font-commissioner text-xs text-white/80 font-light">
              {galleryItems[0].subtitle}
            </p>
          </div>
        </div>
      </div>

      {/* Photo Grid Showcase */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {galleryItems.slice(1).map((item, idx) => (
          <div key={idx} className="reference-card rounded-2xl overflow-hidden p-3 bg-white group cursor-pointer">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-3">
              <img
                src={item.imgUrl}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
            </div>
            <h4 className="font-dongle text-3xl text-[#3A2E1E] leading-none px-2 font-normal">
              {item.title}
            </h4>
            <p className="font-commissioner text-xs text-[#777777] px-2 pb-2 font-light">
              {item.subtitle}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
