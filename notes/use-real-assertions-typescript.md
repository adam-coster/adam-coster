# Don't use the non-null assertion operator (!.) in Typescript, use a real assertion

One of the classic "fights" that programmers have with Typescript is when you (the programmer) are _confident_ that a value is defined, but Typescript thinks it might not be, so when you go to write `thingThatExists.somethingInsideIt` then Typescript throws some squigglies at you because `thingThatExists` could be undefined.

If you _know_ that the thing is always defined you have two bad workarounds and one good one:

1. Optional Chaining (Bad!)
2. Non-Null Assertion Operator (Worse!)
3. Exists at Runtime Assertions (Good!)

## Optional Chaining

You can use optional chaining (`thingThatExists?.somethingInsideIt`) so that the code works whether or not `thingThatExists` does indeed exist. This has the benefit of being fully valid code, however if it turns out you're _wrong_ about `thingThatExists` always existing, you'll end up with a silent failure in your code that can be very hard to track down.

On the plus side, Typescript will continue to be aware of this possibility because you did accurately type your code! On the down side, downstream code will _also_ always have to account for `thingThatExists` not actually existing, so usually you're just making things worse for yourself when you use optional chaining just to bypass Typescript warnings.

## Non-Null Assertion Operator

Typescript has, for a long time, provided a [Non-null Assertion Operator](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-0.html#non-null-assertion-operator) (`!.`) that is sorta like the opposite of optional chaining. It asserts _to Typescript_ that the thing on the left of the operator definitely is not nullish, so it's an easy way to get rid of a squiggle when you "know" that that's true.

However, that operator is not a _runtime_ assertion, so if it turns out you're wrong then you're going to get an error at runtime. A generic one, of the form `Uncaught TypeError: Cannot read properties of undefined`, that you'll then have to track down via a (hopefully good) stack trace.

Further, the Non-null Assertion Operator only asserts (to Typescript) that the left-hand value exists _in that moment_. Using it doesn't impact subsequent code, which means you'll find yourself using it again, and again, and again. Each time creating a potential untruth.

## Exists at Runtime Assertions

Yes, it's annoying when you're pretty dang sure that some variable really always will be defined, but Typescript thinks otherwise. But the thing is, (modern) Typescript is nearly always right. If Typescript thinks something could be undefined, then your code as written _technically_ allows for that.

You might have good reasons to believe otherwise, but how often can you _guarantee_ otherwise? And, even further, how often can you guarantee otherwise _into the unknown future_? Can you guarantee that future refactors, feature changes, or _bugs_ won't cause your claim of guaranteed-existence to fail?

The best move in this scenario is to use _real_ runtime assertions. The pros here are:

- Your belief is now _functionally proven_: you move from internal confidence that the thing exists to external proof.
- Other developers (and future you) don't have to work back through the reasoning of why your claim that something exists is a guarantee (they can just see a functional assertion).
- Any change to any part of your code that causes your assertion to fail will be revealed _early_ when an error gets thrown, rather than potentially silently missed.
- You can provide [custom errors](https://adamcoster.com/blog/javascript-custom-errors) and messages to make it easier to track down what went wrong if your assertion fails (rather than relying on generic messages and traces).
- The difference between your Typescript code and resulting JavaScript that actually runs is reduced (Non-Null Assertion Operators are stripped during transpiling!)

One of the nice things about having a value that MUST exist at some point (and that you're confident DOES exist), is that if you're wrong about that it should probably throw an error. So rather than verbose if/else statements you can just call some assertion functions and move on.

There are two kinds of functions I use, for slightly different purposes.

### Assert Is Defined

If there is a variable that I need to guarantee exists through _multiple_ references, I simply call an assertion function on it early on. A properly typed assertion function informs Typescript that, beyond the point where it was called, the variable _must exist_. So you get rid of your squigglies without a lot of code:

<!-- ADD SAMPLES, INCLUDING A DEFINED<T> TYPE -->

```js
/**
 * return {asserts }
```

### Incidental Assertion

Unfortunately, assertion functions in Typescript can only assert that their incoming parameter is of a specific type but cannot _also_ provide a return type. In effect, their return type is `void`.

This means that you can't wrap a value in an assertion and then operate on its return value in a way that Typescript understand:

```ts
function assert(thing): asserts thing {
	if (!thing) throw new Error('Assertion Failed blah blah');
	return thing;
}

const derived = assert(thingThatExists).someInternalValue;
// ^^ A totally valid and reasonable function and call, but
// one where Typescript doesn't give a return type you can
// actually use to make it!
```

The cleanest way to handle this is still to just call the assertion earlier in your code, but if you really want to get this kind of chainable assertion you would need a type-narrowing function that _incidentally_ asserts existence of its argument:

```ts
function defined<T>(value): Defined<T> {
	if ([undefined, null].includes(value))
		throw new Error('Not actually defined');
	return value;
}

const derived = defined(thingThatExists).someInternalValue;
// ^^ Works just how you'd want it to, but any future thingThatExists
// references will still show up as potentially-undefined.
```
