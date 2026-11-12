import React, { useEffect, useState } from 'react';
import { Sparkles, Save, RefreshCw, CheckCircle2, AlertCircle } from 'lucide-react';
import { EditorialSoul } from '../../types/catalog';
import { fetchSouls, updateSoul } from '../../services/api';
import { ImageUploader } from './ImageUploader';

const SLOTS = [1, 2, 3, 4] as const;

// Blank editing slot: the content always comes from MongoDB once saved by the admin
const emptySoul = (index: number): EditorialSoul => ({
  id: `soul-${index}`,
  orderIndex: index,
  tag: '',
  title: '',
  shortDescription: '',
  fullDescription: '',
  imageUrl: '',
});

type SlotStatus = { type: 'success' | 'error'; text: string } | null;

export const SoulsEditor: React.FC = () => {
  const [souls, setSouls] = useState<EditorialSoul[]>(SLOTS.map(emptySoul));
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [savingId, setSavingId] = useState<string | null>(null);
  const [status, setStatus] = useState<Record<string, SlotStatus>>({});

  const load = async () => {
    setIsLoading(true);
    setLoadError(null);
    try {
      const remote = await fetchSouls();
      setSouls(SLOTS.map((i) => remote.find((s) => s.id === `soul-${i}`) || emptySoul(i)));
    } catch (err: any) {
      setLoadError(err?.message || 'Impossibile caricare le card dal server.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, []);

  const patch = (id: string, changes: Partial<EditorialSoul>) => {
    setSouls((prev) => prev.map((s) => (s.id === id ? { ...s, ...changes } : s)));
    setStatus((prev) => ({ ...prev, [id]: null }));
  };

  const handleSave = async (soul: EditorialSoul) => {
    setSavingId(soul.id);
    setStatus((prev) => ({ ...prev, [soul.id]: null }));
    try {
      const saved = await updateSoul({
        ...soul,
        tag: soul.tag.trim(),
        title: soul.title.trim(),
        shortDescription: soul.shortDescription.trim(),
        fullDescription: soul.fullDescription.trim(),
        imageUrl: soul.imageUrl.trim(),
      });
      setSouls((prev) => prev.map((s) => (s.id === saved.id ? { ...emptySoul(s.orderIndex), ...saved } : s)));
      setStatus((prev) => ({ ...prev, [soul.id]: { type: 'success', text: 'Salvato su MongoDB.' } }));
    } catch (err: any) {
      setStatus((prev) => ({
        ...prev,
        [soul.id]: { type: 'error', text: err?.message || 'Salvataggio non riuscito.' },
      }));
    } finally {
      setSavingId(null);
    }
  };

  const inputClass =
    'w-full px-3 py-2.5 rounded-xl border border-stone-300 bg-white text-sm text-stone-800 focus:outline-none focus:ring-2 focus:ring-botanical-900/30 focus:border-botanical-900';
  const labelClass = 'block font-bold uppercase tracking-wider text-stone-700 mb-1 text-[11px]';

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-[2rem] p-6 sm:p-8 border border-stone-200 shadow-xl">
        <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-clay flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5" />
          Sezione 4 Anime (Carosello)
        </span>
        <h3 className="font-serif text-3xl font-bold text-botanical-950 mt-1">Le Quattro Anime</h3>
        <p className="text-xs text-stone-500 mt-1 max-w-2xl">
          Le card visibili nella home. Testi e foto sono salvati su MongoDB e Cloudinary: sopravvivono a
          riavvii e nuovi rilasci. Le card non ancora compilate non compaiono sul sito.
        </p>
      </div>

      {isLoading && (
        <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 text-xs flex items-center gap-2.5">
          <RefreshCw className="w-4 h-4 animate-spin text-clay shrink-0" />
          <span>Caricamento delle card da MongoDB in corso...</span>
        </div>
      )}

      {loadError && (
        <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200 text-rose-900 text-xs flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
            <span>{loadError}</span>
          </div>
          <button
            type="button"
            onClick={load}
            className="px-4 py-2 rounded-full bg-botanical-950 text-white font-bold uppercase tracking-wider"
          >
            Riprova
          </button>
        </div>
      )}

      {!isLoading && !loadError && (
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          {souls.map((soul) => {
            const slotStatus = status[soul.id];
            const isSaving = savingId === soul.id;
            return (
              <form
                key={soul.id}
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSave(soul);
                }}
                className="bg-white rounded-[2rem] p-6 border border-stone-200 shadow-lg space-y-4 text-xs"
              >
                <div className="flex items-center gap-3 pb-3 border-b border-stone-200">
                  <span className="w-10 h-10 rounded-full bg-botanical-950 text-white font-serif text-lg flex items-center justify-center">
                    {String(soul.orderIndex).padStart(2, '0')}
                  </span>
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-clay">
                      Card {soul.orderIndex} di 4
                    </span>
                    <p className="font-serif text-lg font-semibold text-botanical-950 leading-tight">
                      {soul.title || 'Da compilare'}
                    </p>
                  </div>
                </div>

                <div>
                  <label className={labelClass}>Tag</label>
                  <input
                    className={inputClass}
                    value={soul.tag}
                    onChange={(e) => patch(soul.id, { tag: e.target.value })}
                  />
                </div>

                <div>
                  <label className={labelClass}>Titolo</label>
                  <input
                    className={inputClass}
                    value={soul.title}
                    onChange={(e) => patch(soul.id, { title: e.target.value })}
                  />
                </div>

                <div>
                  <label className={labelClass}>Descrizione breve (sulla card)</label>
                  <input
                    className={inputClass}
                    value={soul.shortDescription}
                    onChange={(e) => patch(soul.id, { shortDescription: e.target.value })}
                  />
                </div>

                <div>
                  <label className={labelClass}>Descrizione modale (testo completo)</label>
                  <textarea
                    rows={4}
                    className={inputClass}
                    value={soul.fullDescription}
                    onChange={(e) => patch(soul.id, { fullDescription: e.target.value })}
                  />
                </div>

                <ImageUploader
                  currentImageUrl={soul.imageUrl}
                  onImageUploaded={(url) => patch(soul.id, { imageUrl: url })}
                  onImageRemoved={() => patch(soul.id, { imageUrl: '' })}
                  label="Immagine della card"
                  helperText="Carica una foto (Cloudinary) oppure incolla un URL qui sotto."
                />

                <div>
                  <label className={labelClass}>URL immagine</label>
                  <input
                    className={inputClass}
                    placeholder="https://res.cloudinary.com/..."
                    value={soul.imageUrl}
                    onChange={(e) => patch(soul.id, { imageUrl: e.target.value })}
                  />
                </div>

                <div className="flex items-center justify-between gap-3 pt-2">
                  <div className="min-h-[1.25rem]">
                    {slotStatus && (
                      <span
                        className={`flex items-center gap-1.5 font-semibold ${
                          slotStatus.type === 'success' ? 'text-emerald-700' : 'text-rose-700'
                        }`}
                      >
                        {slotStatus.type === 'success' ? (
                          <CheckCircle2 className="w-4 h-4" />
                        ) : (
                          <AlertCircle className="w-4 h-4" />
                        )}
                        {slotStatus.text}
                      </span>
                    )}
                  </div>
                  <button
                    type="submit"
                    disabled={isSaving}
                    className="px-6 py-3 rounded-full bg-botanical-950 hover:bg-clay disabled:opacity-60 text-white font-bold uppercase tracking-wider transition-colors inline-flex items-center gap-2 shadow-md"
                  >
                    {isSaving ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
                    <span>{isSaving ? 'Salvataggio...' : 'Salva card'}</span>
                  </button>
                </div>
              </form>
            );
          })}
        </div>
      )}
    </div>
  );
};
