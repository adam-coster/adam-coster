import {
	createConfig,
	generateArticleSummaries,
} from '@adam-coster/site-tools';
import { options } from './project.config.js';

// Run during import to ensure that article summary files exist, to prevent downstream errors.
generateArticleSummaries(options);

const config = createConfig();
export default config;
