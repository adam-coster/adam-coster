export function omit<T extends Record<PropertyKey, any>, O extends keyof T>(
	obj: T,
	keys: O[],
): Omit<T, O> {
	return Object.keys(obj).reduce((result, key) => {
		if (!keys.includes(key as O)) {
			// @ts-ignore
			result[key] = obj[key];
		}
		return result;
	}, {} as Partial<T>) as Omit<T, O>;
}

export function pick<T extends Record<PropertyKey, any>, O extends keyof T>(
	obj: T,
	keys: O[],
): Pick<T, O> {
	return Object.keys(obj).reduce((result, key) => {
		if (keys.includes(key as O)) {
			// @ts-ignore
			result[key] = obj[key];
		}
		return result;
	}, {} as Partial<T>) as Pick<T, O>;
}
