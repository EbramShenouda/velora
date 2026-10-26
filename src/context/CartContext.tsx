/**
 * VELORA - CartContext
 * Global shopping cart state with live free shipping calculations,
 * custom handwritten card dedication, delivery details and order orchestration.
 */

import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
import { CartItem, Product, FuneralConfig, OrderPayload } from '../types/catalog';
import { siteConfig } from '../config/siteConfig';
import { CatalogApi } from '../services/api';

interface CartContextType {
  items: CartItem[];
  itemCount: number;
  subtotal: number;
  shippingFee: number;
  total: number;
  freeShippingThreshold: number;
  freeShippingProgressPct: number;
  amountNeededForFreeShipping: number;
  isFreeShipping: boolean;
  isCartOpen: boolean;
  greetingCardText: string;
  deliveryDate: string;
  timeSlot: string;
  deliveryAddress: string;
  customerName: string;
  customerPhone: string;
  isEligibleForDelivery: boolean;
  validatedDistanceKm: number | null;
  setIsCartOpen: (open: boolean) => void;
  setGreetingCardText: (text: string) => void;
  setDeliveryDate: (date: string) => void;
  setTimeSlot: (slot: string) => void;
  setDeliveryAddress: (addr: string) => void;
  setCustomerName: (name: string) => void;
  setCustomerPhone: (phone: string) => void;
  setDeliveryEligibility: (eligible: boolean, distanceKm?: number) => void;
  addToCart: (product: Product, quantity?: number) => void;
  addFuneralTributeToCart: (config: FuneralConfig) => void;
  updateQuantity: (id: string, delta: number) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
  submitOrder: (paymentMethod?: 'cash_on_delivery' | 'stripe' | 'pos_at_door') => Promise<{ success: boolean; orderId: string; message: string }>;
  openWhatsAppOrder: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const LOCAL_STORAGE_KEY = 'velora_cart_items_v1';

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.warn('Could not read cart from localStorage', e);
    }
    // Default initial mock item for immediate visual richness matching mockup
    return [
      {
        id: 'p1',
        productId: 'p1',
        name: 'Bouquet "Alba Provenzale"',
        meta: 'Fiori freschi d\'autore • Confezione idratata in acqua',
        price: 48,
        originalPrice: 55,
        quantity: 1,
        img: 'https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=800&q=80',
      },
    ];
  });

  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [greetingCardText, setGreetingCardText] = useState<string>(
    'Tanti auguri di cuore da parte nostra, che questi fiori portino gioia!'
  );
  
  // Format today's date in YYYY-MM-DD for date input default
  const todayStr = useMemo(() => new Date().toISOString().split('T')[0], []);
  const [deliveryDate, setDeliveryDate] = useState<string>(todayStr);
  const [timeSlot, setTimeSlot] = useState<string>('Mattina (09:00 - 12:30)');
  const [deliveryAddress, setDeliveryAddress] = useState<string>('Centro Storico, Roma (2.4 km)');
  const [customerName, setCustomerName] = useState<string>('');
  const [customerPhone, setCustomerPhone] = useState<string>('');
  const [isEligibleForDelivery, setIsEligibleForDelivery] = useState<boolean>(true);
  const [validatedDistanceKm, setValidatedDistanceKm] = useState<number | null>(2.4);

  // Sync to local storage
  useEffect(() => {
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(items));
    } catch (e) {
      console.warn('Failed saving cart to localStorage', e);
    }
  }, [items]);

  const itemCount = useMemo(() => {
    return items.reduce((acc, item) => acc + item.quantity, 0);
  }, [items]);

  const subtotal = useMemo(() => {
    return items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  }, [items]);

  const freeShippingThreshold = siteConfig.delivery.freeShippingThreshold; // 50€
  const isFreeShipping = subtotal >= freeShippingThreshold;
  
  const shippingFee = useMemo(() => {
    if (subtotal === 0) return 0;
    if (timeSlot === 'Ritiro in Bottega (Gratis)') return 0;
    return isFreeShipping ? 0 : siteConfig.delivery.standardShippingFee;
  }, [subtotal, isFreeShipping, timeSlot]);

  const total = subtotal + shippingFee;

  const freeShippingProgressPct = useMemo(() => {
    if (subtotal <= 0) return 0;
    return Math.min(Math.round((subtotal / freeShippingThreshold) * 100), 100);
  }, [subtotal, freeShippingThreshold]);

  const amountNeededForFreeShipping = useMemo(() => {
    return Math.max(0, freeShippingThreshold - subtotal);
  }, [subtotal, freeShippingThreshold]);

  const setDeliveryEligibility = (eligible: boolean, distanceKm?: number) => {
    setIsEligibleForDelivery(eligible);
    if (distanceKm !== undefined) setValidatedDistanceKm(distanceKm);
  };

  const addToCart = (product: Product, quantity = 1) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.productId === product.id && !i.isFuneralTribute);
      if (existing) {
        return prev.map((item) =>
          item.id === existing.id ? { ...item, quantity: item.quantity + quantity } : item
        );
      }
      const newItem: CartItem = {
        id: `${product.id}-${Date.now()}`,
        productId: product.id,
        name: product.name,
        meta: `${product.badge} • Consegna refrigerata entro 10 km`,
        price: product.price,
        originalPrice: product.originalPrice,
        quantity,
        img: product.img,
      };
      return [...prev, newItem];
    });
    setIsCartOpen(true);
  };

  const addFuneralTributeToCart = (config: FuneralConfig) => {
    const newItem: CartItem = {
      id: `fun-${Date.now()}`,
      productId: config.tributeId,
      name: config.tributeName,
      meta: `Nastro in Oro: "${config.ribbonText}" • ${config.venueType} (${config.ceremonyTime}) ${config.deceasedOrFamilyName ? '• ' + config.deceasedOrFamilyName : ''}`,
      price: config.price,
      quantity: 1,
      img: config.img,
      isFuneralTribute: true,
      funeralDetails: config,
    };
    setItems((prev) => [...prev, newItem]);
    setIsCartOpen(true);
  };

  const updateQuantity = (id: string, delta: number) => {
    setItems((prev) => {
      return prev
        .map((item) => {
          if (item.id === id) {
            const nextQty = item.quantity + delta;
            return nextQty > 0 ? { ...item, quantity: nextQty } : null;
          }
          return item;
        })
        .filter((item): item is CartItem => item !== null);
    });
  };

  const removeFromCart = (id: string) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
  };

  const clearCart = () => {
    setItems([]);
  };

  const createOrderPayload = (
    paymentMethod: 'cash_on_delivery' | 'stripe' | 'pos_at_door' = 'cash_on_delivery'
  ): OrderPayload => {
    return {
      customer: {
        fullName: customerName || 'Ospite VELORA',
        phone: customerPhone,
        deliveryAddress,
        deliveryDate,
        timeSlot,
      },
      items,
      greetingCardText,
      subtotal,
      shippingFee,
      total,
      distanceKm: validatedDistanceKm || 2.4,
      paymentMethod,
    };
  };

  const submitOrder = async (
    paymentMethod: 'cash_on_delivery' | 'stripe' | 'pos_at_door' = 'cash_on_delivery'
  ) => {
    const orderPayload = createOrderPayload(paymentMethod);
    const result = await CatalogApi.submitOrder(orderPayload);
    return result;
  };

  const openWhatsAppOrder = () => {
    const orderPayload = createOrderPayload('cash_on_delivery');
    const url = CatalogApi.generateWhatsAppOrderUrl(orderPayload);
    window.open(url, '_blank');
  };

  return (
    <CartContext.Provider
      value={{
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
        greetingCardText,
        deliveryDate,
        timeSlot,
        deliveryAddress,
        customerName,
        customerPhone,
        isEligibleForDelivery,
        validatedDistanceKm,
        setIsCartOpen,
        setGreetingCardText,
        setDeliveryDate,
        setTimeSlot,
        setDeliveryAddress,
        setCustomerName,
        setCustomerPhone,
        setDeliveryEligibility,
        addToCart,
        addFuneralTributeToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        submitOrder,
        openWhatsAppOrder,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

