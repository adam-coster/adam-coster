<script lang="ts">
	import Head, { metadata } from '$lib/Head.svelte';
	import { ArticleMetadata } from '$lib/articleSearcher';
	import {
		dateIsLater,
		getUrlHostName,
		humanDate,
		robotDate,
	} from '$lib/utility';
	import {
		faClock,
		faExternalLinkSquareAlt,
	} from '@fortawesome/free-solid-svg-icons';
	import Icon from 'svelte-fa';
	import type { LayoutData } from './$types';

	export let data: LayoutData;
	const frontmatter = new ArticleMetadata(data.frontmatter);

	$metadata = data.meta;

	function updatedAt(frontmatter: ArticleMetadata) {
		if (dateIsLater(frontmatter.editedAt, frontmatter.publishedAt)) {
			return new Date(frontmatter.editedAt!);
		}
	}
</script>

<Head />

<article class="article blog-post">
	<header class="social-preview">
		<h1 class="title">{frontmatter.title}</h1>
		<ul
			role="navigation"
			class="tags reset"
			aria-label="Topic tags found on this article."
		>
			{#each frontmatter.tags as tag, j (j)}
				<li class="tag">
					<a
						href={`/blog?search=tags:${tag}`}
						title={`List all "${tag}" posts`}
						rel="tag"
					>
						#{tag}
					</a>
				</li>
			{/each}
		</ul>
		<div class="metadata">
			<p class="publication-date">
				<span class="date-info">
					<Icon icon={faClock} size="sm" />
					Published
					<time
						class="date"
						datetime={robotDate(frontmatter.publishedAt)}
						aria-label="Publication date"
					>
						{humanDate(frontmatter.publishedAt)}</time
					>
				</span>
				{#if updatedAt(frontmatter)}
					<span class="date-info">
						(Updated
						<time
							class="date"
							datetime={robotDate(frontmatter.editedAt)}
							aria-label="Last updated date"
						>
							{humanDate(frontmatter.editedAt)}</time
						>)
					</span>
				{/if}
			</p>
			{#if !frontmatter.canonicalIsHere}
				<p class="canonical">
					<Icon icon={faExternalLinkSquareAlt} size="sm" />
					Original:
					<a href={frontmatter.canonical}>
						{getUrlHostName(frontmatter.canonical)}
					</a>
				</p>
			{/if}
			{#if frontmatter.crossPosts?.length}
				<div>
					<p class="cross-posts">
						<Icon icon={faExternalLinkSquareAlt} size="sm" />
						Cross-posts:
					</p>
					<ul class="cross-posts-list reset">
						{#each frontmatter.crossPosts as crossPost}
							<li>
								<a href={crossPost}>
									{getUrlHostName(crossPost)}
								</a>
							</li>
						{/each}
					</ul>
				</div>
			{/if}
		</div>
	</header>
	<div class="body">
		<slot />
	</div>
</article>

<style>
	article {
		max-width: var(--content-max-width);
		margin: auto;
	}
	header {
		margin: var(--size) 0;
	}
	.title {
		margin-bottom: calc(var(--size) * 0.5);
		text-align: center;
	}
	.metadata {
		font-size: calc(var(--size) * 0.8);
		text-align: center;
		word-spacing: 0.2em;
		margin-top: 0.75em;
		line-height: 1.5em;
	}
	.publication-date {
		margin: 0;
		display: flex;
		column-gap: 0.5em;
		flex-wrap: wrap;
		justify-content: center;
	}
	.date-info {
		color: var(--color-subtle);
		display: inline-block;
	}
	.date {
		letter-spacing: 0.05em;
		color: var(--color-text);
	}
	.tags {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		column-gap: var(--button-padding-horizontal);
		line-height: 1em;
	}
	.tag {
		font-size: calc(var(--size) * 0.8);
	}
	.canonical a:not(:hover) {
		text-decoration: none;
	}
	.cross-posts,
	.canonical {
		display: inline;
		color: var(--color-subtle);
	}
	.cross-posts-list {
		display: inline-flex;
		flex-wrap: wrap;
		column-gap: var(--button-padding-horizontal);
	}
</style>
