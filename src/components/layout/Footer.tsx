import React from 'react';
import { BrandLogo } from './BrandLogo';
import { siteConfig } from '../../config/siteConfig';
import { MapPin, Phone, MessageCircle, Clock, ExternalLink, Heart } from 'lucide-react';

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
              Atelier botanico d'autore. Creiamo bouquet sartoriali freschi ogni mattina, selezioniamo piante rare invasate a mano in terrecotte toscane e realizziamo composizioni di cordoglio solenni. Ogni fiore viaggia idratato nel raggio di <strong>10 km</strong>.
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
              Esperienza Digitale 3D
            </h5>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button
                  onClick={() => scrollTo('hero-parallax')}
                  className="hover:text-petal transition-colors text-left"
                >
                  Hero Parallax 3D Aceternity
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('catalogo-3d')}
                  className="hover:text-petal transition-colors text-left"
                >
                  Card Prospettiche 3D con Glare
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('apple-carousel-sec')}
                  className="hover:text-petal transition-colors text-left"
                >
                  Apple Cards Carousel
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('radar-10km')}
                  className="hover:text-petal transition-colors text-left"
                >
                  Calcolo Radar Raggio 10 km
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('arte-funebre')}
                  className="hover:text-petal transition-colors text-left"
                >
                  Configuratore Nastro Oro Funebre
                </button>
              </li>
            </ul>
          </div>

          {/* Contact & Google Maps */}
          <div className="lg:col-span-4 space-y-4">
            <h5 className="text-xs font-bold uppercase tracking-[0.25em] text-white">
              Bottega & Assistenza
            </h5>
            <p className="text-xs leading-relaxed text-stone-300">
              Hai richieste floreali speciali o cerimonie su misura? Il nostro mastro fiorista risponde direttamente su WhatsApp e in bottega.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 pt-1">
              <a
                href={siteConfig.storeLocation.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-colors border border-white/15"
              >
                <MapPin className="w-3.5 h-3.5 text-gold" />
                <span>Posizione Google Maps</span>
                <ExternalLink className="w-3 h-3 text-stone-400" />
              </a>

              <a
                href={siteConfig.contact.whatsappDirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold transition-colors shadow-lg"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp Bottega</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-stone-400">
          <p>© {new Date().getFullYear()} {siteConfig.brand.name} • Atelier Botanico Sartoriale. Tutti i diritti riservati.</p>
          <p className="flex items-center gap-1.5 text-stone-400">
            Realizzato con cura botanica e tecnologia 3D ad alte prestazioni <Heart className="w-3 h-3 text-clay inline fill-clay" />
          </p>
        </div>
      </div>
    </footer>
  );
};

