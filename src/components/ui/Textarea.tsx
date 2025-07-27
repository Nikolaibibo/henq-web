import { forwardRef } from 'react'
import type { TextareaHTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  error?: string
  helper?: string
  required?: boolean
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, helper, required, className, id, rows = 4, ...props }, ref) => {
    const textareaId = id || `textarea-${Math.random().toString(36).substr(2, 9)}`
    const errorId = `${textareaId}-error`
    const helperId = `${textareaId}-helper`

    return (
      <div className="space-y-2">
        {label && (
          <label 
            htmlFor={textareaId}
            className={cn(
              'label',
              required && 'label-required'
            )}
          >
            {label}
          </label>
        )}
        
        <textarea
          ref={ref}
          id={textareaId}
          rows={rows}
          className={cn(
            'input resize-y',
            error && 'input-error',
            className
          )}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={cn(
            error && errorId,
            helper && helperId
          )}
          {...props}
        />
        
        {helper && !error && (
          <p id={helperId} className="text-sm text-primary-600">
            {helper}
          </p>
        )}
        
        {error && (
          <p id={errorId} className="error-message" role="alert">
            {error}
          </p>
        )}
      </div>
    )
  }
)