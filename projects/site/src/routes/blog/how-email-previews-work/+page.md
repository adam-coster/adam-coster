Depending on your email client, when looking at your inbox you probably see three main things for each message:

1. The sender's name.
2. The subject line.
3. A preview of the text content (e.g. the first sentence of the body).

You may have noticed that sometimes that preview doesn't appear anywhere in the actual content. Where does this sneaky and _false_ preview come from?

Turns out it's pretty simple. Most of the emails we get are HTML (instead of plain text). Most email clients understand HTML perfectly fine, and also allow for some basic CSS. Email clients are frustratingly behind the times when it comes to CSS, but they have more than enough CSS juice to solve the problem at hand: the magical mystery preview.

All that happens is that the preview text is added to the email body as the _first content_ of its HTML, but with a combination of CSS properties that makes it highly likely to not be shown (even by email clients that can barely handle CSS at all). It'll look something like this:

```html
<span
	style="display:none;font-size:1px;color:#333333;line-height:1px;max-height:0px;max-width:0px;opacity:0;overflow:hidden;"
>
	Sneaky, magical preview text!
</span>
```

In your inbox, the parser that selects the first line of text for the preview doesn't know about CSS. So it grabs that text, even though the HTML container in which it resides is supposed to be hidden. Once you open the email, the parser that displays the whole body _does_ evaluate the CSS, and so that preview text is invisible.

And there you have it, magical email previews!

The main limitation of this approach is that you don't control the _full_ preview. If the user's preview container in their browser is wide enough, they'll see the entirety of the preview text plus the start of whatever text comes next. This can make for some wonky previews.

I saw a clever solution to this that Substack uses for its newsletter service. They add a whole bunch of whitespace characters to the end of your snippet text:

```html
<span
	style="display:none;font-size:1px;color:#333333;line-height:1px;max-height:0px;max-width:0px;opacity:0;overflow:hidden;"
>
	Sneaky, magical preview text!
	&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;
	<!-- many MANY times -->
</span>
```

You may be wondering why that whitespace isn't just trimmed away by the renderer. Apparently that's what that `&zwnj;` ("[zero-width non-joiner](https://en.wikipedia.org/wiki/Zero-width_non-joiner)") character is all about. I had never heard of the thing, but apparently its existence prevents the stripping of that whitespace. The end result is that your preview text has a ton of non-stripped whitespace after it, so that the likelihood of someone being on a monitor wide enough to show your text, plus all that whitespace, plus the next line of content-text is extremely low.

_This article was adapted from a portion of [Issue #8](https://www.bscotch.net/post/devchat-8) of the [DevChat newsletter](https://tinybs.co/devchat)._
