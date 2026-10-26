import React, { useState, useEffect } from 'react';
import { BrandLogo } from './BrandLogo';
import { siteConfig } from '../../config/siteConfig';
import { useCart } from '../../context/CartContext';
import { useCatalog } from '../../context/CatalogContext';
import { ShoppingBag, MapPin, Menu, X, Lock, Navigation } from 'lucide-react';

interface NavbarProps {
  onOpenRadar?: () => void;
  onNavigateToAdmin?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigateToAdmin }) => {
  const { itemCount, setIsCartOpen } = useCart();
  const { announcement } = useCatalog();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* 1. TOP ANNOUNCEMENT BAR (Configured Dynamically from Admin) */}
      {announcement.active && (
        <div className="relative z-50 bg-botanical-950 text-stone-200 text-xs py-2 px-4 border-b border-white/10 select-none">
          <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="text-[11px] sm:text-xs">
                <strong>{announcement.badge}</strong> {announcement.message}
              </span>
            </div>

            <div className="hidden md:flex items-center gap-4 text-[11px] text-stone-300">
              <span>{announcement.secondaryNotice}</span>
              <span>•</span>
              <button
                onClick={() => scrollTo('bottega-mappa')}
                className="text-petal underline hover:text-white font-semibold transition-colors flex items-center gap-1"
              >
                <span>Vieni in bottega →</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 2. STICKY GLASS HEADER */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-cream/90 backdrop-blur-xl shadow-md border-b border-stone-300/80 py-2 sm:py-3'
            : 'bg-cream/75 backdrop-blur-md border-b border-stone-300/50 py-3 sm:py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          
          {/* Mobile Hamburger Toggle (Android/iOS) */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 -ml-2 rounded-full text-botanical-950 hover:bg-stone-200/60 focus:outline-none"
              aria-label="Apri Menu Navigazione"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Left Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7 text-xs font-bold uppercase tracking-[0.18em] text-stone-700">
            <button
              onClick={() => scrollTo('hero-parallax')}
              className="hover:text-clay transition-colors uppercase tracking-wider"
            >
              Atelier
            </button>
            <button
              onClick={() => scrollTo('catalogo-3d')}
              className="hover:text-clay transition-colors uppercase tracking-wider"
            >
              Creazioni
            </button>
            <button
              onClick={() => scrollTo('apple-carousel-sec')}
              className="hover:text-clay transition-colors uppercase tracking-wider"
            >
              Collezioni
            </button>
            <button
              onClick={() => scrollTo('bottega-mappa')}
              className="hover:text-clay transition-colors uppercase tracking-wider flex items-center gap-1"
            >
              <span>Bottega & Consegne</span>
            </button>
            <button
              onClick={() => scrollTo('arte-funebre')}
              className="text-stone-500 hover:text-stone-950 transition-colors flex items-center gap-1.5 uppercase tracking-wider"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-stone-500" /> Arte Funebre
            </button>
          </nav>

          {/* Center Brand Logo */}
          <div onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <BrandLogo size="md" variant="dark" />
          </div>

          {/* Right Actions: Store Address Pill + Admin + Cart Trigger */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            {/* Quick Navigation to Boutique Pill */}
            <button
              onClick={() => scrollTo('bottega-mappa')}
              className="hidden sm:inline-flex items-center gap-2 text-xs font-semibold px-3.5 py-2 rounded-full bg-white/90 border border-stone-300 text-botanical-900 hover:bg-botanical-900 hover:text-white transition-all shadow-sm group"
              title="Vedi Bottega e indicazioni a Tor Lupara"
            >
              <MapPin className="w-3.5 h-3.5 text-clay group-hover:text-petal transition-colors" />
              <span>Tor Lupara • Tutta Roma</span>
            </button>

            {/* Admin Dashboard Access */}
            <button
              onClick={() => {
                if (onNavigateToAdmin) onNavigateToAdmin();
                else window.location.hash = 'admin';
              }}
              className="p-2 sm:px-3 sm:py-2 rounded-full text-stone-600 hover:text-botanical-950 hover:bg-stone-200/50 transition-colors text-xs font-semibold flex items-center gap-1.5"
              title="Dashboard Proprietario"
              aria-label="Area Riservata Bottega"
            >
              <Lock className="w-3.5 h-3.5 text-stone-500" />
              <span className="hidden xl:inline text-[11px] uppercase tracking-wider font-bold">Admin</span>
            </button>

            {/* Shopping Cart Trigger Button */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative flex items-center gap-2 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-full bg-botanical-950 text-white hover:bg-clay transition-all shadow-lg active:scale-95 group"
              aria-label="Apri Carrello"
            >
              <ShoppingBag className="w-4 h-4 group-hover:scale-110 transition-transform" />
              <span className="text-xs font-semibold hidden md:inline">Carrello</span>
              <span
                key={itemCount}
                className="bg-clay group-hover:bg-botanical-950 text-white text-[11px] font-bold px-2 py-0.5 rounded-full transition-all animate-in zoom-in"
              >
                {itemCount}
              </span>
            </button>
          </div>
        </div>

        {/* 3. MOBILE SLIDE-DOWN DRAWER (Android & iOS) */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-cream/95 backdrop-blur-2xl border-t border-stone-300/80 px-6 py-6 animate-in slide-in-from-top-4 duration-200 shadow-2xl">
            <nav className="flex flex-col gap-4 text-sm font-bold uppercase tracking-wider text-botanical-950">
              <button
                onClick={() => scrollTo('hero-parallax')}
                className="text-left py-2 border-b border-stone-200 hover:text-clay"
              >
                Atelier Botanico
              </button>
              <button
                onClick={() => scrollTo('catalogo-3d')}
                className="text-left py-2 border-b border-stone-200 hover:text-clay"
              >
                Creazioni & Bouquet
              </button>
              <button
                onClick={() => scrollTo('apple-carousel-sec')}
                className="text-left py-2 border-b border-stone-200 hover:text-clay"
              >
                Le Nostre Collezioni
              </button>
              <button
                onClick={() => scrollTo('bottega-mappa')}
                className="text-left py-2 border-b border-stone-200 hover:text-clay flex items-center justify-between"
              >
                <span>Bottega & Consegne a Roma</span>
                <span className="text-[10px] bg-emerald-100 text-emerald-900 px-2 py-0.5 rounded-full">
                  Tor Lupara
                </span>
              </button>
              <button
                onClick={() => scrollTo('arte-funebre')}
                className="text-left py-2 border-b border-stone-200 text-stone-600 hover:text-botanical-950 flex items-center gap-2"
              >
                <span className="w-2 h-2 rounded-full bg-stone-500" />
                <span>Arte Funebre & Nastro Oro</span>
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onNavigateToAdmin) onNavigateToAdmin();
                  else window.location.hash = 'admin';
                }}
                className="text-left py-2 border-b border-stone-200 text-clay hover:text-botanical-950 flex items-center justify-between"
              >
                <span className="flex items-center gap-2">
                  <Lock className="w-4 h-4" />
                  <span>Area Riservata Bottega</span>
                </span>
                <span className="text-[10px] bg-clay/10 text-clay px-2 py-0.5 rounded-full font-bold">
                  Admin
                </span>
              </button>
              <div className="pt-2 flex flex-col gap-2">
                <a
                  href={siteConfig.storeLocation.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-center py-3 bg-botanical-950 text-white rounded-xl text-xs uppercase tracking-widest font-bold flex items-center justify-center gap-2"
                >
                  <Navigation className="w-3.5 h-3.5 text-petal" />
                  <span>Naviga a Via Nomentana 38</span>
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};
