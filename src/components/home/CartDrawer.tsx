import React, { useState } from 'react';
import { useCart } from '../../context/CartContext';
import { siteConfig } from '../../config/siteConfig';
import { X, Plus, Minus, Trash2, Calendar, Clock, MapPin, Sparkles, MessageCircle, CheckCircle, ShieldCheck } from 'lucide-react';

export const CartDrawer: React.FC = () => {
  const {
    items,
    itemCount,
    subtotal,
    shippingFee,
    total,
    freeShippingThreshold,
    freeShippingProgressPct,
    amountNeededForFreeShipping,
    isFreeShipping,
    isCartOpen,
    setIsCartOpen,
    greetingCardText,
    setGreetingCardText,
    deliveryDate,
    setDeliveryDate,
    timeSlot,
    setTimeSlot,
    deliveryAddress,
    setDeliveryAddress,
    customerName,
    setCustomerName,
    customerPhone,
    setCustomerPhone,
    isEligibleForDelivery,
    validatedDistanceKm,
    updateQuantity,
    removeFromCart,
    submitOrder,
    openWhatsAppOrder,
  } = useCart();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderNotice, setOrderNotice] = useState<string | null>(null);

  if (!isCartOpen) return null;

  const handleDirectOrder = async () => {
    setIsSubmitting(true);
    try {
      const res = await submitOrder('cash_on_delivery');
      setOrderNotice(`✓ Ordine confermato (#${res.orderId})! Riceverai i fiori freschi con biglietto calligrafico.`);
      setTimeout(() => {
        setOrderNotice(null);
      }, 5000);
    } catch (e) {
      console.error(e);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={() => setIsCartOpen(false)}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity animate-in fade-in duration-300"
      />

      {/* Slide-over Drawer Panel */}
      <aside className="fixed inset-y-0 right-0 max-w-full flex pl-6 sm:pl-10">
        <div className="w-screen max-w-md bg-cream shadow-2xl flex flex-col justify-between border-l border-stone-200 animate-in slide-in-from-right duration-300">
          
          {/* Top Header + Free Shipping Progress */}
          <div className="p-5 sm:p-6 bg-white border-b border-stone-200">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="font-serif text-3xl text-botanical-950 font-semibold leading-none">
                  Il Tuo Carrello
                </h3>
                <p className="text-xs text-stone-500 mt-1">
                  Consegna espressa nel raggio di {siteConfig.delivery.maxRadiusKm} km
                </p>
              </div>

              <button
                onClick={() => setIsCartOpen(false)}
                className="w-9 h-9 rounded-full bg-stone-100 hover:bg-stone-200 flex items-center justify-center text-stone-700 transition-colors"
                aria-label="Chiudi Carrello"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Free Shipping Motivational Bar */}
            <div className="bg-botanical-50 p-3.5 rounded-2xl border border-botanical-100">
              <div className="flex justify-between text-xs font-semibold mb-1.5">
                <span className="text-botanical-900">
                  {isFreeShipping ? (
                    <span className="text-emerald-800 flex items-center gap-1 font-bold">
                      <Sparkles className="w-3.5 h-3.5 text-gold" /> Consegna Gratuita Sbloccata!
                    </span>
                  ) : (
                    <span>
                      Ti mancano <strong>{amountNeededForFreeShipping.toFixed(2)} €</strong> per la spedizione gratuita!
                    </span>
                  )}
                </span>
                <span className="text-clay font-bold font-mono">
                  {freeShippingProgressPct}%
                </span>
              </div>
              <div className="w-full h-2 bg-stone-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-botanical-800 transition-all duration-500 rounded-full"
                  style={{ width: `${freeShippingProgressPct}%` }}
                />
              </div>
            </div>
          </div>

          {/* Scrollable Cart Body */}
          <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-5">
            
            {/* Items List */}
            {items.length === 0 ? (
              <div className="text-center py-12 text-stone-400 space-y-3">
                <p className="text-base font-medium">Il tuo carrello è ancora vuoto.</p>
                <p className="text-xs">Scegli un bouquet d'autore, una pianta in terracotta o un omaggio d'arte funebre.</p>
              </div>
            ) : (
              <div className="space-y-3.5">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-3.5 bg-white p-3.5 rounded-2xl border border-stone-200 shadow-sm"
                  >
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-16 h-16 rounded-xl object-cover shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-serif text-lg text-botanical-950 font-semibold truncate leading-tight">
                        {item.name}
                      </h4>
                      <p className="text-[11px] text-stone-500 truncate mt-0.5">
                        {item.meta}
                      </p>

                      <div className="flex items-center justify-between mt-2.5">
                        <span className="text-xs font-bold text-clay">
                          {(item.price * item.quantity).toFixed(2)} €
                        </span>

                        <div className="flex items-center gap-2 bg-stone-100 rounded-lg px-2 py-0.5">
                          <button
                            onClick={() => updateQuantity(item.id, -1)}
                            className="text-xs font-bold px-1 hover:text-clay"
                            aria-label="Diminuisci quantità"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-xs font-semibold w-4 text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, 1)}
                            className="text-xs font-bold px-1 hover:text-clay"
                            aria-label="Aumenta quantità"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-stone-400 hover:text-rose-600 pl-1 ml-1 border-l border-stone-300"
                            aria-label="Rimuovi"
                          >
                            <Trash2 className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Handwritten Greeting Card with Live Calligraphic Preview */}
            <div className="bg-white p-4 rounded-2xl border border-stone-200 space-y-3">
              <label className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-botanical-900">
                <span>💌 Biglietto Scritto a Mano</span>
                <span className="text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200 text-[10px]">
                  Incluso Gratis
                </span>
              </label>

              <textarea
                rows={2}
                value={greetingCardText}
                onChange={(e) => setGreetingCardText(e.target.value)}
                placeholder="Scrivi qui la tua dedica speciale..."
                className="w-full p-3 rounded-xl bg-cream border border-stone-200 text-xs focus:outline-none focus:ring-2 focus:ring-botanical-900"
              />

              {/* Textured Ivory Live Card Preview */}
              <div className="p-4 rounded-xl bg-[#FDFBF7] border border-stone-300/80 shadow-inner select-none relative overflow-hidden">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-[9px] uppercase tracking-[0.25em] text-stone-400 font-bold">
                    Anteprima Cartoncino Avorio
                  </span>
                  <span className="text-[9px] text-clay font-serif italic">Inchiostro Artigianale</span>
                </div>
                <p className="font-handwriting italic text-xl sm:text-2xl text-botanical-950 leading-relaxed pt-1">
                  “{greetingCardText || 'Cartoncino bianco senza messaggio in busta sigillata.'}”
                </p>
              </div>
            </div>

            {/* Delivery Date & Time Slot */}
            <div className="bg-white p-4 rounded-2xl border border-stone-200 space-y-3">
              <p className="text-xs font-bold uppercase tracking-wider text-botanical-900 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-clay" />
                <span>Data e Fascia Oraria (Entro {siteConfig.delivery.maxRadiusKm} km)</span>
              </p>

              <div className="grid grid-cols-2 gap-2.5">
                <input
                  type="date"
                  value={deliveryDate}
                  onChange={(e) => setDeliveryDate(e.target.value)}
                  className="px-3 py-2 rounded-xl border border-stone-200 text-xs bg-cream focus:outline-none focus:ring-1 focus:ring-botanical-900"
                />
                <select
                  value={timeSlot}
                  onChange={(e) => setTimeSlot(e.target.value)}
                  className="px-3 py-2 rounded-xl border border-stone-200 text-xs bg-cream focus:outline-none focus:ring-1 focus:ring-botanical-900"
                >
                  <option>Mattina (09:00 - 12:30)</option>
                  <option>Pomeriggio (14:30 - 18:00)</option>
                  <option>Sera (18:00 - 20:00)</option>
                  <option>Ritiro in Bottega (Gratis)</option>
                </select>
              </div>

              {/* Delivery Address & Status */}
              <div className="space-y-1.5">
                <div className="relative">
                  <MapPin className="w-3.5 h-3.5 text-clay absolute left-3 top-3" />
                  <input
                    type="text"
                    value={deliveryAddress}
                    onChange={(e) => setDeliveryAddress(e.target.value)}
                    placeholder="Indirizzo destinatario (es. Via del Corso 12)"
                    className="w-full pl-8 pr-3 py-2.5 rounded-xl border border-stone-200 text-xs bg-cream focus:outline-none focus:ring-1 focus:ring-botanical-900"
                  />
                </div>

                <div className="flex items-center justify-between text-[11px] px-1 text-stone-500">
                  <span>Distanza calcolata:</span>
                  <span className={`font-semibold ${isEligibleForDelivery ? 'text-emerald-700' : 'text-rose-600'}`}>
                    {validatedDistanceKm !== null ? `${validatedDistanceKm} km` : 'In attesa verifica'}
                  </span>
                </div>
              </div>

              {/* Customer Quick Contacts */}
              <div className="grid grid-cols-2 gap-2 pt-1">
                <input
                  type="text"
                  placeholder="Tuo Nome e Cognome"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="px-3 py-2 rounded-xl border border-stone-200 text-xs bg-cream"
                />
                <input
                  type="tel"
                  placeholder="Cellulare di contatto"
                  value={customerPhone}
                  onChange={(e) => setCustomerPhone(e.target.value)}
                  className="px-3 py-2 rounded-xl border border-stone-200 text-xs bg-cream"
                />
              </div>

            </div>

          </div>

          {/* Footer Totals & Checkout Actions */}
          <div className="p-5 sm:p-6 bg-white border-t border-stone-200 space-y-3">
            <div className="space-y-1.5 text-xs text-stone-600">
              <div className="flex justify-between">
                <span>Subtotale Creazioni</span>
                <span className="font-semibold text-stone-900">{subtotal.toFixed(2)} €</span>
              </div>
              <div className="flex justify-between">
                <span>Consegna Refrigerata ({siteConfig.delivery.maxRadiusKm} km)</span>
                <span className="font-semibold text-stone-900">
                  {shippingFee === 0 && subtotal > 0 ? (
                    <span className="text-emerald-700 font-bold">GRATIS</span>
                  ) : (
                    `${shippingFee.toFixed(2)} €`
                  )}
                </span>
              </div>
              <div className="flex justify-between text-base font-bold text-botanical-950 pt-2 border-t border-stone-100">
                <span>Totale Ordine</span>
                <span className="text-clay text-lg">{total.toFixed(2)} €</span>
              </div>
            </div>

            {/* Direct Backend Checkout */}
            <button
              type="button"
              disabled={items.length === 0 || isSubmitting}
              onClick={handleDirectOrder}
              className="w-full py-3.5 bg-botanical-950 hover:bg-clay text-white rounded-2xl text-xs font-bold uppercase tracking-widest transition-all shadow-xl active:scale-95 disabled:opacity-50 flex items-center justify-center gap-2"
            >
              <ShieldCheck className="w-4 h-4" />
              <span>{isSubmitting ? 'Invio Ordine...' : 'Conferma Ordine da VELORA →'}</span>
            </button>

            {/* WhatsApp 1-Click Checkout */}
            <button
              type="button"
              disabled={items.length === 0}
              onClick={openWhatsAppOrder}
              className="w-full py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-2xl text-xs font-bold uppercase tracking-wider transition-all shadow-md active:scale-95 disabled:opacity-50 flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Ordina via WhatsApp con 1 Click</span>
            </button>

            {/* Toast Feedback */}
            {orderNotice && (
              <div className="p-3.5 rounded-xl bg-emerald-950 text-white text-xs text-center font-medium shadow-xl border border-emerald-500/50 animate-in fade-in">
                {orderNotice}
              </div>
            )}

          </div>

        </div>
      </aside>
    </div>
  );
};

