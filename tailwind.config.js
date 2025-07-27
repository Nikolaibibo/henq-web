/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Complete Color System
      colors: {
        // Primary Colors (Dark Navy from logo)
        primary: {
          50: '#f8f6f3',   // Light cream
          100: '#f1ede7',  // Light cream variant
          200: '#e8e2db',  // Light cream darker
          300: '#d1c7b8',  // Neutral mid-tone
          400: '#a8967f',  // Neutral darker
          500: '#7a6b5d',  // Neutral brown
          600: '#5a4f45',  // Dark brown
          700: '#4a5568',  // Dark gray-blue
          800: '#2d3748',  // Darker navy
          900: '#1a202c',  // Primary dark navy
        },
        
        // Neutral Colors (Extended palette)
        neutral: {
          50: '#f8f6f3',   // Lightest cream
          100: '#f1ede7',  // Light cream
          200: '#e8e2db',  // Medium cream
          300: '#d1c7b8',  // Darker cream
          400: '#a8967f',  // Light brown
          500: '#7a6b5d',  // Medium brown
          600: '#5a4f45',  // Dark brown
          700: '#3d3530',  // Very dark brown
          800: '#2a221e',  // Almost black brown
          900: '#1a1612',  // Darkest brown
        },
        
        // Signal Blue (Accent Color)
        signal: {
          50: '#eff6ff',   // Very light blue
          100: '#dbeafe',  // Light blue
          200: '#bfdbfe',  // Lighter blue
          300: '#93c5fd',  // Medium light blue
          400: '#60a5fa',  // Light signal blue
          500: '#3b82f6',  // Primary signal blue
          600: '#2563eb',  // Darker signal blue
          700: '#1d4ed8',  // Dark blue
          800: '#1e40af',  // Darker blue
          900: '#1e3a8a',  // Darkest blue
        },
        
        // Semantic Colors - Success
        success: {
          50: '#ecfdf5',   // Very light green
          100: '#d1fae5',  // Light green
          200: '#a7f3d0',  // Lighter green
          300: '#6ee7b7',  // Medium light green
          400: '#34d399',  // Light success green
          500: '#10b981',  // Primary success green
          600: '#059669',  // Darker success green
          700: '#047857',  // Dark green
          800: '#065f46',  // Darker green
          900: '#064e3b',  // Darkest green
        },
        
        // Semantic Colors - Warning
        warning: {
          50: '#fffbeb',   // Very light yellow
          100: '#fef3c7',  // Light yellow
          200: '#fde68a',  // Lighter yellow
          300: '#fcd34d',  // Medium light yellow
          400: '#fbbf24',  // Light warning yellow
          500: '#f59e0b',  // Primary warning yellow
          600: '#d97706',  // Darker warning yellow
          700: '#b45309',  // Dark yellow
          800: '#92400e',  // Darker yellow
          900: '#78350f',  // Darkest yellow
        },
        
        // Semantic Colors - Error
        error: {
          50: '#fef2f2',   // Very light red
          100: '#fee2e2',  // Light red
          200: '#fecaca',  // Lighter red
          300: '#fca5a5',  // Medium light red
          400: '#f87171',  // Light error red
          500: '#ef4444',  // Primary error red
          600: '#dc2626',  // Darker error red
          700: '#b91c1c',  // Dark red
          800: '#991b1b',  // Darker red
          900: '#7f1d1d',  // Darkest red
        },
        
        // Additional accent color (purple from gradients)
        accent: {
          50: '#faf5ff',   // Very light purple
          100: '#f3e8ff',  // Light purple
          200: '#e9d5ff',  // Lighter purple
          300: '#d8b4fe',  // Medium light purple
          400: '#c084fc',  // Light purple
          500: '#a855f7',  // Medium purple
          600: '#9333ea',  // Primary purple
          700: '#7c3aed',  // Dark purple
          800: '#6b21a8',  // Darker purple
          900: '#581c87',  // Darkest purple
        }
      },
      
      // Complete Typography System
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],      // 12px
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],  // 14px
        'base': ['1rem', { lineHeight: '1.5rem' }],     // 16px
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],  // 18px
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],   // 20px
        '2xl': ['1.5rem', { lineHeight: '2rem' }],      // 24px
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }], // 30px
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],   // 36px
        '5xl': ['3rem', { lineHeight: '1.1' }],         // 48px
        '6xl': ['3.75rem', { lineHeight: '1.1' }],      // 60px
        '7xl': ['4.5rem', { lineHeight: '1.1' }],       // 72px
        '8xl': ['6rem', { lineHeight: '1.1' }],         // 96px
        '9xl': ['8rem', { lineHeight: '1.1' }],         // 128px
      },
      
      // Font Weights
      fontWeight: {
        thin: '100',
        extralight: '200',
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
        black: '900',
      },
      
      // Font Families
      fontFamily: {
        sans: ['Inter', 'Helvetica Neue', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        secondary: ['Poppins', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Consolas', 'Monaco', 'monospace'],
      },
      
      // Spacing System
      spacing: {
        '0.5': '0.125rem',  // 2px
        '1.5': '0.375rem',  // 6px
        '2.5': '0.625rem',  // 10px
        '3.5': '0.875rem',  // 14px
        '4.5': '1.125rem',  // 18px
        '5.5': '1.375rem',  // 22px
        '6.5': '1.625rem',  // 26px
        '7.5': '1.875rem',  // 30px
        '8.5': '2.125rem',  // 34px
        '9.5': '2.375rem',  // 38px
        '13': '3.25rem',    // 52px
        '15': '3.75rem',    // 60px
        '17': '4.25rem',    // 68px
        '18': '4.5rem',     // 72px
        '19': '4.75rem',    // 76px
        '21': '5.25rem',    // 84px
        '22': '5.5rem',     // 88px
        '26': '6.5rem',     // 104px
        '28': '7rem',       // 112px
        '30': '7.5rem',     // 120px
        '34': '8.5rem',     // 136px
        '36': '9rem',       // 144px
        '40': '10rem',      // 160px
        '44': '11rem',      // 176px
        '48': '12rem',      // 192px
        '52': '13rem',      // 208px
        '56': '14rem',      // 224px
        '60': '15rem',      // 240px
        '64': '16rem',      // 256px
        '72': '18rem',      // 288px
        '80': '20rem',      // 320px
        '96': '24rem',      // 384px
      },
      
      // Container Sizes
      maxWidth: {
        'xs': '20rem',      // 320px
        'sm': '24rem',      // 384px
        'md': '28rem',      // 448px
        'lg': '32rem',      // 512px
        'xl': '36rem',      // 576px
        '2xl': '42rem',     // 672px
        '3xl': '48rem',     // 768px
        '4xl': '56rem',     // 896px
        '5xl': '64rem',     // 1024px
        '6xl': '72rem',     // 1152px
        '7xl': '80rem',     // 1280px
        'screen-sm': '640px',
        'screen-md': '768px',
        'screen-lg': '1024px',
        'screen-xl': '1280px',
        'screen-2xl': '1536px',
      },
      
      // Animation & Transitions
      transitionDuration: {
        '50': '50ms',
        '75': '75ms',
        '100': '100ms',
        '200': '200ms',
        '250': '250ms',
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
        '1200': '1200ms',
      },
      
      transitionTimingFunction: {
        'ease-in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'ease-out': 'cubic-bezier(0, 0, 0.2, 1)',
        'ease-in': 'cubic-bezier(0.4, 0, 1, 1)',
        'ease-spring': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'ease-bounce': 'cubic-bezier(0.68, -0.6, 0.32, 1.6)',
      },
      
      // Animation Keyframes
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in-down': {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        'slide-down': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        'scale-in': {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        'pulse-subtle': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
        'bounce-subtle': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-4px)' },
        },
      },
      
      // Animations
      animation: {
        'fade-in': 'fade-in 0.5s ease-in-out',
        'fade-in-up': 'fade-in-up 0.6s ease-out',
        'fade-in-down': 'fade-in-down 0.6s ease-out',
        'slide-up': 'slide-up 0.3s ease-out',
        'slide-down': 'slide-down 0.3s ease-out',
        'scale-in': 'scale-in 0.3s ease-out',
        'pulse-subtle': 'pulse-subtle 2s ease-in-out infinite',
        'bounce-subtle': 'bounce-subtle 1s ease-in-out infinite',
        'spin-slow': 'spin 3s linear infinite',
        'ping-slow': 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite',
      },
      
      // Enhanced Background Images & Gradients
      backgroundImage: {
        // Primary Gradients
        'gradient-primary': 'linear-gradient(135deg, #f8f6f3 0%, #f1ede7 50%, #e8e2db 100%)',
        'gradient-primary-dark': 'radial-gradient(ellipse at top left, #2d3748 0%, #1a202c 50%, #581c87 100%)',
        'gradient-primary-subtle': 'linear-gradient(135deg, #f8f6f3 0%, #f1ede7 100%)',
        
        // Signal Gradients
        'gradient-signal': 'radial-gradient(ellipse at bottom right, #eff6ff 0%, #60a5fa 40%, #581c87 100%)',
        'gradient-signal-subtle': 'linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)',
        'gradient-signal-vibrant': 'linear-gradient(135deg, #3b82f6 0%, #2563eb 50%, #1d4ed8 100%)',
        
        // Hero Gradients
        'gradient-hero': 'radial-gradient(ellipse at center, #1a202c 0%, #2d3748 30%, #4a5568 60%, #581c87 100%)',
        'gradient-hero-alt': 'conic-gradient(from 45deg at 30% 70%, #1a202c 0deg, #60a5fa 120deg, #581c87 240deg, #2d3748 360deg)',
        'gradient-hero-mesh': 'radial-gradient(circle at 20% 80%, rgba(96, 165, 250, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(88, 28, 135, 0.3) 0%, transparent 50%), radial-gradient(circle at 40% 40%, rgba(26, 32, 44, 0.9) 0%, transparent 50%)',
        
        // Component Gradients
        'gradient-card': 'radial-gradient(ellipse at top, #ffffff 0%, #f8f6f3 70%, rgba(88, 28, 135, 0.05) 100%)',
        'gradient-card-hover': 'radial-gradient(ellipse at top, #f8f6f3 0%, #f1ede7 70%, rgba(88, 28, 135, 0.1) 100%)',
        'gradient-button': 'linear-gradient(135deg, #60a5fa 0%, #3b82f6 50%, #581c87 100%)',
        'gradient-button-hover': 'linear-gradient(135deg, #3b82f6 0%, #2563eb 50%, #4c1d95 100%)',
        
        // CTA & Special Gradients
        'gradient-cta': 'conic-gradient(from 180deg at 50% 50%, #60a5fa 0deg, #3b82f6 120deg, #581c87 240deg, #60a5fa 360deg)',
        'gradient-overlay': 'radial-gradient(ellipse at center, rgba(26, 32, 44, 0.8) 0%, rgba(96, 165, 250, 0.3) 50%, rgba(88, 28, 135, 0.9) 100%)',
        'gradient-mesh': 'radial-gradient(circle at 20% 80%, rgba(96, 165, 250, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(88, 28, 135, 0.1) 0%, transparent 50%), radial-gradient(circle at 40% 40%, rgba(239, 246, 255, 0.8) 0%, transparent 50%)',
        
        // Utility Gradients
        'gradient-fade-t': 'linear-gradient(to top, transparent 0%, rgba(0, 0, 0, 0.05) 100%)',
        'gradient-fade-b': 'linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.05) 100%)',
        'gradient-fade-l': 'linear-gradient(to left, transparent 0%, rgba(0, 0, 0, 0.05) 100%)',
        'gradient-fade-r': 'linear-gradient(to right, transparent 0%, rgba(0, 0, 0, 0.05) 100%)',
      },
      
      // Box Shadows
      boxShadow: {
        'xs': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'sm': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        'inner': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        'button': '0 4px 14px 0 rgba(59, 130, 246, 0.25)',
        'button-hover': '0 8px 25px 0 rgba(59, 130, 246, 0.35)',
      },
      
      // Border Radius
      borderRadius: {
        'none': '0',
        'sm': '0.125rem',    // 2px
        'md': '0.375rem',    // 6px
        'lg': '0.5rem',      // 8px
        'xl': '0.75rem',     // 12px
        '2xl': '1rem',       // 16px
        '3xl': '1.5rem',     // 24px
        'full': '9999px',
      },
    },
  },
  plugins: [],
}
