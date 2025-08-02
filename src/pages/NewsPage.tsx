import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Container, Card, CardContent } from '@/components/ui'

export const NewsPage = () => {
  const { t } = useTranslation()

  // News articles
  const newsArticles = [
    {
      title: t('news.articles.companyFounding.title'),
      date: t('news.articles.companyFounding.date'),
      excerpt: t('news.articles.companyFounding.excerpt'),
      category: t('news.articles.companyFounding.category')
    },
    {
      title: t('news.articles.pixelRevive.title'),
      date: t('news.articles.pixelRevive.date'),
      excerpt: t('news.articles.pixelRevive.excerpt'),
      category: t('news.articles.pixelRevive.category')
    },
    {
      title: t('news.articles.phoneAI.title'),
      date: t('news.articles.phoneAI.date'),
      excerpt: t('news.articles.phoneAI.excerpt'),
      category: t('news.articles.phoneAI.category')
    }
  ]

  return (
    <>
      <title>{t('news.title')} - HENQ Technologies</title>
      
      {/* Hero Section */}
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
              {t('news.title')}
            </h1>
            <p className="text-large text-white/95 backdrop-blur-sm">
              {t('news.description')}
            </p>
          </motion.div>
        </Container>
      </section>

      {/* News Articles */}
      <section className="section bg-gradient-subtle">
        <Container>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="heading-section">
              {t('news.subtitle')}
            </h2>
            
            <div className="space-y-8 max-w-4xl mx-auto">
              {newsArticles.map((article, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card>
                    <CardContent>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                        <span className="px-3 py-1 bg-signal-100 text-signal-700 rounded-full text-sm w-fit">
                          {article.category}
                        </span>
                        <time className="text-primary-600 text-sm mt-2 sm:mt-0">
                          {new Date(article.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </time>
                      </div>
                      
                      <h3 className="text-xl font-bold text-primary-900 mb-3">
                        {article.title}
                      </h3>
                      
                      <p className="text-primary-700 leading-relaxed mb-4">
                        {article.excerpt}
                      </p>
                      
                      <button className="text-signal-600 font-medium hover:text-signal-700 transition-colors">
                        {t('news.readMore')} →
                      </button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Coming Soon Notice */}
      <section className="section bg-signal-50">
        <Container>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="text-5xl mb-6">📰</div>
            <h2 className="text-3xl font-bold text-primary-900 mb-4">
              {t('news.moreNewsComing.title')}
            </h2>
            <p className="text-lg text-primary-700">
              {t('news.moreNewsComing.description')}
            </p>
          </motion.div>
        </Container>
      </section>
    </>
  )
}
