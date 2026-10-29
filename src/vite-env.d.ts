/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_BRAND_NAME?: string;
  readonly VITE_BRAND_TAGLINE?: string;
  readonly VITE_STORE_ADDRESS?: string;
  readonly VITE_STORE_MAPS_QUERY?: string;
  readonly VITE_STORE_PHONE?: string;
  readonly VITE_STORE_WHATSAPP?: string;
  readonly VITE_STORE_EMAIL?: string;
  readonly VITE_DELIVERY_AREA?: string;
  readonly VITE_FREE_SHIPPING_THRESHOLD?: string;
  readonly VITE_STANDARD_DELIVERY_FEE?: string;
  readonly VITE_API_URL?: string;
  readonly VITE_API_BASE_URL?: string;
  readonly VITE_USE_MOCK_API?: string;
  readonly VITE_CLOUDINARY_CLOUD_NAME?: string;
  readonly VITE_CLOUDINARY_UPLOAD_PRESET?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
