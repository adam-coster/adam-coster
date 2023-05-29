# Code & Stuff

Hey there, internet rando!

I'm Adam Coster, CEO and co-founder of video game studio [Butterscotch Shenanigans](https://www.bscotch.net/about#adam-coster) ([@bscotch](https://github.com/bscotch)).

I'm a fullstack web developer and DevOps enthusiast, but also spend a lot of my time thinking about data, productivity, and business. I talk about all of that a lot on my weekly podcast, [Coffee with Butterscotch](https://podcast.bscotch.net), co-hosted by my co-founders (and literal brothers).

## What's _this_ repo?

I'm embracing the monorepo lifestyle, and so this repo will accumulate stuff I create outside of work. Most of the stuff I create _is_ for work, so at any given moment there might not be much of anything in here.

## Other stuff I've made (not in this repo)

### Proprietary (Closed Source) Stuff

Most of the stuff I've worked on is closed source. Here's a quick summary of my biggest projects:

- **[Video Game Webtech](https://www.bscotch.net/games):** I develop and maintain all of the webtech for our games, starting in 2015 with our "BscotchID" service which in 2018 I replaced with a shinier service, "Rumpus". Migrating users between those systems without downtime [was quite the endeavor](https://adamcoster.com/blog/tech-debt-the-bill-comes-due)! BscotchID/Rumpus features include:
  - Cross-platform save syncing (e.g. allowing players to switch between a mobile device and a console without losing progress)
  - [Cross-platform user-generated content sharing](https://aws.amazon.com/blogs/gametech/a-platformer-maker-made-for-every-platform/) (in [Levelhead](https://www.bscotch.net/games/levelhead), players can create and share custom levels and compete on per-level leaderboards)
  - Centralized account management, allowing players to connect their accounts to any platform account
  - A [public API](https://beta.bscotch.net/api/docs/community-edition/) allowing players to build their own projects using data from Levelhead
- **[Studio Website](https://www.bscotch.net):** I develop and maintain the central website for our studio, which is basically the front-end for Rumpus. I built it with [Vue v2](https://github.com/vuejs/vue) and have been slowly migrating it to Vue3 + Typescript. I admit to being a middling front-end developer; the vast majority of my development time goes into the backend and tools to support our games and team. Still, I think the site came out alright. Features include:
  - A custom newsletter system, allowing our team to build and send a variety of opt-in newsletters to our players and other groups
  - The "[Feedbag](https://www.bscotch.net/feedbag)" -- a system for collecting and managing player feedback at scale
  - Automated game changelogs, generated from Git messages and made available via the site (see [Levelhead's Patchnotes](https://www.bscotch.net/games/levelhead/patchnotes) as an example)
  - Tons of internal features for our staff to manage aspects of game development, testing, and customer support

### Open Source Stuff

I've open-sourced a handful of our studio projects. See the studio's GitHub ([@bscotch](https://github.com/bscotch)) for the full list, but here are the highlights:

- **[Stitch](https://github.com/bscotch/stitch#readme):** We use GameMaker for game development, and I've made many tools and pipelines over the years to improve the development process in GameMaker. The latest, and the one we open-sourced, is "Stitch". Stitch is a "Pipeline Development Kit" for GameMaker; we use it to automate asset management and parts of the build process. It includes a bunch of CLI tools, programmatic tools, a desktop application for managing game projects, and a VSCode extension.
- **[Spritely](https://github.com/bscotch/spritely#readme):** Due to our use of GameMaker, as well as our tendency to use art-generation tools in ways they weren't intended, we've always needed to have our own art pipeline management tooling. The latest is the one we open-sourced: Spritely. We use Spritely for the upstream part of our art pipeline, where it automatically crops, bleeds, and organizes source images. Stitch makes up the other end of the pipeline.
- **[Rumpus Community Edition SDK](https://github.com/bscotch/rumpus-ce#readme):** In the few weeks leading up to the launch of [Levelhead](https://www.bscotch.net/games/levelhead), I built a [public API](https://beta.bscotch.net/api/docs/community-edition/) ("Rumpus Community Edition" a.k.a. "Rumpus CE") to allow players to build their own tools and sites using player and level data from Levelhead. To give those devs a head-start on building something, I made this SDK specifically for interacting with Rumpus CE.

### Oh, and a Dissertation!

I got a PhD in Cell & Molecular Biology back in 2014, and then immediately joined my brothers in co-founding Butterscotch Shenanigans where I ended up mostly doing webtech and, as of July 2021, now occupy the CEO role. Yes, that's a weird path. It's a long story.

Anyway, I'd be remiss if I didn't take a moment to force my dissertation upon you, dear reader:

["Quantitative single-cell imaging reveals insulation of morphogenic signal transduction"](https://github.com/adam-coster/dissertation#readme)
