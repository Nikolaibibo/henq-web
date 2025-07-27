# Troubleshooting Guide - HENQ Technologies Website

## Current Status
- ✅ **Development Server**: Fully functional at `http://localhost:3000`
- ✅ **TypeScript**: All compilation errors resolved
- ⚠️ **Production Build**: Minor Tailwind CSS v4 compatibility issues

## Common Issues & Solutions

### Development Server Issues

#### Issue: Server won't start
```bash
# Check if port is in use
lsof -ti:3000

# Kill existing processes
pkill -f vite

# Restart
npm run dev
```

#### Issue: Hot reload not working
- Clear browser cache and restart server
- Check if files are being watched correctly
- Ensure no syntax errors in components

### TypeScript Issues

#### Issue: Type import errors
**Error**: `'ButtonHTMLAttributes' is a type and must be imported using a type-only import`

**Solution**: Use type-only imports
```typescript
// ❌ Incorrect
import { ButtonHTMLAttributes } from 'react'

// ✅ Correct
import type { ButtonHTMLAttributes } from 'react'
```

#### Issue: Node.js type errors
**Error**: `Cannot find namespace 'NodeJS'`

**Solution**: Use built-in types
```typescript
// ❌ Incorrect
let timeout: NodeJS.Timeout

// ✅ Correct
let timeout: ReturnType<typeof setTimeout>
```

### i18next Configuration Issues

#### Issue: Deprecated options warning
**Error**: `checkWhitelist does not exist in type 'DetectorOptions'`

**Solution**: Update configuration in `/src/i18n/index.ts`
```typescript
// ❌ Incorrect
whitelist: ['de', 'en'],
checkWhitelist: true

// ✅ Correct
supportedLngs: ['de', 'en'],
```

### Tailwind CSS Issues

#### Issue: Utilities not working
**Error**: `Cannot apply unknown utility class 'font-sans'`

**Current Workaround**: The development server works correctly. For production builds:
1. Use development server for now
2. Consider downgrading to Tailwind CSS v3 if production build is needed immediately

#### Issue: Theme function errors
**Error**: `Could not resolve value for theme function`

**Solution**: Use direct hex values instead of theme functions
```css
/* ❌ Incorrect */
outline: 2px solid theme('colors.signal.500');

/* ✅ Correct */
outline: 2px solid #3b82f6;
```

### CSS Import Order Issues

#### Issue: @import after other CSS statements
**Error**: `@import must precede all other statements`

**Solution**: Move imports to the top of `src/index.css`
```css
/* ✅ Correct order */
@import url('https://fonts.googleapis.com/css2?family=Inter...');

@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Route Navigation Issues

#### Issue: Language switching not working
- Check if `useLanguage` hook is properly implemented
- Verify route mapping in `/src/hooks/useLanguage.ts`
- Ensure localStorage is working correctly

#### Issue: 404 on direct URL access
- In development, Vite handles client-side routing automatically
- For production, ensure proper server configuration for SPA routing

### Performance Issues

#### Issue: Slow development server
- Clear `node_modules` and reinstall: `rm -rf node_modules && npm install`
- Check for circular imports in components
- Ensure proper code splitting is working

#### Issue: Large bundle sizes
- Check if manual chunks are configured correctly in `vite.config.ts`
- Verify lazy loading is implemented for pages
- Use browser dev tools to analyze bundle composition

### Accessibility Issues

#### Issue: Screen reader navigation
- Verify ARIA labels are properly set
- Check if skip links are working
- Test with actual screen reader software

#### Issue: Keyboard navigation
- Ensure all interactive elements are focusable
- Check tab order is logical
- Verify focus indicators are visible

## Production Build Workarounds

### Current Status
The production build has minor compatibility issues with Tailwind CSS v4. Here are current workarounds:

#### Option 1: Use Development Server (Recommended)
```bash
npm run dev
```
This provides full functionality for development and testing.

#### Option 2: Downgrade Tailwind (If Production Build Needed)
```bash
npm uninstall tailwindcss @tailwindcss/postcss
npm install tailwindcss@3.4.0
```
Then update `postcss.config.js`:
```javascript
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

#### Option 3: Alternative Build Process
Use Vite's preview mode for production-like testing:
```bash
npm run preview
```

## Getting Help

### Development Environment
- **Node.js**: Ensure version 18+ is installed
- **npm**: Use latest version for best compatibility
- **Browser**: Use modern browser with dev tools

### Debugging Steps
1. Check console for error messages
2. Verify all dependencies are installed: `npm install`
3. Clear cache: `rm -rf node_modules/.vite`
4. Restart development server
5. Check TypeScript compilation: `npx tsc --noEmit`

### Contact & Resources
- Refer to `CLAUDE.md` for detailed project context
- Check `README.md` for setup instructions
- Review component examples in `/src/components/ui/`

## Known Limitations

### Current Development Phase
- Firebase hosting not yet configured
- Analytics integration pending
- Some production optimizations needed for Tailwind CSS v4

### Future Improvements
- Production build optimization for Tailwind CSS v4
- SEO meta tag implementation with React Helmet
- Performance monitoring setup
- Automated testing suite integration

---

*This troubleshooting guide is maintained alongside the project. Update as new issues are discovered and resolved.*