We're adding some cool dev tooling to our game project, so that we can deep link into it to send data from links right into the game. This would let us link to specific UIs, or to specific QA snapshots, etc, so that our testers can just follow a link from an issue right to the in-game replication, for example. Or link to a setting, which is a cool feature that VSCode now supports (their patchnotes now deep link right to relevant settings in the app).

BUT. Deep links have annoying behaviors:

- "Universal links" (regular links that have server-side metadata informing the client which apps could _also_ open that URL, falling back to the browser) don't do anything on desktop, so we're limited to "Custom links" (using a custom protocol, like `my-game://somethinng/whatever`). But, hey, this is what things like VSCode use so we're in good company.
- Lots of apps where we'd want to hyperlink such a custom URI don't even let you do it. E.g. in Notion if you try to link to a custom protocol it just... doesn't let you. Neither does Google Docs, nor Discord. Airtable does, though, and presumably other more dev-facing apps that trust their users.

So I needed a way to wrap a custom URI with a plain old HTTPS link, so that I could actually, you know, link to stuff. Basically the equivalent of a link shortener, but even simpler since nothing needs to be stored anywhere. I figure there are services out there already for such a thing, but since it just needs a dead-simple static site to work and I want to be able to trust it, I just rolled my own.

Might be useful for others!

https://bscotch.github.io/redirect/
