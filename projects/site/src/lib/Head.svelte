<script lang="ts" context="module">
  import { writable } from 'svelte/store';
  import { assert } from './assertions';
  import { mode } from '$app/env';
  import type { Person, WithContext, WebSite, Article } from 'schema-dts';
  import type { OneOrMore, RequiredBy } from '@adam-coster/site-tools';
  import { ensureArray } from './utility';
  import { productionHost } from './constants';

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

  type MicrodataSchema = PersonSchema | WebSiteSchema | ArticleSchema;

  export interface Metadata {
    title: string;
    description: string;
    canonical: string;
    microdata?: OneOrMore<MicrodataSchema>;
    noRobots?: boolean;
    type?: 'website' | 'article';
  }

  interface MetadataNormalized
    extends RequiredBy<Omit<Metadata, 'microdata'>, 'type' | 'canonical'> {
    microdata?: string;
  }

  const protocol = mode == 'development' ? 'http:' : 'https:';
  const host = mode == 'development' ? 'localhost:3000' : productionHost;

  function normalizeTitle(title: string) {
    return title ? `${title} | Adam Coster` : 'Adam Coster';
  }

  /**
   * Create a canonical URL from a given URL with some
   * simple normalization. If the URL is `undefined`,
   * use the current URL from `location`.
   */
  export function normalizeUrl(url = '/') {
    let canonical: URL;
    if (url.match(/^https?:\/\//)) {
      canonical = new URL(url);
    } else {
      canonical = new URL(`${protocol}//${host}${url}`);
    }
    // If external, leave it alone. Otherwise clean it up!
    if (!canonical.host.endsWith(host)) {
      return url;
    }
    // Ensure HTTPS
    canonical.protocol = protocol;
    // Remove trailing slash
    canonical.pathname = canonical.pathname.replace(/\/$/, '');
    // Remove query params
    canonical.search = '';
    return canonical.toString();
  }

  export function previewPathFromUrl(url: string) {
    const urlAsObj = new URL(url);
    const pathname = urlAsObj.pathname === '/' ? '/index' : urlAsObj.pathname;
    return normalizeUrl(`/previews${pathname}.jpg`);
  }

  export function previewAltFromMetadata(meta: {
    canonical: string;
    title: string;
  }) {
    return `Preview image capturing a portion of the page at ${meta.canonical} showing the page's title: "${meta.title}"`;
  }

  function ldJsonify<T extends MicrodataSchema>(schemas: T[]) {
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

  function createMetadata() {
    const { subscribe, set } = writable({
      title: normalizeTitle(''),
      description: '',
      canonical: normalizeUrl(''),
      type: 'website',
      noRobots: false,
      microdata: '' as any, // On set, should force to a string, but the types don't work as expected otherwise,
    } as Metadata);

    return {
      subscribe,
      set(metadata: Metadata) {
        assert(metadata.description, 'Description is required');
        const cleanMeta: MetadataNormalized = {
          title: normalizeTitle(metadata.title),
          description: metadata.description,
          canonical: normalizeUrl(metadata.canonical),
          type: metadata.type || 'website',
          noRobots: metadata.noRobots,
          microdata: ldJsonify(ensureArray(metadata.microdata)),
        };
        set(
          cleanMeta as any, // Only way to make this work properly when using the setter
        );
      },
    };
  }

  /**
   * Import on new pages and set to page-specific values.
   * Values set here are automatically updated in the Head.
   */
  export const metadata = createMetadata();
</script>

<svelte:head>
  <title>{$metadata.title}</title>
  <link rel="canonical" href={$metadata.canonical} />
  <meta name="description" content={$metadata.description} />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="@costerad" />
  <meta name="twitter:creator" content="@costerad" />
  <meta name="twitter:title" content={$metadata.title} />
  <meta name="twitter:description" content={$metadata.description} />
  <meta
    name="twitter:image"
    content={previewPathFromUrl($metadata.canonical)}
  />
  <meta name="twitter:image:alt" content={previewAltFromMetadata($metadata)} />
  <meta property="og:type" content={$metadata.type} />
  <meta property="og:title" content={$metadata.title} />
  <meta property="og:description" content={$metadata.description} />
  <meta property="og:image" content={previewPathFromUrl($metadata.canonical)} />
  <meta property="og:image:alt" content={previewAltFromMetadata($metadata)} />
  <meta property="og:url" content={$metadata.canonical} />
  <meta
    name="robots"
    content={$metadata.noRobots ? 'noindex, nofollow' : 'index, follow'}
  />
  {#if $metadata.microdata}
    {@html $metadata.microdata}
  {/if}
</svelte:head>
