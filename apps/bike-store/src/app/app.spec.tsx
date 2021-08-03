import { act, cleanup, render } from '@testing-library/react'
import App from './app'
import fetchMock from 'jest-fetch-mock'

describe('App', () => {
  beforeEach(() => {
    fetchMock.dontMock()
  })

  it('should render successfully', () => {
    const { baseElement } = render(<App />)
    act(() => {
      expect(baseElement).toBeTruthy()
    })
  })

  it('should render sidebar', () => {
    const { getByText } = render(<App />)
    act(() => {
      expect(getByText('Welcome to Sidebar!2')).toBeDefined()
    })
  })

  it('should have a greeting as the title', () => {
    const { getByText } = render(<App />)
    act(() => {
      expect(getByText('Custom Header!')).toBeTruthy()
    })
  })
})
