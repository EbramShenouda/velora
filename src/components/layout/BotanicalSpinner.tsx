import React from 'react';
import { Leaf } from 'lucide-react';

interface BotanicalSpinnerProps {
  title?: string;
  subtitle?: string;
  tone?: 'light' | 'dark';
  className?: string;
}

export const BotanicalSpinner: React.FC<BotanicalSpinnerProps> = ({
  title,
  subtitle,
  tone = 'light',
  className = '',
}) => {
  const isDark = tone === 'dark';
  return (
    <div
      role="status"
      aria-live="polite"
      className={`flex flex-col items-center justify-center text-center gap-4 ${className}`}
    >
      <div className="relative w-16 h-16">
        <span
          className={`absolute inset-0 rounded-full border-2 ${
            isDark ? 'border-white/15' : 'border-botanical-900/15'
          }`}
        />
        <span className="absolute inset-0 rounded-full border-2 border-transparent border-t-clay border-r-gold animate-spin" />
        <span
          className="absolute inset-3 rounded-full border border-transparent border-b-botanical-700 animate-spin"
          style={{ animationDirection: 'reverse', animationDuration: '1.6s' }}
        />
        <Leaf
          className={`absolute inset-0 m-auto w-6 h-6 animate-pulse ${
            isDark ? 'text-petal' : 'text-botanical-900'
          }`}
        />
      </div>
      {title && (
        <p
          className={`font-serif text-2xl sm:text-3xl font-semibold ${
            isDark ? 'text-white' : 'text-botanical-950'
          }`}
        >
          {title}
        </p>
      )}
      {subtitle && (
        <p className={`text-xs max-w-md mx-auto ${isDark ? 'text-stone-300' : 'text-stone-500'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};
