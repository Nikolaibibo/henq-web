import { createContext, useContext, useState, useEffect, useCallback } from 'react'
import type { ReactNode } from 'react'
import type { CookieConsent } from '@/utils/cookieStorage'
import { 
  getCookieConsent, 
  setCookieConsent, 
  hasUserMadeChoice,
  acceptAllCookies,
  acceptOnlyNecessary,
  defaultConsent
} from '@/utils/cookieStorage'

interface CookieConsentContextType {
  consent: CookieConsent
  showBanner: boolean
  showSettings: boolean
  hasUserMadeChoice: boolean
  updateConsent: (newConsent: Partial<CookieConsent>) => void
  acceptAll: () => void
  acceptNecessaryOnly: () => void
  openSettings: () => void
  closeSettings: () => void
  closeBanner: () => void
  hasConsentFor: (category: keyof Omit<CookieConsent, 'consentVersion' | 'timestamp'>) => boolean
}

const CookieConsentContext = createContext<CookieConsentContextType | undefined>(undefined)

interface CookieConsentProviderProps {
  children: ReactNode
}

export const CookieConsentProvider = ({ children }: CookieConsentProviderProps) => {
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
    setShowSettings(true)
  }, [])

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

  const value: CookieConsentContextType = {
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

  return (
    <CookieConsentContext.Provider value={value}>
      {children}
    </CookieConsentContext.Provider>
  )
}

export const useCookieConsent = () => {
  const context = useContext(CookieConsentContext)
  if (context === undefined) {
    throw new Error('useCookieConsent must be used within a CookieConsentProvider')
  }
  return context
}
