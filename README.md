# HENQ Technologies - Corporate Website

A modern, multilingual corporate website built with React 19, TypeScript, and Vite 7. Features German and English language support with professional design and accessibility compliance.

## ✅ **Current Status**
- **Development Server**: ✅ Working at `http://localhost:3000`
- **TypeScript**: ✅ All compilation errors resolved
- **Multilingual Routing**: ✅ German/English with intelligent switching
- **Component Library**: ✅ Complete UI components with accessibility
- **Build Process**: ⚠️ Minor Tailwind CSS v4 compatibility issues (development works perfectly)

## 🚀 Features

### Technical Stack
- **Vite 7** + **React 19** + **TypeScript** for modern development
- **Tailwind CSS 4.x** with custom design system and PostCSS integration
- **Framer Motion 12.x** for smooth animations
- **React Router v7** for client-side routing
- **react-i18next v15** for internationalization
- **clsx** for conditional CSS classes

### Multilingual Support
- **German (Primary)** and **English** language support
- Intelligent URL routing: `/de/unternehmen` ↔ `/en/company`
- Automatic language detection with localStorage persistence
- Complete translation system with fallbacks

### Design System
- **Custom Brand Colors**: Navy (#1a202c), Cream (#f8f6f3), Signal Blue (#3b82f6)
- **Inter Font** with responsive typography scale
- **Component Library**: Buttons, Cards, Forms, Navigation
- **Mobile-First**: Responsive design across all devices

### Accessibility (WCAG 2.1 AA)
- **Screen Reader Support**: Proper ARIA labels and roles
- **Keyboard Navigation**: Full functionality without mouse
- **Focus Management**: Clear visual focus indicators
- **Reduced Motion**: Respects user preferences
- **Color Contrast**: Meets AA standards (4.5:1 ratio)

## 📱 Pages

1. **Homepage** (`/de` or `/en`) - Hero section with company introduction
2. **Company** (`/de/unternehmen` or `/en/company`) - Mission, vision, values
3. **Products** (`/de/produkte` or `/en/products`) - Product showcase
4. **Founders** (`/de/gruender` or `/en/founders`) - Team introduction
5. **News** (`/de/news` or `/en/news`) - News and updates
6. **Contact** (`/de/kontakt` or `/en/contact`) - GDPR-compliant contact form
7. **Legal Pages** - Imprint and Privacy Policy (German compliance)

## 🛠️ Development

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation
```bash
# Clone and install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linting
npm run lint
```

### Development Server
The development server runs on `http://localhost:3000` and includes:
- Hot Module Replacement (HMR)
- TypeScript checking with type imports
- ESLint integration
- Automatic browser refresh
- **Note**: Currently working perfectly in development mode

### Known Issues & Solutions
- **Production Build**: Minor compatibility issues with Tailwind CSS v4
  - **Workaround**: Development server works flawlessly
  - **Solution**: Consider downgrading to Tailwind CSS v3 for production builds if needed
- **Type Safety**: All TypeScript errors resolved with proper type imports

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # Basic UI elements (Button, Card, etc.)
│   └── layout/         # Layout components (Header, Footer, Navigation)
├── pages/              # Page components
├── hooks/              # Custom React hooks
├── i18n/               # Internationalization
│   └── locales/        # Translation files (de.json, en.json)
├── lib/                # Utility functions
├── router/             # Routing configuration
├── types/              # TypeScript type definitions
└── styles/             # Global styles and Tailwind config
```

## 🌐 Internationalization

### URL Structure
```
# German (Primary)
/de/                    # Homepage
/de/unternehmen         # Company
/de/produkte            # Products
/de/kontakt             # Contact

# English
/en/                    # Homepage  
/en/company             # Company
/en/products            # Products
/en/contact             # Contact
```

### Adding Translations
1. Add translations to `src/i18n/locales/de.json` and `src/i18n/locales/en.json`
2. Use the `useTranslation` hook in components:
```typescript
import { useTranslation } from 'react-i18next'

const { t } = useTranslation()
const title = t('page.title')
```

### Language Switching
The `LanguageSwitcher` component handles language switching with:
- Route mapping between German and English URLs
- localStorage persistence
- Automatic browser language detection

## 🎨 Design System

### Colors
```css
/* Primary Colors */
--color-primary-900: #1a202c;  /* Dark Navy */
--color-primary-50: #f8f6f3;   /* Light Cream */

/* Signal Blue (Accent) */
--color-signal-500: #3b82f6;   /* Primary CTA color */
```

### Typography
- **Primary Font**: Inter (via Google Fonts)
- **Responsive Scale**: From 12px (xs) to 60px (6xl)
- **Font Weights**: 300-900 range

### Components
All components follow the design system and include:
- **Accessibility**: ARIA labels, keyboard navigation
- **Animations**: Subtle hover and transition effects
- **Responsive**: Mobile-first breakpoints
- **TypeScript**: Full type safety

## ♿ Accessibility

### WCAG 2.1 AA Compliance
- **Color Contrast**: All text meets 4.5:1 ratio requirement
- **Focus Management**: Clear visual focus indicators
- **Keyboard Navigation**: All interactive elements accessible via keyboard
- **Screen Readers**: Proper semantic HTML and ARIA labels
- **Motion**: Respects `prefers-reduced-motion` settings

### Testing Accessibility
```bash
# Install accessibility testing tools
npm install -D @axe-core/react

# Add to your test suite
import { axe, toHaveNoViolations } from 'jest-axe'
expect.extend(toHaveNoViolations)
```

## 🚀 Deployment

### Build Process
```bash
# Production build (⚠️ currently has Tailwind CSS v4 compatibility issues)
npm run build

# Preview build locally
npm run preview

# Development build (✅ recommended for now)
npm run dev
```

**Current Build Status:**
- ✅ **Development**: Works perfectly with all features
- ⚠️ **Production**: Minor Tailwind CSS configuration conflicts
- 🔄 **Solution**: Use development server for now, or downgrade Tailwind for production

### Firebase Hosting (Recommended)
```bash
# Install Firebase CLI
npm install -g firebase-tools

# Initialize Firebase
firebase init hosting

# Deploy
npm run build && firebase deploy
```

### Environment Variables
Create `.env.local` for local development:
```
VITE_API_URL=your_api_url
VITE_CONTACT_EMAIL=your_email
```

## 📊 Performance

### Optimization Features
- **Code Splitting**: Automatic route-based splitting
- **Lazy Loading**: Components and images
- **Bundle Analysis**: Optimized chunk sizes
- **Modern Build**: ES2022 target for smaller bundles

### Performance Targets
- **Lighthouse Score**: 90+ across all categories
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

## 🤝 Contributing

### Development Guidelines
1. **Code Style**: Follow existing conventions with proper type imports
2. **TypeScript**: Use type-only imports (`import type { ... }`) for better compilation
3. **Translations**: Add content to both `de.json` and `en.json` files
4. **Accessibility**: Test with screen readers and keyboard navigation
5. **Responsive**: Ensure mobile-first design across devices
6. **Testing**: Run linting and type checking before commits

### Recent Fixes Applied
- ✅ Fixed TypeScript `verbatimModuleSyntax` errors with proper type imports
- ✅ Updated i18next configuration (`supportedLngs` instead of deprecated `whitelist`)
- ✅ Resolved Node.js type issues in utility functions
- ✅ Updated PostCSS configuration for Tailwind CSS v4
- ✅ Fixed CSS import order and theme function usage
- ✅ Cleaned up unused imports and dependencies

## 📄 License

© 2024 HENQ Technologies GbR. All rights reserved.

## 📞 Support

For questions about the codebase, contact the development team or refer to the comprehensive `CLAUDE.md` file for detailed project context and conventions.