/**
 * VELORA - Service Layer (Clean Architecture)
 * Pure REST API client connected exclusively to Spring Boot + MongoDB on Render
 * (${import.meta.env.VITE_API_URL}/api/...).
 * Zero localStorage fallback or hardcoded demo products for catalog persistence.
 */

import { siteConfig } from '../config/siteConfig';
import { Product, PromoOffer, OrderPayload, CustomerOrder, StoreSettings, EditorialSoul } from '../types/catalog';

// Normalize base host URL so ${API_ORIGIN}/api/... is always clean even if VITE_API_URL has a trailing slash or /api
const rawEnvApiUrl = (
  import.meta.env.VITE_API_URL ||
  import.meta.env.VITE_API_BASE_URL ||
  'https://velora-jsf6.onrender.com'
)
  .trim()
  .replace(/\/+$/, '');

export const API_ORIGIN = rawEnvApiUrl.endsWith('/api')
  ? rawEnvApiUrl.slice(0, -4)
  : rawEnvApiUrl;

export const API_BASE_URL = `${API_ORIGIN}/api`;

// Empty initial array: all catalog products come exclusively from MongoDB
export const INITIAL_PRODUCTS: Product[] = [];

export const PROMO_OFFERS: PromoOffer[] = [];

const TOKEN_KEY = 'velora_jwt_token';
const ADMIN_CREDS_KEY = 'velora_admin_creds_v1';

// Purge any legacy localStorage catalog keys from older builds
try {
  localStorage.removeItem('velora_custom_products_v1');
  localStorage.removeItem('velora_custom_products_v2');
} catch {
  // Ignore storage access errors in private mode
}

/**
 * Helper to normalize a product returned from MongoDB so both `img` and `imageUrl` are populated.
 */
function normalizeProduct(p: Product): Product {
  const finalImg = p.imageUrl || p.img || '';
  return {
    ...p,
    img: finalImg,
    imageUrl: finalImg,
    isFuneralTribute: p.category === 'funebre' || !!p.isFuneralTribute,
  };
}

/**
 * Ensures a valid JWT token is available for protected /api/admin/** endpoints.
 */
export async function ensureAdminJwtToken(forceRefresh = false): Promise<string | null> {
  let token = localStorage.getItem(TOKEN_KEY);
  if (token && token.startsWith('mock.')) {
    localStorage.removeItem(TOKEN_KEY);
    token = null;
  }

  if (!forceRefresh && token) {
    return token;
  }

  try {
    const savedCredsStr = localStorage.getItem(ADMIN_CREDS_KEY);
    if (!savedCredsStr) return token;
    const creds = JSON.parse(savedCredsStr);
    if (!creds?.username || !creds?.password) return token;

    const res = await fetch(`${API_BASE_URL}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: creds.username, password: creds.password }),
    });

    if (res.ok) {
      const data = await res.json();
      const freshJwt = data.token || data.accessToken;
      if (freshJwt) {
        localStorage.setItem(TOKEN_KEY, freshJwt);
        return freshJwt;
      }
    }
  } catch (err) {
    console.warn('Could not refresh admin JWT token:', err);
  }

  return token;
}

/**
 * Performs an authenticated admin request to ${import.meta.env.VITE_API_URL}/api/admin/...
 * Automatically attaches Authorization: Bearer <token> and retries once if token expired.
 */
export async function adminFetch(endpoint: string, options: RequestInit = {}): Promise<Response> {
  let token = await ensureAdminJwtToken(false);
  const cleanEndpoint = endpoint.startsWith('/') ? endpoint : `/${endpoint}`;
  const url = `${API_BASE_URL}${cleanEndpoint}`;

  const buildHeaders = (jwt: string | null): HeadersInit => ({
    ...(options.headers || {}),
    ...(jwt ? { Authorization: `Bearer ${jwt}` } : {}),
  });

  let res = await fetch(url, {
    ...options,
    headers: buildHeaders(token),
  });

  if (res.status === 401 || res.status === 403) {
    token = await ensureAdminJwtToken(true);
    if (token) {
      res = await fetch(url, {
        ...options,
        headers: buildHeaders(token),
      });
    }
  }

  return res;
}

// ============================================================================
// CORE CATALOG CRUD OPERATIONS (Exclusively via ${VITE_API_URL}/api/...)
// ============================================================================

/**
 * GET with automatic retry, so Render free-tier cold starts (up to ~1 minute) resolve
 * while the UI keeps showing its loading state instead of an error.
 */
async function fetchJsonWithRetry<T>(url: string, errorLabel: string, maxAttempts = 8): Promise<T> {
  let lastError: Error | null = null;

  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      const res = await fetch(url, {
        method: 'GET',
        cache: 'no-store',
        headers: { Accept: 'application/json' },
      });

      if (!res.ok) {
        throw new Error(`Errore server (${res.status}) nel caricamento di ${errorLabel}.`);
      }

      return (await res.json()) as T;
    } catch (err: any) {
      lastError = err instanceof Error ? err : new Error('Errore di rete');
      if (attempt < maxAttempts) {
        await new Promise((r) => setTimeout(r, Math.min(2000 * attempt, 8000)));
      }
    }
  }

  throw new Error(
    lastError?.message ||
      'Il server su Render si sta avviando (cold start) o non è raggiungibile. Riprova tra qualche secondo.'
  );
}

/**
 * GET ${import.meta.env.VITE_API_URL}/api/products
 */
export async function fetchProducts(category?: string): Promise<Product[]> {
  const url =
    category && category !== 'all'
      ? `${API_BASE_URL}/products?category=${encodeURIComponent(category)}`
      : `${API_BASE_URL}/products`;

  const data = await fetchJsonWithRetry<unknown>(url, 'del catalogo');
  if (!Array.isArray(data)) {
    throw new Error('Formato risposta catalogo non valido dal server.');
  }
  return (data as Product[]).map(normalizeProduct);
}

/**
 * GET ${import.meta.env.VITE_API_URL}/api/souls - "Le Quattro Anime" cards stored on MongoDB
 */
export async function fetchSouls(): Promise<EditorialSoul[]> {
  const data = await fetchJsonWithRetry<unknown>(`${API_BASE_URL}/souls`, 'delle Quattro Anime');
  if (!Array.isArray(data)) {
    throw new Error('Formato risposta Quattro Anime non valido dal server.');
  }
  return (data as EditorialSoul[]).sort((a, b) => a.orderIndex - b.orderIndex);
}

/**
 * PUT ${import.meta.env.VITE_API_URL}/api/admin/souls/${id}
 */
export async function updateSoul(soul: EditorialSoul): Promise<EditorialSoul> {
  const res = await adminFetch(`/admin/souls/${encodeURIComponent(soul.id)}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(soul),
  });

  if (!res.ok) {
    const errBody = await res.json().catch(() => ({}));
    throw new Error(
      errBody.message ||
        `Impossibile salvare la card su MongoDB (HTTP ${res.status}). Verifica di aver effettuato l'accesso come Admin.`
    );
  }

  return (await res.json()) as EditorialSoul;
}


/**
 * POST ${import.meta.env.VITE_API_URL}/api/admin/products
 */
export async function createProduct(newProdData: Omit<Product, 'id'>): Promise<Product> {
  const id = `p-${Date.now()}`;
  const finalImg = newProdData.imageUrl || newProdData.img || '';
  const payload: Product = {
    ...newProdData,
    id,
    slug: newProdData.slug || newProdData.name.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
    img: finalImg,
    imageUrl: finalImg,
    isFuneralTribute: newProdData.category === 'funebre' || !!newProdData.isFuneralTribute,
  };

  const res = await adminFetch('/admin/products', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const errBody = await res.json().catch(() => ({}));
    throw new Error(
      errBody.message ||
        `Impossibile salvare il prodotto su MongoDB (HTTP ${res.status}). Verifica di aver effettuato l'accesso come Admin.`
    );
  }

  const saved: Product = await res.json();
  return normalizeProduct({ ...payload, ...saved });
}

/**
 * PUT ${import.meta.env.VITE_API_URL}/api/admin/products/${id}
 */
export async function updateProduct(id: string, updatedProduct: Product): Promise<Product> {
  const finalImg = updatedProduct.imageUrl || updatedProduct.img || '';
  const payload: Product = {
    ...updatedProduct,
    id,
    img: finalImg,
    imageUrl: finalImg,
    isFuneralTribute:
      updatedProduct.category === 'funebre' || !!updatedProduct.isFuneralTribute,
  };

  const res = await adminFetch(`/admin/products/${encodeURIComponent(id)}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const errBody = await res.json().catch(() => ({}));
    throw new Error(
      errBody.message ||
        `Impossibile aggiornare il prodotto su MongoDB (HTTP ${res.status}).`
    );
  }

  const saved: Product = await res.json();
  return normalizeProduct({ ...payload, ...saved });
}

/**
 * DELETE ${import.meta.env.VITE_API_URL}/api/admin/products/${id}
 */
export async function deleteProduct(id: string): Promise<boolean> {
  const res = await adminFetch(`/admin/products/${encodeURIComponent(id)}`, {
    method: 'DELETE',
  });

  if (!res.ok) {
    const errBody = await res.json().catch(() => ({}));
    throw new Error(
      errBody.message ||
        `Impossibile eliminare il prodotto da MongoDB (HTTP ${res.status}).`
    );
  }

  return true;
}

/**
 * Service Layer Facade
 */
export const CatalogApi = {
  getProducts: fetchProducts,
  fetchProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  fetchSouls,
  updateSoul,

  async getActivePromos(): Promise<PromoOffer[]> {
    return PROMO_OFFERS;
  },

  /**
   * POST ${import.meta.env.VITE_API_URL}/api/orders
   */
  async submitOrder(order: OrderPayload): Promise<{ success: boolean; orderId: string; message: string }> {
    const orderId = order.orderId || `VEL-${Math.floor(1000 + Math.random() * 9000)}`;
    const fullOrder: CustomerOrder = {
      ...order,
      orderId,
      status: 'CONFIRMED',
      createdAt: order.createdAt || new Date().toISOString(),
    };

    const res = await fetch(`${API_BASE_URL}/orders`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(fullOrder),
    });

    if (!res.ok) {
      throw new Error(`Errore durante il salvataggio dell'ordine sul server (${res.status}).`);
    }

    const data = await res.json().catch(() => ({}));
    return {
      success: true,
      orderId: data.orderId || orderId,
      message: data.message || 'Ordine registrato con successo nel database MongoDB.',
    };
  },

  /**
   * GET ${import.meta.env.VITE_API_URL}/api/admin/orders
   */
  async getOrders(): Promise<CustomerOrder[]> {
    const res = await adminFetch('/admin/orders', { cache: 'no-store' });
    if (!res.ok) {
      throw new Error(`Impossibile caricare gli ordini dal server (${res.status}).`);
    }
    return await res.json();
  },

  /**
   * PATCH ${import.meta.env.VITE_API_URL}/api/admin/orders/${orderId}/status
   */
  async updateOrderStatus(orderId: string, status: CustomerOrder['status']): Promise<boolean> {
    const res = await adminFetch(`/admin/orders/${encodeURIComponent(orderId)}/status`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status }),
    });
    return res.ok;
  },

  /**
   * GET ${import.meta.env.VITE_API_URL}/api/settings
   */
  async getSettings(): Promise<Partial<StoreSettings> | null> {
    const res = await fetch(`${API_BASE_URL}/settings`, { cache: 'no-store' });
    if (res.ok) {
      return await res.json();
    }
    return null;
  },

  /**
   * PUT ${import.meta.env.VITE_API_URL}/api/admin/settings
   */
  async updateSettings(settings: Partial<StoreSettings>): Promise<boolean> {
    const res = await adminFetch('/admin/settings', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(settings),
    });
    if (!res.ok) {
      throw new Error(`Impossibile salvare le impostazioni su MongoDB (${res.status}).`);
    }
    return true;
  },

  /**
   * Generates a formatted WhatsApp message URL for the store
   */
  generateWhatsAppOrderUrl(order: OrderPayload): string {
    const itemsList = order.items
      .map((it) => `• *${it.quantity}x ${it.name}* (${(it.price * it.quantity).toFixed(2)}€)\n  _${it.meta}_`)
      .join('\n');

    const msg =
      `🌿 *NUOVO ORDINE VELORA - Atelier Botanico*\n` +
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
