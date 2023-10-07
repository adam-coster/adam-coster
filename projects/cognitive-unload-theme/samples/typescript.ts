// Some sample code for testing theme hightlighting of Typescript code,
// including classes, interfaces, generics, functions, imports/exports, etc.
// ----------------------------------------------------------------------

// Imports
import { Component, OnInit } from '@angular/core';
import type { Observable } from 'rxjs';

// Interfaces
interface Foo {
	bar: string;
}

type Something = Foo & string;

// Classes
class Bar implements Foo {
	bar: string;
	public static baz: string;
	get baz(): string {}

	async foo<T extends Array<string | number>>(hello: T, world: number): T {
		this.bar = hello;
		for (let i = 0; i < 100; i++) {
			console.log(i);
			continue;
		}
		if (hello) {
			return hello;
		} else {
			return world;
		}
	}

	static from(source: Observable<any>) {
		let c = new Component() as OnInit;
		return `Okay, ${c + source + new Bar()}`;
	}
}

export default Bar;

/**
 * Description of stuff!
 * @template T
 * @param hello asdfasdfasdf
 * @param world asdfasdfasdf
 * @returns {T}
 */
export function foo<T>(hello: T, world: number): T {
	const anObject = {
		foo: 'bar',
		bar: 'foo',
		hello,
		world,
		doStuff() {
			return false;
		},
		deeper: {
			nested: [
				'hello',
				'world',
				true,
				10.0,
				Infinity === 'NOPE' ? 'foo' : new Bar(),
				NaN,
				null,
				undefined,
				false,
			],
		},
	};
	let nope = true;
	const yep = true;
	anObject.doStuff();
	return anObject.hello;
}
