## On desktop Chrome

In Chrome Settings, go to "Search Engines" → "Manage search engines and site search". Add a new "Site search" with a keyword that makes sense to you and the appropriate search URL (use `%s` as the stand-in for where your query will get added to the URL).

For example, for better Google Search experience use `https://www.google.com/search?q=%s&udm=14&tbs=li:1`, where [`&udm=14` disables the AI and other nonsense](https://udm14.com/) and [`&tbs=li:1` puts it into "verbatim" mode](https://arstechnica.com/gadgets/2024/05/google-searchs-udm14-trick-lets-you-kill-ai-search-for-good/) (search engines like Google normally do a whole bunch of processing to convert your query into something it _thinks_ is what you want, but if you're good at composing search queries that can be counter-productive).

(You can also test out advanced settings via the regular Google Search UI to see what other parameters get added, and tweak your custom engine using those parameters.)

As for the keyword you use, that's how you trigger which search engine/site-search to use when you type stuff into Chrome's address bar. So if you use a keyword like `g` for your custom Google search, typing `g` then a space (or tab) will cause it to pick your custom search engine for the rest of the query you type.

If you want to make your custom site-search be your default _search engine_, you can click the three dots next to your site-search and choose the "Make default" option.

Custom search engines are super handy to better find what you want, and also make it really easy to test things out.

## Useful custom Site Searches

- [Kagi](https://kagi.com) (`https://kagi.com/search?q=%s`). Tweak settings on a search via their UI to find other parameters you might want to add.
- [GitHub](https://github.com/search) (`https://github.com/search?q=%s`). Try out their [advanced search page]() to find other parameters you might want to use. You could even set up additional custom searches for each organization you're in, or for particular repos, their issues, etc.
- [reddit](https://www.reddit.com) (`https://www.reddit.com/search/?q=%s`). You could even add custom searches for specific subreddits, like `https://www.reddit.com/r/crashlands/search/?q=%s`.
- [MDN](https://developer.mozilla.org) (`https://developer.mozilla.org/en-US/search?q=%s`). If you're a frontend web developer you're probably looking up things on MDN _all the time_. Might as well make it easy!
