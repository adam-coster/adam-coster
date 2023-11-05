<script lang="ts">
	import { dev } from '$app/environment';
	import { page } from '$app/stores';
	import Head, { metadata } from '$lib/Head.svelte';
	interface ErrorInfo {
		status: string;
		title: string;
		message: string;
	}
	const generalErrors: Record<string, ErrorInfo> = {
		'404': {
			status: '👀 404',
			title: 'Page not found!',
			message: `The URL you followed has let you astray: there's nothing here! Either someone created an invalid link, or I did something dumb.`,
		},
		'500': {
			status: '🔥 500',
			title: 'Whoa, something has gone very wrong!',
			message: `Uhhh. This is bad. The server completely choked on something. I guess try again later?`,
		},
	};

	const info = Object.assign(
		{
			status: `😕 ${$page.status}`,
			title: `That didn't work right`,
			message: `There's something I didn't account for here at all. Whoops!`,
		},
		generalErrors[`${$page.status}`] || {},
	);
	console.error($page.error?.message);

	$metadata = {
		title: info.title,
		description: info.message,
		noRobots: true,
	};
</script>

<Head />

<h1>
	<span class="error-status">{info.status}</span>
	<span class="error-title">{info.title}</span>
</h1>
<p class="error-message">{info.message}</p>
{#if dev && $page.error}
	<h2>🪲 {$page.error.message}</h2>
{/if}

<style>
	.error-status {
		color: var(--color-bad);
		font-weight: 400;
	}
</style>
