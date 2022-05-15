---
slug: cloning-ligation-multiple-inserts
title: 'Cloning trick: ligation of multiple inserts'
description: >
  Stitching multiple DNA inserts together through standard cloning
  yields terrible results. But you can amplify the rare successes!
editedAt: 2013-02-26
publishedAt: 2011-07-11
legacySlug: cloning-trick-ligation-of-multiple-inserts
tags:
  - science
  - biology
  - experiments
  - tools
  - productivity
  - learn
---

_Update: A number of people are finding this post through Google searches. I don't have an updated post on the topic, but if you're trying to assemble multiple DNA fragments then I suggest looking into [Gibson Assembly](http://en.wikipedia.org/wiki/Gibson_assembly). NEB sells a dead-simple [mastermix](https://www.neb.com/products/e2611-gibson-assembly-master-mix), which is a bit pricey per reaction (I just make my reactions half the size) but comes out to cheap when you take into account the cost of labor (so long as your P.I. values your time...)._

I've spent the last couple of months building a plasmid library, and in the process I thought of a trick. Ligations, perhaps the worst part of cloning, are notoriously finicky reactions. The goal is to take several pieces of linear DNA, where the ends of the pieces can only connect in a certain way, and then use an enzyme (T4 [Ligase](https://en.wikipedia.org/wiki/DNA_ligase)) to sew them all together into one piece (in my case, a circular plasmid).

<figure>

![3-dimensional structure of the Ligase enzyme, rendered as a slightly-rotating animated GIF.](http://adamcoster.files.wordpress.com/2011/07/ligase.gif?w=300)

<figcaption>

Ligase (2HVQ.pdb) rendered in PyMOL.

</figcaption>

</figure>

I needed to insert three fragments at once into a single backbone. In my ignorance (from my lack of experience) I thought ligating four fragments should work just as well as two, so I just threw them all together and ran the reaction. The result was a mess, and when I tested 40 different clones afterwards not a single one was correct. So I started adding them one piece at a time which, obviously, was going to take three times as long.

Though most of what was in my test tube was _not_ the desired product, I figured that there must be _some_ tiny population that actually _was_ the correct fragment. The problem was just that putting my products into _E.coli_ and then trying to find the correct thing wouldn't work if only 1/100 (or fewer!) of the ligation products were correct. But [PCR](http://en.wikipedia.org/wiki/Polymerase_chain_reaction) is wonderful for making tiny amounts of DNA into large amounts, so I thought, why not just try to use PCR to get the correct thing out of the mess? Since each product is made out of some combination of the input fragments, the lengths would be discrete and therefore visible and, potentially, separable on [a gel](http://en.wikipedia.org/wiki/Gel_electrophoresis). I just needed to be able to copy up enough that I could _see_ DNA run on a gel, and then I could purify out the one that was the right length.

<figure>

![Schematic of a circular DNA showing a 3-fragment insert and location and direction of primers for amplifying the correct segment.](https://lh4.googleusercontent.com/-uQmvfz2DOIk/ThuwYacrjoI/AAAAAAAAAJ4/BMac-vSS_n0/text4985.png 'PCR after ligation')

<figcaption>

Each differently-colored fragment is being ligated into the gray backbone. The primers (black arrows) flank the entire insert.

</figcaption>

</figure>

I designed [primers](<http://en.wikipedia.org/wiki/Primer_(molecular_biology)>) that would flank the combined insert and did PCR, and did indeed get a band of the desired length! After [gel purification](http://en.wikipedia.org/wiki/Gel_extraction) I was able to ligate the entire insert into the backbone without any trouble.

You might be asking, "Well isn't this now a two-step process, just one less than the three required otherwise, and so barely worth the effort?" Almost, except that there is no need to transform the multi-fragment ligation mixture. So it's more like 1.5 steps. Plus, the ligation, PCR, gel purification, final ligation, and final transformation can all be done in a single day!

Though my labmates were surprised when this worked, it turns out I was a year too late to publish this idea[^1].

[^1]: An, Yingfeng et al. “A PCR-after-ligation method for cloning of multiple DNA inserts.” _Analytical biochemistry_ vol. 402,2 (2010): 203-5. [doi:10.1016/j.ab.2010.03.040](https://www.sciencedirect.com/science/article/abs/pii/S0003269710002198)
