Every few months I remember that I have a blog, and then pop open the Google Search Console to make sure all my pages are indexed and see if people are finding the stuff I post.

When I did this in December I was _quite_ startled to see that I was getting _literally zero_ traffic from Google Search.

![Google Search Impressions chart for adamcoster.com spanning August 1, 2025 to December 2, 2025. Impressions are on an increasing trend for most of August, peaking at ~5000 daily impressions, but then impressions suddenly plummet to August 27, hitting 0 by mid-September.](/images/google-deindexed-robots-unreachable/google-search-without-robots-txt.jpg)

Fortunately, [Google's Search Console](https://search.google.com/search-console/about) told me exactly what was going on: in its latest pass on my site, it put the whole thing into an error category of _not being indexable_ because it could not find a `/robots.txt` file ("robots.txt unreachable").

Now, this site has not had a `robots.txt` for _years_ (which certainly explains why Google couldn't find one). All the pages are public anyway, and I assumed that crawlers would crawl by default unless they hit a `robots.txt` `Disallow` rule or a `noindex` header. So why bother adding that file?

Well, it turns out that you **absolutely need a `robots.txt`** if you want Google Search to index your site!

This has to be a new requirement since, again, I haven't had that file for at least 3 years. [Alan Smith found](https://www.alanwsmith.com/en/37/wa/jz/s1/) [an official help article about this](https://support.google.com/webmasters/community-video/360202946/fix-robots-txt-unreachable-error-website-not-indexing?hl=en), released on Jul 22, 2025 (a month before my site got de-indexed), but I can't find the requirement itself mentioned anywhere in Google's documentation. [Google's `robots.txt` guidance](https://developers.google.com/search/docs/crawling-indexing/robots/intro) makes no mention of it at all.

I would have expected this change to be a much bigger deal since the impact is the complete de-listing from Google Search of any website lacking a `robots.txt`, but I haven't seen it in any news anywhere. Maybe there's a correlation between not having a `robots.txt` and not checking Google Search performance...

Anyway, if you manage to find any information about when the `robots.txt` became a requirement for Google Search I'd _love_ to hear about it! Hit me up [on Bluesky](https://bsky.app/profile/adamcoster.com) or something.

And if this has happened to you, take heart that it looks like recovery is possible:

![Google Search Impressions chart for adamcoster.com spanning the last 6 months showing a wide hole in the middle with zero impressions, but ending with the final week looking similar to how things did before the site was di-indexed.](/images/google-deindexed-robots-unreachable/google-search-with-robots-txt.jpg)

## How to fix it?

To get things working again, I [added a `robots.txt` file](/robots.txt) and then resubmitted my sitemaps via Google Search Console. It took about two weeks to start getting some visibility back, and right now most pages are "Crawled but not indexed", which is a cryptic state that Google provides very little information about. I expect it'll be another few weeks before Google has my site fully indexed again (it's sure taking its sweet time), and who knows how long it'll take after that for my search visibility to get back to where it was.

## Do other search engines require `robots.txt`?

As far as I can tell, no. Seems to just be a Google thing.
