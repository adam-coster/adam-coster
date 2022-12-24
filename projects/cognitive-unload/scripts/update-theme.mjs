import { pathy } from '@bscotch/pathy';
import { theme } from '../dist/theme.js';

const themePath = pathy('./themes/cognitive-unload-color-theme.json');

await themePath.write(theme);
