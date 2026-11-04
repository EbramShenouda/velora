import React, { useState } from 'react';
import { Calendar, MapPin, MessageCircle, Minus, Plus, Trash2, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export const CartDrawer: React.FC = () => {
  const {
    items,
    subtotal,
    shippingFee,
    total,
    freeShippingEnabled,
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
    updateQuantity,
    removeFromCart,
    clearCart,
    submitOrder,
    openWhatsAppOrder,
  } = useCart();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notice, setNotice] = useState<string | null>(null);

  if (!isCartOpen) return null;

  const isPickup = timeSlot.includes('Ritiro in Bottega');

  const close = () => {
    setIsCartOpen(false);
    setNotice(null);
  };

  const confirmOrder = async () => {
    if (!items.length) {
      setNotice('Il tuo carrello è vuoto.');
      return;
    }
    if (!customerName.trim() || !customerPhone.trim() || (!isPickup && !deliveryAddress.trim())) {
      setNotice('Inserisci nome, telefono e indirizzo di consegna oppure scegli il ritiro in bottega.');
      return;
    }

    setIsSubmitting(true);
    setNotice(null);
    try {
      const result = await submitOrder();
      openWhatsAppOrder();
      clearCart();
      setNotice(`Ordine confermato (#${result.orderId}).`);
    } catch (error) {
      console.error('Error confirming order:', error);
      setNotice("Si è verificato un errore durante l'invio dell'ordine. Riprova.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden font-sans">
      <button
        type="button"
        aria-label="Chiudi carrello"
        className="absolute inset-0 w-full cursor-default bg-black/60 backdrop-blur-sm"
        onClick={close}
      />
      <aside className="fixed inset-y-0 right-0 flex w-full max-w-md flex-col border-l border-stone-200 bg-cream shadow-2xl">
        <header className="border-b border-stone-200 bg-white p-5 sm:p-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="font-serif text-3xl font-semibold text-botanical-950">Il tuo carrello</h3>
              <p className="mt-1 text-xs text-stone-500">Consegna espressa a domicilio in tutta Roma</p>
            </div>
            <button
              type="button"
              onClick={close}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-stone-100 text-stone-700 transition-colors hover:bg-stone-200"
              aria-label="Chiudi carrello"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          {freeShippingEnabled && (
            <div className="mt-4 rounded-2xl border border-botanical-100 bg-botanical-50 p-3.5">
              <div className="mb-1.5 flex justify-between text-xs font-semibold text-botanical-900">
                <span>
                  {isFreeShipping
                    ? 'Consegna gratuita sbloccata'
                    : `Mancano ${amountNeededForFreeShipping.toFixed(2)} € per la spedizione gratuita`}
                </span>
                <span className="font-mono text-clay">{freeShippingProgressPct}%</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-stone-200">
                <div
                  className="h-full rounded-full bg-botanical-800 transition-all duration-500"
                  style={{ width: `${freeShippingProgressPct}%` }}
                />
              </div>
            </div>
          )}
        </header>

        <div className="flex-1 space-y-5 overflow-y-auto p-5 sm:p-6">
          {!items.length ? (
            <p className="py-12 text-center text-sm text-stone-500">Il tuo carrello è ancora vuoto.</p>
          ) : (
            <div className="space-y-3">
              {items.map((item) => (
                <article key={item.id} className="flex gap-3 rounded-2xl border border-stone-200 bg-white p-3">
                  <img src={item.img} alt={item.name} className="h-16 w-16 rounded-xl object-cover" />
                  <div className="min-w-0 flex-1">
                    <div className="flex justify-between gap-2">
                      <h4 className="truncate font-serif text-lg font-semibold text-botanical-950">{item.name}</h4>
                      <button
                        type="button"
                        onClick={() => removeFromCart(item.id)}
                        aria-label={`Rimuovi ${item.name}`}
                        className="text-stone-400 hover:text-clay"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                    <p className="mt-0.5 text-xs text-stone-500">{item.meta}</p>
                    <div className="mt-2 flex items-center justify-between">
                      <span className="text-sm font-bold text-botanical-900">{(item.price * item.quantity).toFixed(2)} €</span>
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, -1)}
                          className="rounded-full border border-stone-200 p-1"
                          aria-label="Diminuisci quantità"
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="w-4 text-center text-xs font-bold">{item.quantity}</span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, 1)}
                          className="rounded-full border border-stone-200 p-1"
                          aria-label="Aumenta quantità"
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}

          <section className="space-y-3 rounded-2xl border border-stone-200 bg-white p-4">
            <input
              value={customerName}
              onChange={(event) => setCustomerName(event.target.value)}
              placeholder="Nome e cognome *"
              className="w-full rounded-xl border border-stone-200 px-3 py-2 text-sm outline-none focus:border-botanical-600"
            />
            <input
              value={customerPhone}
              onChange={(event) => setCustomerPhone(event.target.value)}
              placeholder="Telefono *"
              type="tel"
              className="w-full rounded-xl border border-stone-200 px-3 py-2 text-sm outline-none focus:border-botanical-600"
            />
            <div className="relative">
              <MapPin className="pointer-events-none absolute left-3 top-2.5 h-4 w-4 text-stone-400" />
              <input
                value={deliveryAddress}
                onChange={(event) => setDeliveryAddress(event.target.value)}
                placeholder="Indirizzo di consegna *"
                disabled={isPickup}
                className="w-full rounded-xl border border-stone-200 py-2 pl-9 pr-3 text-sm outline-none focus:border-botanical-600 disabled:bg-stone-100"
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <label className="relative">
                <Calendar className="pointer-events-none absolute left-3 top-2.5 h-4 w-4 text-stone-400" />
                <input
                  value={deliveryDate}
                  onChange={(event) => setDeliveryDate(event.target.value)}
                  type="date"
                  className="w-full rounded-xl border border-stone-200 py-2 pl-9 pr-2 text-sm outline-none focus:border-botanical-600"
                />
              </label>
              <select
                value={timeSlot}
                onChange={(event) => setTimeSlot(event.target.value)}
                className="rounded-xl border border-stone-200 px-2 py-2 text-sm outline-none focus:border-botanical-600"
              >
                <option>Mattina (09:00 - 12:30)</option>
                <option>Pomeriggio (15:00 - 19:00)</option>
                <option>Ritiro in Bottega (Gratis)</option>
              </select>
            </div>
            <textarea
              value={greetingCardText}
              onChange={(event) => setGreetingCardText(event.target.value)}
              placeholder="Messaggio per il biglietto"
              rows={3}
              className="w-full resize-none rounded-xl border border-stone-200 px-3 py-2 text-sm outline-none focus:border-botanical-600"
            />
          </section>
          {notice && <p className="rounded-xl bg-petal p-3 text-sm text-botanical-950">{notice}</p>}
        </div>

        <footer className="border-t border-stone-200 bg-white p-5">
          <dl className="space-y-1 text-sm text-stone-600">
            <div className="flex justify-between"><dt>Subtotale</dt><dd>{subtotal.toFixed(2)} €</dd></div>
            <div className="flex justify-between"><dt>Consegna</dt><dd>{shippingFee === 0 ? 'Gratis' : `${shippingFee.toFixed(2)} €`}</dd></div>
            <div className="flex justify-between pt-2 font-serif text-xl font-bold text-botanical-950"><dt>Totale</dt><dd>{total.toFixed(2)} €</dd></div>
          </dl>
          <button
            type="button"
            onClick={confirmOrder}
            disabled={isSubmitting || !items.length}
            className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-botanical-900 px-4 py-3 text-sm font-bold text-white transition-colors hover:bg-botanical-700 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <MessageCircle className="h-4 w-4" />
            {isSubmitting ? 'Invio in corso...' : 'Conferma ordine su WhatsApp'}
          </button>
        </footer>
      </aside>
    </div>
  );
};
