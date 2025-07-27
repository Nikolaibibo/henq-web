import { useEffect, Suspense } from 'react'
import { Outlet, useParams, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Navigation } from './Navigation'
import { Footer } from './Footer'
import { AnalyticsProvider } from '@/components/AnalyticsProvider'

const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-signal-500"></div>
  </div>
)

const SkipLink = () => {
  const { t } = useTranslation()
  
  return (
    <a 
      href="#main-content" 
      className="skip-link"
      onFocus={(e) => e.target.classList.add('focus-visible')}
      onBlur={(e) => e.target.classList.remove('focus-visible')}
    >
      {t('common.skipToContent')}
    </a>
  )
}

export const Layout = () => {
  const { locale } = useParams<{ locale: string }>()
  const { i18n } = useTranslation()
  const location = useLocation()

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location.pathname])

  // Handle language changes
  useEffect(() => {
    if (locale && ['de', 'en'].includes(locale) && i18n.language !== locale) {
      i18n.changeLanguage(locale)
      localStorage.setItem('henq-language', locale)
    }
  }, [locale, i18n])

  // Set document language and direction
  useEffect(() => {
    if (locale) {
      document.documentElement.lang = locale
      document.documentElement.dir = 'ltr' // Both German and English are LTR
    }
  }, [locale])

  return (
    <AnalyticsProvider>
      <div className="min-h-screen flex flex-col">
        <SkipLink />
        <Navigation />
        
        <main 
          id="main-content"
          className="flex-1"
          role="main"
          tabIndex={-1}
        >
          <Suspense fallback={<LoadingSpinner />}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <Outlet />
            </motion.div>
          </Suspense>
        </main>
        
        <Footer />
      </div>
    </AnalyticsProvider>
  )
}
