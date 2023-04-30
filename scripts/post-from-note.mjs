import { ok } from 'assert';
import { $, argv } from 'zx';
import { pathy } from '@bscotch/pathy';

const note = argv.note || argv.post || argv._[0];

ok(note, 'No note specified');

const notes = await pathy('notes').listChildren();

const matching = notes.filter((n) => n.basename.startsWith(note));

ok(matching.length > 0, `No note found matching "${note}"`);
ok(matching.length < 2, `Multiple notes found matching "${note}"`);
const match = matching[0];

const outDir = `projects/site/src/routes/blog/(posts)/${match.name}`;

await $`mkdir -p ${outDir}`;
await match.copy(`${outDir}/+page.md`);
await match.delete();
await pathy(outDir).join('meta.json').write({
	$schema: '../../post.schema.json',
	slug: match.name,
	title: '',
	description: '',
	publishedAt: new Date().toISOString(),
	tags: [],
	crossPosts: [],
});
