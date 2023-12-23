<script lang="ts">
	import { page } from '$app/stores';
</script>

<svelte:head>
	<title>Preview Generator</title>
	<meta name="robots" content="noindex, nofollow" />
</svelte:head>

<section class="social-preview" data-slug={$page.url.searchParams.get('slug')}>
	<header>
		<h1>{$page.url.searchParams.get('title') || ''}</h1>
		<p>{$page.url.searchParams.get('description') || ''}</p>
	</header>
	<footer>
		<a href="/" class="logo" aria-label="Text 'Adam Coster' as a site logo.">
			<span class="firstname">adam</span><span class="lastname">coster</span
			><span class="domain">.com</span>
		</a>
	</footer>
</section>

<style>
	footer {
		text-align: right;
		margin-top: 20px;
		font-size: 40px;
	}
	section {
		margin: auto;
		width: 1200px;
		height: 630px;
		border: 2px solid #ccc;
		padding: 40px 60px 40px 60px;
		display: flex;
		flex-direction: column;
		/* the two children should be on top of each other, taking up the whole height, but the first row should be sized to content and the 2nd should fill the remaining space. */
		justify-content: space-between;
	}
	header {
		height: 100%;
		/* vertically center */
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	h1 {
		font-size: 64px;
		text-wrap: balance;
		margin: 0;
	}
	p {
		font-size: 50px;
		text-wrap: pretty;
		margin: 0;
		padding-top: 16px;
		line-height: 1.2em;
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
</style>
