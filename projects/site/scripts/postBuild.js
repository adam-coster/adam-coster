import { Pathy, pathy } from '@bscotch/pathy';
import { ok } from 'node:assert';
import { ChildProcess, exec } from 'node:child_process';
import puppeteer from 'puppeteer';

/**
 * @typedef Meta
 * @prop {string} description
 * @prop {string} slug
 * @prop {string} title
 */

const baseUrl = 'http://localhost:3037';
const previewUrl = `${baseUrl}/tools/preview`;
const previewOutputDir = pathy('.svelte-kit/cloudflare/previews');
await previewOutputDir.ensureDir();

/** @type {ChildProcess|undefined} */
let runnerHandle;
let running = false;

// See if the preview server is already running
try {
	const response = await fetch(baseUrl);
	if (response.ok) {
		running = true;
	}
} catch {}

if (!running) {
	runnerHandle = exec('pnpm preview');
	await Promise.race([
		new Promise((resolve) => {
			runnerHandle?.stdout?.on('data', (data) => {
				console.log(data);
				if (data.includes(baseUrl)) {
					resolve(undefined);
					running = true;
				}
			});
		}),
		// Give up if it takes too long
		new Promise((resolve) => setTimeout(resolve, 30_000)),
	]);
}

ok(running, 'Preview server did not start within 10 seconds.');

/** @type {Pathy<Meta>[]} */
const blogPostMetas = await pathy(
	'src/routes/blog/(posts)',
).listChildrenRecursively({
	includePatterns: ['meta.json'],
});

const browser = await puppeteer.launch({});

const page = await browser.newPage();
await page.setViewport({ width: 1920, height: 1080 });
await page.setBypassCSP(true);
await page.goto(previewUrl, { waitUntil: 'networkidle0' });

// For each blog post, update the query params and take a screenshot
for (const meta of blogPostMetas) {
	await createPreview(await meta.read(), 'blog/');
}

// Do the same for other pages
/** @type {Meta[]} */
const otherMetas = [
	{
		slug: 'about',
		title: `Adam Coster`,
		description: `Co-founder & CEO of Butterscotch Shenanigans, fullstack web developer, podcaster, and certified science nerd.`,
	},
	{
		slug: 'index',
		title: `Adam Coster`,
		description: `Co-founder & CEO of Butterscotch Shenanigans, fullstack web developer, podcaster, and certified science nerd.`,
	},
	{
		slug: 'blog',
		title: `Adam Coster's Blog`,
		description: `Articles about webdev, gamedev, mental health, business, productivity, and more.`,
	},
];

for (const meta of otherMetas) {
	await createPreview(meta);
}

/**
 * @param {Meta} meta
 * @param {string} baseOutPath
 */
async function createPreview(meta, baseOutPath = '') {
	const { slug, title, description } = meta;
	const url = `${previewUrl}?slug=${slug}&title=${encodeURIComponent(
		title,
	)}&description=${encodeURIComponent(description)}`;
	await page.goto(url);
	// wait until we can find an element with data-slug==slug
	await page.waitForSelector(`[data-slug="${slug}"]`);
	// Take a screenshot of the element with class .social-preview
	const element = await page.$('.social-preview');
	if (!element) {
		throw new Error(`Could not find element with class .social-preview`);
	}
	const outfile = previewOutputDir.join(`${baseOutPath}${slug}.jpg`);
	const outDir = outfile.up();
	await outDir.ensureDir();
	console.log(`Writing ${outfile.relative}`);
	await element.screenshot({
		path: outfile.absolute,
		type: 'jpeg',
		quality: 90,
		captureBeyondViewport: true,
	});
}

await browser.close();
runnerHandle?.kill();
process.exit(0);
