import { render, screen } from '@testing-library/react'
import { Counter } from '.'

it('renders', () => {
  render(<Counter />)

  const myElement = screen.getByText(/0/)

  expect(myElement).toBeInTheDocument()
})
