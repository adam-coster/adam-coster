# Switching from npm to pnpm in a monorepo

## Installing

- Use [corepack](https://nodejs.org/api/corepack.html)!
  - Comes with Node >=14.19 or >=16.9
  - Open a terminal
    - (On Windows I needed an admin terminal)
    - Run `corepack enable`
    - To set the _default_ version (unless overridden by the `package.json/packageManager` field), run `corepack prepare pnpm@the.specific.version --activate`
    - To ensure a specific version is used in a project, update that project's `package.json/packageManager` field to `pnpm@the.specific.version` (must be an exact version!). Corepack will ensure that exactly and only this version gets used.

## Configuration

Things to add or change from defaults

- Add `pnpm-workspace.yaml`
- Add to root [`.npmrc`](https://pnpm.io/npmrc)
  - (Workspace root settings apply to all projects unless overridden there (which npm does not do!))
  - `use-node-version=16.17.1` Will install on the fly, automatically, so you don't have to worry about an unexpected Node version being used. npm does not do this. Controls what is used by `pnpm run` and `pnpm node`. Allows for each project to use a different Node version!
  - `strict-peer-dependencies=false` (optional, based on prefs, also used by npm)
  - `publish-branch=main` (optional, based on workflow)
  - `link-workspace-packages=false` Only resolve local deps to the workspace files if the `workspace:` protocol is used
    - Any dependency listed with the `workspace:` protocol will _still_ be resolved only locally, so setting this to false doesn't prevent you from getting those advantages (assuming you use that option).
    - Interpretation of dependency listings is unambiguous: if it starts with `workspace:` you know it's resolved locally, and if it doesn't then you know it's being installed.
    - Removes error caused by the fact that the local "version" of a given project is poorly defined -- the `package.json/version` field tends to stay constant even if changes have been made to that project, since the version-bumping process is usually not tied to every single git commit.
    - Makes it very easy to change a listed dependency to use the workspace or a published version, by adding/removing the `workspace:` prefix
    - If you don't want to use the `workspace:` protocol at all (doing so does reduce compatibility with other tools and can result in broken artifacts if pnpm isn't used for publishing) then setting this to `false` basically means all deps resolve to actually-published versions. Despite not being super performant, that _is_ the approach that yields the least-risky outcomes.
  - `save-prefix=""`
    - When `pnpm add` adds a dep, whether it's a workspace or remote dep, it is listed as an _exact_ version.
    - The safest default behavior, since `semver` is a stellar idea in theory but life just isn't that simple
    - Not very performant unless you're keeping all of your deps in sync (which is a good idea anyway)
    - You can still override this by specifying a range during install or by manually editing the `package.json` listing.
  - `save-workspace-protocol` the default way that `pnpm add` lists a workspace dep: whether or not it will include the `workspace:` prefix, and whether or not the version will be specified. Whatever default you choose, you can easily override it for a given listing (e.g. by manually editing). There's significant nuance in which option to choose:
    - `false`: Excludes the `workspace:` prefix. In combo with `link-workspace-packages=false` means that the default behavior is newly-added deps will always resolve to published, _static_ artifacts. This is the safest default, but if are likely to make changes to a package and the added dep at the same time, you'll want to manually add the `workspace:` prefix during development!
    - `true`: Includes the `workspace:` prefix _and_ the version of the dep at the time of `pnpm add`. This is the most balanced choice if you have really good versioning and testing tooling, since you can still do rapid development across dependency boundaries but will get alerted when a dep gets bumped too far.
    - `rolling`: Includes the `workspace:` prefix but _not_ the specific version. This provides the smoothest development experience, since you can freely move between projects and see the consequences on their dependents instantly, without having to deal with semver range conflicts. However, you need _really_ robust versioning and testing tooling to stay out of trouble. This case is best reserved for monorepos where all projects always get version-bumped at the same time, and automatically, if there have been any changes to them. That way you ensure that at least the published dep-listings are fairly accurate!
- Add `engines` to root `package.json`
- Nuke all `node_modules` with `rm -rf **/node_modules`
- Update all local deps listings to use pnpm workspace versioning spec, e.g. `workspace:*`
- Find all instances of `npm` and `npx` across all projects and replace with `pnpm`. Remember that in `package.json/#/scripts` you don't need to use `pnpm` when calling commands, the manager does that for you! So you can just _delete_ those references instead of changing them. Also note that you can do a regex search with e.g. `\bnpm\b` or exclude certain paths if your search yields too many false positives.
-
- Update your VSCode `settings.json`:
  - Add `pnpm-lock.yaml` to `search.exclude`
  - `npm.packageManager`: `pnpm` or `auto`
  - `eslint.packageManager`: `pnpm`
  - `"explorer.fileNesting.patterns": {"package.json": "pnpm-workspace.yaml, pnpm-lock.yaml"}`

```json
"engines": {
  "node": ">=16",
  "pnpm": ">=7"
},
```

## Fixing dependency listings

- syncpack: force all projects to use the same dep versions
- depcheck
  - `pnpm depcheck projects/{project-path}`
  - To get as a copy-pasteable: `pnpm depcheck projects/site/ | sed -r 's/^\*\s+([^:]+):.*$/"\1":"0.0.0",/'`
  - Force sync the versions to others specified in your projects: `pnpm syncpack fix-mismatches`

## Cloudflare pages

Cloudflare Pages pnpm workaround: https://community.cloudflare.com/t/add-pnpm-to-pre-installed-cloudflare-pages-tools/288514/5

Can specify the node version via env NODE_VERSION

Can we use corepack on Cloudflare Pages?
