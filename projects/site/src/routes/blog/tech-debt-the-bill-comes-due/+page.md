If we don't solve the problems of our past, the futures that we want become ever more difficult to obtain. That's true in life, and it's true in software. In life, the past comes in the form of _baggage_. In software, we call that "technical debt". For both life and software, how do you deal with the past? Do you ignore it and hope for the best? Do you continuously make your future better, via therapy and code refactoring? Do you cut ties with the past completely, via moving to another city and starting a new git repository?

There's no one way to move forward. Context matters, though it's fair to say that we can always benefit from both therapy and refactoring our code.

We recently decided on our own way forward for our crumbling video game portfolio. Our games were stuck with an outdated, well, everything. Outdated login system, outdated cloud saves, outdated engine version. You name it, it was out of date and in trouble and probably didn't work on a lot of modern devices.

After weighing the options, we decided to migrate the whole portfolio to a new web service while also clearing outstanding problems with the game engine and distribution platforms. Over half a million users used our legacy system, often with dozens of hours of their time invested into each cloud save. We migrated all that save data into our new system, which also required making major updates to local data storage and syncing for five games (each on 2-5 platforms).

We did all of this with zero downtime for our players.

Every step of that migration could have been a disaster, and pulling it off required a huge investment of development resources. So why did we do it at all? And, having decided to do it, how did we prevent disaster?

## Takeaways

- You can't _solve_ tech debt, but you can _mitigate_ it. Mitigation requires constant, low, overhead. In the long run that overhead is worth it.
- Sometimes the cost to clearing tech debt is so high, and the value of doing it so low, that starting over is the best path forward.
- Always try to reduce your feature set. You can cut more than you think.
- Don't try to solve every tech debt problem at once. Sometimes a partial solution now makes a future solution more difficult, but the alternative is always a difficult solution now.
- Make the migration small-batch deliverable to avoid the need for heroics (a core tenet of DevOps).
- Zero-downtime migration for a centralized system (like a web service) with decentralized clients (like games) can take this approach:
  1. Prepare the new system for (probably transformed) versions of the data.
  2. Have the old system start tracking whether or not each user's data has been copied to the new system.
  3. Change all parts of the old system that interact with the data from data processors into data tubes: first migrate the data to the new system, then act as a proxy to transform legacy requests into new ones (and new responses into legacy ones). This ensures that active users will have their data migrated on demand.
  4. Batch-migrate all data to the new system. This ensures that all inactive users will eventually have their data migrated, and can be done with lower-priority background processes.
  5. Turn off the old system.

## What's Tech Debt?

"**Tech debt**" is the set of constraints you face because of past technical decisions. Maybe you have old, messy code that is hard to update, or an application written in a no-longer-supported framework. You may even have perfectly fine code that no one on your current team wants to touch, because because that code forms the foundation of a fragile house of cards.

**Tech Debt is unavoidable**. Even if your programmers followed all the best practices and used the most reliable and effective technologies, tech debt is being created _externally_ all the time! New tools are constantly coming out, operating systems get updated, new phones (with more holes punched into their screens) come out every year and people are always refining best practices and inventing entire new ways of doing the work.

Every technical decision you make and every line of code you write is creating future technical debt. That means you can't "fix" tech debt. Resolving tech debt requires making changes, and every change is just future tech debt.

There is no escape.

But that doesn't mean we should throw up our hands and give up. Sure, every tech debt "fix" is a future tech debt problem, but the _scale_ of the problem matters. Incremental improvements make future problems smaller, and consequently make the size of future tech debt problems as small as possible.

This is why the "Leave it better than you found it" rule is such a strong, practical approach to tech debt. Instead of letting problems fester (or trying to fix _all_ the problems), you aggressively improve things the moment they impact your ability to move into the future, and otherwise leave things alone.

Having said that, sometimes you find yourself in tech debt so deep that everything is far harder than it should be. Every feature or bugfix is extremely costly, because your past decisions make all new changes difficult or risky. You can't even use the Boy Scout Rule, because the code is so convoluted that you can't just fix one thing. Sometimes it's all or nothing.

Sometimes the only solutions to tech debt are to either Just Walk Away (and hope for the best), or to Burn It All Down.

## BscotchID: Our Tech Debt

![BscotchID Logo.](https://img.bscotch.net/fit-in/640x480/logos/bscotchid.png)

When I joined the [Butterscotch Shenanigans](https://www.bscotch.net) ("Bscotch") team in 2014 the studio had already launched a few games. One of them, [Quadropus Rampage](https://www.bscotch.net/games/quadropus-rampage), had millions of downloads on mobile. New to the industry, I asked my teammates, "How do we tell all those people already playing our games about our _next_ game?" The answer was... we couldn't. In general, digital stores don't let us (as developers/publishers) reach out to the players who bought our games.

Surviving in the games industry was already hard enough, but not being able to roll one success into another by marketing to our existing players made it far harder. Even today most platforms don't allow developers/publishers direct marketing access to their game's players.

To solve this problem we needed to give users a reason to let us contact them. But users are extremely (and rightly) suspicious when companies ask for their email address. So while a simple newsletter signup would have been the easy _technical_ solution to this problem, the user incentives weren't high enough. We needed something fancier.

We settled on cross-platform save syncing (now common enough in the industry to have the shorthand term "cross-save") as that core feature. By providing a useful feature to our players, one that happened to require a user email address to work (and that wasn't being served by their existing accounts), we got the ability to email our users as a super useful side effect.

Thus the idea for BscotchID, our first cloud service, was born. We just had to, you know, actually build it. More specifically, _I_ had to build it; we were a three-person team, and the other two were busy making our games.

I'm a self-taught programmer. I had never done any significant web development, built software with a team, nor built any production-level software prior to joining Butterscotch Shenanigans. I was learning on the job, but without mentorship because I was the only "web developer" on the team.

Over about three months I built our BscotchID account system and all the in-game code needed to talk to it. I was unfamiliar with pretty much every part of the tech stack, so I learned just enough of GameMaker Studio (our game engine), PHP, MySQL, HTML, CSS, and JavaScript to get the job done.

If you're thinking that 3 months isn't much time for one person to learn an entire 6-technology stack and use that stack to build a production-ready and secure user account system, with all the features a user would expect (cloud saves, achievements, friends, messaging, leaderboards, etc.), with clean enough code to last long into the future, then, well, you're absolutely correct about that.

Shortcuts were required. Though, to be fair, I knew so little about development at the time that I didn't even know I was taking shortcuts. I'd never heard of test driven development, development/test environments, or even clean code principles.

After initially launching BscotchID and updating all our titles to use it, a significant part of my next ~1.5 years went into features and maintenance. After all of that no-idea-what-I-was-doing development time, BscotchID was a walking pile of tech debt. Here's a brief summary of the most glaring issues.

- BscotchID had no development version. (A "development" version is a separate copy of the software that doesn't talk to the same data as the "production" version, allowing for safe development and testing without risking negative impacts on real users) There was only production.
- I had no automated tests, nor even a checklist of manual tests. I ran custom tests _in production_ while working on specific parts of BscotchID. Then I just hoped nothing bad happened later.
- There was no build process. I had to upload changes were manually on a per-file basis. There was no way to know if local changes were actually propagated to production, nor if the production server and local files were synced.
- The code violated the DRY ("Don't Repeat Yourself") principle constantly. If I needed to fix something, it was likely I had to fix it in many places.
- Two different website domains, and two separate databases, collectively contained all code and data required to run the web features of Crashlands. The different code bases had to constantly reach into each other to implement things.
- There was no use of environment variables or feature flags (these are techniques to prevent in-development features from having an effect in production). I had to remember to turn things off or on before pushing code to production.
- Login security was... shaky at best. Fortunately the account management features were so limited that this shaky security didn't endanger private user info. If you're familiar with the (bad) concept of "Security through Obscurity", this was "Accidental Security Through Missing Features". Turns out it's pretty effective...
- "Security through Obscurity" was my primary security approach for features I _did_ have.
- Data was stored, well, stupidly.

As you might imagine, many, many things went wrong during BscotchID's development. Fortunately I knew that I didn't know what I was doing, so we designed all our web features around the idea that we couldn't trust them. All that said, BscotchID served its purpose surprisingly well, eventually accumulating over 500,000 users in its lifetime.

Eventually, though, BscotchID was too messy to safely update. We needed to do _something._

## Rumpus Is Born

![Rumpus Logo.](https://img.bscotch.net/fit-in/640x480/logos/rumpus-full.png)

When I built BscotchID I didn't know enough to ask the right questions about what technology to use. I didn't know to think about scaling issues or development environments. I hadn't heard of "clean code". I was using a dang _text editor_ to edit all of my code, because I'd found IDEs (Integrated Development Environments, a.k.a. Super Fancy Text Editors) to be too opaque and daunting. I was, at least, using source control, but even then basically as a backup system instead of as the powerful tool it can be.

Looking back, I can't believe I got away with it.

So when it came to fixing BscotchID, I wanted to do it "right" this time. With the knowledge I'd gained during BscotchID's development I was able to ask better questions and more easily identify resources. More importantly, the launch of our BscotchID-backed title, [Crashlands](https://www.bscotch.net/games/crashlands), in 2016 gave us the financial runway I needed to take the time to learn before doing.

After we'd launched Crashlands, I read technical book after technical book, took a mountain of online courses, and just all around tried to understand what modern web development (and professional development in general) actually looked like. The end result of all of this was that I wanted to use a completely different tech stack (a "tech stack" being shorthand for the collection of languages and software that are all required to create a functioning application). I wanted a stack that minimized the diversity of knowledge I'd need to do the work, leveraged new (but not the _newest_) tech, and that used current best practices. The stack I landed on was:

- Docker to containerize the application. ("Containerization" is a fancy term that means having your code run in, essentially, a simulated operating system whose properties you can guarantee are always the same. It allows you to guarantee that your production, development, and test environments are as identical as you can get, and also makes everything more portable.)
- Node.JS for the server, instead of PHP + Apache/Nginx. Node.JS is just JavaScript, but on the server. Since most of my time had been spent writing either server logic or JavaScript browser logic, this would allow nearly all of my development time to be in _one_ language instead of two.
- MongoDB for the database, instead of MySQL. MongoDB is basically just JavaScript yet again, so now I could cover _three_ parts of the tech stack with just one language!
- Vue.js for the front-end. Vue.js (and similar frameworks/libraries) allow for rapid website development. And yet again, it's just JavaScript! Okay, fine, it's also HTML and CSS, but there was never going to be an escape from those.
- Amazon Web Services (AWS) for server deployment. This would allow for infinite scalability, and for me to get to worry less and less about deployment details as AWS services were improved and added.

You may notice that the old BscotchID stack and my desired new stack had _zero parts in common_. To make the switch, then, I wouldn't be fixing up BscotchID until it was good; I'd be completely recreating it. This meant we had a major decision to make: do we just recreate BscotchID in this new tech stack, or do we make something new?

I didn't want to be hamstrung by the old decisions and designs of BscotchID, and the team agreed. We decided to make something new, and to ensure that our players understood that it was something else it also needed its own name. We called this new thing "Rumpus".

We knew that, someday, we'd have to figure out how to deal with having two independent login systems. But since we wanted Rumpus to be its own thing, not beholden to the past, we decided to leave that problem to future us.

And so I got to develop Rumpus with the exact feature set we thought it would need. We stripped away all the features that turned out to not be useful in BscotchID and invested a lot more time into generic data storage systems for all the use cases we knew our upcoming titles would need. I didn't have to worry about what kinds of data were stored in BscotchID, just what kinds of data we wanted in Rumpus. I rethought everything, and built much better systems that would give us enormous flexibility for adding a wide variety of web-based features to our games.

It was a beautiful time. Development was fast, the code base evolved and improved quickly, and eventually we had a shiny new toy that made it fun and _dependable_ to add web features to our games.

## The Tech Debt Bill Comes Due

Once the core feature set of Rumpus was complete it was finally time to pick up that can we'd kept kicking: what to do about BscotchID? There were a few options:

- Just walk away. It was (mostly) working with all our old titles, so we could leave it as-is until it eventually stopped working. At that point, we'd call it "unsupported", or simply turn it off, and move on with our lives. But this would mean abandoning half a million users, which didn't seem wise.
- Maintain it. No more features, but continued bug fixes to keep things working. But this would require maintaining two systems (BscotchID and Rumpus).
- Migrate BscotchID users into Rumpus, and leave the data behind. But this would negate the entire reason that all our existing users signed up for BscotchID accounts.
- Migrate BscotchID users _and_ data into Rumpus, and then turn off BscotchID. If we found a way to convert BscotchID accounts into Rumpus accounts, we'd get to keep all of our users and their data, while getting to sunset BscotchID.

There were good arguments to be made for all of these options, especially since the last option would be, by far, the most expensive. However, cost must not be measured only in developer time. We also had to account for the more nebulous cost of having not done that work. Losing access to our players, or creating a lot of ill will with our players, or permanently making our future efforts twice as hard by maintaining two systems, were all bad long-term strategies. And so we had to find a way to make BscotchID accounts into Rumpus accounts, and get all the old games off of BscotchID.

## Migration Part 1: Linked Accounts

![Levelhead Box Art](https://img.bscotch.net/fit-in/640x480/boxart/titled/levelhead.jpg)

At this point we were in the middle of development for our most recent game, [Levelhead](https://levelhead.io). Levelhead and Rumpus were developed together, with Levelhead taking full advantage of all the web features provided by the new web system. We needed to minimize how much development time we took away from Levelhead to work on the old portfolio.

But we still needed all our existing players to be in the Rumpus system before we launched Levelhead, so that we could make use of our updated newsletter system and so that users could log into Levelhead with their existing BscotchID-turned-Rumpus accounts. That meant that the first phase of migration from BscotchID to Rumpus had to leave BscotchID intact (for our old games) while making BscotchID users into Rumpus users.

The simplest way I could think to do this was to "link" BscotchID accounts to Rumpus accounts, and otherwise leave both accounts intact. In essence, BscotchID accounts would become children of Rumpus accounts. Instead of figuring out how to migrate BscotchID data to Rumpus, we'd have users manage their BscotchID accounts from within Rumpus but leave all the data where it was. By allowing both kinds of accounts to exist at once, but making them explicitly coupled to each other, we would introduce the idea to our players that a big change was coming. All while minimizing development costs and avoiding having to make other decisions before we knew all our constraints.

To "link" accounts, I did the following:

- Set up secure BscotchID-to-Rumpus triggers to ensure that every newly created BscotchID account caused creation of a new Rumpus account, using email addresses as the shared identifier. This would cause any _new_ BscotchID account to be guaranteed to be linked to a Rumpus account.
- Ran that same code against all already-existing BscotchID accounts. This would guarantee that every _old_ BscotchID account would be linked to a Rumpus account.

From there forward, all BscotchID accounts would then be associated with exactly one Rumpus account. But that association was invisible to users because it didn't do anything yet.

The next step was to move BscotchID account management into the Rumpus interface. The zero-downtime key to this was to first allow management via _both_ Rumpus and BscotchID, and later turn off management via BscotchID. I did this by keeping all BscotchID user data in the BscotchID database (instead of migrating it), and having the Rumpus server route change requests to the BscotchID server. In essence, the "link" was just a proxy that converted Rumpus requests into BscotchID requests.

To make the "link" visible and consequential to players, I did the following:

1. Set up Rumpus to take BscotchID password/username change requests and forward them to BscotchID, and updated BscotchID to handle those requests from Rumpus.
2. Set up Rumpus to be able to ask the BscotchID server for a linked user's data.
3. Added UI elements to our Rumpus-powered website to show linked BscotchID information (fetched from the BscotchID service) and to allowed users to submit username/password changes.
4. Turned off/redirected BscotchID account change requests initiated by BscotchID.

And BOOM, BscotchID was then a subset of Rumpus. No migration required!

The end result of this was that BscotchID data was still stored in the legacy system, the only piece of data being duplicated across systems was the BscotchID unique identifier (creating the "link"), users managed their Rumpus and linked BscotchID accounts in the same system, and we could use Rumpus for our newsletter and other systems.

You may be wondering if this confused our players. It did, a little, but because BscotchID had basically no functionality outside of our games most players were completely unaware of this new "link". Those players who did discover the link typically did so when trying to update their username/password. Players handled it quite well, and the large majority of the issues they reported were due to bad UI decisions instead of technical problems.

When Levelhead eventually came out, in May 2020, we were able to send our announcement newsletter to all our users, and our existing users were able to log into Levelhead, via Rumpus, without creating entirely new accounts.

## Migration Part 2: Legacy Game Data

![Crashlands Box Art](https://img.bscotch.net/fit-in/640x480/boxart/titled/crashlands.jpg)

At this point we'd linked BscotchID to Rumpus and launched our latest title, one that made excellent use of Rumpus and no use of BscotchID. But we still had BscotchID backing the rest of our portfolio, including a title that was performing well in the market (Crashlands). So we'd solved one of our problems, which was to make sure we could contact our old users through our new system. But we hadn't solved the other problem, which was to be able to abandon BscotchID.

We knew we had to make a major update to Crashlands so that it would use Rumpus instead of BscotchID, since otherwise we'd have to keep BscotchID around forever. Our other titles were performing, shall we say, _mediumly_, so we asked whether or not it would be worth also migrating those games.

Simply removing BscotchID from those under-performing titles and _not_ putting Rumpus in (severing them from all web functionality) would have been far easier and cheaper. But we figured that if we made the update for Crashlands then the incremental cost to also update the other games wouldn't be too high. More importantly, we'd get to _start_ with the other games, giving us lower-stress test cases in case things went horribly awry. In other words, by investing the extra effort into migrating the other games into Rumpus, we would get to reduce the risks of making costly mistakes on the performant part of our portfolio.

This was a lot more difficult than the original account linking. Not just because so much more data was involved, but because the cost of losing that data (player saves) was much higher and harder to recover from. Further, game installs are not centralized like web servers — we can't guarantee when or even if a player will update their copy of a game.

That led to several requirements:

- Legacy game installs must continue to work.
- Users must be able to swap back and forth between legacy and updated game installs without losing important data.
- All data must be fully migrated without error.

We could have taken a different, large-batch approach where we would schedule down time to shut down BscotchID completely, then migrate all data to Rumpus, and then release updated versions of every game on every platform all in sequence. That would have made for a terrible user experience, but that's not the main reason we took the incremental, zero-downtime approach. The main reason was that it would be a terrible _developer_ and _business_ experience. We'd have to perfectly synchronize updates across two web systems and five games, each of those games on multiple platforms, to minimize down time. You can't practice something like that, and you can't write tests for it. The risk is enormous. It requires _heroics_.

So then, how could we migrate all player data, while satisfying all our constraints, and do so in a heroics-free, incremental, _small-batch_ way?

Long story short, our strategy was to piecemeal convert BscotchID from a data processing and storage machine, into a dumb collection of tubes that would just forward data to Rumpus. And we needed to do this Ship-of-Theseus-style, swapping out one machine part for one tube, over and over, until eventually BscotchID was no more.

Before starting the conversion of BscotchID into a series of tubes, I had to deal with the fact that BscotchID _still_ only had a production environment. This migration was going to be complex and risky, so not having a proper test environment was, finally, too risky.

To that end, I first took the time to create a local development environment for BscotchID (meaning that I could run my own copy of BscotchID, with disposable data and automated tests, on my own machine). Notably, I didn't need _all_ of BscotchID to work in this development environment — just the parts related to the Rumpus migration. This simplified the problem dramatically, especially since BscotchID was just a collection of largely-independent PHP scripts. All I needed to do was make sure that any script I'd be converting into a Rumpus tube worked in the local environment.

Once the development environment was ready, the next step was migrating each type of data in turn. I did an audit of all the BscotchID data being used by our games and chose which we'd keep. We decided to leave most data behind. For each independent collection of data, I did the following sequence of steps:

- Determined how that data would map onto the completely different storage system of Rumpus.
- Made any feature changes to Rumpus to accommodate the incoming data (this was minimal, since Rumpus already had a wide variety of data storage options).
- Created a "migration table" in BscotchID to track whose data had been migrated.
- Turned each BscotchID script that made use of that data into a tube. Instead of doing all the normal work that the script used to do, like manage/fetch data in the BscotchID database, the new script-as-tube would convert the incoming request into one that would work in Rumpus and forward it along. (Prior to doing that, though, the script would check the migration table and, if this data for the current user hadn't been migrated, migrate it.) Then, the tube would take the reply from Rumpus and convert it back into the format that old game installs expected.
- Created test cases for the new scripts to ensure that the input/output relationship was exactly the same as the original, and that the data ended up in Rumpus as intended.
- Published these changes to production, causing every new request made by legacy game installs to use the new tubes instead.
- Batch ran the migrator part of those scripts on all existing data, so that users who _weren't_ actively making requests would still have their data migrated.

This whole process took about 6 weeks, and migrations were already happening in week one. I started with the data that would have the least user impact if I messed up (e.g. I migrated achievements before save data), so that I could learn from mistakes. By doing things piecemeal and with full backwards compatibility I was able to move my attention to other projects in the studio at any moment, even though the job was partially done. In fact, only about a third to a half of my time in those 6 weeks was spent actively working on migration.

At some point the job was just... done. BscotchID had become a bunch of tubes pointing sending data to Rumpus, and all the old data had been migrated.

The only bad thing about avoiding heroics is that completing large, difficult projects becomes anticlimactic.

## Migration Part 3: Game Clients

While I was sorting out all the server-side stuff with BscotchID and Rumpus, our gamedev team was updating _every_ game in our portfolio to rip out all the old BscotchID code and replace it with stuff that could talk to Rumpus. Collectively, that was at least 13 game variants (5 different games across various platforms) that all had to work in their specific context after being completely overhauled to use Rumpus instead of BscotchID.

The team first exported all the Rumpus-related code out of Levelhead (where it was developed) and into a standalone project that we call "BscotchPack". That allowed us to centralize updates and testing into that one project, and then export updated code and assets from BscotchPack into all the other games.

We then tackled one game at a time, in order of least- to most-popular (so that mistakes would impact as few users as possible), and set up tooling to make the BscotchPack import/export process easy. We fixed any common problems in the common code base, so that re-importing in all games would fix all problems.

Many parts of each game had to be updated to handle all the changes caused by switching to Rumpus. Just as with the web stuff, we broke everything down into isolated systems and tackled them one at a time, sending builds to QA every time we made progress on any system. Again, as with the web stuff, we identified all the places that the data was being managed and created tubes into and out of those systems. Thus, we could transform Rumpus-style data into BscotchID-style data and back, allowing us to leave as much game logic intact as possible.

The trickiest part was dealing with existing, local data. Not all players used our cloud saving service, and not all data was synced to the cloud anyway. We had to make sure that local, legacy data was properly detected by updated clients and converted into new, Rumpus-compatible formats.

The sticking point we couldn't quite solve was user sessions. BscotchID login security was less than ideal, and I didn't want to allow those sessions to directly access Rumpus. We decided to force users to log back in using Rumpus after updating to the new game versions. We had made the Rumpus login process as slick as we could (including integration with the native authentication systems on every platform), so for the vast majority of our users this was nothing but a minor annoyance.

As we finished each game, including mountains of internal QA, we launched each into public beta channels to identify more edge cases. The result was a slow rollout into beta channels over several weeks, which allowed major bugs to be found quickly with minimal impact on players. Once everything was in beta and no more major issues were coming in, we started full releases. We spooled this out one game per week, again from our least-popular to most-popular game, to again catch and fix issues early.

And then, again, at some point we were just... done. Without any heroics, we'd finished it. Our entire portfolio was now using Rumpus instead of BscotchID and players saw no significant disruption in service.

(Note that, as of writing, we are still waiting for Nintendo to accept our Crashlands update for the Switch. Importantly, this unexpected delay does not impact us, our players, or our business, because the zero-downtime-approach also creates robustness to external factors that are out of our control.)

## Hard Decisions: Dropping Platform Support

There are many points above where we had to make hard decisions. In particular, the decisions were usually between making _our_ lives harder, or making our players frustrated. We opt for the best player experience wherever possible. I think it's important to admit that we did have to make some decisions that went the other way.

In particular, while we did decide to update our entire portfolio, a component of that question I glossed over was, "on which platforms?"

As a studio, we are firm believers in the importance of a cross-platform strategy. This has turned out to be key to our survival as a business. However, supporting any given platform has a cost. When the cost is low, the more platforms the merrier. When the cost is high, we have to be careful: if we're spending development time on a platform that isn't generating revenue, we can quickly find ourselves in a business-endangering situation.

For Crashlands in particular, which had the broadest cross-platform strategy, we found ourselves in a pickle. Two operating systems we supported (Mac and Linux) and a few stores we were selling on were generating little revenue, while simultaneously becoming more difficult to support from a technical perspective. The difficulties were many:

- The operating systems and stores have changed over time (and will continue to do so), requiring updates to Crashlands for it to remain functional. But those non-Windows stores represent a tiny amount of revenue that doesn't justify continued (expensive) support.
- Our game engine does not maintain strong support for those same operating systems and stores (understandably, since engine-makers respond to the same market realities as game-makers). So even if we wanted to continue supporting them, we'd be plagued by bugfix delays while trying to convince our engine maker to fix issues that impact a miniscule fraction of their customer base.
- Rumpus itself is far more integrated with each store than BscotchID ever was, and so there is a substantial per-platform cost to make Rumpus work on each platform.

In other words, supporting those markets would be extremely costly, and maybe not even possible. We decided that the cost to migrate Crashlands to Rumpus on those operating systems and stores, and then the subsequent long-term maintenance cost, was simply untenable. That meant the Rumpus update would _not_ make its way to those versions of the game.

This was a huge bummer for us, from the perspective of wanting to provide our players the best experience possible. It's an even bigger bummer for that small subset of players who won't be able to get updates to Crashlands. But we've got employees to pay and limited time, and the extreme uncertainty of the games market makes it so that each new game might be our last. To survive we have to stick to high-leverage markets and dedicate as much development time as possible to creating new games and entering new, high-leverage markets.

## Conclusion

That was quite the journey, huh?

The problem of technical debt is a nuanced one. Whether or not you need to be more (or less) aggressive about mitigating it is not a simple question. The answer depends on the state of your business and your team, and your collective goals. Resolving tech debt always feels low-leverage, because it adds constant overhead for nebulous future gain. The part you don't see is that you also add constant overhead by _not_ mitigating tech debt. That overhead comes in the form of everything being more difficult (and therefore slower) and error-prone (requiring rework).

There's no "right" path to take when getting out from under particularly bad tech debt. As you read above, there were many points along this journey where we could have done things _completely_ differently. Many of those other ways of doing things would have also worked out, for better or for worse. We can't split the universe to A/B test high-cost decisions, we just have to do the best we can to balance our future and present needs.

The important thing was that at each decision point we evaluated all possibilities against our long-term business goals, our player's needs and preferences, and our own preferences. We collectively agreed on the path we thought would balance all of those the best. The end result was a massive and successful tech migration, and technical debt burndown, that our players hardly noticed. All without any heroics.
