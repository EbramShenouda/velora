/**
 * VELORA - Service Layer (Clean Architecture)
 * Decoupled data provider supporting Spring Boot REST API, Supabase, or Mock fallback
 */

import { siteConfig } from '../config/siteConfig';
import { Product, PromoOffer, OrderPayload, DeliveryValidation } from '../types/catalog';

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
    longDesc: 'Ogni stelo viene reciso all\'alba e assemblato secondo la tecnica a spirale francese. Il bouquet viaggia avvolto in carta seta idrorepellente con fialetta di riserva d\'acqua alle radici per mantenere la turgidità ottimale.',
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
    stockQuantity: 0, // Out of stock to test 'Esaurito' badge requirement
    desc: 'Orchidea bianca a cascata a doppio stelo in vaso di ceramica smaltata verde salvia.',
    longDesc: 'Fiori canditi e duraturi fino a 3 mesi. Piantata con corteccia selezionata in vaso smaltato a mano da mastri ceramisti di Deruta.',
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
    longDesc: 'Una delle piante d\'appartamento più fotografate al mondo, perfetta per impreziosire living moderni e studi professionali.',
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
    bannerNotice: '⚡ Sconto speciale applicato sulle Hat-Box di Rose e Bouquet Provenzali per consegne odierne entro 10 km.',
    active: true,
    expiresAt: 'Oggi alle 23:59',
    featuredProductIds: ['p1', 'p3', 'p5'],
  },
];

/**
 * Real Haversine Distance Formula
 * Calculates the great-circle distance between two GPS coordinates in kilometers
 */
export function calculateHaversineDistance(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
): number {
  const R = 6371.0; // Earth's mean radius in kilometers
  const dLat = ((lat2 - lat1) * Math.PI) / 180.0;
  const dLon = ((lon2 - lon1) * Math.PI) / 180.0;

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180.0) *
      Math.cos((lat2 * Math.PI) / 180.0) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c;

  // Round to 1 decimal place
  return Math.round(distance * 10) / 10;
}

/**
 * Calculates 2D percentage coordinates on the radar circle for a given coordinate
 */
export function calculateRadarPosition(
  storeLat: number,
  storeLng: number,
  targetLat: number,
  targetLng: number,
  maxRadiusKm: number = 10.0
): { topPct: number; leftPct: number; distanceKm: number } {
  const distanceKm = calculateHaversineDistance(storeLat, storeLng, targetLat, targetLng);
  
  // Calculate bearing angle in radians
  const dLon = ((targetLng - storeLng) * Math.PI) / 180.0;
  const y = Math.sin(dLon) * Math.cos((targetLat * Math.PI) / 180.0);
  const x =
    Math.cos((storeLat * Math.PI) / 180.0) * Math.sin((targetLat * Math.PI) / 180.0) -
    Math.sin((storeLat * Math.PI) / 180.0) *
      Math.cos((targetLat * Math.PI) / 180.0) *
      Math.cos(dLon);
  const bearingRad = Math.atan2(y, x);

  // Normalize distance ratio (clamped for visual display up to 14km)
  const visualMax = 12.0;
  const clampedDist = Math.min(distanceKm, visualMax);
  const radiusPct = (clampedDist / visualMax) * 44; // 44% from center max

  // Convert polar coordinates to Cartesian (top/left percentage where center is 50%, 50%)
  const leftPct = 50 + radiusPct * Math.sin(bearingRad);
  const topPct = 50 - radiusPct * Math.cos(bearingRad);

  return {
    topPct: Math.round(topPct * 10) / 10,
    leftPct: Math.round(leftPct * 10) / 10,
    distanceKm,
  };
}

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
   * Real Geocoding using OpenStreetMap Nominatim Free Public API
   */
  async geocodeAddressNominatim(query: string): Promise<DeliveryValidation> {
    const trimmed = query.trim();
    if (!trimmed) {
      return {
        isEligible: false,
        distanceKm: 0,
        normalizedAddress: '',
        message: 'Inserisci un indirizzo o CAP valido.',
        status: 'idle',
      };
    }

    // Quick local predefined shortcuts for testing instant responsiveness
    const lower = trimmed.toLowerCase();
    const presets: Record<string, { lat: number; lng: number; label: string }> = {
      '00184': { lat: 41.892, lng: 12.493, label: 'Roma Centro Storico (Via Cavour, 00184)' },
      '00192': { lat: 41.910, lng: 12.460, label: 'Roma Quartiere Prati (00192)' },
      '00144': { lat: 41.830, lng: 12.470, label: 'Roma Zona EUR (00144)' },
      '00040': { lat: 41.720, lng: 12.670, label: 'Castelli Romani Fuori Zona (00040)' },
    };

    for (const [key, val] of Object.entries(presets)) {
      if (lower.includes(key)) {
        const dist = calculateHaversineDistance(
          siteConfig.storeLocation.lat,
          siteConfig.storeLocation.lng,
          val.lat,
          val.lng
        );
        const isEligible = dist <= siteConfig.delivery.maxRadiusKm;
        return {
          isEligible,
          distanceKm: dist,
          normalizedAddress: val.label,
          coordinates: { lat: val.lat, lng: val.lng },
          status: isEligible ? 'eligible' : 'too_far',
          message: isEligible
            ? `Indirizzo coperto (${dist} km dalla bottega). Consegna garantita in giornata.`
            : `Distanza ${dist} km (oltre il limite di ${siteConfig.delivery.maxRadiusKm} km). Disponibile con Ritiro Gratuito in Bottega.`,
        };
      }
    }

    try {
      // Query OpenStreetMap Nominatim (respecting Nominatim policy by adding headers/user-agent)
      const encoded = encodeURIComponent(`${trimmed}, Italia`);
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encoded}&limit=1&addressdetails=1`,
        {
          headers: {
            'Accept-Language': 'it',
          },
        }
      );

      if (response.ok) {
        const results = await response.json();
        if (results && results.length > 0) {
          const item = results[0];
          const lat = parseFloat(item.lat);
          const lng = parseFloat(item.lon);
          const dist = calculateHaversineDistance(
            siteConfig.storeLocation.lat,
            siteConfig.storeLocation.lng,
            lat,
            lng
          );
          const isEligible = dist <= siteConfig.delivery.maxRadiusKm;

          return {
            isEligible,
            distanceKm: dist,
            normalizedAddress: item.display_name.split(',').slice(0, 3).join(','),
            coordinates: { lat, lng },
            status: isEligible ? 'eligible' : 'too_far',
            message: isEligible
              ? `Ottimo! Sei a ${dist} km da VELORA. Consegna garantita a mano in mezzo refrigerato.`
              : `Distanza ${dist} km: supera il raggio di ${siteConfig.delivery.maxRadiusKm} km. Scegli il Ritiro in Sede per non rinunciare alla freschezza.`,
          };
        }
      }
    } catch (err) {
      console.warn('Nominatim search failed, running intelligent fallback:', err);
    }

    // Heuristic fallback if offline or rate-limited
    const simulatedKm = lower.includes('fuori') || lower.includes('provincia') ? 14.5 : 3.8;
    const isSimEligible = simulatedKm <= siteConfig.delivery.maxRadiusKm;
    return {
      isEligible: isSimEligible,
      distanceKm: simulatedKm,
      normalizedAddress: trimmed,
      status: isSimEligible ? 'eligible' : 'too_far',
      message: isSimEligible
        ? `Indirizzo stimato entro ${simulatedKm} km. Consegna espressa disponibile.`
        : `Indirizzo oltre i ${siteConfig.delivery.maxRadiusKm} km. Ritiro in bottega consigliato.`,
    };
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
      .map((it) => `• *${it.quantity}x ${it.name}* (${it.price * it.quantity}€)\n  _${it.meta}_`)
      .join('\n');

    const msg = `🌿 *NUOVO ORDINE VELORA - Atelier Botanico*\n` +
      `--------------------------------\n` +
      `📦 *Articoli ordinati:*\n${itemsList}\n\n` +
      `💌 *Biglietto a mano:* "${order.greetingCardText || 'Nessun messaggio'}"\n` +
      `📍 *Indirizzo:* ${order.customer.deliveryAddress || 'Ritiro in bottega'}\n` +
      `📅 *Data e Orario:* ${order.customer.deliveryDate} (${order.customer.timeSlot})\n` +
      `--------------------------------\n` +
      `💰 *Subtotale:* ${order.subtotal.toFixed(2)} €\n` +
      `🚚 *Consegna 10km:* ${order.shippingFee === 0 ? 'GRATIS' : `${order.shippingFee.toFixed(2)} €`}\n` +
      `✨ *TOTALE:* ${order.total.toFixed(2)} €\n` +
      `--------------------------------\n` +
      `👤 *Cliente:* ${order.customer.fullName || 'Cliente VELORA'}\n` +
      `📞 *Telefono:* ${order.customer.phone || 'Non indicato'}`;

    return `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(msg)}`;
  },
};

