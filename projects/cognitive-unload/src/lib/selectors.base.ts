export const kind = Symbol('kind');

export class BaseSelector<
	T extends 'app' | 'syntax' | 'semantic',
	S extends string[] | string,
> {
	readonly [kind]: T;
	constructor(_kind: T, readonly selector: S) {
		this[kind] = _kind;
	}

	// toJSON() {
	// 	return {
	// 		kind: this.kind,
	// 		selector: this.selector,
	// 	};
	// }
}
