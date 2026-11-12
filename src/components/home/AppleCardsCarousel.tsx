import React, { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, X, ArrowRight, Sparkles } from 'lucide-react';
import { EditorialSoul } from '../../types/catalog';
import { siteConfig } from '../../config/siteConfig';
import { fetchSouls } from '../../services/api';
import { getOptimizedImageUrl } from '../../services/cloudinaryService';
import { BotanicalSpinner } from '../layout/BotanicalSpinner';

export const AppleCardsCarousel: React.FC = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [souls, setSouls] = useState<EditorialSoul[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCollection, setSelectedCollection] = useState<EditorialSoul | null>(null);

  useEffect(() => {
    let cancelled = false;
    fetchSouls()
      .then((list) => {
        if (!cancelled) setSouls(list);
      })
      .catch((err) => console.warn('Could not load Le Quattro Anime from MongoDB:', err))
      .finally(() => {
        if (!cancelled) setIsLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const scrollTrack = (direction: 'left' | 'right') => {
    const track = trackRef.current;
    if (!track) return;
    const scrollAmount = direction === 'left' ? -380 : 380;
    track.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  const handleScroll = () => {
    const track = trackRef.current;
    if (!track) return;
    const cards = track.querySelectorAll<HTMLDivElement>('.apple-card-item');
    const trackRect = track.getBoundingClientRect();
    const trackCenter = trackRect.left + trackRect.width / 2;

    cards.forEach((card) => {
      const rect = card.getBoundingClientRect();
      const cardCenter = rect.left + rect.width / 2;
      const offset = (cardCenter - trackCenter) / trackRect.width;
      const img = card.querySelector<HTMLImageElement>('.apple-parallax-img');
      if (img) {
        img.style.transform = `translateX(${(offset * 25).toFixed(1)}px) scale(1.06)`;
      }
    });
  };

  const scrollToCatalog = () => {
    setSelectedCollection(null);
    const el = document.getElementById('catalogo-3d');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  if (!isLoading && souls.length === 0) {
    return null;
  }

  return (
    <>
      <section
        id="apple-carousel-sec"
        className="relative z-10 py-24 section-glass-dark text-white border-b border-white/10 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-petal font-bold flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-gold" />
              Collezioni Esclusive
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white mt-2 font-semibold">
              Le Quattro Anime di {siteConfig.brand.name}.
            </h2>
            <p className="text-stone-300 text-sm sm:text-base mt-2 max-w-xl leading-relaxed">
              Esplora i nostri quattro reparti botanici: bouquet freschi di giornata, piante in terracotta, cerimonie sartoriali e omaggi di cordoglio.
            </p>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => scrollTrack('left')}
              className="w-12 h-12 rounded-full bg-white/10 hover:bg-clay border border-white/20 flex items-center justify-center text-white transition-all shadow-lg active:scale-90"
              aria-label="Scorri a sinistra"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scrollTrack('right')}
              className="w-12 h-12 rounded-full bg-white/10 hover:bg-clay border border-white/20 flex items-center justify-center text-white transition-all shadow-lg active:scale-90"
              aria-label="Scorri a destra"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Horizontal Carousel Track */}
        {isLoading ? (
          <div className="py-24">
            <BotanicalSpinner
              tone="dark"
              title="Stiamo componendo le Quattro Anime..."
              subtitle="Il server si sta risvegliando: pochi istanti."
            />
          </div>
        ) : (
        <div
          ref={trackRef}
          onScroll={handleScroll}
          className="apple-carousel-track flex gap-6 sm:gap-7 overflow-x-auto px-4 sm:px-6 max-w-7xl mx-auto pb-6"
        >
          {souls.map((col) => (
            <div
              key={col.id}
              onClick={() => setSelectedCollection(col)}
              className="apple-card-item relative shrink-0 w-[300px] sm:w-[380px] h-[480px] sm:h-[540px] rounded-[2.2rem] overflow-hidden cursor-pointer group border border-white/15 shadow-2xl transition-transform duration-500 hover:-translate-y-2 select-none bg-botanical-950"
            >
              {col.imageUrl && (
                <img
                  src={getOptimizedImageUrl(col.imageUrl, 1000)}
                  alt={col.title}
                  className="apple-parallax-img w-[125%] max-w-none h-full object-cover -ml-[12%] transition-transform duration-300 pointer-events-none"
                  loading="lazy"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/20 to-black/90 pointer-events-none" />

              {/* Card Top Information */}
              <div className="absolute top-7 left-7 right-7 pointer-events-none">
                <span className="inline-block px-3 py-1 rounded-full bg-white/15 backdrop-blur-md text-[10px] font-bold uppercase tracking-[0.25em] text-petal border border-white/20">
                  {col.tag}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-white mt-3 leading-tight font-semibold">
                  {col.title}
                </h3>
              </div>

              {/* Card Bottom Details & Expand Trigger */}
              <div className="absolute bottom-7 left-7 right-7 flex items-end justify-between pointer-events-none">
                <p className="text-xs text-stone-200 max-w-[220px] leading-relaxed">
                  {col.shortDescription}
                </p>
                <span className="w-11 h-11 rounded-full bg-white text-botanical-950 flex items-center justify-center font-bold text-lg group-hover:bg-clay group-hover:text-white transition-colors shadow-lg shrink-0">
                  +
                </span>
              </div>
            </div>
          ))}
        </div>
        )}
      </section>

      {/* Expandable Apple Card Modal */}
      {selectedCollection && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl animate-in fade-in duration-200">
          <div className="bg-cream text-stone-800 max-w-2xl w-full rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/40 max-h-[92vh] flex flex-col">
            
            {/* Modal Image Header */}
            <div className="relative h-64 sm:h-80 shrink-0">
              {selectedCollection.imageUrl && (
                <img
                  src={getOptimizedImageUrl(selectedCollection.imageUrl, 1200)}
                  alt={selectedCollection.title}
                  className="w-full h-full object-cover"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
              
              <button
                onClick={() => setSelectedCollection(null)}
                className="absolute top-5 right-5 w-10 h-10 rounded-full bg-black/60 hover:bg-clay text-white flex items-center justify-center transition-colors shadow-lg"
                aria-label="Chiudi modale"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-xs uppercase tracking-widest text-petal font-bold">
                  {selectedCollection.tag}
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl mt-1 font-semibold leading-tight">
                  {selectedCollection.title}
                </h3>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-6 overflow-y-auto">
              <p className="text-stone-700 text-sm sm:text-base leading-relaxed whitespace-pre-line">
                {selectedCollection.fullDescription}
              </p>

              {/* Bottom CTA Box */}
              <div className="p-4 sm:p-5 rounded-2xl bg-botanical-50 border border-botanical-200/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-bold text-botanical-900 uppercase tracking-wider">
                    Consegna Espressa a Mano in Tutta Roma
                  </p>
                  <p className="text-xs text-stone-600 mt-0.5">
                    Preparato con cura botanica e biglietto calligrafico in omaggio.
                  </p>
                </div>

                <button
                  onClick={scrollToCatalog}
                  className="px-6 py-3 bg-botanical-950 hover:bg-clay text-white rounded-full text-xs font-bold uppercase tracking-wider transition-colors shadow-lg flex items-center gap-2 shrink-0"
                >
                  <span>Scegli dal Catalogo</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          </div>
        </div>
      )}
    </>
  );
};

