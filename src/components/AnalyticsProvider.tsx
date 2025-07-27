import { useAnalytics } from '@/hooks/useAnalytics'

interface AnalyticsProviderProps {
  children: React.ReactNode
}

export const AnalyticsProvider = ({ children }: AnalyticsProviderProps) => {
  useAnalytics()
  return <>{children}</>
}