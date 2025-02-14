# Copied Google Docs content is wrapped in bold tag, and other surprises

If you look at the bug tracker or support system for just about any piece of software that allows users to enter _formatted_ content, I'd bet that somewhere in its early history is a complaint that stuff pasted from Google Docs is always bold.

I ran into this myself with my own application, and have now joined the ranks of devs whose time was wasted solving this problem, which turns out to have been created by a very weird choice on the part of Google Docs.

But first, a little preamble on how copy/pasting works!

## Copying to Clipboard

When you "copy" something, you end up with an object added to your clipboard that contains one or more representations of that copied thing in various formats. Most often, especially on the web, that'll be "plaintext" and/or "html" representations.

Applications and website can control (or override default) how a copied thing is represented in the clipboard.

When you c

Blork has some logic where it checks if a pasted item has an HTML entry and, if so, converts that to Markdown and then uses the result. Otherwise it uses plaintext. Except for cases where we can detect info about the source application and add improved, per-application logic.

I do this for things copied from VSCode, for example, so that it can give you a formatted code block, and for Favro tasks since they have some funky HTML.

Well, when you copy stuff from Google Docs the plaintext entry is USELESS (e.g. a copied list appears as a solid paragraph (no separation between items of any kind) and the HTML is INSANE.

On the HTML side, it wraps the thing you copied in a BOLD tag, but styled as normal-weight text! Like this:

<b style="font-weight:normal">Your copied thing</b>

WHY!? Impossible to guess. But the Internet is littered with people reporting bugs in everyone else's software that when they paste something from Drive it's always bold!

So then every other application (like Blork) has to have special logic to detect that pasted content is coming from Google Drive and then strip the surrounding bold tags.

Unfortunately that's the easy problem. Drive also just provides shitty HTML in the first place, so if you want to roughly capture the formatting from the copied content you (1) have to do a lot of processing, and (2) can't even capture all of it because it ISN'T EVEN ALL THERE.

For example, if you select some entries in a list, but your selection stops in the middle of one of the items, that last item appears as an ADJACENT PARAGRAPH to the list of other items, rather than as what it is (a list item). There's no way to differentiate that from an actual paragraph following a list, so it cannot be detected and fixed.
