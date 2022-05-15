<script context="module" lang="ts">
  import type { LoadInput, LoadOutput } from '@sveltejs/kit';
  export function load(info: LoadInput): LoadOutput {
    return {
      props: {
        key: info.url.pathname,
      },
    };
  }
</script>

<script lang="ts">
  import Nav from '$lib/Nav.svelte';
  import { fade } from 'svelte/transition';

  export let key: string;
</script>

<Nav placement="header" />

{#key key}
  <main in:fade={{ duration: 250 }}>
    <slot />
  </main>
{/key}

<footer>
  <Nav placement="footer" />
  <p class="copyright center" aria-label="Copyright notice">
    <span class="inline-block"
      >&copy; {new Date().getFullYear()} Adam Coster.</span
    >
    <span class="inline-block">All rights reserved.</span>
  </p>
</footer>

<style lang="scss">
  :global {
    @import '../style/global';
  }
  main {
    flex-grow: 1;
  }
  footer {
    justify-content: center;
    padding-top: 50px;
    font-size: calc(0.8 * var(--size));
    color: var(--color-subtle);
    .copyright {
      margin-top: calc(0.3 * var(--size));
    }
  }
</style>
