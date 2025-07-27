import type { HTMLAttributes } from 'react'
import { motion } from 'framer-motion'
import type { MotionProps } from 'framer-motion'
import { cn } from '@/lib/utils'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'elevated' | 'outlined'
  hover?: boolean
  children: React.ReactNode
}

const cardVariants = {
  default: 'card',
  elevated: 'card-elevated',
  outlined: 'card-flat'
}

export const Card = ({ 
  variant = 'default',
  hover = true,
  className, 
  children,
  ...props 
}: CardProps & MotionProps) => {
  return (
    <motion.div
      className={cn(
        cardVariants[variant],
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={hover ? { y: -4, scale: 1.02 } : undefined}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export const CardHeader = ({ className, children, ...props }: HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('mb-4', className)} {...props}>
    {children}
  </div>
)

export const CardTitle = ({ className, children, ...props }: HTMLAttributes<HTMLHeadingElement>) => (
  <h3 className={cn('text-xl font-semibold text-primary-900 mb-2', className)} {...props}>
    {children}
  </h3>
)

export const CardContent = ({ className, children, ...props }: HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('text-primary-700 leading-relaxed', className)} {...props}>
    {children}
  </div>
)

export const CardFooter = ({ className, children, ...props }: HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('mt-6 pt-4 border-t border-primary-100', className)} {...props}>
    {children}
  </div>
)
