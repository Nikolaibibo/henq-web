import { initializeApp } from 'firebase/app'
import { getAnalytics, logEvent } from 'firebase/analytics'
import type { Analytics } from 'firebase/analytics'
import { getPerformance } from 'firebase/performance'
import type { FirebasePerformance } from 'firebase/performance'
import { hasConsent } from '@/utils/cookieStorage'

// Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || '',
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || '',
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || '',
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || '',
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || '',
  appId: import.meta.env.VITE_FIREBASE_APP_ID || '',
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || ''
}

// Initialize Firebase
let app: any = null
let analytics: Analytics | null = null
let performance: FirebasePerformance | null = null

if (typeof window !== 'undefined' && firebaseConfig.apiKey) {
  app = initializeApp(firebaseConfig)
  
  // Initialize Performance Monitoring (always allowed as it's functional)
  performance = getPerformance(app)
}

// Function to initialize analytics when consent is given
export const initializeAnalytics = () => {
  if (typeof window !== 'undefined' && app && firebaseConfig.measurementId && !analytics) {
    analytics = getAnalytics(app)
    
    // Configure analytics for German privacy requirements
    if (analytics) {
      // Enable IP anonymization for GDPR compliance
      logEvent(analytics, 'page_view', {
        anonymize_ip: true
      })
    }
  }
  return analytics
}

// Function to check if analytics should be used
const shouldUseAnalytics = (): boolean => {
  return hasConsent('statistics') && analytics !== null
}

// Analytics helper functions
export const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
  if (shouldUseAnalytics()) {
    logEvent(analytics!, eventName, parameters)
  }
}

export const trackPageView = (pagePath: string, pageTitle: string) => {
  if (shouldUseAnalytics()) {
    logEvent(analytics!, 'page_view', {
      page_path: pagePath,
      page_title: pageTitle,
      anonymize_ip: true
    })
  }
}

export const trackButtonClick = (buttonName: string, location: string) => {
  if (shouldUseAnalytics()) {
    logEvent(analytics!, 'button_click', {
      button_name: buttonName,
      location: location
    })
  }
}

export const trackFormSubmit = (formName: string, success: boolean) => {
  if (shouldUseAnalytics()) {
    logEvent(analytics!, 'form_submit', {
      form_name: formName,
      success: success
    })
  }
}

export const trackLanguageChange = (fromLang: string, toLang: string) => {
  if (shouldUseAnalytics()) {
    logEvent(analytics!, 'language_change', {
      from_language: fromLang,
      to_language: toLang
    })
  }
}

export { analytics, performance }
