<script context="module" lang="ts">
  import type { LoadInput, LoadOutput } from '@sveltejs/kit';
  import { ArticleSearcher } from '$lib/articleSearcher';

  /**
   * Match Wordpress URLs from the old blog, re-routing to any
   * articles that were migrated.
   *
   * Early exit if this doesn't look like a legacy URL
   * (Exiting without returning a value should allow the
   * router to keep looking for other matches.)
   *
   * @see https://kit.svelte.dev/docs#routing-advanced-fallthrough-routes
   */
  export async function load(input: LoadInput): Promise<LoadOutput> {
    const articleSearcher = new ArticleSearcher(input.fetch);
    const { legacySlug, year, month, day } = input.params;
    const isLegacyUrl =
      /^\d{4}$/.test(year) &&
      /^\d{2}$/.test(month) &&
      /^\d{2}$/.test(day) &&
      legacySlug;
    if (!isLegacyUrl) {
      return;
    }

    const matchingArticle = await articleSearcher.find(
      (a) => a.legacySlug === legacySlug,
    );
    if (!matchingArticle) {
      return {
        status: 404,
      };
    } else {
      return {
        status: 301,
        redirect: matchingArticle.url,
      };
    }
  }
</script>
