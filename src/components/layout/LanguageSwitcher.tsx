import { useLanguage } from '@/hooks/useLanguage'
import { useTranslation } from 'react-i18next'
import { cn } from '@/lib/utils'
import { trackLanguageChange } from '@/config/firebase'

export const LanguageSwitcher = () => {
  const { currentLanguage, languages, switchLanguage } = useLanguage()
  const { t } = useTranslation()

  const handleLanguageSwitch = (newLanguage: string) => {
    if (newLanguage !== currentLanguage) {
      trackLanguageChange(currentLanguage, newLanguage)
      switchLanguage(newLanguage as 'de' | 'en')
    }
  }

  return (
    <div 
      className="language-switcher"
      role="group" 
      aria-label={t('accessibility.languageSwitch')}
    >
      {languages.map((language, index) => (
        <div key={language.code} className="flex items-center">
          <button
            onClick={() => handleLanguageSwitch(language.code)}
            className={cn(
              'lang-btn',
              currentLanguage === language.code && 'lang-btn-active'
            )}
            aria-pressed={currentLanguage === language.code}
            aria-label={`${t('accessibility.languageSwitch')}: ${language.name}`}
          >
            <span className="mr-1" aria-hidden="true">{language.flag}</span>
            {language.code.toUpperCase()}
          </button>
          
          {index < languages.length - 1 && (
            <span className="text-primary-300 mx-1" aria-hidden="true">|</span>
          )}
        </div>
      ))}
      
      <span className="sr-only">
        {t('accessibility.currentLanguage')}
      </span>
    </div>
  )
}
