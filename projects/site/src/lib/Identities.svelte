<script lang="ts" context="module">
  import {
    faDev,
    faFacebook,
    faGithub,
    faInstagram,
    faLinkedin,
    faMedium,
    faStackOverflow,
    faTwitter,
    IconDefinition,
  } from '@fortawesome/free-brands-svg-icons';
  import {
    faGlobe,
    faLightbulb,
    faLink,
    faPodcast,
  } from '@fortawesome/free-solid-svg-icons';

  /**
   * Identity types, in sort order.
   */
  export const identityTypes = [
    'domain',
    'content',
    'social',
    'reference',
  ] as const;
  export type IdentityType = typeof identityTypes[number];
  interface DigitalIdentity {
    name: string;
    icon: IconDefinition;
    title?: string;
    url: string;
    type: IdentityType;
  }

  export const digitalIdentities: DigitalIdentity[] = [
    {
      url: '/articles',
      name: 'Articles',
      title: 'Writings by Adam Coster',
      icon: faLightbulb,
      type: 'content',
    },
    {
      url: 'https://podcast.bscotch.net',
      name: 'Podcast',
      title: 'Coffee with Butterscotch Podcast, co-hosted by Adam Coster',
      icon: faPodcast,
      type: 'content',
    },
    {
      url: 'https://github.com/adam-coster',
      name: 'GitHub',
      icon: faGithub,
      type: 'social',
    },
    {
      url: 'https://twitter.com/costerad',
      name: 'Twitter',
      icon: faTwitter,
      type: 'social',
    },
    {
      url: 'https://www.instagram.com/adamncoster/',
      name: 'Instagram',
      icon: faInstagram,
      type: 'social',
    },
    {
      url: 'https://www.linkedin.com/in/adamcoster/',
      name: 'LinkedIn',
      icon: faLinkedin,
      type: 'social',
    },
    {
      url: 'https://adamcoster.com',
      name: 'adamcoster.com',
      icon: faGlobe,
      type: 'domain',
    },
    {
      url: 'https://coster.dev',
      name: 'coster.dev',
      icon: faGlobe,
      type: 'domain',
    },
    {
      url: 'https://bscotch.net/about#adam-coster',
      name: 'bscotch.net',
      icon: faLink,
      type: 'reference',
    },
    {
      url: 'https://www.facebook.com/costerad',
      name: 'Facebook',
      icon: faFacebook,
      type: 'social',
    },
    {
      url: 'https://dev.to/adamcoster',
      name: 'Dev.to',
      icon: faDev,
      type: 'social',
    },
    {
      url: 'https://adamcoster.medium.com/',
      name: 'Medium',
      icon: faMedium,
      type: 'social',
    },
    {
      url: 'https://stackoverflow.com/users/5346534/bscotchadam',
      name: 'Stack Overflow',
      icon: faStackOverflow,
      type: 'social',
    },
    {
      url: 'https://www.gamesindustry.biz/articles/?author=2243',
      name: 'GamesIndustry.biz',
      icon: faLink,
      type: 'reference',
    },
    {
      url: 'https://www.gamedeveloper.com/author/adam-coster',
      name: 'GameDeveloper.com',
      icon: faLink,
      type: 'social',
    },
    {
      url: 'https://www.gamasutra.com/blogs/author/AdamCoster/1019512/',
      name: 'Gamasutra',
      icon: faLink,
      type: 'social',
    },
  ];

  digitalIdentities.sort((a, b) => {
    if (a.type === b.type) {
      return a.name.localeCompare(b.name);
    }
    if (identityTypes.indexOf(a.type) < identityTypes.indexOf(b.type)) {
      return -1;
    }
    return 1;
  });
</script>
