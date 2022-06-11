<script lang="ts">
  import Head, { metadata } from '$lib/Head.svelte';
  import type { IdentityType } from '$lib/Identities.svelte';
  import { digitalIdentities, identityTypes } from '$lib/Identities.svelte';
  import { me, site } from '$lib/microdata.svelte';
  import Icon from 'svelte-fa';
  import Portrait from '../lib/Portrait.svelte';

  $metadata = {
    title: '',
    description: `Adam Coster's portfolio, writings, and web identifiers. Adam is the CEO of video game studio Butterscotch Shenanigans and co-hosts the podcast "Coffee with Butterscotch".`,
    type: 'website',
    microdata: [site, me],
  };

  const typeTitles: {
    [T in IdentityType]: { title: string; description?: string };
  } = {
    content: {
      title: 'Content Sources',
      description: 'Places where content I create or co-create appear.',
    },
    domain: {
      title: 'My Domains',
      description:
        'Web domains I manage. Sites hosted on these domains, and emails sent from them, are likely from me.',
    },
    reference: {
      title: 'References',
      description: `Profiles and other references I've verified.`,
    },
    social: {
      title: 'Platforms',
      description: 'Social media and other accounts I have control over.',
    },
  };
</script>

<Head />

<article class="body social-preview">
  <header>
    <h1>Who am I?</h1>
  </header>
  <div class="body whoami">
    <Portrait size="small" />
    <div class="text">
      <p>
        I'm Adam Coster (he/him), co-founder & CEO of the video game studio
        <a href="https://bscotch.net">Butterscotch Shenanigans</a>
        (a.k.a. "<abbr title="Butterscotch Shenanigans">Bscotch</abbr>"),
        fullstack web developer,
        <a href="https://bscotch.net/podcast">podcaster</a>, and
        <a href="https://github.com/adam-coster/dissertation#readme"
          >certified science nerd</a
        >.
      </p>
      <p>On this site you'll find:</p>
      <ul>
        <li>
          Links to <a href="#ids">my digital properties</a>, so you can verify
          claims about my identity or find me on any given social media
          platform.
        </li>
        <li>
          <a href="/articles">Articles I've written</a> with links to their original
          and cross-posted locations.
        </li>
      </ul>
    </div>
  </div>
</article>

<article>
  <header>
    <h2 id="ids">My digital identifiers</h2>
  </header>
  <div class="body">
    <p>
      The Internet is a dangerous place, with imposters lurking around every
      corner. The following are my confirmed digital properties, which you can
      use as a reference for authenticity. Where possible, my identities link to
      one another in such a way that they form a graph that eventually includes
      this site.
    </p>
    <p>
      If you see any weird behavior from any of the properties below, please try
      to contact me through one of the others to verify!
    </p>
    <div class="identity-groups">
      {#each identityTypes.filter((t) => t != 'content') as type}
        <section class="identity-group">
          <h3>{typeTitles[type].title}</h3>
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
  .whoami {
    display: flex;
    .text {
      padding: calc(var(--size));
    }
    @media screen and (max-width: 720px) {
      flex-direction: column;
      align-items: center;
    }
  }
</style>
