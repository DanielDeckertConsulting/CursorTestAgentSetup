import { test, expect } from '@playwright/test';

test.describe('E2E suite', () => {
  test('@e2e placeholder – replace with real E2E flow', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/.+/);
  });
});
