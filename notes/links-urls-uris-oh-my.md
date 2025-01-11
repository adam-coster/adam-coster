What's the difference between a hyperlink, a link, a deep link, a <abbr title="Uniform Resource Locator">URL</abbr>, and a <abbr title="Uniform Resource Identifier">URI</abbr>?

Collectively, these are all about solving two related problems:

- Finding a way to unambiguously refer to something; and
- Providing instructions for how to _locate_ that thing.

## URLs versus URIs

A <abbr>URI</abbr>, or "Uniform Resource Identifier", is a structured string of text with [well-defined syntax](https://datatracker.ietf.org/doc/html/rfc3986) ("uniform") that tries to do as the name describes: provide an "identifier" for a "resource".

That's all a little abstract.

### What's a Resource?

A resource could be, well, anything. A page on the internet. An interface element inside a piece of software. A file on your hard drive. GPS coordinates. A person. The concept of love.

Hence the generic word "resource": any other term would be too constraining!

### What's an Identifier?

An "identifier" is some kind of label, or name, that doesn't necessarily mean anything by itself, but can be associated with a resource.

For example, _I_ am a specific resource. I can be associated with all kinds of identifiers: my first name (Adam), my full name (Adam Coster), my personal email address (not telling), my work email address (also not telling), the web domain hosting my personal website (`adamcoster.com`), the URL to a specific _page_ on that website (`https://adamcoster.com/#ids`), or any of the social media and similar things listed on that very page.

An identifier is most useful when the resource it identifies is unambiguous in the context where it's used. So my first name is a great identifier for me when no one else in the room is _also_ named Adam. But if someone is, then my full name, or a nickname, or some other disambiguated identifier would be better.

But that's part of the trick: everyone using an identifier of a certain _type_ (like a name, or a URL) needs to know the associated context to be able to disambiguate.

### Back to URIs

The purpose of a URI is to provide a means for creating an unambiguous identifier, for use by anything (human or machine) that understands that the thing they're looking at is a URI and knows how to read it.

A URI is structured like this:

`scheme://authority/path?query#fragment`

Except for the scheme, all parts of a URI are optional. All parts have rules about what counts as valid syntax.

The scheme (sometimes called the "protocol") indicates the process by which a reader would associate the URI to its resource. For example, `http` indicates that you'd find the associated resource via a network, using the Hypertext Transfer Protocol. `https` means you'd do the same, but with a security layer. `mailto` indicates that you'd be looking for a mail server over a network. `tel` indicates that you'd use a telephone network. [`geo`](https://www.rfc-editor.org/rfc/rfc5870.html) indicates that you'd be tracking down coordinates on the globe. And on and on.

There are [many standard schemes](https://www.iana.org/assignments/uri-schemes/uri-schemes.xhtml), but you can also make up your own (as long as they follow the syntax requirements). You could even hijack an existing one and interpret it differently! After all, and identifier only ever has meaning in a specific context. Change the context, change the meaning!

The "authority" is an identifier for the thing that is responsible for the URIs under its purview (like a website host). Certain kinds of URIs (like `http` URLs) require one, while others do not (like `mailto`, `tel`, or `geo`). It all depends on how uniqueness works for a particular scheme. An email address already has its authority baked (`mailto://example.com/me@example.com` would be pretty redundant). Telephone numbers use a country code to ensure uniqueness (`tel:+12345678999` is more understandable than something like `tel://1/234/567/8999`, though the standard could have used the latter if people wanted to be weird about it). You'll mostly see the authority component for network URLs, where the authority is the web host (like `example.com` or `127.0.0.1:80`).

The "path" is some kind of representation of the resource within its authority (or globally, when there isn't an authority). So `/hello/world` could be the path part of an `https` or `file` URI, while `me@example.com` could be the path for a `mailto` URI, and `13.4125,103.8667` could be the path for a `geo` URI. It's tempting to thinking of the path part to be the same as a file path on a computer, and a file path _is_ a kind of URI path, but a URI path more generally can be pretty much anything!

The "query" is some kind of extra data, and may or may not make sense or be well-defined for a particular URI scheme. You'll see it all the time in website URIs, where it usually consists of `key=value` pairs that change what shows up on the page. For example, when you submit a search to a search engine you'll typically end up at a page with a URI like `https://search.example.com?query=my+search`. But even with `https` URIs that query component can be pretty much anything -- whether or not it does something is up to the server hosting the page!

Finally<span id="example-paragraph"></span>, the "fragment" is an identifier for something _within_ the resource identified by the prior parts of the URI. This URI feature is used a lot on the web to link to specific headings or other elements within a webpage. For example, [this link](#example-paragraph) adds a fragment to the URI for this very page that links specifically to this very paragraph!

Let's take a look at some examples:

- `https://adamcoster.com`: `https` scheme, `adamcoster.com` authority, and no path, query, or fragment
- `https://adamcoster.com:443/blog/links-urls-uris-oh-my?does=nothing#example-paragraph`: `https` scheme, `adamcoster.com:443` authority, `/blog/links-urls-uris-oh-my` path, `does=nothing#example-paragraph` query, and `#example-paragraph` fragment
- `mailto:me@example.com`: `mailto` scheme, no authority, `me@example.com` path
- `geo:13.4125,103.8667`: `geo` scheme, no authority, `13.4125,103.8667` path

### And back to URLs

So we know that a URI is an identifier for a resource that follows a very specific syntax. And I gave some examples that you'd probably call a UR<em>L</em>, like the address of this website. So what's the difference?

The difference is in the name, a URI is all about the _identifier_, while a URL (Uniform Resource <em>Locator</em>) is all about using the identifier to find a resource over a network. So URLs are a subset of URIs, specifically those that point to a resource you can find over a network.

Honestly, the difference is pretty academic and, in my opinion, not really that important. The terms are used synonymously by most people, and whenever you find an explanation you'll see things get ambiguous really fast. For example, you can have perfectly formatted URIs that _look exactly like_ a valid website URL, but that particular URI might just be meant to _represent_ a resource rather than actually take you to it. Conversely, a URL might be meant to take you to a resource that doesn't even exist -- in that case, has it _become_ a URI?

So if you call a URL a URI you'll always be correct. If you call a URI a URL you might be incorrect, but almost never in a way that matters.

## Links versus Hyperlinks

This one is easy: "link" is just the colloquial shorthand for "hyperlink"!

## Links versus URIs (or URLs)

So you've got a URL for a website. What can you do with it?

All kinds of things!

You could paste it into your browser's address bar, which tells your browser to go navigate to that URL. You could write your own program that fetches the resource (probably an HTML web page) at that URL and does something with it. You could print it out, frame it, and hang it on the wall.

Or, you could turn it into a _hyperlink_ to share in some kind of digital software so that you (or someone else) can easily get to that website in the browser just by clicking the hyperlink. That's all that a link is: some kind of convenient wrapper around a URI that you can click on to navigate to the designated resource.

On the web, what we mostly mean by a "link" is a piece of text wrapped in an HTML `<a>` element, for example `<a href="https://example.com">visible text</a>`. The default behavior of a browser is to visit the URI of the link when you click it.

However, people often use "link" as a synonym for "URL" (though not vice versa). So when someone says, "send me the link!" what they actually want is the URL. But depending on how you send it to them, they might get a link _to_ that URL. And, for practical purposes, the link to the URL is usually more useful.

This is probably because so many kinds of software these days will automatically wrap a URL in a clickable link, using the URL as the _text_ of that link (e.g. converting `example.com` to `<a href="example.com">example.com</a>`).

## What's a Deep Link?
