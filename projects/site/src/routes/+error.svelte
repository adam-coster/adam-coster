<script type="ts">
	import { page } from '$app/stores';
	import Head, { metadata } from '$lib/Head.svelte';

	interface ErrorInfo {
		status: string;
		title: string;
		message: string;
		details?: any;
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

	function getError(): ErrorInfo {
		const message = Object.assign(
			{
				status: `😕 ${$page.status}`,
				title: `That didn't work right`,
				message: `There's something I didn't account for here at all. Whoops!`,
				details: $page.error,
			},
			generalErrors[`${$page.status}`] || {},
		);
		console.error($page.error.message);
		return message;
	}

	$metadata = {
		title: getError().title,
		description: getError().message,
		noRobots: true,
	};
</script>

<Head />

<h1>
	<span class="error-status">{getError().status}</span>
	<span class="error-title">{getError().title}</span>
</h1>
<p class="error-message">{getError().message}</p>
{#if getError().details}
	<pre class="error-details">{JSON.stringify(getError().details, null, 2)}</pre>
{/if}
