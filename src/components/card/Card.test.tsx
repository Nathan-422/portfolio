import { describe, test } from 'vitest'
import { Card } from './Card'
import { render } from '@testing-library/react'

describe('Card', () => {
  test('should create the card component', () => {
    render(
      <Card>
        <div></div>
      </Card>
    )
  })
})
