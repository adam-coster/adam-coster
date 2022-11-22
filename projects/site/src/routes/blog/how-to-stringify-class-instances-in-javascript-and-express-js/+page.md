When trying to take an object-oriented approach in Javscript, you'll run into the following problem: The native `JSON.stringify()` method, which works wonders for plain objects, is basically useless for class instances.

For example:

```js
const plainObject = {
	hello: 'world',
	something: 'else',
	nested: { item: { number: 10 } },
};
JSON.stringify(plainObject);
// Yields the perfect JSON string:
// '{"hello":"world","something":"else","nested":{"item":{"number":10}}}'

class MyFancyClass {
	#something;
	constructor() {
		this.hello = 'world';
		this.#something = 'else';
	}
	get item() {
		return { number: 10 };
	}
	get nested() {
		return { item: this.item };
	}
}
const instanceOfMyFancyClass = new MyFancyClass();
JSON.stringify(instanceOfMyFancyClass);
// Yields:
// '{"hello":"world"}'
```

(That `#something` syntax is modern JavaScript's way of identifying private properties, which is why it doesn't show up in the JSON string.)

## Using `.toJSON()`

When you call JavaScript's built-in `JSON.stringify()` function on an object, it looks for a `toJSON()` function on that object and, if such a function exists, stringifies the result of that function's return value.

This is super handy, since it allows you to add a `toJSON()` method to your class and output a plain object for stringifying.

```js
class MyStringifiableClass {
	#something;
	constructor() {
		this.hello = 'world';
		this.#something = 'else';
	}
	get item() {
		return { number: 10 };
	}
	get nested() {
		return { item: this.item };
	}
	toJSON() {
		return {
			hello: this.hello,
			something: this.#something,
			nested: this.nested,
		};
	}
}

const stringifiableInstance = new MyStringifiableClass();
JSON.stringify(stringifiableInstance);
// '{"hello":"world","something":"else","nested":{"item":{"number":10}}}'
```

## Using `.toObject()` and a JSON.stringify replacer

But what if you don't have control over the guts of the thing you want to stringify, or for other reasons can't use `toJSON()`? Or what if you need to be able to stringify the same object in different ways?

An approach I've seen in a few JavaScript libraries is to include a method `.toObject()` that returns a plain object representation of a class instance. Presumably the method name is mirroring the built-in [`.toString()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toString) method that all JavaScript objects have. In any event, having a `.toObject()` method on your classes is great for a lot of reasons, but one thing it does _not_ help you with is JSON stringification.

That is, unless you take advantage of the ["replacer" argument](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#The_replacer_parameter) in JavaScript's native `JSON.stringify` method. By updating the replacer to attempt to use `.toObject()`, and then using that method in all your custom classes (and extending built-in classes to add it), you can still use `JSON.stringify` in a meaningful way on class instances.

```js
class MyStringifiableClass {
	#something;
	constructor() {
		this.hello = 'world';
		this.#something = 'else';
	}
	get item() {
		return { number: 10 };
	}
	get nested() {
		return { item: this.item };
	}
	toObject() {
		return {
			hello: this.hello,
			something: this.#something,
			nested: this.nested,
		};
	}
}

/**
 * @param {string} key
 * @param {any} value
 */
function jsonStringifyToObjectReplacer(key, value) {
	if (value && value.toObject) {
		return value.toObject();
	}
	return value;
}

const stringifiableInstance = new MyStringifiableClass();
JSON.stringify(stringifiableInstance, jsonStringifyToObjectReplacer);
// And now we're back to where we started:
// '{"hello":"world","something":"else","nested":{"item":{"number":10}}}'
```

For convenience, wrap your own function around the native stringifier and use that throughout your application:

```js
function stringify(something) {
	return JSON.stringify(something, jsonStringifyToObjectReplacer);
}
```

You could even combine the use of `toJSON()` and `toObject` (or other custom functions, along with the built-in JSON stringifier and custom ones with your own replacers, to output different stringified versions of your class instances depending on context!

## Change the Express.js `JSON.stringify` replacer

The [Express.js](https://expressjs.com/) framework is stellar for rapidly setting up a RESTful server. One of its many great traits is how it handles sending data back to clients: if you attempt to send some sort of JavaScript object Express will automatically JSON stringify that object for you and set the `Content-Type` header to "application/json".

```js
// Express server setup
// See {@link https://expressjs.com/en/starter/hello-world.html}
const express = require('express');
const app = express();
app.listen(8080);

app.get('/', (req, res) => {
	res.send({ hello: 'world' });
	// Client recieves '{"hello":"world"}' body
	// with content-type header set to "application/json"
});
```

But what if you want to send a class instance to the client? Express uses the regular `JSON.stringify` method on the data you send, so we're right back to the original problem. Fortunately, Express lets you set any replacer you want:

```js
app.set('json replacer', jsonStringifyToObjectReplacer);
```

And with that, you can simply `res.send(myClassInstance)` throughout your entire Express application, for any classes that include the `.toObject()` method.
