import { useState } from 'react';
import { MessageCircle, ArrowRight } from 'lucide-react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import TreatmentsSection from './components/TreatmentsSection';
import BoutiqueMenuSection from './components/BoutiqueMenuSection';
import FooterBar from './components/FooterBar';
import BookingModal from './components/BookingModal';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'treatments'>('home');
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedTreatment, setSelectedTreatment] = useState<string | undefined>();

  const handleNavigateHome = () => {
    setCurrentPage('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateTreatments = () => {
    setCurrentPage('treatments');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateSection = (sectionId: string) => {
    setCurrentPage('home');
    setTimeout(() => {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 50);
  };

  const handleOpenBooking = () => {
    setSelectedTreatment(undefined);
    setIsBookingOpen(true);
  };

  const handleSelectTreatment = (treatmentTitle: string) => {
    setSelectedTreatment(treatmentTitle);
    setIsBookingOpen(true);
  };

  return (
    <div className="relative min-h-screen bg-[#0D281E] text-[#F5E8D0] selection:bg-[#D4AF37]/30 selection:text-white flex flex-col font-commissioner">
      {/* Sticky Emerald Green & Gold Navbar */}
      <Navbar
        currentPage={currentPage}
        onNavigateHome={handleNavigateHome}
        onNavigateTreatments={handleNavigateTreatments}
        onNavigateSection={handleNavigateSection}
        onOpenBooking={handleOpenBooking}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* PAGE 1: HOME (Hero + About Section) */}
        {currentPage === 'home' && (
          <>
            <HeroSection
              onOpenBooking={handleOpenBooking}
              onExploreTreatments={handleNavigateTreatments}
            />

            {/* About Section on Home */}
            <AboutSection onOpenBooking={handleOpenBooking} />
          </>
        )}

        {/* PAGE 2: TREATMENTS (Treatments + Also on the Menu + Contact part) */}
        {currentPage === 'treatments' && (
          <div className="pt-16 sm:pt-20">
            <TreatmentsSection onSelectTreatment={handleSelectTreatment} />
            <BoutiqueMenuSection onSelectMenu={handleSelectTreatment} />
          </div>
        )}
      </main>

      {/* Footer / Contact Part */}
      <FooterBar />

      {/* Floating Sticky Mobile Concierge Bar (Visible only on mobile <sm) */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#071912]/95 backdrop-blur-xl border-t border-[#D4AF37]/35 px-4 pt-2.5 pb-[max(0.625rem,env(safe-area-inset-bottom))] shadow-[0_-10px_30px_rgba(0,0,0,0.7)] flex items-center gap-2.5">
        <a
          href="https://wa.me/918104101177?text=Hello%20GlowFlow%20Clinic%2C%20I%20would%20like%20to%20inquire%20about%20booking%20a%20treatment."
          target="_blank"
          rel="noopener noreferrer"
          className="gold-btn-outline flex-1 text-[11px] font-bold tracking-wider uppercase py-3 rounded-full flex items-center justify-center gap-1.5 text-center shadow-sm"
        >
          <MessageCircle className="w-3.5 h-3.5" />
          <span>WhatsApp Desk</span>
        </a>

        <button
          onClick={handleOpenBooking}
          className="gold-btn flex-1 text-[11px] font-bold tracking-wider uppercase py-3 rounded-full flex items-center justify-center gap-1.5 cursor-pointer shadow-md"
        >
          <span>Book Session</span>
          <ArrowRight className="w-3.5 h-3.5 text-[#0A2018]" />
        </button>
      </div>

      {/* Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        initialTreatment={selectedTreatment}
        onClose={() => setIsBookingOpen(false)}
      />
    </div>
  );
}
