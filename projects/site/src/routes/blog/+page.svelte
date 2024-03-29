<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import Head, { metadata } from '$lib/Head.svelte';
	import { humanDate, patchQueryParams, robotDate } from '$lib/utility';
	import { faPenSquare } from '@fortawesome/free-solid-svg-icons';
	import debounce from 'just-debounce';
	import { onMount } from 'svelte';
	import Icon from 'svelte-fa';
	import { flip } from 'svelte/animate';
	import { expoInOut } from 'svelte/easing';
	import { fade, slide } from 'svelte/transition';

	import type { PageData } from './$types';

	export let data: PageData;

	$metadata = {
		title: "Adam Coster's Blog",
		description: `The writings of Adam Coster, collected from across the Internet and centralized. Topics include web development, game development, business, mental health, science, and more.`,
		type: 'website',
		canonical: '/blog',
	};

	// export let articleSearcher: ArticleSearcher;
	// export let searchResults: Promise<ArticleMetadata[]>;
	let searchText: string | null = null;
	let lastSearchText: string | null;
	let searchHasFocus = false;

	async function updateSearchNow(searchOverride?: string | null) {
		searchText =
			typeof searchOverride == 'string' ? searchOverride : searchText;

		if (lastSearchText === searchText) {
			return;
		}
		lastSearchText = searchText;
		// await searchResults;
		if ($page.url.searchParams.get('search') != searchText) {
			await goto(
				patchQueryParams($page.url, { search: searchText }).toString(),
				{
					keepFocus: true,
					noScroll: true,
				},
			);
		}
		// searchbar.scrollIntoView({ behavior: 'smooth' });
		data.searchResults = await data.articleSearcher.search(lastSearchText);
	}

	const updateSearch = debounce(updateSearchNow, 250);

	onMount(() => {
		// Initial load
		searchText = $page.url.searchParams.get('search');
		updateSearchNow();
	});
</script>

<Head />

<div class="social-preview">
	<h1>
		<Icon icon={faPenSquare} />
		Stuff I've Written
	</h1>

	<p>
		I've collected various articles and blog posts here, with links back to
		where they were originally posted if applicable. The topics are all over the
		place: programming, mental health, business, productivity, and more.
	</p>
</div>

<nav aria-label="Search results for blog posts written by Adam Coster">
	<div class="search-container">
		<label for="searchbar" class="sr-only">Search posts</label>
		<span class="search-input" class:focused={searchHasFocus}>
			<span
				class:focused={searchHasFocus}
				class="search-icon"
				aria-hidden="true">🔍&#xFE0E;</span
			>
			<input
				id="searchbar"
				name="searchbar"
				type="text"
				placeholder="Search posts"
				class:focused={searchHasFocus}
				bind:value={searchText}
				on:focus={() => (searchHasFocus = true)}
				on:blur={() => (searchHasFocus = false)}
				on:keyup={() => {
					updateSearch();
				}}
			/>
			<button
				tabindex="0"
				class="clear-button"
				type="button"
				class:focused={searchHasFocus}
				aria-label="Clear search box"
				on:click={() => {
					updateSearch('');
				}}>❌&#xFE0E;</button
			>
		</span>
	</div>

	{#await data.searchResults}
		<p in:fade>
			Searching {lastSearchText ? `for "${lastSearchText}"` : ''}...
		</p>
	{:then articles}
		<p class="search-summary">
			{#if !lastSearchText}
				Showing all posts...
			{:else}
				Showing {articles.length} results for "{lastSearchText}"
			{/if}
		</p>
		{#if articles.length}
			<ol
				class="article-snippets reset"
				aria-label="Article search results as preview snippets"
			>
				{#each articles as article (article.slug)}
					<li
						in:fade={{ easing: expoInOut, duration: 500 }}
						out:slide={{ easing: expoInOut, duration: 500 }}
						animate:flip={{ easing: expoInOut, duration: 500 }}
					>
						<article class="article-snippet" data-slug={article.slug}>
							<header>
								<h2>
									<a href={`/blog/${article.slug}`} data-sveltekit-preload-data>
										{article.title}
									</a>
								</h2>
								<div class="summary">
									<time
										class="date"
										datetime={robotDate(article.publishedAt)}
										aria-label="Publication date"
									>
										{humanDate(article.publishedAt)}
									</time>
									<ul
										class="tags reset"
										aria-label="Topic tags found on this article."
									>
										{#each article.tags as tag, j (j)}
											<li class="tag">
												<a
													href={`/blog?search=tags:${tag}`}
													title={`List all "${tag}" posts`}
													rel="tag"
													data-sveltekit-noscroll
													on:click|preventDefault={() =>
														updateSearchNow(`tags:${tag}`)}
												>
													#{tag}
												</a>
											</li>
										{/each}
									</ul>
								</div>
							</header>
							{#if article.description}
								<p class="description">
									{article.description}
								</p>
							{/if}
						</article>
					</li>
				{/each}
			</ol>
		{:else}
			<p in:fade>No posts found with search "{lastSearchText}"</p>
		{/if}
	{:catch}
		<p in:fade>Something has gone wrong!</p>

		{JSON.stringify(data.searchResults)}
	{/await}
</nav>

<style>
	.social-preview, nav {
		max-width: var(--content-max-width);
		margin: auto;
	}
	h1 {
		text-align: center;
	}
	.search-summary {
		color: var(--color-subtle);
		font-style: italic;
	}
	nav {
		display: flex;
		flex-direction: column;
		gap: 1em;
		margin-block-start: 1em;
	}
	p {
		margin: 0;
	}
	.article-snippets {
		display: flex;
		flex-direction: column;
		gap: 1.75em;
	}

	.article-snippet {
		height: 100%;
		padding-left: 0.25rem;
	}
	.article-snippet:hover {
		--hover-border-width: 0.25rem;
		border-left: var(--hover-border-width) solid var(--color-subtle);
		margin-left: calc(var(--hover-border-width) * -1);
	}

	.article-snippet h2 {
		--font-size: calc(var(--size) * 1.2);
		background-color: var(--color-background);
		margin: 0;
		padding: 0;
		font-size: var(--font-size);
		text-align: left;
		font-weight: normal;
	}
	.article-snippet h2 a {
		color: var(--color-text);
	}
	.article-snippet .summary {
		line-height: 1.25em;
		margin-top: 0.5em;
	}
	.article-snippet .date {
		color: var(--color-subtle);
		font-size: 0.9em;
		font-style: italic;
		display: inline;
		margin-right: 0.25em;
	}
	.article-snippet .tags {
		display: inline;
	}
	.tag {
		display: inline;
		font-size: calc(var(--size) * 0.8);
		margin-right: 0.25em;
	}
	.article-snippet .description {
		margin: 0;
		margin-top: calc(var(--size) * 0.5);
		color: var(--color-subtle);
	}

	.search-input {
		--search-color-blur: gray;
		--search-color-focus: var(--color-text);
		--search-icon-width: 2em;
		--horizontal-padding: 0.5em;
		--input-horizontal-padding: calc(
			var(--horizontal-padding) * 2 + var(--search-icon-width)
		);
		border: 0.1em solid var(--search-color-blur);
		border-radius: var(--border-radius);
		display: grid;
		grid-template-columns: var(--search-icon-width) 1fr var(--search-icon-width);
		justify-items: center;
	}
	.search-input.focused {
		border-color: var(--color-background);
		outline: 0.1em solid var(--search-color-focus);
	}
	.search-icon {
		color: var(--search-color-blur);
	}
	.search-icon.focused {
		color: var(--search-color-focus);
	}
	.clear-button {
		color: var(--search-color-blur);
		cursor: pointer;
	}
	.clear-button.focused {
		color: var(--search-color-focus);
	}
	input {
		font-size: 100%;
		border-color: var(--search-color-blur);
		color: var(--search-color-blur);
		width: 100%;
	}
	input:focus {
		outline: none;
		border-color: var(--search-color-focus);
		color: var(--search-color-focus);
	}
</style>
