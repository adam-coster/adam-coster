<script lang="ts">
	import { faCopy } from '@fortawesome/free-solid-svg-icons';
	import hljs from 'highlight.js/lib/core';
	import html from 'highlight.js/lib/languages/xml';
	import { onMount } from 'svelte';
	import Icon from 'svelte-fa';

	hljs.registerLanguage('html', html);

	let width: number = $state(64);
	let height: number = $state(64);
	let color: string = $state('#00ff00');
	let pixelUrl: string | null = $state(null);
	let alt = $derived(`Single-pixel placeholder PNG in color ${color}`);
	let imgCode = $derived(
		`<img width="${width}" height="${height}" src="${pixelUrl}" alt="${alt}">`,
	);

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
</script>

<svelte:head>
	<title>Single-Pixel Image Generator</title>
	<meta name="description" content="Get a single-color HTML image element." />
</svelte:head>

<section>
	<header>
		<h1>Single-Pixel Image Generator</h1>
	</header>
	<form>
		<div class="controls">
			<label class="color">
				Color
				<canvas id="render-target" width="1" height="1"> Color Preview </canvas>
				<input type="color" bind:value={color} oninput={render} />
			</label>
			<label>
				Width
				<input type="number" min="1" bind:value={width} />
			</label>
			<label>
				Height
				<input type="number" min="1" bind:value={height} />
			</label>
		</div>
		<output>
			<ul class="reset">
				<li>
					<h3>Image</h3>
					<img src={pixelUrl} {alt} width="64" height="64" />
				</li>
				<li>
					<h3>
						<button
							title="Copy to clipboard as plaintext"
							type="button"
							onclick={() => navigator.clipboard.writeText(imgCode)}
						>
							<Icon icon={faCopy} size="sm" />
						</button>
						HTML
					</h3>
					{@html hljs.highlight(imgCode, { language: 'html' }).value}
				</li>
			</ul>
		</output>
	</form>
	<footer>
		<h2>What's this for?</h2>
		<p>
			I often find myself needing placeholder HTML image elements when doing web
			development. While I can often use a <code>div</code> element for this
			purpose, often there is external styling being applied via CSS selectors
			that causes differences if the placeholder is <i>not</i> an
			<code>img</code> element.
		</p>
		<p>
			So a slick way to deal with this is with an <code>img</code> element whose
			<code>src</code>
			attribute is set to a <i>data URL</i> for a single pixel, and just setting
			the <code>img</code>'s <code>width</code> and <code>height</code> to the desired
			size. Figuring out the data URL for a single-pixel image, for any particular
			color, is not particularly simple, though. So that's what this tool solves!
		</p>
	</footer>
</section>

<style>
	label.color {
		& input {
			outline: none;
			clip: rect(0 0 0 0);
			clip-path: inset(50%);
			height: 1px;
			overflow: hidden;
			position: absolute;
			white-space: nowrap;
			width: 1px;
		}
		&:has(:focus-within) {
			& canvas {
				outline: 2px solid white;
			}
			& input {
				outline: none;
			}
		}
	}
	#render-target {
		width: 1.5em;
		height: 1.5em;
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
		& > .controls {
			display: flex;
			gap: 1rem;
			& > label {
				font-weight: bold;
				display: flex;
				flex-direction: row;
				align-items: center;
				column-gap: 0.25em;
				& > input[type='number'] {
					border: 1px solid var(--color-text);
					padding-left: 0.5rem;
					background-color: var(--color-text);
					color: var(--color-background);
					font-weight: normal;
					width: 10ex;
					border-radius: 0.5rem;
				}
			}
		}
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
