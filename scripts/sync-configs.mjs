#!/usr/bin/env zx

import { ok } from 'assert';
import fs from 'fs/promises';
import os from 'os';
import path from 'path';

// Make (fairly) sure we're starting in the right place
ok(process.cwd().endsWith('adam-coster'), 'cwd must be the repo root!');

const configsRoot = 'dotfiles';
const home = os.homedir();

// Starship
const outDir = path.join(home, '.config');
await fs.mkdir(outDir, { recursive: true });
await fs.copyFile(
	path.join(configsRoot, 'starship.toml'),
	path.join(outDir, 'starship.toml'),
);
