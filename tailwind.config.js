/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      colors: {
        botanical: {
          50: '#F4F7F4',
          100: '#E3ECE4',
          200: '#C5D8C7',
          600: '#2D5A40',
          700: '#214430',
          800: '#163022',
          900: '#0D1E15',
          950: '#07110C',
        },
        cream: '#FAF7F2',
        ivory: '#F2ECE1',
        petal: '#F3D6CE',
        blush: '#E8B4A8',
        clay: '#C86D5B',
        gold: '#D4AF37',
      },
      animation: {
        'radar-sweep': 'radarSweep 4s linear infinite',
        'radar-pulse': 'radarRingPulse 3.2s infinite cubic-bezier(0.16, 1, 0.3, 1)',
      },
      keyframes: {
        radarSweep: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        radarRingPulse: {
          '0%': { transform: 'scale(0.25)', opacity: '0.85' },
          '100%': { transform: 'scale(1.45)', opacity: '0' },
        },
      },
    },
  },
  plugins: [],
};

