import { describe, expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import About from './About'

describe('About', () => {
  test('Renders the component', () => {
    render(<About />)
  })
  test('Has the opening text', () => {
    render(<About />)

    expect(screen.getByText("Hello, I'm Nathan")).toBeInTheDocument()
  })
})
