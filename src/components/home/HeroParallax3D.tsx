import React, { useEffect, useState, useMemo } from 'react';
import { useCatalog } from '../../context/CatalogContext';
import { useCart } from '../../context/CartContext';
import { siteConfig } from '../../config/siteConfig';
import { Flame, Sparkles, ArrowRight, ShoppingBag } from 'lucide-react';
import { Product } from '../../types/catalog';

export const HeroParallax3D: React.FC = () => {
  const { products, activePromo } = useCatalog();
  const { addToCart } = useCart();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Aceternity 3D plane tilt calculations
  const heroProgress = Math.min(scrollY / 850, 1);
  const rotX = 22 - heroProgress * 22;
  const rotZ = -14 + heroProgress * 14;
  const transY = -50 + heroProgress * 50;
  const scale = 0.92 + heroProgress * 0.08;

  // Horizontal parallax offsets
  const x1 = -260 + scrollY * 0.42;
  const x2 = -80 - scrollY * 0.42;
  const x3 = -320 + scrollY * 0.28;

  // Split products across the 3 rows
  const rowA = useMemo(() => {
    if (products.length === 0) return [];
    return [...products, ...products.slice(0, 3)];
  }, [products]);

  const rowB = useMemo(() => {
    if (products.length === 0) return [];
    return [...products.slice().reverse(), ...products.slice(1, 4)];
  }, [products]);

  const rowC = useMemo(() => {
    if (products.length === 0) return [];
    return [...products.slice(2), ...products.slice(0, 4)];
  }, [products]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const renderCard = (item: Product, idx: number) => {
    return (
      <div
        key={`${item.id}-${idx}`}
        onClick={() => addToCart(item)}
        className="parallax-card group relative w-72 sm:w-80 h-52 sm:h-60 rounded-3xl overflow-hidden shadow-2xl border-2 border-white/85 cursor-pointer shrink-0 bg-botanical-950 transition-all duration-300 hover:scale-105 select-none"
      >
        <img
          src={item.img}
          alt={item.name}
          className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 pointer-events-none"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

        {/* Top Badges */}
        <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between pointer-events-none">
          <span className="bg-white/95 text-botanical-950 text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-md backdrop-blur-sm">
            {item.badge}
          </span>
          {item.isPromo && (
            <span className="bg-clay text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full shadow flex items-center gap-1">
              <Flame className="w-3 h-3 fill-white" /> -{item.promoDiscountPct || 15}%
            </span>
          )}
        </div>

        {/* Bottom Details & Direct Add */}
        <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between text-white pointer-events-none">
          <div className="min-w-0 pr-2">
            <p className="font-serif text-lg sm:text-xl font-semibold leading-tight truncate">
              {item.name}
            </p>
            <div className="flex items-baseline gap-2 mt-0.5">
              <span className="text-xs text-petal font-bold">{item.price},00 €</span>
              {item.originalPrice && item.originalPrice > item.price && (
                <span className="text-[10px] text-stone-400 line-through">
                  {item.originalPrice},00 €
                </span>
              )}
            </div>
          </div>

          <button
            type="button"
            className="pointer-events-auto px-3.5 py-1.5 rounded-full bg-clay text-white text-[11px] font-bold shadow-lg group-hover:bg-white group-hover:text-botanical-950 transition-colors flex items-center gap-1.5 shrink-0"
          >
            <ShoppingBag className="w-3 h-3" />
            <span>+ Carrello</span>
          </button>
        </div>
      </div>
    );
  };

  return (
    <section
      id="hero-parallax"
      className="relative z-10 hero-parallax-stage min-h-[145vh] sm:min-h-[160vh] pt-8 sm:pt-12 pb-24 overflow-hidden"
      style={{ perspective: '1500px', transformStyle: 'preserve-3d' }}
    >
      {/* Editorial Hero Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-20 pointer-events-none">
        
        {/* Dynamic Promo Offer Banner if Active */}
        {activePromo && (
          <div className="mb-4 inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-gradient-to-r from-clay via-rose-600 to-amber-600 text-white text-xs font-semibold shadow-xl pointer-events-auto animate-pulse">
            <Flame className="w-4 h-4 fill-white" />
            <span>
              <strong>{activePromo.badgeText}:</strong> {activePromo.bannerNotice}
            </span>
          </div>
        )}

        <div className="max-w-3xl bg-cream/80 backdrop-blur-xl p-6 sm:p-10 rounded-[2.5rem] border border-white/90 shadow-2xl pointer-events-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-botanical-950 text-petal text-xs font-semibold mb-5">
            <span className="w-2 h-2 rounded-full bg-clay animate-ping" />
            <span>Scorri la pagina: il fiore 3D sullo sfondo sboccia in tempo reale</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl leading-[1.0] text-botanical-950 font-semibold tracking-tight">
            L'arte dei fiori che <span className="italic font-normal text-clay">prende vita</span> mentre scorri.
          </h1>

          <p className="mt-5 text-stone-700 text-sm sm:text-base lg:text-lg leading-relaxed">
            Benvenuti nell'atelier botanico digitale di <strong>{siteConfig.brand.name}</strong>. Mazzi sartoriali freschi di giornata, piante rare invasate in terracotta e omaggi solenni, recapitati esclusivamente a mano entro <strong>{siteConfig.delivery.maxRadiusKm} km</strong> dalla nostra bottega.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3.5">
            <button
              onClick={() => scrollTo('catalogo-3d')}
              className="px-7 py-4 bg-botanical-950 hover:bg-clay text-white rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider transition-all shadow-xl hover:scale-105 flex items-center gap-2"
            >
              <span>Esplora le Card 3D</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => scrollTo('apple-carousel-sec')}
              className="px-6 py-4 bg-white/90 hover:bg-white text-botanical-950 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider border border-stone-300 transition-all shadow-sm"
            >
              Apple Cards Carousel
            </button>
          </div>
        </div>
      </div>

      {/* Aceternity 3D Tilted Plane with 3 Alternating Parallax Rows */}
      <div
        id="hero-3d-plane"
        className="relative z-10 -mt-10 sm:-mt-16 space-y-6 sm:space-y-8 py-6 pointer-events-auto"
        style={{
          transformStyle: 'preserve-3d',
          transform: `rotateX(${rotX.toFixed(2)}deg) rotateZ(${rotZ.toFixed(2)}deg) translateY(${transY.toFixed(1)}px) scale(${scale.toFixed(3)})`,
          willChange: 'transform',
        }}
      >
        {/* Row 1: Moves Right on Scroll */}
        <div
          className="parallax-track flex gap-5 sm:gap-6 px-4 w-max"
          style={{
            transform: `translate3d(${x1.toFixed(1)}px, 0, 0)`,
            willChange: 'transform',
          }}
        >
          {rowA.map((item, idx) => renderCard(item, idx))}
        </div>

        {/* Row 2: Moves Left on Scroll */}
        <div
          className="parallax-track flex gap-5 sm:gap-6 px-4 w-max"
          style={{
            transform: `translate3d(${x2.toFixed(1)}px, 0, 0)`,
            willChange: 'transform',
          }}
        >
          {rowB.map((item, idx) => renderCard(item, idx))}
        </div>

        {/* Row 3: Moves Right on Scroll */}
        <div
          className="parallax-track flex gap-5 sm:gap-6 px-4 w-max"
          style={{
            transform: `translate3d(${x3.toFixed(1)}px, 0, 0)`,
            willChange: 'transform',
          }}
        >
          {rowC.map((item, idx) => renderCard(item, idx))}
        </div>
      </div>
    </section>
  );
};

