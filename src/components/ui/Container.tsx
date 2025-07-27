import type { HTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  size?: 'text' | 'narrow' | 'content' | 'xl' | 'full'
  padding?: boolean
  children: React.ReactNode
}

const sizeVariants = {
  text: 'container-text',
  narrow: 'container-narrow',
  content: 'container-content',
  xl: 'max-w-7xl',
  full: 'max-w-none'
}

export const Container = ({ 
  size = 'xl',
  padding = true,
  className, 
  children,
  ...props 
}: ContainerProps) => {
  return (
    <div
      className={cn(
        'mx-auto',
        sizeVariants[size],
        padding && 'px-4 sm:px-6 lg:px-8',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
