import { test, expect } from '@playwright/test';

test.describe('Smoke suite', () => {
  test('@smoke placeholder – replace with real CP smoke test', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/.+/);
  });
});
