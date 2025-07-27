import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Container, Card, CardContent } from '@/components/ui'

export const ImprintPage = () => {
  const { t } = useTranslation()

  return (
    <>
      <title>{t('legal.imprint.title')} - HENQ Technologies</title>
      
      {/* Hero Section */}
      <section className="section bg-primary-900 text-primary-50">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {t('legal.imprint.title')}
            </h1>
            <p className="text-lg text-primary-200">
              {t('legal.imprint.subtitle')}
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Imprint Content */}
      <section className="section">
        <Container size="md">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card>
              <CardContent className="prose prose-primary max-w-none">
                <div className="space-y-8">
                  {/* Company Information */}
                  <div>
                    <h2 className="text-2xl font-bold text-primary-900 mb-4">
                      {t('legal.imprint.company')}
                    </h2>
                    <div className="space-y-2 text-primary-700">
                      <p className="font-semibold">HENQ Technologies GbR</p>
                      <address className="not-italic">
                        St. Johannes Straße 16<br />
                        59964 Medebach<br />
                        Deutschland
                      </address>
                    </div>
                  </div>

                  {/* Contact Information */}
                  <div>
                    <h2 className="text-2xl font-bold text-primary-900 mb-4">
                      {t('legal.imprint.contact')}
                    </h2>
                    <div className="space-y-2 text-primary-700">
                      <p>
                        <strong>E-Mail:</strong>{' '}
                        <a href="mailto:kontakt@henq-technologies.de" className="text-signal-600 hover:text-signal-700">
                          kontakt@henq-technologies.de
                        </a>
                      </p>
                      <p>
                        <strong>Telefon:</strong>{' '}
                        <span className="text-primary-600">
                          [optional einfügen]
                        </span>
                      </p>
                    </div>
                  </div>

                  {/* Responsible Persons */}
                  <div>
                    <h2 className="text-2xl font-bold text-primary-900 mb-4">
                      {t('legal.imprint.representatives')}
                    </h2>
                    <div className="space-y-2 text-primary-700">
                      <p>Nikolai Bockholt</p>
                      <p>Tobias Nisse</p>
                    </div>
                  </div>

                  {/* Legal Form */}
                  <div>
                    <h2 className="text-2xl font-bold text-primary-900 mb-4">
                      Rechtsform
                    </h2>
                    <p className="text-primary-700">
                      Gesellschaft bürgerlichen Rechts (GbR)
                    </p>
                  </div>

                  {/* Tax Information */}
                  <div>
                    <h2 className="text-2xl font-bold text-primary-900 mb-4">
                      Steuerliche Angaben
                    </h2>
                    <div className="space-y-2 text-primary-700">
                      <p>Steuernummer: 123/456/78901</p>
                      <p>Finanzamt: Musterstadt</p>
                    </div>
                  </div>

                  {/* Disclaimer */}
                  <div>
                    <h2 className="text-2xl font-bold text-primary-900 mb-4">
                      Haftungsausschluss
                    </h2>
                    <div className="space-y-4 text-primary-700">
                      <h3 className="text-lg font-semibold">Inhalt des Onlineangebotes</h3>
                      <p>
                        Der Autor übernimmt keinerlei Gewähr für die Aktualität, Korrektheit, 
                        Vollständigkeit oder Qualität der bereitgestellten Informationen. 
                        Haftungsansprüche gegen den Autor, welche sich auf Schäden materieller 
                        oder ideeller Art beziehen, die durch die Nutzung oder Nichtnutzung der 
                        dargebotenen Informationen bzw. durch die Nutzung fehlerhafter und 
                        unvollständiger Informationen verursacht wurden, sind grundsätzlich 
                        ausgeschlossen.
                      </p>

                      <h3 className="text-lg font-semibold">Verweise und Links</h3>
                      <p>
                        Bei direkten oder indirekten Verweisen auf fremde Internetseiten 
                        ("Links"), die außerhalb des Verantwortungsbereiches des Autors liegen, 
                        würde eine Haftungsverpflichtung ausschließlich in dem Fall in Kraft 
                        treten, in dem der Autor von den Inhalten Kenntnis hat und es ihm 
                        technisch möglich und zumutbar wäre, die Nutzung im Falle rechtswidriger 
                        Inhalte zu verhindern.
                      </p>

                      <h3 className="text-lg font-semibold">Urheberrecht</h3>
                      <p>
                        Der Autor ist bestrebt, in allen Publikationen die Urheberrechte der 
                        verwendeten Grafiken, Tondokumente, Videosequenzen und Texte zu beachten, 
                        von ihm selbst erstellte Grafiken, Tondokumente, Videosequenzen und Texte 
                        zu nutzen oder auf lizenzfreie Grafiken, Tondokumente, Videosequenzen und 
                        Texte zurückzugreifen.
                      </p>
                    </div>
                  </div>

                  {/* Last Updated */}
                  <div className="pt-6 border-t border-primary-200">
                    <p className="text-sm text-primary-600">
                      Stand: Januar 2024
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </Container>
      </section>
    </>
  )
}