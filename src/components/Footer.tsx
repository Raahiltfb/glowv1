export default function Footer() {

  return (
    <footer className="border-t border-[#2A2621] bg-[#000000] text-white py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start justify-between gap-8">
        
        <div>
          <div className="font-serif text-2xl text-[#C5A880] tracking-wider mb-2">
            GLOW FLOW
          </div>
          <div className="font-mono text-xs text-white/60 tracking-widest">
            CLINICAL LYMPHATIC DRAINAGE & FACIAL SCULPTING
          </div>
        </div>

        <div>
          <div className="font-mono text-xs text-white/60 uppercase tracking-widest mb-1">
            LOCATION & HOURS
          </div>
          <div className="text-sm text-white font-light">
            Bandra West & Juhu, Mumbai
          </div>
          <div className="font-mono text-xs text-[#C5A880] mt-1">
            BY APPOINTMENT ONLY · MON-SAT (10 AM - 7 PM)
          </div>
        </div>

        <div>
          <a 
            href="https://wa.me/919999999999" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-block font-mono text-xs uppercase tracking-widest text-[#C5A880] border border-[#C5A880] px-6 py-3 hover:bg-[#C5A880] hover:text-black transition-none"
          >
            WhatsApp Direct Booking →
          </a>
        </div>

      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-[#1F1F1F] text-center font-mono text-[11px] text-white/40">
        © {new Date().getFullYear()} GLOW FLOW MUMBAI. ALL RIGHTS RESERVED.
      </div>
    </footer>
  );
}
