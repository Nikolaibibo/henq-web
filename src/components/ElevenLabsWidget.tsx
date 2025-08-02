import React, { useEffect, useRef } from 'react'
import { useCookieConsent } from '@/contexts/CookieConsentContext'

interface ElevenLabsWidgetProps {
  agentId?: string
  className?: string
}

export const ElevenLabsWidget = ({ 
  agentId = "agent_0601k1n5tjgtfz0sxxbwf4cyybd4",
  className = ""
}: ElevenLabsWidgetProps) => {
  const scriptLoaded = useRef(false)
  const { consent } = useCookieConsent()

  useEffect(() => {
    // Only load if functional cookies are accepted
    if (!consent.functional) {
      return
    }

    // Prevent loading script multiple times
    if (scriptLoaded.current) {
      return
    }

    // Check if script is already loaded
    const existingScript = document.querySelector('script[src="https://unpkg.com/@elevenlabs/convai-widget-embed"]')
    if (existingScript) {
      scriptLoaded.current = true
      return
    }

    // Create and load the script
    const script = document.createElement('script')
    script.src = 'https://unpkg.com/@elevenlabs/convai-widget-embed'
    script.async = true
    script.type = 'text/javascript'
    
    script.onload = () => {
      scriptLoaded.current = true
    }

    script.onerror = () => {
      console.error('Failed to load ElevenLabs ConvAI widget script')
    }

    document.head.appendChild(script)

    // Cleanup function
    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script)
      }
    }
  }, [consent.functional])

  // Don't render if functional cookies are not accepted
  if (!consent.functional) {
    return (
      <div className={`p-4 bg-primary-50 border border-primary-200 rounded-lg text-center ${className}`}>
        <p className="text-primary-700 text-sm">
          AI Chat widget requires functional cookies to be enabled.
        </p>
      </div>
    )
  }

  return (
    <div className={className}>
      {React.createElement('elevenlabs-convai', { 'agent-id': agentId })}
    </div>
  )
}
