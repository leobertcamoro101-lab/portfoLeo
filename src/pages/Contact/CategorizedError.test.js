import { describe, it, expect } from 'vitest'
import { categorizeError, ERROR_CATEGORIES } from './CategorizedError'

describe('categorizeError', () => {
  describe('Network Errors', () => {
    it('should categorize "Network Error" message', () => {
      const result = categorizeError({ message: 'Network Error' })
      expect(result.category).toBe(ERROR_CATEGORIES.NETWORK)
      expect(result.message).toContain('Unable to connect')
    })

    it('should categorize "Failed to fetch" message', () => {
      const result = categorizeError({ message: 'Failed to fetch' })
      expect(result.category).toBe(ERROR_CATEGORIES.NETWORK)
    })
  })

  describe('Rate Limit Errors', () => {
    it('should categorize status 429 as rate limit error', () => {
      const result = categorizeError({ status: 429 })
      expect(result.category).toBe(ERROR_CATEGORIES.RATE_LIMIT)
      expect(result.message).toContain('Too many requests')
    })
  })

  describe('Configuration Errors', () => {
    it('should categorize status 401 as config error', () => {
      const result = categorizeError({ status: 401 })
      expect(result.category).toBe(ERROR_CATEGORIES.CONFIG)
      expect(result.message).toContain('not properly configured')
    })

    it('should categorize status 403 as config error', () => {
      const result = categorizeError({ status: 403 })
      expect(result.category).toBe(ERROR_CATEGORIES.CONFIG)
    })
  })

  describe('Service Errors', () => {
    it('should categorize status 500 as service error', () => {
      const result = categorizeError({ status: 500 })
      expect(result.category).toBe(ERROR_CATEGORIES.SERVICE)
      expect(result.message).toContain('temporarily unavailable')
    })

    it('should categorize status 503 as service error', () => {
      const result = categorizeError({ status: 503 })
      expect(result.category).toBe(ERROR_CATEGORIES.SERVICE)
    })
  })

  describe('Validation Errors', () => {
    it('should categorize status 400 as validation error', () => {
      const result = categorizeError({ status: 400 })
      expect(result.category).toBe(ERROR_CATEGORIES.VALIDATION)
      expect(result.message).toContain('problem with your message')
    })

    it('should categorize status 422 as validation error', () => {
      const result = categorizeError({ status: 422 })
      expect(result.category).toBe(ERROR_CATEGORIES.VALIDATION)
    })
  })

  describe('Unknown Errors', () => {
    it('should return unknown for null error', () => {
      const result = categorizeError(null)
      expect(result.category).toBe(ERROR_CATEGORIES.UNKNOWN)
      expect(result.message).toContain('unknown error')
    })

    it('should return unknown for undefined error', () => {
      const result = categorizeError(undefined)
      expect(result.category).toBe(ERROR_CATEGORIES.UNKNOWN)
    })

    it('should return unknown for error without recognized status', () => {
      const result = categorizeError({ status: 200 })
      expect(result.category).toBe(ERROR_CATEGORIES.UNKNOWN)
    })
  })

  describe('ERROR_CATEGORIES structure', () => {
    it('should have all required categories', () => {
      expect(ERROR_CATEGORIES).toHaveProperty('NETWORK')
      expect(ERROR_CATEGORIES).toHaveProperty('CONFIG')
      expect(ERROR_CATEGORIES).toHaveProperty('VALIDATION')
      expect(ERROR_CATEGORIES).toHaveProperty('SERVICE')
      expect(ERROR_CATEGORIES).toHaveProperty('RATE_LIMIT')
      expect(ERROR_CATEGORIES).toHaveProperty('UNKNOWN')
    })

    it('each category should have icon, title, and recoverable properties', () => {
      Object.values(ERROR_CATEGORIES).forEach(category => {
        expect(category).toHaveProperty('icon')
        expect(category).toHaveProperty('title')
        expect(category).toHaveProperty('recoverable')
      })
    })
  })
})