import React, { useState } from 'react';
import { useCatalog } from '../../context/CatalogContext';
import { AnnouncementConfig } from '../../types/catalog';
import { Megaphone, Sparkles, Check, Heart, Sun, Gift, RefreshCw } from 'lucide-react';

export const AnnouncementBarEditor: React.FC = () => {
  const { announcement, updateAnnouncement } = useCatalog();

  const [message, setMessage] = useState(announcement.message);
  const [badge, setBadge] = useState(announcement.badge);
  const [secondaryNotice, setSecondaryNotice] = useState(announcement.secondaryNotice);
  const [active, setActive] = useState(announcement.active);
  const [savedSuccess, setSavedSuccess] = useState(false);

  const applyPreset = (preset: {
    badge: string;
    message: string;
    secondary: string;
    specialEvent: AnnouncementConfig['specialEvent'];
  }) => {
    setBadge(preset.badge);
    setMessage(preset.message);
    setSecondaryNotice(preset.secondary);
    updateAnnouncement({
      badge: preset.badge,
      message: preset.message,
      secondaryNotice: preset.secondary,
      specialEvent: preset.specialEvent,
      active: true,
    });
    setActive(true);
    triggerSuccess();
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    updateAnnouncement({
      badge: badge.trim(),
      message: message.trim(),
      secondaryNotice: secondaryNotice.trim(),
      active,
    });
    triggerSuccess();
  };

  const triggerSuccess = () => {
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3000);
  };

  return (
    <div className="bg-white rounded-[2rem] p-6 sm:p-8 border border-stone-200 shadow-xl space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-stone-200">
        <div>
          <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-clay flex items-center gap-1.5">
            <Megaphone className="w-3.5 h-3.5" />
            Top Announcement Bar
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-botanical-950 mt-0.5">
            Banner Promozionale Superiore
          </h3>
          <p className="text-xs text-stone-500 mt-1">
            Modifica in tempo reale l'annuncio visibile in cima a tutte le pagine del sito.
          </p>
        </div>

        {/* Toggle Switch to show/hide announcement */}
        <div className="flex items-center gap-3 bg-stone-50 px-4 py-2 rounded-2xl border border-stone-200">
          <span className="text-xs font-bold text-stone-700">
            {active ? 'Banner Attivo' : 'Banner Nascosto'}
          </span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={active}
              onChange={(e) => {
                setActive(e.target.checked);
                updateAnnouncement({ active: e.target.checked });
              }}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-stone-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-stone-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-600" />
          </label>
        </div>
      </div>

      {/* Quick Event Presets Buttons */}
      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-stone-500 mb-2.5">
          Modelli Rapidi per Festività & Eventi:
        </label>
        <div className="flex flex-wrap gap-2 text-xs">
          <button
            type="button"
            onClick={() =>
              applyPreset({
                badge: 'VELORA:',
                message: 'Consegna espressa a mano garantita entro 10 km dalla nostra bottega',
                secondary: '✨ Consegna Gratuita sopra 50,00 € • 💌 Biglietto a mano incluso',
                specialEvent: 'standard',
              })
            }
            className="px-3.5 py-2 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 font-semibold flex items-center gap-1.5 transition-colors"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Standard Bottega</span>
          </button>

          <button
            type="button"
            onClick={() =>
              applyPreset({
                badge: '❤️ SPECIALE SAN VALENTINO:',
                message: 'Prenota il bouquet di rose per la tua dolce metà. Consegna garantita il 14 Febbraio!',
                secondary: '🌹 Rosa d\'Omaggio nei primi 50 ordini • 💌 Biglietto ceralacca gratis',
                specialEvent: 'san_valentino',
              })
            }
            className="px-3.5 py-2 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-900 border border-rose-200 font-semibold flex items-center gap-1.5 transition-colors"
          >
            <Heart className="w-3.5 h-3.5 text-rose-600 fill-rose-600" />
            <span>San Valentino</span>
          </button>

          <button
            type="button"
            onClick={() =>
              applyPreset({
                badge: '🌸 FESTA DELLA MAMMA:',
                message: 'Dille quanto le vuoi bene con le peonie fresche di giornata di VELORA.',
                secondary: '✨ Consegna Gratuita • 💌 Scrivi una dedica personalizzata da consegnare a mano',
                specialEvent: 'festa_della_mamma',
              })
            }
            className="px-3.5 py-2 rounded-xl bg-pink-50 hover:bg-pink-100 text-pink-900 border border-pink-200 font-semibold flex items-center gap-1.5 transition-colors"
          >
            <Sparkles className="w-3.5 h-3.5 text-pink-600" />
            <span>Festa della Mamma</span>
          </button>

          <button
            type="button"
            onClick={() =>
              applyPreset({
                badge: '⚡ PROMOZIONE LAMPPO:',
                message: 'Sconto esclusivo 15% su tutti i vasi e composizioni ordinati per oggi!',
                secondary: '🔥 Usa il codice BOTANICA15 al checkout • Valido entro 10 km',
                specialEvent: 'primavera',
              })
            }
            className="px-3.5 py-2 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-200 font-semibold flex items-center gap-1.5 transition-colors"
          >
            <Sun className="w-3.5 h-3.5 text-amber-600" />
            <span>Offerta Lampo 15%</span>
          </button>

          <button
            type="button"
            onClick={() =>
              applyPreset({
                badge: '🎄 MAGIA DEL NATALE:',
                message: 'Centrotavola profumati con pino nobile, cannella e candele artigianali in pronta consegna.',
                secondary: '✨ Prenota prima del 20 Dicembre • Consegna refrigerata garantita',
                specialEvent: 'natale',
              })
            }
            className="px-3.5 py-2 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-900 border border-emerald-200 font-semibold flex items-center gap-1.5 transition-colors"
          >
            <Gift className="w-3.5 h-3.5 text-emerald-600" />
            <span>Natale & Feste</span>
          </button>
        </div>
      </div>

      {/* Editor Form */}
      <form onSubmit={handleSave} className="space-y-4 text-xs">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div>
            <label className="block font-bold uppercase text-stone-600 mb-1">
              Badge Evidenziato
            </label>
            <input
              type="text"
              value={badge}
              onChange={(e) => setBadge(e.target.value)}
              placeholder="Es. VELORA: o SPECIALE:"
              className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 bg-cream font-bold text-botanical-950"
            />
          </div>

          <div className="sm:col-span-2">
            <label className="block font-bold uppercase text-stone-600 mb-1">
              Messaggio Principale dell'Annuncio
            </label>
            <input
              type="text"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Testo visibile a tutti i visitatori..."
              className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 bg-cream text-stone-800"
            />
          </div>
        </div>

        <div>
          <label className="block font-bold uppercase text-stone-600 mb-1">
            Testo Secondario (Desktop)
          </label>
          <input
            type="text"
            value={secondaryNotice}
            onChange={(e) => setSecondaryNotice(e.target.value)}
            placeholder="Es. Consegna gratuita sopra 50€ • Biglietto incluso..."
            className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 bg-cream text-stone-800"
          />
        </div>

        {/* Live Preview Box */}
        <div className="pt-2">
          <label className="block text-[11px] font-bold uppercase tracking-wider text-stone-400 mb-2">
            Anteprima Esatta sul Negozio:
          </label>
          <div className="bg-botanical-950 text-stone-200 text-xs py-2.5 px-4 rounded-xl border border-white/10 shadow-inner flex flex-wrap justify-between items-center gap-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="text-[11px] sm:text-xs">
                <strong>{badge}</strong> {message}
              </span>
            </div>
            <div className="text-[11px] text-stone-300 hidden sm:block">
              {secondaryNotice}
            </div>
          </div>
        </div>

        <div className="pt-3 flex items-center justify-between">
          {savedSuccess ? (
            <span className="text-emerald-700 font-bold flex items-center gap-1.5 text-xs">
              <Check className="w-4 h-4" /> Banner aggiornato con successo su tutto il sito!
            </span>
          ) : <div />}

          <button
            type="submit"
            className="px-6 py-3 bg-botanical-950 hover:bg-clay text-white rounded-xl font-bold uppercase tracking-wider shadow-lg transition-all active:scale-95"
          >
            Pubblica Banner Ora
          </button>
        </div>

      </form>

    </div>
  );
};

