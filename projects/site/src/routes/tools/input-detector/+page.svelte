<script lang="ts">
	let inputs: string[] = $state([]);

	function addModifiers(e: KeyboardEvent | MouseEvent) {
		if (e.metaKey) inputs.push('Meta');
		if (e.ctrlKey) inputs.push('Control');
		if (e.altKey) inputs.push('Alt');
		if (e.shiftKey) inputs.push('Shift');
	}

	function onkeydown(e: KeyboardEvent) {
		console.log(e);
		inputs = [];
		addModifiers(e);
		let key = e.key;
		if (key === ' ') key = 'Space';
		if (inputs.includes(key)) return;
		inputs.push(key);
	}

	function onmousedown(e: MouseEvent) {
		console.log(e);
		inputs = [];
		addModifiers(e);
		inputs.push(`Mouse${e.button}`);
	}
</script>

<svelte:window {onkeydown} {onmousedown} />

<section id="input-detector">
	<header>
		<h1>Input Detector</h1>
		<p>Press keys, click mouse buttons, see what the browser registers.</p>
	</header>
	<ul>
		{#each inputs as input, i}
			{#if i !== 0}
				<li class="plus">+</li>
			{/if}
			<li class="input">
				{input}
			</li>
		{/each}
	</ul>
</section>

<style>
	#input-detector {
		user-select: none;
		width: 100%;
		text-align: center;
	}
	ul {
		margin-top: 1rem;
		font-size: 1.2rem;
		list-style: none;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 0.25rem;
	}
	.plus {
		color: var(--color-subtle);
	}
	.input {
		color: var(--color-inline-code);
	}
</style>
