import { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';

interface NavbarProps {
  currentPage: 'home' | 'about';
  onNavigateHome: () => void;
  onNavigateAbout: () => void;
  onNavigateSection: (sectionId: string) => void;
  onOpenBooking: () => void;
}

export default function Navbar({
  currentPage,
  onNavigateHome,
  onNavigateAbout,
  onNavigateSection,
  onOpenBooking,
}: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sectionTabs = [
    { id: 'hero', label: 'Home' },
    { id: 'treatments', label: 'Treatments' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header className="fixed top-2 sm:top-3 left-0 right-0 z-50 px-3 sm:px-4 md:px-8">
      {/* Floating Glassmorphism Pill Container */}
      <div
        className={`max-w-7xl mx-auto rounded-full transition-colors duration-300 transform-gpu px-4 sm:px-7 py-1.5 sm:py-2 flex items-center justify-between border ${isScrolled
          ? 'bg-[#0B221A]/95 backdrop-blur-xl border-[#D4AF37]/40 shadow-[0_10px_35px_rgba(0,0,0,0.6)]'
          : 'bg-[#0B221A]/85 backdrop-blur-md border-[#D4AF37]/25 shadow-lg hover:bg-[#0B221A]/95'
          }`}
      >
        {/* Brand Logo */}
        <button
          onClick={onNavigateHome}
          className="flex items-center group focus:outline-none cursor-pointer py-0.5"
          aria-label="Glow Flow Studio Home"
        >
          <img
            src="/glowflow.png"
            alt="Glow Flow Logo"
            className="h-9 sm:h-12 md:h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </button>

        {/* Center Nav Options */}
        <div className="hidden lg:flex items-center gap-6">
          {/* Main 2 Pages Pill Toggle */}
          <div className="flex items-center gap-1 bg-[#071812] p-1 rounded-full border border-[#D4AF37]/35 shadow-inner">
            <button
              onClick={onNavigateHome}
              className={`font-commissioner text-xs font-semibold uppercase tracking-wider px-5 py-2 rounded-full transition-all cursor-pointer ${currentPage === 'home'
                ? 'bg-gradient-to-r from-[#F3E5C8] via-[#E8D58C] to-[#D4AF37] text-[#0A2018] font-bold shadow-md'
                : 'text-[#E8D58C]/70 hover:text-white'
                }`}
            >
              Home
            </button>

            <button
              onClick={onNavigateAbout}
              className={`font-commissioner text-xs font-semibold uppercase tracking-wider px-5 py-2 rounded-full transition-all cursor-pointer ${currentPage === 'about'
                ? 'bg-gradient-to-r from-[#F3E5C8] via-[#E8D58C] to-[#D4AF37] text-[#0A2018] font-bold shadow-md'
                : 'text-[#E8D58C]/70 hover:text-white'
                }`}
            >
              About
            </button>
          </div>

          {/* Section Shortcut Chips (When on Home Page) */}
          {currentPage === 'home' && (
            <nav className="hidden xl:flex items-center gap-1.5 font-commissioner text-xs font-medium uppercase tracking-wider text-[#EADBC8]/70">
              {sectionTabs.slice(1).map((tab) => {
                const isActive = activeSection === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => {
                      setActiveSection(tab.id);
                      onNavigateSection(tab.id);
                    }}
                    className={`px-3.5 py-1.5 rounded-full transition-all cursor-pointer ${isActive
                      ? 'bg-[#14382A] text-[#E8D58C] font-bold border border-[#D4AF37]/50 shadow-xs'
                      : 'hover:text-[#E8D58C] hover:bg-[#14382A]/50'
                      }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </nav>
          )}
        </div>

        {/* Right CTA Button */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenBooking}
            className="gold-btn font-commissioner text-xs tracking-widest uppercase font-bold px-7 py-2.5 rounded-full cursor-pointer shadow-lg hover:brightness-105"
          >
            BOOK NOW
          </button>
        </div>

        {/* Mobile Menu Trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-1.5 sm:p-2 text-[#E8D58C] focus:outline-none cursor-pointer rounded-full hover:bg-[#14382A]"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-2 max-w-7xl mx-auto bg-[#0B221A]/95 backdrop-blur-2xl rounded-2xl sm:rounded-3xl border border-[#D4AF37]/40 p-5 sm:p-6 shadow-2xl animate-fade">
          <div className="flex flex-col gap-3.5 text-center">
            {/* Page Switcher */}
            <div className="flex justify-center gap-1.5 p-1 bg-[#071812] rounded-full border border-[#D4AF37]/30 mb-1">
              <button
                onClick={() => {
                  onNavigateHome();
                  setMobileMenuOpen(false);
                }}
                className={`font-commissioner text-xs font-semibold uppercase px-4 py-2 rounded-full flex-1 transition-all ${currentPage === 'home' ? 'bg-[#E8D58C] text-[#0A2018] font-bold shadow-sm' : 'text-[#E8D58C]/70'
                  }`}
              >
                Home
              </button>
              <button
                onClick={() => {
                  onNavigateAbout();
                  setMobileMenuOpen(false);
                }}
                className={`font-commissioner text-xs font-semibold uppercase px-4 py-2 rounded-full flex-1 transition-all ${currentPage === 'about' ? 'bg-[#E8D58C] text-[#0A2018] font-bold shadow-sm' : 'text-[#E8D58C]/70'
                  }`}
              >
                About
              </button>
            </div>

            {/* Section Shortcuts */}
            {currentPage === 'home' && (
              <div className="flex flex-col gap-1 pt-2 border-t border-[#D4AF37]/20">
                {sectionTabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => {
                      onNavigateSection(tab.id);
                      setMobileMenuOpen(false);
                    }}
                    className="font-serif-luxury text-xl sm:text-2xl text-[#E8D58C] hover:text-white flex items-center justify-between px-3 py-2 rounded-xl hover:bg-[#14382A]"
                  >
                    <span>{tab.label}</span>
                    <ChevronRight className="w-4 h-4 text-[#D4AF37]" />
                  </button>
                ))}
              </div>
            )}

            <div className="pt-2 border-t border-[#D4AF37]/20 flex flex-col gap-2">
              <button
                onClick={() => {
                  onOpenBooking();
                  setMobileMenuOpen(false);
                }}
                className="gold-btn font-commissioner text-xs tracking-widest uppercase font-bold py-3.5 rounded-full shadow-lg"
              >
                BOOK NOW
              </button>

              <a
                href="https://wa.me/918104101177?text=Hello%20GlowFlow%20Clinic%2C%20I%20would%20like%20to%20inquire%20about%20booking%20a%20treatment."
                target="_blank"
                rel="noopener noreferrer"
                className="gold-btn-outline font-commissioner text-xs tracking-wider uppercase font-semibold py-2.5 rounded-full text-center"
              >
                WhatsApp Desk (+91 81041 01177)
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
