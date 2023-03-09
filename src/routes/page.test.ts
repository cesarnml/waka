import { render, screen } from '@testing-library/svelte'
import Page from './+page.svelte'

test('it render the root page', () => {
  render(Page)
  const heading = screen.getByRole('heading', { name: /cracking/i, level: 1 })
  expect(heading).toBeInTheDocument()
})
