import React from 'react';
import { MessageCircle } from 'lucide-react';
import { useCatalog } from '../../context/CatalogContext';
import { siteConfig } from '../../config/siteConfig';

const WHATSAPP_GREETING = 'Buongiorno VELORA, vorrei informazioni su una composizione floreale.';

export const WhatsAppRoseButton: React.FC = () => {
  const { isSolemnMode } = useCatalog();
  const href = `${siteConfig.contact.whatsappDirectUrl}?text=${encodeURIComponent(WHATSAPP_GREETING)}`;

  // In the Arte Funebre section the rose turns to the same silver tones as the 3D flower
  const petals = isSolemnMode
    ? { outer: '#8A8F98', mid: '#B4B9C2', inner: '#DADDE3', line: '#5B606A' }
    : { outer: '#9B0F24', mid: '#C8102E', inner: '#E8304A', line: '#6E0818' };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Scrivici su WhatsApp"
      className="group fixed bottom-5 left-5 z-40 select-none"
    >
      <span
        aria-hidden="true"
        className={`absolute inset-0 rounded-full animate-ping opacity-30 ${
          isSolemnMode ? 'bg-stone-300' : 'bg-red-600'
        }`}
        style={{ animationDuration: '2.6s' }}
      />
      <span
        className={`relative flex items-center justify-center w-16 h-16 rounded-full bg-ivory border-2 shadow-2xl transition-transform duration-300 group-hover:scale-110 group-active:scale-95 ${
          isSolemnMode ? 'border-stone-300' : 'border-red-700/70'
        }`}
      >
        <svg viewBox="0 0 64 64" className="w-12 h-12 drop-shadow-md" aria-hidden="true">
          <path d="M32 44c-9 2-15 8-19 14 9 1 17-3 21-9z" fill="#2F5D3A" />
          <path d="M32 44c9 2 15 8 19 14-9 1-17-3-21-9z" fill="#3F7A4C" />
          <path d="M31 40h2v18h-2z" fill="#2F5D3A" />
          <path
            d="M32 8C21 8 12 16 12 27c0 10 8 18 20 18s20-8 20-18C52 16 43 8 32 8z"
            fill={petals.outer}
          />
          <path
            d="M32 13c-8 0-15 6-15 14 0 8 7 14 15 14s15-6 15-14c0-8-7-14-15-14z"
            fill={petals.mid}
          />
          <path
            d="M32 19c-5.5 0-10 4-10 8.5S26.5 36 32 36s10-4 10-8.5S37.5 19 32 19z"
            fill={petals.inner}
          />
          <path
            d="M26 27c1-4 5-6 8-4 3 2 3 6 0 8-2 1-5 1-6-1"
            fill="none"
            stroke={petals.line}
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <path
            d="M20 22c3-6 11-8 17-5M44 31c-2 5-8 8-13 7"
            fill="none"
            stroke={petals.line}
            strokeWidth="1.2"
            strokeLinecap="round"
            opacity="0.7"
          />
        </svg>

        <span className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full bg-[#25D366] border-2 border-white flex items-center justify-center shadow-lg">
          <MessageCircle className="w-4 h-4 text-white" fill="currentColor" />
        </span>
      </span>

      <span className="pointer-events-none absolute left-full top-1/2 -translate-y-1/2 ml-3 whitespace-nowrap px-3 py-1.5 rounded-full bg-botanical-950/90 text-white text-[11px] font-semibold tracking-wide shadow-xl opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 hidden sm:block">
        Scrivici su WhatsApp
      </span>
    </a>
  );
};
