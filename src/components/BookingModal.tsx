import { useState, useEffect } from 'react';
import { X, Phone, MessageCircle, MapPin } from 'lucide-react';
import { offeringsList } from './TreatmentsSection';

interface BookingModalProps {
  isOpen: boolean;
  initialTreatment?: string;
  onClose: () => void;
}

export default function BookingModal({
  isOpen,
  initialTreatment = 'Instant Facelift',
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
    ...offeringsList.map((s) => `${s.title} (${s.duration} ${s.durationUnit})`),
    'Face Yoga Consultation',
    'Custom Combination Session',
  ];

  const handleWhatsAppBooking = () => {
    const text = encodeURIComponent(
      `Hello GlowFlow Clinic,\n\nI would like to book an appointment for *${selectedTreatment}*.\n` +
        (name ? `Name: ${name}\n` : '') +
        (phone ? `Phone: ${phone}\n` : '') +
        (preferredDate ? `Preferred Date/Time: ${preferredDate}\n` : '') +
        `Location: Bandra West, Mumbai`
    );
    window.open(`https://wa.me/918104101177?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-fade">
      <div
        className="emerald-card bg-[#0D281E] rounded-3xl max-w-lg w-full p-6 sm:p-8 relative border-2 border-[#D4AF37]/50 shadow-2xl max-h-[92vh] overflow-y-auto text-[#F5E8D0]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-[#D8C9B4] hover:text-white hover:bg-[#14382A] transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="text-center mb-6">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#E8D58C] mb-2">
            <span className="w-6 h-[1px] bg-[#D4AF37]/50" />
            <span>GlowFlow Clinic Sanctuary</span>
            <span className="w-6 h-[1px] bg-[#D4AF37]/50" />
          </div>
          <h3 className="font-serif-luxury text-3xl sm:text-4xl text-white font-normal leading-none">
            <span className="gold-gradient-text">Book Your Session</span>
          </h3>
          <p className="text-[#D8C9B4] text-xs font-light mt-1">
            Bandra West, Mumbai &bull; +91 81041 01177
          </p>
        </div>

        {/* Form Fields */}
        <div className="space-y-4 text-left font-commissioner">
          {/* Treatment Selector */}
          <div>
            <label className="block text-xs font-semibold tracking-wider uppercase text-[#E8D58C] mb-1.5">
              Select Protocol
            </label>
            <select
              value={selectedTreatment}
              onChange={(e) => setSelectedTreatment(e.target.value)}
              className="w-full bg-[#081B13] border border-[#D4AF37]/40 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#E8D58C] cursor-pointer font-commissioner"
            >
              {allTreatmentNames.map((tName, idx) => (
                <option key={idx} value={tName} className="bg-[#081B13] text-white">
                  {tName}
                </option>
              ))}
            </select>
          </div>

          {/* Name */}
          <div>
            <label className="block text-xs font-medium tracking-wider uppercase text-[#D8C9B4] mb-1">
              Your Name (Optional)
            </label>
            <input
              type="text"
              placeholder="e.g. Priya Sharma"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-[#081B13] border border-[#D4AF37]/40 rounded-xl px-4 py-2.5 text-white placeholder-[#D8C9B4]/40 text-sm focus:outline-none focus:border-[#E8D58C]"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-xs font-medium tracking-wider uppercase text-[#D8C9B4] mb-1">
              Contact Phone (Optional)
            </label>
            <input
              type="tel"
              placeholder="e.g. +91 98200XXXXX"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full bg-[#081B13] border border-[#D4AF37]/40 rounded-xl px-4 py-2.5 text-white placeholder-[#D8C9B4]/40 text-sm focus:outline-none focus:border-[#E8D58C]"
            />
          </div>

          {/* Date / Time */}
          <div>
            <label className="block text-xs font-medium tracking-wider uppercase text-[#D8C9B4] mb-1">
              Preferred Date / Time (Optional)
            </label>
            <input
              type="text"
              placeholder="e.g. Tomorrow 4:00 PM"
              value={preferredDate}
              onChange={(e) => setPreferredDate(e.target.value)}
              className="w-full bg-[#081B13] border border-[#D4AF37]/40 rounded-xl px-4 py-2.5 text-white placeholder-[#D8C9B4]/40 text-sm focus:outline-none focus:border-[#E8D58C]"
            />
          </div>
        </div>

        {/* Location Note */}
        <div className="mt-6 p-3 rounded-xl bg-[#081B13]/70 border border-[#D4AF37]/25 flex items-start gap-2.5 text-xs text-[#D8C9B4]">
          <MapPin className="w-4 h-4 text-[#E8D58C] shrink-0 mt-0.5" />
          <span>Clinic: New Clifton RHS, Prof Almeida Road, Bandra West, Mumbai</span>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 space-y-3 font-commissioner">
          <button
            onClick={handleWhatsAppBooking}
            className="w-full gold-btn text-xs tracking-widest uppercase font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 cursor-pointer shadow-lg hover:brightness-105"
          >
            <MessageCircle className="w-4 h-4 fill-[#0A2018]" />
            <span>Confirm via WhatsApp Direct</span>
          </button>

          <a
            href="tel:8104101177"
            className="w-full gold-btn-outline text-xs font-semibold tracking-widest uppercase py-3 rounded-xl transition-all flex items-center justify-center gap-2 text-center"
          >
            <Phone className="w-4 h-4" />
            <span>Call Clinic (+91 81041 01177)</span>
          </a>
        </div>
      </div>
    </div>
  );
}
