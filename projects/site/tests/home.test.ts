import { expect } from '@playwright/test';
import { test } from './helpers.js';

test.describe('Home Page', () => {
	test('Can tab to nav-skipper', async ({ page }) => {
		const skipLocator = page.getByRole('link', {
			name: 'skip to main content',
			exact: true,
		});
		await page.keyboard.press('Tab');
		await expect(skipLocator).toBeVisible();
	});
});
