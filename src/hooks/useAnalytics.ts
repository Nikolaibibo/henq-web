import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { trackPageView, initializeAnalytics } from '@/config/firebase'
import { useCookieConsent } from '@/contexts/CookieConsentContext'

export const useAnalytics = () => {
  const location = useLocation()
  const { hasConsentFor } = useCookieConsent()

  // Initialize analytics when statistics consent is given
  useEffect(() => {
    if (hasConsentFor('statistics')) {
      initializeAnalytics()
    }
  }, [hasConsentFor])

  // Track page views on route change (only if consent is given)
  useEffect(() => {
    if (hasConsentFor('statistics')) {
      trackPageView(location.pathname, document.title)
    }
  }, [location, hasConsentFor])
}
