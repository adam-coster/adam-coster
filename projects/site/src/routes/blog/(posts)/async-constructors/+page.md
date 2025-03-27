Async functions simplify so many things in JavaScript, but there's one core kind of function that doesn't get any of those benefits: class constructors.

Class constructors cannot be async, so if you want to perform any asynchronous tasks while creating a class instance you can't just do `await new MyAsyncClass()`. The solution to this is to create instances using a wrapper function of some sort. You might do that like this:

```ts
async createMyAsyncClass() {
	const instance = new MyAsyncClass();
	await instance.init(); // Some kind of initializer
	return instance;
}
const instance = await createMyAsyncClass();
```

I like to do this using a static method on the same class, since it's more discoverable:

```ts
class MyAsyncClass {
	async init(){
		// do async stuff
	}

	static async create(){
		const instance = new MyAsyncClass();
		await instance.init(); // Some kind of initalizer
		return instance;
	}
}
const instance = await MyAsyncClass.create();
```

But! In either case, we have a class that *should not be instanced with `new`* in public contexts. And an initializer that must always be called, but only once, and so is dangerous if it's just *public*. A user could simply `new MyAsyncClass()` without realizing that they now have a broken instance that was never initialized. Or call `.init()` on an already-initialized instance.

You can prevent this problem in Typescript (or JavaScript via JSDocs) by marking the constructor `protected` (you can also mark it `private`, but then you won't be able to extend your class as easily).

The idea is that marking your constructor function `protected` causes Typescript to error out if you try to call `new` outside of your class, thus preventing uncontrolled instance creation. Coupled with a protected async initializer, you can fully prevent any creation (or re-initialization) of class instances except through the one *correct* route you provide.

(This is only a compile-time protection! Calling `new` on a Typescript/JSDoc-protected constructor is fully valid JavaScript!)

Here's the shape of this approach in Typescript:

```ts
class Thingy {
	protected constructor() {}
	protected async init() {}
	static async create() {
		const thingy = new Thingy();
		await thingy.init();
		return thingy;
	}
}

const thingy = new Thingy(); // 🔥 Typescript Error!
const thingy = await Thingy.create(); // ✅ Success!
thingy.init(); // 🔥 Typescript Error!
```

And in JavaScript with JSDocs:

```js
class Thingy {
	/** @protected */
	constructor() {}
	/** @protected */
	async init() {
		// You could do this with a private property name, since that *does*
		// work in JavaScript. (e.g. `async #init(){}`). However that makes
		// class extension trickier, so personally I just use JSDoc to flag it
		// as protected and rely on the Typescript language server to keep me
		// out of trouble.
	}
	static async create() {
		const thingy = new Thingy();
		await thingy.init();
		return thingy;
	}
}

const thingy = new Thingy(); // 🔥 Typescript Error!
const thingy = await Thingy.create(); // ✅ Success!
thingy.init(); // 🔥 Typescript Error!
```
