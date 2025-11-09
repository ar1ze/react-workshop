import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

import { App } from './index'

vi.mock('./router', () => ({
  AppRouter: () => <div data-testid="app-router">Mocked Router</div>,
}))

describe('App', () => {
  it('should render the AppRouter component', () => {
    render(<App />)

    const router = screen.getByTestId('app-router')
    expect(router).toBeInTheDocument()
    expect(router).toHaveTextContent('Mocked Router')
  })
})
