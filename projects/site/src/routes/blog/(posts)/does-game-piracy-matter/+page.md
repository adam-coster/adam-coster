You spent two years and an enormous amount of human time and resources building your game. Your source code was locked down, people couldn't wait to get a hold of what you'd made, and the thing was done, tested, and ready to go. You launched it, and watched the numbers climb.

But then you compared those numbers to your revenue... and discovered that _most_ of your users hadn't paid you a dime!

After all that hard work, people are just _taking_ your game! You would have been far more financially successful, if it wasn't for all that piracy!

Right?

Well, maybe. But probably not.

## Everyone's a pirate. (Statistically speaking.)

Years ago, when I was but a wee lad, [I dug into this problem](https://www.bscotch.net/post/pirates-gonna-pirate) with our free-to-play mobile games. In those games, we put our own server into the purchasing loop so that we could detect fraudulent purchases with high reliability. The results weren't surprising: the large majority of "purchasing" players were using fraudulent means.

But we also got to ask a follow-up question: because we were _blocking_ the fake purchases, how often did blocked users go on to make a _real_ purchase? In other words, how many purchases were we missing out on _because of piracy_? In _even other_ words: What was the direct cost of piracy?

The answer was: 1-5% of revenue. That was the fraction of our revenue that came from blocked pirates who went on to make a purchase.

Look at those numbers. They're tiny. Especially in proportion: pirates make up the _majority of users_ but converted pirates make up _a tiny sliver of revenue_!

So... what? What's the takeaway?

At that time, the lessons learned were:

1. Most users are pirates.
2. Nearly all pirates would _prefer to not have the content at all_ than to pay for it.
3. Therefore pirates are not costing us significantly in lost sales.
4. And, further, it is not worth investing in strategies to _convert_ pirates into paying players.

However, this was for purchases made _inside a free game_. On the one hand, that likely makes the piracy incentive a lot lower than in pay-up-front games. On the other hand, that lower purchase incentive probably makes it a lot harder to convert a pirate. It's anyone's guess how that balances out.

The numbers will vary dramatically from game to game, platform to platform, and by monetization strategy, but one thing remains true: **if it is possible to pirate your game, most of your players will be pirates**.

## Does it matter?

So then, the question. _Does it matter?_ And, subsequently, _Should I do something about it?_

As always, it's all about context.

The primary questions to consider are:

1. How costly is it to prevent enough piracy to have a meaningful impact? The more piracy you want to prevent, the more costly the solution, and the more likely that your solution hurts your paying players. How much development time, or capital (if you're buying an off-the-shelf solution), are you willing to throw at this problem?
2. What is the _likely_ rate at which a player who _would pirate the game_ would _purchase the game if they couldn't pirate it_? It's definitely low, but could still make up a meaningful portion of total possible revenue. Will you make as much back as you spent?
3. How does the _existence_ of pirates impact your other players? If you have a single-player game, probably not much. Multiplayer is a different story. If you have an in-game player economy, or in-game currency that changes the player experience, non-paying players will wreck your economy. Worse, they'll always have _more_ and _better_ stuff than paying players, who will become extremely resentful of those players. Your paying players will become angry at _you_ for _letting this happen_.
4. How adversarial do you want your relationship with pirates to be? Almost all of your _potential_ players are pirates. For a potentially-popular game, that can be an enormous number of people. Can your community management and customer support teams handle the stress induced by a jillion angry people?

If you've got a single-player free-to-play game, the answers to those questions are likely quite different than if you have an MMO with a real-currency-backed in-game economy.

The problem of piracy is an emotionally charged one, but you'll need to somehow set that aside to objectively evaluate all the above points. Your anti-piracy measures should be designed _exactly and only_ to bring the least harm to you, your business, and your paying players.

Anti-piracy measures _should not about the pirates._

## Our approach

We don't want to spend our time and resources fighting piracy. It's exhausting, expensive, and, frankly, doomed from the start. We want our time going into making games and building an amazing community. Ideally our anti-piracy results are a consequence of the stuff we _want_ to be doing, instead of something we have to put front and center.

### Design with piracy as a constraint

If we can't stop piracy, how can we design around it? For us, that means taking _the fact of piracy_ into account when we design our games and web services. We prefer designs wherein piracy _does not matter_ (e.g. single-player games). When that isn't possible, we design to minimize its impact.

### No open hostility

We certainly don't condone nor accept piracy, and do explicitly tell our players so when the topic arises. We also don't allow players in our communities to advocate for or help others pirate games. But when we do discover pirates in our midst we _stay friendly_.

Many pirates are kids who don't have access to financial resources, or people in countries where we don't even officially have our games available, or people who just flat out can't afford to buy our games. Even though we don't like what they're doing we start with empathy. We gently encourage them to buy the game when they can, express our preference that people don't pirate our games, and then change the subject.

We also don't design punitive measure into our games or services. Sure, we joke about having our games change when we detect piracy to make the player's experience frustrating in some way. But at that point it would be us being unempathetic jerks. And for what?

Our non-hostile approach has helped foster a super positive community, including a handful of converted pirates, but more importantly has been essential for our team's mental health. Adversarial relationships take a terrible toll.

### Minimize support costs

Most of our (and your!) players are pirates. Therefore most of our support resources could go to people who aren't even paying us. Support is expensive; even without those pirates, minimizing support cost is an essential business goal. We do this by:

1. Minimizing the need for customer support.
2. Minimizing the fraction of support issues that require human intervention.
3. Minimizing the cost of real-human support.

These look super obvious, but what it means to _do_ them absolutely is not.

It seems like a dumb truism that if your game doesn't create support issues then you won't have to deal with any. The equivalent to gamers' "GET GUD". But this isn't as dumb as it sounds, because _future support tickets_ are a _hidden and constantly growing future cost_ of bugs and UX problems. Quality is always one of the first things to go when a deadline is coming up. One issue you decide to let slide today could cause a dozen, or a hundred, or _thousands_ of downstream user support tickets!

We invest _heavily_ in automation, tooling, testing, process improvements, and quality assurance. Fully 1/6 of our full-time team is QA. Only 1/3 of our team is directly building games, the rest is clearing the runway and building infrastructure. We have as many part timers as fulltime staff, all of whom are also doing QA. We have no dedicated support team, because we see the need for human-based support as a quality control issue. (Our developers handle support requests, which strongly incentivizes quality work first and development of self-service fixes second.)

Everything that can be automated, is. From our patch notes, to our builds, to delivering those builds to QA and into platform cert. By investing so heavily in this, our lives as developers are much happier, our game quality goes way up, we're never putting out fires or crunching, and _the need for customer support goes way down_. We can get fixes into cert (the process by which a platform decides if we've followed their rules and don't have a broken game) in _hours_ if needed, and then usually get through cert on the first go. Being able to rapidly and cheaply deploy fixes is our most effective strategy of preventing _future_ support tickets.

Nothing is perfect, however. There will always be issues that end up hitting our human team. And so we come to the customer support funnel: when users go looking for help, they first find self-service and community options and, when those _have been exhausted_ (without being exhaust*ing*), they end up in human support _only if it's likely that a human can help_. If not, the self-service system informs the player and explain their options (how to get a refund, which 3rd party to contact for support, etc).

It's difficult to thread this needle. If it's too hard for users to get answers they come to us as adversaries, which sucks for everyone and destroys our mental health. Throughout the funnel, we find ways to remind visitors that the staff are people just doing their best. One way is to convey that we're real people through how we write the docs. The other is more explicit: at any point where a user would be contacting us directly, we casually note that we're a small team, and we spend as much time as we can making new games, and that we'll get to their request as soon as we can but it might take a while, etc. We send a confirmation email upon support request that re-iterates the same concepts. This feature alone prevents a surprising fraction of tickets from landing on our human laps.

Finally, when support issues do hit our human team, our staff are armed to the teeth with tools and knowledge to fix those issues efficiently. This is a design, training, and technical problem. For example, one enormous advantage we get from using our own user login and save-syncing system, and putting player data on the web, is that we can remotely fix all manner of issues that would otherwise be either impossible or very costly to support teams.

So... what about the piracy part of this problem?

Mostly it's that the cheaper it is to do customer support, the less we even need to worry about piracy in the first place. But it turns out that pirates aren't that dedicated to getting support. For example, wherever players can contact us directly, we have them go through a series of checkboxes saying things like:

- My game is up to date.
- My operating system is up to date.
- My device is compatible with this game, according to the store page.
- I know that there is a real person on the other side of this form.
- **I have a legal copy of this game.**

Just as the customer support funnel leaves all but the toughest problems (and, let's be real, the most difficult customers) out of human hands, there is a pirate-behavior funnel doing the same. Notably, we've found that pirates are far less likely to log into our games or services in the first place, and appear to be quickly dissuaded by the mere mention that we don't provide support for illegitimate game copies (which we say in as friendly a manner as we can).

The end result of all this is that we deal with very few support tickets, and almost none of them are from pirates.

Support services, if set up with piracy in mind, can be anti-piracy tools in and of themselves.

### Use web services

Because we roll our own web services, the main direct cost of piracy, after support, is non-paying players using our services. Unlike with customer support, which tends to kick pirates out early, pirates will absolutely use every web resource you provide. If you don't kick them out somehow, most of your web costs will be created by non-paying users.

For a real-time multiplayer title this would be a significant problem, because the per-user cost is relatively high. For our lighter-touch, mostly asynchronous, and custom-built services, our per-user cost is very low. Even still, web resources aren't cheap.

Fortunately this is _the one place_ where there are truly cost-effective anti-piracy measures. They certainly aren't bulletproof, but they can knock piracy way down. The moment there is a server in the loop, and one that you own, you can start checking authentication tokens and license data, you can have your server talk to official platform servers to verify things, and you have many tools at your disposal to kick players out and keep them out. A corollary of this is that adding online features to your game can be an effective way to reduce both piracy and its impact.

Our strategy is to put no costly piracy protections on the game itself, and to instead gate login and online content behind server-verified game ownership. The key benefits of doing things this way are:

- We don't create antagonistic relationships with pirates, since they still have access to offline parts of the game.
- Paying players don't feel like things are unfair, because they get access to more content.
- Pirates consume minimal web resources from us. Primarily just limited telemetry!

The key to this approach is in having content locked behind login, or being online, in a way that _makes sense to the player_. Players hate making new accounts, and they hate online-only games. We provide cross-platform cloud saves and, in the case of our latest game [Levelhead](https://www.bscotch.net/games/levelhead), cross-platform user-generated content. This makes sense to players because they're used to their existing accounts not working cross-platform.

## So... does it matter?

Yes! As to exactly how... it depends. Piracy, and its impact, is a nuanced topic. Whether you need to worry about it, or do anything about it, completely depends on your particular scenario. The key things to remember while you're evaluating all this for your game are:

- People will try to steal your game. Huge numbers of them. This is just the _reality_. Treat it as a _design constraint._
- This is a _business_ problem. Do your best to ignore how you _feel_ about it. Yes, this is far easier said than done!

Now get out there and make something worth stealing!
