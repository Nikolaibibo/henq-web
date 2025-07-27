import { useTranslation } from 'react-i18next'
import { Container, Card, CardContent } from '@/components/ui'
import { SEO } from '@/components/SEO'
import { SimpleAnimation } from '@/components/SimpleAnimation'

export const CompanyPage = () => {
  const { t } = useTranslation()

  return (
    <>
      <SEO 
        title={`${t('company.title')} - HENQ Technologies`}
        description={t('company.description')}
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
              {t('company.title')}
            </h1>
            <p className="text-large text-white/95 backdrop-blur-sm">
              {t('company.description')}
            </p>
          </SimpleAnimation>
        </Container>
      </section>

      {/* Mission & Vision */}
      <section className="section bg-gradient-subtle">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <SimpleAnimation delay={200}>
              <Card>
                <CardContent>
                  <div className="text-center">
                    <div className="text-4xl mb-4">🎯</div>
                    <h2 className="text-2xl font-bold text-primary-900 mb-4">
                      {t('company.mission.title')}
                    </h2>
                    <p className="text-primary-700 leading-relaxed">
                      {t('company.mission.description')}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </SimpleAnimation>

            <SimpleAnimation delay={300}>
              <Card>
                <CardContent>
                  <div className="text-center">
                    <div className="text-4xl mb-4">🔮</div>
                    <h2 className="text-2xl font-bold text-primary-900 mb-4">
                      {t('company.vision.title')}
                    </h2>
                    <p className="text-primary-700 leading-relaxed">
                      {t('company.vision.description')}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </SimpleAnimation>
          </div>
        </Container>
      </section>

      {/* Company Values */}
      <section className="section bg-primary-50">
        <Container>
          <SimpleAnimation delay={200}>
            <h2 className="heading-section">
              {t('company.values.title')}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: t('company.values.innovation.title'),
                  description: t('company.values.innovation.description'),
                  icon: '💡'
                },
                {
                  title: t('company.values.quality.title'),
                  description: t('company.values.quality.description'),
                  icon: '⭐'
                },
                {
                  title: t('company.values.partnership.title'),
                  description: t('company.values.partnership.description'),
                  icon: '🤝'
                }
              ].map((value, index) => (
                <SimpleAnimation
                  key={index}
                  delay={300 + index * 100}
                >
                  <Card>
                    <CardContent>
                      <div className="text-center">
                        <div className="text-4xl mb-4">{value.icon}</div>
                        <h3 className="text-xl font-semibold mb-3 text-primary-900">
                          {value.title}
                        </h3>
                        <p className="text-primary-700 leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </SimpleAnimation>
              ))}
            </div>
          </SimpleAnimation>
        </Container>
      </section>
    </>
  )
}
