import { test, expect } from '@playwright/test';

test.describe('Homepage', () => {
  test('should display the homepage correctly', async ({ page }) => {
    await page.goto('/');

    await expect(page).toHaveTitle(/CrystalOS/);

    await expect(page.locator('text=CrystalOS Template')).toBeVisible();
    await expect(page.locator('text=Production-ready starter template')).toBeVisible();
  });

  test('should have working navigation', async ({ page }) => {
    await page.goto('/');

    const componentsLink = page.locator('a', { hasText: 'Components' });
    await expect(componentsLink).toBeVisible();

    await componentsLink.click();
    await expect(page).toHaveURL(/.*components/);
  });
});

test.describe('Components Page', () => {
  test('should display all component examples', async ({ page }) => {
    await page.goto('/components');

    await expect(page.locator('h1', { hasText: 'Components' })).toBeVisible();

    await expect(page.locator('text=Button')).toBeVisible();
    await expect(page.locator('text=Card')).toBeVisible();
    await expect(page.locator('text=Input')).toBeVisible();
  });
});
