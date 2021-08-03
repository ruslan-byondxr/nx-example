import { cleanup, render } from '@testing-library/react'
import App from './app'
import fetchMock from 'jest-fetch-mock'

describe('App', () => {
  beforeEach(() => {
    // if you have an existing `beforeEach` just add the following line to it
    fetchMock.dontMock()
  })

  it('should render successfully', () => {
    const { baseElement } = render(<App />)

    expect(baseElement).toBeTruthy()
  })

  it('should have a greeting as the title', () => {
    const { getByText } = render(<App />)

    expect(getByText('Custom Header!')).toBeTruthy()
  })
})
