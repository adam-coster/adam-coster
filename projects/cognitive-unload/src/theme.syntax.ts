import type { theme as baseTheme } from 'theme.base.js';
import { filter } from './lib/selectors.app.js';

const $ = filter;

export function addAppColors(theme: typeof baseTheme) {}
