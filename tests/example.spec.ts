import { test, expect } from '@playwright/test';

test.describe('Homepage', () => {
  test('should display the homepage correctly', async ({ page }) => {
    await page.goto('/');

    await expect(page).toHaveTitle(/CrystalOS/);

    await expect(page.locator('h1', { hasText: 'CrystalOS Template' })).toBeVisible();
    await expect(page.locator('p', { hasText: 'Production-ready starter template' })).toBeVisible();
  });

  test('should have working navigation', async ({ page }) => {
    await page.goto('/');

    const componentsLink = page.getByRole('link', { name: 'Components', exact: true });
    await expect(componentsLink).toBeVisible();

    await componentsLink.click();
    await expect(page).toHaveURL(/.*components/);
  });
});

test.describe('Components Page', () => {
  test('should display all component examples', async ({ page }) => {
    await page.goto('/components');

    await expect(page.locator('h1', { hasText: 'Components' })).toBeVisible();

    await expect(page.getByRole('tab', { name: 'Buttons' })).toBeVisible();
    await expect(page.getByRole('tab', { name: 'Cards' })).toBeVisible();
    await expect(page.getByRole('tab', { name: 'Forms' })).toBeVisible();
    await expect(page.getByRole('tab', { name: 'Overlays' })).toBeVisible();
  });
});
