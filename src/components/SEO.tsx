import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import { useLocation } from 'react-router-dom'

interface SEOProps {
  title?: string
  description?: string
  keywords?: string
  image?: string
  type?: 'website' | 'article'
  noIndex?: boolean
}

export const SEO = ({
  title,
  description,
  keywords,
  image = '/og-image.png',
  type = 'website',
  noIndex = false
}: SEOProps) => {
  const { t, i18n } = useTranslation()
  const location = useLocation()
  
  const siteUrl = import.meta.env.VITE_SITE_URL || 'https://henq-technologies.com'
  const currentUrl = `${siteUrl}${location.pathname}`
  
  const defaultTitle = t('seo.defaultTitle')
  const defaultDescription = t('seo.defaultDescription')
  const defaultKeywords = t('seo.defaultKeywords')
  
  const finalTitle = title ? `${title} | HENQ Technologies` : defaultTitle
  const finalDescription = description || defaultDescription
  const finalKeywords = keywords || defaultKeywords
  const finalImage = image.startsWith('http') ? image : `${siteUrl}${image}`
  
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'HENQ Technologies GbR',
    alternateName: 'HENQ Technologies',
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    description: finalDescription,
    foundingDate: '2025',
    founders: [
      {
        '@type': 'Person',
        name: 'Nikolai Bockholt'
      },
      {
        '@type': 'Person', 
        name: 'Tobias Nisse'
      }
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'kontakt@henq-technologies.de',
      contactType: 'customer service',
      areaServed: 'DE',
      availableLanguage: ['German', 'English']
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'St. Johannes Straße 16',
      addressLocality: 'Medebach',
      postalCode: '59964',
      addressCountry: 'DE',
      addressRegion: 'Nordrhein-Westfalen'
    },
    serviceArea: {
      '@type': 'Country',
      name: 'Germany'
    },
    knowsAbout: [
      'Software Development',
      'Technology Consulting', 
      'Innovation Labs',
      'AI Solutions',
      'Cloud Platforms',
      'IoT Frameworks'
    ]
  }

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{finalTitle}</title>
      <meta name="description" content={finalDescription} />
      <meta name="keywords" content={finalKeywords} />
      <link rel="canonical" href={currentUrl} />
      <meta name="language" content={i18n.language} />
      
      {/* Open Graph Tags */}
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:image" content={finalImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="HENQ Technologies - Innovative Technologielösungen" />
      <meta property="og:site_name" content="HENQ Technologies GbR" />
      <meta property="og:locale" content={i18n.language === 'de' ? 'de_DE' : 'en_US'} />
      <meta property="og:locale:alternate" content={i18n.language === 'de' ? 'en_US' : 'de_DE'} />
      
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={finalTitle} />
      <meta name="twitter:description" content={finalDescription} />
      <meta name="twitter:image" content={finalImage} />
      <meta name="twitter:image:alt" content="HENQ Technologies - Innovative Technologielösungen" />
      <meta name="twitter:site" content="@henqtech" />
      <meta name="twitter:creator" content="@henqtech" />
      
      {/* Additional Meta Tags */}
      <meta name="author" content="HENQ Technologies GbR" />
      <meta name="generator" content="React, Vite, TypeScript" />
      <meta name="theme-color" content="#1e293b" />
      <meta name="msapplication-TileColor" content="#1e293b" />
      
      {/* Robots */}
      {noIndex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large" />
      )}
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </script>
      
      {/* Alternate Language Links */}
      <link rel="alternate" hrefLang="de" href={`${siteUrl}/de${location.pathname.replace(/^\/(de|en)/, '')}`} />
      <link rel="alternate" hrefLang="en" href={`${siteUrl}/en${location.pathname.replace(/^\/(de|en)/, '')}`} />
      <link rel="alternate" hrefLang="x-default" href={`${siteUrl}/de${location.pathname.replace(/^\/(de|en)/, '')}`} />
    </Helmet>
  )
}