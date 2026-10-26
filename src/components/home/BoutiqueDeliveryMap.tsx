import React from 'react';
import { siteConfig } from '../../config/siteConfig';
import { MapPin, Navigation, Clock, Phone, MessageCircle, Sparkles, Truck, CheckCircle2, ExternalLink } from 'lucide-react';

export const BoutiqueDeliveryMap: React.FC = () => {
  return (
    <section id="bottega-mappa" className="relative z-10 py-24 section-glass-light border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-botanical-950 text-petal text-xs font-semibold mb-3">
            <Truck className="w-3.5 h-3.5 text-gold" />
            <span>Consegna Espressa a Domicilio in Tutta Roma</span>
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-botanical-950 leading-tight font-semibold">
            La Nostra Bottega a <span className="underline decoration-clay">Tor Lupara</span>.
          </h2>

          <p className="text-stone-700 text-sm sm:text-base mt-3 leading-relaxed">
            Vieni a trovarci nel nostro atelier floreale oppure ordina online: recapitiamo mazzi sartoriali, piante e omaggi per eventi con mezzo climatizzato e riserva idrica agli steli in <strong>tutti i quartieri di Roma e provincia</strong>.
          </p>
        </div>

        {/* Two-Column Grid: Info Cards on Left, Map Window on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Boutique Information & Key Delivery Guarantees */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Store Address Card */}
            <div className="bg-white p-6 sm:p-7 rounded-[2rem] shadow-xl border border-stone-200 space-y-4">
              <div className="flex items-start gap-3.5">
                <div className="w-12 h-12 rounded-2xl bg-botanical-50 border border-botanical-100 flex items-center justify-center text-clay shrink-0 shadow-sm">
                  <MapPin className="w-6 h-6 text-clay" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-clay">
                    Sede & Laboratorio
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-botanical-950 leading-tight mt-0.5">
                    {siteConfig.brand.name} Atelier
                  </h3>
                  <p className="text-xs font-semibold text-stone-700 mt-1">
                    {siteConfig.contact.address}
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-stone-100 space-y-2 text-xs text-stone-600">
                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{siteConfig.contact.openingDays} • {siteConfig.contact.operatingHours}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-stone-400 shrink-0" />
                  <span>Telefono: <strong>{siteConfig.contact.phoneDisplay}</strong></span>
                </div>
              </div>

              {/* Direct GPS Navigation Button */}
              <a
                href={siteConfig.storeLocation.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-5 bg-botanical-950 hover:bg-clay text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-all shadow-lg flex items-center justify-center gap-2 group active:scale-95"
              >
                <Navigation className="w-4 h-4 text-petal group-hover:scale-110 transition-transform" />
                <span>Avvia Navigazione verso la Bottega</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-70" />
              </a>
            </div>

            {/* Delivery in Roma Guarantees Card */}
            <div className="p-5 sm:p-6 rounded-[2rem] bg-botanical-50 border border-botanical-200/80 space-y-3">
              <h4 className="font-serif text-lg font-bold text-botanical-950 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-gold" />
                <span>Servizio di Consegna a Roma</span>
              </h4>

              <ul className="space-y-2 text-xs text-stone-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Consegna in Tutta Roma:</strong> Centro Storico, Roma Nord, Roma Sud, Eur, Parioli e zone limitrofe.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Spedizione Gratuita:</strong> per tutti gli ordini superiori a {siteConfig.delivery.freeShippingThreshold.toFixed(2)} €.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Fiori Sempre Idratati:</strong> viaggiano in acqua e con mezzo dedicato refrigerato.</span>
                </li>
              </ul>
            </div>

          </div>

          {/* Right Column: Interactive Maps Window to Via Nomentana 38 */}
          <div className="lg:col-span-7">
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white bg-white group">
              
              {/* Maps Interactive Embed */}
              <div className="relative h-80 sm:h-96 w-full">
                <iframe
                  title="Mappa Bottega VELORA - Via Nomentana 38 Tor Lupara"
                  src={siteConfig.storeLocation.embedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Interactive Floating Card on Map: Click to Navigate */}
              <div className="p-5 sm:p-6 bg-white border-t border-stone-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[10px] font-bold uppercase tracking-wider text-stone-500">
                      Posizione Ufficiale Google Maps
                    </span>
                  </div>
                  <h4 className="font-serif text-xl font-bold text-botanical-950 mt-0.5">
                    Via Nomentana 38, Tor Lupara
                  </h4>
                  <p className="text-xs text-stone-600 mt-0.5">
                    Fonte Nuova (RM) • Ampio parcheggio fronte bottega
                  </p>
                </div>

                <a
                  href={siteConfig.storeLocation.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 bg-emerald-700 hover:bg-emerald-600 text-white rounded-2xl text-xs font-bold uppercase tracking-wider transition-all shadow-md flex items-center gap-2 shrink-0 group active:scale-95"
                >
                  <Navigation className="w-4 h-4 group-hover:rotate-45 transition-transform" />
                  <span>Apri Navigatore GPS</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

