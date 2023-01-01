import { SyntaxSelector } from './lib/selectors.syntax.js';
import { Theme } from './lib/themes.js';

const sampleSelectors = {
	hello: {
		world: {
			good: {},
		},
	},
} as const;
const sampler = SyntaxSelector.createFilter(sampleSelectors);

const theme = new Theme('test', {
	gray: 'gray',
});

theme.style('gray', sampler.hello, sampler.hello.world);
