import { addAppColors } from './theme.app.js';
import { theme } from './theme.base.js';
import { addSyntaxColors } from './theme.syntax.js';

addAppColors(theme);
addSyntaxColors(theme);
export { theme };
