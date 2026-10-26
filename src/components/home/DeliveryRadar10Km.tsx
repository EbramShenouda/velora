import React, { useState } from 'react';
import { siteConfig } from '../../config/siteConfig';
import { useCart } from '../../context/CartContext';
import { CatalogApi, calculateRadarPosition } from '../../services/api';
import { MapPin, Search, CheckCircle2, AlertTriangle, ExternalLink, Compass } from 'lucide-react';

export const DeliveryRadar10Km: React.FC = () => {
  const { setDeliveryEligibility, setDeliveryAddress } = useCart();
  const [addressInput, setAddressInput] = useState<string>('Centro Storico (00184)');
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const [distanceKm, setDistanceKm] = useState<number>(2.4);
  const [targetPos, setTargetPos] = useState<{ top: number; left: number }>({ top: 34, left: 62 });
  const [status, setStatus] = useState<'eligible' | 'too_far' | 'idle'>('eligible');
  const [statusMessage, setStatusMessage] = useState<string>(
    `Il tuo indirizzo rientra perfettamente nei ${siteConfig.delivery.maxRadiusKm} km! Consegna espressa oggi stesso con mezzo climatizzato.`
  );

  const handleScan = async (queryToScan?: string) => {
    const q = (queryToScan !== undefined ? queryToScan : addressInput).trim();
    if (!q) return;

    setIsSearching(true);
    try {
      const result = await CatalogApi.geocodeAddressNominatim(q);
      setDistanceKm(result.distanceKm);
      setStatus(result.status === 'eligible' ? 'eligible' : 'too_far');
      setStatusMessage(result.message);

      // Calculate precise 2D radar position
      if (result.coordinates) {
        const pos = calculateRadarPosition(
          siteConfig.storeLocation.lat,
          siteConfig.storeLocation.lng,
          result.coordinates.lat,
          result.coordinates.lng,
          siteConfig.delivery.maxRadiusKm
        );
        setTargetPos({ top: pos.topPct, left: pos.leftPct });
      } else {
        // Fallback positioning based on distance ratio
        const distRatio = Math.min(result.distanceKm / siteConfig.delivery.maxRadiusKm, 1.3);
        const top = 50 - distRatio * 32;
        const left = 50 + distRatio * 28;
        setTargetPos({ top, left });
      }

      // Update cart context
      setDeliveryEligibility(result.isEligible, result.distanceKm);
      setDeliveryAddress(`${result.normalizedAddress || q} (${result.distanceKm} km)`);
    } catch (err) {
      console.error('Scan error:', err);
    } finally {
      setIsSearching(false);
    }
  };

  const handleQuickPreset = (label: string, lat: number, lng: number) => {
    setAddressInput(label);
    const pos = calculateRadarPosition(
      siteConfig.storeLocation.lat,
      siteConfig.storeLocation.lng,
      lat,
      lng,
      siteConfig.delivery.maxRadiusKm
    );
    setDistanceKm(pos.distanceKm);
    setTargetPos({ top: pos.topPct, left: pos.leftPct });

    const isEligible = pos.distanceKm <= siteConfig.delivery.maxRadiusKm;
    setStatus(isEligible ? 'eligible' : 'too_far');
    setStatusMessage(
      isEligible
        ? `Indirizzo idoneo (${pos.distanceKm} km dalla Bottega). Consegna espressa garantita.`
        : `Distanza ${pos.distanceKm} km: supera il limite di ${siteConfig.delivery.maxRadiusKm} km. Scegli il Ritiro Gratuito in Bottega!`
    );

    setDeliveryEligibility(isEligible, pos.distanceKm);
    setDeliveryAddress(`${label} (${pos.distanceKm} km)`);
  };

  return (
    <section id="radar-10km" className="relative z-10 py-24 section-glass-light border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Distance Scanner & Calculations */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-botanical-950 text-petal text-xs font-semibold">
            <Compass className="w-3.5 h-3.5 text-gold" />
            <span>Consegna Esclusiva di Prossimità • Max {siteConfig.delivery.maxRadiusKm} km</span>
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-botanical-950 leading-tight font-semibold">
            Fiori mai stressati: consegniamo solo entro{' '}
            <span className="underline decoration-clay">{siteConfig.delivery.maxRadiusKm} km</span>.
          </h2>

          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            Per garantire che ogni petalo arrivi idratato e turgido come appena colto, il nostro furgone climatizzato copre esclusivamente un raggio di {siteConfig.delivery.maxRadiusKm} km da <strong>{siteConfig.brand.name}</strong>. Il radar calcola la distanza geodesica reale in linea d'aria tramite formula di Haversine:
          </p>

          <div className="bg-white/95 p-6 sm:p-8 rounded-[2rem] shadow-xl border border-stone-200 space-y-4">
            <label className="block text-xs font-bold uppercase tracking-wider text-stone-500">
              Inserisci Indirizzo o CAP di consegna
            </label>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleScan();
              }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <div className="relative flex-1">
                <input
                  type="text"
                  value={addressInput}
                  onChange={(e) => setAddressInput(e.target.value)}
                  placeholder="Es. Via Cavour, Piazza di Spagna, 00184 Roma..."
                  className="w-full px-5 py-4 rounded-2xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-botanical-900 text-sm bg-cream"
                />
              </div>
              <button
                type="submit"
                disabled={isSearching}
                className="px-8 py-4 bg-botanical-950 hover:bg-clay text-white rounded-2xl text-xs font-bold uppercase tracking-wider transition-all shadow-lg flex items-center justify-center gap-2 active:scale-95 disabled:opacity-60"
              >
                <Search className="w-4 h-4" />
                <span>{isSearching ? 'Calcolo GPS...' : 'Scansiona Radar'}</span>
              </button>
            </form>

            {/* Quick Simulation Pills */}
            <div className="flex flex-wrap items-center gap-2 pt-2 text-xs">
              <span className="text-stone-400 font-semibold">Test rapido:</span>
              <button
                type="button"
                onClick={() => handleQuickPreset('Centro Storico (00184)', 41.892, 12.493)}
                className="px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-900 border border-emerald-300 hover:bg-emerald-100 font-semibold transition-all"
              >
                📍 2.4 km (Centro)
              </button>
              <button
                type="button"
                onClick={() => handleQuickPreset('Quartiere Prati (00192)', 41.910, 12.460)}
                className="px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-900 border border-emerald-300 hover:bg-emerald-100 font-semibold transition-all"
              >
                📍 6.8 km (Collina)
              </button>
              <button
                type="button"
                onClick={() => handleQuickPreset('Zona EUR Sud (00144)', 41.830, 12.470)}
                className="px-3.5 py-1.5 rounded-full bg-amber-50 text-amber-900 border border-amber-300 hover:bg-amber-100 font-semibold transition-all"
              >
                📍 9.5 km (Limite 10km)
              </button>
              <button
                type="button"
                onClick={() => handleQuickPreset('Provincia Fuori Zona (00040)', 41.720, 12.670)}
                className="px-3.5 py-1.5 rounded-full bg-rose-50 text-rose-900 border border-rose-300 hover:bg-rose-100 font-semibold transition-all"
              >
                🚫 14.2 km (Fuori Zona)
              </button>
            </div>

            {/* Result Banner */}
            <div
              className={`p-4 rounded-2xl border text-sm transition-all duration-300 ${
                status === 'eligible'
                  ? 'border-emerald-300 bg-emerald-50 text-emerald-950'
                  : 'border-rose-300 bg-rose-50 text-rose-950'
              }`}
            >
              <div className="flex items-start sm:items-center justify-between gap-3">
                <div className="flex items-start gap-2.5">
                  {status === 'eligible' ? (
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  ) : (
                    <AlertTriangle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                  )}
                  <div>
                    <p className="font-bold">
                      {status === 'eligible'
                        ? `✓ Consegna Garantita (${distanceKm} km dalla Bottega)`
                        : `✕ Fuori dal Raggio di ${siteConfig.delivery.maxRadiusKm} km (${distanceKm} km)`}
                    </p>
                    <p className="text-xs mt-0.5 opacity-90">{statusMessage}</p>
                  </div>
                </div>

                <span
                  className={`px-3 py-1 rounded-full text-xs font-bold shrink-0 ${
                    status === 'eligible'
                      ? 'bg-emerald-700 text-white'
                      : 'bg-rose-600 text-white'
                  }`}
                >
                  {status === 'eligible' ? 'Idoneo' : 'Ritiro Sede'}
                </span>
              </div>
            </div>

            {/* Google Maps Official Store Button */}
            <div className="pt-2">
              <a
                href={siteConfig.storeLocation.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold text-botanical-900 hover:text-clay transition-colors group"
              >
                <MapPin className="w-4 h-4 text-clay group-hover:scale-110 transition-transform" />
                <span>Apri la posizione ufficiale di {siteConfig.brand.name} su Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-70" />
              </a>
            </div>

          </div>
        </div>

        {/* Right Column: Animated Radar Sweep 2D Canvas / SVG */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative w-80 h-80 sm:w-96 sm:h-96 rounded-full bg-botanical-950 border-8 border-white shadow-2xl flex items-center justify-center overflow-hidden select-none">
            
            {/* Rotating Conic Radar Sweep Beam */}
            <div className="absolute inset-0 rounded-full radar-beam pointer-events-none" />

            {/* Concentric Distance Rings: 3km, 6km, 10km */}
            <div className="absolute inset-8 sm:inset-10 rounded-full border border-emerald-400/35 pointer-events-none">
              <span className="absolute top-1 left-1/2 -translate-x-1/2 text-[9px] text-emerald-400/60 font-mono">3 KM</span>
            </div>
            <div className="absolute inset-20 sm:inset-24 rounded-full border border-emerald-400/30 pointer-events-none">
              <span className="absolute top-1 left-1/2 -translate-x-1/2 text-[9px] text-emerald-400/60 font-mono">6 KM</span>
            </div>
            <div className="absolute inset-3 sm:inset-4 rounded-full border-2 border-emerald-400/40 pointer-events-none">
              <span className="absolute top-1 left-1/2 -translate-x-1/2 text-[9px] text-emerald-400/80 font-mono font-bold">10 KM MAX</span>
            </div>

            {/* Crosshairs */}
            <div className="absolute w-full h-[1px] bg-emerald-400/20 pointer-events-none" />
            <div className="absolute h-full w-[1px] bg-emerald-400/20 pointer-events-none" />

            {/* Expanding Pulse Wave Ring */}
            <div className="w-64 h-64 rounded-full border-2 border-emerald-400/50 radar-pulse-ring absolute pointer-events-none" />

            {/* Center Store Pin (0 km) */}
            <div className="relative z-20 flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-clay text-white flex items-center justify-center shadow-xl border-2 border-white text-lg">
                🌿
              </div>
              <span className="mt-1 px-2.5 py-0.5 rounded-full bg-black/85 text-white text-[9px] font-bold uppercase tracking-wider border border-white/20 whitespace-nowrap">
                {siteConfig.brand.name} (0 km)
              </span>
            </div>

            {/* Dynamic Customer Target Pin */}
            <div
              id="radar-target-pin"
              className="absolute z-30 flex flex-col items-center transition-all duration-700 pointer-events-none"
              style={{ top: `${targetPos.top}%`, left: `${targetPos.left}%` }}
            >
              <div
                className={`w-4 h-4 rounded-full ring-4 animate-bounce ${
                  status === 'eligible'
                    ? 'bg-emerald-400 ring-emerald-400/40'
                    : 'bg-rose-500 ring-rose-500/40'
                }`}
              />
              <span className="mt-1 px-2 py-0.5 rounded bg-white text-botanical-950 text-[10px] font-bold shadow-md whitespace-nowrap">
                {distanceKm} km
              </span>
            </div>

            {/* Bottom Status Tag */}
            <div className="absolute bottom-4 text-[10px] uppercase tracking-widest text-emerald-300/90 font-mono bg-black/60 px-3.5 py-1 rounded-full border border-emerald-400/30">
              Raggio Limite: {siteConfig.delivery.maxRadiusKm} KM
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

