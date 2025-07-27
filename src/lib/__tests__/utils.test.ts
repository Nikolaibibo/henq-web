import { describe, it, expect } from 'vitest'
import { cn, debounce } from '../utils'

describe('cn utility', () => {
  it('combines class names correctly', () => {
    expect(cn('btn', 'btn-primary')).toBe('btn btn-primary')
  })

  it('handles conditional classes', () => {
    expect(cn('btn', false && 'hidden', 'visible')).toBe('btn visible')
  })

  it('handles undefined and null values', () => {
    expect(cn('btn', undefined, null, 'active')).toBe('btn active')
  })

  it('merges tailwind classes correctly', () => {
    // tailwind-merge handles conflicting classes
    const result1 = cn('px-2', 'px-4')
    expect(result1).toContain('px-4')
    
    const result2 = cn('text-red-500', 'text-blue-500')
    expect(result2).toContain('text-blue-500')
  })

  it('handles empty input', () => {
    expect(cn()).toBe('')
  })
})

describe('debounce utility', () => {
  it('delays function execution', async () => {
    let counter = 0
    const increment = () => counter++
    const debouncedIncrement = debounce(increment, 100)

    // Call multiple times rapidly
    debouncedIncrement()
    debouncedIncrement()
    debouncedIncrement()

    // Should not have executed yet
    expect(counter).toBe(0)

    // Wait for debounce delay
    await new Promise(resolve => setTimeout(resolve, 150))
    
    // Should have executed once
    expect(counter).toBe(1)
  })

  it('cancels previous calls', async () => {
    let value = ''
    const setValue = (newValue: string) => value = newValue
    const debouncedSetValue = debounce(setValue, 50)

    debouncedSetValue('first')
    debouncedSetValue('second')
    debouncedSetValue('third')

    await new Promise(resolve => setTimeout(resolve, 100))
    
    // Only the last call should have executed
    expect(value).toBe('third')
  })
})