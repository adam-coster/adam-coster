import { test as testBase } from '@playwright/test';

export const test = testBase.extend({
	page: async ({ page }, use) => {
		await page.goto('/');
		await use(page);
	},
});
