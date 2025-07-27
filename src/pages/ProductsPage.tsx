import { useTranslation } from 'react-i18next'
import { Container, Card, CardContent, Button } from '@/components/ui'
import { SEO } from '@/components/SEO'
import { SimpleAnimation } from '@/components/SimpleAnimation'

export const ProductsPage = () => {
  const { t } = useTranslation()

  const products = [
    {
      title: t('products.items.aiSolutions.title'),
      description: t('products.items.aiSolutions.description'),
      status: t('products.items.aiSolutions.status'),
      icon: '🤖',
      features: [
        t('products.items.aiSolutions.features.ml'),
        t('products.items.aiSolutions.features.nlp'),
        t('products.items.aiSolutions.features.cv')
      ]
    },
    {
      title: t('products.items.cloudPlatform.title'),
      description: t('products.items.cloudPlatform.description'),
      status: t('products.items.cloudPlatform.status'),
      icon: '☁️',
      features: [
        t('products.items.cloudPlatform.features.autoScale'),
        t('products.items.cloudPlatform.features.ha'),
        t('products.items.cloudPlatform.features.security')
      ]
    },
    {
      title: t('products.items.iotFramework.title'),
      description: t('products.items.iotFramework.description'),
      status: t('products.items.iotFramework.status'),
      icon: '🌐',
      features: [
        t('products.items.iotFramework.features.deviceMgmt'),
        t('products.items.iotFramework.features.analytics'),
        t('products.items.iotFramework.features.edge')
      ]
    }
  ]

  return (
    <>
      <SEO 
        title={`${t('products.title')} - HENQ Technologies`}
        description={t('products.description')}
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
              {t('products.title')}
            </h1>
            <p className="text-large text-white/95 backdrop-blur-sm">
              {t('products.description')}
            </p>
          </SimpleAnimation>
        </Container>
      </section>

      {/* Products Grid */}
      <section className="section bg-gradient-subtle">
        <Container>
          <SimpleAnimation delay={200}>
            <h2 className="heading-section">
              {t('products.subtitle')}
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {products.map((product, index) => (
                <SimpleAnimation
                  key={index}
                  delay={300 + index * 150}
                >
                  <Card className="h-full">
                    <CardContent>
                      <div className="text-center mb-6">
                        <div className="text-6xl mb-4">{product.icon}</div>
                        <div className="flex items-center justify-center mb-2">
                          <h3 className="text-2xl font-bold text-primary-900 mr-3">
                            {product.title}
                          </h3>
                          <span className="px-3 py-1 bg-signal-100 text-signal-700 text-sm rounded-full">
                            {product.status}
                          </span>
                        </div>
                      </div>
                      
                      <p className="text-primary-700 leading-relaxed mb-6 text-center">
                        {product.description}
                      </p>
                      
                      <div className="space-y-3">
                        <h4 className="font-semibold text-primary-900">{t('products.keyFeatures')}</h4>
                        <ul className="space-y-2">
                          {product.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-primary-700">
                              <span className="text-signal-500 mr-2">✓</span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="mt-6 text-center">
                        <Button variant="ghost" disabled>
                          {t('products.comingSoon')}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </SimpleAnimation>
              ))}
            </div>
          </SimpleAnimation>
        </Container>
      </section>

      {/* Innovation Notice */}
      <section className="section bg-signal-50">
        <Container>
          <SimpleAnimation
            delay={200}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="text-5xl mb-6">🔬</div>
            <h2 className="text-3xl font-bold text-primary-900 mb-4">
              {t('products.innovationNotice.title')}
            </h2>
            <p className="text-lg text-primary-700 mb-6">
              {t('products.innovationNotice.description')}
            </p>
            <p className="text-signal-600 font-medium">
              {t('products.innovationNotice.earlyAccess')}
            </p>
          </SimpleAnimation>
        </Container>
      </section>
    </>
  )
}
