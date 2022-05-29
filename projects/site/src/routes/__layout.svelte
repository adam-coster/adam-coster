<script context="module" lang="ts">
  import type { LoadEvent, LoadOutput } from '@sveltejs/kit';
  export function load(info: LoadEvent): LoadOutput {
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

<!-- Header -->
<header>
  <a href="#main" id="skip-nav">skip to main content</a>
  <a
    href="/"
    class="logo"
    role="img"
    aria-label="Text 'Adam Coster' as a site logo."
  >
    <span class="firstname">adam</span><span class="lastname">coster</span><span
      class="domain">.com</span
    >
  </a>
  <Nav placement="header" />
</header>

<!-- Main Slot (changes by URL) -->
{#key key}
  <main id="main" in:fade={{ duration: 250 }}>
    <slot />
  </main>
{/key}

<!-- Footer -->
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
  #skip-nav {
    padding: 8px;
    position: absolute;
    transform: translateY(-300%);
    transition: transform 0.2s;
  }
  #skip-nav:focus {
    transform: translateY(-100%);
  }
  a.logo {
    --local-size: calc(2.5 * var(--size));
    display: block;
    margin: auto;
    text-align: center;
    font-size: var(--local-size);

    @media screen and (max-width: 500px) {
      display: flex;
      flex-direction: column;
      span {
        margin-top: calc(var(--size) * -0.5);
        margin-bottom: calc(var(--size) * -1);
      }
    }
    .firstname {
      color: var(--color-link);
      font-weight: bold;
    }
    .lastname {
      color: var(--color-link-hover);
      font-weight: bold;
    }
    .domain {
      color: var(--color-subtle);
    }
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
