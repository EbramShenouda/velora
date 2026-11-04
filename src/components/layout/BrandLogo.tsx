import React from 'react';
import { siteConfig } from '../../config/siteConfig';
import logoImg from '../../logo velora.jpeg';

interface BrandLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'light' | 'dark';
  showTagline?: boolean;
  className?: string;
  imgClassName?: string;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  size = 'md',
  variant = 'dark',
  showTagline = false,
  className = '',
  imgClassName = '',
}) => {
  const isLight = variant === 'light';

  // Generous, high-legibility height dimensions ensuring "VELORA" and "ATELIER FLOREALE" are instantly legible
  const imgDimensions = {
    sm: 'h-14 sm:h-16 max-w-[190px]',
    md: 'h-20 sm:h-24 md:h-28 max-w-[280px]',
    lg: 'h-28 sm:h-32 md:h-36 max-w-[340px]',
    xl: 'h-36 sm:h-44 md:h-48 max-w-[420px]',
  }[size];

  return (
    <div
      className={`inline-flex flex-col items-center justify-center group cursor-pointer transition-transform duration-300 hover:scale-[1.02] select-none ${className}`}
      title={`${siteConfig.brand.name} - Atelier Floreale`}
    >
      {/* 
        The logo image (logo velora.jpeg) contains:
        1. Golden "V" botanical monogram intertwined with flowers and leaves
        2. "VELORA" brand typography
        3. "ATELIER FLOREALE" subline

        ON LIGHT/CREAM BACKGROUNDS (variant="dark"):
        - mix-blend-multiply seamlessly dissolves the cream JPEG background into the page parchment (#FAF7F2).
        - No bulky card boxes, no borders: the emblem and typography appear native and crisp.
        - High contrast filter ensures the dark serif lettering and golden monogram pop with maximum clarity.

        ON DARK BACKGROUNDS (variant="light" - e.g. Footer):
        - Displayed inside an elegant luxury cartouche with cream parchment background, gold ring and soft shadow
        so every petal, leaf, and letter remains 100% visible and sharp.
      */}
      {isLight ? (
        <div className="relative flex items-center justify-center bg-[#FAF7F2] rounded-2xl p-2.5 sm:p-3 shadow-xl ring-1 ring-gold/50 hover:ring-gold transition-all duration-300">
          <img
            src={logoImg}
            alt="VELORA - Atelier Floreale"
            className={`${imgDimensions} w-auto object-contain transition-all duration-300 group-hover:brightness-105 ${imgClassName}`}
            loading="eager"
          />
        </div>
      ) : (
        <div className="relative flex items-center justify-center">
          <img
            src={logoImg}
            alt="VELORA - Atelier Floreale"
            className={`${imgDimensions} w-auto object-contain mix-blend-multiply contrast-[1.05] brightness-[0.98] drop-shadow-sm transition-all duration-300 group-hover:scale-[1.02] ${imgClassName}`}
            loading="eager"
          />
        </div>
      )}

      {showTagline && (
        <span
          className={`text-[10px] uppercase tracking-[0.38em] font-bold mt-1 transition-colors ${
            isLight ? 'text-petal group-hover:text-gold' : 'text-clay group-hover:text-botanical-800'
          }`}
        >
          {siteConfig.brand.tagline}
        </span>
      )}
    </div>
  );
};

export default BrandLogo;
