<script lang="ts">
	let nothing = $state(false);
	let entries: { type: string }[] = $state([]);
	function onpaste(e: ClipboardEvent) {
		// Reset
		nothing = false;
		entries = [];

		console.log(e);
		e.preventDefault();
		const clipboardData = e.clipboardData;
		if (!clipboardData) {
			nothing = true;
			return;
		}
		for (const type of clipboardData.types) {
			if (type === 'Files') {
				const files = clipboardData.files;
				// for(const file of files){
				// 	entries.push({type: file.type});
				// }
				continue;
			}
			entries.push({ type });
		}
	}
</script>

<section>
	<header>
		<h1>Clipboard Content Display</h1>
		<p>See what's been copied into your clipboard!</p>
		<p class="warning">This page is in progress!</p>
	</header>
	<input autofocus {onpaste} placeholder="Paste here!" />
	<output>
		{#if nothing}
			<p class="warn">Nothing in the clipboard!</p>
		{/if}
		{#each entries as entry}
			<p>{entry.type}</p>
		{/each}
	</output>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1em;
		text-align: center;
	}
	input {
		max-width: 200px;
		aspect-ratio: 3/2;
		border: 1px solid currentColor;
		border-radius: 0.5em;
	}
</style>
