<script lang="ts">
	let diagonal: number = $state(27);
	let aspectRatio: string = $state('16:9');
	let dimensions: [width: number, height: number] = $derived.by(() => {
		const [widthRatio, heightRatio] = aspectRatio
			.trim()
			.split(/\s*[:x]\s*/)
			.map(Number);
		// For this aspect ratio, get the diagonal
		const unitDiagonal = Math.sqrt(widthRatio ** 2 + heightRatio ** 2);
		// Get the relative multiplier for the provided diagonal
		const relative = diagonal / unitDiagonal;
		// Infer the resulting height and width
		const height = heightRatio * relative;
		const width = widthRatio * relative;
		return [width, height];
	});
</script>

<svelte:head>
	<title>Screen Size</title>
	<meta
		name="description"
		content="Compute the width and height of a screen given its diagonal size and aspect ratio."
	/>
</svelte:head>

<section id="input-detector">
	<header>
		<h1>Screen Size</h1>
		<p>
			Screen sizes are always given as the diagonal, which is essentially
			useless information. Given a screen's diagonal and aspect ratio, get its
			width and height.
		</p>
	</header>
	<form id="screen-size-form">
		<div class="controls">
			<label>
				Diagonal
				<input
					type="number"
					min="0"
					bind:value={diagonal}
					placeholder="Diagonal in inches"
				/>
			</label>
			<label>
				Aspect Ratio
				<input
					type="text"
					bind:value={aspectRatio}
					pattern="^(\d+(\.\d+)?|\.\d+)[:x](\d+(\.\d+)?|\.\d+)$"
					placeholder="e.g. 16:9 or 21:9"
				/>
			</label>
		</div>
		<output>
			<h2>
				Dimensions <span class="subtle">(width × height)</span>
			</h2>
			<p class="dimensions monospace" aria-live="polite">
				<b>{dimensions[0].toFixed(1)}</b> <span class="subtle">×</span>
				<b>{dimensions[1].toFixed(1)}</b>
			</p>
			<p>
				<i>Rounded to the first decimal place.</i>
			</p>
		</output>
	</form>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		align-items: center;
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
				& > input {
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
		width: 100%;
		& .dimensions {
			font-size: 2rem;
		}
	}
</style>
