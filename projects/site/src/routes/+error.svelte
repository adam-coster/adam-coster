<script lang="ts">
	import { dev } from '$app/environment';
	import { page } from '$app/state';
	import Head from '$lib/Head.svelte';
	import { metadata } from '../lib/metadata.svelte.js';
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
			status: `😕 ${page.status}`,
			title: `That didn't work right`,
			message: `There's something I didn't account for here at all. Whoops!`,
		},
		generalErrors[`${page.status}`] || {},
	);
	console.error(page.error?.message);

	metadata.update({
		title: info.title,
		description: info.message,
		noRobots: true,
	});

	// Are we offline?
</script>

<Head />

<section>
	<h1>
		<span class="error-status">{info.status}</span>
		<span class="error-title">{info.title}</span>
	</h1>
	<p class="error-message">{info.message}</p>
	{#if navigator.onLine === false}
		<p>
			It looks like you're offline. You're probably seeing this error because
			you didn't visit this page when you were online, so it isn't cached on
			your device! Maybe try reconnecting?
		</p>
	{/if}
	{#if dev && page.error}
		<h2>🪲 {page.error.message}</h2>
	{/if}
</section>

<style>
	.error-status {
		color: var(--color-bad);
		font-weight: 400;
	}
	section {
		max-width: var(--content-max-width);
		margin: auto;
	}
</style>
