import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Container, Button, Input, Textarea, Card, CardContent } from '@/components/ui'
import { SEO } from '@/components/SEO'
import { SimpleAnimation } from '@/components/SimpleAnimation'
import { validateEmail } from '@/lib/utils'
import { trackFormSubmit } from '@/config/firebase'
import type { ContactFormData, FormState } from '@/types'

const ContactForm = () => {
  const { t, i18n } = useTranslation()
  
  const [formState, setFormState] = useState<FormState>({
    data: {
      name: '',
      email: '',
      message: '',
      consent: false,
      newsletter: false
    },
    errors: {},
    isSubmitting: false,
    isSubmitted: false
  })

  const validateForm = (data: ContactFormData) => {
    const errors: Partial<Record<keyof ContactFormData, string>> = {}

    if (!data.name.trim()) {
      errors.name = t('contact.form.nameRequired')
    }

    if (!data.email.trim()) {
      errors.email = t('contact.form.emailRequired')
    } else if (!validateEmail(data.email)) {
      errors.email = t('contact.form.emailInvalid')
    }

    if (!data.message.trim()) {
      errors.message = t('contact.form.messageRequired')
    }

    if (!data.consent) {
      errors.consent = t('contact.form.consentRequired')
    }

    return errors
  }

  const handleInputChange = (field: keyof ContactFormData, value: string | boolean) => {
    setFormState(prev => ({
      ...prev,
      data: { ...prev.data, [field]: value },
      errors: { ...prev.errors, [field]: undefined }
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    const errors = validateForm(formState.data)
    
    if (Object.keys(errors).length > 0) {
      setFormState(prev => ({ ...prev, errors }))
      return
    }

    setFormState(prev => ({ ...prev, isSubmitting: true, errors: {} }))

    try {
      // Call Firebase Function
      const functionUrl = import.meta.env.DEV 
        ? 'http://127.0.0.1:5001/henq-web/europe-west3/contactFormSubmit'
        : 'https://europe-west3-henq-web.cloudfunctions.net/contactFormSubmit'
      
      const response = await fetch(functionUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formState.data,
          language: i18n.language
        }),
      })

      const result = await response.json()

      if (!response.ok || !result.success) {
        throw new Error(result.error || 'Failed to submit form')
      }
      
      // Track successful form submission
      trackFormSubmit('contact', true)
      
      setFormState(prev => ({ 
        ...prev, 
        isSubmitting: false, 
        isSubmitted: true 
      }))
    } catch (error) {
      console.error('Contact form submission error:', error)
      
      // Track failed form submission
      trackFormSubmit('contact', false)
      
      setFormState(prev => ({ 
        ...prev, 
        isSubmitting: false, 
        submitError: t('contact.error.message')
      }))
    }
  }

  if (formState.isSubmitted) {
    return (
      <SimpleAnimation
        delay={100}
        className="text-center py-12"
      >
        <div className="text-6xl mb-6">✅</div>
        <h3 className="text-2xl font-bold text-success-500 mb-4">
          {t('contact.success.title')}
        </h3>
        <p className="text-primary-700 mb-6">
          {t('contact.success.message')}
        </p>
        <Button
          onClick={() => setFormState(prev => ({ 
            ...prev, 
            isSubmitted: false,
            data: {
              name: '',
              email: '',
              message: '',
              consent: false,
              newsletter: false
            }
          }))}
          variant="ghost"
        >
          {t('contact.sendAnother')}
        </Button>
      </SimpleAnimation>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          label={t('contact.form.name')}
          value={formState.data.name}
          onChange={(e) => handleInputChange('name', e.target.value)}
          error={formState.errors.name}
          required
          disabled={formState.isSubmitting}
        />
        
        <Input
          type="email"
          label={t('contact.form.email')}
          value={formState.data.email}
          onChange={(e) => handleInputChange('email', e.target.value)}
          error={formState.errors.email}
          required
          disabled={formState.isSubmitting}
        />
      </div>
      
      <Textarea
        label={t('contact.form.message')}
        value={formState.data.message}
        onChange={(e) => handleInputChange('message', e.target.value)}
        error={formState.errors.message}
        rows={6}
        required
        disabled={formState.isSubmitting}
      />
      
      <fieldset className="space-y-4">
        <legend className="sr-only">Privacy and Newsletter Preferences</legend>
        
        <div className="space-y-2">
          <label className="flex items-start space-x-3 cursor-pointer">
            <input
              type="checkbox"
              checked={formState.data.consent}
              onChange={(e) => handleInputChange('consent', e.target.checked)}
              className="mt-1 rounded border-primary-300 text-signal-500 focus:ring-signal-500"
              disabled={formState.isSubmitting}
              required
            />
            <span className="text-sm text-primary-700">
              {t('contact.form.consent')}{' '}
              <a 
                href="/privacy" 
                className="text-signal-600 hover:text-signal-700 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t('contact.form.privacy')}
              </a>
              .
            </span>
          </label>
          {formState.errors.consent && (
            <p className="error-message" role="alert">
              {formState.errors.consent}
            </p>
          )}
        </div>
        
        <label className="flex items-start space-x-3 cursor-pointer">
          <input
            type="checkbox"
            checked={formState.data.newsletter}
            onChange={(e) => handleInputChange('newsletter', e.target.checked)}
            className="mt-1 rounded border-primary-300 text-signal-500 focus:ring-signal-500"
            disabled={formState.isSubmitting}
          />
          <span className="text-sm text-primary-700">
            {t('contact.form.newsletter')}
          </span>
        </label>
      </fieldset>
      
      {formState.submitError && (
        <div className="status-error p-4 rounded-lg" role="alert">
          {formState.submitError}
        </div>
      )}
      
      <Button
        type="submit"
        loading={formState.isSubmitting}
        disabled={formState.isSubmitting}
        className="w-full md:w-auto"
      >
        {formState.isSubmitting ? t('contact.form.submitting') : t('contact.form.submit')}
      </Button>
    </form>
  )
}

export const ContactPage = () => {
  const { t } = useTranslation()

  return (
    <>
      <SEO 
        title={`${t('contact.title')} - HENQ Technologies`}
        description={t('contact.description')}
      />
      
      {/* Hero Section */}
      <section className="section-lg text-primary-50 bg-gradient-hero-alt relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-overlay opacity-40"></div>
        <Container>
          <SimpleAnimation 
            delay={100}
            className="text-center max-w-4xl mx-auto relative z-10"
          >
            <h1 className="heading-hero mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
              {t('contact.title')}
            </h1>
            <p className="text-large text-white/95 backdrop-blur-sm">
              {t('contact.description')}
            </p>
          </SimpleAnimation>
        </Container>
      </section>

      {/* Contact Form and Info */}
      <section className="section bg-gradient-subtle">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <SimpleAnimation delay={200}>
              <Card>
                <CardContent>
                  <h2 className="text-2xl font-bold text-primary-900 mb-6">
                    {t('contact.subtitle')}
                  </h2>
                  <ContactForm />
                </CardContent>
              </Card>
            </SimpleAnimation>

            {/* Contact Information */}
            <SimpleAnimation
              delay={300}
              className="space-y-8"
            >
              <Card>
                <CardContent>
                  <h3 className="text-xl font-bold text-primary-900 mb-4">
                    {t('contact.info.contact')}
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">📧</span>
                      <div>
                        <p className="font-medium text-primary-900">Email</p>
                        <a 
                          href="mailto:info@henq-technologies.com"
                          className="text-signal-600 hover:text-signal-700"
                        >
                          {t('contact.info.email')}
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">📱</span>
                      <div>
                        <p className="font-medium text-primary-900">Phone</p>
                        <a 
                          href="tel:+4917666650703"
                          className="text-signal-600 hover:text-signal-700"
                        >
                          {t('contact.info.phone')}
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <span className="text-2xl">📍</span>
                      <div>
                        <p className="font-medium text-primary-900 mb-1">Address</p>
                        <address className="text-primary-700 not-italic">
                          {t('contact.info.company')}<br />
                          {t('contact.info.address').split('\n').map((line, index) => (
                            <span key={index}>{line}<br /></span>
                          ))}
                        </address>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent>
                  <h3 className="text-xl font-bold text-primary-900 mb-4">
                    {t('contact.responseTime.title')}
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <span className="text-green-500">●</span>
                      <span className="text-primary-700">
                        {t('contact.responseTime.within24h')}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-blue-500">●</span>
                      <span className="text-primary-700">
                        {t('contact.responseTime.businessHours')}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </SimpleAnimation>
          </div>
        </Container>
      </section>
    </>
  )
}
