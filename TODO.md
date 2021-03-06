# TODO

## Website

- Milestone: Deployed
  - Add a sitemap
  - Inform Google Search of the sitemap & trigger indexing
- Miscellaneous future features
  - Hook up a "draft" toggle on posts that prevents the build in production on associated pages.
    - Will also need to exclude from search, RSS, etc
  - Center iframes in articles (e.g. http://localhost:3000/blog/how-to-set-up-a-node-project-with-typescript)
  - Have the Podcast link go to a page explaining the podcast
  - Add a `/uses` page
  - Automate cross-posting
  - Find other articles and migrate
    - Sources:
      - The Bscotch blog (pull down with script)
      - Gamasutra (only a few, may also already be on the Bscotch blog)
    - Process
      - Find those worth migrating
      - Find all cross-posted URLs for each
      - Update internal URLs
      - Choose appropriate canonical URL
      - Choose appropriate title & slug
      - Create a description
  - Add share buttons to article pages
  - Add links back to source on GitHub
  - Add print styling
  - Add "light" color scheme (and maybe others)
  - Add distinct page linking to _all_ web service identifiers
  - Add distinct page for code projects with info
  - Add "advanced" search info to articles (list allowed fields, link to [lunr docs](https://lunrjs.com/guides/searching.html))
  - Create a tag hierarchy system and ensure all articles match it
  - Update header to either remove my portrait or make it part of the navbar
  - Add TOOLS section with useful web-based tools
    - Zapier code editor (the built-in one has no Intellisense). Is this hard to do?
