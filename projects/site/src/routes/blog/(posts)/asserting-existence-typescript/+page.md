A classic fight that programmers have with Typescript is when they are _confident_ that a value is defined, but Typescript thinks it might not be, so when they go to write `thingThatExists.somethingInsideIt` then Typescript throws an error because `thingThatExists` could be undefined.

If you _know_ that the thing is always defined you have two bad workarounds and one good one:

1. Optional Chaining (Bad!)
2. Non-Null Assertion Operator (Worse!)
3. Exists-at-Runtime Assertions (Good!)

*(You also have some even-worse workarounds, but let's skip right past those.)*

## Optional Chaining

You can use optional chaining (the `?.` operator, as in `thingThatExists?.somethingInsideIt`) so that the code works whether or not `thingThatExists` does, actually, exist. This has the benefit of being fully valid code, however if it does turn out you're wrong about `thingThatExists` always existing, you'll end up with a downstream failure that can be very hard to track down.

On the plus side, Typescript will continue to be aware of this possibility because you did accurately type your code (you didn't insist it actually exists)! On the down side, downstream code will _also_ always have to account for `thingThatExists` not actually existing, despite your belief that it always will. So while your code is internally consistent, it's not consistent with your understanding of *reality*.

## Non-Null Assertion Operator

Typescript has, for a long time, provided a [Non-null Assertion Operator](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-0.html#non-null-assertion-operator) (`!.`) that is sorta like the opposite of optional chaining. It asserts _to Typescript_ that the thing on the left of the operator definitely is not nullish (neither `null` nor `undefined`, though it could be a different falsey value), so it's an easy way to get rid of a squiggle when you "know" that the variable exists.

However, that operator is not a _runtime_ assertion, so if it turns out you're wrong then you're going to get an error at runtime when the thing you told Typescript most certainly exists actually doesn't. A generic error, of the form `Uncaught TypeError: Cannot read properties of undefined`, that you'll then have to track down via a (hopefully good) stack trace.

Further, the Non-null Assertion Operator only asserts (to Typescript) that the left-hand value exists _in that moment_. Using it doesn't impact subsequent code, which means you'll find yourself using it again, and again, and again. Each time creating a potential untruth.

## Exists at Runtime Assertions

It's annoying when you're pretty dang sure that some variable really will be defined, while Typescript thinks otherwise. But the thing is, Typescript is nearly always right. If Typescript thinks something could be undefined, then your code as written _technically_ allows for that.

You might have good reasons to believe otherwise, and even *know* otherwise for the code as it is right now. But how often can you guarantee otherwise _into the unknown future_? Can you guarantee that future refactors, features, or _bugs_ won't cause your claim of guaranteed-existence to fail?

And so the best move in this scenario is to use _real_ runtime assertions. Have your code enforce your belief. The pros are:

- Your belief is now _functionally proven_ with *future guarantees*: you move from internal confidence that the thing will always exist to external validation that it does.
- Other developers (and future you) don't have to work back through the reasoning of why your claim that something exists is a guarantee (they can just see a functional assertion).
- Any change to any part of your code that causes your assertion to fail will be revealed _early_ when an error gets thrown, rather than silently missed.
- You can provide [custom errors](https://adamcoster.com/blog/javascript-custom-errors) and messages to make it easier to track down what went wrong if your assertion fails (rather than relying on generic messages and traces).
- The difference between your Typescript code and the transpiled JavaScript that actually runs is minimized (Non-Null Assertion Operators are stripped during transpiling!).

One of the nice things about having a value that MUST exist at some point (and that you're confident DOES exist), is that if you're wrong about that it should probably throw an error. So rather than verbose if/else and try/catch handling you can just call some assertion functions and move on.

There are two kinds of functions I use, for slightly different purposes.

### Assert Is Not-Nullish

If there is a variable that I need to guarantee exists through subsequent references, I simply call an assertion function on it early on. A properly typed assertion function informs Typescript that, beyond the point where it was called, the variable _must exist_.

```ts
function assertNotNullish<T>(value:T, message="Value not defined"): asserts value is Exclude<T, null|undefined> {
	if(value===null || value === undefined) throw new Error(message);
}

// Example usage:

let thingThatExists: "something" | undefined;
thingThatExists.split(''); // 💣 <-- Typescript error!
assertNotNullish(thingThatExists);
thingThatExists.split(''); // ✅ <-- No squigglies, Typescript knows hello MUST exist
```

You can use this same idea to assert any type claim at runtime, not just that something is not nullish!

The plain JavaScript (with JSDoc) version of this same function looks like this:

```js
/**
 * @template T
 * @param {T} value
 * @param {string} message
 * @returns {asserts value is Exclude<T, null|undefined>}
 */
function assertNotNullish(value, message="Value not defined") {
	if(value===null || value === undefined) throw new Error(message);
}
```

### Type Narrowing with Incidental Not-Nullish Assertion

Unfortunately, assertion functions in Typescript can only assert that their incoming parameter is of a specific type but cannot _also_ provide a return type. In effect, their return type is `void`.

This means that you can't wrap a value in an assertion and then operate on its return value in a way that Typescript understands. For example, even if you returned `value` in the prior `assertNotNullish(value)` function, such that `assertNotNullish(thingThatExists).somethingInsideIt` was fully valid code that was now guaranteed to work, Typescript would call this an error since assertion functions have a `void` return type.

Most of the time the workaround is still to just do the prior thing: add a line asserting the variable exists, such that all subsequent references correctly know it exists. But if for some reason you want to be able to inline that claim (like when using a non-null assertion operator), you can use a function that [narrows its input type](https://www.typescriptlang.org/docs/handbook/2/narrowing.html) to a non-nullish output while incidentally asserting that claim:

```ts
function defined<T>(value, message="Value not defined"): NotNullish<T> {
	if ([undefined, null].includes(value)) throw new Error(message);
	return value;
}

const derived = defined(thingThatExists).someInternalValue;
// ✅ ^-- Works just how you'd want it to, but any future thingThatExists
// references will still show up as potentially-undefined.
```
