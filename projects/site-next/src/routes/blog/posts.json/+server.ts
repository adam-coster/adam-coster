import { json } from '@sveltejs/kit';

// See reference https://joyofcode.xyz/sveltekit-markdown-blog

async function getPosts() {
	let posts: any[] = [];

	const paths = import.meta.glob('/src/posts/*.md', { eager: true });

	for (const path in paths) {
		const file = paths[path];
		// @ts-expect-error
		console.log(file.metadata);
		const slug = path.split('/').at(-1)?.replace('.md', '');

		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			// @ts-expect-error
			const post = { slug, ...file.metadata };
			if (post.publishedAt) {
				posts.push(post);
			}
		}
	}

	// Reverse chrono sort
	posts = posts.sort(
		(first, second) =>
			new Date(second.publishedAt).getTime() - new Date(first.publishedAt).getTime()
	);

	return posts;
}

export async function GET() {
	const posts = await getPosts();
	return json(posts);
}
