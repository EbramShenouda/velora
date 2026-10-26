import React, { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, X, ArrowRight, Sparkles } from 'lucide-react';
import { AppleCardCollection } from '../../types/catalog';
import { siteConfig } from '../../config/siteConfig';

const APPLE_COLLECTIONS: AppleCardCollection[] = [
  {
    id: 1,
    tag: 'Reparto 01 • Giornaliero',
    title: 'Bouquet d\'Autore & Fiori Recisi',
    subtitle: 'Peonie, ranuncoli, rose David Austin ed eucalipto',
    img: 'https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=1000&q=80',
    desc: 'Ogni mattina all\'alba Peter seleziona le migliori varietà botaniche dai mercati di Sanremo e dell\'Olanda. I mazzi sono legati rigorosamente a mano con fusto idratato per preservare il profumo fino al momento della consegna.',
    highlights: [
      'Garantiti freschi per 7+ giorni',
      'Fialetta d\'acqua inclusa sul gambo',
      'Carta cotone cerata di manifattura italiana',
    ],
  },
  {
    id: 2,
    tag: 'Reparto 02 • Indoor Design',
    title: 'Piante & Vasi d\'Arredo in Terracotta',
    subtitle: 'Monstera variegata, Ficus Lyrata e vasi toscani',
    img: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=1000&q=80',
    desc: 'Verde purificante da interni invasato con miscele organiche studiate per durare anni in appartamento. I nostri vasi sono forgiati al tornio da maestri toscani con argilla porosa a traspirazione naturale.',
    highlights: [
      'Terrecotte di Impruneta certificate',
      'Scheda botanica di cura inclusa',
      'Substrato arricchito con micorrize attive',
    ],
  },
  {
    id: 3,
    tag: 'Reparto 03 • Cerimonie',
    title: 'Eventi, Lauree & Matrimoni',
    subtitle: 'Corone d\'alloro, Hat-Box e centrotavola scenografici',
    img: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1000&q=80',
    desc: 'La scenografia botanica come espressione d\'arte. Progettiamo allestimenti per lauree, nozze e cene di gala con fiori rari e combinazioni cromatiche su misura.',
    highlights: [
      'Consulenza floreale personalizzata',
      'Nastri in raso e velluto coordinati',
      'Consegna e posizionamento sul luogo dell\'evento',
    ],
  },
  {
    id: 4,
    tag: 'Reparto 04 • Cordoglio',
    title: 'Arte Funebre & Omaggi di Memoria',
    subtitle: 'Cuscini, corone e nastro in raso con lettere d\'oro',
    img: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=1000&q=80',
    desc: 'Il massimo rispetto e puntualità per il momento del cordoglio. Composizioni sobrie, eleganti e discrete con nastro commemorativo in raso con stampa a caldo in lamina d\'oro.',
    highlights: [
      'Consegna prioritaria e puntuale in Chiesa / Ospedale',
      'Stampa nastro in oro zecchino compresa',
      'Fiori ad altissima tenuta idrica',
    ],
  },
];

export const AppleCardsCarousel: React.FC = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [selectedCollection, setSelectedCollection] = useState<AppleCardCollection | null>(null);

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
              Apple Cards Carousel • Multi-Depth Scroll
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white mt-2 font-semibold">
              Le Quattro Anime di {siteConfig.brand.name}.
            </h2>
            <p className="text-stone-300 text-sm sm:text-base mt-2 max-w-xl leading-relaxed">
              Scorri orizzontalmente le collezioni editoriali: la fotografia interna trasla su piani differenti con parallasse ad alta precisione. Clicca una scheda per approfondire.
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
        <div
          ref={trackRef}
          onScroll={handleScroll}
          className="apple-carousel-track flex gap-6 sm:gap-7 overflow-x-auto px-4 sm:px-6 max-w-7xl mx-auto pb-6"
        >
          {APPLE_COLLECTIONS.map((col) => (
            <div
              key={col.id}
              onClick={() => setSelectedCollection(col)}
              className="apple-card-item relative shrink-0 w-[300px] sm:w-[380px] h-[480px] sm:h-[540px] rounded-[2.2rem] overflow-hidden cursor-pointer group border border-white/15 shadow-2xl transition-transform duration-500 hover:-translate-y-2 select-none"
            >
              <img
                src={col.img}
                alt={col.title}
                className="apple-parallax-img w-[125%] max-w-none h-full object-cover -ml-[12%] transition-transform duration-300 pointer-events-none"
                loading="lazy"
              />
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
                  {col.subtitle}
                </p>
                <span className="w-11 h-11 rounded-full bg-white text-botanical-950 flex items-center justify-center font-bold text-lg group-hover:bg-clay group-hover:text-white transition-colors shadow-lg shrink-0">
                  +
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Expandable Apple Card Modal */}
      {selectedCollection && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl animate-in fade-in duration-200">
          <div className="bg-cream text-stone-800 max-w-2xl w-full rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/40 max-h-[92vh] flex flex-col">
            
            {/* Modal Image Header */}
            <div className="relative h-64 sm:h-80 shrink-0">
              <img
                src={selectedCollection.img}
                alt={selectedCollection.title}
                className="w-full h-full object-cover"
              />
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
              <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
                {selectedCollection.desc}
              </p>

              {/* Highlights List */}
              <div className="space-y-2">
                <span className="text-xs uppercase font-bold tracking-wider text-botanical-900 block">
                  Caratteristiche Artigianali:
                </span>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-stone-600">
                  {selectedCollection.highlights.map((h, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-clay" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom CTA Box */}
              <div className="p-4 sm:p-5 rounded-2xl bg-botanical-50 border border-botanical-200/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-bold text-botanical-900 uppercase tracking-wider">
                    Consegna a Mano Entro {siteConfig.delivery.maxRadiusKm} km
                  </p>
                  <p className="text-xs text-stone-600 mt-0.5">
                    Preparato con cura botanica e biglietto calligrafico in omaggio.
                  </p>
                </div>

                <button
                  onClick={scrollToCatalog}
                  className="px-6 py-3 bg-botanical-950 hover:bg-clay text-white rounded-full text-xs font-bold uppercase tracking-wider transition-colors shadow-lg flex items-center gap-2 shrink-0"
                >
                  <span>Scegli dal Catalogo 3D</span>
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

