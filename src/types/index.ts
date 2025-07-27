export interface Language {
  code: 'de' | 'en'
  name: string
  flag: string
}

export interface LocalizedContent {
  de: string
  en: string
}

export interface PageMeta {
  title: LocalizedContent
  description: LocalizedContent
  slug: LocalizedContent
}

export interface NavigationItem {
  path: string
  label: string
  isActive?: boolean
}

export interface ContactFormData {
  name: string
  email: string
  message: string
  consent: boolean
  newsletter: boolean
}

export interface FormState {
  data: ContactFormData
  errors: Partial<Record<keyof ContactFormData, string>>
  isSubmitting: boolean
  isSubmitted: boolean
  submitError?: string
}

export type LoadingState = 'idle' | 'loading' | 'success' | 'error'

export interface ComponentProps {
  className?: string
  children?: React.ReactNode
}