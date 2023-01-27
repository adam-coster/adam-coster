import grayMatter from 'gray-matter';
import { marked } from 'marked';

interface MicrodataFaqQuestion {
	'@type': 'Question';
	name: string;
	acceptedAnswer: {
		'@type': 'Answer';
		text: string;
	};
}

interface MicrodataFaqPage {
	'@context': 'https://schema.org';
	'@type': 'FAQPage';
	mainEntity: MicrodataFaqQuestion[];
}

type FoundMicrodata = MicrodataFaqPage[];

export function markdownToMicrodata(rawMarkdown: string): FoundMicrodata {
	const microdata: FoundMicrodata = [];

	const { content } = grayMatter(rawMarkdown) as {
		content: string;
	};

	const faqMatch = content.match(/<!--\s*FAQ(Page)?\s*-->\s*(?<faq>.+)/ims);
	if (faqMatch) {
		let questions: MicrodataFaqQuestion[] = [];
		const faqRaw = faqMatch.groups!.faq!.trim();
		const faqLines = faqRaw.split(/(\r?\n){2,}/g);
		for (const faqLine of faqLines) {
			// Is this a header?
			const isHeader = faqLine.match(/^#+\s+(?<header>.+)/);
			if (isHeader) {
				questions.push({
					'@type': 'Question',
					name: faqLine.trim(),
					acceptedAnswer: {
						'@type': 'Answer',
						text: '',
					},
				});
			} else {
				// Then it must be a paragraph for the last question's answer
				const lastQuestion = questions.at(-1)!;
				lastQuestion.acceptedAnswer.text += `${faqLine}\n\n`;
			}
		}

		// Filter out any answerless questions, and convert to html
		questions = questions
			.filter((x) => x.acceptedAnswer.text)
			.map((x) => {
				x.acceptedAnswer.text = marked(x.acceptedAnswer.text).trim();
				x.name = marked(x.name).trim();
				return x;
			});

		if (questions.length) {
			microdata.push({
				'@type': 'FAQPage',
				'@context': 'https://schema.org',
				mainEntity: questions,
			});
		}
	}

	return microdata;
}
