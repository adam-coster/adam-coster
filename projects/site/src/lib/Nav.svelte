<script lang="ts">
  import { digitalIdentities } from '$lib/Identities.svelte';
  import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
  import Icon from 'svelte-fa';

  const navlinks = digitalIdentities.filter(
    (d) =>
      d.type == 'content' || ['GitHub', 'Twitter', 'LinkedIn'].includes(d.name),
  );
  navlinks.unshift({
    name: 'About',
    title: 'About',
    type: 'content',
    url: '/',
    icon: faInfoCircle,
  });

  export let placement: 'header' | 'footer' = 'header';
</script>

<nav
  aria-label="Site navigation and external links."
  class={`nav-main ${placement}`}
>
  <ul class="nav-links">
    {#each navlinks as navlink}
      <li class="nav-link">
        <a
          href={navlink.url}
          title={navlink.title || `Adam Coster's ${navlink.name}`}
        >
          <Icon icon={navlink.icon} size="2x" />
          <span class="nav-link-name">{navlink.name}</span>
        </a>
      </li>
    {/each}
  </ul>
</nav>
