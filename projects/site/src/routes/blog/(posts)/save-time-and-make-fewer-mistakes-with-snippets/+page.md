Last week I was sitting down to write a custom JavaScript error and became immediately annoyed. I've had to do that just often enough that it felt like I was being a robot, but not so often that I could do it without looking back at references.

I thought, "I guess this is what ['snippets'](https://code.visualstudio.com/docs/editor/userdefinedsnippets) are for, right? I should figure out how those work."

After having done that... I'm now _even more annoyed_. Because snippets are amazing, VSCode (and other editors) already have a ton of useful built-in ones, and I've been using VSCode for _years_ without even trying them out (despite _definitely_ knowing that they existed).

Why hadn't I looked into them before!? Especially as a person who obsesses over automations and process improvement!

In short, I misunderstood snippets. I just sorta assumed that snippets were a library of boilerplate code that you could search and then insert into your new code. \*\*Yawn\*\*. That would mean having to search for the snippet I needed, then click around and edit the stuff that just inserted... How tedious! So I figured it was faster to write things from scratch.

I had made that assumption and then didn't take the two minutes it would have taken to look them up. The first few sentences of VSCode's [snippet docs](https://code.visualstudio.com/docs/editor/userdefinedsnippets) were all I would have needed to read.

Whoops!

It turns out that VSCode snippets have a spectacular feature that makes them so great, and that I simply didn't realize might exist: **placeholders**.

You can set up a snippet to have a bunch of placeholders, and then once you've plopped the snippet into your code you can hit `tab` to bounce from one placeholder to the next.

And! If two placeholders have the same name, _they get filled out at the same time_! The snippet can also dictate where your cursor should end up after you've filled the placeholders! It can even put in clipboard or selected text!

And! You can create per-language, per-project, and user-wide libraries! So you can sync your own favorite snippets to use everywhere you go, while also making sure that your project collaborators have access to whatever snippets everyone needs to make the work easier.

So much **power**!

Now I'm finally using the built-ins (they're particularly nice for `for` loops) and I've started to build my own little libraries.

Here's that dang custom error code as a Typescript snippet:

```json5
/** @file MyCustom.code-snippets */
{
	'Custom Error': {
		scope: 'typescript',
		// The prefix is the what gets used for
		// auto-complete, so when I type "error"
		// in VSCode (in a Typescript file) one
		// of the auto-complete options is this very
		// snippet.
		prefix: 'error-custom',
		body: [
			// Each entry in the array is treated as a separate
			// line, and VSCode will use the correct newline
			// characters based on your system and VSCode settings.
			'export class ${1:name} extends Error {',
			// The use of the tab character tells VSCode how things
			// should be *relatively* indented, so that it can
			// correctly auto-indent based on the code location
			// you put the snippet into.
			'\tconstructor(message:string) {',
			'\t\tsuper(message);',
			// Here I'm referencing the first placeholder from
			// above, so that when I'm filling it out above it
			// shows up down here as well!
			"\t\tthis.name = '$1';",
			'\t\tError.captureStackTrace(this, this.constructor);',
			'\t}',
			'}',
			'',
			"export function assert(claim:any, message = 'Assertion failed'): asserts claim {",
			'\tif(!claim){throw new $1(message);}',
			'}',
		],
	},
}
```

That delightful little snippet drops in a custom error class, plus an assertion to go along with it to throw that very same error. Here's an example of what it looks like fully-populated:

```ts
export class MyCustomError extends Error {
	constructor(message: string) {
		super(message);
		this.name = 'MyCustomError';
		Error.captureStackTrace(this, this.constructor);
	}
}

export function assert(
	claim: any,
	message = 'Assertion failed',
): asserts claim {
	if (!claim) {
		throw new MyCustomError(message);
	}
}
```

And here's a Markdown snippet that converts some selected text into a link to its definition (this functionality is quite specific to a project I'm working on):

```json5
{
	'Add class to term reference': {
		scope: 'markdown',
		prefix: 'term',
		body: [
			'[${TM_SELECTED_TEXT}](#term:${TM_SELECTED_TEXT/(.*)/${1:/downcase}/})',
		],
	},
}
```

That snippet makes it so that if I select the word `Something` and then start typing `term`, I'll overwrite the original word and then see VSCode's auto-complete suggestions. When I choose the above snippet, VSCode _remembers_ that I had selected `Something` before overwriting it with the snippet prefix, and so it inserts: `[Something](#term:something)`

Neat!

Now that I'm done kicking myself for all the wasted past efforts of _not_ using snippets, I'm extremely excited about building out my new snippet libraries and trying out those created by others.

**Don't be like me. Use snippets.**

_This post was adapted from an issue of the [DevChat](https://www.bscotch.net/post/devchat-19)._
