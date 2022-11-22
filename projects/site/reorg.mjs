import { pathy } from '@bscotch/pathy';
import grayMatter from 'gray-matter';

const folders = await pathy('src/routes/blog').listChildren();

for (const folder of folders) {
	const post = folder.join('+page.md');
	if (!(await post.exists())) {
		continue;
	}
	const meta = folder.join('meta.json');
	/** @type {string} */
	const postData = await post.read();
	const { content, data } = grayMatter(postData);
	await meta.write({ $schema: '../post.schema.json', ...data });
	await post.write(`# ${data.title}\n\n${content}`);
}
