<script lang="ts" context="module">
  import { ArticleMetadata, ArticleSearcher } from '$lib/articleSearcher';
  import type { LoadEvent, LoadOutput } from '@sveltejs/kit';

  export async function load(input: LoadEvent): Promise<LoadOutput> {
    const articleSearcher = new ArticleSearcher(input.fetch);
    const slug = input.url.pathname.replace('/articles/', '');
    const frontmatter = await articleSearcher.get(slug);
    if (!frontmatter) {
      return {
        status: 404,
      };
    }
    const meta = {
      title: frontmatter.title,
      description: frontmatter.description || 'An article by Adam Coster',
      canonical: frontmatter.canonical,
      type: 'article',
      microdata: createArticleMicrodata({
        headline: frontmatter.title,
        datePublished: frontmatter.publishedAt,
        dateModified: frontmatter.editedAt,
        images: frontmatter.images,
      }),
    };

    return {
      props: {
        frontmatter,
        meta,
      },
    };
  }
</script>

<script lang="ts">
  import type { Metadata } from '$lib/Head.svelte';
  import Head, { metadata } from '$lib/Head.svelte';
  import {
    dateIsLater,
    getUrlHostName,
    humanDate,
    robotDate,
  } from '$lib/utility';
  import { createArticleMicrodata } from '$lib/microdata.svelte';
  import {
    faExternalLinkSquareAlt,
    faClock,
  } from '@fortawesome/free-solid-svg-icons';
  import Icon from 'svelte-fa';

  export let frontmatter: ArticleMetadata;
  export let meta: Metadata;

  $metadata = meta;

  function updatedAt(frontmatter: ArticleMetadata) {
    if (dateIsLater(frontmatter.editedAt, frontmatter.publishedAt)) {
      return new Date(frontmatter.editedAt);
    }
  }
</script>

<Head />

{#await frontmatter then metadata}
  <article class="article">
    <header class="social-preview">
      <h1 class="title">{metadata.title}</h1>

      <ul class="tags" aria-label="Topic tags found on this article.">
        {#each metadata.tags as tag, j (j)}
          <li class="tag">
            <a
              href={`/articles?search=tags:${tag}`}
              title={`List all "${tag}" articles`}
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
              datetime={robotDate(metadata.publishedAt)}
              aria-label="Publication date"
            >
              {humanDate(metadata.publishedAt)}</time
            >
          </span>
          {#if updatedAt(metadata)}
            <span class="date-info">
              (Updated
              <time
                class="date"
                datetime={robotDate(metadata.editedAt)}
                aria-label="Last updated date"
              >
                {humanDate(metadata.editedAt)}</time
              >)
            </span>
          {/if}
        </p>
        {#if !metadata.canonicalIsHere}
          <p class="canonical">
            <Icon icon={faExternalLinkSquareAlt} size="sm" />
            Original:
            <a href={metadata.canonical}>
              {getUrlHostName(metadata.canonical)}
            </a>
          </p>
        {/if}
        {#if metadata.crossPosts?.length}
          <div>
            <p class="cross-posts">
              <Icon icon={faExternalLinkSquareAlt} size="sm" />
              Cross-posts:
            </p>
            <ul class="cross-posts-list">
              {#each metadata.crossPosts as crossPost}
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
{/await}

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
