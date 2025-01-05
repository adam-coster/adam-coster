import fs from 'node:fs';
import { stringify } from 'yaml';

const root = 'projects/site/src/routes/blog/(posts)';
const outFolder = 'projects/site-next/src/posts/';

for (const slug of fs.readdirSync(root)) {
	const postPath = `${root}/${slug}/+page.md`;
	const metadataPath = `${root}/${slug}/meta.json`;
	try {
		assert(fs.existsSync(postPath), `Post not found: ${postPath}`);
		assert(fs.existsSync(metadataPath), `Metadata not found: ${metadataPath}`);
		const post = fs.readFileSync(postPath, 'utf8');
		let metadata = JSON.parse(fs.readFileSync(metadataPath, 'utf8'));
		// Remove the slug since it's in the file name
		delete metadata.slug;
		delete metadata.$schema;
		const combined = `---\n${stringify(metadata)}---\n\n${post}`;
		fs.writeFileSync(`${outFolder}/${slug}.md`, combined);
	} catch (err) {
		console.error(`Error reading ${slug}`, err);
	}
}

/**
 * @template T
 * @param {T} condition
 * @param {string} message
 * @returns {asserts T}
 */
function assert(condition, message) {
	if (!condition) {
		throw new Error(message);
	}
}
