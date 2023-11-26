import { ok } from 'assert';
import { $ } from 'zx';

let branch =
	process.env.GITHUB_REF ||
	(await stdout($`git branch --show-current`)) ||
	(await stdout($`git rev-parse --abbrev-ref HEAD`));
branch = branch.includes('preview')
	? 'preview'
	: branch.startsWith('refs/tags/@adam-coster/site')
	? 'develop'
	: branch;
const hash = await stdout($`git rev-parse HEAD`);
const message = await stdout($`git log -1 --pretty=%B`);
const dirtyFlag = branch === 'preview' ? 'true' : 'false';

console.log({
	branch: branch,
	hash,
	message,
	dirtyFlag,
});

ok(
	branch.match(/^(.*\/)?(develop|preview)$/),
	`This script is only meant to run on the "develop" or "preview" branches, but is running on "${branch}"`,
);

if (branch === 'develop') {
	// Update the database schema
	await $`pnpm db:prod:update`;
}

await $`pnpm wrangler pages deploy ./.svelte-kit/cloudflare --project-name=adam-coster --branch=${branch} --commit-dirty=${dirtyFlag} --commit-message=${message} --commit-hash=${hash}`;

/** @param {import('zx').ProcessPromise} call */
async function stdout(call) {
	return (await call).stdout.trim();
}
