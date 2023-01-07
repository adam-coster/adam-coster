import type { AppSelector } from './selectors.app.js';
import type { SyntaxSelector } from './selectors.syntax.js';
export { app } from './selectors.app.js';

export type Selector = AppSelector | SyntaxSelector;
