# Switching from npm to pnpm in a monorepo

## Configuration

- Add `pnpm-workspace.yaml`
- Add `engines` to root `package.json`
- Nuke all `node_modules` with `rm -rf **/node_modules`
- Update all local deps listings to use pnpm workspace versioning spec, e.g. `workspace:*`
- Find all instances of `npm` and `npx` across all projects and replace with `pnpm`. Remember that in `package.json/#/scripts` you don't need to use `pnpm` when calling commands, the manager does that for you! So you can just _delete_ those references instead of changing them. Also note that you can do a regex search with e.g. `\bnpm\b` or exclude certain paths if your search yields too many false positives.
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
