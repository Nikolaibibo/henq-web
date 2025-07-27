import { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate, useParams } from 'react-router-dom'
import type { Language } from '@/types'

export const useLanguage = () => {
  const { i18n } = useTranslation()
  const navigate = useNavigate()
  const { locale } = useParams<{ locale: string }>()

  const currentLanguage = (locale as 'de' | 'en') || 'de'

  const languages: Language[] = [
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
    { code: 'en', name: 'English', flag: '🇺🇸' }
  ]

  const switchLanguage = useCallback((newLanguage: 'de' | 'en') => {
    if (newLanguage === currentLanguage) return

    // Route mapping for language switching
    const routeMap = {
      de: {
        '': '',
        'unternehmen': 'company',
        'produkte': 'products',
        'gruender': 'founders',
        'news': 'news',
        'kontakt': 'contact',
        'impressum': 'imprint',
        'datenschutz': 'privacy'
      },
      en: {
        '': '',
        'company': 'unternehmen',
        'products': 'produkte',
        'founders': 'gruender',
        'news': 'news',
        'contact': 'kontakt',
        'imprint': 'impressum',
        'privacy': 'datenschutz'
      }
    }

    // Get current path without language prefix
    const pathSegments = window.location.pathname.split('/').filter(segment => segment)
    const currentPath = pathSegments.slice(1).join('/')
    
    // Map to new language route
    const newPath = newLanguage === 'en' 
      ? routeMap.de[currentPath as keyof typeof routeMap.de] || currentPath
      : routeMap.en[currentPath as keyof typeof routeMap.en] || currentPath

    // Change language in i18next
    i18n.changeLanguage(newLanguage)
    
    // Store preference
    localStorage.setItem('henq-language', newLanguage)
    
    // Navigate to new route
    navigate(`/${newLanguage}${newPath ? `/${newPath}` : ''}`)
  }, [currentLanguage, i18n, navigate])

  const getLocalizedPath = useCallback((path: string, language?: 'de' | 'en') => {
    const lang = language || currentLanguage
    return `/${lang}${path.startsWith('/') ? path : `/${path}`}`
  }, [currentLanguage])

  return {
    currentLanguage,
    languages,
    switchLanguage,
    getLocalizedPath,
    isGerman: currentLanguage === 'de',
    isEnglish: currentLanguage === 'en'
  }
}