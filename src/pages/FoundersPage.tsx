import { useTranslation } from 'react-i18next'
import { Container, Card, CardContent } from '@/components/ui'
import { SEO } from '@/components/SEO'
import { SimpleAnimation } from '@/components/SimpleAnimation'

export const FoundersPage = () => {
  const { t } = useTranslation()

  const founders = [
    {
      name: t('founders.team.nikolaiBockholt.name'),
      role: t('founders.team.nikolaiBockholt.role'),
      bio: t('founders.team.nikolaiBockholt.bio'),
      expertise: [
        t('founders.team.nikolaiBockholt.expertise.development'),
        t('founders.team.nikolaiBockholt.expertise.architecture'),
        t('founders.team.nikolaiBockholt.expertise.innovation')
      ],
      avatar: '👨‍💻'
    },
    {
      name: t('founders.team.tobiasNisse.name'),
      role: t('founders.team.tobiasNisse.role'),
      bio: t('founders.team.tobiasNisse.bio'),
      expertise: [
        t('founders.team.tobiasNisse.expertise.strategy'),
        t('founders.team.tobiasNisse.expertise.scaling'),
        t('founders.team.tobiasNisse.expertise.consulting')
      ],
      avatar: '👨‍💼'
    }
  ]

  return (
    <>
      <SEO 
        title={`${t('founders.title')} - HENQ Technologies`}
        description={t('founders.description')}
      />
      
      {/* Hero Section */}
      <section className="section-lg bg-primary-900 text-primary-50">
        <Container>
          <SimpleAnimation 
            delay={100}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="heading-hero mb-6">
              {t('founders.title')}
            </h1>
            <p className="text-large text-primary-200">
              {t('founders.description')}
            </p>
          </SimpleAnimation>
        </Container>
      </section>

      {/* Founders Section */}
      <section className="section">
        <Container>
          <SimpleAnimation delay={200}>
            <h2 className="heading-section">
              {t('founders.subtitle')}
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {founders.map((founder, index) => (
                <SimpleAnimation
                  key={index}
                  delay={300 + index * 200}
                >
                  <Card className="h-full">
                    <CardContent>
                      <div className="text-center mb-6">
                        <div className="text-8xl mb-4">{founder.avatar}</div>
                        <h3 className="text-2xl font-bold text-primary-900 mb-1">
                          {founder.name}
                        </h3>
                        <p className="text-signal-600 font-medium text-lg">
                          {founder.role}
                        </p>
                      </div>
                      
                      <p className="text-primary-700 leading-relaxed mb-6 text-center">
                        {founder.bio}
                      </p>
                      
                      <div>
                        <h4 className="font-semibold text-primary-900 mb-3 text-center">
                          {t('founders.areasOfExpertise')}
                        </h4>
                        <div className="flex flex-wrap justify-center gap-2">
                          {founder.expertise.map((skill, skillIndex) => (
                            <span
                              key={skillIndex}
                              className="px-3 py-1 bg-signal-100 text-signal-700 rounded-full text-sm"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </SimpleAnimation>
              ))}
            </div>
          </SimpleAnimation>
        </Container>
      </section>

      {/* Company Journey */}
      <section className="section bg-primary-50">
        <Container>
          <SimpleAnimation 
            delay={300}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-primary-900 mb-8">
              {t('founders.journey.title')}
            </h2>
            
            <div className="space-y-8">
              <div className="text-6xl mb-4">🚀</div>
              <p className="text-lg text-primary-700 leading-relaxed">
                {t('founders.journey.paragraph1')}
              </p>
              <p className="text-lg text-primary-700 leading-relaxed">
                {t('founders.journey.paragraph2')}
              </p>
            </div>
          </SimpleAnimation>
        </Container>
      </section>
    </>
  )
}