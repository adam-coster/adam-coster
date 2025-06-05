<script lang="ts">
	import { faCopy } from '@fortawesome/free-solid-svg-icons';
	import Icon from 'svelte-fa';

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

	function copyWithSep(set: Set<string>, sep: string) {
		const sepped = [...set].join(sep);
		navigator.clipboard.writeText(sepped);
	}

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
		{#snippet copybutton(name: string, set: Set<string>, sep: string)}
			<button
				class="copy-button"
				onclick={() => copyWithSep(set, sep)}
				title={`Copy items with separator ${JSON.stringify(sep)}`}
			>
				{name}
			</button>
		{/snippet}
		{#snippet items(set: Set<string>)}
			{#if set.size > 0}
				<p>
					<Icon icon={faCopy} />
					{@render copybutton('Newline', set, '\n')}
					{@render copybutton('Tab', set, '\t')}
					{@render copybutton('Space', set, ' ')}
					{@render copybutton('Comma', set, ',')}
				</p>
				<ul class="reset result-list">
					{#each Array.from(set) as item}
						<li>{item}</li>
					{/each}
				</ul>
			{:else}
				<p class="empty"><i>No items.</i></p>
			{/if}
		{/snippet}

		{#if aSet.size && bSet.size}
			<h2>Union</h2>
			<p>These are the items from both lists combined:</p>
			{@render items(union)}
			<h2>Intersection</h2>
			<p>These are the items that appear in both lists:</p>
			{@render items(intersection)}
			<h2>List A Only</h2>
			<p>These items only appear in List A:</p>
			{@render items(aOnly)}
			<h2>List B Only</h2>
			<p>These items only appear in List B:</p>
			{@render items(bOnly)}
		{:else}
			<p>Put stuff in both lists to see results.</p>
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
		--max-list-height: 10lh;
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
		field-sizing: content;
		max-height: var(--max-list-height);
		overflow-y: auto;
		border: 1px solid var(--color-text);
		padding: 0.25rem 0.5rem;
	}

	output {
		width: 100%;

		& ul {
			display: inline-flex;
			flex-direction: column;
			max-height: var(--max-list-height);
			overflow-y: auto;
			border: 1px solid var(--color-text);
			padding: 0.25rem 0.5rem;
		}
	}

	button.copy-button {
		color: var(--color-link);
		text-decoration: underline;
	}
</style>
