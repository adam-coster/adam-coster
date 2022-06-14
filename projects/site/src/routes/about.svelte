<script context="module" lang="ts">
  import type { LoadOutput } from '@sveltejs/kit';

  /**
   * Redirect to the root
   */
  export async function load(): Promise<LoadOutput> {
    return {
      status: 301,
      redirect: '/',
    };
  }
</script>
