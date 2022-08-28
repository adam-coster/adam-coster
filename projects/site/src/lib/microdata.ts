import type { Article, Person, WebSite, WithContext } from 'schema-dts';
import { assert } from './utility.js';

// ClaimReview and FAQPage are both supported by Google
// - ClaimReview: Fact-Check (indicate truthiness of something)
// - FAQPage: Any kind of QA format, yielding rich results
// - QAPage: If answers can be submitted and ranked/selected as "best"
// - HowTo: Anything with step-by-step instructions
// - Speakable: Specify parts of the page that can be read with TTL, e.g. via Google Assistant (requires review), only a few sentences worth (headline & summary, basically)
// See https://developers.google.com/search/docs/advanced/structured-data/search-gallery for all

type FullSchema<
	SchemaUnion,
	Type extends string = string,
> = SchemaUnion extends { '@type': Type } ? SchemaUnion : never;

// Google doesn't officially support this one...
// But it can be used *within* other ones in author and
// related fields.
export type PersonSchema = FullSchema<Person, 'Person'>;

export type WebSiteSchema = FullSchema<WebSite, 'WebSite'>;

export type ArticleSchema = FullSchema<Article, 'Article'>;

export type MicrodataSchema = PersonSchema | WebSiteSchema | ArticleSchema;

export function ldJsonify<T extends MicrodataSchema>(schemas: T[]) {
	const schemaClones: WithContext<T>[] = schemas.map((schema) => {
		assert(schema['@type'], '@type is required');
		return {
			'@context': 'https://schema.org',
			...schema,
		};
	});
	const asString = `<script type="application/ld+json">${
		JSON.stringify(schemaClones) + '<'
	}/script>`;
	return asString;
}
