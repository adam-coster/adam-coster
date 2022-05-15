---
slug: typescript-const-trick
title: The Typescript "as const" trick
description: |
  Cast your Typescript values using "as const" to add extra tricks and safety. As of Typescript 4.5, you can do this in JSDoc comments as well.
editedAt: 2021-01-23T23:49:11.229Z
publishedAt: 2020-08-24T01:17:55.729Z
canonical: 'https://www.bscotch.net/post/typescript-as-const'
tags:
  - typescript
  - javascript
  - tools
  - jsdoc
  - productivity
  - webdev
crossPosts:
  - 'https://dev.to/adamcoster/the-typescript-as-const-trick-2f4o'
---

Some time ago when I was first learning Typescript, I came across a snippet in a tutorial somewhere that looked something like this:

```ts
const myArray = ['hello', 'world', 10] as const;
```

Weird, right? Obviously it's a `const`, so what's the point of the `as const`?

If you use a Typescript-aware editor like VSCode, you'll see that the hover-text types for these two cases are completely different:

```ts
// shows up as: `const myArray: (string | number)[]`
const myArray = ['hello', 'world', 10];

// shows up as: `const myArray: readonly ["hello", "world", 10]`
const myArray = ['hello', 'world', 10] as const;
```

In the first case we're treating the _array_ as the `const`, and Typescript helpfully infers what kinds of things can go into that array.

In the second case the whole thing becomes constant, so it gets that `readonly` flag and we see the _exact_ stuff that we put into that array, in the exact order, as the type!

So why is this useful?

Unfortunately, this doesn't prevent you from using mutators on your `as const` array in typescript (e.g. if you try to `.push()` something onto it, Typescript won't get upset). So it's a lie unless you wrap it in an `Object.freeze`.

One thing I've found it to be extremely useful for, however, is iterating over a defined subset of object keys:

```ts
const myObject = {
  hello: 'world',
  number: 10,
  anArray: [1, 2, 3],
  nested: { something: 'else' },
};

// Without using `as const`:
for (const field of ['hello', 'world']) {
  // The type of `field` is just 'string'
}

// With `as const`:
for (const field of ['hello', 'world'] as const) {
  // The type of `field` is 'hello'|'world'
}
```

That difference between having exact versus general type information can make all the difference between something being difficult or easy in Typescript.

Unfortunately, JSDocs don't have support for this, so using this trick in vanilla JavaScript requires a workaround:

```js
/** Thanks to {@link https://github.com/microsoft/TypeScript/issues/30445#issuecomment-671042498} */

/**
 * Identity function. Coerces string/number literals to value-as-type.
 * @template {string|number} T
 * @param {T} v
 * @return {T}
 */
function toConst(v) {
  return v;
}

const five = toConst(5);
// --> Type shows up as 5 instead of "number"

/**
 * Creates an array from the given arguments, type as a constant tuple.
 * @template {(string|number)[]} T
 * @param {T} v
 * @return {T}
 */
function toConstTuple(...v) {
  return v;
}

const tuple = toConstTuple('Hello', 'World', 10);
// --> Type shows up as ["Hello","World",10] instead of (string|number)[]
```

It's a little weird to wrap your values in a function that does nothing but let the Typescript language server give you a readonly type. But it works, at least for these limited cases.
