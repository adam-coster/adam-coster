<script lang="ts" context="module">
  import {
    ArticleSchema,
    normalizeUrl,
    PersonSchema,
    WebSiteSchema,
  } from '$lib/Head.svelte';
  import { dateToIso } from './utility';
  import { digitalIdentities } from '$lib/Identities.svelte';

  export const me: PersonSchema = {
    '@type': 'Person',
    name: 'Adam Coster',
    givenName: 'Adam',
    familyName: 'Coster',
    honorificSuffix: 'PhD',
    sameAs: digitalIdentities
      .filter((p) => p.type != 'content')
      .map((p) => p.url),
    alumniOf: [
      {
        '@type': 'CollegeOrUniversity',
        name: 'University of Chicago',
        sameAs: 'https://www.uchicago.edu',
      },
      {
        '@type': 'CollegeOrUniversity',
        name: 'University of Texas Southwestern Graduate School of Biomedical Sciences',
        sameAs: 'https://www.utsouthwestern.edu/education/graduate-school',
      },
    ],
    image: normalizeUrl('/images/adam-coster-large.jpg'),
    memberOf: 'Butterscotch Shenanigans',
    worksFor: 'Butterscotch Shenanigans',
    jobTitle: 'CEO',
    url: normalizeUrl('/'),
  };

  /**
   * @see https://developers.google.com/search/docs/advanced/structured-data/article#non-amp
   */
  export function createArticleMicrodata(info: {
    headline: string;
    /**
     * If provided, images must belong to the article,
     * crawlable & indexable, high-rez, preferred to
     * have all of 16x9, 4x3, and 1x1 aspect ratios in
     * any of BMP, GIF, JPEG, PNG, WebP, and SVG
     */
    images?: string[];
    datePublished: string | Date;
    dateModified?: Date | string;
  }): ArticleSchema {
    const datePublished = dateToIso(info.datePublished);
    // Google requires headline length to be no more than 110 characters
    const maxHeadlineLength = 110;
    const headline =
      info.headline.length > maxHeadlineLength
        ? info.headline.slice(0, maxHeadlineLength - 1) + '…'
        : info.headline;
    return {
      '@type': 'Article',
      headline,
      author: me,
      datePublished,
      dateModified: info.dateModified
        ? dateToIso(new Date(info.dateModified))
        : datePublished,
    };
  }

  /**
   * For showing on the landing page, enabling Google
   * to populate a functional searchbox
   * @see https://developers.google.com/search/docs/advanced/structured-data/sitelinks-searchbox
   */
  export const site: WebSiteSchema = {
    '@type': 'WebSite',
    url: normalizeUrl('/'),
    author: me,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: normalizeUrl('/articles?search={search_term_string}'),
      },
      // @ts-ignore (see https://developers.google.com/search/docs/advanced/structured-data/sitelinks-searchbox)
      'query-input': 'required name=search_term_string',
    },
  };
</script>
