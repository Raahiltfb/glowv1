import { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import AboutPage from './components/AboutPage';
import TreatmentsSection from './components/TreatmentsSection';
import BoutiqueMenuSection from './components/BoutiqueMenuSection';
import GallerySection from './components/GallerySection';
import TestimonialsSection from './components/TestimonialsSection';
import ProductsSection from './components/ProductsSection';
import FooterBar from './components/FooterBar';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'about'>('home');

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
    handleNavigateSection('contact');
  };

  const handleSelectTreatment = (_treatmentTitle: string) => {
    handleNavigateSection('contact');
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
            {/* 1. Hero Tab / Section */}
            <HeroSection
              onOpenBooking={handleOpenBooking}
              onExploreTreatments={() => handleNavigateSection('treatments')}
            />

            {/* 2. About Glow Flow, Founder & Team Tab / Section */}
            <AboutSection onOpenBooking={handleOpenBooking} />

            {/* 3. Treatments Tab / Section (All 7 Lymphatic + 5 Boutique Menu Rituals) */}
            <TreatmentsSection onSelectTreatment={handleSelectTreatment} />
            <BoutiqueMenuSection onSelectMenu={handleSelectTreatment} />

            {/* 4. Gallery Tab / Section (Sanctuary photos & procedure videos) */}
            <GallerySection />

            {/* 5. Testimonials Tab / Section (Client feedback & celebrity reviews) */}
            <TestimonialsSection />

            {/* 6. Products Tab / Section (Gua Sha Stone & Gold Facial Mask) */}
            <ProductsSection />
          </>
        )}

        {currentPage === 'about' && (
          <AboutPage onOpenBooking={handleOpenBooking} />
        )}
      </main>

      {/* 7. Contact Section & Footer Bar */}
      <FooterBar />
    </div>
  );
}
