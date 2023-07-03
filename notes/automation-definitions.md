# Automating Workflows

[Automation Tools & Concepts](Automating%20Workflows%201c0edff99bdd42d1b0585993e9807424/Automation%20Tools%20&%20Concepts%201890aa6e9b3b4038961247ede20ea733.md)

## Why Automate?

The high-level goals of automation are:

- Increase the resilience, scalability, and portability of our workflows
- Reduce human time spent on manual work and the consequences of errors
- Free up human time for high-leverage work
- Increase human problem-solving skills
- Empower humans to do what humans do best: solve complex problems
- Empower robots to do what robots do best: exactly what you tell them to, the same way every single time

No matter how competent a person is, all manual work requires discipline (and is thus fragile) and has high costs. The cost comes from the use of a person's brain and the *opportunity cost* of not using it for something else, plus the consequences of *errors*.

Given all the benefits of automation and the costs of manual work, all workflows at Bscotch are expected to be frequently audited and revised (in collaborations!). That process looks like this:

1. Make the workflow *visible,* and dissect the workflow into its specific, functional parts
2. For each part of the workflow:
    1. Evaluate human cost (time spend, context-switching, (un)pleasantness)
    2. Identify sources and rough likelihoods of errors
    3. Identify consequences and costs of errors
    4. Propose new/improved *automations* and/or workflows designed to minimize human-costs, likelihood of errors, and costs of errors. Estimate costs for each. (Don't forget the can-we-not principle!)
3. Use the evaluated costs and risks, plus the costs and risks of proposed automations/workflows, to choose and then implement any high-leverage workflow/automation changes.

The rest of this doc provides definitions of the terms we're using, ending with a spring-board into the HOW of automation.

## Definitions

Words are generally both fuzzy and overloaded in their definitions. The terms below are given precise definitions for our specific context — when you see those words, make sure you're interpreting their context-specific meaning correctly!

### What's an Automation?

> **An "Automation" is the use of a tool to reduce the amount of human work required to accomplish some goal**
> 

**Automations don't have to be *fancy*:** There are tons of tools that can be used to take work away from a person. Have a calculator? That automates the number-crunching once you've manually punched in the source data. Have a daily checklist being auto-added to your work management system? That's a whole bunch of automations: a thing that watches the cloc and then sends a trigger at a certain time; a thing that creates a card in response to that trigger; an already-existing list of tasks on that card; a checkbox system used to make that card, allowing you to simply click the item to indicate that it's done (instead of having to delete it, or manually add a strike-through, etc); and so on!

**Automations don't have to be *complete*:** You don't have to wait until you can automate everything before automating *something*. Do you use hotkeys? Yeah, sure, you're still *manually* triggering something—but you've reduced how much effort is required to do that thing by using those hotkeys! Have a long workflow to accomplish some goal, and can only figure out how to automate 5% of it? Hey, that's 5% less work you need to do (plus reduced errors)!

### What's a Workflow?

> **A "Workflow" is a collection of steps through which some entity is converted from one form into another.** (That entity could be some data, a physical item, or even an *idea*.)
> 

*Note: There are synonyms and near-synonyms for "workflow" as defined this way. Want to call it a "State Machine" instead, Mx. Fancy-Pants? Go for it!*

Workflows can be articulated at any level of abstraction; the trick is being *sufficiently precise* and *complete* while operating at a *sufficient level of abstraction* based on your *sufficiently-articulated goals*. You might be thinking, "You said 'sufficient' a lot, what does that even MEAN!?" No one knows! That's why it's hard! There's never an objectively-correct answer to any part of that whole thing (sufficiency, completeness, abstraction level, goals). It's all about practice and collaboration.

There are all kinds of ways to express and articulate a workflow. You can even make workflows for expressing workflows. It's workflows all the way down!

Basically, if something can *change* then you can describe the *how* of that change with a workflow. 

Did your colleague say "Hello" over Discord, resulting in you saying "Hi!" back? That was a workflow. Or a collection of Workflows interacting with each other in a META-WORKFLOW. Or a collection of sub-workflows within a regular workflow. You're in charge.

- Example pseudo-programming way of describing that Discord example as a workflow:
    - EnsureStudioDiscordFocused
        - If Discord is not open, open it
        - If Discord is not in focus, focus it
        - If you are not in the Studio server, go to it
        - If you are not in the #brainstation channel, go to it
    - SendDiscordMessageToColleague<YourMessage>
        - EnsureStudioDiscordFocused
        - Type <YourMessage> into the text box and hit ENTER
    - ReadDiscordMessage
        - EnsureStudioDiscordFocused
        - Use your human eyeballs to read the latest stuff
        - If the latest stuff includes a salutation from a colleage, SendDiscordMessageToColleague<"Hi!">

Was that workflow *sufficient*? The answer is... "The question doesn't make sense since I haven't expressed any goals." 🤪

### What's "Discipline"?

> **"Discipline" is the ability to reliably get something done, in a particular way, without something external guaranteeing that outcome.**
> 

When we say that something "requires Discipline" we mean that a person could do it wrong, or not at all, because some aspects of the work lack external mechanisms that would guarantee a correct outcome.

While *having* discipline is a great trait for a person, *requiring* discipline is a terrible trait for workflows. Things that require discipline are fragile, non-scalable, and non-transferable.

### What's "Fragility"?

> **Something is "Fragile" if it is possible for it to be done incorrectly.**
> 

Fragility is a spectrum. Just how fragile something is is based on:

- How many ways it can go wrong
- How likely it is to go wrong in each of those ways
- The consequences of it going wrong in each of those ways

Note that automated systems are not *resilient* just because they're automated! Automations do things the same way, every time. But they can be told to do the *wrong* thing! And automations aren't magic: something has to make them run and get data into and out of them. Those things can fail, too.

A thoroughly annotated workflow will reveal all of the places where things can go wrong. Automations can dramatically reduce the *number of places* where things can go wrong, reducing overall fragility but *still resulting in a fragile system*.

You must remain vigilant and make sure that workflows are working when and as intended, whether they are manual or automated! By having good reporting, alerts, and logging mechanisms for workflows, you can move manual workflows from *fragile* to *less fragile*, and automated workflows from *less fragile* to *resilient*!

If you're ever able to walk away from an automated workflow with complete confidence that it either will not fail or that, if it does, that failure will be properly handled, then you have completely nailed that automation.

## How, tho?

Historically we've relied on skilled computer programmers to propose, plan, implement, and maintain the majority of workflow automations. While the results of such projects can be quite spectacular and powerful, they're also *extremely expensive*. So expensive, in fact, that our programmers can never have enough time to automate all of the things that need automating.

While some things can only be automated with the help of a programmer, *most* things can be at least partially automated by anyone with a little creativity and elbow grease. 

To become an automagician you don't *need* to be an expert programmer, or know the ins and outs of how computers work. What you need is:

- **Curiosity**. Explore the tools you use, and new ones, to discover neat things you can do. Get in there! Try stuff! Experience new things!
- **Precision**. People can get an amazing amount of useful work done despite being pretty dang imprecise about that work. Not so for tools! Tools do *what you tell them to,* not *what you want them to*. That nuance is super important, and the main reason that automation is difficult. You have to actively work to be much more precise than you're used to. Can a word mean two things? That's too many things!
- **Creativity**. Nothing is set in stone. Nothing is sacred. Just because something was designed for one purpose, that doesn't mean you can't turn it sideways and use it for something else. To gain the mystical powers of robomancy, you must pay attention to what things ***can do**,* **not** what they "*are for".* Use email as a database! Make your lights flash when the GamePipe crashes! Use file names as documentation! GET WEIRD.

The above items are the *personal* things you need. After that it's all about 🌟🌈 *the more you know*. 

### Step 1: Explore the Tools of the Trade

I've put together a bunch of information about automation-related concepts and tools, meant to provide a starting point for deeper exploration and for tackling specific problems. I recommend reading through all of it to get yourself oriented, even if you don't have a specific project in mind yet. It's a lot, and you shouldn't expect to be able to remember all of it, but it should give you enough exposure to things to make all of your future plans easier.

### Step 2: Learn Integromat and Automate Something!

In Step 1 you'll have been exposed to all kinds of stuff, including the service Integromat. From there the next step is to automate something. Integromat is the perfect place to get started, since it's pretty likely that there's *some* problem you have where plugging two services into each other would be somehow helpful.

Go back to the [Integromat section](Automating%20Workflows%201c0edff99bdd42d1b0585993e9807424/Automation%20Tools%20&%20Concepts%201890aa6e9b3b4038961247ede20ea733.md) to review it, and then explore the learning resources provided by Integromat to do some guided experimentation.

Once you feel like you know your way around Integromat go look through the Problems Board, or dive deep into one of your daily workflows (even those that seem easy) to try to diagram them. From there you should be able to discover *something* you can tackle with Integromat (you can always bring someone else in to co-brainstorm). Write it up as a goal (what you're trying to do and why) with a user story (or a few), and then collaborate with a teammate to tell them how you think you're going to implement that story. Then hop to it!