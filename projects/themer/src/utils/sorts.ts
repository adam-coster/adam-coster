export function toSortedObject<T extends Record<string, number>>(
	obj: T,
	min = 0,
): T {
	const sortedObj = Object.create(null) as T;
	Object.keys(obj)
		.sort((a, b) => {
			return obj[b] - obj[a];
		})
		.forEach((key: keyof T) => {
			if (obj[key] >= min) {
				sortedObj[key] = obj[key];
			}
		});
	return sortedObj;
}
