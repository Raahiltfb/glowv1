import { MapPin, Phone, Mail, MessageCircle, Clock, Navigation } from 'lucide-react';

export default function FooterBar() {
  const getWhatsAppUrl = () => {
    const text = encodeURIComponent(
      'Hello GlowFlow Clinic,\n\nI would like to book a session at your Bandra West clinic. Please share available appointment slots.'
    );
    return `https://wa.me/918104101177?text=${text}`;
  };

  const getMapsUrl = () => {
    return 'https://maps.google.com/?q=New+Clifton+RHS+Prof+Almeida+Road+Bandra+West+Mumbai';
  };

  return (
    <footer id="contact" className="relative bg-[#091F15] text-[#F5E8D0] pt-20 pb-12 px-6 border-t border-[#D4AF37]/25 font-commissioner overflow-hidden">
      {/* Botanical Leaves Background Accent */}
      <div className="absolute top-0 left-0 w-64 sm:w-80 pointer-events-none opacity-25 select-none z-0">
        <img
          src="/botanical-leaves-left.png"
          alt=""
          className="w-full h-auto object-contain transform -translate-x-12 -translate-y-8"
        />
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Contact Section Title */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#E8D58C] mb-2">
            <span className="w-8 h-[1px] bg-[#D4AF37]/50" />
            <span>Clinic Sanctuary & Appointments</span>
            <span className="w-8 h-[1px] bg-[#D4AF37]/50" />
          </div>
          <h2 className="font-serif-luxury text-5xl sm:text-6xl md:text-7xl font-normal leading-none tracking-wide text-white">
            <span className="gold-gradient-text">Contact & Booking</span>
          </h2>
          <p className="text-xs md:text-sm text-[#D8C9B4] font-light max-w-2xl mx-auto mt-3 leading-relaxed">
            Visit our private clinical sanctuary in Bandra West, Mumbai. Reserve directly via WhatsApp, call our clinic desk, or email us.
          </p>
        </div>

        {/* 3 High-Impact Contact Cards in Emerald & Gold */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          
          {/* Card 1: WhatsApp Direct Booking */}
          <div className="emerald-card rounded-2xl p-8 border border-[#D4AF37]/35 flex flex-col justify-between group">
            <div>
              <div className="w-14 h-14 rounded-full bg-[#0E2D21] border border-[#D4AF37]/50 flex items-center justify-center text-[#E8D58C] mb-6 shadow-sm">
                <MessageCircle className="w-7 h-7" />
              </div>

              <span className="text-[10px] font-bold uppercase tracking-widest text-[#E8D58C] bg-[#0A2018] px-3 py-1 rounded-full border border-[#D4AF37]/30 block w-fit mb-3">
                Fastest Response
              </span>

              <h3 className="font-serif-luxury text-3xl text-white font-normal mb-2">
                WhatsApp Direct
              </h3>

              <p className="text-xs text-[#D8C9B4] font-light leading-relaxed mb-6">
                Chat directly with our clinic coordinator to schedule your treatment session, select custom protocols, and confirm slots instantly.
              </p>
            </div>

            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="gold-btn w-full text-xs font-bold tracking-widest uppercase py-3.5 rounded-xl flex items-center justify-center gap-2 shadow-md cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-[#0A2018]" />
              <span>Book via WhatsApp (+91 8104101177)</span>
            </a>
          </div>

          {/* Card 2: Clinic Location matching PDF */}
          <div className="emerald-card rounded-2xl p-8 border border-[#D4AF37]/35 flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 rounded-full bg-[#0E2D21] border border-[#D4AF37]/50 flex items-center justify-center text-[#E8D58C] mb-6 shadow-sm">
                <MapPin className="w-7 h-7" />
              </div>

              <span className="text-[10px] font-bold uppercase tracking-widest text-[#E8D58C] bg-[#0A2018] px-3 py-1 rounded-full border border-[#D4AF37]/30 block w-fit mb-3">
                Clinic Location
              </span>

              <h3 className="font-serif-luxury text-3xl text-white font-normal mb-2">
                Bandra West Sanctuary
              </h3>

              <div className="text-xs text-[#D8C9B4] font-light leading-relaxed mb-4">
                <p className="font-semibold text-white mb-1">New Clifton RHS, B wing, Ground floor, flat 4</p>
                <p>Prof Almeida Road, TPS -4, 1st Road, Bandra West, Pin - 400052</p>
              </div>

              <div className="flex items-center gap-2 text-xs text-[#D8C9B4]/80 bg-[#0A2018]/60 p-3 rounded-lg border border-[#D4AF37]/20 mb-6">
                <Clock className="w-4 h-4 text-[#E8D58C] shrink-0" />
                <span>Mon – Sun: By Appointment Only</span>
              </div>
            </div>

            <a
              href={getMapsUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="gold-btn-outline w-full text-xs font-semibold tracking-widest uppercase py-3.5 rounded-xl transition-all flex items-center justify-center gap-2 text-center"
            >
              <Navigation className="w-4 h-4" />
              <span>Get Directions</span>
            </a>
          </div>

          {/* Card 3: Phone & Email Lines */}
          <div className="emerald-card rounded-2xl p-8 border border-[#D4AF37]/35 flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 rounded-full bg-[#0E2D21] border border-[#D4AF37]/50 flex items-center justify-center text-[#E8D58C] mb-6 shadow-sm">
                <Phone className="w-7 h-7" />
              </div>

              <span className="text-[10px] font-bold uppercase tracking-widest text-[#E8D58C] bg-[#0A2018] px-3 py-1 rounded-full border border-[#D4AF37]/30 block w-fit mb-3">
                Direct Contact
              </span>

              <h3 className="font-serif-luxury text-3xl text-white font-normal mb-2">
                Phone & Email
              </h3>

              <div className="space-y-3 mb-6 text-xs text-[#D8C9B4]">
                <div className="flex items-center gap-3 p-2.5 rounded-lg bg-[#0A2018]/60 border border-[#D4AF37]/20">
                  <Phone className="w-4 h-4 text-[#E8D58C]" />
                  <div>
                    <span className="block text-[10px] text-[#D8C9B4]/70 uppercase">Call / WhatsApp</span>
                    <a href="tel:8104101177" className="font-mono text-xs font-bold text-white hover:text-[#E8D58C]">
                      +91 81041 01177 &bull; +91 99305 09906
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-2.5 rounded-lg bg-[#0A2018]/60 border border-[#D4AF37]/20">
                  <Mail className="w-4 h-4 text-[#E8D58C]" />
                  <div>
                    <span className="block text-[10px] text-[#D8C9B4]/70 uppercase">Email</span>
                    <a href="mailto:2glowflow@gmail.com" className="font-mono text-xs font-semibold text-white hover:text-[#E8D58C]">
                      2glowflow@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <a
              href="tel:8104101177"
              className="gold-btn-outline w-full text-xs font-semibold tracking-widest uppercase py-3.5 rounded-xl transition-all flex items-center justify-center gap-2 text-center"
            >
              <Phone className="w-4 h-4" />
              <span>Call +91 81041 01177</span>
            </a>
          </div>

        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 border-t border-[#D4AF37]/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-center">
          <div className="flex items-center gap-3">
            <img src="/glowflow.png" alt="Glow Flow Logo" className="h-9 w-auto object-contain" />
            <span className="text-xs tracking-[0.25em] text-[#E8D58C] uppercase font-semibold">
              GLOW FLOW STUDIO &bull; RELEASE. RESTORE. RADIATE.
            </span>
          </div>
          <div className="text-[11px] text-[#D8C9B4]/70">
            &copy; {new Date().getFullYear()} GLOW FLOW STUDIO. ALL RIGHTS RESERVED.
          </div>
        </div>

      </div>
    </footer>
  );
}
