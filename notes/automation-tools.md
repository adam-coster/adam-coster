# Automation Tools & Concepts

Useful concepts, tools, and examples to help you on your automagician journey. Whether you're a skilled programmer or have never even heard of a `for` loop, there's stuff in here for you. Advanced stuff will be linked out, and this doc builds from top to bottom so that's the best way to approach it.

If you haven't read the general definitions and ideas behind what automation is and why it's important, [start there](./automation-definitions)!

These days most of our data lives in "the cloud" in various web services, so a lot of what it means to automate our work is to link services together or trigger events within them. For that reason this document biases towards web-based tools and concepts.

## Useful Terms

The following are terms you'll likely see in the world of automation.

### Programming Language
    
A precisely, explicitly, and completely defined set of rules for how to write text that can be converted into something that a computer can *do*. When learning a language, you have to always always remember that *precision is what makes it work*. Something as simple as a `+` sign can do completely different things depending on the language, and even depending on context within the same language!
    
Some example programming languages:
    
- Node.js
- JavaScript
- Typescript
- Python
- C++
- Rust
- GML (GameMaker Language)

### Markup Language
    
While a "programming" language is mostly about making a computer *do* something, a "markup" language is mostly *describing* something.
    
Some example markup languages:

- HTML
- Markdown
- XML
- LaTeX
- BBCode
- MermaidJS

### Text Editor
    
A program that shows you the contents of a file *interpreted as plain old text*. So what you see is also what's in the file. Text Editors will often let you open any kind of file within them, but you'll see some pretty wild stuff if that file isn't a text file! (This has to do with *encoding*, which we'll get to later.)
    
Example text editors:

- [VSCode](https://code.visualstudio.com/) 💖
- [Notepad++](https://notepad-plus-plus.org/downloads/) 😊
- Notepad 🤮
    
### WYSIWYG
    
Short for ["What You See Is What You Get"](https://en.wikipedia.org/wiki/WYSIWYG) (pronounced "whizzy-wig"), which is a term to describe things like word processors (Microsoft Word, Google Docs, etc) where what you see on the screen is the end product. This is in contrast to ["Markup" languages](#markup-language) like Markdown or HTML, where what you see when editing is *not* what you get in the end product.
    
### Word Processor
    
A program built for [WYSIWYG](#wysiwyg) editing of files that typically integrate visual formatting, embedded images, tables, and so on. Word Processors typically output some sort of custom file type (like `.docx`), though many can import from and export to multiple types.
    
*Examples*: Google Docs, Microsoft Word
    
### IDE
    
Short for "Integrated Desktop Environment". An IDE is a program that mostly operates on regular text files, where the text in those files is *code* written by a programmer, and where the IDE is somehow assisting the coding process. For example: auto-complete of code snippets, auto-indenting, highlighting of invalid code, auto-fixing of invalid code, automatically running test suites and formatters, and so on.

You can think of an IDE as a fancy [Text Editor](#text-editor) specifically for writing code.
    
Example IDEs:

- Visual Studio
- VSCode (part of the "Visual Studio" branding, but a standalone product predominantly used for programming website-related languages)
- PyCharm (for Python)
- JetBrains (webdev)
- GameMaker

### Encoding
    
A set of rules or a conversion map for representing some sort of data using another sort of data. For computer stuff, we we're typically trying to represent something using *binary* data, since that's what computers can understand.

A program needs to know how the raw, binary data it sees is "encoded" so that it can properly read and do stuff with it.
    
*Examples*

- ASCII (for English-centric text)
- UTF-8 (for text from all languages)
- PNG (an image format)
- WAV (a sound format)

### MIME Types, File Types, and Extensions
    
When we refer to a file's "type" we are referring to how that file is structured and therefore which applications can "understand" it. For example, when a browser downloads an image from the web it needs to know that (1) it actually is an image, and (2) what specific type of image it is (PNG, JPG, GIF) so that the browser can convert the raw binary data of that image into the right colors of pixels on your screen.
    
There are two common approaches we use to keep track of our filetypes and inform applications about them.
    
1. For files on your computer we use a *file extension*. It's the last part of a filename, like `.txt` (a plaintext file) or `.docx` (a Word document).
  - 📝 Note that your operating system probably hides extensions from you most of the time: you can disable this!
2. For files sent over the Internet, we *may* use an extension (in the URL) but *almost definitely* use a "[MIME Type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types)" in the metadata that is sent along with the file. The MIME Type does the same thing as an extension, but is more verbose. They typically take the form of `{general}/{specific}`, e.g. `text/plain`, `text/markdown`, `application/json`, etc.

You may be wondering what happens if the file extension isn't there, or if the there are multiple kinds of files that use the same extension, or if the file has the *wrong* extension. The answer is... any number of things, depending on what the application's programmers accounted for: the app could crash, show you something really weird, corrupt the file by trying to "fix" it, tell you that the file is "corrupted", or any number of things. For apps that can open lots of kinds of files, they might do "content sniffing" where they compare the structure of the file to those of common file types and try to guess what it is.

## Representing Data

Data is what automation is all about! Whether we're moving data from one place to another, creating it, deleting it, or changing it in some way, it's all about that tasty *data*.

What *is* data, you ask? Well, just about anything, really. I could say something like, "Data is information!" but that's just how synonyms work. For practical purposes, we can think of "data" as anything that a computer can store and process.

You'd be hard-pressed to find something in the world that you *can't* store and process on a computer. That brings us to the subsections below: common ways to represent ("encode") data!

### Binary

*Other terms for binary data: blob, binary string, octet string, octet-stream*

> 💾 Common MIME Types & Extensions: `.bin`, `application/octet-stream`

Computers store everything as "binary data", which people typically describe as "a series of ones and zeroes." We won't get into what that means here, but the point is that if a computer is storing it... it's a bunch of ones and zeroes! Images, sounds, text documents, computer programs, video games, etc. Doesn't matter what it is, the computer stores it the same way: in **binary**.

To see that data as something different than the ones and zeroes in which it's stored, we have to *interpret it*. But how do we know how to do that? [Encodings](#encoding)!

But sometimes we don't know or don't care what the encoding of our data is. For example, if we're just moving some data from one place to another without looking at it. In that case we just think about it in its raw "binary" form.

### Text

> 💾 Common MIME Types & Extensions: `.txt`, `text/plain`

Text is the most familiar and easy-to-use type of data. You've probably heard of [ASCII](https://en.wikipedia.org/wiki/ASCII), which is one of the original ways of encoding English-centric text. You may have also heard of "[UTF-8](https://en.wikipedia.org/wiki/UTF-8)", which is now the dominant way of encoding text because it can handle *all* languages (and ASCII is actually a subset of it!).

Most of the time you don't have to worry about how your text is encoded, since the software you use will be dealing with that for you. If you ever need to specify, go with UTF8!

> 📝 Data that is stored as text, where all of that text is for human reading, is typically called "plaintext". We call it "plain" because there's nothing fancy going on. It's just some text! Sometimes we want to be more specific so we'll say it's a "markdown file" or an "html file". These are still text (because they use the same *encoding*), we're just being more specific about how to understand it.

> ⚠ An easy thing to get confused by is that a [Word Processor](#word-processor) file (e.g. `.docx`) *is not a plaintext file*. That sounds wrong, doesn't it? I mean, you put text right into that thing! But if you open up a `.docx` file in a [Text Editor](#text-editor) (not a [Word Processor](#word-processor)) you'll see the data interpreted *as text*, which can get quite weird.


### Markdown

> 💾 Common MIME Types & Extensions: `.md`, `.markdown`, `.txt`, `text/markdown`, `text/x-markdown`, `text/plain`

Markdown is a *family* of a markup languages, all with similar but slightly different rules (people refer to these as different "flavors"). The most popular one is probably GFM ([GitHub Flavored Markdown](https://github.github.com/gfm/)). You'll find that tons of apps and services support some subset ("flavor") of Markdown. For example, Discord lets you use italics, bold, and code blocks, but it doesn't let you create lists. Favro lets you create lists, but only allows a few heading sizes. Notion supports its own Markdown flavor. And on and on.

Markdown was originally created as a more human-friendly alternative to HTML, meant to be converted *into* HTML for display purposes. The idea was to allow writers to draft text-only content, where some of that text describes how the rest of the text should look, while minimizing typing and keeping everything as readable as possible.

> 📝 It's called "Mark**down**" as a sort of commentary about typical "Mark**up**" languages: they're usually super complicated and hard for people to read!

The things about Markdown to pay attention to:

- Any given service will use its own Markdown flavor, and might not document it — you can't count on the same Markdown to be rendered the same way on any two services. Sometimes all you can do is experiment.
- Most things that robustly support Markdown use [GitHub Flavored Markdown](https://github.github.com/gfm/).
- If Markdown is an option for marking up text content, use it! It's portable and easy to process, making room for lots of automation.
- There are tons of [cheat sheets](https://www.markdownguide.org/cheat-sheet/) out there, and the basics are all you'll typically need.

### HTML

> 💾 Common MIME Types & Extensions: `.html`, `.htm`, `text/html`

[HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) is *hideous*, but it's the most popular markup language by a jillion miles. Why? Because it's the de facto markup language for the *entire Internet*. HTML is what web pages are written in. The main job of your browser is to parse and render HTML!

Since HTML is the markup of the Internet, you'll run into it constantly while doing automations. Many things that aren't HTML are just HTML in disguise, like [Markdown](#markdown) (designed as a simpler markup language that converts to HTML).

### XML

> 💾 Common MIME Types & Extensions: `.xml`, `text/xml`, `application/xml`, `{general}/{specific}+xml` (for any of many specific XML formats, like `image/svg+xml`)

[XML](https://developer.mozilla.org/en-US/docs/Web/XML/XML_introduction) is a general way to represent nested data using text. It is *very* similar to HTML, so if you understand the principles of one you've also got the other. XML and XML-like formats are found all over the place (HTML, SVG, RSS). Web services have largely moved on to more human-friendly formats like [JSON](#json) for non-markup data.

### JSON

💾 Common MIME Types & Extensions: `.json`, `application/json`

JavaScript Object Notation ("JSON") is probably the most common way of representing non-text/image/audio/video data on the modern web. Why? It's in the name! JSON data can be directly used by JavaScript (the programming language of the Internet), so it's super portable. It's also not *too* human-hostile to read and write (especially compared to [XML](#xml)).

All of the guides I can find on the topic make use of a lot of JavaScript in the explanations, so I've written a simpler [JSON Guide](./json-guide) that gets right to the point.

### YAML

💾 Common MIME Types & Extensions: `.yml`, `.yaml`, `text/yaml` (but can vary — no official MIME Type)

[YAML](https://www.cloudbees.com/blog/yaml-tutorial-everything-you-need-get-started) ("Yet Another Markup Language"), often shortened to YML, is to JSON as Markdown is to HTML: YAML is a more human-readable and less-verbose markup language that gets converted to JSON.

You won't find YAML that much in the wild coming *from* web services, but you'll frequently find it in documentation and as a short-hand to explain JSON structures in a more human-friendly way. Instead of whitespace being *optional* as in JSON, in YAML whitespace is *functional*.

The main downsides of YAML are that it's easy to make hard-to-spot mistakes and that there can be many ways to express the exact same data (so there's more you might need to know in order to read YAML).

### Bespoke Data

All of the above data formats are well-defined, standardized, and common. Well, except for generic binary data, since that could be anything. Which brings us to this last category, which I'm calling "bespoke" data.

By this I mean any propriety or otherwise uncommon format that is not widely used. File types that are super specific to a certain piece of software often fall into this category, as might custom formats developed for hyper-specific storage goals, like for managing enormous amounts of well-understood data. ([Levelhead](https://www.bscotch.net/games/levelhead) levels are a great example of this — we have our own custom file structure, all in binary, with custom reader and writer utilities to interpret them, all so that we can make those files as small as possible.)

These days you'll likely be able to do a ton of your automation without getting stuck on hard-to-parse bespoke data, but it still does happen from time to time. Your best bet in such a scenario is to do a lot of digging to see if anyone else has already created some sort of converter or parser to make your life easier. Otherwise things can get very tricky!

## Web Stuff

### URLs

If you're automating stuff on web services, chances are you'll be dealing with a lot of URLs. You're familiar with these from clicking links and typing things into your browser's address bar, but do you know what goes into a URL?

MDN [has a great breakdown](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_is_a_URL) of the parts of a URL. The only thing they don't mention is [URI Encoding](https://meyerweb.com/eric/tools/dencoder/), which is a mapping of URL "special characters" (like `&`, `?`, `#`, or `=`) and invalid characters (like spaces and newlines) onto URL-friendly sequences. For example, `&` becomes `%26`. The trick is to encode every URL-invalid character, and also every special character that *you don't want to be treated as special*. For example, the `?` means "I'm starting the list of query parameters now", so if you want to use a `?` *as* a regular old character instead you'll have to use the encoded version. But if you use the encoded version when you wanted the special one, that won't work!

### HTTP Requests

The key to dealing with data on the Internet is the HTTP Request (a.k.a. "Web Request"). If you can get the basics down, you'll be truly empowered to take your automations to any level you want!

MDN has [a good write-up on HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP/Messages) but it's more technical than we need here. I've provided my own guide, which should give you everything you need to know to get started using automation tools with web services:

[HTTP (Web Request) Guide](./http-guide)

### Webhooks

A "webhook" is a URL that data of a particular structure can be sent to, usually as a consequence of an event. It sounds fancy, but it's just [HTTP requests](Automation%20Tools%20&%20Concepts%201890aa6e9b3b4038961247ede20ea733.md)!

The term isn't used to describe the *mechanism*, but the *intent*. Webhooks are intended as a means to have one service inform another service about various kinds of events. Services that provide Webhooks do so to make it possible for you to hook into their system (hence "web***hook***"!) so you can observe and react to important events that you otherwise wouldn't have access to.

Let's look at some examples!

- Sparkpost is a bulk-email service. We use it to send the Ballyhoo, Rumpus registration emails, etc. They allow you to use webhooks for lots of different events, like when emails get sent, or bounce, or a person unsubscribes. Rumpus uses this system like so: there is a URL that lives on the Rumpus server, and that is registered with Sparkpost as a webhook for the unsubscribed/marked-as-spam/clicked-something/opened events. When Sparkpost detects these events, it then sends the corresponding data to that Rumpus URL. Rumpus then processes the events to remove people who unsubscribed, to reset the "unopened" counter for people who opened one of our emails, and a few other tasks. So Rumpus is taking events that it doesn't normally have access to, but then being able to respond to them anyway because Sparkpost makes them available via Webhooks!
- In Integromat, you can use the [Webhooks App](https://www.integromat.com/en/help/app/webhooks) to create Integromat URLs for you to send data to. You can also tell Integromat what the data you plan to send will look like, so that you can use its fancy UI to auto-complete downstream parts of your workflow. Any software you use or create could potentially have a webhooks feature — you'll be able to plug the URL you get from Integromat right into your software/code and start sending data, causing any neat stuff to happen that you want as a consequence!
- In Favro, you can register non-Favro Webhook URLs that Favro will send event information to. You'll see this in the "Do This" column of the automations menu: the "Trigger Webhook" option. [Favro's documentation](https://favro.com/developer/#outgoing-webhooks) tells you what the data it sends will look like, based on the type of event. You could use this by creating a Webhook in Integromat, or in an existing server like Rumpus, that then parses the Favro event data and does something with it (sends an email alert, a Discord message, closes a GitHub Issue, etc, etc).
- In Favro, you can also do the opposite: create a Favro Webhook URLs to catch external data sent from non-Favro applications. You'll see this in the "If this happens" column of the new automation menu: the "When Webhook is Triggered" option. Unfortunately, Favro does not provide a way to parse data sent to its URLs, so you can only do things in response to the *fact that something happened* without the details.

For more depth and more examples, see [Zapier's blog post on the topic](https://zapier.com/blog/what-are-webhooks/).

## Tools and Services

There are many tools and services out there that we already use, and others we could use, for many aspects and sources of automating workflows. I've listed the big ones here, with tips & tricks plus suggestions on what/how to automate with them.

### Integromat

[Integromat](https://www.integromat.com/) is our Swiss Army Knife for automating things on the web, especially for hooking the services we use (and build) into each other. With all the info above you should be ready to go explore and problem-solve to create Integromat workflows (a.k.a. "scenarios").

**Requirements**

- **Add 2-Factor authentication!!!** (If someone gets into the studio Favro account they could do some truly horrible things.)
- Everyone in our org can see, use, and edit *everything*. **Do not edit or use** anything that isn't yours without first talking to its creator/owner to make sure nothing bad will happen.
- Use folders to group workflows by project (e.g. "GamePipe") or ownership (e.g. "Adam"). Only work within your own folders unless you've worked with the folder owner to understand which things can or can't be changed.
- When creating "connections" to services for Favro to use, always give the fewest permissions you can (when there are options).

**Tips, Tricks, & Traps**

- [They have courses](https://www.integromat.com/en/academy/courses/) to teach you all kinds of stuff. This is an excellent place to start!
- They have a great list of [use cases](https://www.integromat.com/en/use-cases), plus many blog posts, to help get your creative juices flowing.
- You can clone stuff, so if you want to clone something that some else did to experiment with it or use it as a starting point you can save a lot of time that way.
- Since you can see all the details of all organization workflows, you can see how everyone else is doing things to get ideas and references. Just make sure you don't accidentally edit or trigger anything while you're in there.
- [Integromat functions](https://www.integromat.com/en/help/using-functions) use an Excel-like format, e.g. `function_name(arg1;arg2)`. (This can throw programmers off since they'll expect commas instead of semicolons for argument separators.)
- Array indexes start at 1, not 0. (This can throw programmers off.)
- When passing strings to Integromat functions you do not use quotes. (This can throw programmers off.)
- When passing a string to an Integromat function, do not put any spaces around it (they are treated as part of the string).
- If you see a `;` or other special-character/keyword in an Integromat function that is *not* highlighted, then it is being treated as a regular character/string and won't behave as expected. You'll probably need to delete it and then add it back. It seems that keywords must be added via the functions menu instead of directly typed in to get them to work as keywords.

### Postman

Sometimes you just need to send HTTP requests without having to do that through code or a web service. This is of particular use when exploring and trouble-shooting requests and responses from a service you're working with. But it's also handy if you just need to send a few requests as a one-off thing.

There are a handful of decently popular options for this, but [Postman](https://www.postman.com/) is probably the biggest. It's got a slick UI, saves all your requests, and provides diagnostics, tests, and response previews. Highly recommended for exploring web services before building out automations, since the tools for that purpose usually don't make it easy to *see* and *troubleshoot* request and response details.

A good example of using Postman would be if you were making an Integromat workflow that would be triggered by something completely custom (like something in our games, or the GamePipe, etc). You could figure out exactly what data you'd want to send to Integromat from that source, and build out the whole flow using that data. The whole time you're working on it, you can test it by sending that data via Postman! That way you can get that part working even when you haven't updated the source to be able to send that data yet. And, even if you have done so already, it might be easier to send test data from Postman than the intended source.

### Discord

We currently use Discord as our primary means of real-time (and much of our async) communication. We also use it for our community to do the same.

Discord is a prime candidate for automations. Discord lets you make bots and webhooks to monitor and respond to events happening with channels, and to allow non-Discord events to make things happen inside Discord. You could have announcements automatically appear when things happen in Rumpus, or parse messages looking for Levelhead Level IDs to auto-compile a list of all the levels being shared. You could alert someone to a failed GamePipe run, or to something wonky going on in the Rumpus API. Endless possibilities!

### Google Services

Google's services (Gmail, Docs, Sheets, Forms, etc) have tons of automation capability because Google built those features right into those services. You can use their "[App Script](https://developers.google.com/apps-script)" feature to do tons of automations right inside Google. Or you can use services like Integromat to simplify stitching Google services together or to other services. You could even directly use Google's APIs to create fancy, fully-custom tools that can do pretty much anything.

Automating aspects of data intake & handling for forms, using spreadsheets as databases, and parsing emails for keywords to trigger actions, are just a tiny subset of the kinds of things you could do with Google Services.