import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { trackPageView } from '@/config/firebase'

export const useAnalytics = () => {
  const location = useLocation()

  useEffect(() => {
    // Track page views on route change
    trackPageView(location.pathname, document.title)
  }, [location])
}