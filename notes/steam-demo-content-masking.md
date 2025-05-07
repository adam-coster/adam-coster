Video game demos are all the rage right now, thanks to Steam Next Fest. Building a solid demo is challenging for a lot of reasons; the one I want to get into here is how to protect *non*-demo content in demo builds.

In an ideal world, a game demo will be some sort of alternate build of the main game. That way you don't have to have a fully separate application, and can instead set some flags or change some configuration values, all the while working from the same code base for the demo and main game.

But doing it this way has a risk: players can decompile or otherwise snoop around your demo build to find stuff they aren't supposed to. Or they can override whatever mechanism you're using to tell the game to run in demo mode, suddenly making *everything* visible.

We (by which I mean my team at [Butterscotch Shenanigans](https://www.bscotch.net)) solved this with our [Crashlands 2](https://crashlands2.com) demo by adding an additional output to our build pipeline (though you could do this manually) that ran a *masking* process on project files prior to the build.

## Content Masking

Crashlands 2 is a complicated game. It's an open world thing, and a crafting game, so everything sorta interacts with everything all the time. That made it super challenging to cleanly draw a line between "demo" and main-game content.

One option to build our demo was to try to *exclude* assets from the build that came after the demo demarcation. But! We weren't confident that we could pull stuff out just because it wasn't supposed to be in the demo without breaking some dependency chain.

So we wanted to have the content still exist in the demo build, but do something to it so that if players got access to it unexpectedly then its *meaning* would be obfuscated.

We did this through *masking*: identifying content that was (supposedly) outside the demo boundary and then overwriting it with something shaped the same but without the same *meaning*. That way we wouldn't have to worry about accidentally breaking something, because all of the game content is still there, but we could still prevent players from seeing stuff they weren't supposed to.

We also didn't worry too much about masking *everything*. The idea was that as long as we masked a lot of stuff outside the demo boundary, then the player experience is sufficiently degraded when they bypass it that there'd be no real benefit to continuing on (and we'd prevent a lot of spoilers, if not all).

## Identifying Maskable Content

For Crashlands 2, we built a content management system we call the "GameChanger". The GameChanger does a lot of cool stuff, but the relevant point is that it allows us to represent all of the game data as a giant graph of relationships. We included an option to flag particular items as demo boundaries, such that stuff that *depended* on those items (recursive) could be inferred to be outside the demo.

When we made updates to game data via the GameChanger, we'd have it export a list of IDs for all inferred non-demo content. That gave us a list of assets to mask.

## Masking Text

The easy bit was masking text. For item names and descriptions, quest dialogue, and the like, if it was outside the demo boundary then we could simply replace every non-space character with a `?`. So `"Hey, check out this secret!"` would become `"???? ???? ??? ???? ???????"` That way if a player escaped the demo boundary nothing would be *broken*, but they'd see an increasing frequency of text that was just question marks. And by doing it on a per-character basis, we ensured that the strings has the same length as before so that they looked like content but didn't do anything weird (like word-wrap in surprising places).

## Masking Sprites

We use GameMaker for all of our games, including Crashlands 2, and GameMaker's project files are simple and easy to access. For sprites, there's literally a project folder called `sprites/` in which each sprite has its own folder. And inside each of those folders are some number of `png` files.

So we needed to work through the list of maskable sprites we'd inferred, find all images related to each of those sprites, and replace them with a masked version. The idea of a masked image is that you essentially replace all of its pixels with some other color value. That could be as simple as a replacing them all with a single color (black, cyan, whatever), or you could replace them with an overlay from some other image (e.g. one that just says "DEMO" over and over again on some background). By keeping the original alpha values you essentially end up with a perfect silhouette of the original sprite.

