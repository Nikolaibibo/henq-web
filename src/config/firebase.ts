import { initializeApp } from 'firebase/app'
import { getAnalytics, logEvent } from 'firebase/analytics'
import type { Analytics } from 'firebase/analytics'
import { getPerformance } from 'firebase/performance'
import type { FirebasePerformance } from 'firebase/performance'

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
let analytics: Analytics | null = null
let performance: FirebasePerformance | null = null

if (typeof window !== 'undefined' && firebaseConfig.apiKey) {
  const app = initializeApp(firebaseConfig)
  
  // Initialize Analytics
  if (firebaseConfig.measurementId) {
    analytics = getAnalytics(app)
  }
  
  // Initialize Performance Monitoring
  performance = getPerformance(app)
}

// Analytics helper functions
export const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
  if (analytics) {
    logEvent(analytics, eventName, parameters)
  }
}

export const trackPageView = (pagePath: string, pageTitle: string) => {
  if (analytics) {
    logEvent(analytics, 'page_view', {
      page_path: pagePath,
      page_title: pageTitle
    })
  }
}

export const trackButtonClick = (buttonName: string, location: string) => {
  if (analytics) {
    logEvent(analytics, 'button_click', {
      button_name: buttonName,
      location: location
    })
  }
}

export const trackFormSubmit = (formName: string, success: boolean) => {
  if (analytics) {
    logEvent(analytics, 'form_submit', {
      form_name: formName,
      success: success
    })
  }
}

export const trackLanguageChange = (fromLang: string, toLang: string) => {
  if (analytics) {
    logEvent(analytics, 'language_change', {
      from_language: fromLang,
      to_language: toLang
    })
  }
}

export { analytics, performance }