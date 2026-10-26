/**
 * VELORA - Global Site & Store Configuration
 * Centralized, immutable configuration loaded dynamically from environment variables
 */

export interface SiteConfig {
  brand: {
    name: string;
    tagline: string;
    subtitle: string;
  };
  contact: {
    address: string;
    phone: string;
    phoneDisplay: string;
    whatsapp: string;
    whatsappDirectUrl: string;
    email: string;
    operatingHours: string;
    openingDays: string;
  };
  storeLocation: {
    mapsQuery: string;
    /** Opens the store on Google Maps */
    googleMapsUrl: string;
    /** Starts turn-by-turn navigation to the store (opens the Maps app on Android/iOS) */
    directionsUrl: string;
    /** Embeddable map (no API key required) */
    embedUrl: string;
  };
  delivery: {
    area: string;
    freeShippingThreshold: number;
    standardShippingFee: number;
  };
  api: {
    baseUrl: string;
    useMock: boolean;
  };
}

const parseEnvNumber = (val: string | undefined, fallback: number): number => {
  if (!val) return fallback;
  const parsed = parseFloat(val);
  return isNaN(parsed) ? fallback : parsed;
};

const storeAddress = import.meta.env.VITE_STORE_ADDRESS || 'Via Nomentana 38, 00013 Tor Lupara (RM)';
const mapsQuery =
  import.meta.env.VITE_STORE_MAPS_QUERY || 'Via Nomentana 38, 00013 Tor Lupara, Fonte Nuova RM';
const encodedQuery = encodeURIComponent(mapsQuery);
const whatsappNumber = (import.meta.env.VITE_STORE_WHATSAPP || '+393401234567').replace(/[^0-9]/g, '');

export const siteConfig: SiteConfig = {
  brand: {
    name: import.meta.env.VITE_BRAND_NAME || 'VELORA',
    tagline: import.meta.env.VITE_BRAND_TAGLINE || 'Atelier Botanico',
    subtitle: 'Fiori freschi, piante e composizioni d’autore',
  },
  contact: {
    address: storeAddress,
    phone: (import.meta.env.VITE_STORE_PHONE || '+39 06 555 8921').replace(/\s+/g, ''),
    phoneDisplay: import.meta.env.VITE_STORE_PHONE || '06 555 8921',
    whatsapp: whatsappNumber,
    whatsappDirectUrl: `https://wa.me/${whatsappNumber}`,
    email: import.meta.env.VITE_STORE_EMAIL || 'atelier@velora-botanico.it',
    operatingHours: '08:30 - 20:00',
    openingDays: 'Aperto 7 giorni su 7',
  },
  storeLocation: {
    mapsQuery,
    googleMapsUrl: `https://www.google.com/maps/search/?api=1&query=${encodedQuery}`,
    directionsUrl: `https://www.google.com/maps/dir/?api=1&destination=${encodedQuery}&travelmode=driving`,
    embedUrl: `https://maps.google.com/maps?q=${encodedQuery}&z=16&output=embed`,
  },
  delivery: {
    area: import.meta.env.VITE_DELIVERY_AREA || 'tutta Roma',
    freeShippingThreshold: parseEnvNumber(import.meta.env.VITE_FREE_SHIPPING_THRESHOLD, 50.0),
    standardShippingFee: parseEnvNumber(import.meta.env.VITE_STANDARD_DELIVERY_FEE, 5.0),
  },
  api: {
    baseUrl: import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080/api',
    useMock: import.meta.env.VITE_USE_MOCK_API !== 'false',
  },
};
