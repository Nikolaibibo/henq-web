import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export const LanguageDetector = () => {
  const location = useLocation()

  useEffect(() => {
    // Only run on root path
    if (location.pathname !== '/') return

    // Check for saved language preference
    const savedLanguage = localStorage.getItem('henq-language')
    
    // Detect browser language
    const browserLanguage = navigator.language.toLowerCase()
    const isGerman = browserLanguage.startsWith('de')
    
    // Determine target language
    const targetLanguage = savedLanguage || (isGerman ? 'de' : 'en')
    
    // Validate language
    const validLanguage = ['de', 'en'].includes(targetLanguage) ? targetLanguage : 'de'
    
    // Store the language choice
    localStorage.setItem('henq-language', validLanguage)
    
    // Redirect to language-specific route
    window.location.replace(`/${validLanguage}`)
  }, [location.pathname])

  // Show loading state while redirecting
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-signal-500 mx-auto mb-4"></div>
        <p className="text-primary-700">Redirecting...</p>
      </div>
    </div>
  )
}