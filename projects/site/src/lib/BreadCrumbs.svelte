<script lang="ts">
	// Whenever the URL changes, break the current path into segments
	import { page } from '$app/state';

	let segments: string[] = $derived.by(() => {
		const parts = page.url.pathname.split('/').filter(Boolean);
		return ['', ...parts];
	});

	$inspect(segments, 'Breadcrumbs segments');
</script>

<nav class="breadcrumbs">
	{#if segments.length > 1}
		<ul>
			{#each segments as segment, i (i)}<li>
					<a href={segments.slice(0, i + 1).join('/') || '/'}
						>{i === 0 ? 'home' : segment}</a
					>{#if i < segments.length - 1}&nbsp;<span class="separator">/</span
						>{/if}
				</li>{/each}
		</ul>
	{/if}
</nav>

<style>
	.breadcrumbs ul {
		display: flex;
		flex-wrap: wrap;
		list-style: none;
		padding: 0;
		margin: 0;
		gap: 0.5em;
	}
	li {
		margin: 0;
		padding: 0;
		font-family: var(--font-family-code);
	}
	.separator {
		color: var(--color-subtle);
	}
	a {
		color: var(--color-subtle);
		text-decoration: none;
	}
	a:hover {
		color: var(--color-link);
		text-decoration: underline;
	}
</style>
