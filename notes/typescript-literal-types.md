In Typescript, we often want to be able to get a _type_ from a _literal_, so that we don't have write basically the same thing twice. We can typically do this with some combination of the `satisfies`, `as const`, `keyof`, and `typeof` operators.

For example, rather than doing this (where we have to manually keep the type and literal in sync):

```ts
type AllowedValue = 'this' | 'that' | 'another';
const allowedValues: AllowedValue[] = ['this', 'that', 'another'];
```

We'd want to do this (so that they stay in sync automatically):

```ts
type AllowedValue = (typeof allowedValues)[number];
const allowedValues = ['this', 'that', 'another'] as const;
```

In the above example I used `as const` to "narrow" Typescript's interpretation of the type for the array literal `["this","that","another"]`. With `as const`, the type ends up as `readonly ["this", "that", "another"]`. Without `as const`, the type is the _wider_ `string[]`.

While this often works well enough, that `readonly` modifier on the inferred type can create some annoyances downstream. Why? Because `allowedValues` isn't _actually_ readonly, and `readonly []` arrays are _not_ a subset of mutable arrays, so you may run into type conflicts when you use `allowedValues` in functions.

For example:

```ts
function doArrayStuff(arr: any[]) {}

doArrayStuff(allowedValues);
// ^ 💀 Typescript error! Readonly arrays are not compatible with `any[]`
```

There are two ways to resolve that problem:

1. Type your array functions more accurately -- if the function doesn't mutate the array you pass into it, type that array as readonly (e.g. `readonly any[]` instead of `any[]`)! Unfortunately most 3rd party libraries don't do this, so you'll likely still run into trouble even if you do it for your own code.
2. Find a way to still have your narrowed types, but without the `readonly` modifier.

Your least-annoying path forward is option 2. To accomplish it, you'll need to do some weird Typescript stuff. The trick that I use is to create an identity-function that converts a literal to an as-narrow-as-possible type:

```ts
function literal<T>(v: Narrow<T>): T {
	return v as T;
}

type Narrowable = string | number | bigint | boolean;
type Narrow<A> =
	| (A extends [] ? [] : never)
	| (A extends Narrowable ? A : never)
	| {
			[K in keyof A]: A[K] extends Function ? A[K] : Narrow<A[K]>;
	  };
```

You can use this function to get a maximally-narrowed type from a literal:

```ts
const myArray = [1, 3, 'a', 'b'];
//    ^ typed as `(string | number)[]`

const myReadonlyArray = [1, 3, 'a', 'b'] as const;
//    ^ typed as `readonly [1,3,"a","b"]`

const myNarrowArray = literal([1, 3, 'a', 'b']);
//    ^ typed as `[1, 3, "a", "b"]`

const name = literal('adam');
//    ^ typed as `'adam'` instead of `string`
```

You can make use of this concept in other functions as well, when you want the types involved to be as narrow as possible.

For example, let's say you want a function that converts the array `['hello', 'world']` into an object with those array values as keys. You'd think you could write a generic function like this:

```ts
function toObject<T extends any[]>(arr: T): { [Value in T[number]]: any } {
	// ... unimplemented, just need to return something
	//     to demonstrate the types!
	return undefined as any;
}
const myObj = toObject(['hello', 'world']);
//    ^ typed as {[x: string]: any}
```

But if you were wanting the result to be typed more narrowly, so that the type showed those array values as the actual keys, you need to narrow things in the function. While this is technically doable, it's pretty finicky and I always have to do a lot of experimenting to get something that works.

Here's an example of the above function that auto-narrows the output type:

```ts
function toNarrowedObject<T>(
	arr: Narrow<T>,
): T extends any[] ? { [Value in T[number]]: any } : never {
	// implementation details
	return undefined as any;
}
const myNarrowedObj = toNarrowedObject(['a', 'b']);
//    ^ typed as {a:any; b:any}
```

Since it can be quite challenging to get an auto-narrowing, generic function working, in general the easier approach is to use the `literal` function on the thing you want to pass into the function first, so that its type is already narrowed. In that case you'll likely get what you want from a less-complicated (and less-fragile) generic function:

```ts
// Same, simple generic as before!
function toObject<T extends any[]>(arr: T): { [Value in T[number]]: any } {
	// ... unimplemented, just need to return something
	//     to demonstrate the types!
	return undefined as any;
}
const myObj = toObject(['a', 'b']);
//    ^ typed as {[x: string]: any}

const input = literal(['a', 'b']);
const myNarrowedObj = toObject(input);
//    ^ typed as {a:any; b:any}
```
