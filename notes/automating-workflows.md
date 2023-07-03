# Automating Workflows

## Why Automate?

The high-level goals of automation are:

- Increase the resilience, scalability, and portability of our workflows
- Reduce human time spent on manual work and the consequences of errors
- Free up human time for high-leverage work
- Increase the leverage of human problem-solving skills
- Empower humans to do what humans do best: solve complex problems
- Empower robots to do what robots do best: exactly what you tell them to, the same way, every single time

No matter how competent a person is, all manual work requires discipline (and is thus fragile) and has high costs. The cost comes from the use of a person's brain and the *opportunity cost* of not using it for something else, plus the consequences of *errors*.

Given all the benefits of automation and the costs of manual work, in my studio we prioritize workflow development over nearly all other kinds of work. The process of evaluting workflows for automation looks something like this:

1. Make the workflow *visible,* and dissect the workflow into its specific, functional parts
2. For each part of the workflow:
    1. Evaluate human cost (time spend, context-switching, (un)pleasantness)
    2. Identify sources and rough likelihoods of errors
    3. Identify consequences and costs of errors
    4. Propose new/improved *automations* and/or workflows designed to minimize human-costs, likelihood of errors, and/or costs of errors. Estimate costs for each. (Don't forget the **can-we-not** principle!)
3. Use the evaluated costs and risks, plus the costs and risks of proposed automations/workflows, to choose and then implement any high-leverage workflow/automation changes.

The rest of this article provides definitions of the terms we're using, ending with a spring-board into the **HOWS** of automation.

## Definitions

Words are generally both fuzzy and overloaded in their definitions. The terms below are given precise definitions for our specific context — when you see those words, make sure you're interpreting their context-specific meaning correctly!

### What's an Automation?

> 💡 **An "Automation" is the use of a tool or process to reduce or make less fragile the human work required to accomplish some goal**

**Automations don't have to be *fancy*!** There are tons of tools that can be used to take work away from a person. Have a calculator? That automates the number-crunching once you've manually punched in the source data. Have a paper checklist? That automates the remembering of what needs to be done.

**Automations don't have to be *human-free*!** You don't have to wait until you can automate everything before automating *something*. Do you use hotkeys? Yeah, sure, you're still *manually* triggering something when you use your fingers to hit those keys. But! You've still reduced how much effort is required to do the thing by using those hotkeys! Have a long workflow to accomplish some goal, and can only figure out how to automate 5% of it? Hey, that's 5% less work you need to do (plus reduced errors)!

### What's a Workflow?

> 💡 **A "Workflow" is a collection of steps through which some entity is converted from one form into another.** (That entity could be some data, a physical item, or even an *idea*.)

*Note: There are synonyms and near-synonyms for "workflow" when defined in this way. Want to call it a "State Machine" instead, Mx. Fancy-Pants? Go for it!*

Workflows can be articulated at any level of abstraction. The trick is being *sufficiently precise* and *complete* while operating at a *sufficient level of abstraction* based on your *sufficiently-articulated goals*.

You might be thinking, "Wow, you sure said 'sufficient' a lot, what does that even MEAN!?" No one knows! That's why it's hard! There's never an objectively-correct answer to any part of that whole thing (sufficiency, completeness, abstraction level, goals). Figuring all of this out must always be an iterative process, and it's always a judgement call.

There are all kinds of ways to express and articulate a workflow. You can even make workflows for expressing workflows. It's workflows all the way down!

Basically, if something can *change*, then you can describe the *how* of that change with a workflow. 

Did your colleague say "Hello" over Discord, resulting in you saying "Hi!" back? That was a workflow. Or a collection of Workflows interacting with each other in a META-WORKFLOW. Or a collection of sub-workflows within a regular workflow. Again, there's no right way of thinking about it. You're in charge.

Here's one way you might describe that Discord "workflow":

1. `EnsureStudioDiscordFocused`
  - If Discord is not open, open it
  - If Discord is not in focus, focus it
  - If you are not in the Studio server, go to it
  - If you are not in the #brainstation channel, go to it
2. `SendDiscordMessageToColleague<YourMessage>`
  - `EnsureStudioDiscordFocused`
  - Type `<YourMessage>` into the text box and hit <kbd>ENTER</kbd>
3. `ReadDiscordMessage`
  - `EnsureStudioDiscordFocused`
  - Use your human eyeballs to read the latest stuff
  - If the latest stuff includes a salutation from a colleague, `SendDiscordMessageToColleague<"Hi!">`

Was that workflow description *sufficient*? The answer is... "Sufficient *for what?* The question doesn't even make sense since I haven't expressed any goals." 🤪

### What's "Discipline"?

> 💡 **"Discipline" is the ability to reliably get something done, in a particular way, without something guaranteeing that outcome.**

When we say that something "requires Discipline" we mean that a person could do it wrong, or not at all, because some aspects of the work lack mechanisms that would guarantee a correct outcome.

While *having* discipline is a great trait for a person, *requiring* discipline is a terrible trait for workflows. Things that require discipline are fragile, non-scalable, and non-transferable.

### What's "Fragility"?

> 💡 **Something is "Fragile" if it is possible for it to be done incorrectly.**

Fragility is a spectrum. Just how fragile something is is based on:

- How many ways it can go wrong
- How likely it is to go wrong in each of those ways
- The consequences of it going wrong in each of those ways

Note that automated systems are not *resilient* just because they're automated! Automations do things the same way, every time. But they can be told to do the *wrong* thing! And automations aren't magic: something has to make them run and get data into and out of them. Those things can fail, too.

A thoroughly annotated workflow will reveal all of the places where things can go wrong. Automations can dramatically reduce the *number of places* where things can go wrong, reducing overall fragility but *still resulting in a fragile system*.

You must remain vigilant and make sure that workflows are working when and as intended, whether they are manual or automated. By having good reporting, alerts, and logging mechanisms for workflows, you can move manual workflows from *fragile* to *less fragile*, and automated workflows from *less fragile* to *resilient*!

If you're ever able to walk away from an automated workflow with complete confidence that it either will not fail or that, if it does, that failure will be properly handled, then you have completely nailed that automation.

## How, though?

Historically we've relied on skilled computer programmers to propose, plan, implement, and maintain the majority of workflow automations. While the results of such projects can be quite spectacular and powerful, they're also *extremely expensive*. So expensive, in fact, that our programmers can never have enough time to automate all of the things that need automating. And that's assuming that there are even programmers available in the first place

While some things can only be automated with the help of a programmer, *most* things can be at least partially automated by anyone with a little creativity, curiosity, and some elbow grease (ew?). 

To become an automagician you don't *need* to be an expert programmer, or know the ins and outs of how computers work. What you need is:

- **Curiosity**. Explore the tools you use, and new ones, to discover neat things you can do. Get in there! Try stuff! Experience new things!
- **Precision**. People can get an amazing amount of useful work done despite being pretty dang imprecise about that work. Not so for tools! Tools do *what you tell them to,* not *what you want them to*. That nuance is super important, and the main reason that automation is difficult. You have to actively work to be much more precise than you're used to. Can a word mean two things in the context of your workflow? That's too many things!
- **Creativity**. Nothing is set in stone. Nothing is sacred. Just because something was designed for one purpose, that doesn't mean you can't turn it sideways and use it for something else. To gain the mystical powers of robomancy, you must pay attention to what things *can do*, not what they "*are for*". Use email as a database! Make your lights flash when your front door opens! Use file names as documentation! GET WEIRD.
