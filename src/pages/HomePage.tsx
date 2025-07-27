import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useLanguage } from '@/hooks/useLanguage'
import { Container, Button, Card, CardContent } from '@/components/ui'
import { SEO } from '@/components/SEO'
import { SimpleAnimation } from '@/components/SimpleAnimation'

const Hero = () => {
  const { t } = useTranslation()
  const { getLocalizedPath, currentLanguage } = useLanguage()

  return (
    <section className="section-lg text-primary-50 bg-gradient-hero-alt relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-overlay opacity-40"></div>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto relative z-10"
        >
          <h1 className="heading-hero mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
            {t('hero.title')}
          </h1>
          <p className="text-large text-white/95 mb-8 max-w-2xl mx-auto backdrop-blur-sm">
            {t('hero.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to={getLocalizedPath(currentLanguage === 'de' ? 'unternehmen' : 'company')}>
              <Button size="lg">
                {t('hero.cta')}
              </Button>
            </Link>
            <Link to={getLocalizedPath(currentLanguage === 'de' ? 'kontakt' : 'contact')}>
              <Button variant="secondary" size="lg">
                {t('hero.contact')}
              </Button>
            </Link>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}

const Services = () => {
  const { t } = useTranslation()

  const services = [
    {
      title: t('services.technologyConsulting.title'),
      description: t('services.technologyConsulting.description'),
      icon: '🚀'
    },
    {
      title: t('services.softwareDevelopment.title'),
      description: t('services.softwareDevelopment.description'),
      icon: '💻'
    },
    {
      title: t('services.innovationLabs.title'),
      description: t('services.innovationLabs.description'),
      icon: '🔬'
    }
  ]

  return (
    <section className="section bg-gradient-subtle">
      <Container>
        <SimpleAnimation delay={200}>
          <h2 className="heading-section">
            {t('products.subtitle')}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <SimpleAnimation key={index} delay={300 + index * 100}>
                <Card>
                  <CardContent>
                    <div className="text-4xl mb-4 text-center">{service.icon}</div>
                    <h3 className="text-xl font-semibold mb-3 text-center text-primary-900">
                      {service.title}
                    </h3>
                    <p className="text-primary-700 text-center leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </SimpleAnimation>
            ))}
          </div>
        </SimpleAnimation>
      </Container>
    </section>
  )
}

const CallToAction = () => {
  const { t } = useTranslation()
  const { getLocalizedPath, currentLanguage } = useLanguage()

  return (
    <section className="section bg-gradient-cta text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-overlay opacity-30"></div>
      <Container>
        <SimpleAnimation 
          delay={100} 
          className="text-center max-w-3xl mx-auto relative z-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
            {t('cta.readyToStart')}
          </h2>
          <p className="text-lg mb-8 text-white/95 backdrop-blur-sm">
            {t('cta.getInTouch')}
          </p>
          <Link to={getLocalizedPath(currentLanguage === 'de' ? 'kontakt' : 'contact')}>
            <Button variant="secondary" size="lg" className="bg-white/90 text-primary-900 hover:bg-white hover:shadow-xl transition-all duration-300 backdrop-blur-sm">
              {t('hero.contact')}
            </Button>
          </Link>
        </SimpleAnimation>
      </Container>
    </section>
  )
}

export const HomePage = () => {
  const { t } = useTranslation()

  return (
    <>
      <SEO 
        title={`${t('hero.title')} - ${t('hero.subtitle')}`}
        description={t('hero.description')}
      />
      
      <Hero />
      <Services />
      <CallToAction />
    </>
  )
}
