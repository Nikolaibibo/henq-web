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
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #f8f6f3 0%, #f1ede7 50%, #e8e2db 100%)',
        'gradient-primary-dark': 'radial-gradient(ellipse at top left, #2d3748 0%, #1a202c 50%, #8b5a8c 100%)',
        'gradient-signal': 'radial-gradient(ellipse at bottom right, #eff6ff 0%, #60a5fa 40%, #8b5a8c 100%)',
        'gradient-signal-subtle': 'linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)',
        'gradient-hero': 'radial-gradient(ellipse at center, #1a202c 0%, #2d3748 30%, #4a5568 60%, #8b5a8c 100%)',
        'gradient-hero-alt': 'conic-gradient(from 45deg at 30% 70%, #1a202c 0deg, #60a5fa 120deg, #8b5a8c 240deg, #2d3748 360deg)',
        'gradient-card': 'radial-gradient(ellipse at top, #ffffff 0%, #f8f6f3 70%, rgba(139, 90, 140, 0.05) 100%)',
        'gradient-card-hover': 'radial-gradient(ellipse at top, #f8f6f3 0%, #f1ede7 70%, rgba(139, 90, 140, 0.1) 100%)',
        'gradient-button': 'linear-gradient(135deg, #60a5fa 0%, #3b82f6 50%, #8b5a8c 100%)',
        'gradient-button-hover': 'linear-gradient(135deg, #3b82f6 0%, #2563eb 50%, #7c4a7d 100%)',
        'gradient-cta': 'conic-gradient(from 180deg at 50% 50%, #60a5fa 0deg, #3b82f6 120deg, #8b5a8c 240deg, #60a5fa 360deg)',
        'gradient-overlay': 'radial-gradient(ellipse at center, rgba(26, 32, 44, 0.8) 0%, rgba(96, 165, 250, 0.3) 50%, rgba(139, 90, 140, 0.9) 100%)',
        'gradient-mesh': 'radial-gradient(circle at 20% 80%, rgba(96, 165, 250, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(139, 90, 140, 0.1) 0%, transparent 50%), radial-gradient(circle at 40% 40%, rgba(239, 246, 255, 0.8) 0%, transparent 50%)',
      },
      fontFamily: {
        sans: ['Inter', 'Helvetica Neue', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        secondary: ['Poppins', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      }
    },
  },
}
