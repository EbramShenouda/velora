import React, { useState, useEffect } from 'react';
import { Product } from '../../types/catalog';
import { ImageUploader } from './ImageUploader';
import { X, Flame, Check, AlertCircle, Trash2, Sparkles, Tag, DollarSign, Package } from 'lucide-react';

interface ProductFormModalProps {
  isOpen: boolean;
  productToEdit?: Product | null;
  onClose: () => void;
  onSave: (productData: Partial<Product>) => Promise<void>;
  onDelete?: (id: string) => Promise<void>;
}

export const ProductFormModal: React.FC<ProductFormModalProps> = ({
  isOpen,
  productToEdit,
  onClose,
  onSave,
  onDelete,
}) => {
  const [name, setName] = useState('');
  const [category, setCategory] = useState<'bouquet' | 'piante' | 'composizioni' | 'funebre'>('bouquet');
  const [price, setPrice] = useState<number>(45);
  const [originalPrice, setOriginalPrice] = useState<number>(45);
  const [stockQuantity, setStockQuantity] = useState<number>(10);
  const [badge, setBadge] = useState('Bestseller • Mazzo');
  const [desc, setDesc] = useState('');
  const [dimensions, setDimensions] = useState('');
  const [img, setImg] = useState('');
  
  // Offer / Promo state
  const [isPromo, setIsPromo] = useState<boolean>(false);
  const [discountedPrice, setDiscountedPrice] = useState<number>(38);
  const [discountPct, setDiscountPct] = useState<number>(15);

  const [isSaving, setIsSaving] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (productToEdit) {
      setName(productToEdit.name);
      setCategory(productToEdit.category);
      setPrice(productToEdit.price);
      setOriginalPrice(productToEdit.originalPrice || productToEdit.price);
      setStockQuantity(productToEdit.stockQuantity);
      setBadge(productToEdit.badge);
      setDesc(productToEdit.desc);
      setDimensions(productToEdit.dimensions || '');
      setImg(productToEdit.imageUrl || productToEdit.img || '');
      setIsPromo(!!productToEdit.isPromo);
      setDiscountedPrice(productToEdit.price);
      setDiscountPct(productToEdit.promoDiscountPct || 15);
    } else {
      // Defaults for brand new product
      setName('');
      setCategory('bouquet');
      setPrice(45);
      setOriginalPrice(45);
      setStockQuantity(12);
      setBadge('Novità • Mazzo');
      setDesc('Composizione floreale fresca con fiori di stagione selezionati e riserva d’acqua agli steli.');
      setDimensions('Altezza 45cm • Diametro 30cm');
      setImg('https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=800&q=80');
      setIsPromo(false);
      setDiscountedPrice(38);
      setDiscountPct(15);
    }
  }, [productToEdit, isOpen]);

  if (!isOpen) return null;

  // Sync discounted price when percentage changes
  const handleDiscountPctChange = (pct: number) => {
    setDiscountPct(pct);
    const calculated = Math.round(originalPrice * (1 - pct / 100));
    setDiscountedPrice(calculated);
  };

  // Sync percentage when discounted price changes
  const handleDiscountPriceChange = (discPrice: number) => {
    setDiscountedPrice(discPrice);
    if (originalPrice > 0) {
      const calculatedPct = Math.round(((originalPrice - discPrice) / originalPrice) * 100);
      setDiscountPct(Math.max(1, calculatedPct));
    }
  };

  const handleStockToggle = (isAvailable: boolean) => {
    setStockQuantity(isAvailable ? 10 : 0);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      alert('Inserisci il titolo del prodotto.');
      return;
    }
    if (!img) {
      alert('Aggiungi o scatta una foto del prodotto.');
      return;
    }

    setIsSaving(true);
    try {
      const finalPrice = isPromo ? discountedPrice : originalPrice;
      await onSave({
        name: name.trim(),
        category,
        price: finalPrice,
        originalPrice: isPromo ? originalPrice : finalPrice,
        stockQuantity: Number(stockQuantity),
        badge: badge.trim(),
        desc: desc.trim(),
        dimensions: dimensions.trim(),
        img,
        imageUrl: img,
        isPromo,
        promoDiscountPct: isPromo ? discountPct : undefined,
      });
      onClose();
    } catch (err) {
      console.error('Error saving product:', err);
      alert('Si è verificato un errore durante il salvataggio.');
    } finally {
      setIsSaving(false);
    }
  };

  const handleDelete = async () => {
    if (!productToEdit || !onDelete) return;
    if (window.confirm(`Sei sicuro di voler eliminare definitivamente "${productToEdit.name}" dal catalogo?`)) {
      setIsDeleting(true);
      try {
        await onDelete(productToEdit.id);
        onClose();
      } catch (err) {
        console.error('Delete failed:', err);
      } finally {
        setIsDeleting(false);
      }
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className="bg-white rounded-[2.2rem] max-w-2xl w-full shadow-2xl border border-stone-200 overflow-hidden my-auto max-h-[95vh] flex flex-col">
        
        {/* Modal Header */}
        <div className="p-5 sm:p-6 bg-cream border-b border-stone-200 flex items-center justify-between shrink-0">
          <div>
            <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-clay">
              Gestione Catalogo VELORA
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-botanical-950 leading-tight">
              {productToEdit ? `Modifica: ${productToEdit.name}` : 'Aggiungi Nuovo Fiore / Vaso'}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-white hover:bg-stone-200 flex items-center justify-center text-stone-600 transition-colors shadow-sm"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Form Scrollable Area */}
        <form onSubmit={handleSubmit} className="p-5 sm:p-7 overflow-y-auto space-y-6 flex-1 text-xs">
          
          {/* 1. Nome, Categoria e Badge */}
          <div className="space-y-4">
            <div>
              <label className="block font-bold uppercase tracking-wider text-stone-700 mb-1">
                Nome Creazione Botanica *
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Es. Bouquet 'Tramonto di Positano'"
                className="w-full px-4 py-3 rounded-xl border border-stone-300 text-sm bg-cream focus:outline-none focus:ring-2 focus:ring-botanical-900"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label className="block font-bold uppercase tracking-wider text-stone-700 mb-1">
                  Categoria Catalogo
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value as any)}
                  className="w-full px-3.5 py-3 rounded-xl border border-stone-300 text-xs bg-cream focus:outline-none focus:ring-1 focus:ring-botanical-900"
                >
                  <option value="bouquet">Bouquet Freschi</option>
                  <option value="piante">Piante & Vasi d'Arredo</option>
                  <option value="composizioni">Composizioni & Hat-Box</option>
                  <option value="funebre">Arte Funebre & Cordoglio</option>
                </select>
              </div>

              <div>
                <label className="block font-bold uppercase tracking-wider text-stone-700 mb-1 flex items-center gap-1">
                  <Tag className="w-3.5 h-3.5 text-clay" />
                  <span>Badge Distintivo</span>
                </label>
                <input
                  type="text"
                  value={badge}
                  onChange={(e) => setBadge(e.target.value)}
                  placeholder="Es. Bestseller • Vaso Terracotta"
                  className="w-full px-4 py-3 rounded-xl border border-stone-300 text-xs bg-cream focus:outline-none focus:ring-1 focus:ring-botanical-900"
                />
              </div>
            </div>
          </div>

          {/* 2. Prezzo Base e Gestione Stock con Toggle Rapido */}
          <div className="p-4 sm:p-5 rounded-2xl bg-stone-50 border border-stone-200/80 space-y-4">
            <h4 className="font-bold uppercase tracking-wider text-botanical-900 flex items-center gap-2">
              <DollarSign className="w-4 h-4 text-emerald-700" />
              <span>Prezzo e Disponibilità Stock</span>
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
              <div>
                <label className="block font-bold text-stone-600 mb-1">
                  Prezzo Base di Listino (€)
                </label>
                <input
                  type="number"
                  min="1"
                  step="1"
                  required
                  value={originalPrice}
                  onChange={(e) => {
                    const val = parseFloat(e.target.value) || 0;
                    setOriginalPrice(val);
                    if (!isPromo) setPrice(val);
                  }}
                  className="w-full px-4 py-3 rounded-xl border border-stone-300 text-base font-bold text-botanical-950 bg-white"
                />
              </div>

              {/* Stock input + Quick Toggle switch */}
              <div>
                <div className="flex justify-between items-center mb-1">
                  <label className="font-bold text-stone-600 flex items-center gap-1">
                    <Package className="w-3.5 h-3.5" />
                    <span>Giacenza (Quantità)</span>
                  </label>
                  <span
                    className={`font-bold px-2 py-0.5 rounded-full text-[10px] ${
                      stockQuantity > 0 ? 'bg-emerald-100 text-emerald-900' : 'bg-rose-100 text-rose-900'
                    }`}
                  >
                    {stockQuantity > 0 ? 'Disponibile' : 'Esaurito'}
                  </span>
                </div>

                <div className="flex gap-2">
                  <input
                    type="number"
                    min="0"
                    value={stockQuantity}
                    onChange={(e) => setStockQuantity(parseInt(e.target.value, 10) || 0)}
                    className="w-24 px-3 py-2.5 rounded-xl border border-stone-300 font-bold text-center bg-white"
                  />

                  {/* Fast toggle buttons */}
                  <button
                    type="button"
                    onClick={() => handleStockToggle(false)}
                    className={`flex-1 py-2 rounded-xl font-bold uppercase transition-all ${
                      stockQuantity === 0
                        ? 'bg-rose-600 text-white shadow'
                        : 'bg-white border border-stone-200 text-stone-600 hover:bg-stone-100'
                    }`}
                  >
                    Segna Esaurito
                  </button>
                  <button
                    type="button"
                    onClick={() => handleStockToggle(true)}
                    className={`flex-1 py-2 rounded-xl font-bold uppercase transition-all ${
                      stockQuantity > 0
                        ? 'bg-emerald-700 text-white shadow'
                        : 'bg-white border border-stone-200 text-stone-600 hover:bg-stone-100'
                    }`}
                  >
                    In Stock
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* 3. Sezione Offerte & Promo con Prezzo Scontato e Calcolo % */}
          <div className="p-4 sm:p-5 rounded-2xl bg-amber-50/70 border border-amber-200/90 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Flame className="w-5 h-5 text-clay fill-clay" />
                <div>
                  <h4 className="font-bold uppercase tracking-wider text-amber-950">
                    Metti in Offerta Speciale
                  </h4>
                  <p className="text-[11px] text-amber-800">
                    Mostra il prezzo barrato e il badge dinamico sul sito
                  </p>
                </div>
              </div>

              {/* Toggle switch */}
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={isPromo}
                  onChange={(e) => setIsPromo(e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-stone-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-stone-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-clay" />
              </label>
            </div>

            {isPromo && (
              <div className="pt-2 border-t border-amber-200/80 space-y-3 animate-in fade-in">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block font-bold text-amber-900 mb-1">
                      Prezzo Scontato Finale (€)
                    </label>
                    <input
                      type="number"
                      min="1"
                      value={discountedPrice}
                      onChange={(e) => handleDiscountPriceChange(parseFloat(e.target.value) || 0)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-amber-300 bg-white font-bold text-clay text-sm"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-amber-900 mb-1">
                      Sconto Applicato (%)
                    </label>
                    <input
                      type="number"
                      min="1"
                      max="90"
                      value={discountPct}
                      onChange={(e) => handleDiscountPctChange(parseInt(e.target.value, 10) || 0)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-amber-300 bg-white font-bold text-amber-950 text-sm"
                    />
                  </div>
                </div>

                {/* Live Strikethrough Preview */}
                <div className="p-3 bg-white rounded-xl border border-amber-200 flex items-center justify-between">
                  <span className="text-[11px] text-stone-500 font-semibold">
                    Anteprima Visiva Prezzo:
                  </span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-sm text-stone-400 line-through">
                      {originalPrice},00 €
                    </span>
                    <span className="text-base font-bold text-clay">
                      {discountedPrice},00 €
                    </span>
                    <span className="text-[10px] font-bold bg-clay text-white px-2 py-0.5 rounded-full">
                      -{discountPct}%
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* 4. Gestione Immagini con Cloudinary Upload / Fotocamera / Dropzone */}
          <div className="space-y-2">
            <ImageUploader
              currentImageUrl={img}
              onImageUploaded={(uploadedUrl) => setImg(uploadedUrl)}
              onImageRemoved={() => setImg('')}
              label="Fotografia della Creazione Floreale o Pianta *"
              helperText="Carica una foto da smartphone/PC o trascinala qui. L'immagine verrà inviata direttamente a Cloudinary con ottimizzazione automatica WebP/AVIF."
            />
          </div>

          {/* 5. Descrizione e Dimensioni */}
          <div className="space-y-3">
            <div>
              <label className="block font-bold uppercase tracking-wider text-stone-700 mb-1">
                Descrizione Dettagliata
              </label>
              <textarea
                rows={3}
                required
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
                placeholder="Descrivi i fiori, il profumo, la provenienza..."
                className="w-full p-3.5 rounded-xl border border-stone-300 bg-cream text-xs focus:outline-none focus:ring-2 focus:ring-botanical-900"
              />
            </div>

            <div>
              <label className="block font-bold uppercase tracking-wider text-stone-700 mb-1">
                Dimensioni / Confezionamento
              </label>
              <input
                type="text"
                value={dimensions}
                onChange={(e) => setDimensions(e.target.value)}
                placeholder="Es. Altezza 50cm • Vaso Ø 22cm in terracotta"
                className="w-full px-4 py-2.5 rounded-xl border border-stone-300 bg-cream text-xs"
              />
            </div>
          </div>

          {/* Form Actions Footer */}
          <div className="pt-4 border-t border-stone-200 flex flex-col-reverse sm:flex-row items-center justify-between gap-3">
            {productToEdit && onDelete ? (
              <button
                type="button"
                disabled={isDeleting}
                onClick={handleDelete}
                className="w-full sm:w-auto px-4 py-3 text-rose-600 hover:bg-rose-50 rounded-xl font-bold flex items-center justify-center gap-1.5 transition-colors"
              >
                <Trash2 className="w-4 h-4" />
                <span>{isDeleting ? 'Eliminazione...' : 'Elimina dal Catalogo'}</span>
              </button>
            ) : <div />}

            <div className="flex gap-2.5 w-full sm:w-auto">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 sm:flex-none px-6 py-3 rounded-xl border border-stone-300 text-stone-700 font-bold uppercase hover:bg-stone-100 transition-colors"
              >
                Annulla
              </button>
              <button
                type="submit"
                disabled={isSaving}
                className="flex-1 sm:flex-none px-8 py-3 rounded-xl bg-botanical-950 hover:bg-clay text-white font-bold uppercase tracking-wider transition-all shadow-xl flex items-center justify-center gap-2 active:scale-95 disabled:opacity-50"
              >
                <Check className="w-4 h-4" />
                <span>{isSaving ? 'Salvataggio...' : 'Salva Prodotto'}</span>
              </button>
            </div>
          </div>

        </form>

      </div>
    </div>
  );
};

