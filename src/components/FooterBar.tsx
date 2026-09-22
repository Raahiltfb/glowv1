import { MapPin, Phone, Mail, MessageCircle, Clock, Navigation } from 'lucide-react';

export default function FooterBar() {
  const getWhatsAppUrl = () => {
    const text = encodeURIComponent(
      'Hello Glow Flow Studio,\n\nI would like to book a session at your Khar West studio. Please share available slots.'
    );
    return `https://wa.me/918104101177?text=${text}`;
  };

  const getMapsUrl = () => {
    return 'https://maps.google.com/?q=404+Mangal+Bhavna+CHS+Khar+West+Mumbai';
  };

  return (
    <footer id="contact" className="bg-[#FAF8F5] text-[#222222] pt-20 pb-12 px-6 border-t border-[#C5A880]/30 font-commissioner">
      <div className="max-w-7xl mx-auto">
        
        {/* Contact Section Title */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#8C6D38] mb-2">
            <span className="w-8 h-[1px] bg-[#C5A880]/40" />
            <span>Studio Sanctuary & Reservation Directory</span>
            <span className="w-8 h-[1px] bg-[#C5A880]/40" />
          </div>
          <h2 className="font-dongle text-6xl sm:text-7xl md:text-8xl font-normal leading-none tracking-wide text-[#3A2E1E]">
            Get In Touch & Book Your Session
          </h2>
          <p className="text-xs md:text-sm text-[#555555] font-light max-w-2xl mx-auto mt-2">
            Visit our private clinical sanctuary in Khar West, Mumbai. Reserve directly via WhatsApp, call our studio line, or reach us by email.
          </p>
        </div>

        {/* 3 High-Impact Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          
          {/* Card 1: Instant WhatsApp Booking */}
          <div className="reference-card rounded-2xl p-8 bg-white border-2 border-[#C5A880]/40 flex flex-col justify-between shadow-lg relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#E5C384]/10 rounded-bl-full pointer-events-none" />
            <div>
              <div className="w-14 h-14 rounded-full bg-[#E5C384]/25 border border-[#C5A880]/50 flex items-center justify-center text-[#8C6D38] mb-6 shadow-sm">
                <MessageCircle className="w-7 h-7 fill-[#8C6D38]/10" />
              </div>

              <span className="text-[10px] font-bold uppercase tracking-widest text-[#8C6D38] bg-[#FAF6EE] px-3 py-1 rounded-full border border-[#C5A880]/30 block w-fit mb-3">
                Fastest Response
              </span>

              <h3 className="font-dongle text-4xl text-[#3A2E1E] leading-none font-normal mb-2">
                WhatsApp Direct Booking
              </h3>

              <p className="text-xs text-[#555555] font-light leading-relaxed mb-6">
                Chat directly with our studio coordinator to schedule your treatment session, select custom protocols, and confirm slots instantly.
              </p>
            </div>

            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="gold-btn w-full text-xs font-bold tracking-widest uppercase py-3.5 rounded-xl flex items-center justify-center gap-2 shadow-md"
            >
              <MessageCircle className="w-4 h-4 fill-black" />
              <span>Book via WhatsApp (+91 8104101177)</span>
            </a>
          </div>

          {/* Card 2: Studio Sanctuary Location */}
          <div className="reference-card rounded-2xl p-8 bg-white border border-[#C5A880]/30 flex flex-col justify-between shadow-md relative overflow-hidden">
            <div>
              <div className="w-14 h-14 rounded-full bg-[#E5C384]/25 border border-[#C5A880]/50 flex items-center justify-center text-[#8C6D38] mb-6 shadow-sm">
                <MapPin className="w-7 h-7" />
              </div>

              <span className="text-[10px] font-bold uppercase tracking-widest text-[#8C6D38] bg-[#FAF6EE] px-3 py-1 rounded-full border border-[#C5A880]/30 block w-fit mb-3">
                Studio Location
              </span>

              <h3 className="font-dongle text-4xl text-[#3A2E1E] leading-none font-normal mb-2">
                Khar West Sanctuary
              </h3>

              <div className="text-xs text-[#555555] font-light leading-relaxed mb-4">
                <p className="font-semibold text-[#3A2E1E] mb-1">404 Mangal Bhavna CHS</p>
                <p>Khar West, Mumbai, Maharashtra 400052</p>
              </div>

              <div className="flex items-center gap-2 text-xs text-[#777777] bg-[#FAF8F5] p-3 rounded-lg border border-[#C5A880]/20 mb-6">
                <Clock className="w-4 h-4 text-[#8C6D38] shrink-0" />
                <span>Mon – Sun: 10:00 AM – 8:00 PM (By Appointment)</span>
              </div>
            </div>

            <a
              href={getMapsUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-xs font-semibold tracking-widest uppercase text-[#8C6D38] bg-[#FAF6EE] border border-[#C5A880]/40 hover:bg-[#C5A880]/10 py-3.5 rounded-xl transition-all flex items-center justify-center gap-2 text-center"
            >
              <Navigation className="w-4 h-4" />
              <span>Get Directions on Google Maps</span>
            </a>
          </div>

          {/* Card 3: Phone & Email Lines */}
          <div className="reference-card rounded-2xl p-8 bg-white border border-[#C5A880]/30 flex flex-col justify-between shadow-md relative overflow-hidden">
            <div>
              <div className="w-14 h-14 rounded-full bg-[#E5C384]/25 border border-[#C5A880]/50 flex items-center justify-center text-[#8C6D38] mb-6 shadow-sm">
                <Phone className="w-7 h-7" />
              </div>

              <span className="text-[10px] font-bold uppercase tracking-widest text-[#8C6D38] bg-[#FAF6EE] px-3 py-1 rounded-full border border-[#C5A880]/30 block w-fit mb-3">
                Studio Line & Email
              </span>

              <h3 className="font-dongle text-4xl text-[#3A2E1E] leading-none font-normal mb-2">
                Direct Call & Email
              </h3>

              <div className="space-y-3 mb-6 text-xs text-[#555555]">
                <div className="flex items-center gap-3 p-2.5 rounded-lg bg-[#FAF8F5] border border-[#C5A880]/20">
                  <Phone className="w-4 h-4 text-[#8C6D38]" />
                  <div>
                    <span className="block text-[10px] text-[#777777] uppercase">Phone Line</span>
                    <a href="tel:8104101177" className="font-mono text-sm font-bold text-[#3A2E1E] hover:text-[#8C6D38]">
                      +91 8104101177
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-2.5 rounded-lg bg-[#FAF8F5] border border-[#C5A880]/20">
                  <Mail className="w-4 h-4 text-[#8C6D38]" />
                  <div>
                    <span className="block text-[10px] text-[#777777] uppercase">Email Enquiries</span>
                    <a href="mailto:2glowflow@gmail.com" className="font-mono text-xs font-semibold text-[#3A2E1E] hover:text-[#8C6D38]">
                      2glowflow@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <a
              href="tel:8104101177"
              className="w-full text-xs font-semibold tracking-widest uppercase text-[#8C6D38] bg-[#FAF6EE] border border-[#C5A880]/40 hover:bg-[#C5A880]/10 py-3.5 rounded-xl transition-all flex items-center justify-center gap-2 text-center"
            >
              <Phone className="w-4 h-4" />
              <span>Call Studio Now (+91 8104101177)</span>
            </a>
          </div>

        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 border-t border-[#C5A880]/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-center">
          <div className="flex items-center gap-3">
            <img src="/glowflow.png" alt="Glow Flow Logo" className="h-10 w-auto object-contain" />
            <span className="text-xs tracking-[0.2em] text-[#8C6D38] uppercase font-semibold">
              GLOW FLOW STUDIO &bull; RELEASE. RESTORE. RADIATE.
            </span>
          </div>
          <div className="text-[11px] text-[#777777]">
            &copy; {new Date().getFullYear()} GLOW FLOW STUDIO. ALL RIGHTS RESERVED.
          </div>
        </div>

      </div>
    </footer>
  );
}
