<script lang="ts">
	let aRaw = $state<string>('');
	let bRaw = $state<string>('');

	let aSet = $derived(parseList(aRaw));
	let bSet = $derived(parseList(bRaw));
	let union = $derived(new Set([...aSet, ...bSet]));
	let intersection = $derived(
		new Set([...aSet].filter((item) => bSet.has(item))),
	);
	let aOnly = $derived(new Set([...aSet].filter((item) => !bSet.has(item))));
	let bOnly = $derived(new Set([...bSet].filter((item) => !aSet.has(item))));

	function parseList(raw: string): Set<string> {
		return new Set(
			raw
				.trim()
				.split(/[\r\n\t ,;]+/)
				.filter(Boolean),
		);
	}
</script>

<svelte:head>
	<title>Compare Lists</title>
	<meta
		name="description"
		content="Compare two sets of items to get their union, intersection, and differences."
	/>
</svelte:head>

<section id="input-detector">
	<header>
		<h1>Compare Lists/Sets</h1>
		<p>
			Compare two sets of items to get their union, intersection, and
			differences. Treats the lists as <i>sets</i> (so duplicates are removed). Commas,
			tabs, newlines, and spaces are all treated as delimiters.
		</p>
		<p>
			<i
				>🔒 Data you paste here isn't sent anywhere! It's safe and private
				unless you have extensions or the like that can see what you're doing.</i
			>
		</p>
	</header>
	<form
		onsubmit={(e) => {
			e.preventDefault();
			console.log('Form submitted');
		}}
	>
		<div class="input-lists">
			<div class="input-list list-a">
				<label for="list-a">List A</label>
				<textarea
					id="list-a"
					rows="5"
					placeholder="List A Items"
					bind:value={aRaw}
				></textarea>
			</div>
			<div class="input-list list-b">
				<label for="ilist-b">List B</label>
				<textarea
					id="list-b"
					rows="5"
					placeholder="List B Items"
					bind:value={bRaw}
				></textarea>
			</div>
		</div>
	</form>

	<output>
		{#snippet items(set: Set<string>)}
			<p>Copy as:</p>
			<ul class="reset result-list">
				{#each Array.from(set) as item}
					<li>{item}</li>
				{/each}
			</ul>
		{/snippet}

		{#if aSet.size && bSet.size}
			<h2>Union</h2>
			<p>These are all the unique items from both lists combined:</p>
			<ul></ul>
		{:else}
			<p>Please enter items in both lists to see results.</p>
		{/if}
	</output>
	<output> </output>
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
	}
	form {
		width: 100%;
	}
	.input-lists {
		/* Lists should have the same width, displayed side-by-side unless the page gets too narrow, in which case they can wrap. Grid with a media-query is probably the move. */
		display: grid;
		grid-template-columns: 50% 50%;
		gap: 1rem;
	}
	@media screen and (width < 600px) {
		.input-lists {
			grid-template-columns: 1fr;
		}
	}

	.input-list {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;

		& label {
			font-weight: bold;
		}
	}

	textarea {
		max-height: 10lh;
		overflow-y: auto;
		border: 1px solid var(--color-text);
		padding: 0.25rem 0.5rem;
	}
</style>
