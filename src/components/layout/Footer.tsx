import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useLanguage } from '@/hooks/useLanguage'
import { Container } from '@/components/ui'
import { useCookieConsent } from '@/contexts/CookieConsentContext'

export const Footer = () => {
  const { t } = useTranslation()
  const { getLocalizedPath, currentLanguage } = useLanguage()
  const { openSettings } = useCookieConsent()

  const legalLinks = [
    {
      path: currentLanguage === 'de' ? 'impressum' : 'imprint',
      label: t('nav.imprint')
    },
    {
      path: currentLanguage === 'de' ? 'datenschutz' : 'privacy',
      label: t('nav.privacy')
    }
  ]

  return (
    <footer className="bg-primary-900 text-primary-50 py-12" role="contentinfo">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <img 
                src="/logo.jpg" 
                alt="HENQ Technologies GbR" 
                className="h-8 w-auto mb-3"
                loading="lazy"
              />
            </div>
            <p className="text-primary-100 text-base font-medium leading-relaxed opacity-90">
              {t('footer.description')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <nav className="space-y-2">
              <Link 
                to={getLocalizedPath('')}
                className="block text-primary-200 hover:text-signal-400 transition-colors"
              >
                {t('nav.home')}
              </Link>
              <Link 
                to={getLocalizedPath(currentLanguage === 'de' ? 'unternehmen' : 'company')}
                className="block text-primary-200 hover:text-signal-400 transition-colors"
              >
                {t('nav.company')}
              </Link>
              <Link 
                to={getLocalizedPath(currentLanguage === 'de' ? 'kontakt' : 'contact')}
                className="block text-primary-200 hover:text-signal-400 transition-colors"
              >
                {t('nav.contact')}
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('nav.contact')}</h4>
            <div className="space-y-2 text-primary-200">
              <p>
                <a href="mailto:info@henq-technologies.com" className="hover:text-signal-400 transition-colors">
                  {t('contact.info.email')}
                </a>
              </p>
              <p>
                <a href="tel:+4917666650703" className="hover:text-signal-400 transition-colors">
                  {t('contact.info.phone')}
                </a>
              </p>
              <address className="not-italic">
                St. Johannes Straße 16<br />
                59964 Medebach<br />
                Deutschland
              </address>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-700 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <p className="text-primary-300 text-sm">
            {t('footer.copyright')}
          </p>
          
          <nav className="flex flex-wrap space-x-6 gap-y-2">
            {legalLinks.map((link) => (
              <Link
                key={link.path}
                to={getLocalizedPath(link.path)}
                className="text-primary-300 hover:text-signal-400 text-sm transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <button
              onClick={openSettings}
              className="text-primary-300 hover:text-signal-400 text-sm transition-colors"
            >
              {t('cookies.settings.title')}
            </button>
          </nav>
        </div>
      </Container>
    </footer>
  )
}
