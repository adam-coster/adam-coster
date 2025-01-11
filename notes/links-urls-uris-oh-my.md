What's the difference between a hyperlink, a link, a deep link, a <abbr title="Uniform Resource Locator">URL</abbr>, and a <abbr title="Uniform Resource Identifier">URI</abbr>?

Collectively, these are all about solving two related problems:

- Finding a way to unambiguously refer to something; and
- Providing to _get to_ that thing.

## What's a URI?

A <abbr>URI</abbr>, or "Uniform Resource Identifier", is a structured string of text with [well-defined syntax](https://datatracker.ietf.org/doc/html/rfc3986) ("uniform") that tries to do as the name describes: provide an "identifier" for a "resource".

That's all a little abstract.

### What's a Resource?

A resource could be, well, anything. A page on the internet. An interface element inside of a piece of software. A file on your hard drive. GPS coordinates. A person. The concept of love.

Hence the generic word "resource": any other term would be too constraining.

### What's an Identifier?

An "identifier" is some kind of label, or name, that doesn't necessarily mean anything by itself, but that can be associated with and thus "identify" one resource, specifically, among others.

For example, _I_ am a specific resource. I can be associated with all kinds of identifiers: my first name (Adam), my full name (Adam Coster), my personal email address, my work email address, the web domain hosting my personal website (`adamcoster.com`), the URL to a specific _page_ on that website (`https://adamcoster.com/#ids`), or any of my social media profile handles or web addresses.

An identifier is most useful when the resource it identifies is unambiguous. So my first name is a great identifier when no one else in the room is _also_ named Adam. But if someone else is then my full name, or a nickname, or some other disambiguating identifier would be better.

Thus, an identifier is at its best when it *includes* the very context needed to make it unique.

### Back to URIs

The purpose of a URI is to provide a means for creating an unambiguous identifier, for use by anything (human or machine) that understands how to interpret URI syntax.

A URI is structured like this:

`scheme://authority/path?query#fragment`

Except for the scheme, all parts of a URI are optional. And each part has sub-rules about what counts as valid syntax.

The scheme (sometimes called the "protocol") indicates the process by which a reader would associate the URI to its resource. For example, `http` indicates that you'd find the associated resource via a network, using the Hypertext Transfer Protocol. `https` means you'd do the same, but with a security layer. `mailto` indicates that you'd be looking for a mail server over a network. `tel` indicates that you'd use a telephone network. [`geo`](https://www.rfc-editor.org/rfc/rfc5870.html) indicates that you'd be tracking down coordinates on the globe. And on and on.

There are [many standard schemes](https://www.iana.org/assignments/uri-schemes/uri-schemes.xhtml), but you can also make up your own (as long as they follow the syntax requirements). You could even hijack an existing one and interpret it differently!

The "authority" part is an identifier for the thing that is responsible for the URIs under its purview (like a website host). Certain kinds of URIs (like `http` URLs) require one, while others (like `mailto`, `tel`, or `geo`) do not. It all depends on how uniqueness is created for a particular scheme. An email address already has its authority baked in (and `mailto://example.com/me@example.com` would be pretty redundant). Telephone numbers use a country code to ensure uniqueness (`tel:+12345678999` is more understandable than something like `tel://+1/234/567/8999`). You'll mostly see the authority component for network URLs, where the authority is the web host (like `adamcoster.com` or `127.0.0.1:80`).

The "path" part is what identifies the resource within its authority (or globally, when there isn't an authority). So `/hello/world` could be the path for an `https` or `file` URI, while `me@example.com` could be the path for a `mailto` URI, and `13.4125,103.8667` could be the path for a `geo` URI. It's tempting to think of the path part as the same thing as a file path on a computer, and a file path _is_ a type of URI path (for the `file` scheme), but a URI path more generally can be pretty much anything.

The "query" part is some kind of extra data, and may or may not be well-defined for a particular URI scheme. You'll see it all the time in website URIs, where it usually consists of `key=value&another-key=another-value` pairs that change what shows up on the page. For example, when you submit a search to a search engine you'll typically end up at a page with a URI like `https://adamcoster.com?search=my+search`. But even with `https` URIs that query component can be pretty much anything -- whether or not it does something is up to the server hosting the page.

Finally<span id="example-paragraph"></span>, the "fragment" part is an identifier for something _within_ the resource identified by the prior parts of the URI. This URI feature is used a lot on the web to link to specific headings or other elements within a webpage. For example, [this link](#example-paragraph) adds a fragment to the URI for this very page that links specifically to this very paragraph!

Let's take a look at some examples:

- `https://adamcoster.com`: `https` scheme, `adamcoster.com` authority, and no path, query, or fragment
- `https://adamcoster.com:443/blog/links-urls-uris-oh-my?does=nothing#example-paragraph`: `https` scheme, `adamcoster.com:443` authority, `/blog/links-urls-uris-oh-my` path, `does=nothing#example-paragraph` query, and `#example-paragraph` fragment
- `mailto:me@example.com`: `mailto` scheme, no authority, `me@example.com` path
- `geo:13.4125,103.8667`: `geo` scheme, no authority, `13.4125,103.8667` path

## What's a URL (versus a URI)?

So we know that a URI is an identifier for a resource that follows a very specific syntax. And I gave some examples that you'd probably have called UR<b>L</b>s, like the address of this website. So what's the difference?

The difference is in the name: a URI is all about the _identifier_, while a URL (Uniform Resource <em>Locator</em>) is all about using the _location_ of a resource over a network. So URLs are a subset of URIs, specifically those that point to a resource on a network (like the world wide web).

Honestly, the difference is pretty academic and, in my opinion, not that important. The terms are used synonymously by most people, and whenever you find an explanation you'll see things get ambiguous really fast. For example, you can have perfectly formatted URIs that _look exactly like_ a valid website URL, but that particular URI might just be meant to _represent_ a resource rather than actually take you to it.

So if you call a URL a URI you'll always be correct. If you call a URI a URL you might be *technically* incorrect, but almost never in a way that matters.

## Links versus Hyperlinks

This one is easy: "link" is just the colloquial shorthand for "hyperlink"!

## Links versus URIs (or URLs)

So you've got a URL for a website. What can you do with it?

All kinds of things!

You could paste it into your browser's address bar, which tells your browser to go navigate to that URL. You could write your own program that fetches the resource (probably an HTML web page) at that URL and does something with it. You could print out the URL, frame it, and hang it on the wall.

Or, you could turn it into a _hyperlink_ to share in some kind of digital software so that you (or someone else) can easily get to that website in the browser just by clicking the hyperlink. That's all that a link is: some kind of convenient wrapper around a URI that you can click on to navigate to the designated resource.

On the web, what we mostly mean by a "link" is a piece of text wrapped in an HTML `<a>` element, for example `<a href="https://example.com">visible text</a>`. The default behavior of a browser is to visit the URI of the link when you click it. But a link doesn't *have* to be an HTML `<a/>` tag. Webpages can emulate the same behavior in all kinds of ways, and non-browser software can do the same. But the idea is the same: a link is a functional element of a software's user interface that, when clicked, takes you to its URI.

However, people often use "link" as a synonym for "URL" (though not vice versa). So when someone says, "send me the link!" what they actually want is the URL. But depending on how you send it to them, they might get a link _to_ that URL. And, for practical purposes, the link to the URL is usually more useful.

This synonym-ization is probably because so many kinds of software these days will automatically wrap a URL in a clickable link, using the URL as the _text_ of that link (e.g. converting `example.com` to `<a href="example.com">example.com</a>`).

## What's a Deep Link?

A "deep link" is a link to a URI that is meant to be opened in something *other* than a browser. They come in two flavors, named a bit differently by platform.

1. "Universal Links" (iOS) and "Android App Links" (Android) are generally regular old `http` URLs, but which are meant to be opened by a non-browser application if it installed on the user's device. If that app isn't installed, the URL can be opened in the browser instead. It's universal! This is mediated by a combination of metadata hosted by the URL's server, and by metadata included with the installed application.
2. "Custom URLs" (iOS) and "Deep Links" (Android) are URIs using *any* schema, meant to *only* be opened by a specific non-browser application. These are mediated by the installed application and don't need server support. This feature is also supported by Windows and MacOS.

People colloquially lump all of that together under the term "deep link". So when you see that term used you can assume it to mean "opens within a non-browser app", but that's about all you can assume without additional information.

### Universal Links

Universal-style deep links are useful for app versions of websites, allowing a single URL to open in the browser on desktop while opening in an app on mobile, always falling back to the browser if the app isn't installed.

### Custom Scheme URIs

Custom-scheme-style deep links are useful for URIs that should *always* be opened in an application (other than a browser), and that have no meaningful fallback in a browser. Further, it's the only way to deep link on Windows (and maybe MacOS?). So if you need to deep link on Windows and don't want to have *two* sets of URIs for the same resource (one universal for mobile and browser, one with a custom scheme for desktop), you're stuck with using custom schemes.

One of my favorite examples of deep-linking via a custom scheme is how [Visual Studio Code](https://code.visualstudio.com/) (VSCode) uses the `vscode` URI scheme to link from its published patch notes directly to the relevant setting in the installed app. It's a beautiful use case: VSCode has jillions of configuration options, so doing through the process of opening the app, getting to the settings page, searching for the target setting, and then finding it, can be quite tedious. Being able to link directly to said setting right from a web page makes things dramatically smoother.

In fact, each setting in VSCode as an option to "copy as URL", which will give you something like this: [vscode://settings/editor.fontSize](vscode://settings/editor.fontSize) (or [vscode-insiders://settings/editor.fontSize](vscode-insiders://settings/editor.fontSize) for the Insiders version of VSCode). If you've got VSCode installed, clicking that link will open it right up to that setting!

The biggest downside of Custom Scheme URIs is that they don't fail gracefully. If the associated app isn't installed, clicking a link for such a URI will just fail. In Chrome you'd just not see anything happen, but if you opened the console you'd see an error message. But that error isn't catchable, so there's no way to detect that a user has tried to follow a link that doesn't work on their device, preventing you from giving them instructions when things go awry. That's probably the main reason we so rarely see Custom Scheme URIs in the wild.

The next-biggest downside is that lots of applications where you'd want to plop down some links (Notion, Google Docs, Discord, etc) assume you've made a mistake when you try to link to a Custom Scheme URI and so they simply *don't let you*. So future readers of those materials would have to manually copy/paste those URIs into the browser box rather than just being able to click a link.

A solution to the prior issue is to use a redirection service that provides a regular `https` URL (that is thus linkable everywhere) that, when visited, will redirect to the URI using your custom scheme. Since I need this for my own purposes, I've made just such [a Custom Scheme URI redirection service](https://bscotch.github.io/redirect/) that anyone can use.