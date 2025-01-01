import '@testing-library/jest-dom'
import { vi } from 'vitest'

// Mock global fetch
global.fetch = vi.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve([])
  })
)
