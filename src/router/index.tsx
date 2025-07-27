import { createBrowserRouter, Navigate } from 'react-router-dom'
import { LanguageDetector } from './LanguageDetector'
import { Layout } from '@/components/layout/Layout'
import { HomePage } from '@/pages/HomePage'
import { CompanyPage } from '@/pages/CompanyPage'
import { ProductsPage } from '@/pages/ProductsPage'
import { FoundersPage } from '@/pages/FoundersPage'
import { NewsPage } from '@/pages/NewsPage'
import { ContactPage } from '@/pages/ContactPage'
import { ImprintPage } from '@/pages/ImprintPage'
import { PrivacyPage } from '@/pages/PrivacyPage'

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LanguageDetector />
  },
  {
    path: "/:locale",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      // German routes
      {
        path: "unternehmen",
        element: <CompanyPage />
      },
      {
        path: "produkte", 
        element: <ProductsPage />
      },
      {
        path: "gruender",
        element: <FoundersPage />
      },
      {
        path: "news",
        element: <NewsPage />
      },
      {
        path: "kontakt",
        element: <ContactPage />
      },
      {
        path: "impressum",
        element: <ImprintPage />
      },
      {
        path: "datenschutz",
        element: <PrivacyPage />
      },
      // English routes
      {
        path: "company",
        element: <CompanyPage />
      },
      {
        path: "products",
        element: <ProductsPage />
      },
      {
        path: "founders",
        element: <FoundersPage />
      },
      {
        path: "contact",
        element: <ContactPage />
      },
      {
        path: "imprint",
        element: <ImprintPage />
      },
      {
        path: "privacy",
        element: <PrivacyPage />
      }
    ]
  },
  // Catch-all redirect to root
  {
    path: "*",
    element: <Navigate to="/" replace />
  }
])