In JavaScript, lots of things are objects: Functions, Maps, Arrays, Dates, Null, and more! For example:

```ts
typeof {} // 'object'
typeof [] // 'object'
typeof null // 'object'
typeof /regex/ // 'object'
typeof new Map() // 'object'
typeof new Date() // 'object'
typeof new MyCustomClass // 'object'
```

(The `typeof` operator does get more specific for functions, at least. Functions *are still objects*, though.)

So how can we tell if something is the most boring kind of object, meaning it's not a custom class instance, or an instance of a built-in type like `Map`, etc? Just a plain old JavaScript object (POJO), like something you'd create with curly braces (`{}`).

Note that any two people might define POJO differently. That's because definitions are just made up, so there's no point fighting about it. Definitions are tools. The definition I'm using here, because it satisfies both my intuition and my typical needs, is:

> A Plain Old JavaScript object has `null` or `Object.prototype` as its prototype.

By this definition `{hello:'world'}` and `Object.create(null)` are both POJOs, but `new Date()`, `new Map()`, `/regex/`, *etc* are not. That's usually what I'm trying to differentiate when I want to know if something is just a plain old object.

The following function checks if an entity matches that definition of a POJO, though note that the return type only accounts for *native* types. You could extend the type to account for any specific custom classes you want to rule out -- as it stands, the function will return the correct *value* for anything you pass into it, but it will incorrectly behave as a type guard for non-native class instances!

```ts
/**
 * @template T
 * @param {T} obj
 * @returns {obj is Exclude<T, Function|symbol|bigint|string|number|boolean|undefined|null|RegExp|Date|Map|Set>}
 */
function isPlainObject(obj) {
	return (
		obj !== null &&
		typeof obj === 'object' &&
		[null, Object.prototype].includes(Object.getPrototypeOf(obj))
	);
}
```