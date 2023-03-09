import { render, screen } from '@testing-library/svelte'
import Layout from './+layout.svelte'

test('it render the root layout', () => {
  render(Layout)
  const nav = screen.getByRole('navigation', { name: /main/i })
  expect(nav).toBeInTheDocument()
})
