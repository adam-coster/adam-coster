<script lang="ts" context="module">
	import { asCanonicalUrl, createMetadata } from './metadata.js';
	import { ldJsonify } from './microdata.js';
	import { ensureArray } from './utility';

	export function previewPathFromUrl(url: string) {
		const urlAsObj = new URL(url);
		const pathname = urlAsObj.pathname === '/' ? '/index' : urlAsObj.pathname;
		return asCanonicalUrl(`/previews${pathname}.jpg`);
	}

	export function previewAltFromMetadata(meta: {
		canonical: string;
		title: string;
	}) {
		return `Preview image capturing a portion of the page at ${meta.canonical} showing the page's title: "${meta.title}"`;
	}

	/**
	 * Import on new pages and set to page-specific values.
	 * Values set here are automatically updated in the Head.
	 */
	export const metadata = createMetadata();
</script>

<svelte:head>
	<title>{$metadata.title}</title>
	<meta name="description" content={$metadata.description} />
	<meta
		name="robots"
		content={$metadata.noRobots ? 'noindex, nofollow' : 'index, follow'}
	/>
	{#if !$metadata.noRobots}
		<link rel="canonical" href={$metadata.canonical} />
		<meta
			name="twitter:image"
			content={previewPathFromUrl($metadata.canonical)}
		/>
		<meta name="twitter:card" content="summary_large_image" />
		<meta name="twitter:site" content="@costerad" />
		<meta name="twitter:creator" content="@costerad" />
		<meta name="twitter:title" content={$metadata.title} />
		<meta name="twitter:description" content={$metadata.description} />
		<meta
			name="twitter:image:alt"
			content={previewAltFromMetadata($metadata)}
		/>
		<meta property="og:type" content={$metadata.type} />
		<meta property="og:title" content={$metadata.title} />
		<meta property="og:description" content={$metadata.description} />
		<meta
			property="og:image"
			content={previewPathFromUrl($metadata.canonical)}
		/>
		<meta property="og:image:alt" content={previewAltFromMetadata($metadata)} />
		<meta property="og:url" content={$metadata.canonical} />
		{#if $metadata.microdata}
			{@html ldJsonify(ensureArray($metadata.microdata))}
		{/if}
	{/if}
</svelte:head>
