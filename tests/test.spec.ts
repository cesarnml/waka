import { expect, test } from '@playwright/test'

test('index page has expected h1', async ({ page }) => {
  await page.goto('/')

  await expect(page.getByRole('heading', { name: /cracking/i })).toBeVisible()

  const button = page.getByRole('button', { name: /click me/i })
  await expect(button).toBeVisible()

  await button.click()

  const buttonTwo = page.getByRole('button', { name: /changed/i })
  await expect(buttonTwo).toBeVisible()

  const input = page.getByRole('textbox', { name: /name/i })
  await input.type('Cesar', { delay: 100 })

  await expect(input).toHaveValue('Cesar')
})
