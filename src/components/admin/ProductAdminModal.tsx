import React, { useState } from 'react';
import { Product } from '../../types/catalog';
import { X, Plus, Edit2, Check } from 'lucide-react';

interface ProductAdminModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSaveProduct: (product: Partial<Product>) => void;
}

export const ProductAdminModal: React.FC<ProductAdminModalProps> = ({
  isOpen,
  onClose,
  onSaveProduct,
}) => {
  const [name, setName] = useState('');
  const [category, setCategory] = useState<'bouquet' | 'piante' | 'composizioni' | 'funebre'>('bouquet');
  const [price, setPrice] = useState('48');
  const [stockQuantity, setStockQuantity] = useState('10');
  const [isPromo, setIsPromo] = useState(false);
  const [promoDiscountPct, setPromoDiscountPct] = useState('15');
  const [desc, setDesc] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSaveProduct({
      id: `p-${Date.now()}`,
      name,
      slug: name.toLowerCase().replace(/\s+/g, '-'),
      category,
      price: parseFloat(price) || 0,
      stockQuantity: parseInt(stockQuantity, 10) || 0,
      isPromo,
      promoDiscountPct: isPromo ? parseInt(promoDiscountPct, 10) : undefined,
      desc,
      badge: isPromo ? 'In Offerta' : 'Novità',
      img: 'https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=800&q=80',
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-stone-200">
        <div className="flex items-center justify-between pb-4 border-b border-stone-200">
          <div>
            <span className="text-[10px] uppercase font-bold tracking-widest text-clay">Gestione Bottega</span>
            <h3 className="font-serif text-2xl font-semibold text-botanical-950">Aggiungi / Modifica Prodotto</h3>
          </div>
          <button onClick={onClose} className="p-2 text-stone-500 hover:text-stone-900 rounded-full">
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="mt-5 space-y-4 text-xs">
          <div>
            <label className="block font-bold uppercase text-stone-600 mb-1">Nome Creazione</label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Es. Bouquet Rosa d'Oriente"
              className="w-full px-4 py-2.5 rounded-xl border border-stone-300 bg-cream"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block font-bold uppercase text-stone-600 mb-1">Categoria</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value as any)}
                className="w-full px-3 py-2.5 rounded-xl border border-stone-300 bg-cream"
              >
                <option value="bouquet">Bouquet</option>
                <option value="piante">Piante & Vasi</option>
                <option value="composizioni">Composizioni</option>
                <option value="funebre">Arte Funebre</option>
              </select>
            </div>

            <div>
              <label className="block font-bold uppercase text-stone-600 mb-1">Prezzo (€)</label>
              <input
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-stone-300 bg-cream"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block font-bold uppercase text-stone-600 mb-1">Giacenza (0 = Esaurito)</label>
              <input
                type="number"
                value={stockQuantity}
                onChange={(e) => setStockQuantity(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-stone-300 bg-cream"
              />
            </div>

            <div className="flex flex-col justify-end">
              <label className="flex items-center gap-2 cursor-pointer pb-2">
                <input
                  type="checkbox"
                  checked={isPromo}
                  onChange={(e) => setIsPromo(e.target.checked)}
                  className="rounded text-clay"
                />
                <span className="font-bold uppercase text-stone-700">In Offerta 🔥</span>
              </label>
            </div>
          </div>

          {isPromo && (
            <div>
              <label className="block font-bold uppercase text-stone-600 mb-1">Percentuale Sconto (%)</label>
              <input
                type="number"
                value={promoDiscountPct}
                onChange={(e) => setPromoDiscountPct(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-stone-300 bg-cream"
              />
            </div>
          )}

          <div>
            <label className="block font-bold uppercase text-stone-600 mb-1">Descrizione Breve</label>
            <textarea
              rows={2}
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              placeholder="Composizione floreale fresca..."
              className="w-full px-4 py-2.5 rounded-xl border border-stone-300 bg-cream"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3.5 bg-botanical-950 hover:bg-clay text-white rounded-xl font-bold uppercase tracking-wider transition-colors shadow-lg mt-2"
          >
            Salva nel Database Bottega
          </button>
        </form>
      </div>
    </div>
  );
};

