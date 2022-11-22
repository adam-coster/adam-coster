Programmers _hate_ writing documentation. Most programmers, anyway. That's just stuff that gets in the way of the Real Work™, right?

The truth is that the Real Work™ of programming mostly consists of things that aren't directly writing code. Determining specs, designing an API, exploring technical limitations, learning best practices, training others, and so on and so on.

Even when a programmer _is_ directly creating code, that code itself must find some middle ground between sometimes-mutually-exclusive goals:

- The code must solve the problem at hand.
- The code must be easy to maintain.
- The code must be efficient _enough_.

In order to be maintainable, good code must be written _for people_. Specifically _other people_. Even if you're a solo developer, your future self will be a _different person_, at least with respect to the code you're writing now.

One way to deal with this is so-called "self-documenting code". Combining carefully thought-out variable and function names with clean-code practices and industry standards is mostly what this is about.

Self-documenting code is also an excellent practice because it reduces how much documentation is required _outside_ the code (e.g. in comments). Having code in addition to comments that describe that code is a "Don't Repeat Yourself" (DRY) principle violation. The purpose of DRY is to prevent errors caused by changing something in one place without also changing that _same thing_ in another place. If there's only _one_ place, such a mistake isn't possible.

But how do you document bigger-picture stuff? The overarching purpose of a project? Its entry point? Who should be using it? Its dependencies? When it was last updated? What coding standards it's using?

It's a lot harder to keep your _project_ documentation DRY than it is for the lines of code within it. This is where we get into "Documentation as Code" (borrowed from the concept of "Infrastructure as Code"). The goal is to have every piece of documentation somehow coupled to the _functionality_ of the project itself, so that if one changes then both must change.

Wherever possible, anyway.

I admit that this is something I've been historically terrible about, and am trying to find ways to dramatically improve in my projects. I don't have a grand solution, but here are some useful concepts and tools I've been thinking about:

- **Global conventions.** When I say "global" I mean across projects and teams. Adherence to convention is a type of documentation. For example, if everyone knows that event-triggered functions are always prefixed with `on` (e.g. `onDownload()`), then you can have simpler function names without also needing comments. Or if everyone agrees that callback functions will always start with an `error` argument, then everyone's code can take advantage of that _without additional documentation_.
- **Configs everywhere.** Tools like ["Cosmic Config"](https://www.npmjs.com/package/cosmiconfig) make it easy to simultaneously follow general industry practices while also doing things how you prefer to do them. By putting information into _parseable_, _testable_ configuration files. This brings you into infrastructure-as-code and environment-as-code territory, further reducing documentation needs.
- **Automate everything.** If a robot does something, a person doesn't need to know anything about how that something works. If you need to do something regularly in a project, turn that thing into code.
- **Prevent setup errors.** All good tools have an `init` command (or similar) to make it easy to start using that tool with minimum error. The best ones interactively guide the user through decisions they need to make by asking human-friendly questions. Ideally the user would never even need to look at the resulting configuration file(s).
- **Docs and Code should have the same dependencies.** This is a tricky one, but also the one I'm most excited about. It's reminiscent of the Dependency Inversion Principle. The idea is this: we normally treat documentation as being dependent on the code, but what if we had _both_ depend on something else? That way we could make changes to that something-else and consequently both the code and docs would stay in tune.

For that last item, you would definitely need documentation to be built by code for it to work. A simple example is using configuration files -- the code that builds your docs can read values out of the same config files that your code does. In effect, the more you can abstract concepts into modular code or data, the more it can be used in automated docs and code.

API documentation is probably the best example of this, especially for languages as flexible as JavaScript: you could use centralized API documentation to dictate both the functionality of your code and the documentation that describes it!

To accomplish this you could use tools like [Swagger/OpenAPI](https://swagger.io/specification/), [joi](https://joi.dev/),[Express Validator](https://express-validator.github.io/docs/), and others.

I've only just started trying to find ways to do this. What tricks and tools do _you_ use?

_This article originally appeared in a [DevChat Newsletter](https://www.bscotch.net/post/devchat-11)._
