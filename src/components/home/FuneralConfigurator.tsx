import React, { useState, useEffect, useRef } from 'react';
import { useCatalog } from '../../context/CatalogContext';
import { useCart } from '../../context/CartContext';
import { siteConfig } from '../../config/siteConfig';
import { Sparkles, Church, Clock, Send, HeartHandshake } from 'lucide-react';
import { FuneralConfig } from '../../types/catalog';

interface TributeOption {
  id: string;
  name: string;
  price: number;
  badge: string;
  desc: string;
  img: string;
}

const TRIBUTES: TributeOption[] = [
  {
    id: 'fun-1',
    name: 'Cuscino Floreale "Candore"',
    price: 95,
    badge: 'Nastro Oro Incluso',
    desc: 'Rose bianche avalanche, lilium orientali candidi, lisianthus e fronde nobili su spugna bagnata.',
    img: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'fun-2',
    name: 'Corona su Cavalletto "Eternità"',
    price: 165,
    badge: 'Alta Cerimonia',
    desc: 'Grande corona circolare lavorata a mano con orchidee bianche, rose crema e rami di ulivo.',
    img: 'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=800&q=80',
  },
];

export const FuneralConfigurator: React.FC = () => {
  const { setIsSolemnMode } = useCatalog();
  const { addFuneralTributeToCart } = useCart();
  const sectionRef = useRef<HTMLElement>(null);

  const [selectedTribute, setSelectedTribute] = useState<TributeOption>(TRIBUTES[0]);
  const [ribbonText, setRibbonText] = useState<string>('Con profondo affetto e stima, Famiglia Rossi');
  const [venueType, setVenueType] = useState<FuneralConfig['venueType']>('Chiesa / Parrocchia');
  const [ceremonyTime, setCeremonyTime] = useState<FuneralConfig['ceremonyTime']>('Entro le ore 09:30');
  const [venueDetail, setVenueDetail] = useState<string>('Chiesa di Santa Maria in Trastevere');

  // Trigger solemn lighting mode when section enters view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsSolemnMode(entry.isIntersecting);
        });
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [setIsSolemnMode]);

  const handleAddToCart = () => {
    const config: FuneralConfig = {
      tributeId: selectedTribute.id,
      tributeName: selectedTribute.name,
      ribbonText: ribbonText.trim() || 'Con affetto e cordoglio',
      ribbonColor: 'crema',
      goldFoil: true,
      venueType,
      ceremonyTime,
      churchVenueDetails: venueDetail,
      price: selectedTribute.price,
      img: selectedTribute.img,
    };

    addFuneralTributeToCart(config);
  };

  return (
    <section
      ref={sectionRef}
      id="arte-funebre"
      className="relative z-10 py-24 sm:py-28 section-glass-funeral text-stone-100 border-b border-stone-700/60 transition-colors duration-700"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header with solemn badge */}
        <div className="max-w-3xl mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/15 text-stone-300 text-xs font-semibold mb-3">
            <HeartHandshake className="w-3.5 h-3.5 text-amber-300" />
            <span>Illuminazione 3D Solenne Attiva • Rispetto e Massima Puntualità</span>
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white mt-1 font-semibold">
            Arte Funebre & Omaggi di Cordoglio.
          </h2>

          <p className="text-stone-300 text-sm sm:text-base mt-3 leading-relaxed">
            In questa sezione anche la rosa 3D sullo sfondo assume una luce argentea e raccolta. Personalizza il{' '}
            <strong className="text-amber-300">Nastro di Cordoglio in raso con stampa a caldo in lamina d'oro</strong>{' '}
            e indica il luogo della cerimonia a Roma o provincia.
          </p>
        </div>

        {/* Two-Column Grid: Left Tributes / Right Configurator */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left Column: Tributes Selection Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {TRIBUTES.map((tribute) => {
              const isSelected = selectedTribute.id === tribute.id;
              return (
                <div
                  key={tribute.id}
                  onClick={() => setSelectedTribute(tribute)}
                  className={`bg-stone-900/90 rounded-3xl p-5 border transition-all duration-300 shadow-xl flex flex-col justify-between cursor-pointer ${
                    isSelected
                      ? 'border-amber-400/80 ring-2 ring-amber-400/20'
                      : 'border-stone-700/80 hover:border-stone-500'
                  }`}
                >
                  <div>
                    <div className="relative h-56 rounded-2xl overflow-hidden mb-4">
                      <img
                        src={tribute.img}
                        alt={tribute.name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <span className="absolute top-3 left-3 bg-black/80 text-stone-200 text-[10px] uppercase tracking-wider font-bold px-3 py-1 rounded-full border border-white/20">
                        {tribute.badge}
                      </span>
                    </div>

                    <h3 className="font-serif text-2xl text-white font-semibold">
                      {tribute.name}
                    </h3>
                    <p className="text-xs text-stone-400 mt-1 leading-relaxed">
                      {tribute.desc}
                    </p>
                  </div>

                  <div className="mt-5 pt-4 border-t border-stone-800 flex items-center justify-between">
                    <span className="text-xl font-bold text-amber-300">
                      {tribute.price},00 €
                    </span>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedTribute(tribute);
                      }}
                      className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-colors ${
                        isSelected
                          ? 'bg-amber-400 text-stone-950 shadow-lg'
                          : 'bg-white/10 hover:bg-white text-white hover:text-stone-950'
                      }`}
                    >
                      {isSelected ? '✓ Selezionato' : 'Scegli Omaggio'}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Silk Ribbon & Venue Live Configurator */}
          <div className="lg:col-span-5 bg-stone-900/95 rounded-[2rem] p-6 sm:p-8 border border-stone-700 shadow-2xl space-y-5">
            <div className="flex items-center justify-between border-b border-stone-800 pb-4">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-amber-300">
                  Personalizzazione Omaggio
                </span>
                <h4 className="font-serif text-2xl sm:text-3xl text-white font-semibold mt-0.5">
                  {selectedTribute.name}
                </h4>
              </div>
              <span className="text-2xl font-bold text-amber-300 shrink-0">
                {selectedTribute.price},00 €
              </span>
            </div>

            {/* Ribbon Input + Gold Foil Live Calligraphic Preview */}
            <div>
              <div className="flex justify-between items-center mb-1.5">
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-300">
                  Testo sul Nastro di Cordoglio
                </label>
                <span className="text-[11px] font-mono text-stone-400">
                  {ribbonText.length}/45
                </span>
              </div>
              <input
                type="text"
                maxLength={45}
                value={ribbonText}
                onChange={(e) => setRibbonText(e.target.value)}
                placeholder="Es. Con affetto, Famiglia..."
                className="w-full px-4 py-3 rounded-xl bg-stone-950 border border-stone-700 text-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
              />

              {/* Shimmering Gold Foil Preview Box */}
              <div className="mt-3 p-4 rounded-xl bg-gradient-to-r from-stone-950 via-stone-900 to-stone-950 border border-amber-500/40 shadow-inner text-center select-none">
                <span className="block text-[9px] uppercase tracking-[0.3em] text-stone-400 mb-1">
                  Anteprima Nastro in Raso & Lamina d'Oro
                </span>
                <p className="font-serif italic text-lg sm:text-xl text-amber-300 tracking-wide drop-shadow-[0_2px_8px_rgba(212,175,55,0.35)]">
                  ✦ {ribbonText || 'Sempre nei nostri cuori'} ✦
                </p>
              </div>
            </div>

            {/* Venue & Ceremony Time Selectors */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-300 mb-1.5 flex items-center gap-1.5">
                  <Church className="w-3.5 h-3.5 text-stone-400" /> Luogo Consegna
                </label>
                <select
                  value={venueType}
                  onChange={(e) => setVenueType(e.target.value as FuneralConfig['venueType'])}
                  className="w-full px-3.5 py-3 rounded-xl bg-stone-950 border border-stone-700 text-xs text-white focus:outline-none focus:ring-1 focus:ring-amber-400"
                >
                  <option value="Chiesa / Parrocchia">Chiesa / Parrocchia</option>
                  <option value="Camera Ardente / Ospedale">Camera Ardente / Ospedale</option>
                  <option value="Cimitero Comunale">Cimitero Comunale</option>
                  <option value="Domicilio Famiglia">Domicilio Famiglia</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-300 mb-1.5 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-stone-400" /> Orario Cerimonia
                </label>
                <select
                  value={ceremonyTime}
                  onChange={(e) => setCeremonyTime(e.target.value as FuneralConfig['ceremonyTime'])}
                  className="w-full px-3.5 py-3 rounded-xl bg-stone-950 border border-stone-700 text-xs text-white focus:outline-none focus:ring-1 focus:ring-amber-400"
                >
                  <option value="Entro le ore 09:30">Entro le ore 09:30</option>
                  <option value="Entro le ore 11:00">Entro le ore 11:00</option>
                  <option value="Entro le ore 15:00">Entro le ore 15:00</option>
                  <option value="Entro le ore 16:30">Entro le ore 16:30</option>
                </select>
              </div>
            </div>

            {/* Venue Specific Details */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-stone-300 mb-1.5">
                Nome Defunto / Indicazioni Chiesa / Cimitero
              </label>
              <input
                type="text"
                value={venueDetail}
                onChange={(e) => setVenueDetail(e.target.value)}
                placeholder="Es. Fam. Bianchi - Chiesa Santa Maria in Trastevere"
                className="w-full px-4 py-2.5 rounded-xl bg-stone-950 border border-stone-700 text-xs text-white focus:outline-none focus:ring-1 focus:ring-amber-400"
              />
            </div>

            {/* Submit Action */}
            <button
              type="button"
              onClick={handleAddToCart}
              className="w-full py-4 bg-amber-400 hover:bg-amber-300 text-stone-950 rounded-2xl text-xs font-bold uppercase tracking-widest transition-all shadow-xl flex items-center justify-center gap-2 active:scale-95"
            >
              <span>Aggiungi Omaggio con Nastro al Carrello</span>
              <Send className="w-3.5 h-3.5" />
            </button>

          </div>

        </div>

      </div>
    </section>
  );
};

