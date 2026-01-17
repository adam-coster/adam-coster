Documentation is easiest when its writers and readers are _the same people_ (internal documentation). It gets a bit harder when you add readers who have similar knowledge to the writers but aren't the same people (e.g. users of open source projects). It gets truly difficult when your audience is completely different from the authors, especially if you have multiple, non-overlapping audiences.

_(This post is excerpted from [a longer DevChat Newsletter post](https://www.bscotch.net/post/devchat-11?topics=devchat) and updated a bit.)_

This latter problem is exactly the case for games, and any other software wherein there is huge information asymmetry between developers and downstream customers.

Let's take my own studio ([Butterscotch Shenanigans](https://www.bscotch.net)) as an example.

When we change something in one of our games, we need to:

- Be able to revert that change if it causes something to break.
- Be able to identify when that change was introduced so we can trace future bugs to it.
- Know which versions of the game include that change.
- Communicate that change with Quality Assurance so they can design tests for it.
- (Maybe) communicate that change with players.
- Include that change in a summary, to post to the stores where we sell the game when we push out an update.

How do we solve all of these at once? Version control, and messages describing the changes in each version, handle the first three items right out of the gate. But what about the rest?

Our old way was mostly to treat these as separate problems. For every change made to a game, Seth (our game programmer) would:

- Document that change in our version control system (Git) using technical language.
- Document that change in a shareable document with instructions for how QA could test it.
- (Maybe) document that change in another shareable document using player-friendly language.

In other words, Seth had to document every change twice or thrice, which included a lot of bouncing around between different services that managed that documentation.

But... he already needed to document everything in our version control system in the first place. Why couldn't we just use that?

And so, we did!

I created some tooling based on [Conventional Changelog](https://github.com/conventional-changelog/conventional-changelog). That project is, unfortunately, poorly organized for newcomers. It also had some limitations due to design choices that conflicted with how we liked to work. Still, at root, my tools do exactly what that project does.

In short, the way that Conventional Changelog works is to establish a _convention_ for writing version control messages, help you use that convention, and then parse your convention-following messages to convert them into patchnotes. To group your notes by project version it expects you to follow [semver](https://semver.org/) versioning practices, and to use "version commits", which are commits whose message is _only and exactly_ the project version.

To see an example in action, take a look at the commit log for my open source monorepo [Stitch](https://github.com/bscotch/stitch/commits/develop), and what [the resulting release notes](https://github.com/bscotch/stitch/blob/develop/packages/vscode/CHANGELOG.md) look like for one of its projects.

This changelog file is created as part of the versioning process (see the `bump` script in [Stitch's `package.json`](https://github.com/bscotch/stitch/blob/develop/package.json)), using a custom library that works a lot like Conventional Commits.

So that's all well and good for an open-source project but what about our case, where we need _different_ changelogs for different users (internal, QA, and players)?

The features I added on top of Conventional Changelog for our own tooling are:

- **Streams:** A message can include a "stream", which can then be allow-listed or block-listed when compiling patchnotes. For example, the message `fix(internal|Site): Did some secret stuff.` uses the `internal` stream, which could be excluded from one set of release notes.
- **Multi-Message Commits:** Conventional Changelog has taken a hardline stance: only one change will be parsed out of a given commit message. This doesn't make room for squash commits, accidents, or simply the reality that sometimes commits contain multiple changes for all kinds of reasons. My tooling allows for this.
- **Access Restrictions:** We compile multiple versions of our changelogs for different downstream users, and host all of them on our website. Based on the permissions level of the user looking at the patchnotes, we serve the correct ones. For example, if you visit the ["How Many Dudes?"](https://www.bscotch.net/games/how-many-dudes/patchnotes)
  you'll see a lot less than I do when I visit that same page with my studio account. We manage this by having the different patchnotes auto-uploaded to our site as part of the compile process, and then Rumpus is set up to serve them based on user permissions.
- **UI:** Finally, Conventional Changelog spits out a Markdown file. This is already human-readable, and also renders to even-more-readable HTML. My tooling creates a JSON file as well, which allows me to more easily parse it to do interesting UI stuff. The website UI parses that JSON and creates an interface that users can interact with.

Have your own tricks for automating video game release notes? I'd love to hear about it! [Hit me up on Bluesky](https://bsky.app/profile/adamcoster.com) or something.
