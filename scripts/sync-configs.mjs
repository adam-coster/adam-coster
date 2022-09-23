import { ok } from 'assert';
import fs from 'fs/promises';
import os from 'os';
import path from 'path';

/**
 * @typedef {{current:string, type: 'color'|'file', name: string}} Substitution
 * @typedef {{templateBasename:string, outputPath:string}} ConfigTemplate
 */

// Make (fairly) sure we're starting in the right place
ok(process.cwd().endsWith('adam-coster'), 'cwd must be the repo root!');

const configsRoot = 'dotfiles';
const home = os.homedir();

/** @type {ConfigTemplate[]} */
const configs = [
	{
		templateBasename: 'starship.toml',
		outputPath: path.join(home, '.config/starship.toml'),
	},
];

/**
 * From Windows Terminal "One Half Light"
 *
 * @type {Record<string, string>}
 */
const colors = {
	background: '#FAFAFA',
	black: '#383A42',
	blue: '#0184BC',
	brightBlack: '#4F525D',
	brightBlue: '#61AFEF',
	brightCyan: '#56B5C1',
	brightGreen: '#98C379',
	brightPurple: '#C577DD',
	brightRed: '#DF6C75',
	brightWhite: '#FFFFFF',
	brightYellow: '#E4C07A',
	cursorColor: '#4F525D',
	cyan: '#0997B3',
	foreground: '#383A42',
	green: '#50A14F',
	name: 'One Half Light',
	purple: '#A626A4',
	red: '#E45649',
	selectionBackground: '#FFFFFF',
	white: '#FAFAFA',
	yellow: '#C18301',
};

await syncConfigs(configs);

/**
 * @param {ConfigTemplate[]} configs
 * @returns
 */
async function syncConfigs(configs) {
	const waits = [];
	for (const config of configs) {
		waits.push(syncConfig(config));
	}
	return await Promise.all(waits);
}

/**
 * @param {ConfigTemplate} config
 */
async function syncConfig(config) {
	const outDir = path.dirname(config.outputPath);
	await fs.mkdir(outDir, { recursive: true });
	const template = await fs.readFile(
		path.join(configsRoot, config.templateBasename),
		'utf-8',
	);
	const populated = await replaceSubstitutions(template);
	await fs.writeFile(config.outputPath, populated);
	console.log('Updated', config.outputPath);
}

/**
 * @param {string} content
 */
async function replaceSubstitutions(content) {
	const subs = findReplacements(content);
	for (const sub of subs) {
		switch (sub.type) {
			case 'color':
				ok(sub.name in colors, `Unknown color: ${sub.name}`);
				content = safeReplace(content, sub.current, colors[sub.name]);
				break;
			case 'file':
				content = safeReplace(
					content,
					sub.current,
					await fs.readFile(sub.name, 'utf-8'),
				);
				break;
			default:
				throw new Error(`Unknown substitution type: ${sub.type}`);
		}
	}
	return content;
}

/**
 * The String.prototype.replace() function isn't safe to use
 * when the `replaceWith` value contains `$` characters, so
 * this function splits on the `toReplace` and then joins on
 * the `replaceWith` value, thus avoiding the issue.
 *
 * @param {string} content
 * @param {string} toReplace
 * @param {string} replaceWith
 */
function safeReplace(content, toReplace, replaceWith) {
	return content.split(toReplace).join(replaceWith);
}

/**
 * @param {string} content
 */
function findReplacements(content) {
	const subs = content.matchAll(
		/(\{\{\{(?<type>[a-zA-Z]+):(?<name>[^}]+)\}\}\})/g,
	);
	/** @type {Substitution[]} */
	const replacements = [];
	for (const sub of subs) {
		const current = sub[1];
		if (replacements.find((r) => r.current === current)) {
			continue;
		}
		replacements.push({
			current,
			// @ts-ignore
			type: sub.groups.type,
			// @ts-ignore
			name: sub.groups.name,
		});
	}
	return replacements;
}
