# HENQ Technologies - Project Context for Claude

## Project Overview

**HENQ Technologies GbR** is a modern, multilingual corporate website built with Vite + React, featuring a professional design system and comprehensive internationalization support.

### Technology Stack

- **Framework**: Vite 7.x + React 19 with TypeScript
- **Routing**: React Router v7 with localized routing
- **Styling**: Tailwind CSS 3.4.x (stable version for production)
- **Animations**: Framer Motion 12.x (Motion)
- **Internationalization**: react-i18next v15+ with browser language detection
- **State Management**: React Context + useReducer, Zustand v5 for complex state
- **Utilities**: clsx for conditional CSS classes
- **Hosting**: Firebase Hosting (configured)
- **Analytics**: Firebase Analytics with custom event tracking (implemented)
- **SEO**: React Helmet Async with meta tags and structured data (implemented)
- **Testing**: Vitest with React Testing Library (configured)
- **Performance**: Firebase Performance Monitoring (integrated)

### Current Project Status
- **Development Server**: ✅ Fully functional at `http://localhost:3000`
- **TypeScript**: ✅ All compilation errors resolved with proper type imports
- **Multilingual Routing**: ✅ German/English switching with route mapping
- **Component Library**: ✅ Complete UI components with accessibility
- **Build Process**: ✅ Production build working with Tailwind CSS v3.4
- **Analytics**: ✅ Firebase Analytics integrated with custom events
- **SEO**: ✅ React Helmet implementation with multi-language support
- **Testing**: ✅ 16 tests passing with proper mocking

## Design System & Branding

### Color Palette
```css
/* Primary Colors */
--color-primary-900: #1a202c;  /* Dark Navy */
--color-primary-800: #2d3748;
--color-primary-700: #4a5568;
--color-neutral-50: #f8f6f3;   /* Light Cream */
--color-neutral-100: #f1ede7;

/* Signal Blue (Accent) */
--color-signal-500: #3b82f6;   /* Primary CTA color */
--color-signal-400: #60a5fa;
--color-signal-600: #2563eb;
```

### Typography
- **Primary Font**: Inter (via Google Fonts)
- **Font Scale**: 6xl (60px) down to xs (12px)
- **Font Weights**: 300-900 range

### Design Principles
- Minimalist & clean design
- High contrast for accessibility
- Consistent spacing system
- Mobile-first approach

## Project Architecture

### Folder Structure
```
src/
├── components/
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Container.tsx
│   │   ├── Input.tsx
│   │   ├── Textarea.tsx
│   │   ├── index.ts
│   │   └── __tests__/
│   │       └── Button.test.tsx
│   ├── layout/
│   │   ├── Layout.tsx
│   │   ├── Navigation.tsx
│   │   ├── Footer.tsx
│   │   └── LanguageSwitcher.tsx
│   ├── AnalyticsProvider.tsx
│   └── SEO.tsx
├── pages/
│   ├── HomePage.tsx
│   ├── CompanyPage.tsx
│   ├── ProductsPage.tsx
│   ├── FoundersPage.tsx
│   ├── NewsPage.tsx
│   ├── ContactPage.tsx
│   ├── ImprintPage.tsx
│   └── PrivacyPage.tsx
├── router/
│   ├── index.tsx
│   └── LanguageDetector.tsx
├── hooks/
│   ├── useLanguage.ts
│   └── useAnalytics.ts
├── lib/
│   ├── utils.ts
│   └── __tests__/
│       └── utils.test.ts
├── config/
│   └── firebase.ts
├── test/
│   ├── setup.ts
│   └── mocks/
│       └── firebase.ts
├── i18n/
│   ├── index.ts
│   └── locales/
│       ├── de.json
│       └── en.json
├── types/
│   └── index.ts
└── assets/
    ├── images/
    └── icons/
```

## Development Commands

```bash
# Development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Linting
npm run lint

# Testing
npm run test
npm run test:ui
npm run test:coverage

# Firebase deployment
firebase deploy
```

## Code Conventions & Preferences

### React Patterns
- Use **React 19 features**: forwardRef still used for compatibility
- **Functional components** with hooks
- **TypeScript** with proper type imports (`import type { ... }`)
- **Custom hooks** for reusable logic
- **Context + useReducer** for global state

### TypeScript Conventions
- **Type-only imports**: Use `import type { ... }` for type imports
- **Proper interfaces**: Defined in `/src/types/index.ts`
- **Strict typing**: All components and utilities fully typed
- **Node.js compatibility**: Use `ReturnType<typeof setTimeout>` instead of `NodeJS.Timeout`

### Styling Conventions
- **Tailwind CSS** utility classes
- **Custom CSS variables** for design tokens
- **Component-based** styling in separate CSS files when needed
- **Responsive-first** approach with mobile-first breakpoints

### Animation Guidelines
- **Framer Motion** for all animations
- **Subtle micro-interactions**: hover states, button presses
- **Page transitions** with smooth fade and movement
- **Performance-first**: avoid animating layout properties

### File Naming
- **PascalCase** for React components (`HomePage.tsx`)
- **camelCase** for hooks (`useLanguage.ts`)
- **kebab-case** for regular files (`firebase-config.ts`)
- **Descriptive names** that indicate purpose

### Import Organization
```typescript
// External libraries
import React from 'react';
import { useTranslation } from 'react-i18next';

// Internal components
import { Button } from '@/components/ui/Button';
import { Layout } from '@/components/layout/Layout';

// Hooks and utilities
import { useLanguage } from '@/hooks/useLanguage';
import { cn } from '@/lib/utils';

// Types
import type { ComponentProps } from './types';
```

## Performance & SEO Requirements

### Performance Targets
- **Lighthouse Score**: 90+ (all categories)
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

### SEO Implementation
- **React Helmet Async** for dynamic meta tags
- **Structured data** (JSON-LD) for rich snippets
- **Multi-language support** with hreflang tags
- **Open Graph** and Twitter Card meta tags
- **Canonical URLs** for duplicate content prevention

### Accessibility Standards
- **WCAG 2.1 AA** compliance
- **Keyboard navigation** for all interactive elements
- **Color contrast** ratios (4.5:1 minimum)
- **ARIA labels** where necessary
- **Focus states** for all interactive elements
- **Screen reader friendly** markup
- **Reduced motion** support

## Internationalization Guidelines

### Translation Management
- **Namespace-based** translations in JSON files
- **Interpolation** for dynamic content
- **Pluralization** rules for German/English
- **Context-aware** translations where needed

### Content Strategy
- **German-first** content creation
- **Professional tone** for German market
- **Localized contact information**
- **Cultural adaptation** not just translation

## Security & Compliance

### GDPR Compliance
- **Cookie consent banner** with opt-in
- **Privacy policy** in both languages
- **IP anonymization** for analytics
- **Contact form** with explicit consent

### Security Headers
- **X-Frame-Options**: DENY
- **X-Content-Type-Options**: nosniff
- **Referrer-Policy**: origin-when-cross-origin
- **Content Security Policy** for XSS protection

## Deployment & Hosting

### Firebase Configuration (✅ Implemented)
- **Hosting**: firebase.json configured for SPA routing
- **Analytics**: Custom event tracking implemented
  - Page views
  - Button clicks
  - Form submissions
  - Language changes
- **Performance**: Firebase Performance Monitoring integrated
- **Environment**: Requires Firebase credentials in .env

### CI/CD Pipeline
- **GitHub Actions** for automated deployment
- **Lighthouse CI** for performance monitoring
- **Type checking** and linting in pipeline
- **Multi-language testing**

## Content Guidelines

### Homepage Sections
1. **Hero Section**: Company introduction with CTA
2. **Services Overview**: Key offerings
3. **Company Values**: What makes HENQ unique
4. **Founders Section**: Team introduction
5. **Contact CTA**: Get in touch section

### Page Types
- **Landing pages**: Hero + content + CTA
- **Content pages**: Structured content with navigation
- **Legal pages**: Imprint, Privacy (GDPR compliant)
- **Contact page**: Form + company information

## Error Handling & Testing

### Error Boundaries
- **React Error Boundaries** for component crashes
- **Fallback UI** for graceful degradation
- **Error tracking** with structured logging

### Testing Strategy
- **Vitest** for unit tests (✅ Configured)
- **React Testing Library** for component tests (✅ Working)
- **Test Coverage**: 16 tests passing
- **Mocks**: Firebase analytics properly mocked
- **Config**: Using `vite.config.test.ts` for test environment

## Special Considerations

### Multilingual Routing
- **Client-side routing** with React Router v7
- **Language detection** on first visit
- **Persistent language preference**
- **SEO-friendly URLs** in both languages

### Animation Performance
- **Transform-based animations** for 60fps
- **Intersection Observer** for scroll animations
- **Reduced motion** media query support
- **Framer Motion optimization** techniques

### Image Optimization
- **WebP/AVIF** format support
- **Responsive images** with srcset
- **Lazy loading** below the fold
- **Alt text localization**

## Common Tasks & Patterns

When working on this project, prioritize:

1. **Accessibility first**: Every component should be screen reader friendly
2. **Mobile responsive**: Design mobile-first, enhance for desktop
3. **Performance aware**: Consider bundle size and loading performance
4. **SEO optimized**: Proper meta tags and structured data
5. **Internationalization ready**: All text should be translatable
6. **Type safe**: Use TypeScript for better developer experience
7. **Consistent styling**: Follow the design system variables
8. **Animation performance**: Use transform properties for smooth animations

## Recent Updates

### Logo Integration (Latest)
- ✅ HENQ Technologies logo integrated from docs/logo.jpg
- ✅ Logo implemented in navigation header and footer
- ✅ Multiple favicon formats created (16x16, 32x32, SVG, Apple touch)
- ✅ Open Graph and SEO metadata updated with logo
- ✅ Responsive design with proper accessibility attributes

### Enhanced SEO & Metadata
- ✅ Comprehensive structured data with founder information
- ✅ Enhanced Open Graph and Twitter Card tags
- ✅ PWA manifest and security headers
- ✅ Robots.txt and sitemap configuration
- ✅ Copyright year updated to 2025

### Animation System Improvements
- Fixed animation reliability issues with simple, lightweight approach
- Replaced complex IntersectionObserver-based animations with timer-based SimpleAnimation component
- Guaranteed content visibility regardless of animation performance
- Removed complex fallback systems in favor of predictable timing

### Translation System
- Comprehensive translation audit completed
- All hardcoded strings replaced with i18n keys
- Nested translation structure for better organization
- Real company information integrated throughout

## Recent Technical Fixes & Solutions

### TypeScript Compilation Issues (✅ Resolved)
- **Problem**: `verbatimModuleSyntax` errors in UI components
- **Solution**: Converted to type-only imports (`import type { ... }`)
- **Files affected**: All components in `/src/components/ui/`

### i18next Configuration (✅ Resolved)
- **Problem**: Deprecated `whitelist` and `checkWhitelist` options
- **Solution**: Updated to `supportedLngs` in `/src/i18n/index.ts`
- **Impact**: Proper language validation and detection

### Node.js Type Issues (✅ Resolved)
- **Problem**: `NodeJS.Timeout` not found in utils
- **Solution**: Use `ReturnType<typeof setTimeout>` in `/src/lib/utils.ts`
- **Benefit**: Better cross-platform compatibility

### Vite Configuration (✅ Resolved)
- **Problem**: Path resolution and `__dirname` issues
- **Solution**: Simplified alias configuration in `vite.config.ts`
- **Result**: Cleaner build process

### PostCSS & Tailwind Setup (✅ Resolved)
- **Problem**: Tailwind CSS v4 compatibility issues
- **Solution**: Downgraded to stable Tailwind CSS v3.4.0
- **Status**: Both development and production builds working perfectly

### CSS Structure (✅ Resolved)
- **Problem**: `@import` statements after Tailwind directives
- **Solution**: Moved font imports before Tailwind directives in `index.css`
- **Fix**: Replaced `theme()` function with direct hex values for compatibility

### Firebase Analytics Import (✅ Resolved)
- **Problem**: `Analytics` is a type, not a value export
- **Solution**: Use `import type { Analytics }` for type imports
- **Files**: `/src/config/firebase.ts`

## Notes for Claude

### Current Workflow
- **Development**: Use `npm run dev` (fully functional)
- **Type checking**: All TypeScript errors resolved
- **Component development**: Follow type-only import pattern
- **Styling**: Use Tailwind utilities with custom design tokens
- **Internationalization**: Add translations to both language files
- **Testing**: Run tests with `npm run test`
- **Analytics**: Track custom events through Firebase helpers

### Key Technical Patterns
- Always check existing patterns before creating new ones
- Follow the established design system variables
- Consider both German and English content when implementing features
- Test responsiveness across device sizes
- Verify accessibility compliance for new components
- Use the project's TypeScript types and interfaces
- Follow the established folder structure and naming conventions
- Use type-only imports for better compilation performance
- Mock external dependencies in tests (e.g., Firebase)

### Current Focus Areas
1. **Content Completion**: Ensure all text is translated
2. **SEO Optimization**: Meta tags for all pages
3. **Performance**: Monitor and optimize bundle sizes
4. **Testing**: Increase test coverage for critical paths
5. **Analytics**: Implement comprehensive event tracking

---

**Last Updated**: Current session
**Primary Developer**: Claude (AI Assistant)
**Human Collaborator**: Project Owner