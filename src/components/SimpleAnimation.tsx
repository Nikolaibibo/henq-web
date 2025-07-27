import { useState, useEffect } from 'react'
import type { ReactNode } from 'react'

interface SimpleAnimationProps {
  children: ReactNode
  className?: string
  delay?: number
}

// Simple, reliable animation that always works
export const SimpleAnimation = ({ 
  children, 
  className = '',
  delay = 0
}: SimpleAnimationProps) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Show content after delay, or immediately if no delay
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, delay)

    return () => clearTimeout(timer)
  }, [delay])

  return (
    <div 
      className={`transition-all duration-300 ease-out ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-2'
      } ${className}`}
      style={{
        // Ensure content is always visible after 1 second max
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(8px)'
      }}
    >
      {children}
    </div>
  )
}