import { expect, type Page } from '@playwright/test';
import { test as testBase } from './helpers.js';

class BlogSearchPage {
	constructor(readonly page: Page) {
		this.page = page;
	}

	get locators() {
		return {
			searchBar: this.page.getByPlaceholder('Search posts'),
			summary: this.page.locator('.search-summary'),
			snippets: this.page.locator('ol.article-snippets article'),
		};
	}

	async submitSearch(search: string) {
		await this.locators.searchBar.fill(search);
		await this.locators.searchBar.press('Enter');
	}

	async snippets() {
		const snippets = await this.locators.snippets.evaluateAll((snippets) => {
			return snippets.map((snippet) => snippet.dataset.slug);
		});
		return snippets;
	}

	async visit() {
		await this.page.goto('/blog');
	}
}

const test = testBase.extend<{ searchPage: BlogSearchPage }>({
	searchPage: async ({ page }, use) => {
		const model = new BlogSearchPage(page);
		await model.visit();
		await use(model);
	},
});

test.describe('Blog search', () => {
	test('can submit searches', async ({ searchPage }) => {
		await expect(searchPage.locators.summary).toHaveText(
			'Showing all posts...',
		);
		const allSnippets = await searchPage.snippets();
		expect(allSnippets.length).toBeGreaterThan(10);

		// Submit a search
		const searchTerm = 'corepack';
		await searchPage.submitSearch(searchTerm);
		await expect(searchPage.locators.snippets).toHaveCount(1);
		await expect(searchPage.locators.summary).toHaveText(
			`Showing 1 results for "${searchTerm}"`,
		);
		const snippets = await searchPage.snippets();
		expect(snippets[0]).toEqual('corepack-ensures-consistent-pnpm-version');
	});
});
