import { ok } from 'assert';
import { $ } from 'zx';

const branch = (await stdout($`git branch --show-current`)).split('/')[0];
const hash = await stdout($`git rev-parse HEAD`);
const message = await stdout($`git log -1 --pretty=%B`);
const dirtyFlag = branch === 'preview' ? 'true' : 'false';

ok(
	['develop', 'preview'].includes(branch),
	`This script is only meant to run on the "develop" or "preview" branches, but is running on "${branch}"`,
);

await $`pnpm wrangler pages publish ./.svelte-kit/cloudflare --project-name=adam-coster --branch=${branch} --commit-dirty=${dirtyFlag} --commit-message=${message} --commit-hash=${hash}`;

/** @param {import('zx').ProcessPromise} call */
async function stdout(call) {
	return (await call).stdout.trim();
}
