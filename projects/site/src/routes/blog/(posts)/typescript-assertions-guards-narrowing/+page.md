Typescript has three overlapping and extremely useful concepts for you to make claims about a value's type:

- **Type Narrowing**. Converting a broader type to a narrower one.
- **Type Guard**. Checking if a variable is of a particular type
- **Type Assertion**. Declaring that a variable is of a particular type.

When programmers find themselves "fighting" with Typescript, it's often because they aren't fully making use of these concepts. Let's dig into each and how they relate to each other, with some examples.

## Preamble: Types change over time!

The two things that make Typescript so powerful are:

1. **Documentation as code.** You make *claims* about what your variables and functions are shaped like (this one's a string, that one's a function that takes a string and returns a number, etc), and Typescript checks if your code makes sense given those claims.
2. **Adaptation.** Typescript keeps track of a value's possible type(s) each time it is referenced, given what has happened in your code so far.

## Type Narrowing

[Type narrowing](https://www.typescriptlang.org/docs/handbook/2/narrowing.html#using-type-predicates) is when a variable starts with one set of types, and you then reduce that set of types to something *narrower* (more specific) in a particular context.

Some examples of narrowed types:

- `string` → `"hello"|"world"`: The starting `string` type encompasses any string, while the union type of two specific strings `"hello"` and `"world"` is a subset of that.
- `number|undefined` → `number`: The union type of `number` *or* `undefined` can be narrowed to just `number`
- `string|number|undefined` → `"hello"|10`: Same idea!

So how do you tell Typescript to narrow the types for some variable? That's where type guards and assertions come in!

## Type Guards

In Typescript, a "type guard" is a *control flow* concept. Meaning it's used in if/else, ternary, switch, and boolean statements. The idea is that the condition you're checking for *truthiness* is whether or not a variable is of a particular type. For example, if your condition checks if your value is a string, then Typescript knows that the variable must be a string inside that condition's code block. Further, if you're in an if/else block (or on the other side of a ternary, or in a switch statement), Typescript also knows that the variable *cannot* be a string in those other blocks:

```ts
let a: string | number | boolean | undefined;

if(typeof a === 'string'){
  a.slice(''); // No error. Typescript knows that `a` can only be a string.
} else if (typeof a === 'number'){
  a.toFixed(3); // Again, no error. Typescript knows that `a` can only be a number.
} else {
  // In this block, Typescript knows that `a` could be undefined OR a boolean
}
```

This works out of the box with the `typeof` and `instanceof` operators, but once you're dealing with objects it's harder to differentiate since nearly everything in JavaScript is an object.

This is where Type Guard Functions come into play. They have a special return type that is expressed as a claim about the input value's type (`value is Type`, a.k.a. a ["type predicate"](https://www.typescriptlang.org/docs/handbook/2/narrowing.html#using-type-predicates)). For example:

```ts
type Duck = {quack:()=>void}
function isADuck(something:any): something is Duck {}

let a: Duck|undefined;
if(isADuck(a)){
  a.quack(); // No error, Typescript knows `a` is a Duck!
}
```

A type guard function is assumed to return truthy if the type claim is true, and falsey otherwise. However, if your function doesn't discriminate properly you can have runtime errors that Typescript can't protect you from!

A decent function body for the prior function might be:

```ts
function isADuck(something:any): something is Duck {
  return something &&
         //^-- works as a not-nullish type guard!
         typeof something === 'object' &&
         'quack' in something &&
         typeof something.quack === 'function';
}
```

As you can see, these can get pretty annoying to write exhaustively. One option is to have used a custom object constructor for your input so that you could simply use the `instanceof` operator rather than laboriously checking the shape:

```ts
class Duck {
  quack(){};
}

let a: Duck|undefined;
if(a instanceof Duck) a.quack();
```

Another option is to have a bunch of utility type-guard functions you can chain together and reuse across your higher level type guards:

```ts
/** Check if something is a non-null object */
function isObject(something:any): something is Exclude<object,null> {
  return something && typeof something === 'object';
}

function isFunction(something:any): something is ()=>unknown {
  return typeof something === 'function';
}

/** Check if something is an object with a particular field */
function isObjectWithField<F extends string>(something:any, field:F): something is Record<F, unknown> {
  return isObject(something) && field in something;
}

function isADuck(something:any): something is Duck {
  return isObjectWithField(something, 'quack') && isFunction(something.quack);
}
```

You can get fancy with it, but the core idea is always the same. Note that there are some built-in type guard functions in JavaScript and Node, like `Array.isArray`, and they work exactly like this!

## Type Assertions

While a type *guard* is part of control flow (dealing in truthiness), a type *assertion* is a statement of fact. You aren't *asking* if a variable is of a particular type, you're *claiming* that it is (and creating an error state if not).

There are two general categories of type assertion in Typescript:

1. Compile-time assertions (dangerous!)
2. Runtime assertions

### Compile-time Type Assertions

The most classic type-assertion lives only in the types (which are stripped out when compiled), and uses the `as` keyword:

```ts
let a: string|undefined;
let b = a as string;
//  ^-- `b` would have been inferred to be `string|undefined`, but we're
//      asserting that no, actually, it's definitely a string
```

Typescript tries to keep you out of complete danger when you use such a type assertion, by throwing an error if the asserted type is *incompatible* with the starting types:

```ts
let a: string|undefined;
let b = a as number; // 🔥 Error! "No overlap" between types
```

That error message will look like this: "Conversion of type 'string | undefined' to type 'number' may be a mistake because neither type sufficiently overlaps with the other. If this was intentional, convert the expression to 'unknown' first."

Which hints at the "solution":

```ts
let a: string|undefined;
let b = a as unknown as number; // ✅ No error!
```

Typescript has another kind of compile-time type assertion, via the [Non Null Assertion Operator](https://adamcoster.com/blog/asserting-existence-typescript) (`!.`) that specifically asserts that the left-hand side's type has been narrowed to exclude "nullish" (`null|undefined`) types.

These compile-time type assertions are dangerous because they are *not enforced at runtime*, and the only reason you'd find yourself using them is if there is a mismatch between your documentation (Typescript types are just documentation, after all) and the reality of what your code is doing. If that's the case, you should instead fix the types or rely on runtime type assertions!

### Runtime Type Assertions

Typescript has an `asserts` keyword, used in return types, for creating functions that assert their value is of a particular type (and throw otherwise). This is useful when your input comes from an external source (in effect, has the `unknown` type) as well as any other kind of type narrowing.

The benefit of using assertion functions is that they are *enforcing their claim at runtime*, as well as telling Typescript to narrow the type of something to make your code better reflect reality.

The simplest assertion function is ones that asserts that a value is *truthy*:

```ts
function assert(claim:any, message="Assertion failed"): asserts claim {
  if(!claim) throw new Error(message);
}

let a: string|null|false|0|undefined;
assert(typeof a === 'string');
a.split(''); // ✅ No error! Typescript knows this must be a string here
```

But you can also assert that a value is of any type you want:

```ts
function assertIsDuck(maybeDuck: any, message="Not a duck!"): asserts maybeDuck is Duck {
  if(!isADuck(maybeDuck)) throw new Error(message);
}

let a: Duck|string|undefined;
assertIsDuck(a);
a.quack(); /// ✅ No error! Typescript knows this must be a Duck here
```

Why use type assertion functions rather than type guards? I use them to reduce code verbosity when I know that there are error handlers that'll catch anything that gets thrown, or to improve error handling with [custom errors](https://adamcoster.com/blog/javascript-custom-errors), or when a program truly depends on an assertion being true (so that it'll end up in a weird state otherwise, and therefore is better off catastrophically failing than being handled).

An example from my post [about custom error classes](https://adamcoster.com/blog/javascript-custom-errors#case-study-uncaught-errors-in-expressjs) is to streamline request handling code in an ExpressJS server:

```ts
abstract class RequestError extends Error {abstract readonly code:number}
class NotFoundError extends RequestError {readonly code = 404;}
// Can add error classes for each kind of general error case!

function assertFound(thing:any): asserts thing {
	if(!thing){ throw new NotFoundError(); }
}
// Can add assertions for each kind of error case, throwing the associated error type!

app.get('/some-route', (req,res)=>{
	const something = getThingIfItExists();
	assertFound(something); // throws if not found!
  // Can now do things to `something` with confidence (and Typescript support) that it exists
	res.send(something);
});

// Error-catching route, allowing errors to be thrown in all other
// routes without route-specific handling.
app.use((err, req, res, next)=>{
	if(err instanceof RequestError){
		return res.sendStatus(error.code);
	}
});
```

## Fin

Typescript is all about accurately documenting what your variables can be, via initial types, and then *narrowing* those types to reflect changing reality as your code progresses. You do that through type assertions and guards; Typescript infers a lot of that automatically just by using built-in JavaScript stuff, but you can keep Typescript informed even in the most bespoke of cases by writing your own type guard and assertion functions.