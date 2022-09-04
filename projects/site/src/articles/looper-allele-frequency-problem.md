---
slug: looper-allele-frequency-problem
title: Allele frequency problem in "Looper"
description: >
  Time travel is always a nonsense generator,
  but "Looper" kicks it up a notch with impossibly rapid evolution.
publishedAt: 2013-01-12T07:55:00.402Z
legacySlug: allele-frequency-problem-in-looper
tags:
  - science
  - biology
  - evolution
  - media
  - critique
---

Time travel movies are always full of bad physics and and contradictory logic, though certainly some do it better than others. I usually just try not to think about them too hard so that I can take in the entertainment value. ["Looper"](https://www.imdb.com/title/tt1276104/) is no exception, but the most glaring error in the movie's science was not in the physics; it was in the biology.

The beginning of the movie tells of a new mutation, the "TK mutation", that has crept into the population to give people weak telekinetic powers. The idea of a gene, and more importantly a mutation in an existing gene, somehow allowing telekinesis is of course absurd, but I'm already used to that premise.

Looper presents a different problem: _allele frequencies_. The movie takes place in the 2040's. Only thirty years from now. And, at that time, the movie says that 10% of the human population has the TK mutation.

This frequency is... suspicious.

Why? Well, right now 0% of the human population has this mutation. The thirty years between now and then have to bring that to 10%. How high could it _reasonably_ get in that time frame?

Looking around the internet, it appears that the world death rate is something like 0.8%, while the world birthrate is something like 1.15% (values vary dramatically by resource and will certainly change in time). This means that something like 33% of the people alive in 2043 will have been born between now and then (2.4 billion births). And thus nearly 1/3 of all of them would have to have the TK mutation! This requires a ~33% chance of _the same spontaneous mutation_ in every birth.

So what is the mutation rate in humans? The most recent high estimate sits around 1.38 mutations in 100,000,000 bases [^1]. This means that any one human has a 1.38/100,000,000 chance of having the TK mutation. This is 4 million times smaller than the 33% chance required!

In other words, only 35 people born between now and 2030 would be expected to have the same mutation, in this case the TK mutation. That is a hell of a lot fewer than 760,000,000!

Conclusion: The world in which the loopers live is a magical one. Fortunately, the existence of magic also goes a long way toward explaining the time travel paradoxes and their resolution. Alternatively, there could have been some exogenous source of the TK gene. Perhaps a mosquito-borne retrovirus?

NOTE 1: All of the values I used above are estimates based on the best information I could find, but even if I am way off on all of them, it would be impossible to find reasonable values that would give a final outcome such that anything even close to 10% of people could end up with the same new mutation in 20 years. Unless there are over twenty million sites at which this mutation would cause the TK phenotype, and in that case we ought to be seeing a heck of a lot of telekinesis right now.

NOTE 2: Maybe we should interpret this as a TK gene instead of a mutation. A mutation implies a change to an existing gene, which most of the time breaks it. Rarely, though, a mutation can give a new function to a gene. But there are fewer ways to add function, and so we wouldn't be able to get past the probability problem described above. If it was a gene, though, then perhaps it could have come from some outside source. A retrovirus, perhaps?

Here's the (JavaScript) code I used to get the numbers:

```js
let population = 7000000000;
const birthrate = 0.0115;
const deathrate = 0.0087;

let new_people = 0;
const years = 30;

for (let year = 0; year < years; year++) {
	let dead = population * deathrate;
	let born = population * birthrate;
	new_people += born;
	population += born - dead;
}

console.log(
	'Fraction of population born between now and then:',
	new_people / population,
);
```

[^1]: Scally and Durbin. "Revising the human mutation rate: implications for understanding human evolution." Nature Reviews Genetics 13, 745-753 (October 2012) | [doi:10.1038/nrg3295](https://pubmed.ncbi.nlm.nih.gov/22965354/)
