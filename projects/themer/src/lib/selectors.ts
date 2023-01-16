import type { AppSelector } from './selectors.app.js';
import type { SyntaxSelector } from './selectors.syntax.js';
export * from './selectors.app.js';
export * from './selectors.syntax.js';
export * from './selectors.types.js';

export type Selector = AppSelector | SyntaxSelector;
