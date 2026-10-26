import React, { useState, useRef } from 'react';
import { useCatalog } from '../../context/CatalogContext';
import { useCart } from '../../context/CartContext';
import { CategoryId, Product } from '../../types/catalog';
import { siteConfig } from '../../config/siteConfig';
import { Flame, CheckCircle, AlertCircle, ShoppingBag } from 'lucide-react';

export const Catalog3DTiltGrid: React.FC = () => {
  const { products, activeCategory, filterByCategory } = useCatalog();
  const { addToCart } = useCart();

  const categories: { id: CategoryId; label: string; icon?: string }[] = [
    { id: 'all', label: `Tutti (${products.length})` },
    { id: 'bouquet', label: 'Bouquet Freschi' },
    { id: 'piante', label: 'Piante & Vasi' },
    { id: 'composizioni', label: 'Composizioni' },
    { id: 'funebre', label: 'Omaggi Funebri' },
    { id: 'promo', label: 'In Offerta 🔥' },
  ];

  return (
    <section id="catalogo-3d" className="relative z-10 py-24 section-glass-light border-y border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 sm:mb-14 gap-6">
          <div>
            <span className="text-xs uppercase tracking-[0.28em] text-clay font-bold">
              Aceternity 3D Perspective Cards
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-botanical-950 mt-1 font-semibold">
              Vasi e Bouquet in Prospettiva 3D.
            </h2>
            <p className="text-stone-600 text-sm sm:text-base mt-2 max-w-2xl leading-relaxed">
              Passa il cursore sulle card: il vaso o il mazzo si solleva nello spazio tridimensionale con riflesso di luce speculare dinamico, mentre sullo sfondo il fiore 3D continua a fiorire.
            </p>
          </div>

          {/* Interactive Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => filterByCategory(cat.id)}
                  className={`px-4 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-sm ${
                    isActive
                      ? 'bg-botanical-950 text-white shadow-md scale-105'
                      : 'bg-white/90 text-stone-700 border border-stone-300 hover:border-botanical-900 hover:text-botanical-900'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* 3D Tilt Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {products.map((product) => (
            <TiltCard key={product.id} product={product} onAddToCart={() => addToCart(product)} />
          ))}
        </div>

        {products.length === 0 && (
          <div className="text-center py-16 bg-white/60 rounded-3xl border border-stone-200 p-8">
            <p className="font-serif text-2xl text-botanical-950 font-semibold">Nessun prodotto trovato in questa categoria.</p>
            <p className="text-xs text-stone-500 mt-2">Torna a "Tutti" per esplorare l'intero catalogo botanico.</p>
            <button
              onClick={() => filterByCategory('all')}
              className="mt-4 px-6 py-2.5 rounded-full bg-botanical-950 text-white text-xs font-bold uppercase tracking-wider"
            >
              Mostra Tutto il Catalogo
            </button>
          </div>
        )}

      </div>
    </section>
  );
};

interface TiltCardProps {
  product: Product;
  onAddToCart: () => void;
}

const TiltCard: React.FC<TiltCardProps> = ({ product, onAddToCart }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const glareRef = useRef<HTMLDivElement>(null);
  const isOutOfStock = product.stockQuantity === 0;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;

    const rotX = ((y - cy) / cy) * -14;
    const rotY = ((x - cx) / cx) * 14;

    card.style.transform = `rotateX(${rotX.toFixed(2)}deg) rotateY(${rotY.toFixed(2)}deg)`;

    const glare = glareRef.current;
    if (glare) {
      const px = (x / rect.width) * 100;
      const py = (y / rect.height) * 100;
      glare.style.background = `radial-gradient(circle at ${px}% ${py}%, rgba(255,255,255,0.7), transparent 60%)`;
      glare.style.opacity = '1';
    }
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = 'rotateX(0deg) rotateY(0deg)';
    if (glareRef.current) {
      glareRef.current.style.opacity = '0';
    }
  };

  return (
    <div className="tilt-card-scene">
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="tilt-card-body relative bg-white/95 rounded-[2rem] p-6 sm:p-7 border border-stone-200/90 shadow-xl flex flex-col justify-between h-full transition-shadow duration-300 select-none"
      >
        {/* Specular Glare Layer */}
        <div ref={glareRef} className="tilt-glare" />

        <div>
          {/* Z-Layer Badge (45px) */}
          <div className="flex items-center justify-between mb-3 z-layer-badge">
            <span className="px-3.5 py-1 rounded-full bg-botanical-950 text-petal text-[11px] font-bold uppercase tracking-wider shadow-md">
              {product.badge}
            </span>

            {isOutOfStock ? (
              <span className="text-[11px] font-bold text-rose-700 bg-rose-50 px-3 py-0.5 rounded-full border border-rose-200 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" /> Esaurito
              </span>
            ) : product.isPromo ? (
              <span className="text-[11px] font-bold text-amber-900 bg-amber-100 px-3 py-0.5 rounded-full border border-amber-300 flex items-center gap-1">
                <Flame className="w-3 h-3 text-clay fill-clay" /> -{product.promoDiscountPct}% Offerta
              </span>
            ) : (
              <span className="text-[11px] font-bold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200 flex items-center gap-1">
                <CheckCircle className="w-3 h-3" /> Raggio {siteConfig.delivery.maxRadiusKm} km
              </span>
            )}
          </div>

          {/* Z-Layer Image Floating (20px normal, 75px on hover) */}
          <div className="relative h-64 rounded-2xl overflow-hidden my-3 z-layer-image bg-stone-100 border-2 border-white shadow-inner">
            <img
              src={product.img}
              alt={product.name}
              className={`w-full h-full object-cover pointer-events-none transition-transform duration-700 ${
                isOutOfStock ? 'grayscale opacity-60' : 'hover:scale-105'
              }`}
              loading="lazy"
            />
            {isOutOfStock && (
              <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] flex items-center justify-center">
                <span className="px-4 py-2 rounded-full bg-black/80 text-white text-xs font-bold tracking-widest uppercase">
                  Momentaneamente Esaurito
                </span>
              </div>
            )}
          </div>

          {/* Z-Layer Title & Price (55px) */}
          <div className="mt-5 flex items-baseline justify-between z-layer-title gap-2">
            <h3 className="font-serif text-2xl sm:text-3xl text-botanical-950 font-semibold leading-tight">
              {product.name}
            </h3>
            <div className="text-right shrink-0">
              <span className="text-xl sm:text-2xl font-bold text-clay">
                {product.price},00 €
              </span>
              {product.originalPrice && product.originalPrice > product.price && (
                <span className="block text-xs text-stone-400 line-through">
                  {product.originalPrice},00 €
                </span>
              )}
            </div>
          </div>

          {/* Z-Layer Description (35px) */}
          <p className="text-xs text-stone-600 mt-2 leading-relaxed z-layer-desc">
            {product.desc}
          </p>
          {product.dimensions && (
            <p className="text-[11px] text-stone-400 mt-1 italic font-serif">
              ✦ {product.dimensions}
            </p>
          )}
        </div>

        {/* Z-Layer Action Button (65px) */}
        <div className="pt-6 mt-5 border-t border-stone-200/70 z-layer-btn">
          <button
            type="button"
            disabled={isOutOfStock}
            onClick={onAddToCart}
            className={`w-full py-3.5 px-5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all shadow-lg flex items-center justify-center gap-2 ${
              isOutOfStock
                ? 'bg-stone-300 text-stone-500 cursor-not-allowed shadow-none'
                : 'bg-botanical-950 hover:bg-clay text-white active:scale-95'
            }`}
          >
            <ShoppingBag className="w-4 h-4" />
            <span>{isOutOfStock ? 'Esaurito in Bottega' : '+ Aggiungi al Carrello'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

