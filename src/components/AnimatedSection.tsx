import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  delay?: number
  animationType?: 'fade' | 'slideUp' | 'slideLeft' | 'slideRight'
}

export const AnimatedSection = ({ 
  children, 
  className = '',
  delay = 0,
  animationType = 'fade'
}: AnimatedSectionProps) => {
  const animations = {
    fade: {
      initial: { opacity: 0 },
      animate: { opacity: 1 }
    },
    slideUp: {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 }
    },
    slideLeft: {
      initial: { opacity: 0, x: 30 },
      animate: { opacity: 1, x: 0 }
    },
    slideRight: {
      initial: { opacity: 0, x: -30 },
      animate: { opacity: 1, x: 0 }
    }
  }

  const animation = animations[animationType]

  return (
    <motion.div
      initial={animation.initial}
      whileInView={animation.animate}
      viewport={{ 
        once: true, 
        amount: 0.1, // Show when only 10% is visible
        margin: "-50px" // Start animation 50px before entering viewport
      }}
      transition={{ 
        duration: 0.4, // Faster animation
        delay,
        ease: "easeOut"
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}