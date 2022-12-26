export function stringify(value: unknown) {
	return JSON.stringify(value, replacer, '\t');
}

function replacer(key: string, value: unknown) {
	if (value instanceof Map) {
		value = Object.fromEntries(value);
	} else if (value instanceof Set) {
		value = Array.from(value);
	} else if (
		typeof value === 'object' &&
		value !== null &&
		'toJSON' in value &&
		typeof value.toJSON === 'function'
	) {
		value = value.toJSON();
	}
	if (Array.isArray(value)) {
		value.sort();
	} else if (typeof value === 'object' && value !== null) {
		value = Object.fromEntries(Object.entries(value).sort());
	}
	return value;
}
