import React from 'react';
import { BrandLogo } from './BrandLogo';
import { siteConfig } from '../../config/siteConfig';
import { MapPin, Phone, MessageCircle, Clock, ExternalLink, Heart, Navigation } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 bg-botanical-950 text-stone-400 py-16 sm:py-20 border-t border-white/10 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          
          {/* Brand Presentation */}
          <div className="lg:col-span-5 space-y-4">
            <div className="inline-block">
              <BrandLogo size="md" variant="light" />
            </div>
            <p className="text-xs text-stone-300 max-w-md leading-relaxed pt-2">
              Atelier botanico d'autore. Creiamo bouquet sartoriali freschi ogni mattina, selezioniamo piante rare invasate a mano in terrecotte e realizziamo composizioni di cordoglio solenni con consegna espressa in <strong>tutta Roma</strong>.
            </p>
            <div className="pt-2 flex flex-col gap-2 text-xs">
              <span className="flex items-center gap-2 text-petal font-medium">
                <MapPin className="w-4 h-4 text-clay shrink-0" />
                {siteConfig.contact.address}
              </span>
              <span className="flex items-center gap-2 text-stone-300">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                {siteConfig.contact.openingDays} ({siteConfig.contact.operatingHours})
              </span>
            </div>
          </div>

          {/* Quick Experience Links */}
          <div className="lg:col-span-3 space-y-3">
            <h5 className="text-xs font-bold uppercase tracking-[0.25em] text-white">
              Navigazione Atelier
            </h5>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button
                  onClick={() => scrollTo('hero-parallax')}
                  className="hover:text-petal transition-colors text-left"
                >
                  Atelier Botanico
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('catalogo-3d')}
                  className="hover:text-petal transition-colors text-left"
                >
                  Creazioni Floreali
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('apple-carousel-sec')}
                  className="hover:text-petal transition-colors text-left"
                >
                  Le Nostre Collezioni
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('bottega-mappa')}
                  className="hover:text-petal transition-colors text-left"
                >
                  Bottega a Tor Lupara & Consegne
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('arte-funebre')}
                  className="hover:text-petal transition-colors text-left"
                >
                  Arte Funebre & Nastro Oro
                </button>
              </li>
            </ul>
          </div>

          {/* Contact & Direct GPS Button */}
          <div className="lg:col-span-4 space-y-4">
            <h5 className="text-xs font-bold uppercase tracking-[0.25em] text-white">
              Bottega & Assistenza
            </h5>
            <p className="text-xs leading-relaxed text-stone-300">
              Hai richieste floreali speciali o cerimonie su misura? Il nostro mastro fiorista risponde direttamente su WhatsApp e in bottega.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 pt-1">
              <a
                href={siteConfig.storeLocation.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-clay hover:bg-clay/90 text-white text-xs font-bold transition-all shadow-md group"
              >
                <Navigation className="w-3.5 h-3.5 text-petal group-hover:scale-110 transition-transform" />
                <span>Naviga verso la Bottega</span>
                <ExternalLink className="w-3 h-3 opacity-80" />
              </a>

              <a
                href={siteConfig.contact.whatsappDirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-colors shadow-lg"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp Bottega</span>
              </a>
            </div>
          </div>
        </div>

        {/* ===================================================================
            FINESTRINA MAPS IN FONDO (Click to navigate to Via Nomentana 38)
            =================================================================== */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="bg-white/5 border border-white/15 rounded-3xl p-4 sm:p-6 backdrop-blur-md">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-clay text-white flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-lg text-white font-bold leading-tight">
                    Finestrina Mappa Bottega • Via Nomentana 38, 00013 Tor Lupara (RM)
                  </h4>
                  <p className="text-xs text-stone-300">
                    Clicca su qualsiasi punto della mappa o sul pulsante per avviare il navigatore GPS
                  </p>
                </div>
              </div>

              <a
                href={siteConfig.storeLocation.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-lg transition-transform active:scale-95 shrink-0"
              >
                <Navigation className="w-4 h-4" />
                <span>Avvia Navigazione GPS</span>
              </a>
            </div>

            {/* Clickable Map Frame */}
            <div className="relative rounded-2xl overflow-hidden h-56 sm:h-64 border border-white/20 bg-stone-900 group">
              <iframe
                title="Mappa Bottega VELORA Tor Lupara"
                src={siteConfig.storeLocation.embedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full opacity-80 group-hover:opacity-100 transition-opacity"
              />
              {/* Click overlay link */}
              <a
                href={siteConfig.storeLocation.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 z-10 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-[2px]"
                title="Clicca per aprire la navigazione su Google Maps"
              >
                <span className="px-5 py-3 rounded-full bg-botanical-950 text-white font-bold text-xs shadow-2xl border border-white/30 flex items-center gap-2">
                  <Navigation className="w-4 h-4 text-petal" />
                  <span>Portami a Via Nomentana 38, Tor Lupara →</span>
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-stone-400">
          <p>© {new Date().getFullYear()} {siteConfig.brand.name} • Atelier Botanico Sartoriale • Via Nomentana 38, Tor Lupara. Tutti i diritti riservati.</p>
          <p className="flex items-center gap-1.5 text-stone-400">
            Consegne a mano in tutta Roma <Heart className="w-3 h-3 text-clay inline fill-clay" />
          </p>
        </div>
      </div>
    </footer>
  );
};
