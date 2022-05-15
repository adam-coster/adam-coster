<script context="module" type="ts">
  /** @type {import('@sveltejs/kit').ErrorLoad} */
  export function load({ status }) {
    return {
      props: {
        status,
      },
    };
  }
</script>

<script type="ts">
  import Head, { metadata } from '$lib/Head.svelte';

  export let status: number | string;

  interface ErrorMessage {
    status: string;
    title: string;
    message: string;
  }
  const messages: Record<string, ErrorMessage> = {
    '404': {
      status: '👀 404',
      title: 'Page not found!',
      message: `The URL you followed has let you astray: there's nothing here! Either someone created an invalid link, or I did something dumb.`,
    },
    '500': {
      status: '🔥 500',
      title: 'Whoa, something has gone very wrong!',
      message: `Uhhh. This is bad. The server completely choked on something. I guess try again later?`,
    },
    other: {
      status: `😕 ${status}`,
      title: `That didn't work right`,
      message: `There's something I didn't account for here at all. Whoops!`,
    },
  };
  let message = messages[`${status}`] || messages.other;
  $metadata = {
    title: message.title,
    description: message.message,
    noRobots: true,
  };
</script>

<Head />

<h1>
  <span class="error-status">{message.status}</span>
  <span class="error-title">{message.title}</span>
</h1>
<p class="error-message">{message.message}</p>
