<script lang="ts">
	import { faCopy } from '@fortawesome/free-solid-svg-icons';
	import hljs from 'highlight.js/lib/core';
	import json from 'highlight.js/lib/languages/json';
	import html from 'highlight.js/lib/languages/xml';
	import Icon from 'svelte-fa';

	// Then register the languages you need
	hljs.registerLanguage('json', json);
	hljs.registerLanguage('html', html);

	let nothing = $state(false);
	let entries: { type: string; data: string; html: string }[] = $state([]);
	let files: { name: string; type: string }[] = $state([]);

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
		for (const file of clipboardData.files) {
			files.push({
				name: file.name,
				type: file.type,
			});
		}
		for (const type of clipboardData.types) {
			if (type === 'Files') {
				continue;
			}
			const data = clipboardData.getData(type);
			let html: string;
			if (type === 'text/html') {
				html = hljs.highlight(data, { language: 'html' }).value;
			} else if (!type.startsWith('text/')) {
				// Try to interpet as JSON
				console.log(data);
				try {
					const json = JSON.parse(data);
					html = hljs.highlight(JSON.stringify(json, null, 2), {
						language: 'json',
					}).value;
				} catch (e) {
					// Just as-is
					html = `<pre><code>${data}</code></pre>`;
				}
			} else {
				html = `<pre><code>${data}</code></pre>`;
			}
			entries.push({ type, data, html });
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
			<p class="warning">Nothing in the clipboard!</p>
		{/if}
		{#if entries.length}
			<h2>Text Content</h2>
			<ul class="reset">
				{#each entries as entry}
					<li>
						<article>
							<h3>
								<button
									title="Copy to clipboard as plaintext"
									type="button"
									onclick={() => navigator.clipboard.writeText(entry.data)}
								>
									<Icon icon={faCopy} size="sm" />
								</button>
								{entry.type}
							</h3>
							<div class="pasted-text">{@html entry.html}</div>
						</article>
					</li>
				{/each}
			</ul>
		{/if}
		{#if files.length}
			<h2>File Content</h2>
			<ul class="reset">
				{#each files as file}
					<li>
						<article>
							<h3>{file.name}</h3>
							<p>{file.type}</p>
						</article>
					</li>
				{/each}
			</ul>
		{/if}
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
	article {
		width: 960px;
		max-width: 100%;
	}
	article .pasted-text {
		text-align: left;
	}
</style>
