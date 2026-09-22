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
    { id: 'about-glow', label: 'About & Team' },
    { id: 'treatments', label: 'Treatments' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'products', label: 'Products' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header className="fixed top-3 left-0 right-0 z-50 px-4 md:px-8">
      {/* Floating Glassmorphism Pill Container */}
      <div
        className={`max-w-7xl mx-auto rounded-full transition-all duration-500 px-5 sm:px-7 py-1.5 flex items-center justify-between border ${isScrolled
          ? 'bg-[#FAF8F5]/90 backdrop-blur-xl border-[#C5A880]/40 shadow-[0_10px_30px_rgba(197,168,128,0.2)]'
          : 'bg-[#FAF8F5]/35 backdrop-blur-md border-[#C5A880]/25 shadow-sm hover:bg-[#FAF8F5]/50'
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
            className="h-12 sm:h-14 md:h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </button>

        {/* Center Nav Options */}
        <div className="hidden lg:flex items-center gap-6">
          {/* Main 2 Pages Pill Toggle */}
          <div className="flex items-center gap-1 bg-[#FAF6EE] p-1 rounded-full border border-[#C5A880]/40 shadow-inner">
            <button
              onClick={onNavigateHome}
              className={`font-commissioner text-xs font-semibold uppercase tracking-wider px-5 py-2 rounded-full transition-all cursor-pointer ${currentPage === 'home'
                ? 'bg-gradient-to-r from-[#E5C384] to-[#C5A880] text-black shadow-md'
                : 'text-[#8C6D38] hover:text-black'
                }`}
            >
              Home
            </button>

            <button
              onClick={onNavigateAbout}
              className={`font-commissioner text-xs font-semibold uppercase tracking-wider px-5 py-2 rounded-full transition-all cursor-pointer ${currentPage === 'about'
                ? 'bg-gradient-to-r from-[#E5C384] to-[#C5A880] text-black shadow-md'
                : 'text-[#8C6D38] hover:text-black'
                }`}
            >
              About
            </button>
          </div>

          {/* Section Shortcut Chips (When on Home Page) */}
          {currentPage === 'home' && (
            <nav className="hidden xl:flex items-center gap-1.5 font-commissioner text-xs font-medium uppercase tracking-wider text-[#555555]">
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
                      ? 'bg-[#FAF6EE] text-[#8C6D38] font-bold border border-[#C5A880]/40'
                      : 'hover:text-[#8C6D38] hover:bg-[#FAF6EE]/60'
                      }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </nav>
          )}
        </div>

        {/* Right CTA Button (No Sparkles icon) */}
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
          className="lg:hidden p-2 text-[#8C6D38] focus:outline-none cursor-pointer rounded-full hover:bg-[#FAF6EE]"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-3 max-w-7xl mx-auto bg-[#FAF8F5]/95 backdrop-blur-2xl rounded-3xl border border-[#C5A880]/40 p-6 shadow-2xl animate-fade">
          <div className="flex flex-col gap-4 text-center">
            {/* Page Switcher */}
            <div className="flex justify-center gap-2 p-1 bg-[#FAF6EE] rounded-full border border-[#C5A880]/30 mb-2">
              <button
                onClick={() => {
                  onNavigateHome();
                  setMobileMenuOpen(false);
                }}
                className={`font-commissioner text-xs font-semibold uppercase px-5 py-2 rounded-full flex-1 ${currentPage === 'home' ? 'bg-[#C5A880] text-white shadow-sm' : 'text-[#8C6D38]'
                  }`}
              >
                Home
              </button>
              <button
                onClick={() => {
                  onNavigateAbout();
                  setMobileMenuOpen(false);
                }}
                className={`font-commissioner text-xs font-semibold uppercase px-5 py-2 rounded-full flex-1 ${currentPage === 'about' ? 'bg-[#C5A880] text-white shadow-sm' : 'text-[#8C6D38]'
                  }`}
              >
                About
              </button>
            </div>

            {/* Section Shortcuts */}
            {currentPage === 'home' && (
              <div className="flex flex-col gap-1.5 pt-2 border-t border-[#C5A880]/20">
                {sectionTabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => {
                      onNavigateSection(tab.id);
                      setMobileMenuOpen(false);
                    }}
                    className="font-dongle text-3xl text-[#8C6D38] hover:text-black flex items-center justify-between px-4 py-1 rounded-xl hover:bg-[#FAF6EE]"
                  >
                    <span>{tab.label}</span>
                    <ChevronRight className="w-4 h-4 text-[#C5A880]" />
                  </button>
                ))}
              </div>
            )}

            <button
              onClick={() => {
                onOpenBooking();
                setMobileMenuOpen(false);
              }}
              className="gold-btn font-commissioner text-xs tracking-widest uppercase font-bold py-3 rounded-full mt-2 shadow-lg"
            >
              BOOK NOW
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
