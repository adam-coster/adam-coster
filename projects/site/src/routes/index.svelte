<script lang="ts">
  import { me, site } from '$lib/microdata.svelte';
  import Head, { metadata } from '$lib/Head.svelte';

  $metadata = {
    title: '',
    description: `Adam Coster's portfolio, writings, and web identifiers. Adam is the CEO of video game studio Butterscotch Shenanigans and co-hosts the podcast "Coffee with Butterscotch".`,
    type: 'website',
    microdata: [site, me],
  };
</script>

<Head />

<!-- Salutations -->
<article class="article">
  <header>
    <h1>Hello there, Internet Rando!</h1>
  </header>

  <div class="body">
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

    <h2>What's this site for?</h2>

    <ul>
      <li>
        Centralizing <a href="/whoami">my digitial identities</a> so that others
        can have confidence that I am who I claim to be on other services and platforms.
      </li>
      <li>
        Sharing the things I've learned in life, science, software, games, and
        business, via <a href="/articles">posted articles</a>.
      </li>
      <li>
        Archiving articles and content I've published elsewhere, so that they
        can be found all in <a href="/articles">one place</a>.
      </li>
      <li>Playing with web technologies that I don't normally get to use.</li>
    </ul>

    <h2>How to get in touch</h2>
    <p>
      I get a lot of messages from people, and they tend to fall into a small
      number of categories and patterns. Here's a quick guide to getting in
      touch with me based on what you're looking for.
    </p>

    <h3>General</h3>
    <ul>
      <li>
        I keep my social networks <em>very</em> sparse and domain-specific. For example,
        on LinkedIn I primarily connect with professionals in my subset of the games
        industry, while on Twitter I follow people who regularly post content that
        reliably teaches me something new, across many topics. Whether I follow/connect
        with someone or not has little or nothing to do with my personal relationship
        with them.
      </li>
      <li>
        Always tell me <em>why</em> you're reaching out (or adding me to your network).
        I skip friend/contact requests on all platforms unless I already know the
        person or can infer why the person is making the request.
      </li>
      <li>
        I have a few neurodivergencies going on, which collectively make me
        terrible at remembering faces and names. If we've met before, but it's
        been a while, please provide context for how we know each other!
      </li>
      <li>
        Use public communication channels where possible (e.g. via
        <a href="https://twitter.com/costerad">Twitter</a>), since that allows
        others to also contribute to and benefit from the conversation.
      </li>
    </ul>

    <h3>Peers</h3>
    <ul>
      <li>
        If you're deep into the same things I'm into (games, software,
        philosophy, neurodivergence), or are a hobbyist/student interested in
        these things,
        <a href="https://twitter.com/costerad">Twitter</a> is a good place to stay
        in touch.
      </li>
      <li>
        If you're in the games industry and want to talk shop, I'm always game
        to share notes. Ping me with what you want to chat about <a
          href="https://linkedin.com/in/adamcoster"
        >
          on LinkedIn</a
        >
        or <a href="https://twitter.com/costerad">Twitter</a>.
      </li>
    </ul>

    <h3>Business Partnerships</h3>
    <ul>
      <li>
        If you're looking for a significant business partnership with Bscotch
        (e.g. for publishing, licensing, acquisitions, etc.), ping me <a
          href="https://linkedin.com/in/adamcoster"
        >
          on LinkedIn</a
        > with the details of what you're looking for.
      </li>
    </ul>

    <h3>Students</h3>
    <ul>
      <li>
        Between my <a href="https://bscotch.net/podcast">podcast</a>,
        <a href="/articles">articles</a>, and various talks, there's all kinds
        of information I've already put out there. If you have additional
        questions, want to keep informed about new stuff I put out, or just want
        to say "hi",
        <a href="https://twitter.com/costerad">Twitter</a> is probably the best place
        for that.
      </li>
      <li>
        If you're doing an interview-style assignment, ask a small number of
        specific questions that don't already have answers floating around.
      </li>
      <li>
        If you're looking for advice about getting into the games industry, I
        honestly can't help you. The industry has changed a lot since I started,
        and privilege and luck have played a huge role in my own success.
      </li>
      <li>My studio doesn't have an internship program, sorry!</li>
    </ul>

    <h3>Players of Bscotch Games</h3>
    <ul>
      <li>
        If you're trying to get support, provide feedback, or leave a bug
        report, use the <a href="https://bscotch.net/support">
          studio's support system</a
        >.
      </li>
    </ul>
  </div>
</article>
