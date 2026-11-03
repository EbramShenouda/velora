import React, { useState } from 'react';
import { useCart } from '../../context/CartContext';
import { siteConfig } from '../../config/siteConfig';
import {
  X,
  Plus,
  Minus,
  Trash2,
  Calendar,
  MapPin,
  Sparkles,
  MessageCircle,
  ShieldCheck,
  AlertCircle,
  Truck,
  CheckCircle2,
  Store,
  ArrowRight,
} from 'lucide-react';

export const CartDrawer: React.FC = () => {
  const {
    items,
    subtotal,
    shippingFee,
    total,
    freeShippingEnabled,
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
    updateQuantity,
    removeFromCart,
    clearCart,
    submitOrder,
  } = useCart();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formErrors, setFormErrors] = useState<{
    name?: boolean;
    phone?: boolean;
    address?: boolean;
  }>({});
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Success Confirmation State with safety WhatsApp link
  const [confirmedOrder, setConfirmedOrder] = useState<{
    orderId: string;
    whatsappUrl: string;
    total: number;
    customerName: string;
    deliveryText: string;
  } | null>(null);

  if (!isCartOpen) return null;

  const isPickup = timeSlot.includes('Ritiro in Bottega');

  const handleClose = () => {
    setIsCartOpen(false);
    // Reset order confirmation upon closing so next visit is fresh
    if (confirmedOrder) {
      setConfirmedOrder(null);
    }
  };

  /**
   * Real Order Confirmation Logic (Validates fields, saves to MongoDB, opens WhatsApp, empties cart)
   */
  const handleConfirmOrder = async () => {
    // 1. Validation check
    if (items.length === 0) {
      setErrorMessage('Il tuo carrello è vuoto. Aggiungi almeno una creazione floreale.');
      return;
    }

    const errors: { name?: boolean; phone?: boolean; address?: boolean } = {};
    if (!customerName.trim()) {
      errors.name = true;
    }
    if (!customerPhone.trim()) {
      errors.phone = true;
    }
    if (!isPickup && !deliveryAddress.trim()) {
      errors.address = true;
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      setErrorMessage(
        isPickup
          ? 'Per procedere, inserisci Nome e Numero di Telefono per il ritiro in bottega.'
          : 'Per procedere, compila i campi obbligatori evidenziati in rosso (Nome, Telefono e Indirizzo di consegna).'
      );
      return;
    }

    // Clear previous errors
    setFormErrors({});
    setErrorMessage(null);
    setIsSubmitting(true);

    try {
      // A) Generate unique order code
      const orderId = `VEL-${Math.floor(1000 + Math.random() * 9000)}`;
      const deliveryPlace = isPickup
        ? 'Ritiro in Bottega a Tor Lupara (Gratis)'
        : deliveryAddress.trim();

      // B) Format Items List
      const itemsSummary = items
        .map((it) => {
          const details =
            it.isFuneralTribute && it.funeralDetails?.ribbonText
              ? ` [Nastro Oro: "${it.funeralDetails.ribbonText}"]`
              : '';
          return `- ${it.quantity}x ${it.name} (€${(it.price * it.quantity).toFixed(2)})${details}`;
        })
        .join('\n');

      const cardDedication = greetingCardText.trim()
        ? greetingCardText.trim()
        : 'Nessun bigliettino';

      const shippingLabel =
        shippingFee === 0 ? 'GRATIS' : `€${shippingFee.toFixed(2)}`;

      // C) Construct exact required WhatsApp Message Format
      const whatsappText =
`🌸 *NUOVO ORDINE VELORA* (#${orderId})
👤 *Cliente:* ${customerName.trim()} (${customerPhone.trim()})
📅 *Data e Orario:* ${deliveryDate} - ${timeSlot}
📍 *Consegna/Ritiro:* ${deliveryPlace}

💐 *RIEPILOGO ARTICOLI:*
${itemsSummary}

💌 *Bigliettino:* ${cardDedication}

💰 *Subtotale:* €${subtotal.toFixed(2)}
🚚 *Spedizione:* ${shippingLabel}
✨ *TOTALE ORDINE:* €${total.toFixed(2)}`;

      const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(
        whatsappText
      )}`;

      // D) Save order in MongoDB backend & update admin orders list
      await submitOrder({
        orderId,
        customer: {
          fullName: customerName.trim(),
          phone: customerPhone.trim(),
          deliveryAddress: deliveryPlace,
          deliveryDate,
          timeSlot,
        },
        items: [...items],
        greetingCardText: cardDedication,
        subtotal,
        shippingFee,
        total,
        paymentMethod: 'cash_on_delivery',
        createdAt: new Date().toISOString(),
      });

      // E) Automatically open WhatsApp link in new tab
      try {
        window.open(whatsappUrl, '_blank');
      } catch (e) {
        console.warn('Could not auto-open WhatsApp popup:', e);
      }

      // F) Save confirmed state for drawer confirmation view and empty cart
      setConfirmedOrder({
        orderId,
        whatsappUrl,
        total,
        customerName: customerName.trim(),
        deliveryText: deliveryPlace,
      });

      clearCart();
    } catch (err) {
      console.error('Error confirming order:', err);
      setErrorMessage("Si è verificato un errore durante l'invio dell'ordine. Riprova.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden font-sans">
      {/* Backdrop */}
      <div
        onClick={handleClose}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity animate-in fade-in duration-300"
      />

      {/* Slide-over Drawer Panel */}
      <aside className="fixed inset-y-0 right-0 max-w-full flex pl-4 sm:pl-10">
        <div className="w-screen max-w-md bg-cream shadow-2xl flex flex-col justify-between border-l border-stone-200 animate-in slide-in-from-right duration-300">
          
          {/* Top Header */}
          <div className="p-5 sm:p-6 bg-white border-b border-stone-200">
            <div className="flex items-center justify-between mb-3">
              <div>
                <h3 className="font-serif text-3xl text-botanical-950 font-semibold leading-none">
                  Il Tuo Carrello
                </h3>
                <p className="text-xs text-stone-500 mt-1">
                  Atelier Botanico VELORA • Tor Lupara & Tutta Roma
                </p>
              </div>

              <button
                onClick={handleClose}
                className="w-9 h-9 rounded-full bg-stone-100 hover:bg-stone-200 flex items-center justify-center text-stone-700 transition-colors"
                aria-label="Chiudi Carrello"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Delivery / Shipping Status Banner (Dynamic & Configurable from Admin) */}
            {!confirmedOrder && (
              freeShippingEnabled ? (
                <div className="bg-botanical-50 p-3.5 rounded-2xl border border-botanical-100">
                  <div className="flex justify-between text-xs font-semibold mb-1.5">
                    <span className="text-botanical-900">
                      {isFreeShipping ? (
                        <span className="text-emerald-800 flex items-center gap-1 font-bold">
                          <Sparkles className="w-3.5 h-3.5 text-gold" /> Consegna Gratuita Sbloccata!
                        </span>
                      ) : (
                        <span>
                          Mancano <strong>{amountNeededForFreeShipping.toFixed(2)} €</strong> per la spedizione gratuita
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
              ) : (
                <div className="bg-botanical-50/80 px-3.5 py-2.5 rounded-2xl border border-botanical-200/70 flex items-center justify-between text-xs text-stone-700">
                  <div className="flex items-center gap-2">
                    <Truck className="w-4 h-4 text-clay shrink-0" />
                    <span>Consegna refrigerata a domicilio:</span>
                  </div>
                  <span className="font-bold text-botanical-950">
                    {isPickup ? '0,00 € (Ritiro)' : `${shippingFee.toFixed(2)} €`}
                  </span>
                </div>
              )
            )}
          </div>

          {/* ===================================================================
              CASE A: ORDER CONFIRMATION SUMMARY VIEW (Post Submit)
              =================================================================== */}
          {confirmedOrder ? (
            <div className="flex-1 overflow-y-auto p-6 flex flex-col justify-between space-y-6 animate-in fade-in zoom-in-95 duration-300">
              <div className="text-center space-y-4 pt-4">
                <div className="w-16 h-16 rounded-3xl bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto shadow-md">
                  <CheckCircle2 className="w-9 h-9" />
                </div>

                <div>
                  <span className="text-[11px] font-bold uppercase tracking-widest text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                    Ordine Registrato nel Database
                  </span>
                  <h4 className="font-serif text-3xl font-bold text-botanical-950 mt-2">
                    Grazie, {confirmedOrder.customerName}!
                  </h4>
                  <p className="text-xs text-stone-600 mt-1">
                    Codice Ordine: <strong className="font-mono text-clay text-sm">{confirmedOrder.orderId}</strong>
                  </p>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-stone-200 text-left text-xs space-y-2.5 shadow-sm">
                  <div className="flex justify-between border-b border-stone-100 pb-2">
                    <span className="text-stone-500">Destinazione:</span>
                    <span className="font-semibold text-botanical-950 text-right truncate max-w-[200px]">
                      {confirmedOrder.deliveryText}
                    </span>
                  </div>
                  <div className="flex justify-between border-b border-stone-100 pb-2">
                    <span className="text-stone-500">Totale Ordine:</span>
                    <span className="font-bold text-clay text-sm">
                      {confirmedOrder.total.toFixed(2)} €
                    </span>
                  </div>
                  <p className="text-[11px] text-stone-500 italic pt-1 text-center">
                    I dettagli completi sono stati inviati al nostro mastro fiorista tramite WhatsApp per la preparazione immediata.
                  </p>
                </div>
              </div>

              {/* Safety Reopen WhatsApp Button */}
              <div className="space-y-3 pt-4 border-t border-stone-200">
                <a
                  href={confirmedOrder.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-2xl text-xs font-bold uppercase tracking-wider transition-all shadow-xl flex items-center justify-center gap-2 active:scale-95"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Riapri WhatsApp</span>
                </a>

                <button
                  type="button"
                  onClick={handleClose}
                  className="w-full py-3 bg-stone-100 hover:bg-stone-200 text-stone-700 rounded-2xl text-xs font-bold uppercase tracking-wider transition-colors"
                >
                  Chiudi Carrello
                </button>
              </div>
            </div>
          ) : (
            /* ===================================================================
                CASE B: ACTIVE CART & CHECKOUT FORM
                =================================================================== */
            <>
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

                {/* 1. Biglietto Scritto a Mano (Clean Textarea Only, Zero Ivory Preview) */}
                <div className="bg-white p-4 rounded-2xl border border-stone-200 space-y-2">
                  <label className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-botanical-900">
                    <span className="flex items-center gap-1.5">
                      <span>💌 Biglietto Scritto a Mano</span>
                    </span>
                    <span className="text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200 text-[10px]">
                      Incluso Gratis
                    </span>
                  </label>

                  <textarea
                    rows={2}
                    value={greetingCardText}
                    onChange={(e) => setGreetingCardText(e.target.value)}
                    placeholder="Scrivi qui la tua dedica speciale (opzionale)..."
                    className="w-full p-3 rounded-xl bg-cream border border-stone-200 text-xs focus:outline-none focus:ring-2 focus:ring-botanical-900 resize-none placeholder:text-stone-400"
                  />
                </div>

                {/* 2. Modalità Consegna / Ritiro, Data e Fascia Oraria */}
                <div className="bg-white p-4 rounded-2xl border border-stone-200 space-y-3.5">
                  <p className="text-xs font-bold uppercase tracking-wider text-botanical-900 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-clay" />
                    <span>Data e Modalità di Ricezione</span>
                  </p>

                  <div className="grid grid-cols-2 gap-2.5">
                    <div>
                      <label className="block text-[10px] font-bold uppercase text-stone-500 mb-1">
                        Data
                      </label>
                      <input
                        type="date"
                        value={deliveryDate}
                        onChange={(e) => setDeliveryDate(e.target.value)}
                        className="w-full px-3 py-2 rounded-xl border border-stone-200 text-xs bg-cream focus:outline-none focus:ring-1 focus:ring-botanical-900"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold uppercase text-stone-500 mb-1">
                        Fascia Oraria / Ritiro
                      </label>
                      <select
                        value={timeSlot}
                        onChange={(e) => {
                          const val = e.target.value;
                          setTimeSlot(val);
                          if (val.includes('Ritiro in Bottega')) {
                            setFormErrors((prev) => ({ ...prev, address: false }));
                          }
                        }}
                        className="w-full px-3 py-2 rounded-xl border border-stone-200 text-xs bg-cream focus:outline-none focus:ring-1 focus:ring-botanical-900"
                      >
                        <option value="Mattina (09:00 - 12:30)">Mattina (09:00 - 12:30)</option>
                        <option value="Pomeriggio (14:30 - 18:00)">Pomeriggio (14:30 - 18:00)</option>
                        <option value="Sera (18:00 - 20:00)">Sera (18:00 - 20:00)</option>
                        <option value="Ritiro in Bottega (Gratis)">Ritiro in Bottega (Gratis)</option>
                      </select>
                    </div>
                  </div>

                  {/* Indirizzo di Consegna (Obbligatorio salvo selezione Ritiro in Bottega) */}
                  <div className="space-y-1">
                    <label className="block text-[11px] font-bold uppercase text-stone-700 flex items-center justify-between">
                      <span>
                        {isPickup
                          ? 'Punto di Ritiro Selezionato'
                          : 'Indirizzo di Consegna (Tutta Roma e Provincia) *'}
                      </span>
                      {isPickup && (
                        <span className="text-[10px] text-emerald-700 font-bold flex items-center gap-1">
                          <Store className="w-3 h-3" /> Bottega Tor Lupara
                        </span>
                      )}
                    </label>

                    {isPickup ? (
                      <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-xs text-emerald-950 flex items-center gap-2">
                        <Store className="w-4 h-4 text-emerald-700 shrink-0" />
                        <div>
                          <strong>{siteConfig.contact.address}</strong>
                          <p className="text-[10px] text-emerald-800 mt-0.5">Spedizione azzerata a 0,00 €</p>
                        </div>
                      </div>
                    ) : (
                      <div className="relative">
                        <MapPin className={`w-3.5 h-3.5 absolute left-3 top-3 ${formErrors.address ? 'text-rose-500' : 'text-clay'}`} />
                        <input
                          type="text"
                          value={deliveryAddress}
                          onChange={(e) => {
                            setDeliveryAddress(e.target.value);
                            if (e.target.value.trim()) {
                              setFormErrors((prev) => ({ ...prev, address: false }));
                            }
                          }}
                          placeholder="Es. Via Nomentana 38, Roma..."
                          className={`w-full pl-8 pr-3 py-2.5 rounded-xl border text-xs bg-cream focus:outline-none focus:ring-2 ${
                            formErrors.address
                              ? 'border-rose-400 bg-rose-50/50 ring-1 ring-rose-400'
                              : 'border-stone-200 focus:ring-botanical-900'
                          }`}
                        />
                      </div>
                    )}
                    {formErrors.address && (
                      <p className="text-[10px] text-rose-600 font-semibold">
                        Inserisci l'indirizzo di consegna per recapitare i fiori.
                      </p>
                    )}
                  </div>

                  {/* 3. Dati di Contatto Cliente (Tutti partono rigorosamente VUOTI) */}
                  <div className="space-y-1 pt-1">
                    <label className="block text-[11px] font-bold uppercase text-stone-700">
                      Dati di Contatto del Mittente *
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <input
                          type="text"
                          placeholder="Tuo Nome e Cognome *"
                          value={customerName}
                          onChange={(e) => {
                            setCustomerName(e.target.value);
                            if (e.target.value.trim()) {
                              setFormErrors((prev) => ({ ...prev, name: false }));
                            }
                          }}
                          className={`w-full px-3 py-2.5 rounded-xl border text-xs bg-cream focus:outline-none focus:ring-2 ${
                            formErrors.name
                              ? 'border-rose-400 bg-rose-50/50 ring-1 ring-rose-400'
                              : 'border-stone-200 focus:ring-botanical-900'
                          }`}
                        />
                        {formErrors.name && (
                          <p className="text-[10px] text-rose-600 font-semibold mt-0.5">
                            Nome richiesto
                          </p>
                        )}
                      </div>

                      <div>
                        <input
                          type="tel"
                          placeholder="Cellulare di contatto *"
                          value={customerPhone}
                          onChange={(e) => {
                            setCustomerPhone(e.target.value);
                            if (e.target.value.trim()) {
                              setFormErrors((prev) => ({ ...prev, phone: false }));
                            }
                          }}
                          className={`w-full px-3 py-2.5 rounded-xl border text-xs bg-cream focus:outline-none focus:ring-2 ${
                            formErrors.phone
                              ? 'border-rose-400 bg-rose-50/50 ring-1 ring-rose-400'
                              : 'border-stone-200 focus:ring-botanical-900'
                          }`}
                        />
                        {formErrors.phone && (
                          <p className="text-[10px] text-rose-600 font-semibold mt-0.5">
                            Telefono richiesto
                          </p>
                        )}
                      </div>
                    </div>
                  </div>

                </div>

              </div>

              {/* Footer Totals & Action Button */}
              <div className="p-5 sm:p-6 bg-white border-t border-stone-200 space-y-3">
                
                {/* Error Banner if fields are missing */}
                {errorMessage && (
                  <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-center gap-2 animate-in fade-in">
                    <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="space-y-1.5 text-xs text-stone-600">
                  <div className="flex justify-between">
                    <span>Subtotale Creazioni</span>
                    <span className="font-semibold text-stone-900">{subtotal.toFixed(2)} €</span>
                  </div>
                  <div className="flex justify-between">
                    <span>
                      {isPickup ? 'Ritiro in Bottega a Tor Lupara' : 'Consegna a Domicilio a Roma'}
                    </span>
                    <span className="font-semibold text-stone-900">
                      {shippingFee === 0 ? (
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

                {/* Primary Action Button: "Conferma Ordine" */}
                <button
                  type="button"
                  disabled={items.length === 0 || isSubmitting}
                  onClick={handleConfirmOrder}
                  className="w-full py-4 bg-botanical-950 hover:bg-clay text-white rounded-2xl text-xs font-bold uppercase tracking-widest transition-all shadow-xl active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-2 group"
                >
                  <ShieldCheck className="w-4 h-4 text-petal group-hover:scale-110 transition-transform" />
                  <span>
                    {isSubmitting
                      ? 'Salvataggio & Apertura WhatsApp...'
                      : 'Conferma Ordine (WhatsApp) →'}
                  </span>
                </button>

                <p className="text-[10px] text-stone-400 text-center">
                  Al click l'ordine viene registrato e inviato direttamente alla bottega con messaggio WhatsApp
                </p>

              </div>
            </>
          )}

        </div>
      </aside>
    </div>
  );
};

export default CartDrawer;
