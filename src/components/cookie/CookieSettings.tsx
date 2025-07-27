import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { motion, AnimatePresence } from 'framer-motion'
import { useCookieConsent } from '@/contexts/CookieConsentContext'
import { Button } from '@/components/ui/Button'
import type { CookieConsent } from '@/utils/cookieStorage'

interface CookieToggleProps {
  id: string
  label: string
  description: string
  checked: boolean
  disabled?: boolean
  onChange: (checked: boolean) => void
}

const CookieToggle = ({ id, label, description, checked, disabled = false, onChange }: CookieToggleProps) => {
  return (
    <div className="flex items-start space-x-4 p-4 bg-white/5 rounded-lg border border-white/10">
      <div className="flex-shrink-0 pt-1">
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            id={id}
            checked={checked}
            disabled={disabled}
            onChange={(e) => onChange(e.target.checked)}
            className="sr-only"
          />
          <div className={`
            w-11 h-6 rounded-full transition-colors duration-200 ease-in-out
            ${checked 
              ? (disabled ? 'bg-gray-400' : 'bg-signal-500') 
              : 'bg-gray-600'
            }
            ${disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}
          `}>
            <div className={`
              w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-200 ease-in-out
              ${checked ? 'translate-x-5' : 'translate-x-0.5'}
              mt-0.5
            `} />
          </div>
        </label>
      </div>
      
      <div className="flex-1 min-w-0">
        <label 
          htmlFor={id}
          className={`block text-sm font-medium text-white mb-1 ${
            disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'
          }`}
        >
          {label}
          {disabled && (
            <span className="ml-2 text-xs text-gray-400">
              (Erforderlich / Required)
            </span>
          )}
        </label>
        <p className="text-xs text-white/70 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  )
}

export const CookieSettings = () => {
  const { t } = useTranslation()
  const {
    consent,
    showSettings,
    closeSettings,
    updateConsent
  } = useCookieConsent()

  const [tempConsent, setTempConsent] = useState<CookieConsent>(consent)

  // Update tempConsent when consent changes or when modal opens
  useEffect(() => {
    if (showSettings) {
      setTempConsent(consent)
    }
  }, [consent, showSettings])


  const handleToggle = (category: keyof CookieConsent, value: boolean) => {
    if (category === 'necessary' || category === 'consentVersion' || category === 'timestamp') {
      return // These cannot be changed
    }
    
    setTempConsent(prev => ({
      ...prev,
      [category]: value
    }))
  }

  const handleSave = () => {
    updateConsent(tempConsent)
  }

  const handleCancel = () => {
    setTempConsent(consent)
    closeSettings()
  }

  if (!showSettings) return null

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key="cookie-settings-modal"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
        onClick={handleCancel}
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          className="w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-gradient-hero-alt rounded-xl shadow-2xl"
          onClick={(e) => e.stopPropagation()}
          role="dialog"
          aria-labelledby="cookie-settings-title"
          aria-modal="true"
        >
          <div className="absolute inset-0 bg-gradient-overlay opacity-40 rounded-xl"></div>
          
          <div className="relative z-10 p-6">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <h2 
                id="cookie-settings-title"
                className="text-2xl font-bold text-white"
              >
                {t('cookies.settings.title')}
              </h2>
              <button
                onClick={handleCancel}
                className="text-white/70 hover:text-white transition-colors p-1"
                aria-label={t('common.close')}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Description */}
            <p className="text-white/90 mb-6 leading-relaxed">
              {t('cookies.settings.description')}
            </p>

            {/* Cookie Categories */}
            <div className="space-y-4 mb-8">
              <CookieToggle
                id="necessary"
                label={t('cookies.categories.necessary.title')}
                description={t('cookies.categories.necessary.description')}
                checked={tempConsent.necessary}
                disabled={true}
                onChange={() => {}} // No-op since it's disabled
              />

              <CookieToggle
                id="statistics"
                label={t('cookies.categories.statistics.title')}
                description={t('cookies.categories.statistics.description')}
                checked={tempConsent.statistics}
                onChange={(checked) => handleToggle('statistics', checked)}
              />

              <CookieToggle
                id="functional"
                label={t('cookies.categories.functional.title')}
                description={t('cookies.categories.functional.description')}
                checked={tempConsent.functional}
                onChange={(checked) => handleToggle('functional', checked)}
              />

              <CookieToggle
                id="marketing"
                label={t('cookies.categories.marketing.title')}
                description={t('cookies.categories.marketing.description')}
                checked={tempConsent.marketing}
                onChange={(checked) => handleToggle('marketing', checked)}
              />
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3 justify-end">
              <Button
                variant="ghost"
                onClick={handleCancel}
                className="text-white/80 hover:text-white hover:bg-white/10"
              >
                {t('common.cancel')}
              </Button>
              
              <Button
                variant="primary"
                onClick={handleSave}
                className="bg-signal-500 hover:bg-signal-600 text-white"
              >
                {t('cookies.settings.save')}
              </Button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
