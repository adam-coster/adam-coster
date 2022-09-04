---
slug: notion-changeable-links
title: How Notion's URLs change without breaking your links
description: |
  When you change a Notion page's title, its URL changes. But all of your old URLs still get you to that page! Here's how Notion does it.
editedAt: 2021-05-06T04:20:03.230Z
publishedAt: 2021-05-05T13:39:42.417Z
canonical: null
tags:
  - webdev
  - notion
  - programming
  - html
crossPosts:
  - 'https://dev.to/adamcoster/change-a-url-without-breaking-existing-links-4m0d'
---

I noticed something a while ago while updating the title of a page on one of my favorite webapps ([Notion](https://www.notion.so/)): _the URL changed to reflect the new title_.

My first thought was, "Well that's dumb, now my links to this page will be broken!" But then my links _weren't_ broken, so I did some experiments with Notion URLs to figure out what kind of sorcery they were doing. Turns out it was simple!

For some background: a URL is supposed to be a unique, _unchanging_ identifier for something on the Internet. When you write, say, a blog post, you'll typically end up with a URL that uses a weird "URL-friendly" version of that title (e.g. "What I ate this morning!" becomes "example.com/post/what-i-ate-this-morning"). Once you've published, most blogging software locks your URL. Why? Because if you change it you'll _break any links to that page_. That's terrible for people on the Internet clicking those links and terrible for your SEO.

This leads to the annoying scenario where the title shown in the URL deviates from that in the actual post, because that first title was a draft title that got locked in.

That's not too big of a deal, since blog posts and other old-school web pages don't change that much. Even when the title does change, the content is probably largely the same. So the old title (and thus URL) are still accurate enough.

But then you have something like Notion, where content is extremely dynamic by design. In this case, the title of a page could change all the time, and the content may eventually deviate completely from the initial version.

Notion has done something clever here. They have the URL _always reflect the title_. If you're a Notion user you can see it happen. **Live!** Just start editing the title and watch your URL...

But if they change the URL when you change the title, doesn't that break all the links to that page?

Nope! Each URL ends with a unique identifier (e.g. `notion.so/me/What-I-Ate-This-Morning-2345234523452345`). That unique suffix stays constant while the other part changes.

What Notion is doing here is _ignoring_ the part before the identifier when a request hits their server. It uses the never-changing identifier to find the page in question, then gets the _current_ name of that page and computes what the URL _should_ be with the current title of that page. If that's different from where you started, it redirects you (the redirect doesn't require re-rendering, since Notion is a Single Page App, so you'd only notice this if you watch the URL bar in your browser).

You can see this in action yourself on Notion:

- Create a page
- Set the title
- Grab the URL (which should have your current title in it)
- Delete the title part of the URL (keeping the identifier)
- Paste that into a new browser tab and hit ENTER.
- Watch the page and the browser's URL bar

In fact, you can put _any_ title in front of that identifier, whether it was ever a title of your page or not, and you'll still end up in the right place.

## But... SEO!

While being able to change the link at any time without breaking existing links is super neat, the immediate next question should be what happens to SEO for that page. Each distinct link will be treated as a _different page_ by search engines, so every time the URL changes for that page you'll be diluting your SEO juice.

Fortunately, there's a mechanism you can use to keep those SEO juices flowing: **set the canonical URL to the unchanging version of that URL** (the one with just the ID).

The "Canonical URL" is a piece of metadata you can add to a page that tells the browser (and search engines), "Hey, no matter how you got to this page, the following URL is the _real_ URL for this content."

You can stick this right into the head of an HTML document with a link element:

```html
<link rel="canonical" href="https://example.com/my-full-unchanging-url" />
```

Alternatively, the server can add it to the `Link` HTTP response header:

```
Link: <https://example.com/my-full-unchanging-url>; rel="canonical"
```

Unfortunately, Notion does _not_ use canonical URL metadata on its pages, so this neat feature probably has a bad impact on SEO. People probably don't host a lot of public content that needs good SEO, so maybe that's no big deal.

Notion has made one mistake here, though: they don't set the Canonical URL in either the HTML head (via the `<link rel='canonical'/>` tag) or the HTTP response headers (via the `Link` header). They should have done this using the ID-only (no title) URL. Without that, search engines will think they're seeing a different page every time they follow a different URL to get there (blowing up your SEO).

For sites with less content (personal blogs and the like) you could have very short identifiers, allowing you to use this trick without hideous URLs!

I'll probably be using this in my own projects, can you think of any use cases for it?
