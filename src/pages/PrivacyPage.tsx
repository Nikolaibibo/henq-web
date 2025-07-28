import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Container, Card, CardContent } from '@/components/ui'

export const PrivacyPage = () => {
  const { t } = useTranslation()

  return (
    <>
      <title>{t('legal.privacy.title')} - HENQ Technologies</title>
      
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
              {t('legal.privacy.title')}
            </h1>
            <p className="text-lg text-primary-200">
              {t('legal.privacy.subtitle')}
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Privacy Content */}
      <section className="section">
        <Container size="narrow">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card>
              <CardContent className="prose prose-primary max-w-none">
                <div className="space-y-8">
                  {/* Introduction */}
                  <div>
                    <h2 className="text-2xl font-bold text-primary-900 mb-4">
                      Einleitung
                    </h2>
                    <p className="text-primary-700">
                      Mit der folgenden Datenschutzerklärung möchten wir Sie darüber aufklären, 
                      welche Arten Ihrer personenbezogenen Daten (nachfolgend auch kurz als "Daten" 
                      bezeichnet) wir zu welchen Zwecken und in welchem Umfang verarbeiten. Die 
                      Datenschutzerklärung gilt für alle von uns durchgeführten Verarbeitungen 
                      personenbezogener Daten, sowohl im Rahmen der Erbringung unserer Leistungen 
                      als auch insbesondere auf unseren Webseiten, in mobilen Applikationen sowie 
                      innerhalb externer Onlinepräsenzen, wie z.B. unserer Social-Media-Profile.
                    </p>
                  </div>

                  {/* Responsible Party */}
                  <div>
                    <h2 className="text-2xl font-bold text-primary-900 mb-4">
                      {t('legal.privacy.dataController')}
                    </h2>
                    <div className="text-primary-700 space-y-2">
                      <p><strong>HENQ Technologies GbR</strong></p>
                      <address className="not-italic">
                        St. Johannes Straße 16<br />
                        59964 Medebach<br />
                        Deutschland
                      </address>
                      <p>
                        E-Mail: <a href="mailto:info@henq-technologies.com" className="text-signal-600 hover:text-signal-700">info@henq-technologies.com</a>
                      </p>
                    </div>
                  </div>

                  {/* Data Processing */}
                  <div>
                    <h2 className="text-2xl font-bold text-primary-900 mb-4">
                      Arten der verarbeiteten Daten
                    </h2>
                    <ul className="list-disc list-inside space-y-2 text-primary-700">
                      <li>Bestandsdaten (z.B. Namen, Adressen)</li>
                      <li>Kontaktdaten (z.B. E-Mail, Telefonnummern)</li>
                      <li>Inhaltsdaten (z.B. Eingaben in Onlineformularen)</li>
                      <li>Nutzungsdaten (z.B. besuchte Webseiten, Interesse an Inhalten, Zugriffszeiten)</li>
                      <li>Meta-/Kommunikationsdaten (z.B. Geräte-Informationen, IP-Adressen)</li>
                    </ul>
                  </div>

                  {/* Categories of Data Subjects */}
                  <div>
                    <h2 className="text-2xl font-bold text-primary-900 mb-4">
                      Kategorien betroffener Personen
                    </h2>
                    <ul className="list-disc list-inside space-y-2 text-primary-700">
                      <li>Kommunikationspartner</li>
                      <li>Nutzer (z.B. Webseitenbesucher, Nutzer von Onlinediensten)</li>
                      <li>Geschäfts- und Vertragspartner</li>
                    </ul>
                  </div>

                  {/* Purposes of Processing */}
                  <div>
                    <h2 className="text-2xl font-bold text-primary-900 mb-4">
                      Zwecke der Verarbeitung
                    </h2>
                    <ul className="list-disc list-inside space-y-2 text-primary-700">
                      <li>Erbringung vertraglicher Leistungen und Kundenservice</li>
                      <li>Kontaktanfragen und Kommunikation</li>
                      <li>Sicherheitsmaßnahmen</li>
                      <li>Verwaltung und Beantwortung von Anfragen</li>
                      <li>Feedback (z.B. Sammeln von Feedback via Online-Formular)</li>
                      <li>Bereitstellung unseres Onlineangebotes und Nutzerfreundlichkeit</li>
                    </ul>
                  </div>

                  {/* Legal Basis */}
                  <div>
                    <h2 className="text-2xl font-bold text-primary-900 mb-4">
                      Maßgebliche Rechtsgrundlagen
                    </h2>
                    <div className="space-y-4 text-primary-700">
                      <p>
                        Im Folgenden erhalten Sie eine Übersicht der Rechtsgrundlagen der DSGVO, 
                        auf deren Basis wir personenbezogene Daten verarbeiten:
                      </p>
                      <ul className="list-disc list-inside space-y-2">
                        <li><strong>Einwilligung (Art. 6 Abs. 1 S. 1 lit. a. DSGVO)</strong> - Die betroffene Person hat ihre Einwilligung zu der Verarbeitung der sie betreffenden personenbezogenen Daten für einen spezifischen Zweck oder mehrere bestimmte Zwecke gegeben.</li>
                        <li><strong>Vertragserfüllung und vorvertragliche Anfragen (Art. 6 Abs. 1 S. 1 lit. b. DSGVO)</strong> - Die Verarbeitung ist für die Erfüllung eines Vertrags, dessen Vertragspartei die betroffene Person ist, oder zur Durchführung vorvertraglicher Maßnahmen erforderlich.</li>
                        <li><strong>Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f. DSGVO)</strong> - Die Verarbeitung ist zur Wahrung der berechtigten Interessen des Verantwortlichen oder eines Dritten erforderlich.</li>
                      </ul>
                    </div>
                  </div>

                  {/* Cookies */}
                  <div>
                    <h2 className="text-2xl font-bold text-primary-900 mb-4">
                      {t('legal.privacy.cookies')}
                    </h2>
                    <div className="space-y-4 text-primary-700">
                      <p>
                        Als „Cookies" werden kleine Dateien bezeichnet, die auf Geräten der Nutzer 
                        gespeichert werden. Mittels Cookies können unterschiedliche Angaben gespeichert 
                        werden. Ein Cookie dient primär dazu, die Angaben zu einem Nutzer (bzw. dem 
                        Gerät auf dem das Cookie gespeichert ist) während oder auch nach seinem Besuch 
                        innerhalb eines Onlineangebotes zu speichern.
                      </p>
                      <p>
                        Wir verwenden Cookies, um die Funktionalität unserer Website zu gewährleisten 
                        und Ihr Nutzererlebnis zu verbessern. Sie können die Verwendung von Cookies 
                        über Ihre Browser-Einstellungen kontrollieren.
                      </p>
                    </div>
                  </div>

                  {/* Contact Forms */}
                  <div>
                    <h2 className="text-2xl font-bold text-primary-900 mb-4">
                      Kontakt- und Anfragenverwaltung
                    </h2>
                    <div className="space-y-4 text-primary-700">
                      <p>
                        Bei der Kontaktaufnahme mit uns (z.B. per Kontaktformular, E-Mail, Telefon 
                        oder via soziale Medien) sowie im Rahmen bestehender Nutzer- und 
                        Geschäftsbeziehungen werden die Angaben der anfragenden Personen verarbeitet 
                        soweit dies zur Beantwortung der Kontaktanfragen und etwaiger angefragter 
                        Maßnahmen erforderlich ist.
                      </p>
                      <ul className="list-disc list-inside space-y-2">
                        <li><strong>Verarbeitete Datenarten:</strong> Kontaktdaten (z.B. E-Mail, Telefonnummern); Inhaltsdaten (z.B. Eingaben in Onlineformularen); Nutzungsdaten; Meta-/Kommunikationsdaten.</li>
                        <li><strong>Betroffene Personen:</strong> Kommunikationspartner.</li>
                        <li><strong>Zwecke der Verarbeitung:</strong> Kontaktanfragen und Kommunikation; Verwaltung und Beantwortung von Anfragen; Feedback.</li>
                        <li><strong>Rechtsgrundlagen:</strong> Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f. DSGVO); Vertragserfüllung und vorvertragliche Anfragen (Art. 6 Abs. 1 S. 1 lit. b. DSGVO).</li>
                      </ul>
                    </div>
                  </div>

                  {/* Rights of Data Subjects */}
                  <div>
                    <h2 className="text-2xl font-bold text-primary-900 mb-4">
                      Rechte der betroffenen Personen
                    </h2>
                    <div className="space-y-4 text-primary-700">
                      <p>Sie haben das Recht:</p>
                      <ul className="list-disc list-inside space-y-2">
                        <li>gemäß Art. 15 DSGVO Auskunft über Ihre von uns verarbeiteten personenbezogenen Daten zu verlangen</li>
                        <li>gemäß Art. 16 DSGVO unverzüglich die Berichtigung unrichtiger oder Vervollständigung Ihrer bei uns gespeicherten personenbezogenen Daten zu verlangen</li>
                        <li>gemäß Art. 17 DSGVO die Löschung Ihrer bei uns gespeicherten personenbezogenen Daten zu verlangen</li>
                        <li>gemäß Art. 18 DSGVO die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen</li>
                        <li>gemäß Art. 20 DSGVO Ihre personenbezogenen Daten, die Sie uns bereitgestellt haben, in einem strukturierten, gängigen und maschinenlesebaren Format zu erhalten</li>
                        <li>gemäß Art. 7 Abs. 3 DSGVO Ihre einmal erteilte Einwilligung jederzeit gegenüber uns zu widerrufen</li>
                        <li>gemäß Art. 77 DSGVO sich bei einer Aufsichtsbehörde zu beschweren</li>
                      </ul>
                    </div>
                  </div>

                  {/* Contact for Privacy */}
                  <div>
                    <h2 className="text-2xl font-bold text-primary-900 mb-4">
                      {t('legal.privacy.contact')}
                    </h2>
                    <p className="text-primary-700">
                      Bei Fragen zum Datenschutz können Sie sich jederzeit an uns wenden:
                    </p>
                    <div className="mt-4 text-primary-700">
                      <p>
                        E-Mail: <a href="mailto:info@henq-technologies.com" className="text-signal-600 hover:text-signal-700">info@henq-technologies.com</a>
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
