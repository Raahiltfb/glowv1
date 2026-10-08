import { useState, useEffect } from 'react';
import { X, Phone, MessageCircle, MapPin } from 'lucide-react';
import { servicesList, facialSubServices } from './TreatmentsSection';

interface BookingModalProps {
  isOpen: boolean;
  initialTreatment?: string;
  onClose: () => void;
}

export default function BookingModal({
  isOpen,
  initialTreatment = 'Facial Lymphatic Drainage',
  onClose,
}: BookingModalProps) {
  const [selectedTreatment, setSelectedTreatment] = useState(initialTreatment);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [preferredDate, setPreferredDate] = useState('');

  useEffect(() => {
    if (initialTreatment) {
      setSelectedTreatment(initialTreatment);
    }
  }, [initialTreatment]);

  if (!isOpen) return null;

  const allTreatmentNames = [
    ...servicesList.map((s) => s.title),
    ...facialSubServices.map((f) => f.name),
    'Custom Combination Session',
  ];

  const handleWhatsAppBooking = () => {
    const text = encodeURIComponent(
      `Hello Glow Flow Studio,\n\nI would like to book a session for *${selectedTreatment}*.\n` +
        (name ? `Name: ${name}\n` : '') +
        (phone ? `Phone: ${phone}\n` : '') +
        (preferredDate ? `Preferred Date/Time: ${preferredDate}\n` : '') +
        `Location: Khar West, Mumbai`
    );
    window.open(`https://wa.me/918104101177?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade">
      <div
        className="reference-card bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 relative border border-[#C5A880]/40 shadow-2xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-[#777777] hover:text-black hover:bg-black/5 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="text-center mb-6">
          <div className="flex items-center justify-center gap-2 font-commissioner text-xs font-semibold uppercase tracking-[0.25em] text-[#8C6D38] mb-2">
            <span className="w-6 h-[1px] bg-[#C5A880]/50" />
            <span>Private Sanctuary Session</span>
            <span className="w-6 h-[1px] bg-[#C5A880]/50" />
          </div>
          <h3 className="font-dongle text-4xl text-[#3A2E1E] font-normal leading-none">
            Book Your Session
          </h3>
          <p className="font-commissioner text-[#666666] text-xs font-light mt-1">
            Glow Flow Studio &bull; Khar West, Mumbai
          </p>
        </div>

        {/* Form Fields */}
        <div className="space-y-4 text-left font-commissioner">
          {/* Treatment Selector */}
          <div>
            <label className="block font-commissioner text-xs font-semibold tracking-wider uppercase text-[#8C6D38] mb-1.5">
              Select Treatment / Ritual
            </label>
            <select
              value={selectedTreatment}
              onChange={(e) => setSelectedTreatment(e.target.value)}
              className="w-full bg-[#FAF8F5] border border-[#C5A880]/40 rounded-md px-4 py-3 text-[#222222] text-sm focus:outline-none focus:border-[#8C6D38] cursor-pointer font-commissioner"
            >
              {allTreatmentNames.map((tName, idx) => (
                <option key={idx} value={tName} className="bg-white text-[#222222]">
                  {tName}
                </option>
              ))}
            </select>
          </div>

          {/* Name */}
          <div>
            <label className="block font-commissioner text-xs font-medium tracking-wider uppercase text-[#555555] mb-1">
              Your Name (Optional)
            </label>
            <input
              type="text"
              placeholder="e.g. Ananya Sharma"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-[#FAF8F5] border border-[#C5A880]/40 rounded-md px-4 py-2.5 text-[#222222] text-sm focus:outline-none focus:border-[#8C6D38]"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block font-commissioner text-xs font-medium tracking-wider uppercase text-[#555555] mb-1">
              Contact Phone (Optional)
            </label>
            <input
              type="tel"
              placeholder="e.g. 98200XXXXX"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full bg-[#FAF8F5] border border-[#C5A880]/40 rounded-md px-4 py-2.5 text-[#222222] text-sm focus:outline-none focus:border-[#8C6D38]"
            />
          </div>

          {/* Date / Time */}
          <div>
            <label className="block font-commissioner text-xs font-medium tracking-wider uppercase text-[#555555] mb-1">
              Preferred Date / Time (Optional)
            </label>
            <input
              type="text"
              placeholder="e.g. Tomorrow 3:00 PM"
              value={preferredDate}
              onChange={(e) => setPreferredDate(e.target.value)}
              className="w-full bg-[#FAF8F5] border border-[#C5A880]/40 rounded-md px-4 py-2.5 text-[#222222] text-sm focus:outline-none focus:border-[#8C6D38]"
            />
          </div>
        </div>

        {/* Location Note */}
        <div className="mt-6 p-3 rounded-md bg-[#FAF6EE] border border-[#C5A880]/30 flex items-start gap-2.5 text-xs text-[#555555] font-commissioner">
          <MapPin className="w-4 h-4 text-[#8C6D38] shrink-0 mt-0.5" />
          <span>Studio: 404 Mangal Bhavna CHS, Khar West, Mumbai</span>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 space-y-3 font-commissioner">
          <button
            onClick={handleWhatsAppBooking}
            className="w-full gold-btn text-xs tracking-widest uppercase font-bold py-3.5 rounded-md flex items-center justify-center gap-2 cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 fill-black" />
            <span>Book via WhatsApp Direct</span>
          </button>

          <a
            href="tel:8104101177"
            className="w-full font-commissioner text-xs font-semibold tracking-widest uppercase text-[#8C6D38] bg-[#FAF6EE] border border-[#C5A880]/40 hover:bg-[#C5A880]/10 py-3 rounded-md transition-all flex items-center justify-center gap-2 text-center"
          >
            <Phone className="w-4 h-4" />
            <span>Call Studio (8104101177)</span>
          </a>
        </div>
      </div>
    </div>
  );
}
