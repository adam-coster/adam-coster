export interface ArticleFrontMatter {
	slug: string;
	title: string;
	description: string;
	/** URL when hosted on a different platform. Requires a redirect! */
	legacySlug?: string;
	editedAt: string;
	publishedAt: string;
	canonical: string;
	tags: string[];
	crossPosts: string[];
	images?: string[];
	recipe?: any;
}

export interface ArticleIndexEntry
	extends Pick<ArticleFrontMatter, 'slug' | 'title' | 'description' | 'tags'> {
	body: string;
}
