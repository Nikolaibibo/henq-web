# HENQ Technologies GbR - Technical Specification (Vite + React)

## 1. Technology Stack

### Frontend Framework
- **Vite 6.x** (Latest - Build tool with lightning-fast HMR)
- **React 19** with TypeScript
- **React Router v7** for client-side routing
- **React Query/TanStack Query v5** for data fetching (if needed)
- **Optimized for performance** with automatic code splitting

### Styling & UI
- **Tailwind CSS 3.4+**
  - Utility-first CSS framework
  - Responsive design out-of-the-box
  - Custom design system for HENQ branding
  - JIT (Just-In-Time) compilation for optimal bundle size

### Animations
- **Framer Motion 12.x** (now called "Motion")
  - Performant, declarative animations
  - Scroll-based animations
  - Page transitions
  - Micro-interactions for enhanced UX
  - New hybrid engine for better performance

### State Management
- **React Context + useReducer** for global state
- **Zustand v5** as lightweight alternative for complex state
- **Local state** with useState for component-specific data

### Internationalization (i18n)
- **react-i18next v15+** for translations and locale management
- **i18next-browser-languagedetector** for automatic language detection
- **Custom routing solution** for localized URLs with React Router v7
- **Manual language switcher** with preference persistence

## 2. Backend & Infrastructure

### Hosting & Deployment
- **Firebase Hosting**
  - Global CDN for optimal performance
  - Automatic SSL certificates
  - Custom domain support
  - Automatic compression (Gzip/Brotli)

### Serverless Functions
- **Firebase Functions (Node.js)**
  - Contact form handler
  - Newsletter signup (optional)
  - Email sending via SendGrid/Nodemailer

### Database (Optional)
- **Firestore** for news/blog functionality
- **Firebase Storage** for media assets

## 3. Performance & SEO

### Core Web Vitals Optimization
- **Image Optimization:** Next.js Image Component with WebP/AVIF
- **Font Optimization:** next/font for optimal font loading
- **Bundle Optimization:** Automatic code splitting
- **Lazy Loading:** For images and components

### SEO Features
- **Metadata API:** Dynamic meta tags per page and locale
- **Structured Data:** JSON-LD for rich snippets (localized)
- **Sitemap:** Automatic generation per language
- **Robots.txt:** SEO-optimized
- **hreflang tags:** For international SEO
- **Localized URLs:** Translated slugs for better local SEO

### Performance Targets
- **Lighthouse Score:** 90+ (all categories)
- **First Contentful Paint:** < 1.5s
- **Largest Contentful Paint:** < 2.5s
- **Cumulative Layout Shift:** < 0.1

## 4. Tracking & Analytics

### Google Analytics 4
```typescript
// GA4 Implementation
gtag('config', 'GA_MEASUREMENT_ID', {
  page_title: document.title,
  page_location: window.location.href,
  anonymize_ip: true, // GDPR compliant
});
```

### Cookie Management
- **react-cookie-consent** for GDPR-compliant cookie banner
- Granular cookie categories (Essential, Analytics, Marketing)
- Opt-in for all non-essential cookies

### Event Tracking
- Contact form submissions
- Newsletter signups
- Product interest (teaser clicks)
- Download events

## 5. Internationalization Architecture

### Supported Languages
- **German (de):** Primary language
- **English (en):** Secondary language

### URL Structure with React Router
```
// German (Primary)
henq.com/de/                    # Homepage
henq.com/de/unternehmen         # Company
henq.com/de/produkte            # Products
henq.com/de/gruender            # Founders
henq.com/de/news                # News
henq.com/de/kontakt             # Contact
henq.com/de/impressum           # Imprint
henq.com/de/datenschutz         # Privacy

// English
henq.com/en/                    # Homepage
henq.com/en/company             # Company
henq.com/en/products            # Products
henq.com/en/founders            # Founders
henq.com/en/news                # News
henq.com/en/contact             # Contact
henq.com/en/imprint             # Imprint
henq.com/en/privacy             # Privacy

// Root redirect
henq.com/                       # Redirects to /de or /en based on browser language
```

### React Router v7 Setup
```typescript
// src/App.tsx
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { LanguageDetector } from './components/LanguageDetector';

// React Router v7 uses createBrowserRouter (data router)
const router = createBrowserRouter([
  {
    path: "/",
    element: <LanguageDetector />,
  },
  {
    path: "/:locale",
    element: <LocalizedLayout />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: "unternehmen", // German route
        element: <CompanyPage />
      },
      {
        path: "company", // English route  
        element: <CompanyPage />
      },
      {
        path: "produkte", // German route
        element: <ProductsPage />
      },
      {
        path: "products", // English route
        element: <ProductsPage />
      }
      // ... more routes
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}
```

### Translation Management
```typescript
// src/i18n/index.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import deTranslations from './locales/de.json';
import enTranslations from './locales/en.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      de: { translation: deTranslations },
      en: { translation: enTranslations }
    },
    fallbackLng: 'de',
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage']
    }
  });
```

## 6. Project Structure

```
henq-website/
├── src/
│   ├── components/
│   │   ├── ui/                    # Reusable UI Components
│   │   ├── layout/                # Layout Components (Header, Footer)
│   │   ├── sections/              # Page Sections
│   │   ├── forms/                 # Contact Forms
│   │   ├── animations/            # Framer Motion Components
│   │   └── LanguageSwitcher.tsx   # Language toggle component
│   ├── pages/
│   │   ├── HomePage.tsx           # Homepage
│   │   ├── CompanyPage.tsx        # Company page
│   │   ├── ProductsPage.tsx       # Products overview
│   │   ├── FoundersPage.tsx       # Founders page
│   │   ├── NewsPage.tsx           # News/Blog page
│   │   ├── ContactPage.tsx        # Contact page
│   │   ├── ImprintPage.tsx        # Imprint page
│   │   └── PrivacyPage.tsx        # Privacy page
│   ├── routes/
│   │   ├── LocalizedRoutes.tsx    # Route component with locale
│   │   └── LanguageDetector.tsx   # Language detection logic
│   ├── hooks/
│   │   ├── useLanguage.ts         # Language management hook
│   │   └── useLocalizedRouting.ts # Routing with i18n
│   ├── lib/
│   │   ├── firebase.ts            # Firebase Config
│   │   ├── analytics.ts           # GA4 Setup
│   │   ├── seo.ts                 # SEO utilities
│   │   └── utils.ts               # Helper Functions
│   ├── i18n/
│   │   ├── index.ts               # i18n configuration
│   │   └── locales/
│   │       ├── de.json            # German translations
│   │       ├── en.json            # English translations
│   │       └── common.json        # Shared translations
│   ├── styles/
│   │   ├── globals.css
│   │   └── components.css
│   ├── assets/
│   │   ├── images/
│   │   └── icons/
│   ├── App.tsx                    # Main App component
│   ├── main.tsx                   # Vite entry point
│   └── vite-env.d.ts
├── public/
│   ├── images/
│   ├── icons/
│   ├── sitemap.xml
│   └── robots.txt
├── firebase.json
├── vite.config.ts
├── tailwind.config.js
├── tsconfig.json
└── package.json
```

## 7. Development Workflow

### Build & Deployment
```bash
# Development
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Deploy to Firebase
npm run build && firebase deploy
```

### Vite 6 Configuration
```typescript
// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}']
      }
    })
  ],
  build: {
    target: 'es2022', // Updated for Vite 6
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          i18n: ['react-i18next', 'i18next'],
          animations: ['framer-motion']
        }
      }
    }
  },
  server: {
    port: 3000
  }
});
```

### Package.json with Updated Versions
```json
{
  "dependencies": {
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "react-router-dom": "^7.7.1",
    "react-i18next": "^15.1.4",
    "i18next": "^23.17.0",
    "i18next-browser-languagedetector": "^8.0.0",
    "framer-motion": "^12.23.9",
    "react-helmet-async": "^2.0.5",
    "zustand": "^5.0.2"
  },
  "devDependencies": {
    "vite": "^6.0.0",
    "@vitejs/plugin-react": "^4.3.4",
    "typescript": "^5.8.0",
    "@types/react": "^19.0.0",
    "@types/react-dom": "^19.0.0",
    "tailwindcss": "^3.4.0",
    "autoprefixer": "^10.4.0",
    "postcss": "^8.4.0",
    "vite-plugin-pwa": "^0.21.0"
  }
}
```

### Version Control
- **Git** with feature-branch workflow
- **Conventional Commits** for clean history
- **GitHub Actions** for automated deployment to Firebase

### Testing (Optional but recommended)
- **Vitest v3** for unit tests (Vite's native testing framework)
- **React Testing Library v16** for component tests
- **Cypress v13** for E2E testing (both languages)
- **Lighthouse CI** for performance monitoring per locale

### Modern React 19 Features to Leverage
- **React Compiler (RC)** for automatic optimization
- **use() hook** for better data fetching
- **Improved hydration** and error handling
- **forwardRef removal** - ref as prop in function components

## 8. Security & Compliance

### GDPR Compliance
- Cookie banner with opt-in (localized)
- Privacy policy (DE/EN versions)
- IP anonymization for analytics
- Contact form with explicit consent (localized)

### Security Headers
```javascript
// next.config.js
const securityHeaders = [
  {
    key: 'X-Frame-Options',
    value: 'DENY'
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  },
  {
    key: 'Referrer-Policy',
    value: 'origin-when-cross-origin'
  }
];
```

### Language-specific Analytics
```typescript
// Track language usage
gtag('config', 'GA_MEASUREMENT_ID', {
  custom_map: {
    custom_dimension_1: 'language'
  }
});

gtag('event', 'page_view', {
  language: locale
});
```

## 9. Content Management

### Static Content
- **Markdown** for news/blog posts (with frontmatter for translations)
- **MDX** for interactive content (optional)
- **Git-based workflow** for content updates
- **Translation files** in JSON format for UI elements

### Content Structure Example
```markdown
// blog-post.de.md
---
title: "Deutscher Titel"
slug: "deutscher-slug"
language: "de"
translations:
  en: "english-slug"
---

Content in German...

// blog-post.en.md
---
title: "English Title"
slug: "english-slug"
language: "en"
translations:
  de: "deutscher-slug"
---

Content in English...
```

### Media Management
- **Next.js Image Optimization**
- **Firebase Storage** for large assets
- **WebP/AVIF** format support
- **Alt text localization** for accessibility

## 9. Monitoring & Maintenance

### Performance Monitoring
- **Core Web Vitals** via Google Search Console
- **Firebase Performance Monitoring**
- **Lighthouse CI** for continuous performance checks

### Error Tracking
- **Firebase Crashlytics** (optional)
- **Sentry** for detailed error tracking

### Backup & Recovery
- **Git Repository** as source of truth
- **Firebase Automatic Backups**

## 10. Cost Estimation

### Firebase Hosting
- **Spark Plan (Free):** Up to 10GB storage, 10GB transfer/month
- **Blaze Plan:** Pay-as-you-go (very low costs with moderate traffic)

### Development Time Estimation
- **Setup & Configuration:** 1-2 days (Vite + React setup is simpler than Next.js)
- **Basic Website (without animations):** 5-7 days
- **Internationalization Implementation:** 2-3 days
- **Animations & Interactions:** 3-4 days
- **SEO Implementation:** 1-2 days
- **Testing & Deployment:** 1-2 days
- **Total:** 13-20 working days

## 12. Next Steps

1. **Repository Setup** (GitHub + Firebase Project)
2. **Vite + React Project Initialization**
3. **i18n Configuration** (react-i18next setup)
4. **React Router Setup** with localized routing
5. **Design System Implementation** (Tailwind + custom components)
6. **Content Preparation** (texts in both languages, images, assets)
7. **Translation Structure** (JSON files for UI elements)
8. **Development Environment Setup**
9. **Iterative Development** with regular reviews

### Vite + React Advantages for Your Use Case

**Why Vite + React is Perfect:**
- **Lightning-fast development** with instant HMR
- **No framework overhead** - pure React flexibility
- **Simpler deployment** to Firebase Hosting
- **Better control** over routing and state management
- **Smaller bundle sizes** with Vite's optimization
- **Less configuration complexity** compared to Next.js

**SEO Considerations:**
- **React Helmet Async** for dynamic meta tags
- **Prerendering** for static pages via build scripts
- **Proper structured data** implementation
- **Manual sitemap generation** for both languages

### Additional Considerations for Multilingual SPA

**Routing Strategy:**
- React Router handles all routing client-side
- Language detection on initial load
- Persistent language preference in localStorage
- Proper URL structure for SEO

**Performance Optimizations:**
- Code splitting by language using dynamic imports
- Lazy loading of translation files
- Image optimization with modern formats
- Service Worker for offline functionality

**SEO Strategy:**
- Server-side prerendering for critical pages
- Structured data for rich snippets
- Language-specific meta tags and Open Graph
- XML sitemaps for each language

---

*This specification provides a comprehensive, modern foundation for the multilingual HENQ Technologies website using Vite + React, optimized for performance, SEO, and developer experience.*