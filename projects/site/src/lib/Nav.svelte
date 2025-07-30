<script lang="ts">
	import { digitalIdentities } from '$lib/identities';
	import { faInfoCircle, faToolbox } from '@fortawesome/free-solid-svg-icons';
	import Icon from 'svelte-fa';

	const navlinks = digitalIdentities.filter(
		(d) => d.type == 'content' || ['GitHub'].includes(d.name),
	);
	navlinks.unshift({
		name: 'About',
		title: 'About',
		type: 'content',
		url: '/',
		icon: faInfoCircle,
	});
	navlinks.splice(2, 0, {
		name: 'Tools',
		title: 'Tools and Web Apps',
		type: 'content',
		url: '/tools',
		icon: faToolbox,
	});

	interface Props {
		placement?: 'header' | 'footer';
		justify?: 'start' | 'end' | 'center';
	}

	let { placement = 'header', justify = 'end' }: Props = $props();
</script>

<nav
	aria-label="Site navigation and external links."
	class={`nav-main ${placement}`}
>
	<menu class="nav-links" style={`justify-content: ${justify}`}>
		{#each navlinks as navlink}
			<li class="nav-link">
				<a
					href={navlink.url}
					title={navlink.title || `Adam Coster's ${navlink.name}`}
				>
					<Icon icon={navlink.icon} />
					<span class="nav-link-name">{navlink.name}</span>
				</a>
			</li>
		{/each}
	</menu>
</nav>

<style>
	nav {
		--small-screen-scaler: 0.8;
		--relative-size: calc(1 * var(--small-screen-scaler));
		--link-width: calc(4rem * var(--relative-size));
		font-size: calc(1rem * var(--relative-size));
		margin: 0;
	}
	@media screen and (max-width: 500px) {
		nav {
			--small-screen-scaler: 0.7;
		}
	}

	.footer {
		--relative-size: calc(0.8 * var(--small-screen-scaler));
	}

	menu {
		list-style: none;
		padding: 0;
		margin: 0;
		display: flex;
		flex-shrink: 0;
		align-items: center;
	}

	li.nav-link {
		display: flex;
		width: var(--link-width);
		justify-content: center;
		align-items: center;
	}
	li.nav-link a {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-decoration: none;
	}
	li.nav-link a :global(svg) {
		font-size: 2em;
	}

	.nav-link a,
	.nav-link :global(svg) {
		color: var(--color-subtler);

		&:hover {
			color: var(--color-link);
		}
	}
</style>
