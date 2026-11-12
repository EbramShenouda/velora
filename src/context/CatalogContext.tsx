/**
 * VELORA - CatalogContext
 * State management for Products, Filters, Promos, Dynamic Announcement Bar, and 3D Visual Mood.
 * Connected exclusively to Spring Boot + MongoDB (${import.meta.env.VITE_API_URL}/api/...).
 * Zero localStorage fallback for catalog products.
 */

import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  Product,
  PromoOffer,
  CategoryId,
  AnnouncementConfig,
  DeliverySettings,
  CustomerOrder,
} from '../types/catalog';
import {
  CatalogApi,
  PROMO_OFFERS,
  fetchProducts,
  createProduct as apiCreateProduct,
  updateProduct as apiUpdateProduct,
  deleteProduct as apiDeleteProduct,
} from '../services/api';
import { siteConfig } from '../config/siteConfig';

interface CatalogContextType {
  products: Product[];
  allProducts: Product[];
  isLoading: boolean;
  catalogError: string | null;
  activeCategory: CategoryId;
  promoOffers: PromoOffer[];
  activePromo: PromoOffer | null;
  isSolemnMode: boolean; // Triggers solemn silver light on 3D flower in Arte Funebre
  announcement: AnnouncementConfig;
  deliverySettings: DeliverySettings;
  orders: CustomerOrder[];
  setActiveCategory: (cat: CategoryId) => void;
  setIsSolemnMode: (mode: boolean) => void;
  filterByCategory: (cat: CategoryId) => void;
  getProductById: (id: string) => Product | undefined;
  refreshCatalog: () => Promise<void>;
  refreshOrders: () => Promise<void>;
  // CRUD actions for Admin (persisted exclusively on MongoDB)
  addProduct: (product: Omit<Product, 'id'>) => Promise<Product>;
  updateProduct: (id: string, updates: Partial<Product>) => Promise<Product>;
  deleteProduct: (id: string) => Promise<boolean>;
  toggleStock: (id: string) => Promise<void>;
  toggleOffer: (
    id: string,
    isPromo: boolean,
    discountPrice?: number,
    discountPct?: number
  ) => Promise<void>;
  updateAnnouncement: (config: Partial<AnnouncementConfig>) => void;
  updateDeliverySettings: (settings: Partial<DeliverySettings>) => Promise<void>;
  updateOrderStatus: (orderId: string, status: CustomerOrder['status']) => Promise<void>;
}

const CatalogContext = createContext<CatalogContextType | undefined>(undefined);

const DEFAULT_ANNOUNCEMENT: AnnouncementConfig = {
  message: 'Consegna espressa a mano garantita in tutta Roma dalla nostra bottega',
  badge: `${siteConfig.brand.name}:`,
  secondaryNotice: `🚚 Consegna climatizzata in tutta Roma • 💌 Biglietto a mano incluso`,
  active: true,
  specialEvent: 'standard',
};

export const CatalogProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Strictly empty until loaded from MongoDB backend — zero localStorage or mock products
  const [products, setProducts] = useState<Product[]>([]);
  const [promoOffers] = useState<PromoOffer[]>(PROMO_OFFERS);
  const [activeCategory, setActiveCategory] = useState<CategoryId>('all');
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [catalogError, setCatalogError] = useState<string | null>(null);
  const [isSolemnMode, setIsSolemnMode] = useState<boolean>(false);

  const [announcement, setAnnouncement] = useState<AnnouncementConfig>(DEFAULT_ANNOUNCEMENT);

  const [deliverySettings, setDeliverySettings] = useState<DeliverySettings>({
    standardShippingFee: siteConfig.delivery.standardShippingFee || 5.0,
    freeShippingEnabled: false,
    freeShippingThreshold: siteConfig.delivery.freeShippingThreshold || 50.0,
    deliveryArea: siteConfig.delivery.area || 'tutta Roma',
  });

  const [orders, setOrders] = useState<CustomerOrder[]>([]);

  // Initial data synchronization with backend MongoDB on app startup
  useEffect(() => {
    refreshCatalog();
  }, []);

  const refreshOrders = async () => {
    try {
      const list = await CatalogApi.getOrders();
      if (Array.isArray(list)) {
        setOrders(list);
      }
    } catch (err) {
      console.warn('Failed to refresh orders from MongoDB:', err);
    }
  };

  const updateDeliverySettings = async (settings: Partial<DeliverySettings>) => {
    const next: DeliverySettings = {
      ...deliverySettings,
      ...settings,
    };

    await CatalogApi.updateSettings({
      standardDeliveryFee: next.standardShippingFee,
      standardShippingFee: next.standardShippingFee,
      freeShippingEnabled: next.freeShippingEnabled,
      freeShippingThreshold: next.freeShippingThreshold,
      deliveryArea: next.deliveryArea,
    });

    setDeliverySettings(next);
  };

  const updateOrderStatus = async (orderId: string, status: CustomerOrder['status']) => {
    await CatalogApi.updateOrderStatus(orderId, status);
    setOrders((prev) => prev.map((o) => (o.orderId === orderId ? { ...o, status } : o)));
  };

  const refreshCatalog = async () => {
    setIsLoading(true);
    setCatalogError(null);
    try {
      const [prods, remoteSettings] = await Promise.all([
        fetchProducts('all'),
        CatalogApi.getSettings().catch(() => null),
      ]);

      setProducts(prods);

      if (remoteSettings) {
        if (remoteSettings.announcement) {
          setAnnouncement((prev) => ({ ...prev, ...remoteSettings.announcement }));
        }
        const remoteFee =
          (remoteSettings as any).standardDeliveryFee ?? remoteSettings.standardShippingFee;
        if (remoteFee !== undefined || remoteSettings.freeShippingThreshold !== undefined) {
          setDeliverySettings((prev) => ({
            ...prev,
            standardShippingFee: remoteFee ?? prev.standardShippingFee,
            freeShippingEnabled: remoteSettings.freeShippingEnabled ?? prev.freeShippingEnabled,
            freeShippingThreshold:
              remoteSettings.freeShippingThreshold ?? prev.freeShippingThreshold,
            deliveryArea: remoteSettings.deliveryArea ?? prev.deliveryArea,
          }));
        }
      }
    } catch (err: any) {
      console.error('Error fetching catalog from MongoDB backend:', err);
      setCatalogError(
        err?.message ||
          'Il server su Render si sta avviando (cold start) o non è raggiungibile. Riprova tra qualche secondo.'
      );
    } finally {
      setIsLoading(false);
    }
  };

  const filterByCategory = (cat: CategoryId) => {
    setActiveCategory(cat);
  };

  const getProductById = (id: string) => {
    return products.find((p) => p.id === id);
  };

  // CRUD Functions - Strictly persisted on MongoDB before updating state
  const addProduct = async (newProdData: Omit<Product, 'id'>): Promise<Product> => {
    setCatalogError(null);
    const savedProduct = await apiCreateProduct(newProdData);
    setProducts((prev) => [savedProduct, ...prev]);
    return savedProduct;
  };

  const updateProduct = async (id: string, updates: Partial<Product>): Promise<Product> => {
    setCatalogError(null);
    const existing = products.find((p) => p.id === id);
    if (!existing) {
      throw new Error('Prodotto non trovato nel catalogo.');
    }

    const finalImg =
      updates.imageUrl !== undefined
        ? updates.imageUrl
        : updates.img !== undefined
        ? updates.img
        : existing.imageUrl || existing.img;

    const merged: Product = {
      ...existing,
      ...updates,
      img: finalImg,
      imageUrl: finalImg,
      isFuneralTribute:
        (updates.category || existing.category) === 'funebre' ||
        !!(updates.isFuneralTribute ?? existing.isFuneralTribute),
    };

    const savedProduct = await apiUpdateProduct(id, merged);
    setProducts((prev) => prev.map((p) => (p.id === id ? savedProduct : p)));
    return savedProduct;
  };

  const deleteProduct = async (id: string): Promise<boolean> => {
    setCatalogError(null);
    await apiDeleteProduct(id);
    setProducts((prev) => prev.filter((p) => p.id !== id));
    return true;
  };

  const toggleStock = async (id: string): Promise<void> => {
    const prod = products.find((p) => p.id === id);
    if (!prod) return;
    const newQty = prod.stockQuantity > 0 ? 0 : 10;
    await updateProduct(id, { stockQuantity: newQty });
  };

  const toggleOffer = async (
    id: string,
    isPromo: boolean,
    discountPrice?: number,
    discountPct?: number
  ): Promise<void> => {
    const prod = products.find((p) => p.id === id);
    if (!prod) return;

    if (isPromo) {
      const origPrice = prod.originalPrice || prod.price;
      const targetPrice = discountPrice || Math.round(origPrice * 0.8);
      const targetPct = discountPct || Math.round(((origPrice - targetPrice) / origPrice) * 100);

      await updateProduct(id, {
        isPromo: true,
        price: targetPrice,
        originalPrice: origPrice,
        promoDiscountPct: targetPct,
        badge: prod.badge.includes('Offerta') ? prod.badge : `${prod.badge} 🔥`,
      });
    } else {
      const restoredPrice = prod.originalPrice || prod.price;
      await updateProduct(id, {
        isPromo: false,
        price: restoredPrice,
        originalPrice: restoredPrice,
        promoDiscountPct: undefined,
        badge: prod.badge.replace(' 🔥', ''),
      });
    }
  };

  const updateAnnouncement = (config: Partial<AnnouncementConfig>) => {
    const nextAnnouncement = {
      ...announcement,
      ...config,
    };
    setAnnouncement(nextAnnouncement);

    CatalogApi.updateSettings({ announcement: nextAnnouncement } as any).catch((e) =>
      console.warn('Could not sync announcement to backend:', e)
    );
  };

  const filteredProducts =
    activeCategory === 'all'
      ? products
      : activeCategory === 'promo'
      ? products.filter((p) => p.isPromo)
      : products.filter((p) => p.category === activeCategory);

  const activePromo = promoOffers.find((p) => p.active) || null;

  return (
    <CatalogContext.Provider
      value={{
        products: filteredProducts,
        allProducts: products,
        isLoading,
        catalogError,
        activeCategory,
        promoOffers,
        activePromo,
        isSolemnMode,
        announcement,
        deliverySettings,
        orders,
        setActiveCategory,
        setIsSolemnMode,
        filterByCategory,
        getProductById,
        refreshCatalog,
        refreshOrders,
        addProduct,
        updateProduct,
        deleteProduct,
        toggleStock,
        toggleOffer,
        updateAnnouncement,
        updateDeliverySettings,
        updateOrderStatus,
      }}
    >
      {children}
    </CatalogContext.Provider>
  );
};

export const useCatalog = (): CatalogContextType => {
  const context = useContext(CatalogContext);
  if (!context) {
    throw new Error('useCatalog must be used within a CatalogProvider');
  }
  return context;
};
