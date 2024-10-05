import fs from 'fs';

const root = 'projects/site/src/routes/blog/(posts)/';

for (const slug of fs.readdirSync(root)) {
	try {
		const post = fs
			.readdirSync(`${root}/${slug}`, 'utf-8')
			.filter((file) => file.endsWith('.md'))[0];
		console.log([slug, post]);
	} catch {}
}
