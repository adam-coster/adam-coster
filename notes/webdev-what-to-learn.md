## What to learn for a webdev job

_(Note: this is part of an exchange I had with someone asking for advice. Could be polished up for a post.)_

Front-end these days is easily as technical as the backend, it's just a different collection of problems. Fortunately, the modern frameworks are pushing each other to end up with better user experiences, and there are tons of amazing tools coming out all the time across the stack.

I don't have any strong connections to the broader webdev industry, so I can't say with any confidence what would be of big help there. With all appropriate grains of salt, and in no particular order (or degree of thoroughness), here are some things that seem like they'd be important given your goals:

Invest your time heavily into tooling and project management strategies, especially on the code side. To that end, look at a diversity of major open source projects and how they're set up. This will help you get a sense of your relative knowledge and skills, while also giving you industry context. This will help you position yourself for a webdev job search as well as give you a grounding in code-based project management for your own projects.

- What tools do they use?
- What dependencies do you find reappearing over and over?
- How do they manage pull requests?
- How do they manage issues and project planning?
- How do they handle versioning, communicating changes, making builds, and deployment?
- The key to survival in the games industry, if you're running your own show, is long-term focus (via long-term compounding improvements in knowledge, skills, tools, and automations) and keeping costs down. By far the most expensive thing you can do is add people to your team -- by investing your time into your own capabilities and tools you'll minimize the need for adding people. It's a very slow path, especially when you do it on the side.
- Without a record of professional experience, a strong portfolio is going to be very helpful. Webdev employers probably won't care much about your game portfolio, and will care a lot more about anything that demonstrates competency in modern frameworks and GitHub-like project management. It's hard to have a backend "portfolio", and even harder to have one that demonstrates capability for solving "web scale" problems. Backend is largely about security, scale, and reliability -- if you have general knowledge about the kinds of problems and solutions there, you could probably get away without that much experience. If I were hiring a web developer for largely backend work, the kinds of things I'd want them to be able to talk intelligently about and/or see in a portfolio are:
- Collaboration on code via Git, especially via Pull Requests.
- Test-driven design.
- Design and use of REST-ish APIs.
- Strategies for user authentication.
- Strategies for security, including an understanding of how browser and non-browser clients differ with respect to security issues.
- Databases and schema design -- what kinds of databases are out there, what are they good/bad at, and how do you choose one over another? If you can roughly describe the high-level differences between MySQL, Redis, MongoDB, and Elasticsearch, you'll basically have covered the typical range of database types.
- If you're going fullstack, your ability to design matters a lot less than your ability to implement designs. Generally knowing how to solve layout and interactivity problems via modern frontend frameworks is good.
- Typescript is everywhere now across the stack. Knowing what value it adds, having a little experience using it, and having a general idea of what "transpiling" is, will all serve you well.
- A lot of modern backend takes a microservices approach, and companies use a broad array of technologies for that. General awareness of those is good. Golang and Rust are becoming increasingly popular for performance at scale, but in your case I'd recommend trying to stick with the JavaScript/Typescript/Node ecosystem for the full stack so that you can cover more capability without having to learn as widely (since you want to run a studio yourself). If you can vaguely explain what Docker is and why it's important, you could get away without having experience using it.

Long story short: knowing about things in modern webdev can get you over a lot of experience/portfolio hurdles, so long as you have a strong enough application/resume/portfolio to get the chance for a technical interview. Again, I don't know what would be truly important to stand out applying for things in the web industry (or in the web-heavy games industry, e.g. in live-ops games), so the stuff above is just a bunch of things that would be very useful to know about. If I were reviewing applicants and one of them had a simple webapp that (1) had user authentication, (2) stored data persistently, and (3) didn't look like crap, and then was able to tell me tons of stuff about how that simple webapp could be improved (or even just done differently) for reliability, security, and scalability, I would be impressed. But that doesn't mean it's something you should do, since I have no idea what would impress others 😄
