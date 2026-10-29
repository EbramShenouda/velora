/**
 * VELORA - CatalogContext
 * State management for Products, Filters, Promos, Dynamic Announcement Bar, and 3D Visual Mood
 */

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product, PromoOffer, CategoryId, AnnouncementConfig } from '../types/catalog';
import { CatalogApi, INITIAL_PRODUCTS, PROMO_OFFERS } from '../services/api';
import { siteConfig } from '../config/siteConfig';

interface CatalogContextType {
  products: Product[];
  isLoading: boolean;
  activeCategory: CategoryId;
  promoOffers: PromoOffer[];
  activePromo: PromoOffer | null;
  isSolemnMode: boolean; // Triggers solemn silver light on 3D flower in Arte Funebre
  announcement: AnnouncementConfig;
  setActiveCategory: (cat: CategoryId) => void;
  setIsSolemnMode: (mode: boolean) => void;
  filterByCategory: (cat: CategoryId) => void;
  getProductById: (id: string) => Product | undefined;
  refreshCatalog: () => Promise<void>;
  // CRUD actions for Admin
  addProduct: (product: Omit<Product, 'id'>) => Promise<Product>;
  updateProduct: (id: string, updates: Partial<Product>) => Promise<Product>;
  deleteProduct: (id: string) => Promise<boolean>;
  toggleStock: (id: string) => Promise<void>;
  toggleOffer: (id: string, isPromo: boolean, discountPrice?: number, discountPct?: number) => Promise<void>;
  updateAnnouncement: (config: Partial<AnnouncementConfig>) => void;
}

const CatalogContext = createContext<CatalogContextType | undefined>(undefined);

const LOCAL_PRODUCTS_KEY = 'velora_custom_products_v1';
const LOCAL_ANNOUNCEMENT_KEY = 'velora_announcement_v1';

const DEFAULT_ANNOUNCEMENT: AnnouncementConfig = {
  message: 'Consegna espressa a mano garantita in tutta Roma dalla nostra bottega',
  badge: `${siteConfig.brand.name}:`,
  secondaryNotice: `✨ Consegna Gratuita sopra ${siteConfig.delivery.freeShippingThreshold.toFixed(2)} € • 💌 Biglietto a mano incluso`,
  active: true,
  specialEvent: 'standard',
};

export const CatalogProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>(() => {
    try {
      const saved = localStorage.getItem(LOCAL_PRODUCTS_KEY);
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.warn('Could not read products from localStorage', e);
    }
    return INITIAL_PRODUCTS;
  });

  const [promoOffers, setPromoOffers] = useState<PromoOffer[]>(PROMO_OFFERS);
  const [activeCategory, setActiveCategory] = useState<CategoryId>('all');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSolemnMode, setIsSolemnMode] = useState<boolean>(false);

  const [announcement, setAnnouncement] = useState<AnnouncementConfig>(() => {
    try {
      const saved = localStorage.getItem(LOCAL_ANNOUNCEMENT_KEY);
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.warn('Could not read announcement from localStorage', e);
    }
    return DEFAULT_ANNOUNCEMENT;
  });

  // Save to local storage on changes
  useEffect(() => {
    try {
      localStorage.setItem(LOCAL_PRODUCTS_KEY, JSON.stringify(products));
    } catch (e) {
      console.warn('Failed saving products to localStorage', e);
    }
  }, [products]);

  useEffect(() => {
    try {
      localStorage.setItem(LOCAL_ANNOUNCEMENT_KEY, JSON.stringify(announcement));
    } catch (e) {
      console.warn('Failed saving announcement to localStorage', e);
    }
  }, [announcement]);

  const refreshCatalog = async () => {
    setIsLoading(true);
    try {
      if (!siteConfig.api.useMock) {
        const [prods, promos] = await Promise.all([
          CatalogApi.getProducts(activeCategory),
          CatalogApi.getActivePromos(),
        ]);
        if (prods && prods.length > 0) setProducts(prods);
        if (promos && promos.length > 0) setPromoOffers(promos);
      }
    } catch (err) {
      console.error('Error refreshing catalog:', err);
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

  // CRUD Functions
  const addProduct = async (newProdData: Omit<Product, 'id'>): Promise<Product> => {
    const id = `p-${Date.now()}`;
    const finalImg = newProdData.imageUrl || newProdData.img || '';
    const product: Product = {
      ...newProdData,
      id,
      slug: newProdData.slug || newProdData.name.toLowerCase().replace(/\s+/g, '-'),
      img: finalImg,
      imageUrl: finalImg,
    };

    // If backend is active, send to Spring Boot endpoint
    if (!siteConfig.api.useMock) {
      try {
        const token = localStorage.getItem('velora_jwt_token');
        await fetch(`${siteConfig.api.baseUrl}/admin/products`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: token ? `Bearer ${token}` : '',
          },
          body: JSON.stringify(product),
        });
      } catch (e) {
        console.warn('Backend product creation failed, saved locally:', e);
      }
    }

    setProducts((prev) => [product, ...prev]);
    return product;
  };

  const updateProduct = async (id: string, updates: Partial<Product>): Promise<Product> => {
    let updatedProduct: Product | undefined;
    const finalImg = updates.imageUrl !== undefined ? updates.imageUrl : (updates.img !== undefined ? updates.img : undefined);

    setProducts((prev) =>
      prev.map((p) => {
        if (p.id === id) {
          updatedProduct = {
            ...p,
            ...updates,
            ...(finalImg !== undefined ? { img: finalImg, imageUrl: finalImg } : {}),
          };
          return updatedProduct;
        }
        return p;
      })
    );

    if (!siteConfig.api.useMock && updatedProduct) {
      try {
        const token = localStorage.getItem('velora_jwt_token');
        await fetch(`${siteConfig.api.baseUrl}/admin/products/${id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            Authorization: token ? `Bearer ${token}` : '',
          },
          body: JSON.stringify(updatedProduct),
        });
      } catch (e) {
        console.warn('Backend product update failed, saved locally:', e);
      }
    }

    if (!updatedProduct) throw new Error('Product not found');
    return updatedProduct;
  };

  const deleteProduct = async (id: string): Promise<boolean> => {
    setProducts((prev) => prev.filter((p) => p.id !== id));

    if (!siteConfig.api.useMock) {
      try {
        const token = localStorage.getItem('velora_jwt_token');
        await fetch(`${siteConfig.api.baseUrl}/admin/products/${id}`, {
          method: 'DELETE',
          headers: {
            Authorization: token ? `Bearer ${token}` : '',
          },
        });
      } catch (e) {
        console.warn('Backend delete failed, updated locally:', e);
      }
    }
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
    setAnnouncement((prev) => ({
      ...prev,
      ...config,
    }));

    if (!siteConfig.api.useMock) {
      try {
        const token = localStorage.getItem('velora_jwt_token');
        fetch(`${siteConfig.api.baseUrl}/admin/settings`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            Authorization: token ? `Bearer ${token}` : '',
          },
          body: JSON.stringify({ announcement: { ...announcement, ...config } }),
        }).catch((e) => console.warn(e));
      } catch (e) {
        console.warn('Could not sync settings to backend:', e);
      }
    }
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
        isLoading,
        activeCategory,
        promoOffers,
        activePromo,
        isSolemnMode,
        announcement,
        setActiveCategory,
        setIsSolemnMode,
        filterByCategory,
        getProductById,
        refreshCatalog,
        addProduct,
        updateProduct,
        deleteProduct,
        toggleStock,
        toggleOffer,
        updateAnnouncement,
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
