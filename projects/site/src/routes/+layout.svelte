<script lang="ts">
	import { dev } from '$app/environment';
	import { onNavigate } from '$app/navigation';
	import { version } from '$lib/constants.js';
	import Nav from '$lib/Nav.svelte';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import BreadCrumbs from '../lib/BreadCrumbs.svelte';
	import type { LayoutData } from './$types';

	interface Props {
		data: LayoutData;
		children?: import('svelte').Snippet;
	}

	let { data, children }: Props = $props();

	onMount(() => {
		navigator.serviceWorker.register('/service-worker.js', {
			type: dev ? 'module' : 'classic',
		});
	});

	onNavigate((nav) => {
		// Tell the service worker to update the cache
		if (nav.to && navigator.serviceWorker.controller) {
			navigator.serviceWorker.controller.postMessage({
				type: 'addUrlToCache',
				url: nav.to.url.href,
			});
		}
	});
</script>

<!-- Header -->
<header>
	<a href="#main" id="skip-nav">skip to main content</a>
	<div id="main-nav">
		<a href="/" class="logo" aria-label="Text 'Adam Coster' as a site logo.">
			<span class="firstname">adam</span><span class="lastname">coster</span>
		</a>
		<Nav placement="header" />
	</div>
	<BreadCrumbs />
</header>

<!-- Main Slot (changes by URL) -->
{#key data.key}
	<main in:fade={{ duration: 250 }}>
		<a id="main" href="#main" aria-hidden="true"></a>
		{@render children?.()}
	</main>
{/key}

<!-- Footer -->
<footer>
	<Nav placement="footer" justify="center" />
	<p class="copyright" aria-label="Copyright notice">
		<span class="inline-block"
			>&copy; {new Date().getFullYear()} Adam Coster.</span
		>
		<i class="inline-block">All rights reserved.</i>
		<span class="inline-block version">v{version}</span>
	</p>
</footer>

<style>
	/* [skip link](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#skip_links) */
	header {
		position: relative;
	}
	#skip-nav {
		position: absolute;
		left: 0;
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
	header,
	footer {
		width: 100%;
		max-width: var(--content-max-width);
		margin: 0 auto;
		text-align: center;
	}
	a.logo {
		display: block;
		margin: auto;
		text-align: right;
		font-size: 2.5em;
		line-height: 1.5em;
		padding-right: 0.75rem;
		text-decoration: none;
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
		color: var(--color-subtler);
		font-weight: bold;
	}
	.lastname {
		color: var(--color-header);
		font-weight: bold;
	}
	main {
		flex-grow: 1;
	}
	footer {
		padding-top: 50px;
		font-size: calc(0.8 * var(--size));
		color: var(--color-subtle);
	}
	.copyright {
		margin-top: calc(0.3 * var(--size));
		display: flex;
		flex-direction: column;
	}
	.version {
		color: var(--color-header);
		font-family: var(--font-family-code);
	}
</style>
