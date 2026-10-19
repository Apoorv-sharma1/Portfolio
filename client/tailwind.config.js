/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#0B0D12',
          surface: '#131720',
          elevated: '#1A202C',
          border: 'rgba(255, 255, 255, 0.08)',
          muted: '#272B31',
        },
        light: {
          bg: '#F5F6F4',
          surface: '#FFFFFF',
          elevated: '#E5E7E3',
          border: 'rgba(0, 0, 0, 0.08)',
          muted: '#D0D4CC',
        },
        brand: {
          accent: '#8B5CF6',      // Primary Violet
          cyan: '#69C9FF',        // Secondary Cyan
          lime: '#78F52B',        // Signature Architectural Lime (CROS signage)
          charcoal: '#17191D',
          white: '#F5F6F4',
          gray: '#A5ACB8',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace']
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
