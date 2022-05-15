<script lang="ts">
  import { page } from '$app/stores';
  import { digitalIdentities } from '$lib/Identities.svelte';
  import Portrait from '$lib/Portrait.svelte';
  import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
  import Icon from 'svelte-fa';

  const navlinks = digitalIdentities.filter(
    (d) =>
      d.type == 'content' || ['GitHub', 'Twitter', 'LinkedIn'].includes(d.name),
  );
  navlinks.unshift({
    name: 'about',
    title: 'About',
    type: 'content',
    url: '/about',
    icon: faInfoCircle,
  });

  // Properties
  /**
   * Navigation is re-used in the header, footer, and
   * non-home header,
   * and needs to draw itself different in those cases.
   */
  export let placement: 'header' | 'footer' = 'header';
  let portraitSize = 320;
  let portraitInNav = false;
  $: {
    portraitSize = $page.url.pathname == '/' ? 320 : 160;
    portraitInNav =
      $page.url.pathname == '/' || $page.url.pathname == '/whoami';
  }
</script>

<nav
  aria-label="Site navigation and external links."
  class={`nav-main ${placement}`}
>
  {#if placement == 'header' && portraitInNav}
    <div class="center">
      <Portrait width={portraitSize} />
    </div>
  {/if}

  <ul class="nav-links">
    {#if placement == 'header' && !portraitInNav}
      <li class="nav-link">
        <a href="/">
          <Portrait width={100} />
        </a>
      </li>
    {/if}
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
