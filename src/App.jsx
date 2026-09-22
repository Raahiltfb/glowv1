import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LymphaticSection from './components/LymphaticSection';
import AboutPage from './components/AboutPage';
import Footer from './components/Footer';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div className="relative min-h-screen bg-black text-white selection:bg-[#C5A880]/30 flex flex-col">
      {/* Floating Navbar */}
      <Navbar
        currentPage={currentPage}
        onNavigateHome={() => setCurrentPage('home')}
        onNavigateAbout={() => setCurrentPage('about')}
      />

      {/* Main Page View Routing */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <>
            {/* Homepage Hero */}
            <Hero />

            {/* Original Black & Gold Lymphatic & Boutique Menu Section */}
            <LymphaticSection />
          </>
        )}

        {currentPage === 'about' && (
          <AboutPage />
        )}
      </main>

      {/* Global Black & Gold Footer */}
      <Footer />
    </div>
  );
}
