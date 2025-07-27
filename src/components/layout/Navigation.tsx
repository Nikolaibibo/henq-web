import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '@/hooks/useLanguage'
import { LanguageSwitcher } from './LanguageSwitcher'
import { cn } from '@/lib/utils'

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { t } = useTranslation()
  const { getLocalizedPath, currentLanguage } = useLanguage()
  const location = useLocation()

  const navigationItems = [
    { key: 'home', path: '', labelKey: 'nav.home' },
    { 
      key: 'company', 
      path: currentLanguage === 'de' ? 'unternehmen' : 'company', 
      labelKey: 'nav.company' 
    },
    { 
      key: 'products', 
      path: currentLanguage === 'de' ? 'produkte' : 'products', 
      labelKey: 'nav.products' 
    },
    { 
      key: 'founders', 
      path: currentLanguage === 'de' ? 'gruender' : 'founders', 
      labelKey: 'nav.founders' 
    },
    { key: 'news', path: 'news', labelKey: 'nav.news' },
    { 
      key: 'contact', 
      path: currentLanguage === 'de' ? 'kontakt' : 'contact', 
      labelKey: 'nav.contact' 
    }
  ]

  const isActivePath = (path: string) => {
    const fullPath = getLocalizedPath(path)
    return location.pathname === fullPath
  }

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <nav 
      className="bg-primary-900/95 backdrop-blur-md border-b border-primary-700 sticky top-0 z-50"
      role="navigation"
      aria-label={t('accessibility.navigation')}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link 
            to={getLocalizedPath('')}
            className="text-xl font-bold text-primary-50 hover:text-signal-400 transition-colors"
            aria-label={t('nav.home')}
          >
            HENQ Technologies
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.key}
                to={getLocalizedPath(item.path)}
                className={cn(
                  'nav-link',
                  isActivePath(item.path) && 'nav-link-active'
                )}
                aria-current={isActivePath(item.path) ? 'page' : undefined}
              >
                {t(item.labelKey)}
              </Link>
            ))}
            
            <LanguageSwitcher />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-primary-50 hover:text-signal-400 focus:outline-none"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            <svg 
              className="h-6 w-6" 
              fill="none" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden border-t border-primary-700"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigationItems.map((item) => (
                  <Link
                    key={item.key}
                    to={getLocalizedPath(item.path)}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      'block px-3 py-2 rounded-md text-base font-medium transition-colors',
                      isActivePath(item.path) 
                        ? 'text-signal-400 bg-primary-800' 
                        : 'text-primary-100 hover:text-signal-400 hover:bg-primary-800'
                    )}
                    aria-current={isActivePath(item.path) ? 'page' : undefined}
                  >
                    {t(item.labelKey)}
                  </Link>
                ))}
                
                <div className="px-3 py-2">
                  <LanguageSwitcher />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}