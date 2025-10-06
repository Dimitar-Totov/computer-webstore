import { test, expect } from '@playwright/test';

test('home page loads successfully', async ({ page }) => {
    await page.goto('https://computer-webstore.onrender.com/');
    await expect(page).toHaveTitle('Home Page');
});

test('navigation bar is visible', async ({ page }) => {
    await page.goto('https://computer-webstore.onrender.com/');
    const nav = page.locator('nav');
    await expect(nav).toBeVisible();
});

test('element with className product-container is visible', async ({ page }) => {
    await page.goto('https://computer-webstore.onrender.com/');
    await expect(page.locator('[class*="product-container"]')).toBeVisible();
});

test('element with className products-section is visible', async ({ page }) => {
    await page.goto('https://computer-webstore.onrender.com/');
    await expect(page.locator('[class*="products-section"]')).toBeVisible();
});

test('element with className today-best-deals is visible', async ({ page }) => {
    await page.goto('https://computer-webstore.onrender.com/');
    await expect(page.locator('[class*="today-best-deals"]')).toBeVisible();
});

test('element with className best-sellers is visible', async ({ page }) => {
    await page.goto('https://computer-webstore.onrender.com/');
    await expect(page.locator('[class*="best-sellers-cards"]')).toBeVisible();
});

test('footer is visible', async ({ page }) => {
    await page.goto('https://computer-webstore.onrender.com/');
    const nav = page.locator('footer');
    await expect(nav).toBeVisible();
});

