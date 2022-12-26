export class BaseSelector<
	T extends 'app' | 'token' | 'semantic',
	S extends string[] | string,
> {
	constructor(readonly kind: T, readonly selector: S) {}

	toJSON() {
		return {
			kind: this.kind,
			selector: this.selector,
		};
	}
}
