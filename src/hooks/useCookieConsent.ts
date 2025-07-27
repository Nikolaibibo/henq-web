import { useState, useEffect, useCallback } from 'react'
import type { CookieConsent } from '@/utils/cookieStorage'
import { 
  getCookieConsent, 
  setCookieConsent, 
  hasUserMadeChoice,
  acceptAllCookies,
  acceptOnlyNecessary,
  defaultConsent
} from '@/utils/cookieStorage'

export const useCookieConsent = () => {
  const [consent, setConsent] = useState<CookieConsent | null>(null)
  const [showBanner, setShowBanner] = useState(false)
  const [showSettings, setShowSettings] = useState(false)

  // Load consent from storage on mount
  useEffect(() => {
    const savedConsent = getCookieConsent()
    setConsent(savedConsent)
    setShowBanner(!hasUserMadeChoice())
  }, [])

  // Listen for consent changes from other tabs/windows
  useEffect(() => {
    const handleConsentChange = (event: CustomEvent) => {
      setConsent(event.detail)
      setShowBanner(!event.detail)
    }

    window.addEventListener('cookieConsentChanged', handleConsentChange as EventListener)
    
    return () => {
      window.removeEventListener('cookieConsentChanged', handleConsentChange as EventListener)
    }
  }, [])

  const updateConsent = useCallback((newConsent: Partial<CookieConsent>) => {
    setCookieConsent(newConsent)
    const updatedConsent = getCookieConsent()
    setConsent(updatedConsent)
    setShowBanner(false)
    setShowSettings(false)
  }, [])

  const acceptAll = useCallback(() => {
    acceptAllCookies()
    const updatedConsent = getCookieConsent()
    setConsent(updatedConsent)
    setShowBanner(false)
    setShowSettings(false)
  }, [])

  const acceptNecessaryOnly = useCallback(() => {
    acceptOnlyNecessary()
    const updatedConsent = getCookieConsent()
    setConsent(updatedConsent)
    setShowBanner(false)
    setShowSettings(false)
  }, [])

  const openSettings = useCallback(() => {
    console.log('openSettings called, current showSettings:', showSettings)
    setShowSettings(true)
    console.log('openSettings called, setShowSettings(true) executed')
    // Don't hide the banner immediately - let the settings modal handle it
  }, [showSettings])

  const closeSettings = useCallback(() => {
    setShowSettings(false)
  }, [])

  const closeBanner = useCallback(() => {
    setShowBanner(false)
  }, [])

  // Helper function to check if a specific category is consented
  const hasConsentFor = useCallback((category: keyof Omit<CookieConsent, 'consentVersion' | 'timestamp'>) => {
    return consent?.[category] ?? false
  }, [consent])

  return {
    consent: consent || defaultConsent,
    showBanner,
    showSettings,
    hasUserMadeChoice: hasUserMadeChoice(),
    updateConsent,
    acceptAll,
    acceptNecessaryOnly,
    openSettings,
    closeSettings,
    closeBanner,
    hasConsentFor
  }
}
