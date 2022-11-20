import { pathy } from '@bscotch/pathy';

const posts = await pathy('src/articles').listChildrenRecursively();

for (const post of posts) {
	const folder = pathy('src/routes/blog').join(post.name);
	await folder.ensureDirectory();
	const newFile = folder.join('+page.md');
	await post.copy(newFile);
}
