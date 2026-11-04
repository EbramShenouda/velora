import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { CartItem, FuneralConfig, OrderPayload, Product } from '../types/catalog';
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
  setDeliveryAddress: (address: string) => void;
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
    } catch (error) {
      console.warn('Could not read cart from localStorage', error);
    }
    return [];
  });
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [greetingCardText, setGreetingCardText] = useState('');
  const today = useMemo(() => new Date().toISOString().split('T')[0], []);
  const [deliveryDate, setDeliveryDate] = useState(today);
  const [timeSlot, setTimeSlot] = useState('Mattina (09:00 - 12:30)');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');

  useEffect(() => {
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(items));
    } catch (error) {
      console.warn('Failed saving cart to localStorage', error);
    }
  }, [items]);

  const itemCount = useMemo(() => items.reduce((count, item) => count + item.quantity, 0), [items]);
  const subtotal = useMemo(() => items.reduce((sum, item) => sum + item.price * item.quantity, 0), [items]);
  const isPickup = timeSlot.includes('Ritiro in Bottega');
  const freeShippingEnabled = deliverySettings.freeShippingEnabled;
  const freeShippingThreshold = deliverySettings.freeShippingThreshold || siteConfig.delivery.freeShippingThreshold;
  const standardFee = deliverySettings.standardShippingFee ?? siteConfig.delivery.standardShippingFee;
  const isFreeShipping = freeShippingEnabled && subtotal >= freeShippingThreshold;
  const shippingFee = useMemo(() => {
    if (subtotal === 0 || isPickup || isFreeShipping) return 0;
    return standardFee;
  }, [subtotal, isPickup, isFreeShipping, standardFee]);
  const total = subtotal + shippingFee;
  const freeShippingProgressPct = useMemo(() => {
    if (!freeShippingEnabled || subtotal <= 0) return 0;
    return Math.min(Math.round((subtotal / freeShippingThreshold) * 100), 100);
  }, [subtotal, freeShippingEnabled, freeShippingThreshold]);
  const amountNeededForFreeShipping = useMemo(
    () => (freeShippingEnabled ? Math.max(0, freeShippingThreshold - subtotal) : 0),
    [subtotal, freeShippingEnabled, freeShippingThreshold]
  );

  const addToCart = (product: Product, quantity = 1) => {
    setItems((current) => {
      const existing = current.find((item) => item.productId === product.id && !item.isFuneralTribute);
      if (existing) {
        return current.map((item) =>
          item.id === existing.id ? { ...item, quantity: item.quantity + quantity } : item
        );
      }
      return [
        ...current,
        {
          id: `${product.id}-${Date.now()}`,
          productId: product.id,
          name: product.name,
          meta: `${product.badge} • Consegna refrigerata a Roma`,
          price: product.price,
          originalPrice: product.originalPrice,
          quantity,
          img: product.img,
        },
      ];
    });
    setIsCartOpen(true);
  };

  const addFuneralTributeToCart = (config: FuneralConfig) => {
    setItems((current) => [
      ...current,
      {
        id: `fun-${Date.now()}`,
        productId: config.tributeId,
        name: config.tributeName,
        meta: `Nastro in Oro: "${config.ribbonText}" • ${config.venueType} (${config.ceremonyTime})${config.deceasedOrFamilyName ? ` • ${config.deceasedOrFamilyName}` : ''}`,
        price: config.price,
        quantity: 1,
        img: config.img,
        isFuneralTribute: true,
        funeralDetails: config,
      },
    ]);
    setIsCartOpen(true);
  };

  const updateQuantity = (id: string, delta: number) => {
    setItems((current) =>
      current
        .map((item) => (item.id === id ? { ...item, quantity: item.quantity + delta } : item))
        .filter((item) => item.quantity > 0)
    );
  };
  const removeFromCart = (id: string) => setItems((current) => current.filter((item) => item.id !== id));
  const clearCart = () => setItems([]);

  const createOrderPayload = (override?: Partial<OrderPayload>): OrderPayload => ({
    orderId: `VEL-${Math.floor(1000 + Math.random() * 9000)}`,
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
  });

  const submitOrder = async (orderOverride?: Partial<OrderPayload>) => {
    const result = await CatalogApi.submitOrder(createOrderPayload(orderOverride));
    await refreshOrders();
    return result;
  };
  const openWhatsAppOrder = () => window.open(CatalogApi.generateWhatsAppOrderUrl(createOrderPayload()), '_blank');

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
