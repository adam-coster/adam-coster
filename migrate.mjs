import fs from 'fs';

const root = 'projects/site/src/routes/blog/[slug]';

const slugs = fs.readdirSync(root).filter((slug) => slug.endsWith('.md'));

for (const slug of slugs) {
}
