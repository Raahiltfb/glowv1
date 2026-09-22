export const productsData = [
  {
    id: 'guasha-stone',
    name: 'Boutique Hand-Carved Gua Sha Stone',
    subtitle: 'White Jade & Gold-Rim Sculpting Stone',
    description: 'Medicinal white jade facial Gua Sha stone carved for manual fascia release, jawline sculpting, and cheekbone lifting at home.',
    imgUrl: '/product-guasha.png',
  },
  {
    id: 'gold-mask',
    name: '24K Gold Hydrogel Facial Mask',
    subtitle: 'Infused with Pure 24K Gold & Bio-Collagen',
    description: 'Clinical grade 24K gold hydrogel sheet mask designed to deeply hydrate, soothe edema, and lock in biological radiance.',
    imgUrl: '/product-mask.png',
  },
];

export default function ProductsSection() {
  return (
    <section id="products" className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-b border-[#C5A880]/20 font-commissioner">
      {/* Title Bar */}
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#8C6D38] mb-2">
          <span className="w-8 h-[1px] bg-[#C5A880]/40" />
          <span>Boutique Skincare Tools</span>
          <span className="w-8 h-[1px] bg-[#C5A880]/40" />
        </div>
        <h2 className="font-dongle text-6xl sm:text-7xl md:text-8xl font-normal leading-none tracking-wide text-[#3A2E1E]">
          Studio Skincare Products
        </h2>
        <p className="text-xs md:text-sm text-[#555555] font-light max-w-xl mx-auto mt-2">
          Curated clinical restoration tools for your home facial sculpting ritual.
        </p>
      </div>

      {/* 2 Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {productsData.map((prod) => (
          <div key={prod.id} className="reference-card rounded-2xl p-6 bg-white flex flex-col justify-between group border border-[#C5A880]/30 shadow-sm">
            <div>
              {/* Product Image */}
              <div className="relative aspect-square rounded-xl overflow-hidden mb-6 bg-[#FAF8F5] border border-[#C5A880]/20">
                <img
                  src={prod.imgUrl}
                  alt={prod.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Title & Subtitle */}
              <h3 className="font-dongle text-4xl text-[#3A2E1E] leading-none font-normal mb-1">
                {prod.name}
              </h3>
              <div className="text-xs text-[#8C6D38] font-semibold uppercase tracking-wider mb-3">
                {prod.subtitle}
              </div>

              {/* Description */}
              <p className="text-xs md:text-sm text-[#555555] leading-relaxed font-light">
                {prod.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
