import type { ArticleFrontMatter } from '@adam-coster/site-tools';
import type { LoadEvent } from '@sveltejs/kit';
import lunr from 'lunr';
import { asDateIfExists } from './utility';

type Fetch = LoadEvent['fetch'];

export class ArticleMetadata {
	constructor(readonly frontMatter: ArticleFrontMatter) {}
	get slug() {
		return this.frontMatter.slug;
	}
	get url() {
		return `/blog/${this.slug}`;
	}
	get canonical() {
		return this.frontMatter.canonical || this.url;
	}
	get canonicalIsHere() {
		return !this.frontMatter.canonical;
	}
	get publishedAt() {
		return asDateIfExists(this.frontMatter.publishedAt);
	}
	get editedAt() {
		return asDateIfExists(this.frontMatter.editedAt);
	}
	get legacySlug() {
		return this.frontMatter.legacySlug;
	}
	get title() {
		return this.frontMatter.title;
	}
	get description() {
		return this.frontMatter.description;
	}
	get tags() {
		return [...(this.frontMatter.tags || [])];
	}
	get images() {
		return [...(this.frontMatter.images || [])];
	}
	get crossPosts() {
		return [...(this.frontMatter.crossPosts || [])];
	}
}

export class ArticleSearcher {
	private _all?: Promise<ArticleMetadata[]>;
	private _lookup?: Promise<{ [key: string]: ArticleMetadata }>;
	private _index?: Promise<lunr.Index>;

	constructor(private fetch: Fetch) {}

	private get all() {
		if (!this._all) {
			this._all = this.loadArticleList();
		}
		return this._all;
	}

	private get lookup() {
		if (!this._lookup) {
			this._lookup = this.all.then((articles) => {
				const lookup: Record<string, ArticleMetadata> = {};
				articles.forEach((article) => {
					lookup[article.slug] = article;
				});
				return lookup;
			});
		}
		return this._lookup;
	}

	private get index() {
		if (!this._index) {
			this._index = this.loadArticleSearchIndex();
		}
		return this._index;
	}

	async get(slug: string) {
		return await this.lookup.then((lookup) => lookup[slug]);
	}

	/**
	 * Find an article's front matter, given a
	 * function that returns something truthy when
	 * that article is a match.
	 */
	async find(findFunc: (article: ArticleMetadata) => boolean) {
		const articles = await this.all;
		return articles.find(findFunc);
	}

	/**
	 * Use the search engine to find articles, using a search
	 * string. The search engine is Lunr.
	 */
	async search(searchString: string | undefined | null) {
		if (!searchString) {
			return this.all.then((articles) => [...articles]);
		}
		const results = await this.index.then((index) =>
			index.search(searchString),
		);
		const lookup = await this.lookup;
		return results
			.map((result) => {
				const articleMeta = lookup[result.ref as keyof typeof lookup];
				if (!articleMeta) {
					console.error(`Article ${result.ref} does not exist!`);
				}
				return articleMeta;
			})
			.filter((x) => x);
	}

	async loadArticleList(): Promise<ArticleMetadata[]> {
		try {
			const indexRes = await this.fetch('/blog-metadata.json');

			// TODO: Wrap these in a class instance that can e.g. generate URLs

			const hydrated = ((await indexRes.json()) as ArticleFrontMatter[])
				.filter((article) => article.publishedAt)
				.map((a) => new ArticleMetadata(a));
			hydrated.sort(
				(a, b) => b.publishedAt.getTime() - a.publishedAt.getTime(),
			);
			return hydrated;
		} catch (e) {
			console.log(e);
			return [];
		}
	}

	async loadArticleSearchIndex() {
		const searchIndex = await this.fetch('/blog-search.json');
		const index = lunr.Index.load(await searchIndex.json());
		return index;
	}
}
