import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // NEW BLUE BRAND THEME
        brand: {
          DEFAULT: '#1E3A8A',   // primary navy blue
          50:  '#EFF6FF',
          100: '#DBEAFE',
          200: '#BFDBFE',
          300: '#93C5FD',
          400: '#60A5FA',
          500: '#3B82F6',
          600: '#2563EB',
          700: '#1E40AF',
          800: '#1E3A8A',
          900: '#172554',
        },

        // REPLACED GOLD → COOL BLUE ACCENT
        accent: {
          DEFAULT: '#3B82F6',
          soft: '#60A5FA',
          light: '#BFDBFE',
        },

        // BASE THEME
        background: '#FFFFFF',
        foreground: '#0A1A2F',

        card: { 
          DEFAULT: '#FFFFFF', 
          foreground: '#0A1A2F' 
        },

        muted: { 
          DEFAULT: '#F1F5F9',
          foreground: '#64748B' 
        },

        border: '#D0DAE6',
        input: '#D0DAE6',
        ring: '#3B82F6',

        destructive: { 
          DEFAULT: '#EF4444', 
          foreground: '#FFFFFF' 
        },
      },

      fontFamily: {
        display: ['var(--font-playfair)', 'Georgia', 'serif'],
        sans: ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
      },

      borderRadius: {
        lg: '0.75rem',
        md: '0.5rem',
        sm: '0.375rem',
        xl: '1rem',
        '2xl': '1.5rem',
      },

      // BLUE GRADIENTS (REPLACED GOLD + DARK ONES)
      backgroundImage: {
        'brand-gradient':
          'linear-gradient(135deg, #E0ECFF 0%,  #AFC8FF 40%, #3B82F6 100%)',

        'accent-gradient':
          'linear-gradient(90deg, #1E3A8A, #3B82F6)',

        'hero-pattern': 
          "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none'%3E%3Cg fill='%231E3A8A' fill-opacity='0.02'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
      },

      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-up-2': 'slideUp 0.6s ease-out 0.15s both',
        'slide-up-3': 'slideUp 0.6s ease-out 0.3s both',
      },

      keyframes: {
        fadeIn: { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        slideUp: { '0%': { transform: 'translateY(24px)', opacity: '0' }, '100%': { transform: 'translateY(0)', opacity: '1' } },
      },
    },
  },

  plugins: [require('tailwindcss-animate')],
}

export default config
