Custom error classes are great:

- You can add your own fields, like error codes and such
- You can simplify your error-handling logic while also making it more robust
- You can add logging and other useful functionality right into the error class

This post includes a short discussion about how and why to create custom JavaScript errors, plus JavaScript (and Typescript) templates and Visual Studio Code snippets to make it easy to create your own.

## How to write a custom JavaScript Error class

Creating a custom error class in JavaScript is pretty straight-forward: you just need to extend the base `Error` class:

```js
class MyError extends Error {}
```

That's really all it takes! Then you can create and throw `MyError` instances just as you would regular `Error`s:

```js
throw new MyError("Oh no!");
```

The one additional thing I *always* add to my custom error classes is a call to the static `Error.captureStackTrace`, which is [available on V8-based runtimes](https://v8.dev/docs/stack-trace-api#stack-trace-collection-for-custom-exceptions).

Passing your error's constructor to `Error.captureStackTrace` makes it so that your constructor code won't show up in the stack trace. This isn't essential, but it makes things a little less noisy during debugging.

You can take this a step further: when you have an assertion function that throws your custom error, you can pass *that* function into `Error.captureStackTrace` instead of your error's constructor. This makes your assertion-caused traces easier to read by starting the trace right where the assertion was called.

*(Since this API is only available in V8, you'll want to wrap it in an `if` or use optional chaining ([the `?.` operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining)) for compatibility.)*

```js
export class MyError extends Error {
	constructor(message, asserter=undefined) {
    // (Now that we're overriding the parent `Error` 
    //  constructor, we have to call `super`!)
		super(message);
		Error.captureStackTrace?.(this, asserter || this.constructor);
	}
}
```

## Why write custom Error classes?

JavaScript runtimes provide a base `Error` class, plus some more-specific classes that extend that base class (like `SyntaxError` and `TypeError`).

You can differentiate between these kinds of errors using the `instanceof` operator:

```js
try{
	// do something naughty...
}
catch(err){
	// There's no way to know ahead of time what caused `err`, so
	// you can use `instanceof` to help narrow down what happened.
	if(err instanceof SyntaxError) {
		// do whatever makes sense in that case
	}
	else if(err instanceof TypeError){/* ...*/ }
	// etc etc
}
```

The more information you can get from the caught error, the easier it is to handle it properly without creating *even more* problems.

To that end, custom error classes let you control *exactly* what information is available during error handling, and can provide type information to reduce the chances that you create new errors during error-handling. Plus, you can add all kinds of bells and whistles to make them even *more* useful.

### Case study: `ENOENT` in Node's `fs` module

In Node, if you try to `fs.readFileSync()` a non-existent file, an error is thrown. If you catch that error and inspect it, you'll see that it's a regular old `Error` instance (i.e. *not* from child class) but has had several new fields added to it: `errno`, `syscall`, `code`, and `path`.

When `try`/`catch`ing code that might throw such an error, you have to handle it like this:

```js
import fs from 'fs';
try{
	fs.readFileSync('fake-file.nope');
}
catch(err){
	if(err instanceof Error && 'code' in err && err.code === 'ENOENT'){
		// Then this was a non-existent file error, handle accordingly!
	}
}
```

Even once you've narrowed down that the caught error has `err.code === ENOENT`, that doesn't tell us anything else about the error instance we've caught. We have to do the same kinds of laborious checks for any other field we want to check.

So not only is it clunky, it's also easy to create *more errors* from inside your `catch` block!

However, if Node instead used a custom `FileError` class (for example), we'd only need to do *one* check and then our editor would immediately know about all other non-standard error fields provided by the custom class:

```js
import {readFileSync, FileError} from './fs-wrapper-with-custom-errors';
try{
	readFileSync('fake-file.nope');
}
catch(err){
	if(err instanceof FileError){
		// Then we already know that this instance will have the
		// `errno`, `syscall`, `code`, and `path` fields, so we can
		// get right into the handling logic!
	}
}
```

### Case Study: Uncaught errors in Express.js

The super-popular Node.js server library, [Express](https://expressjs.com/), has a powerful feature: you can add a route whose whole job is to [handle errors thrown inside your other routes](https://expressjs.com/en/guide/error-handling.html).

Used in combination with custom error classes, you can simplify a lot of otherwise-cumbersome error handling. For example, instead of having every route have its own logic for handling 404s, via its own try/catch blocks, you can use a custom error to put all of that logic in one place:

```ts
class NotFoundError extends Error {}
function assertFound(thing:any): asserts thing {
	if(!thing){ throw NotFoundError(); }
}

app.get('/some-route', (req,res)=>{
	const something = getThingIfItExists();
	assertFound(something); // throws if not found!
	res.send(something);
});

app.use((err, req, res, next)=>{
	if(err instanceof NotFoundError){
		return res.sendStatus(404);
	}
});
```

## Time to make your own!

Now that we've covered the hows and whys of custom JavaScript Error classes, we just need it to be *easy*. To that end, the remaining sections provide templates and VSCode snippets for making custom Error classes in JavaScript and Typescript.

### Custom Error Class Template (JavaScript)

Here's the JavaScript template, complete with full JSDocs so you can still get type support from your IDE. You can paste this into your code, find-replace "My" with whatever name you want, and you're good to go (though using the VSCode snippet would be less tedious!).

```js
export class MyError extends Error {
	/**
	 * @param {string} message The error message
	 * @param {Function} [asserter] The assertion function that threw the error. Removes stack-trace noise if provided.
	 */
	constructor(message, asserter) {
		super(message);
		Error.captureStackTrace?.(this, asserter || this.constructor);
	}
}

/**
 * @param {any} err
 * @returns {err is MyError}
 */
export function isMyError(err) {
	return err instanceof MyError;
}

/**
 * Assert a condition and throw a MyError if the condition is not met
 * @param {any} condition The condition to assert
 * @param {string} message The error message
 * @param {any} [cause] The cause of the error
 * @returns {asserts condition}
 */
export function assertMyClaim(condition, message, cause) {
	if (!condition) {
		const err = new MyError(message, assertMyClaim);
		if (cause) {
			err.cause = cause;
		}
		throw err;
	}
}
```

And a VSCode snippet to make it really easy:

```json
{
  // ...your other snippets
  "Create custom JavaScript Error": {
		"scope": "javascript",
		"prefix": "error-custom",
		"body": [
			"export class ${1:Custom}Error extends Error {",
			"\t/**",
			"\t * @param {string} message The error message",
			"\t * @param {Function} [asserter] The assertion function that threw the error. Removes stack-trace noise if provided.",
			"\t */",
			"\tconstructor(message, asserter) {",
			"\t\tsuper(message);",
			"\t\tError.captureStackTrace?.(this, asserter || this.constructor);",
			"\t}",
			"}",
			"",
			"/**",
			" * @param {any} err",
			" * @returns {err is ${1:Custom}Error}",
			" */",
			"export function is${1:Custom}Error(err) {",
			"\treturn err instanceof ${1:Custom}Error;",
			"}",
			"",
			"/**",
			" * Assert a condition and throw a ${1:Custom}Error if the condition is not met",
			" * @param {any} condition - The condition to assert",
			" * @param {string} message - The error message",
			" * @param {any} [cause] - The cause of the error",
			" * @returns {asserts condition}",
			" */",
			"export function assert${1:Custom}Claim(condition, message, cause) {",
			"\tif (!condition) {",
			"\t\tconst err = new ${1:Custom}Error(message, assert${1:Custom}Claim);",
			"\t\tif(cause){",
			"\t\t\terr.cause = cause;",
			"\t\t}",
			"\t\tthrow err;",
			"\t}",
			"}"
		],
		"description": "Create a custom JavaScript error."
	}
}
```

### Custom Error Class Template (Typescript)

The Typescript version of the template is exactly the same -- it just moves type annotations from JSDocs into Typescript proper.

```ts
export class MyError extends Error {
	/**
	 * @param asserter The assertion function that threw the error. Removes stack-trace noise if provided.
	 */
	constructor(message: string, asserter?: Function) {
		super(message);
		Error.captureStackTrace?.(this, asserter || this.constructor);
	}
}

export function isMyError(err: any): err is MyError {
	return err instanceof MyError;
}

/**
 * @param cause The cause of the error, e.g. a different, caught error
 */
export function assertMyClaim(
	condition: any,
	message: string,
	cause?: any,
): asserts condition {
	if (!condition) {
		const err = new MyError(message, assertMyClaim);
		if (cause) {
			err.cause = cause;
		}
		throw err;
	}
}
```

And again, you *could* copy-paste this into your code and find-replace "My" with the name you want. But it'll be a lot easier to just add the following snippet to VSCode:

```json
{
  // ... your other snippets
  "Create custom Typescript Error": {
    "scope": "typescript",
    "prefix": "error-custom",
    "body": [
      "export class ${1:Custom}Error extends Error {",
      "\t/**",
      "\t * @param asserter The assertion function that threw the error. Removes stack-trace noise if provided.",
      "\t */",
      "\tconstructor(message: string, asserter?: Function) {",
      "\t\tsuper(message);",
      "\t\tError.captureStackTrace?.(this, asserter || this.constructor);",
      "\t}",
      "}",
      "",
      "export function is${1:Custom}Error(err: any): err is ${1:Custom}Error {",
      "\treturn err instanceof ${1:Custom}Error;",
      "}",
      "",
      "/**",
      " * @param cause The cause of the error, e.g. a different, caught error",
      " */",
      "export function assert${1:Custom}Claim(",
      "\tcondition: any,",
      "\tmessage: string,",
      "\tcause?: any,",
      "): asserts condition {",
      "\tif (!condition) {",
      "\t\tconst err = new ${1:Custom}Error(message, assert${1:Custom}Claim);",
      "\t\tif (cause) {",
      "\t\t\terr.cause = cause;",
      "\t\t}",
      "\t\tthrow err;",
      "\t}",
      "}"
    ],
    "description": "Create a custom Typescript Error."
	}
}
```