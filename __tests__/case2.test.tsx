import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Card from '@/components/Card'

describe('Card', () => {
  it('Card contains image', () => {
    render(<Card/>)
    const cardImages = screen.queryAllByRole("img")
    expect(cardImages).toHaveLength(1)
  })
})
