import { ok } from 'assert';
import { test } from './helpers.js';

test.describe('FAQs', () => {
	test('FAQ content shows up as LD+JSON', async ({ page }) => {
		await page.goto('/blog/corepack-ensures-consistent-pnpm-version');
		const ldJsonString = await page
			.locator('script[type="application/ld+json"]')
			.textContent();
		ok(ldJsonString, 'LD+JSON is not present');
		const ldJson = JSON.parse(ldJsonString);
		const [article, faqPage] = ldJson;
		ok(
			article['@type'] === 'Article',
			'LD+JSON does not include the article first',
		);
		ok(
			faqPage['@type'] === 'FAQPage',
			'LD+JSON does not include the FAQPage second',
		);
		ok(faqPage.mainEntity.length > 0, 'LD+JSON does not include any questions');
		ok(
			faqPage.mainEntity.every(
				(q: any) =>
					q['@type'] === 'Question' &&
					q.name.length &&
					q.acceptedAnswer?.['@type'] === 'Answer' &&
					q.acceptedAnswer?.text?.length,
			),
			'At least one question is malformed',
		);
	});
});
