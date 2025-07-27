/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f8f6f3',
          100: '#f1ede7',
          200: '#e8e2db',
          700: '#4a5568',
          800: '#2d3748',
          900: '#1a202c',
        },
        signal: {
          50: '#eff6ff',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
        },
        success: {
          50: '#ecfdf5',
          500: '#10b981',
        },
        warning: {
          50: '#fffbeb',
          500: '#f59e0b',
        },
        error: {
          50: '#fef2f2',
          500: '#ef4444',
        }
      },
      fontFamily: {
        sans: ['Inter', 'Helvetica Neue', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        secondary: ['Poppins', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      }
    },
  },
}