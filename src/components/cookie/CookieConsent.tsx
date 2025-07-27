import { useTranslation } from 'react-i18next'
import { motion, AnimatePresence } from 'framer-motion'
import { useCookieConsent } from '@/contexts/CookieConsentContext'
import { Button } from '@/components/ui/Button'
import { useLanguage } from '@/hooks/useLanguage'
import { Link } from 'react-router-dom'

export const CookieConsent = () => {
  const { t } = useTranslation()
  const { getLocalizedPath, currentLanguage } = useLanguage()
  const {
    showBanner,
    acceptAll,
    acceptNecessaryOnly,
    openSettings
  } = useCookieConsent()

  if (!showBanner) return null

  return (
    <AnimatePresence>
      {/* Semi-transparent blurry background overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm"
      />
      
      {/* Cookie banner */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="fixed bottom-0 left-0 right-0 z-50 bg-gradient-hero-alt backdrop-blur-md border-t border-primary-700/50"
        role="dialog"
        aria-labelledby="cookie-banner-title"
        aria-describedby="cookie-banner-description"
      >
        <div className="absolute inset-0 bg-gradient-overlay opacity-40"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            {/* Content */}
            <div className="flex-1 text-white">
              <h3 
                id="cookie-banner-title" 
                className="text-lg font-semibold mb-2"
              >
                {t('cookies.banner.title')}
              </h3>
              <p 
                id="cookie-banner-description" 
                className="text-sm text-white/90 leading-relaxed mb-4 lg:mb-0"
              >
                {t('cookies.banner.description')}{' '}
                <Link 
                  to={getLocalizedPath(currentLanguage === 'de' ? 'datenschutz' : 'privacy')}
                  className="underline hover:text-signal-300 transition-colors"
                >
                  {t('cookies.banner.privacyPolicy')}
                </Link>
              </p>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3 lg:flex-shrink-0">
              <Button
                variant="secondary"
                size="sm"
                onClick={openSettings}
                className="bg-white/10 text-white border-white/30 hover:bg-white/20 hover:text-white"
              >
                {t('cookies.banner.customize')}
              </Button>
              
              <Button
                variant="ghost"
                size="sm"
                onClick={acceptNecessaryOnly}
                className="text-white/80 hover:text-white hover:bg-white/10"
              >
                {t('cookies.banner.onlyNecessary')}
              </Button>
              
              <Button
                variant="primary"
                size="sm"
                onClick={acceptAll}
                className="bg-signal-500 hover:bg-signal-600 text-white"
              >
                {t('cookies.banner.acceptAll')}
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
