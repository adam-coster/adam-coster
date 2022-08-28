import type { ArrayOrItem } from '@adam-coster/site-tools';
import { writable } from 'svelte/store';
import { digitalIdentities } from './identities';
import type {
	ArticleSchema,
	MicrodataSchema,
	PersonSchema,
	WebSiteSchema,
} from './microdata.js';
import { assert, dateToIso } from './utility';

interface MetadataBase {
	title: string;
	description: string;
}

export interface MetadataNoRobots extends MetadataBase {
	noRobots: true;
}

export interface MetadataFull extends MetadataBase {
	canonical: string;
	microdata?: ArrayOrItem<MicrodataSchema>;
	type?: 'website' | 'article';
	noRobots?: false;
}

export type Metadata = MetadataNoRobots | MetadataFull;

export const me: PersonSchema = {
	'@type': 'Person',
	name: 'Adam Coster',
	givenName: 'Adam',
	familyName: 'Coster',
	honorificSuffix: 'PhD',
	sameAs: digitalIdentities
		.filter((p) => p.type != 'content')
		.map((p) => p.url),
	alumniOf: [
		{
			'@type': 'CollegeOrUniversity',
			name: 'University of Chicago',
			sameAs: 'https://www.uchicago.edu',
		},
		{
			'@type': 'CollegeOrUniversity',
			name: 'University of Texas Southwestern Graduate School of Biomedical Sciences',
			sameAs: 'https://www.utsouthwestern.edu/education/graduate-school',
		},
	],
	image: asCanonicalUrl('/images/adam-coster-large.jpg'),
	memberOf: 'Butterscotch Shenanigans',
	worksFor: 'Butterscotch Shenanigans',
	jobTitle: 'CEO',
	url: asCanonicalUrl('/'),
};

/**
 * @see https://developers.google.com/search/docs/advanced/structured-data/article#non-amp
 */
export function createArticleMicrodata(info: {
	headline: string;
	/**
	 * If provided, images must belong to the article,
	 * crawlable & indexable, high-rez, preferred to
	 * have all of 16x9, 4x3, and 1x1 aspect ratios in
	 * any of BMP, GIF, JPEG, PNG, WebP, and SVG
	 */
	images?: string[];
	datePublished: string | Date;
	dateModified?: Date | string;
}): ArticleSchema {
	const datePublished = dateToIso(info.datePublished);
	// Google requires headline length to be no more than 110 characters
	const maxHeadlineLength = 110;
	const headline =
		info.headline.length > maxHeadlineLength
			? info.headline.slice(0, maxHeadlineLength - 1) + '…'
			: info.headline;
	return {
		'@type': 'Article',
		headline,
		author: me,
		datePublished,
		dateModified: info.dateModified
			? dateToIso(new Date(info.dateModified))
			: datePublished,
		image: info.images?.map(asCanonicalUrl),
	};
}

/**
 * For showing on the landing page, enabling Google
 * to populate a functional searchbox
 * @see https://developers.google.com/search/docs/advanced/structured-data/sitelinks-searchbox
 */
export const site: WebSiteSchema = {
	'@type': 'WebSite',
	url: asCanonicalUrl('/'),
	author: me,
	potentialAction: {
		'@type': 'SearchAction',
		target: {
			'@type': 'EntryPoint',
			urlTemplate: `${asCanonicalUrl('/blog')}?search={search_term_string}`,
		},
		// @ts-ignore (see https://developers.google.com/search/docs/advanced/structured-data/sitelinks-searchbox)
		'query-input': 'required name=search_term_string',
	},
};

/**
 * Create a canonical URL from a given URL with some
 * simple normalization. If the URL is `undefined`,
 * use the current URL from `location`.
 */
export function asCanonicalUrl(url = '/') {
	let canonical: URL;
	if (url.match(/^https?:\/\//)) {
		canonical = new URL(url);
	} else {
		canonical = new URL(`https://adamcoster.com${url}`);
	}
	// If external, leave it alone. Otherwise clean it up!
	if (!canonical.host.endsWith('adamcoster.com')) {
		return url;
	}
	// Remove trailing slash
	canonical.pathname = canonical.pathname.replace(/\/$/, '');
	// Remove query params
	canonical.search = '';
	return canonical.toString();
}

function normalizeTitle(title: string) {
	return `${title} | Adam Coster`;
}

export function createMetadata() {
	const { subscribe, set } = writable({
		title: normalizeTitle(''),
		description: '',
		canonical: asCanonicalUrl(''),
		type: 'website',
		noRobots: false,
		microdata: [], // On set, should force to a string, but the types don't work as expected otherwise,
	} as Metadata);

	return {
		subscribe,
		set(metadata: Metadata) {
			console.log('SETTING METADATA', metadata);
			assert(metadata.title, 'Title is required');
			assert(metadata.description, 'Description is required');
			if (metadata.noRobots) {
				set({
					title: normalizeTitle(metadata.title),
					description: metadata.description,
					noRobots: true,
				});
				return;
			} else {
				assert(typeof metadata.canonical !== 'string', 'Canonical is required');
				assert(metadata.type, 'Type is required');
				assert(metadata.microdata, 'Microdata is required');
				set({
					title: normalizeTitle(metadata.title),
					description: metadata.description,
					canonical: asCanonicalUrl(metadata.canonical),
					type: metadata.type || 'website',
					noRobots: metadata.noRobots,
					microdata: metadata.microdata,
				});
			}
		},
	};
}
