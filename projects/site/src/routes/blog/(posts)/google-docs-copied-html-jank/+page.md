If you look at the bug tracker or support system for just about any piece of software that allows users to paste _formatted_ content, I'd bet that somewhere in its early history is a complaint that stuff pasted from Google Docs is always bold.

What's happening? And why?

To answer we need first some context: let's talk about how copy/paste works in the browser!

## Copying to Clipboard

When you "copy" something, you end up with an object added to your clipboard that contains one or more representations of that copied thing in various formats (a.k.a. "MIME types"). Most often, especially on the web, that'll be "plaintext" and/or "html" representations.

Applications have defaults for what they copy (probably whatever you've selected, converted to HTML and plaintext). Those defaults are useful, but not always what you want.

_(See [my "What's in my clipboard?" tool](/tools/paste) to experiment! Copy this very text and paste it in there to see what the browser actually copies.)_

On the web, you can decide what gets copied using JavaScript's `navigator.clipboard.write()`. In combination with the `oncopy` event, you can fully control what goes into the clipboard when someone copies something.

Why would you want this?

As an example use case, I have a webapp where I want copied content to always be in Markdown for the plaintext version. But when the browser converts a selection into plaintext, it just strips out all of the HTML and thus loses all formatting information. Lists become paragraphs, bolds evaporate, intention is lost.

So I hijack `oncopy`, ignore its contents, grab the current selection from the browser as HTML, clean it up to remove styling, convert it to Markdown, and then stick both the cleaned up HTML and the Markdown into the clipboard for a much better pasting outcome in other apps.

## Pasting to Clipboard

Pasting works the same way, just sort of in reverse. While you can write to the clipboard at any time via JavaScript, you _cannot_ read from it at any time. That'd be quite the security issue if you could!

But you can hijack the `onpaste` event to see what's in the clipboard and then change what happens depending on what's in there. That's how my [clipboard content checker](/tools/paste) works. This can be really useful to ensure that pasting stuff from some external source into an application you control gives a good outcome.

For example, content in that webapp I mentioned is always in Markdown and frequently includes code snippets. So I'm often pasting stuff I've copied from Visual Studio Code into text fields. VSCode includes the raw text version of what's copied, which is exactly what I want, but that doesn't include anything about the code's programming language. Ideally, when I paste from VSCode I'd end up with a Markdown codeblock that includes the language identifier, so that the end result will be rendered as a syntax-highlighted code block while its source is in perfect Markdown.

So instead of:

    let hello = "world";

I'd end up with:

    ```js
    let hello = 'world';
    ```

Which would then nicely render like this:

```js
let hello = 'world';
```

If you look at what actually gets copied from VSCode, you'll see there are additional mimetype entries that include the language! So I use that info when I hijack `onpaste` to normalize indentation of the code snippet and wrap it in Markdown with the language tag.

I do something similar for each source that I frequently paste from: I'll look at examples of what gets copied and figure out what weird things they're doing, then write up some where'd-this-come-from detection plus normalization code to get the most useful pasted outputs.

## Okay, back to Google Docs

When you copy stuff from Google docs you get a few entries in the clipboard. The plaintext is basically useless since it loses all formatting information. There is also a _huge_ data structure that Docs uses for its own paste handling, and that thing is quite inscrutable and probably not useful for any case outside of Google Docs.

So the thing that's left that we _could_ do something useful with is the copied HTML. However... that HTML is janky as hell.

The main thing, and the impetus for this blog post, is that Google Docs _always_ wraps its HTML version of whatever you copied in a BOLD tag! Which is already weird. But then it doubles down on weird and adds an inline style to that bold tag to reset the font weight to normal! Like this:

```html
<b style="font-weight:normal">Your copied thing</b>
```

WHY!? Impossible to guess. Maybe to punish is for daring to paste our content into other applications.

The Internet is littered with people reporting bugs in everyone else's software that when they paste something from Docs it's always bold. Because most places where you can post HTML also strip out inline styles, so that the inline bold-canceling-style gets uncanceled.

And that's the easy problem we face when dealing with pasted Docs stuff. Unfortunately, Drive also provides janky HTML for the rest of what you copy, so if you want to roughly capture the formatting from the copied content you (1) have to do a lot of processing, and (2) can't even capture all of it because it ISN'T EVEN ALL THERE.

For example, if you select some entries in a list, but your selection stops in the middle of one of the items, that last item appears as an ADJACENT PARAGRAPH to the list of other items, rather than as what it is (a list item). There's no way to differentiate that from an actual paragraph following a list, so it cannot be detected and fixed.

If you do want to try to handle Docs content in your webapp, the first step is detecting that that's where pasted content came from and getting rid of that silly `<b/>` wrapper. To do that you can use an `onpaste` event like this:

```js
function onpaste(clipboardEvent) {
	let html = clipboardEvent.clipboardData?.getData('text/html');
	// Stuff copied from the web is typically wrapped in
	// these Start/EndFragment comments, so let's yeet those off
	html = html?.replace(
		/^.*<!--StartFragment-->(.*)<!--EndFragment-->.*$/s,
		'$1',
	);
	const isGoogleDocs = clipboardEvent.clipboardData?.types.includes(
		'application/x-vnd.google-docs-document-slice-clip+wrapped',
	);

	// Normalize content
	if (isGoogleDocs && html) {
		// It'll start with a <meta> tag and then the rest is
		// wrapped in a <b/>. So yeet that stuff off, too!
		html = html.replace(/^<meta [^>]+><b [^>]+>(.*)<\/b>$/, '$1');
	}

	// At this point you'll have the actual HTML that you
	// intended to copy (more or less, since, you know, jank),
	// so you can return it as-is if you support HTML.
	// Or convert it to Markdown, or do something else entirely.
}
```
