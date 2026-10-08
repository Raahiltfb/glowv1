import { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutPage from './components/AboutPage';
import TreatmentsSection from './components/TreatmentsSection';
import BoutiqueMenuSection from './components/BoutiqueMenuSection';
import FooterBar from './components/FooterBar';
import BookingModal from './components/BookingModal';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'about'>('home');
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedTreatment, setSelectedTreatment] = useState<string | undefined>();

  const handleNavigateHome = () => {
    setCurrentPage('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateAbout = () => {
    setCurrentPage('about');
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
    <div className="relative min-h-screen bg-[#FAF8F5] text-[#222222] selection:bg-[#E5C384]/30 selection:text-black flex flex-col font-commissioner">
      {/* Sticky White & Gold Navbar */}
      <Navbar
        currentPage={currentPage}
        onNavigateHome={handleNavigateHome}
        onNavigateAbout={handleNavigateAbout}
        onNavigateSection={handleNavigateSection}
        onOpenBooking={handleOpenBooking}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <>
            {/* 1. Hero Section */}
            <HeroSection
              onOpenBooking={handleOpenBooking}
              onExploreTreatments={() => handleNavigateSection('treatments')}
            />

            {/* 2. 10 Lymphatic Drainage Services */}
            <TreatmentsSection onSelectTreatment={handleSelectTreatment} />

            {/* 3. Also on the menu (Face Yoga, Acupressure, Kansa, Gua Sha, Reflexology) */}
            <BoutiqueMenuSection onSelectMenu={handleSelectTreatment} />
          </>
        )}

        {currentPage === 'about' && (
          <AboutPage onOpenBooking={handleOpenBooking} />
        )}
      </main>

      {/* Footer Bar */}
      <FooterBar />

      {/* Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        initialTreatment={selectedTreatment}
        onClose={() => setIsBookingOpen(false)}
      />
    </div>
  );
}
