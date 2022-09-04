<script lang="ts">
	import type { ArticleMetadata } from '$lib/articleSearcher';
	import Head, { metadata } from '$lib/Head.svelte';
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
	import { onMount, type ComponentType } from 'svelte';
	import Icon from 'svelte-fa';
	import type { PageData } from './$types';

	export let data: PageData;

	$metadata = data.meta;

	function updatedAt(frontmatter: ArticleMetadata) {
		if (dateIsLater(frontmatter.editedAt, frontmatter.publishedAt)) {
			return new Date(frontmatter.editedAt);
		}
	}

	let PostComponent: ComponentType;

	onMount(async () => {
		PostComponent = (await import(`../../../articles/${data.slug}.md`)).default;
	});
</script>

<Head />

<article class="article blog-post">
	<header class="social-preview">
		<h1 class="title">{data.frontmatter.title}</h1>

		<ul class="tags" aria-label="Topic tags found on this article.">
			{#each data.frontmatter.tags as tag, j (j)}
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
						datetime={robotDate(data.frontmatter.publishedAt)}
						aria-label="Publication date"
					>
						{humanDate(data.frontmatter.publishedAt)}</time
					>
				</span>
				{#if updatedAt(data.frontmatter)}
					<span class="date-info">
						(Updated
						<time
							class="date"
							datetime={robotDate(data.frontmatter.editedAt)}
							aria-label="Last updated date"
						>
							{humanDate(data.frontmatter.editedAt)}</time
						>)
					</span>
				{/if}
			</p>
			{#if !data.frontmatter.canonicalIsHere}
				<p class="canonical">
					<Icon icon={faExternalLinkSquareAlt} size="sm" />
					Original:
					<a href={data.frontmatter.canonical}>
						{getUrlHostName(data.frontmatter.canonical)}
					</a>
				</p>
			{/if}
			{#if data.frontmatter.crossPosts?.length}
				<div>
					<p class="cross-posts">
						<Icon icon={faExternalLinkSquareAlt} size="sm" />
						Cross-posts:
					</p>
					<ul class="cross-posts-list">
						{#each data.frontmatter.crossPosts as crossPost}
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
		<svelte:component this={PostComponent} />
	</div>
</article>

<style lang="scss">
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

		.publication-date {
			margin: 0;
			display: flex;
			column-gap: 0.5em;
			flex-wrap: wrap;
			justify-content: center;
		}
	}
	.date-info {
		color: var(--color-subtle);
		// margin: 0;
		display: inline-block;
	}
	.date {
		// font-weight: var(--font-weight-boldest);
		letter-spacing: 0.05em;
		color: var(--color-text);
		// margin-left: calc(var(--size) * 0.5);
	}
	.tags {
		// text-align: center;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		column-gap: var(--button-padding-horizontal);
		.tag {
			display: inline-block;
			font-size: calc(var(--size) * 0.8);
		}
	}
	.canonical a {
		// margin-left: var(--button-padding-horizontal);
		&:not(:hover) {
			text-decoration: none;
		}
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
