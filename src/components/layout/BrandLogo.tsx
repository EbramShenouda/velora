import React from 'react';
import { siteConfig } from '../../config/siteConfig';

interface BrandLogoProps {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'light' | 'dark';
  showTagline?: boolean;
  className?: string;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  size = 'md',
  variant = 'dark',
  showTagline = true,
  className = '',
}) => {
  const isLight = variant === 'light';

  // Sizing configurations
  const titleSize = {
    sm: 'text-2xl sm:text-3xl',
    md: 'text-3xl sm:text-4xl',
    lg: 'text-4xl sm:text-5xl',
  }[size];

  const iconDimensions = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-12 h-12',
  }[size];

  return (
    <div className={`flex flex-col items-center group cursor-pointer transition-transform duration-300 hover:scale-[1.02] ${className}`}>
      <div className="flex items-center gap-2.5">
        {/* Luxury Botanical SVG Icon: Stylized Blooming Petals & Gold Stamen */}
        <svg
          className={`${iconDimensions} transition-transform duration-700 group-hover:rotate-12`}
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Subtle Outer Botanical Aura */}
          <circle cx="50" cy="50" r="46" stroke="#D4AF37" strokeWidth="1" strokeDasharray="3 3" opacity="0.45" />

          {/* Organic Petal 1 - Top Left */}
          <path
            d="M50 50 C40 25, 20 28, 26 48 C30 60, 45 54, 50 50 Z"
            fill={isLight ? '#F3D6CE' : '#2D5A40'}
            fillOpacity={isLight ? 0.9 : 0.85}
          />
          {/* Organic Petal 2 - Top Right */}
          <path
            d="M50 50 C60 25, 80 28, 74 48 C70 60, 55 54, 50 50 Z"
            fill={isLight ? '#E8B4A8' : '#214430'}
            fillOpacity={isLight ? 0.85 : 0.9}
          />
          {/* Organic Petal 3 - Bottom */}
          <path
            d="M50 50 C32 65, 38 88, 50 82 C62 88, 68 65, 50 50 Z"
            fill={isLight ? '#C86D5B' : '#C86D5B'}
            fillOpacity={0.9}
          />
          {/* Central Petal Crest - V Emblem */}
          <path
            d="M38 34 L50 62 L62 34"
            stroke="#D4AF37"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Golden Core Spark */}
          <circle cx="50" cy="38" r="3.2" fill="#D4AF37" />
          <circle cx="50" cy="38" r="5" stroke="#FFFFFF" strokeWidth="0.8" opacity="0.6" />
        </svg>

        {/* Brand Name Typography */}
        <span
          className={`font-serif tracking-tight font-semibold leading-none ${titleSize} ${
            isLight ? 'text-white' : 'text-botanical-950'
          }`}
        >
          {siteConfig.brand.name}
        </span>
      </div>

      {showTagline && (
        <span
          className={`text-[9px] uppercase tracking-[0.38em] font-bold mt-1.5 transition-colors ${
            isLight ? 'text-petal group-hover:text-gold' : 'text-clay group-hover:text-botanical-800'
          }`}
        >
          {siteConfig.brand.tagline}
        </span>
      )}
    </div>
  );
};

