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
```

```js
class Thingy {
	/**
	 * @protected
	 */
	constructor() {}
	async #init() {}
	static async create() {
		const thingy = new Thingy();
		await thingy.#init();
		return thingy;
	}
}

const thingy = new Thingy(); // 🔥 Typescript Error!
const thingy = await Thingy.create(); // ✅ Success!
```
