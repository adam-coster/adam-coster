_(This post was excerpted and adapted from [a longer Dev Chat newsletter post](https://www.bscotch.net/post/devchat-9).)_

Because of the tools that make up the center of our ([Butterscotch Shenanigans'](https://www.bscotch.net)) technical ecosystem, we're constantly bumping into this common theme:

- We're using bleeding-edge versions of every tool, because the bugfixes and new features in those versions are worth the risk of instability.
- We're constantly running into edge cases that seemingly no one else has seen before, and have to solve these ourselves.

How did we end up here?

We could pat ourselves on the backs and claim that it's because we've become such experts in our tools, and are doing such amazing stuff in games, that we're pushing the envelope and this is the only possible outcome of that fact.

But... we can't possibly be _that_ special. The number of people out there making games and webtech, building pipelines, and practicing DevOps principles is _huge_. There are _definitely_ a lot of people out there who know far more than we do about our tools and the kinds of problems we're solving. So why do we keep finding ourselves feeling like there's no one out there to help us?

There is a lot of nuance here and no clean, simple explanation. But there is something foundational at play: what I'm going to call the "Onboarding/Expertise Paradox".

In short, the Onboarding/Expertise paradox is that you choose long-term paths leading to _eventual_ Expertise based on initial, limited knowledge and experience (Onboarding). By the time you've developed the experience needed to truly evaluate that choice you made eons ago, you've not only already made that choice but are _deeply invested_!

You can't know the full features, nor the full limitations, of something until you're an expert in it. To become an expert in it takes time and deliberate practice but, more importantly, requires that you _decide to invest the time in the first place_.

Everything out there has an alternative, so why choose one over the other? There are two major factors: social proof and the onboarding experience. All the social proof in the world can't overcome terrible onboarding. Further, social proof is a bad guide because almost no one out there will be an expert in even just _two_ of your competing alternatives at the same time.

And why would you follow the advice of experts in _one_ thing about the _other_ thing?

When Seth (our game programmer) got started making games -- uh, a decade ago? -- he didn't know anything about the discipline. He didn't know how to program, wasn't an artist, and hadn't the foggiest idea of what it would take to build a game from scratch. He'd tried to learn programming at various points, and tried to find self-teaching materials about making games, but overall the _onboarding was terrible_ for the games industry.

But then he found [GameMaker](https://gamemaker.io). The onboarding experience that GameMaker provided, specifically to a _complete game-making newb_, made it one of the very few tools that Seth _could_ have decided to use to make games.

Now here we are, something like a decade later, and Seth is a true expert in making games with GameMaker. Further, we've invested enormous time and resources into building a full ecosystem around the ins-and-outs of GameMakers capabilities and issues ([much of it open source](https://github.com/bscotch)!). The cost of switching to another ecosystem would be staggering, and so even if we _could_ afford it we'd only do such a thing if it was obviously worth putting game-making on hold for, oh, a _year_ while also trying to find a way to keep our existing games viable within a tech ecosystem we'd eventually abandon...

In short, the pressure to stick with the tech ecosystem that Seth chose _a decade ago_ when he knew _literally nothing about gamedev_ is enormous.

Okay, so that story brings us back to the Onboarding/Expertise Paradox. Seth could not possibly have known about the kinds of issues he'd be running into _ten years later_ as a GameMaker expert when he adopted GameMaker. He chose it because its onboarding process was exactly what he needed at the time.

Aside from some frustrating limitations of GameMaker, the biggest problem we face is just how small the community is. In any community, the proportion of people you can lean on for help, or hire, or who can help you lobby the engine maker for common needs, is going to be small. There are always far fewer people trying to make games for a living than doing so as a hobby, and within that group far fewer still who are making games with similar technical issues to yours. So the smaller the community is, the harder it becomes to find those proportionally rare comrades. _Especially_ when your technical needs are truly rare.

A few times a year we find ourselves re-asking the question, "Do we need to switch to Unity/Unreal?" As I noted, the cost of doing so would be horrifying, so practically the answer has always been and will continue to be a solid NOPE. But even beyond that, we'd yet be making another decision in the absence of true knowledge about what it would mean to be an expert in the new engine. We'd inevitably find ourselves in exactly the same situation, just with different details.

I'm dealing with the same thing for Rumpus (our webtech) right now. I chose to use Vue instead of React for the front-end (the part you see when you visit [bscotch.net](https://bscotch.net)) because it was far more fun and accessible back when I learned just enough of the two to make an "informed" decision. But again, that decision was informed by the _onboarding_, not on _expertise_.

And here I am, having just upgraded from Vue2 to Vue3 and converted it from vanilla JavaScript to Typescript, now stuck with broken Intellisense and some bugs that are giving me a super hard time. I'm stuck at another proportional intersection: a Vue project within a full-stack mono-repo (if that means anything to you you'll be surprised that it matters, but it does!), using Typescript, running from within a Docker container, using VSCode as my editor. The Vue community is small enough that there just aren't many people out there in the same situation as me, and even finding experts to hire as consultants to help solve my problems is a huge challenge.

As with GameMaker, I'm invested. I've already built a sprawling website in Vue. To change tech stacks I'd have to first learn enough React to match the expertise I have in Vue, so that I would know that I could port every feature. And then I'd have to do the actual work!

And after all that, I'd eventually find myself as a React expert, completely bummed by some set of issues within _that_ tech stack, wondering if it's time to switch to whatever the coolest tech stack is at that time...

The cherry on top of this problem is that _the world changes around you_ while you develop expertise and your past decision deepens its hold on you. No matter how appropriate a decision was at the time, its _current_ alternatives could appear to be preferable at any moment.

So what's the summary here? I guess it's that the Onboarding/Expertise Paradox is a _statement of an intractable fact_. You can't know what will happen in the long term, and you can't know enough about most things to make a fully-informed long-term decision about them even in the short term.

Probably the most useful realization stemming from this fact is that it _probably_ is not worth swapping one long-term decision for another after you've found the holes in the first one. After all, there are holes in the other one two; you just won't see them until it's too late.
