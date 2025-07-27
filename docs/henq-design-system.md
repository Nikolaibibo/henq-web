# HENQ Technologies - Design System Specification

## 1. Brand Foundation

### Logo & Typography
- **Primary Branding:** HENQ TECHNOLOGIES GbR
- **Logo Style:** Bold, modern sans-serif with high contrast
- **Brand Personality:** Professional, innovative, trustworthy, forward-thinking

### Design Philosophy
- **Minimalist & Clean:** Focus on content, not decoration
- **High Contrast:** Excellent readability and accessibility
- **Geometric Precision:** Clean lines and structured layouts
- **Subtle Sophistication:** Professional without being corporate-stiff

## 2. Color Palette

### Primary Colors
```css
/* Dark Navy (from logo background) */
--color-primary-900: #1a202c;
--color-primary-800: #2d3748;
--color-primary-700: #4a5568;

/* Light Cream (from logo text) */
--color-neutral-50: #f8f6f3;
--color-neutral-100: #f1ede7;
--color-neutral-200: #e8e2db;
```

### Signal Blue (Accent Color)
```css
/* Signal-inspired blue for CTAs and highlights */
--color-signal-500: #3b82f6;    /* Primary signal blue */
--color-signal-400: #60a5fa;    /* Lighter variant */
--color-signal-600: #2563eb;    /* Darker variant */
--color-signal-50: #eff6ff;     /* Very light background */
```

### Semantic Colors
```css
/* Success */
--color-success-500: #10b981;
--color-success-50: #ecfdf5;

/* Warning */
--color-warning-500: #f59e0b;
--color-warning-50: #fffbeb;

/* Error */
--color-error-500: #ef4444;
--color-error-50: #fef2f2;
```

### Usage Guidelines
- **Primary Navy:** Backgrounds, headers, main text
- **Light Cream:** Backgrounds, cards, secondary text
- **Signal Blue:** Call-to-action buttons, links, highlights
- **White:** Clean backgrounds, text on dark sections

## 3. Typography

### Font Stack
```css
/* Primary: Modern, clean sans-serif */
--font-primary: 'Inter', 'Helvetica Neue', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;

/* Alternative: For more personality if needed */
--font-secondary: 'Poppins', sans-serif;

/* Monospace: For code snippets */
--font-mono: 'JetBrains Mono', 'Fira Code', monospace;
```

### Type Scale
```css
/* Headings */
--text-6xl: 3.75rem;  /* 60px - Hero titles */
--text-5xl: 3rem;     /* 48px - Page titles */
--text-4xl: 2.25rem;  /* 36px - Section headers */
--text-3xl: 1.875rem; /* 30px - Subsection headers */
--text-2xl: 1.5rem;   /* 24px - Card titles */
--text-xl: 1.25rem;   /* 20px - Large text */

/* Body */
--text-lg: 1.125rem;  /* 18px - Large body */
--text-base: 1rem;    /* 16px - Default body */
--text-sm: 0.875rem;  /* 14px - Small text */
--text-xs: 0.75rem;   /* 12px - Captions */
```

### Font Weights
```css
--font-light: 300;
--font-normal: 400;
--font-medium: 500;
--font-semibold: 600;
--font-bold: 700;
--font-black: 900;
```

## 4. Spacing & Layout

### Spacing Scale
```css
--space-1: 0.25rem;   /* 4px */
--space-2: 0.5rem;    /* 8px */
--space-3: 0.75rem;   /* 12px */
--space-4: 1rem;      /* 16px */
--space-5: 1.25rem;   /* 20px */
--space-6: 1.5rem;    /* 24px */
--space-8: 2rem;      /* 32px */
--space-10: 2.5rem;   /* 40px */
--space-12: 3rem;     /* 48px */
--space-16: 4rem;     /* 64px */
--space-20: 5rem;     /* 80px */
--space-24: 6rem;     /* 96px */
--space-32: 8rem;     /* 128px */
```

### Layout Grid
```css
/* Container max-widths */
--container-sm: 640px;
--container-md: 768px;
--container-lg: 1024px;
--container-xl: 1280px;
--container-2xl: 1536px;

/* Section padding */
--section-padding-y: var(--space-16);  /* 64px vertical */
--section-padding-x: var(--space-6);   /* 24px horizontal */
```

## 5. Components & Elements

### Buttons
```css
/* Primary Button */
.btn-primary {
  background: var(--color-signal-500);
  color: white;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: var(--font-medium);
  transition: all 0.2s ease;
}

.btn-primary:hover {
  background: var(--color-signal-600);
  transform: translateY(-1px);
}

/* Secondary Button */
.btn-secondary {
  background: transparent;
  color: var(--color-primary-900);
  border: 2px solid var(--color-primary-900);
  padding: 10px 22px;
  border-radius: 8px;
}

/* Ghost Button */
.btn-ghost {
  background: transparent;
  color: var(--color-signal-500);
  padding: 12px 24px;
  border-radius: 8px;
}
```

### Cards
```css
.card {
  background: white;
  border-radius: 12px;
  padding: var(--space-6);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.card:hover {
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
  transform: translateY(-2px);
}
```

### Forms
```css
.input {
  width: 100%;
  padding: 12px 16px;
  border: 2px solid var(--color-neutral-200);
  border-radius: 8px;
  font-size: var(--text-base);
  transition: border-color 0.2s ease;
}

.input:focus {
  border-color: var(--color-signal-500);
  outline: none;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}
```

## 6. Animation Guidelines

### Timing & Easing
```css
/* Standard transitions */
--transition-fast: 0.15s ease;
--transition-normal: 0.2s ease;
--transition-slow: 0.3s ease;

/* Easing curves */
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
--ease-out: cubic-bezier(0, 0, 0.2, 1);
--ease-spring: cubic-bezier(0.68, -0.55, 0.265, 1.55);
```

### Micro-Interactions
- **Hover states:** Subtle lift (2-4px) with shadow increase
- **Button presses:** Scale down (0.98) with shadow decrease
- **Page transitions:** Smooth fade with slight movement
- **Loading states:** Subtle pulse or skeleton animations

### Framer Motion Presets
```typescript
// Page transitions
export const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
};

// Stagger children
export const containerVariants = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

// Hover animations
export const hoverScale = {
  whileHover: { scale: 1.02, y: -2 },
  whileTap: { scale: 0.98 }
};
```

## 7. Layout Patterns

### Homepage Hero Section
```css
.hero {
  background: var(--color-primary-900);
  color: var(--color-neutral-50);
  padding: var(--space-24) var(--space-6);
  text-align: center;
}

.hero-title {
  font-size: var(--text-6xl);
  font-weight: var(--font-bold);
  margin-bottom: var(--space-6);
  line-height: 1.1;
}
```

### Section Layout
```css
.section {
  padding: var(--section-padding-y) var(--section-padding-x);
  max-width: var(--container-xl);
  margin: 0 auto;
}

.section-title {
  font-size: var(--text-4xl);
  font-weight: var(--font-bold);
  color: var(--color-primary-900);
  margin-bottom: var(--space-12);
  text-align: center;
}
```

### Navigation
```css
.nav {
  background: rgba(26, 32, 44, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  position: fixed;
  width: 100%;
  z-index: 50;
}

.nav-link {
  color: var(--color-neutral-100);
  font-weight: var(--font-medium);
  transition: color var(--transition-normal);
}

.nav-link:hover {
  color: var(--color-signal-400);
}
```

## 8. Responsive Design

### Breakpoints
```css
/* Mobile first approach */
--breakpoint-sm: 640px;   /* Small tablets */
--breakpoint-md: 768px;   /* Tablets */
--breakpoint-lg: 1024px;  /* Laptops */
--breakpoint-xl: 1280px;  /* Desktops */
--breakpoint-2xl: 1536px; /* Large desktops */
```

### Typography Scaling
```css
/* Mobile */
.hero-title { font-size: var(--text-4xl); }

/* Tablet and up */
@media (min-width: 768px) {
  .hero-title { font-size: var(--text-5xl); }
}

/* Desktop and up */
@media (min-width: 1024px) {
  .hero-title { font-size: var(--text-6xl); }
}
```

## 9. Accessibility

### Color Contrast
- **AA Standard:** Minimum 4.5:1 ratio for normal text
- **AAA Standard:** 7:1 ratio for enhanced readability
- **Large text:** Minimum 3:1 ratio

### Focus States
```css
.focus-visible {
  outline: 2px solid var(--color-signal-500);
  outline-offset: 2px;
}
```

### Motion Preferences
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

## 10. Implementation in Tailwind CSS

### Custom Theme Configuration
```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f8f6f3',
          100: '#f1ede7',
          700: '#4a5568',
          800: '#2d3748',
          900: '#1a202c',
        },
        signal: {
          50: '#eff6ff',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
      }
    }
  }
}
```

---

*This design system provides a comprehensive foundation for the HENQ Technologies website, ensuring consistency, accessibility, and professional appearance across all devices and interactions.*