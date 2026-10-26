/**
 * VELORA - Service Layer (Clean Architecture)
 * Decoupled data provider supporting Spring Boot REST API, Supabase, or Mock fallback
 */

import { siteConfig } from '../config/siteConfig';
import { Product, PromoOffer, OrderPayload } from '../types/catalog';

// Initial Catalog Database populated with high-end botanical products
export const INITIAL_PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'Bouquet "Alba Provenzale"',
    slug: 'bouquet-alba-provenzale',
    category: 'bouquet',
    badge: 'Bestseller • Mazzo',
    price: 48,
    originalPrice: 55,
    isPromo: true,
    promoDiscountPct: 12,
    stockQuantity: 14,
    desc: 'Peonie rosa cipria, ranuncoli freschi, rose inglesi David Austin ed eucalipto profumato.',
    longDesc: 'Ogni stelo viene reciso all\'alba e assemblato secondo la tecnica a spirale francese. Il bouquet viaggia avvolto in carta seta idrorepellente con fialetta di riserva d\'acqua alle radici per mantenere la turgidità ottimale fino a destinazione.',
    img: 'https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=800&q=80',
    dimensions: 'Altezza 45cm • Diametro 35cm',
    careInstructions: 'Accorciare i gambi di 1cm in obliquo e cambiare l\'acqua fresca ogni 2 giorni.',
    isFeatured: true,
  },
  {
    id: 'p2',
    name: 'Monstera in Vaso di Terracotta',
    slug: 'monstera-vaso-terracotta',
    category: 'piante',
    badge: 'Vaso Artigianale',
    price: 44,
    originalPrice: 44,
    isPromo: false,
    stockQuantity: 8,
    desc: 'Pianta tropicale purificante h 75cm invasata in terracotta toscana lavorata a mano.',
    longDesc: 'Splendido esemplare di Monstera Deliciosa coltivata biologicamente. Invasata con substrato drenante di perlite e corteccia di pino in autentico coccio toscano traspirante con sottovaso coordinato.',
    img: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=800&q=80',
    dimensions: 'Altezza totale 75cm • Vaso Ø 24cm',
    careInstructions: 'Posizione luminosa senza sole diretto. Bagnare solo a terra asciutta.',
    isFeatured: true,
  },
  {
    id: 'p3',
    name: 'Hat-Box "Velluto Imperiale"',
    slug: 'hat-box-velluto-imperiale',
    category: 'composizioni',
    badge: 'Luxury Box 🔥',
    price: 68,
    originalPrice: 85,
    isPromo: true,
    promoDiscountPct: 20,
    stockQuantity: 5,
    desc: '18 Rose rosse Red Naomi a bocciolo grande in cappelliera rigida avorio con riserva d’acqua.',
    longDesc: 'Un\'icona di eleganza senza tempo. Le leggendarie rose olandesi Red Naomi dal profumo vellutato disposte armoniosamente in cappelliera rigida goffrata con logo VELORA impresso a caldo.',
    img: 'https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?auto=format&fit=crop&w=800&q=80',
    dimensions: 'Diametro 28cm • Altezza 30cm',
    careInstructions: 'Aggiungere mezza tazza d\'acqua al centro della spugna floreale ogni 2 giorni.',
    isFeatured: true,
  },
  {
    id: 'p4',
    name: 'Mazzo "Sole di Campo"',
    slug: 'mazzo-sole-di-campo',
    category: 'bouquet',
    badge: 'Appena Colti',
    price: 39,
    originalPrice: 39,
    isPromo: false,
    stockQuantity: 18,
    desc: 'Tulipani doppi, camomilla selvatica, craspedia dorata e rami di ulivo mediterraneo.',
    longDesc: 'L\'energia luminosa dei prati mediterranei racchiusa in una creazione campestre spontanea e raffinata. Include nastri di lino grezzo naturale.',
    img: 'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=800&q=80',
    dimensions: 'Altezza 40cm • Diametro 30cm',
    careInstructions: 'Tenere lontano da fonti di calore e frutta in maturazione.',
    isFeatured: false,
  },
  {
    id: 'p5',
    name: 'Orchidea Phalaenopsis in Coppa',
    slug: 'orchidea-phalaenopsis-coppa',
    category: 'piante',
    badge: 'Vaso Ceramica',
    price: 56,
    originalPrice: 65,
    isPromo: true,
    promoDiscountPct: 14,
    stockQuantity: 0,
    desc: 'Orchidea bianca a cascata a doppio stelo in vaso di ceramica smaltata verde salvia.',
    longDesc: 'Fiori candidi e duraturi fino a 3 mesi. Piantata con corteccia selezionata in vaso smaltato a mano da mastri ceramisti.',
    img: 'https://images.unsplash.com/photo-1566907225472-514215c9e5cd?auto=format&fit=crop&w=800&q=80',
    dimensions: 'Altezza 60cm • Vaso Ø 18cm',
    careInstructions: 'Immergere il vaso trasparente interno in acqua per 10 minuti a settimana.',
    isFeatured: false,
  },
  {
    id: 'p6',
    name: 'Cuscino Floreale "Candore"',
    slug: 'cuscino-floreale-candore',
    category: 'funebre',
    badge: 'Arte Funebre',
    price: 95,
    originalPrice: 95,
    isPromo: false,
    stockQuantity: 10,
    desc: 'Rose bianche avalanche, lilium orientali candidi, lisianthus e fronde nobili con nastro in oro.',
    longDesc: 'Omaggio di profondo cordoglio e dignità. Realizzato su spugna bagnata ad alta densità per garantire freschezza impeccabile per tutta la durata del rito funebre. Nastro in raso con incisione a caldo in lamina d\'oro incluso.',
    img: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=800&q=80',
    dimensions: 'Lunghezza 65cm • Larghezza 45cm',
    careInstructions: 'Consegna diretta e puntuale curata dal nostro personale in divisa.',
    isFeatured: true,
    isFuneralTribute: true,
  },
  {
    id: 'p7',
    name: 'Corona Solenne "Eternità"',
    slug: 'corona-solenne-eternita',
    category: 'funebre',
    badge: 'Alta Cerimonia',
    price: 165,
    originalPrice: 180,
    isPromo: false,
    stockQuantity: 6,
    desc: 'Grande corona circolare con orchidee bianche, rose crema, ulivo e cavalletto in legno.',
    longDesc: 'Struttura circolare maestosa da cerimonia. Include cavalletto in legno laccato e nastro commemorativo doppio in raso con lettere dorate personalizzate.',
    img: 'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=800&q=80',
    dimensions: 'Diametro corona 80cm • Altezza su cavalletto 160cm',
    isFeatured: false,
    isFuneralTribute: true,
  },
  {
    id: 'p8',
    name: 'Ficus Lyrata Bambino in Cesta',
    slug: 'ficus-lyrata-cesta-juta',
    category: 'piante',
    badge: 'Tendenza Arredo',
    price: 52,
    originalPrice: 52,
    isPromo: false,
    stockQuantity: 7,
    desc: 'Foglie a violino scultoree in coprivaso in fibra naturale di juta intrecciata.',
    longDesc: 'Una delle piante d\'appartamento più eleganti e decorative, perfetta per impreziosire living moderni e studi professionali.',
    img: 'https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&w=800&q=80',
    dimensions: 'Altezza 85cm • Cesta Ø 26cm',
    isFeatured: false,
  },
];

// Promo Offers active today
export const PROMO_OFFERS: PromoOffer[] = [
  {
    id: 'promo-spring-2026',
    title: 'Offerte del Giorno Botaniche',
    subtitle: 'Fino al 20% di sconto sui nostri bestseller stagionali',
    badgeText: 'Offerta Lampo 🔥',
    discountCode: 'BOTANICA20',
    discountPercentage: 20,
    bannerNotice: '⚡ Sconto speciale applicato sulle creazioni selezionate per consegne a Roma e provincia.',
    active: true,
    expiresAt: 'Oggi alle 23:59',
    featuredProductIds: ['p1', 'p3', 'p5'],
  },
];

/**
 * Abstract Catalog API Layer
 */
export const CatalogApi = {
  /**
   * Fetch catalog products with optional filtering
   */
  async getProducts(category?: string): Promise<Product[]> {
    if (!siteConfig.api.useMock) {
      try {
        const url = category && category !== 'all'
          ? `${siteConfig.api.baseUrl}/products?category=${category}`
          : `${siteConfig.api.baseUrl}/products`;
        const res = await fetch(url);
        if (res.ok) {
          return await res.json();
        }
      } catch (err) {
        console.warn('API fetch failed, falling back to local dataset:', err);
      }
    }

    // Local mock behavior
    await new Promise((r) => setTimeout(r, 120));
    if (!category || category === 'all') return INITIAL_PRODUCTS;
    if (category === 'promo') return INITIAL_PRODUCTS.filter((p) => p.isPromo);
    return INITIAL_PRODUCTS.filter((p) => p.category === category);
  },

  /**
   * Fetch active promo offers
   */
  async getActivePromos(): Promise<PromoOffer[]> {
    if (!siteConfig.api.useMock) {
      try {
        const res = await fetch(`${siteConfig.api.baseUrl}/promos/active`);
        if (res.ok) return await res.json();
      } catch (err) {
        console.warn('Promos API failed, falling back:', err);
      }
    }
    return PROMO_OFFERS.filter((p) => p.active);
  },

  /**
   * Submit Order to Backend or Generate WhatsApp direct link
   */
  async submitOrder(order: OrderPayload): Promise<{ success: boolean; orderId: string; message: string }> {
    const orderId = `VEL-${Date.now().toString(36).toUpperCase()}`;

    if (!siteConfig.api.useMock) {
      try {
        const res = await fetch(`${siteConfig.api.baseUrl}/orders`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ ...order, orderId }),
        });
        if (res.ok) {
          return { success: true, orderId, message: 'Ordine inviato con successo al server.' };
        }
      } catch (err) {
        console.warn('Backend order submission error, fallback to client confirmation:', err);
      }
    }

    // Mock processing delay
    await new Promise((r) => setTimeout(r, 600));
    return {
      success: true,
      orderId,
      message: 'Ordine confermato con successo da VELORA Atelier Botanico!',
    };
  },

  /**
   * Generates a beautifully formatted WhatsApp text and opens chat with the store
   */
  generateWhatsAppOrderUrl(order: OrderPayload): string {
    const itemsList = order.items
      .map((it) => `• *${it.quantity}x ${it.name}* (${(it.price * it.quantity).toFixed(2)}€)\n  _${it.meta}_`)
      .join('\n');

    const msg = `🌿 *NUOVO ORDINE VELORA - Atelier Botanico*\n` +
      `--------------------------------\n` +
      `📦 *Articoli ordinati:*\n${itemsList}\n\n` +
      `💌 *Biglietto a mano:* "${order.greetingCardText || 'Nessun messaggio'}"\n` +
      `📍 *Indirizzo:* ${order.customer.deliveryAddress || 'Ritiro in bottega'}\n` +
      `📅 *Data e Orario:* ${order.customer.deliveryDate} (${order.customer.timeSlot})\n` +
      `--------------------------------\n` +
      `💰 *Subtotale:* ${order.subtotal.toFixed(2)} €\n` +
      `🚚 *Consegna a Roma:* ${order.shippingFee === 0 ? 'GRATIS' : `${order.shippingFee.toFixed(2)} €`}\n` +
      `✨ *TOTALE:* ${order.total.toFixed(2)} €\n` +
      `--------------------------------\n` +
      `👤 *Cliente:* ${order.customer.fullName || 'Cliente VELORA'}\n` +
      `📞 *Telefono:* ${order.customer.phone || 'Non indicato'}`;

    return `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(msg)}`;
  },
};
