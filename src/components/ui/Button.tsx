import { forwardRef } from 'react'
import type { ButtonHTMLAttributes } from 'react'
import { motion } from 'framer-motion'
import type { MotionProps } from 'framer-motion'
import { cn } from '@/lib/utils'
import { trackButtonClick } from '@/config/firebase'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  loading?: boolean
  children: React.ReactNode
  analyticsName?: string
}

const buttonVariants = {
  primary: 'btn-primary',
  secondary: 'btn-secondary',
  ghost: 'btn-ghost'
}

const sizeVariants = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg'
}

export const Button = forwardRef<
  HTMLButtonElement,
  ButtonProps & MotionProps
>(({ 
  variant = 'primary', 
  size = 'md',
  loading = false,
  className, 
  children, 
  disabled,
  analyticsName,
  onClick,
  ...props 
}, ref) => {
  const isDisabled = disabled || loading

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (analyticsName) {
      trackButtonClick(analyticsName, window.location.pathname)
    }
    onClick?.(e)
  }

  return (
    <motion.button
      ref={ref}
      className={cn(
        buttonVariants[variant],
        sizeVariants[size],
        loading && 'opacity-50 cursor-not-allowed',
        className
      )}
      disabled={isDisabled}
      onClick={handleClick}
      whileHover={!isDisabled ? { scale: 1.02, y: -1 } : undefined}
      whileTap={!isDisabled ? { scale: 0.98 } : undefined}
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
      {...props}
    >
      {loading ? (
        <div className="flex items-center justify-center space-x-2">
          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-current"></div>
          <span>Loading...</span>
        </div>
      ) : (
        children
      )}
    </motion.button>
  )
})