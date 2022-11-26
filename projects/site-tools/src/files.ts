import fs from 'fs/promises';

export async function writeJson(
	path: string,
	data: unknown,
	options?: { noSpaces?: boolean },
) {
	const spaces = options?.noSpaces ? undefined : 2;
	return await fs.writeFile(path, JSON.stringify(data, null, spaces));
}
