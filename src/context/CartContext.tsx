/**
 * VELORA - CartContext
 * Global shopping cart state with live configurable delivery calculations,
 * custom card dedication, delivery details and order orchestration.
 */

import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
import { CartItem, Product, FuneralConfig, OrderPayload } from '../types/catalog';
import { siteConfig } from '../config/siteConfig';
import { CatalogApi } from '../services/api';
import { useCatalog } from './CatalogContext';

interface CartContextType {
  items: CartItem[];
  itemCount: number;
  subtotal: number;
  shippingFee: number;
  total: number;
  freeShippingEnabled: boolean;
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
  setIsCartOpen: (open: boolean) => void;
  setGreetingCardText: (text: string) => void;
  setDeliveryDate: (date: string) => void;
  setTimeSlot: (slot: string) => void;
  setDeliveryAddress: (addr: string) => void;
  setCustomerName: (name: string) => void;
  setCustomerPhone: (phone: string) => void;
  addToCart: (product: Product, quantity?: number) => void;
  addFuneralTributeToCart: (config: FuneralConfig) => void;
  updateQuantity: (id: string, delta: number) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
  submitOrder: (orderOverride?: Partial<OrderPayload>) => Promise<{ success: boolean; orderId: string; message: string }>;
  openWhatsAppOrder: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const LOCAL_STORAGE_KEY = 'velora_cart_items_v2';

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { deliverySettings, refreshOrders } = useCatalog();

  const [items, setItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.warn('Could not read cart from localStorage', e);
    }
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
  
  // ALL text fields strictly start EMPTY
  const [greetingCardText, setGreetingCardText] = useState<string>('');
  const todayStr = useMemo(() => new Date().toISOString().split('T')[0], []);
  const [deliveryDate, setDeliveryDate] = useState<string>(todayStr);
  const [timeSlot, setTimeSlot] = useState<string>('Mattina (09:00 - 12:30)');
  const [deliveryAddress, setDeliveryAddress] = useState<string>('');
  const [customerName, setCustomerName] = useState<string>('');
  const [customerPhone, setCustomerPhone] = useState<string>('');

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

  // Configurable Delivery Pricing from Catalog/Admin settings
  const isPickup = timeSlot.includes('Ritiro in Bottega');
  const freeShippingEnabled = deliverySettings?.freeShippingEnabled ?? false;
  const freeShippingThreshold = deliverySettings?.freeShippingThreshold ?? siteConfig.delivery.freeShippingThreshold;
  const standardFee = deliverySettings?.standardShippingFee ?? siteConfig.delivery.standardShippingFee;

  // Free shipping only applies if freeShippingEnabled is true AND subtotal meets threshold
  const isFreeShipping = freeShippingEnabled && subtotal >= freeShippingThreshold;

  const shippingFee = useMemo(() => {
    if (subtotal === 0) return 0;
    if (isPickup) return 0; // "Ritiro in Bottega (Gratis)" is always 0 €
    if (isFreeShipping) return 0;
    return standardFee;
  }, [subtotal, isPickup, isFreeShipping, standardFee]);

  const total = subtotal + shippingFee;

  const freeShippingProgressPct = useMemo(() => {
    if (!freeShippingEnabled || subtotal <= 0) return 0;
    return Math.min(Math.round((subtotal / freeShippingThreshold) * 100), 100);
  }, [subtotal, freeShippingEnabled, freeShippingThreshold]);

  const amountNeededForFreeShipping = useMemo(() => {
    if (!freeShippingEnabled) return 0;
    return Math.max(0, freeShippingThreshold - subtotal);
  }, [subtotal, freeShippingEnabled, freeShippingThreshold]);

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
        meta: `${product.badge} • Consegna refrigerata a Roma`,
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

  const createOrderPayload = (override?: Partial<OrderPayload>): OrderPayload => {
    const generatedId = `VEL-${Math.floor(1000 + Math.random() * 9000)}`;
    return {
      orderId: generatedId,
      customer: {
        fullName: customerName.trim(),
        phone: customerPhone.trim(),
        deliveryAddress: isPickup ? 'Ritiro in Bottega a Tor Lupara (Gratis)' : deliveryAddress.trim(),
        deliveryDate,
        timeSlot,
      },
      items: [...items],
      greetingCardText: greetingCardText.trim() || 'Nessun bigliettino',
      subtotal,
      shippingFee,
      total,
      paymentMethod: 'cash_on_delivery',
      createdAt: new Date().toISOString(),
      ...override,
    };
  };

  const submitOrder = async (orderOverride?: Partial<OrderPayload>) => {
    const orderPayload = createOrderPayload(orderOverride);
    const result = await CatalogApi.submitOrder(orderPayload);
    // Refresh admin orders view immediately
    refreshOrders();
    return result;
  };

  const openWhatsAppOrder = () => {
    const orderPayload = createOrderPayload();
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
        freeShippingEnabled,
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
        setIsCartOpen,
        setGreetingCardText,
        setDeliveryDate,
        setTimeSlot,
        setDeliveryAddress,
        setCustomerName,
        setCustomerPhone,
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
