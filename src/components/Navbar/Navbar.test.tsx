import { describe, expect, test } from 'vitest'
import { screen, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import App from '../../App'

describe('Navbar', () => {
  test('Should create component', () => {
    render(<App />)

    expect(screen.getByText('About')).toBeInTheDocument()
  })
})
