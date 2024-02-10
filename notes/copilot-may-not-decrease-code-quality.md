[GitHub Copilot](https://github.com/features/copilot) and similar technologies are the focus of many debates. Are they ethical? Are they useful? Are they going to leave us in a worse place than we are now?

These are all important discussions, and we should be having them. For most of these discussions we're limited to using *reason*, *ethics*, and *philosophy*, rather than *science*, because most of our questions cannot be answered by analysis of the available data.

So what happens when people *do* try to apply scientific analysis to these questions?

Mostly just unsupported claims decorated with the trappings of scientific rigor.

Here I want to dive into one of those questions:

> Do <abbr title="Large Language Model">LLM</abbr>-based code-completion tools (like GitHub Copilot) reduce code quality?

My short answer is: no, but also yes, because it depends on what you mean, but even then there's no way to know.

## How Would I Know?

A fair question when anyone claims to have an answer (or, in this case, a non-answer)!

I'm a skeptic at heart and by training.

While I've got a PhD to my name, that was in Cell & Molecular Biology rather than anything in computer science. So I'm no expert on Large Language models, by any metric. But I've spent a lot of time evaluating claims and data!

I've been programming full time for a decade and dabbled for years before that.

I use GitHub Copilot daily and find that it suits my use cases well. I use ChatGPT on occasion, usually also for programming-related problems.

I treat these tools as *assistive technologies* whose output I *inherently distrust* and evaluate before accepting. In other words, I treat their claims the same way I treat claims made by *people*.

## What *is* "Code Quality"?

Back to the topic at hand.

Before we can decide if the use of LLMs *could* have an impact, negative or positive, on Code Quality, we need to know what we even mean by that.

And this is where we run into our core problem: there is no generally agreed-upon definition of Code Quality. Which means that our answer is already... *SHRUG*

But we should still give it an honest try, so let's talk about some of the things that people tend to associate with Code Quality.

### Code <abbr title="Don't Repeat Yourself">DRY</abbr>-ness

"Don't Repeat Yourself" is one of the strongest clean-code mantras out there. While it lacks nuance, it's an excellent base heuristic for organizing code.

The core idea is simple: if your code is re-used, rather than written in duplicate, it's easier to maintain because you just need to maintain the one copy.

It of course also means that if you mess something up, you've messed it up *everywhere*. And it's also the base reason why, in web development, we lean so heavily on 3rd party [npm packages](https://www.npmjs.com/). After all, a natural extension of DRY is <abbr>DRO</abbr>: Don't Repeat Others.

Sometimes it *is* better to Repeat Yourself. Or to Repeat Others. As with everything, it depends.

### Code Quantity

All code is a liability, since it can contain bugs and must be maintained. Therefore the less code you have the better!

Unless your code becomes unreadable because you made it so concise.

Or unless you end up with no code at all. (Though sometimes that's the best outcome.)

### Code Performance

More-performant code is of higher quality than low-performance code, right?

It depends:

- Is the code an actual bottleneck in the application?
- Is the code maintainable?

If the code isn't a bottleneck, the higher-quality version of that code may sacrifice performance for other markers of quality (Readability, DRY-ness).

And particularly-high performance often requires leveraging deep nuances within the system that future maintainers may not be aware of. Or may require a decrease in readability. In either case, we often have to trade readability for performance.

### Code Readability

The truism really is true: code is (usually) read a *lot* more than it is written. Therefore readability makes for better maintainability and is a marker of Quality.

But readable to whom? To your future self? To others on your team? To developers at different skill levels? Each of those audiences is best served with differently-written code.

And sometimes it's easier to read code that isn't DRY, or to read code that isn't Performant.

When you have to sacrifice one marker of quality for another, have you increased or decreased your code quality?

## "Different" Does Not Imply "Worse" (or "Better")

It's necessarily true that code produced by an LLM will *not* have the same overall "opinions" with respect to quality markers as the human programmer.

In the same way that no two human programmers have the exact same opinions about quality markers.

Well, not *quite* the same. An LLM has no understanding of "quality" and has no opinions at all. But the *outcome* is the same as if you were working with a person whose opinions differed on the matter.

Due to how LLMs work, and how developers will tend to use them, they will tend towards *reduced* DRY-ness in particular. That makes it easy to immediately think that the LLM-derived code is worse, but... is that necessarily true?

On the one hand, Copilot and similar tools keep getting better at code re-use, as they get better at incorporating more and more context. So they're becoming more DRY over time.

But even when they aren't... if the non-DRY code they're producing is *highly readable* and highly *specific* to the micro-context, is it *low quality* simply because there's a function somewhere in your project that already does that same task (or something very similar to it)?

Sometimes, certainly! Especially because that increased amount of code and decrease in DRY-ness reduces overall test coverage. (Unless you're also ensuring sufficient test coverage, something that can be dramatically helped by LLM tools.)

Anecdotally, I have *definitely* found that my code has become a little less DRY due to using Copilot. Places where I'd lazily reach for an existing function that *happens to* solve the problem are being replaced with new code that *exactly* solves the problem.

That said, I'm still the one who decides what "quality code" means to me, and I edit and refactor as I go whether the code was generated only by me or with LLM assistance. 

As we continue to use LLMs to assist our programming efforts, how we program *will change*. I also change how I code to get better support from Typescript and my linter. Different is not inherently worse.

Most importantly, I'm still in charge. I'm still responsible for the quality of the code I commit.

No LLM tells *me* what to do.

## Humans Are Still Involved!

It's important to remember, when discussing the quality of LLM-assisted code, that there is *an actual person* who has decided whether or not to use that assistance, whether or not to accept the generated content, and if/how to refactor the same.

So when we ask, "Do LLMs make code quality worse?" we're really asking, "Do *people* write worse code *because* they are using LLMs?"

Why would we even think that would be the case?

### The Quality Gap

A specific human user of an LLM will be operating at a particular level of knowledge, skill, and care.

An LLM operates at its own level, partially independent of the user's but increasingly informed by it as LLM-based coding tools get better at using context.

As with any two people, there exists a gap between what these two entities produce in terms of quality, context, and other properties.

If what the LLM produces is *exactly* the kind of thing that the programmer would produce, the answer to the question of, "do LLMs cause worse code?" would be an obvious "no". It would cause *more* of the *same* quality of code (good or bad).

If what the LLM produces is *worse* than what the programmer would produce, that programmer *would be able to see that*. They could then choose to reject it or edit to to match their understanding of quality; *or*, they could just to keep that "worse" code and move on. The better option is obviously the former, but there are many reasons why someone might go with the latter.

Finally, if the programmer is *not able to evaluate* the code produced by an LLM, that code might be better *or* worse than what the programmer would have written. The best option here would be for that programmer to take the time to figure out *how* to evaluate that code, or throw it away and do something they *do* understand. But for many reasons they may choose to move along with the code they didn't understand (especially if that code *worked*).

And so the cases where we would worry about People + LLMs producing *worse code than they would otherwise* are:

- The programmer knows the generated code is worse but decides to use it anyway (a.k.a. "malpractice")
- The programmer is using generated code they don't know how to evaluate (...a.k.a. "malpractice")

And so we have two ways in which we can *reasonably* claim that LLM's reduce code quality, and both are forms of malpractice.

### Uneven Distribution of Malpractice

The thing that LLM's *definitely* enable is *malpractice at scale* for both of those cases. A programmer who should know better can write an awful lot of unedited, mediocre code with the help of an LLM. And a programmer who *doesn't* know better can do the same.

Together, those two groups will end up generating a lot of the future code that ends up in repos. But that code will not be evenly distributed across code projects: it will be focused in code bases where *malpractice is allowed*.

When is malpractice allowed?

- When novice programmers are not provided any senior support
- When code does not go through any review
- When everyone involved is indifferent to quality
- When external pressures force quantity over quality

But even such cases, I highly doubt the quality of code in malpractice-forward contexts is going to be good in the first place.

## Measurability of Code Quality

From just reasoning through it, it doesn't seem fair to claim that LLMs will reduce overall code quality. But what does the data say?

An outcome of all of the nuance that goes into the meaning of "Code Quality", and the fact that there's no context-free nor universal definition of such a concept, is that it **IS NOT MEANINGFULLY MEASURABLE**.

It's just true, if unfortunate, that many things cannot be answered via data analysis. With the *right* data and *appropriate* analysis they might be, someday, but we almost never have both of those. We almost never have *either* of those.

Often neither of those are even *theoretically possible*.

Any claims about Code Quality fall into the category of *actually unanswerable*, because you can't measure something that doesn't even have a clear definition.

You can measure *aspects* of that thing, with *minimal* nuance, and maybe make some dents in the problem. But we just don't get to have an unambiguous answer.

Let's get more concrete by looking at some sample attempts.

### GitClear Says, "Data Suggests Downward Pressure on Code Quality"

Firstly, data never suggests anything. *People* suggest things, based on their understanding of the data. And based on what they *want* the data to "say".

Notably, [GitClear](https://www.gitclear.com/)'s business model is selling code analysis tools, so convincing people that code quality is decreasing is a good way to sell their services.

That doesn't necessarily mean they're doing anything nefarious with their claims. But they do have a vested interested in their claims, so we should default to having increased skepticism.

The paper actually has two separate claims:

1. Code Quality decreased overall in 2023 and 2024
2. This is because of LLM-assisted programming

Digging into [GitClear's whitepaper](https://www.gitclear.com/coding_on_copilot_data_shows_ais_downward_pressure_on_code_quality) making this claim (sorry, you'll have to give them your email to get it), you'll see that their dataset does not include *any* information about how whether or not any of the analyzed code was generated with LLM assistance.

Which means they *cannot* have any evidence to support their second claim. It's literally impossible. In other words, even if it is true that code quality has decreased, they could not have any evidence that this was *caused by* use of LLM tools.

Their reasoning is instead that code quality decreased while LLM popularity was increasing, therefore LLMs did it.

Correlation is not causation, and we could come up with a laundry list of alternative explanations.

But that would only be useful if we accepted their first claim, that code quality has decreased since the introduction of LLMs.

What their analysis shows is:

- Code "churn" (lines with substantial revision within 2 weeks of initial push) has increased year-over-year since 2020, with an accelerated increased in 2023.
- Code "movement" (to a new function or file) has decreased year-over-year since 2021.

These metrics are being used as proxies for code quality, but they are also proxies for all kinds of other things. Code gets churned or moved for many reasons.

We don't know if those lines were LLM-generated. They *could* have been. We also don't know why they were moved/churned. It *could* be because they were "low quality". Undoubtedly that interpretation is true for *some* subset of these operations. But how big of a subset?

There's literally no way to know.

### GitHub says, "[GitHub Copilot is turbocharging developer productivity](https://github.blog/2023-06-27-the-economic-impact-of-the-ai-powered-developer-lifecycle-and-lessons-from-github-copilot/)"

Lest you think my position on this topic is due to breathless fan-boying for GitHub Copilot, let's take a look at some of their claims while we're at it.

To GitHub's credit, I have not yet seen any claims by them regarding the *quality* of the code generated by Copilot. So we'll have to change topics briefly to a related concept: developer productivity.

As with "Code Quality", "Developer Productivity" is another vaguely-defined, unmeasurable property. And so no one actually measures that (they can't), instead measuring various aspects of *speed*. That's also more abstract than it at first appears (speed of *what*?), so really we're measuring a proxy of a proxy.

GitHub did [a decently-designed study](https://arxiv.org/abs/2302.06590) where they recruited 95 participants, split roughly in half, to tackle a task with or without Copilot and compare how long each group took. Their analysis left me wanting, however: they claim Copilot sped users up by 55.8%, but that was based on *averages* using data with very obvious outliers.

(You should ignore pretty much any claim that is based on averages. Not always, but it's a good heuristic!)

Unfortunately they don't provide the raw data, so I can't come up with my own analysis. The data *seems* to show a strong decrease in time-to-completion for Copilot users, and as a Copilot user I wouldn't be surprised by that outcome, but the *specifics* of the claim are dubious.

GitHub takes this base claim, that Copilot dramatically speeds up development, into extremely questionable territory [with a paper](https://arxiv.org/abs/2306.15033) making the bold statement that, "AI productivity tools could potentially contribute to a $1.5 trillion increase in global GDP by 2030".

Setting aside that GDP is a nonsense vanity metric (and actively harmful to the world), this claim is wholly based on the the prior 55.8% measurement (which is *definitely* an overstatement) and another measurement where "30% of code suggestions are accepted" (which can be interpreted in lots of ways), and extrapolated from there.

So *does* Copilot improve productivity? My own experience, for my own use cases, provide an obvious, "yes." But to the point where the average developer experience is a 60% boost in productivity and adding a trillion dollars to GDP?

Almost definitely not.

## What Does it All Mean?

So, *do* LLM-based code-completion tools reduce code quality?

If you're thinking just in terms of the *global quantity of code* then, sure, it's a reasonable guess that an increasing *fraction* of global code will be, on average, worse than before. LLM assistance will allow a hell of a lot of mediocre code to be created by those willing or forced to commit malpractice. And that's definitely going to be a *lot* of code.

But LLM assistance will *also* allow programmers who *aren't* committing malpractice to generate more code *at their quality level*. Some of that will be bad. Some will be good. But it will all be amplified.

As with any tool, LLM-assisted programming just *amplifies* what's already going on.