# JSON Guide

[JSON](https://en.wikipedia.org/wiki/JSON) (JavaScript Object Notation) is a super popular way of representing complex data for several reasons:

- It's *precise* and *unambiguous* (so computers can read it)
- It's not *too* verbose (so humans can read it)
- It's simple (so humans can learn it)

How does JSON work?

## Data Types & Format

JSON can be used to represent data structures composed of the following kinds of data subtypes:

- **Number**: A number! Just like you'd expect
- **Boolean**: `true` or `false`
- **String**: Some text, always wrapped in double-quotes, like `"hello"`
- **Null**: `null`, which is a sort of "empty" value. Interpretation depends on context, but it usually indicates the *absence* of something.
- **Array**: A list of data (of any JSON-compatible type), separated by commas with the whole thing wrapped in square brackets, e.g. `["hello", -10.3, null, ["another array"], {"a key":"for an object"}, false]`
- **Object**: A collection of keys (always strings) and corresponding values (any JSON data type), represented as comma-separated key-value pairs, with colons between each key and its value, all surrounded by a pair of curly brackets, e.g. `{"this is a key": "this is a value", "next key":["value can be arrays",10], "yes":true}`

Looking at those examples, you might be thinking, "Whoa, that's really hard to read." You're not wrong!

JSON allows you to use however much whitespace you want between *separators*, *values*, and *brackets*. If we use good spacing plus a dash of syntax highlighting, it gets a lot better. Here's that last example again but nicely formatted:

```json
{
	"this is a key": "this is a value",
	"next key": [
		"value can be arrays",
		10
	],
	"yes": true
}
```

JSON is extremely strict. If you forget a comma (or have one too many), or use single-quotes instead of double-quotes for your strings, it'll be considered invalid and most parsers will throw errors. 

## JSON Interpretation

Well-written JSON *describes itself*, but it's pretty rare that something is so self-descriptive that you don't need to look for documentation or do experiments.

Typically, JSON "Objects" are used to represent instances of things that have *properties*. For example, a "user" may have a name, age, email address, password, and a jillion other possible properties. You might represent all that with an Object like so:

```json
{
	"name": "Vlad",
	"email": "vlad@impaler.blood",
	"age": 300,
	"isVampire": true
}
```

An Array is typically used to contain a set of related values, though that isn't strictly required. A common use case is getting search results from a web service, where you'll end up with more than one result for the same sort of thing.

For example, let's say you fetch the list of users from a service. That list might look something like:

```json
[
	{
		"name": "Adam",
		"email": "adam@example.com"
	},
	{
		"name": "Vlad",
		"email": "vlad@impaler.blood"
	},
	{
		"name": "Susan",
		"email": "susan@example.com"
	}
]
```

While you'll frequently see things like lists of objects, it is rare that you'll get them like in the above example without any *metadata* (data about data).

Typically, if you're getting JSON data from some source it will be an Object whose root keys are for both metadata and the actual data itself. For example:

```jsonc
{
	// metadata...
	"page": 1,
	"total_pages": 5,
	"total_returned": 3,
	"search_results":
		// actual data we wanted...
		[
			{
				"name": "Adam",
				"email": "adam@example.com"
			},
			{
				"name": "Vlad",
				"email": "vlad@impaler.blood"
			},
			{
				"name": "Susan",
				"email": "susan@example.com"
			}
		]
}
```

Interpreting JSON data is all about understanding where it came from, looking for any standardization of the outputs from that source, knowing what you were trying to obtain, and then figuring out what all of the keys and values mean. It can be tricky business, especially for deeply nested data (objects of arrays of arrays of objects of objects... it can get pretty gnarly!).

## Special Characters, Escape!

I noted above that strings are always wrapped in double-quotes. What if you want to put a double-quote inside of a string?

There are other special cases, too. What if you want to put a newline or a tab in a string?

Double-quotes are "special characters." They're special because they don't simply indicate a text character, they have a *function*. They are providing instructions to parsers.

For example, a boring old non-special `R` means "I'm the letter 'R'" while the special `"` means, "A string is starting or ending!" See that difference? The `"` is *functional*.

Newlines are a related, but different problem. How do you represent a newline in text? You might think that you can just hit the ENTER key and be done with it. Not a bad guess, but it doesn't work that way for JSON! If you slap a newline into a string via the ENTER key, JSON gets stuck at that newline and assumes you forgot an end-quote, and then throws errors. Oops.

To represent newlines without using newlines, you have to *make a regular character special*. It's sorta the opposite of the double-quotes case, where we made a special character more regular.

There is a special character you can use inside JSON strings that basically toggles special-ness. It says, "If the next character is already a special character, make it a regular character. But if it's *not* a special character, make it one!"

We call this special character the "escape character". Why? I guess because it lets you escape from the normal state of the world? Who knows. The point is that the escape character inverts the specialness of the next character. JSON's escape character is `\`.

*Side note: This whole "escape character" thing is quite common in text programming and data representation, and the `\` character is probably the most common character used for this purpose.*

So if you want to use a double-quote *inside* a string, you need to differentiate it from a double-quote that would *end* the string. You do this by escaping it: `\"`.

If you want to stick a newline inside a string, instead of hitting that ENTER key you invoke the special form of the letter `n`: `\n`.

What if you want to use a literal `\` character inside a string? You guessed it: `\\`.

(There are other special characters in JSON, but mostly you'll only care about double-quotes, newlines, and tabs.)

For example:

```json
{
	"name": "Adam",
	"email": "me@example.com",
	"bio": "Adam is writing stuff about JSON.\nSee that \"slash-n\" right back there? That was a NEWLINE! \"What about quotes?\" you ask?\n\tWell, you just saw an escaped quote with a newline and tab character after it!"
}
```

## JSON Limitations

While JSON is super popular on the web and elsewhere, it has some significant limitations that make it less than ideal for some use cases:

- It only has one kind of "number". In programming, we often want to differentiate between integer ("whole") numbers and floating-point ("decimal") numbers. JSON doesn't have that distinction, so you have to be careful about how you use numbers.
- There are other data types that we very often want to use, like dates and binary, that JSON does not support. Those have to be stored as strings or numbers and converted back and forth as needed. This can turn into quite the headache.
- It's more verbose than is strictly necessary. For example, since the keys in JSON Objects are *always* strings, why do we need to wrap them in double-quotes?
- It does not support comments, in the programming sense. In programming, a "comment" is a non-functional bit of text that can be used to provide information to the reader without impacting interpretation.

There are some extensions to plain JSON, like JSON5 and JSONC, and some libraries that add support for other data types, but those are not natively supported by most software.

## JSON Tools

If you're trying to read or write JSON, in either case you're going to want some decent tools to catch problems early. It's incredibly easy to miss a special character (or forget to escape one), especially if you don't have good indentation and syntax highlighting.

[VSCode](https://code.visualstudio.com/) is always a great go-to for dealing with JSON. You can edit JSON files directly with it, or create a new tab <kbd><kbd>Ctrl</kbd> + <kbd>N</kbd></kbd> and paste some JSON into it (then set the language to JSON for that tab). You'll get syntax highlighting out of the box, and VSCode will highlight errors and try to autocomplete brackets and quotes for you! You can even get auto-formatters (also called "prettifiers") that will fix all the indentation for you, so you can dump a wall of spaceless nightmare-JSON and then let robots make it readable for you.

If you don't have VSCode ready to go for JSON, or are otherwise in a pinch, there are tons of [online JSON tools](https://geekflare.com/json-online-tools/) out there.