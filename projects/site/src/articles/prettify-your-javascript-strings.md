---
slug: prettify-your-javascript-strings
title: Prettify your JavaScript strings
description: >
  Use JavaScript's template literals to make it a breeze
  to stick strings together and insert data into them.
publishedAt: 2021-02-01T15:00:13.713Z
tags:
  - javascript
  - node
  - tools
  - webdev
  - programming
  - typescript
crossPosts:
  - https://dev.to/adamcoster/prettify-your-javascript-strings-4gf8
  - https://beta.bscotch.net/post/oneline-undent
---

A new-ish feature of JavaScript is the [Template Literal](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals). It's basically a fancy string that lets you interpolate stuff and use newlines. But template literals have another feature that isn't as well-known, probably because they're a little weird and hard to find use cases for.

That feature is the "tagged" template. Below I highlight my favorite use case for tagged templates: preventing strings from making your code look hideous.

## Word-wrap long strings

Everyone says to limit how many characters appear in in each row of your code. This keep-it-short directive is a problem for one kind of data in particular: strings. A single string literal can be longer than those 80 characters all by itself, and you can't refactor that length away.

So what do you do?

The classic solution looks like this:

```js
const myString =
	'Oh how I wish ' +
	'that this string was shorter ' +
	"so that I didn't have to break " +
	'it up like this. I mean seriously ' +
	'look how hard it is to read! ' +
	'and edit!';
```

Hideous.

This is something we can dramatically improve with a tagged template. I've made a tag called `oneline` that lets you use as many line breaks and as much indentation as you want, while still ending up with a oneline string! (For the `oneline` code see the bottom of this article.)

```js
const myString = oneline`
  When you console log this it will just
  be one long line. It looks like a bunch.
  But it's just one.
  I can even ident the rows.
  I could have started the first
  line right after that first tick,
  and can put the final tick on its
  own line or at the end of this one.
  `;
```

While that string _looks_ like it has a bunch of newlines and tabs in it, it actually doesn't. What you see is not what you get with tagged templates. Here, what you actually get is that `myString` is one long string without extra spaces or newlines.

## Match code indentation with multiline strings

There is another common problem with strings in code: indentation in multiline strings. Template literals allow us to put breaks in our strings (without having to explicitly type out `\n`), giving us two options out of the gate for dealing with newlines and indentation:

```js
const myString =
	'Title\n' + '  Indented line 1\n' + '  Indented line 2\n  Indented Line 3\n';

const myString = `Title
  Indented Line 1
  Indented Line 2
  Indented Line 3
`;
```

Hey, that template literal doesn't look bad at all, does it! But how about now:

```js
function myFunction() {
	let myString;
	if (someCondition) {
		if (someOtherCondition) {
			myString = `Title
  Indented Line 1
  Indented Line 2
  Indented Line 3
`;
		}
	}
}
```

Gross. Since the template literal uses the whitespace exactly as typed, your multiline string cannot adhere to the indentation of the code in its context. That is, unless we use a tagged template. I've made a tag called `undent` that lets you write multiline strings while adhering to the indentation of the code context. I call it "undent" because it removes the superfluous indentation. (For the `undent` code see the bottom of this article.)

```js
// Same *result* as before, but allowing indentation to match the code.
function myFunction() {
	let myString;
	if (someCondition) {
		if (someOtherCondition) {
			myString = undent`
        Title
          Indented Line 1
          Indented Line 2
          Indented Line 3
        `;
		}
	}
}
```

## How it works

Template tags are regular old functions that receive the contents of the template literal as a bunch of strings and the interpolated values. If you stitch these together, you get the whole string. The tag function lets you do stuff _before_ stitching all of that together if you want.

Here's the code (in Typescript):

```ts
/** @file https://github.com/bscotch/node-util/blob/main/src/lib/strings.ts **/

/**
 * Concatenate the string fragments and interpolated values
 * to get a single string.
 */
function populateTemplate(strings: TemplateStringsArray, ...interps: string[]) {
	let string = '';
	for (let i = 0; i < strings.length; i++) {
		string += `${strings[i] || ''}${interps[i] || ''}`;
	}
	return string;
}

/**
 * Shift all lines left by the *smallest* indentation level,
 * and remove initial newline and all trailing spaces.
 */
export function undent(strings: TemplateStringsArray, ...interps: string[]) {
	let string = populateTemplate(strings, ...interps);
	// Remove initial and final newlines
	string = string.replace(/^[\r\n]+/, '').replace(/\s+$/, '');
	const dents = string.match(/^([ \t])*/gm);
	if (!dents || dents.length == 0) {
		return string;
	}
	dents.sort((dent1, dent2) => dent1.length - dent2.length);
	const minDent = dents[0];
	if (!minDent) {
		// Then min indentation is 0, no change needed
		return string;
	}
	const dedented = string.replace(new RegExp(`^${minDent}`, 'gm'), '');
	return dedented;
}

/**
 * Remove linebreaks and extra spacing in a template string.
 */
export function oneline(strings: TemplateStringsArray, ...interps: string[]) {
	return populateTemplate(strings, ...interps)
		.replace(/^\s+/, '')
		.replace(/\s+$/, '')
		.replace(/\s+/g, ' ');
}
```

I've included these template tags in [a node utility module](https://www.npmjs.com/package/@bscotch/utility) I use in most of my projects. That's a quick way to try these out.

I'd love to hear about your favorite use cases for tagged templates!

_Join the [DevChat newsletter](https://tinybs.co/devchat) to get more stuff like this, plus discussions of entrepreneurship and gamedev._
