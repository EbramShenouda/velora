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
    lat: number;
    lng: number;
    googleMapsUrl: string;
  };
  delivery: {
    maxRadiusKm: number;
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

const storeLat = parseEnvNumber(import.meta.env.VITE_STORE_LAT, 41.8902);
const storeLng = parseEnvNumber(import.meta.env.VITE_STORE_LNG, 12.4922);
const whatsappNumber = (import.meta.env.VITE_STORE_WHATSAPP || '+393401234567').replace(/[^0-9]/g, '');

export const siteConfig: SiteConfig = {
  brand: {
    name: import.meta.env.VITE_BRAND_NAME || 'VELORA',
    tagline: import.meta.env.VITE_BRAND_TAGLINE || 'Atelier Botanico • Raggio 10 KM',
    subtitle: 'Luxury Floral Design & Consegna Sartoriale di Prossimità',
  },
  contact: {
    address: import.meta.env.VITE_STORE_ADDRESS || 'Via delle Camelie 18, 00184 Roma',
    phone: (import.meta.env.VITE_STORE_PHONE || '+39 06 555 8921').replace(/\s+/g, ''),
    phoneDisplay: import.meta.env.VITE_STORE_PHONE || '06 555 8921',
    whatsapp: whatsappNumber,
    whatsappDirectUrl: `https://wa.me/${whatsappNumber}`,
    email: import.meta.env.VITE_STORE_EMAIL || 'atelier@velora-botanico.it',
    operatingHours: '08:30 - 20:00',
    openingDays: 'Aperto 7 giorni su 7 con consegne in giornata',
  },
  storeLocation: {
    lat: storeLat,
    lng: storeLng,
    googleMapsUrl:
      import.meta.env.VITE_GOOGLE_MAPS_URL ||
      `https://www.google.com/maps/search/?api=1&query=${storeLat},${storeLng}`,
  },
  delivery: {
    maxRadiusKm: parseEnvNumber(import.meta.env.VITE_MAX_DELIVERY_RADIUS_KM, 10.0),
    freeShippingThreshold: parseEnvNumber(import.meta.env.VITE_FREE_SHIPPING_THRESHOLD, 50.0),
    standardShippingFee: parseEnvNumber(import.meta.env.VITE_STANDARD_DELIVERY_FEE, 5.0),
  },
  api: {
    baseUrl: import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080/api/v1',
    useMock: import.meta.env.VITE_USE_MOCK_API !== 'false',
  },
};

