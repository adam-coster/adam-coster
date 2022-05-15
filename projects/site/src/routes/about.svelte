<script lang="ts">
  import Head, { metadata } from '$lib/Head.svelte';

  import {
    digitalIdentities,
    identityTypes,
    IdentityType,
  } from '$lib/Identities.svelte';
  import { me } from '$lib/microdata.svelte';
  import Icon from 'svelte-fa';

  $metadata = {
    title: 'My digital identities',
    description:
      'The domains I own, my usernames on social media, and so on. A central place to verify my identity.',
    type: 'article',
    microdata: me,
  };

  const typeTitles: {
    [T in IdentityType]: { title: string; description?: string };
  } = {
    content: {
      title: 'Content Sources',
      description: 'Places where content I create or co-create appear.',
    },
    domain: { title: 'My Domains', description: 'Web domains I own and use.' },
    reference: {
      title: 'References',
      description: `References to me that I've verified or created.`,
    },
    social: {
      title: 'Platforms',
      description:
        'Social media, services, networks, and other entities with which I have an account.',
    },
  };
</script>

<Head />

<h1>About</h1>

<article class="body">
  <header>
    <h2>Who am I?</h2>
  </header>
</article>

<article class="body">
  <header>
    <h2>My digitial identifiers</h2>
  </header>
  <div class="body">
    <p>
      The Internet is a dangerous place, with imposters lurking around every
      corner. This page serves as a center of trust for my digitial identities.
      Where possible, my identities link to one another in such a way that they
      form a graph that eventually includes this site.
    </p>
    <div class="identity-groups">
      {#each identityTypes.filter((t) => t != 'content') as type}
        <section class="identity-group">
          <h2>{typeTitles[type].title}</h2>
          {#if typeTitles[type].description}
            <p>
              {typeTitles[type].description}
            </p>
          {/if}
          <ul>
            {#each digitalIdentities.filter((d) => d.type == type) as id}
              <li>
                <a href={id.url} title={id.title}>
                  <Icon icon={id.icon} />
                  {id.name}
                </a>
              </li>
            {/each}
          </ul>
        </section>
      {/each}
    </div>
  </div>
</article>

<style lang="scss">
  .identity-groups {
    @media screen and (min-width: 800px) {
      display: grid;
      grid-gap: 1rem;
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
  .identity-group {
    text-align: center;
  }
</style>
