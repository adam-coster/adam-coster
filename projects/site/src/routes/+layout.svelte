<script lang="ts">
	import Nav from '$lib/Nav.svelte';
	import { fade } from 'svelte/transition';
	import type { LayoutData } from './$types';

	export let data: LayoutData;
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

<style lang="scss">
	:global {
		@import '../style/global';
	}
	// [skip link](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#skip_links)
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
		--local-size: calc(2.5 * var(--size));
		display: block;
		margin: auto;
		text-align: center;
		font-size: var(--local-size);

		@media screen and (max-width: 500px) {
			display: flex;
			flex-direction: column;
			span {
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
	}
	main {
		flex-grow: 1;
	}
	footer {
		justify-content: center;
		padding-top: 50px;
		font-size: calc(0.8 * var(--size));
		color: var(--color-subtle);
		.copyright {
			margin-top: calc(0.3 * var(--size));
		}
	}
</style>
