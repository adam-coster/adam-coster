import {
	createConfig,
	// createConfig,
	generateArticleSummaries,
} from '@adam-coster/site-tools';
import { options } from './scripts/project.config.js';

// Run during import to ensure that article summary files exist, to prevent downstream errors.
generateArticleSummaries(options);

const config = createConfig(options);
export default config;
