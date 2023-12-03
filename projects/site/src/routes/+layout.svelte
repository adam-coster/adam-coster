<script lang="ts">
	import { browser } from '$app/environment';
	import { page } from '$app/stores';
	import Nav from '$lib/Nav.svelte';
	import { getLocal, randomString, setLocal } from '$lib/utility.js';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import type { LayoutData } from './$types';

	export let data: LayoutData;

	/**
	 * Log a visit to the current page, respecting user privacy by not storing
	 * anything identifying.
	 */
	function logVisit() {
		if (browser && navigator?.sendBeacon) {
			const browserId = getLocal('browserId', randomString(6));
			setLocal('browserId', browserId);
			navigator?.sendBeacon(
				'/api/visits',
				JSON.stringify({
					path: $page.url.pathname,
					browserId,
					referrer: document.referrer,
				}),
			);
		}
	}

	onMount(() => {
		// Log the initial visit
		logVisit();
	});

	// $: page.subscribe(() => {
	// 	logVisit();
	// });
</script>

<!-- Header -->
<header>
	<a href="#main" id="skip-nav">skip to main content</a>
	<a href="/" class="logo" aria-label="Text 'Adam Coster' as a site logo.">
		<span class="firstname">adam</span><span class="lastname">coster</span><span
			class="domain">.com</span
		>
	</a>
	<Nav placement="header" />
</header>

<!-- Main Slot (changes by URL) -->
{#key data.key}
	<main id="main" in:fade={{ duration: 250 }}>
		<slot />
	</main>
{/key}

<!-- Footer -->
<footer>
	<Nav placement="footer" />
	<p class="copyright center" aria-label="Copyright notice">
		<span class="inline-block"
			>&copy; {new Date().getFullYear()} Adam Coster.</span
		>
		<span class="inline-block">All rights reserved.</span>
	</p>
</footer>

<style>
	/* [skip link](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#skip_links) */
	#skip-nav {
		position: absolute;
		padding-inline: 0.5em;
		transform: translateY(-300%);
		transition: transform 0.2s;
		background-color: var(--color-background);
		z-index: 1;
		border: none;
	}
	#skip-nav:focus {
		transform: translateY(-75%);
	}
	a.logo {
		display: block;
		margin: auto;
		text-align: center;
		font-size: 2.5em;
		line-height: 1.5em;
	}
	@media screen and (max-width: 500px) {
		a.logo {
			display: flex;
			flex-direction: column;
			margin-block-end: 0.75em;
		}
		a.logo span {
			margin-top: calc(var(--size) * -0.5);
			margin-bottom: calc(var(--size) * -1);
		}
	}
	.firstname {
		color: var(--color-link);
		font-weight: bold;
	}
	.lastname {
		color: var(--color-link-hover);
		font-weight: bold;
	}
	.domain {
		color: var(--color-subtle);
	}
	main {
		flex-grow: 1;
	}
	footer {
		justify-content: center;
		padding-top: 50px;
		font-size: calc(0.8 * var(--size));
		color: var(--color-subtle);
	}
	.copyright {
		text-align: center;
		margin-top: calc(0.3 * var(--size));
	}
</style>
