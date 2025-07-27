export interface CookieConsent {
  necessary: boolean
  statistics: boolean
  functional: boolean
  marketing: boolean
  consentVersion: string
  timestamp: number
}

const CONSENT_COOKIE_NAME = 'henq-cookie-consent'
const CONSENT_VERSION = '1.0'

export const defaultConsent: CookieConsent = {
  necessary: true, // Always true, can't be changed
  statistics: false,
  functional: false,
  marketing: false,
  consentVersion: CONSENT_VERSION,
  timestamp: Date.now()
}

export const getCookieConsent = (): CookieConsent | null => {
  try {
    const consent = localStorage.getItem(CONSENT_COOKIE_NAME)
    if (!consent) return null
    
    const parsed = JSON.parse(consent) as CookieConsent
    
    // Check if consent version is outdated
    if (parsed.consentVersion !== CONSENT_VERSION) {
      return null
    }
    
    return parsed
  } catch (error) {
    console.error('Error reading cookie consent:', error)
    return null
  }
}

export const setCookieConsent = (consent: Partial<CookieConsent>): void => {
  try {
    const fullConsent: CookieConsent = {
      ...defaultConsent,
      ...consent,
      necessary: true, // Always force necessary to true
      consentVersion: CONSENT_VERSION,
      timestamp: Date.now()
    }
    
    localStorage.setItem(CONSENT_COOKIE_NAME, JSON.stringify(fullConsent))
    
    // Dispatch custom event for other components to listen to
    window.dispatchEvent(new CustomEvent('cookieConsentChanged', { 
      detail: fullConsent 
    }))
  } catch (error) {
    console.error('Error saving cookie consent:', error)
  }
}

export const clearCookieConsent = (): void => {
  try {
    localStorage.removeItem(CONSENT_COOKIE_NAME)
    window.dispatchEvent(new CustomEvent('cookieConsentChanged', { 
      detail: null 
    }))
  } catch (error) {
    console.error('Error clearing cookie consent:', error)
  }
}

export const hasConsent = (category: keyof Omit<CookieConsent, 'consentVersion' | 'timestamp'>): boolean => {
  const consent = getCookieConsent()
  if (!consent) return false
  return consent[category]
}

// Helper function to check if user has made any consent choice
export const hasUserMadeChoice = (): boolean => {
  return getCookieConsent() !== null
}

// Helper function to accept all cookies
export const acceptAllCookies = (): void => {
  setCookieConsent({
    necessary: true,
    statistics: true,
    functional: true,
    marketing: true
  })
}

// Helper function to accept only necessary cookies
export const acceptOnlyNecessary = (): void => {
  setCookieConsent({
    necessary: true,
    statistics: false,
    functional: false,
    marketing: false
  })
}
