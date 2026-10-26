/**
 * VELORA - TypeScript Domain Types & Entities (Clean Architecture)
 */

export type CategoryId = 'all' | 'bouquet' | 'piante' | 'composizioni' | 'funebre' | 'promo';

export interface Category {
  id: CategoryId;
  label: string;
  badge?: string;
  icon?: string;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  category: 'bouquet' | 'piante' | 'composizioni' | 'funebre';
  badge: string;
  price: number;
  originalPrice?: number;
  isPromo?: boolean;
  promoDiscountPct?: number;
  stockQuantity: number;
  desc: string;
  longDesc?: string;
  img: string;
  gallery?: string[];
  features?: string[];
  dimensions?: string;
  careInstructions?: string;
  isFeatured?: boolean;
  isFuneralTribute?: boolean;
}

export interface PromoOffer {
  id: string;
  title: string;
  subtitle: string;
  badgeText: string;
  discountCode?: string;
  discountPercentage: number;
  bannerNotice: string;
  active: boolean;
  expiresAt?: string;
  featuredProductIds: string[];
}

export interface FuneralConfig {
  tributeId: string;
  tributeName: string;
  ribbonText: string;
  ribbonColor: 'crema' | 'bianco-seta' | 'verde-botanico' | 'bordeaux';
  goldFoil: boolean;
  venueType: 'Chiesa / Parrocchia' | 'Camera Ardente / Ospedale' | 'Cimitero Comunale' | 'Domicilio Famiglia';
  ceremonyTime: 'Entro le ore 09:30' | 'Entro le ore 11:00' | 'Entro le ore 15:00' | 'Entro le ore 16:30';
  ceremonyDate?: string;
  deceasedOrFamilyName?: string;
  churchVenueDetails?: string;
  price: number;
  img: string;
}

export interface CartItem {
  id: string; // unique item id in cart (e.g. p1 or fun-12345)
  productId: string;
  name: string;
  meta: string;
  price: number;
  originalPrice?: number;
  quantity: number;
  img: string;
  isFuneralTribute?: boolean;
  funeralDetails?: FuneralConfig;
}

export interface AnnouncementConfig {
  message: string;
  badge: string;
  secondaryNotice: string;
  active: boolean;
  specialEvent?: 'standard' | 'san_valentino' | 'festa_della_mamma' | 'natale' | 'primavera';
}

export interface StoreSettings {
  storeAddress: string;
  deliveryArea: string;
  freeShippingThreshold: number;
  standardShippingFee: number;
  operatingHours: string;
  whatsappNumber: string;
  announcement: AnnouncementConfig;
}

export interface OrderCustomerInfo {
  fullName: string;
  phone: string;
  email?: string;
  deliveryAddress: string;
  deliveryDate: string;
  timeSlot: string;
  notes?: string;
}

export interface OrderPayload {
  orderId?: string;
  customer: OrderCustomerInfo;
  items: CartItem[];
  greetingCardText: string;
  subtotal: number;
  shippingFee: number;
  total: number;
  paymentMethod: 'cash_on_delivery' | 'stripe' | 'pos_at_door';
  createdAt?: string;
}

export interface AppleCardCollection {
  id: number;
  tag: string;
  title: string;
  subtitle: string;
  img: string;
  desc: string;
  highlights: string[];
}

