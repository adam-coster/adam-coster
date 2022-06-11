<script lang="ts" context="module">
  import { ArticleMetadata, ArticleSearcher } from '$lib/articleSearcher';
  import type { LoadEvent, LoadOutput } from '@sveltejs/kit';

  export async function load(input: LoadEvent): Promise<LoadOutput> {
    const articleSearcher = new ArticleSearcher(input.fetch);
    const searchResults = await articleSearcher.search(undefined);
    return {
      props: {
        articleSearcher,
        searchResults,
      },
    };
  }
</script>

<script lang="ts">
  import { faPenSquare } from '@fortawesome/free-solid-svg-icons';
  import debounce from 'just-debounce';
  import Icon from 'svelte-fa';
  import { fade } from 'svelte/transition';
  import { getPatchedUrl, humanDate, robotDate } from '$lib/utility';
  import { page } from '$app/stores';
  import { goto } from '$app/navigation';
  import Head, { metadata } from '$lib/Head.svelte';
  import { onMount } from 'svelte';

  $metadata = {
    title: 'Writing Central',
    description: `The writings of Adam Coster, collected from across the Internet and centralized. Topics include web development, game development, business, mental health, science, and more.`,
    type: 'website',
    canonical: '/articles',
  };

  export let articleSearcher: ArticleSearcher;
  export let searchResults: Promise<ArticleMetadata[]>;
  let searchText: string | undefined;
  let lastSearchText: string | undefined;
  let searchHasFocus = false;
  let searchbar: HTMLInputElement;

  async function updateSearchNow(searchOverride?: string) {
    searchText =
      typeof searchOverride == 'string' ? searchOverride : searchText;
    searchbar.scrollIntoView({ behavior: 'smooth' });

    if (lastSearchText === searchText) {
      return;
    }
    lastSearchText = searchText;
    // await searchResults;
    if ($page.url.searchParams.get('search') != searchText) {
      await goto(getPatchedUrl($page.url, { search: searchText }).toString(), {
        keepfocus: true,
        noscroll: true,
      });
    }
    searchbar.scrollIntoView({ behavior: 'smooth' });
    searchResults = articleSearcher.search(lastSearchText);
  }

  const updateSearch = debounce(updateSearchNow, 500);

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
    Writing Central
  </h1>

  <p>
    I've centralized my various writings here, with links back to where they
    were originally posted when applicable. The topics are all over the place:
    programming, mental health, business, productivity, and more. Filter by tags
    of interest or search for something specific.
  </p>
</div>

<nav aria-label="Search results for articles written by Adam Coster">
  <p class="search-container">
    <label for="searchbar" class="sr-only">Search articles</label>
    <span class:focused={searchHasFocus} class="search-icon" aria-hidden="true"
      >🔍&#xFE0E;</span
    >
    <input
      bind:this={searchbar}
      id="searchbar"
      type="text"
      placeholder="Search articles"
      class:focused={searchHasFocus}
      bind:value={searchText}
      on:focus={() => (searchHasFocus = true)}
      on:blur={() => (searchHasFocus = false)}
      on:keyup={() => updateSearch()}
    />
    {#if searchText}
      <button
        class="clear-button"
        class:focused={searchHasFocus}
        aria-label="Clear search box"
        on:click={() => {
          searchText = '';
          updateSearch();
        }}>❌&#xFE0E;</button
      >
    {/if}
  </p>

  {#await searchResults}
    <p in:fade>
      Searching {lastSearchText ? `for "${lastSearchText}"` : ''}...
    </p>
  {:then articles}
    {#if articles.length}
      <ol
        class="article-snippets"
        in:fade
        aria-label="Article search results as preview snippets"
      >
        {#each articles as article, i (i)}
          <li>
            <article class="article-snippet">
              <header>
                <h2>
                  <a href={`/articles/${article.slug}`} sveltekit:prefetch>
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
                    class="tags"
                    aria-label="Topic tags found on this article."
                  >
                    {#each article.tags as tag, j (j)}
                      <li class="tag">
                        <a
                          href={`/articles?search=tags:${tag}`}
                          title={`List all "${tag}" articles`}
                          rel="tag"
                          sveltekit:noscroll
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
      <p in:fade>No articles found with search "{lastSearchText}"</p>
    {/if}
  {:catch}
    <p in:fade>Something has gone wrong!</p>

    {JSON.stringify(searchResults)}
  {/await}
</nav>

<style lang="scss">
  .article-snippets {
    .article-snippet {
      border-bottom: 1px solid gray;
      // border-radius: var(--border-radius);
      padding: calc(var(--size) * 1) 0;
      height: 100%;
      h2 {
        --font-size: calc(var(--size) * 1.2);
        background-color: var(--color-background);
        margin: 0;
        padding: 0;
        font-size: var(--font-size);
        text-align: left;
        font-weight: normal;
        a {
          color: var(--color-text);
        }
      }
      .date,
      .tags {
        display: inline-block;
        margin-right: var(--button-padding-horizontal);
      }
      .date {
        color: var(--color-subtle);
      }
      .tags {
        .tag {
          display: inline-block;
          margin-right: var(--button-padding-horizontal);
          font-size: calc(var(--size) * 0.8);
        }
      }
      .description {
        margin: 0;
        margin-left: calc(var(--size) * 1);
        margin-top: calc(var(--size) * 0.5);
        color: var(--color-subtle);
      }
      .summary {
        margin-left: calc(var(--size) * 1);
      }
    }
  }

  .search-container {
    --search-color-blur: gray;
    --search-color-focus: var(--color-text);
    --search-icon-width: 20px;
    --horizontal-padding: 10px;
    --input-horizontal-padding: calc(
      var(--horizontal-padding) * 2 + var(--search-icon-width)
    );
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    .search-icon {
      position: absolute;
      top: var(--vertical-padding);
      left: var(--horizontal-padding);
      width: var(--search-icon-width);
      color: var(--search-color-blur);
      &.focused {
        color: var(--search-color-focus);
      }
    }
    .clear-button {
      position: absolute;
      top: var(--vertical-padding);
      right: var(--horizontal-padding);
      width: var(--search-icon-width);
      color: var(--search-color-blur);
      &.focused {
        color: var(--search-color-focus);
      }
    }
    input {
      font-size: 100%;
      padding-left: var(--input-horizontal-padding);
      padding-right: var(--input-horizontal-padding);
      border-color: var(--search-color-blur);
      color: var(--search-color-blur);
      &:focus {
        outline: none;
        border-color: var(--search-color-focus);
        color: var(--search-color-focus);
      }
    }
  }
</style>
