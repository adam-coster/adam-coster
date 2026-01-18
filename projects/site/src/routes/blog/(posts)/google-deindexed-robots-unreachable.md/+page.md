Every few months I remember that I have a blog, and then pop open the Google Search Console to make sure all my pages are indexed and see if people are finding the stuff I post.

When I did this in December I was _quite_ startled to see that I was getting _literally zero_ traffic from Google Search.

![Google Search Impressions chart for adamcoster.com spanning August 1, 2025 to December 2, 2025. Impressions are on an increasing trend for most of August, peaking at ~5000 daily impressions, but then impressions suddenly plummet to August 27, hitting 0 by mid-September.](/images/google-deindexed-robots-unreachable/google-search-without-robots-txt.jpg)

Fortunately, [Google's Search Console](https://search.google.com/search-console/about) told me exactly what was going on: in its latest pass on my site, it put the whole thing into an error category of _not being indexable_ because it could not find a `/robots.txt` file ("robots.txt unreachable").

Now, this site has not had a `robots.txt` for _years_ (which certainly explains why Google couldn't find one). All the pages are public anyway, and I assumed that crawlers would crawl by default unless they hit a `robots.txt` `Disallow` rule or a `noindex` header. So why bother adding that file?

Well, it turns out that _not_ having that file got me into trouble: as far as I can tell, it's _supposed to be_ the case that Google will treat an absent `robots.txt` as permission to index, but what does "absent" mean?

Apparently, a recent change to the SvelteKit Cloudflare adapter (used to host this site) made it so that URLs to non-existent paths return `500 Internal Server Error` status codes in production instead of `404 Not Found`, so my bet is that this is what caused Google to treat my site has having an "unreachable" `robots.txt` rather than an _absent_ one.

In other words: If Google gets a `500` error on your `robots.txt`, it'll _delist your entire site from Google Search!_

On the one hand, it makes sense that Google would interpret a `500` error to mean that there _might be_ a `robots.txt`, and therefore _might_ be a rule that says Google can't index the site, and therefore must proceed with caution to ensure it doesn't index stuff it shouldn't.

On the other hand, if a site is _already indexed_, and Google can reach its sitemaps, and none of the pages include a `noindex` header... it really seems like de-indexing _the entire site_ is about as wrong of a move as Google could make. Truly wild behavior for this scenario. Unhinged, even. And also counter to [what Google says about the `robots.txt`](https://developers.google.com/search/docs/crawling-indexing/robots/intro):

> A robots.txt file tells search engine crawlers which URLs the crawler can access on your site. This is used mainly to avoid overloading your site with requests; it is not a mechanism for keeping a web page out of Google. To keep a web page out of Google, block indexing with noindex or password-protect the page.

## How to fix it?

If this has happened to you, take heart that it looks like recovery is possible:

![Google Search Impressions chart for adamcoster.com spanning the last 6 months showing a wide hole in the middle with zero impressions, but ending with the final week looking similar to how things did before the site was di-indexed.](/images/google-deindexed-robots-unreachable/google-search-with-robots-txt.jpg)

Fixing it will depend on what exactly is happening. I'm still assuming that you don't actually need a `robots.txt`, as long as that URL returns a `404` status or something else GoogleBot likes. But why risk it? Add a `robots.txt` file if you don't have one! And otherwise, uh, just make sure that your server is super reliable about delivering it?

For my case, I [added a `robots.txt` file](/robots.txt) and then resubmitted my sitemaps via Google Search Console. It took about two weeks to start getting some visibility back, and right now most pages are "Crawled but not indexed", which is a cryptic state that Google provides very little information about. I expect it'll be another few weeks before Google has my site fully indexed again (it's sure taking its sweet time), and who knows how long it'll take after that for my search visibility to get back to where it was.

At some point I'll need to figure out why I'm getting these `500` pages instead of `404`s, but that's a problem for future me.

## Do other search engines do this?

I've seen no disruption to search performance in Bing, but that's the only other engine I've checked.
