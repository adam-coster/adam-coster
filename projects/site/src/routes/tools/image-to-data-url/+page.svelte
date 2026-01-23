<script lang="ts">
	import { faCopy } from '@fortawesome/free-solid-svg-icons';
	import hljs from 'highlight.js/lib/core';
	import html from 'highlight.js/lib/languages/xml';
	import { onMount } from 'svelte';
	import Icon from 'svelte-fa';

	hljs.registerLanguage('html', html);

	let color: string = $state('#00ff00');
	let pixelUrl: string | null = $state(null);

	let error = $state('');
	let dataUrl = $state('');
	let altText = $state('');

	let copyables = $derived([
		['Data URL', dataUrl],
		[
			'HTML Image',
			`<img src="${dataUrl}" alt="${altText.replaceAll('"', '&quote;')}">`,
		],
		[
			'Markdown Image',
			`![${altText.replaceAll(']', encodeURIComponent(']'))}](${dataUrl})`,
		],
		[
			'BBCode Image',
			`[img alt="${altText.replaceAll('"', '&quote;')}"]${dataUrl}[/img]`,
		],
	]);

	onMount(() => render());

	function render() {
		// Render the color to the canvas
		const canvas = document.getElementById(
			'render-target',
		) as HTMLCanvasElement;
		if (!canvas) return;
		const ctx = canvas.getContext('2d');
		if (!ctx) return;
		ctx.clearRect(0, 0, 1, 1);
		ctx.fillStyle = color;
		ctx.fillRect(0, 0, 1, 1);
		// Get the canvas as a PNG data URL
		pixelUrl = canvas.toDataURL('png', 0.1);
	}

	function copy(text: string) {
		navigator.clipboard.writeText(text);
	}
</script>

<svelte:head>
	<title>Image to Data URL Converter</title>
	<meta
		name="description"
		content="Convert an image file into a data URL for embedded images in HTML and Markdown."
	/>
</svelte:head>

<section>
	<header>
		<h1>Image to Data URL Converter</h1>
	</header>
	<form>
		<input
			type="file"
			accept="*/*"
			onchange={(e) => {
				error = '';
				//@ts-ignore
				const file: File = e.target?.files?.[0];
				if (!file) {
					error = 'Pick a file!';
				}

				// Convert to a data URL
				const reader = new FileReader();
				reader.addEventListener('load', () => {
					// convert image file to base64 string
					dataUrl = reader.result as string;
					console.log(dataUrl);
				});

				reader.readAsDataURL(file);
			}}
		/>
		<label>
			Alt Text
			<input type="text" min="1" bind:value={altText} />
		</label>

		<output>
			{#if error}
				<h3 class="error">Error!</h3>
				<p class="error">{error}</p>
			{/if}
			{#if dataUrl}
				<h3>Success!</h3>
				<p>Copy the embedded image in any of these formats:</p>
				<ul class="reset">
					{#each copyables as copyable, i (i)}
						<li>
							<button
								aria-label="Copy"
								type="button"
								onclick={() => copy(copyable[1])}
							>
								<Icon icon={faCopy} size="sm" />
								{copyable[0]}
							</button>
						</li>
					{/each}
				</ul>
			{/if}
		</output>
	</form>
	<footer>
		<h2>What's this for?</h2>
		<p>
			I'm always running into problems with where to host an image. Sometimes
			the easiest thing to do is just embed it right into the HTML or Markdown
			I'm trying to show it in. Not every platform will support a data URL, but
			for those that do this can be super helpful!
		</p>
	</footer>
</section>

<style>
	input:not([type='file']) {
		border: 1px solid var(--color-text);
		padding-left: 0.5rem;
		background-color: var(--color-text);
		color: var(--color-background);
		font-weight: normal;
		width: 10ex;
		border-radius: 0.5rem;
	}
	section {
		display: flex;
		flex-direction: column;
		/* align-items: center; */
		gap: 1em;
		width: 100%;
		max-width: min(100dvw, var(--content-max-width));
		margin: auto;
		--max-list-height: 10lh;
	}
	form {
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}

	output {
		max-width: 100%;
		& > ul {
			display: grid;
			column-gap: 2rem;
			grid-template-columns: max-content 1fr;
			& > li {
				word-break: break-all;
			}
		}
	}
</style>
