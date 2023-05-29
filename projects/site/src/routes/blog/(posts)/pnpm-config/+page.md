I've spent a lot of time with the big-three Node.js package managers (npm, pnpm, and yarn), and I've consistently found pnpm to deliver the best overall experience. Of particular interest to me is that it works great with "monorepos" (many packages in one git repository).

While pnpm's defaults are solid, there are a bunch of tweaks that make things even better. After a lot of trial and error I've found the settings that make my development experience great.

The first sections of this post are for people new to pnpm. For those already familiar, you can jump right to [my configuration recommendations](#get-the-best-developer-experience).

## Differences from npm

[pnpm](https://pnpm.io/) is largely a drop-in replacement for npm: just plop in a `package.json` file and start using `pnpm <whatever>` commands!

There are some differences that are good to be aware of:

- Monorepos are specified using a `pnpm-workspace.yaml` file instead of the `"workspaces"` field in `package.json` that npm and yarn use.
- You can run all of your `package.json` scripts via `pnpm <script-name>` (npm lets you do that for some scripts, but others require the `npm run` subcommand)
- You can also run your installed binaries with `pnpm <command>`. For example, you might want to run local versions of Typescript (`pnpm tsc`) or eslint (`pnpm eslint`). npm uses a separate command (`npx`) to run binaries.
- pnpm separates the installing the dependencies listed in your `package.json` (via the command `pnpm install`) from adding new dependencies (via the command `pnpm add`). npm uses `npm install` for both.
- To add a local dependency within a monorepo, in your `package.json` `"dependencies"` field you'll prefix your local dependencies' version-range strings with `workspace:` (a.k.a. the "workspace protocol"). When publishing, pnpm resolves those prefixed versions to their actual versions in the published packages. For example, if I have package `a` depending on `b` in my monorepo, the `package.json` for `a` would look like:
    ```jsonc
    "dependencies":{
      "b": "workspace:*" // (where '*' means "any version")
    }
    ```

There are many other differences, but the above are the most likely to trip you up when switching from npm.

## Installing pnpm

I recommend [using corepack](/blog/corepack-ensures-consistent-pnpm-version) since that keeps things nice and automagic, but there are also [other ways](https://pnpm.io/installation).

## Basic setup for monorepos

There is only one thing you *need* to do to enable pnpm for your monorepo: add a `pnpm-workspace.yaml` file alongside your root `package.json`. It should look like this:

```yaml
# The only field in this config file!
packages:
  # Add paths to each package's folder, or glob patterns
  - 'packages/*'
```

That's it! Now you're ready to use pnpm. BUT, with some additional configuration you can get a much slicker dev experience.

## Switching from npm

While the switch from npm to pnpm is pretty smooth, there are some changes you'll have to make:

- Nuke all `node_modules` folders with `rm -rf **/node_modules`. pnpm stores dependencies completely differently and will need to download everything fresh.
- In your `package.json` files, update all local dependency listings to use the workspace protocol. For example, `{dependencies:{myLocalPackage:"^1.2.3"}}` would become `{dependencies:{myLocalPackage:"workspace:*"}}`
- Find all instances of the words "npm" and "npx" across all projects and replace them with `pnpm`. You can use a regex search like `\bnp[mx]\b` and restrict the search to appropriate filepaths to do this quickly and with minimal error.
- Update your VSCode `settings.json`:
    ```json5
    //...
    "search.exclude": {
      // Avoid polluting search results with lockfile content
      "pnpm-lock.yaml": true,
    },
    // Ensure VSCode uses pnpm instead of npm
    "eslint.packageManager": "pnpm",
    "npm.packageManager": "pnpm",
    // For those using file-nesting, nest the new files. E.g.:
    "explorer.fileNesting.patterns":{
      "package.json": "pnpm-workspace.yaml, pnpm-lock.yaml"
    }
    ```

## Get the best developer experience

The pnpm experience is solid from the jump, but you can make it GREAT by digging into the configuration options. The following are my recommendations for how to configure pnpm in a monorepo context:

### The `.npmrc` file

Just like npm, pnpm reads configuration information from `.npmrc` files. These files use `key=value` pairs to set config options.

Notably, any configuration settings in your repo-root `.npmrc` file will *also apply* to all of the packages within your monorepo! This is super useful, since it allows you to centralize your pnpm settings. You can even override settings for a specific package by adding a different `.npmrc` alongside that package's `package.json`.

Create a `.npmrc` file alongside your root `package.json` file, and then set the following (see [the docs](https://pnpm.io/npmrc) for all options):

- `use-node-version=18.16.0` (or whatever version you want). This setting causes pnpm to use the listed Node version for its operations, including when you run your `package.json` scripts or run node itself (if you do so via `pnpm node` instead of calling `node` directly). pnpm will even install that version for you if it isn't already available! You can also change this setting for any specific package, allowing you to ensure that your packages are always using the node version you want without you ever having to think about it.
- `strict-peer-dependencies=false` Peer dependencies are a nightmare. I always set this to `false` to make them less so.
- `publish-branch=main` (or whatever your main git branch is). This prevents `pnpm publish` from running if you aren't on the specified branch, which can save you some headaches.
- `save-prefix=""`. This makes it so that *exact* versions are used when you run `pnpm add`. This is a good default since it's the safest, and you can always change the behavior for specific dependencies by manually editing their version (e.g. by changing `"1.1.3"` to `"^1.1.3"`).
- `link-workspace-packages=false`. Your monorepo packages can depend on each other, but how does pnpm decide if you mean the *local* version of a dependency (allowing symlinking right to the source) versus a specific past version (requiring downloading separate files)? pnpm provides a few ways to handle this, but setting this option to `false` is the most predictable and explicit. And that means fewer surprises! This option tells pnpm to *only* resolve local deps to the local files when the `workspace:` protocol is used, and to otherwise download published versions.
- `save-workspace-protocol=rolling`. This dictates how `pnpm add` decides whether or not to include the `workspace:` prefix and whether or not the version will be specified. Whatever default you choose, you can easily override a dependency by manually editing its version string in your `package.json` dependencies. There's significant nuance in which option to choose for defaults that make sense for your use case:
  - `false`: Never use the `workspace:` prefix. In combination with `link-workspace-packages=false` newly-added deps will always resolve to published, _static_ artifacts (instead of local ones). This yields the fewest surprises, but doesn't let you take full advantage of having all of your packages in one repo.
  - `true`: Always include the `workspace:` prefix _and_ the version of the dep at the time of `pnpm add`, for local dependencies. This is the most balanced choice if you have really good versioning and testing tooling, since you can still do rapid development across dependency boundaries but will get alerted when a dep gets bumped too far.
  - `rolling`: Always include the `workspace:` prefix but _not_ the specific version. This provides the smoothest development experience, since you can freely move between projects and see the consequences on their dependents instantly, without having to deal with semver range conflicts. However, you need robust versioning and testing tooling to stay out of trouble since it's easy to publish something without also publishing its updated dependency, among other issues. This case is best reserved for monorepos where all projects always get version-bumped at the same time, and automatically, if there have been any changes to them.

## Manage dependency versions with syncpack and depcheck

pnpm helps to reduce downloads and the size of dependencies on disk by symlinking shared dependencies. However, when your shared dependencies use incompatible versions you lose a lot of those benefits. This is a particular problem when you use the more conservative settings recommended above, like forcing *exact* versions of dependencies instead of ranges.

To mitigate this, I recommend using [syncpack](https://www.npmjs.com/package/syncpack). Syncpack looks at all of your `package.json` files to find all common dependencies, and ensures they're all at the same version. If you need more nuance than that, it also has a lot of configuration options.

Add `syncpack fix-mismatches` to the `"postinstall"` script in your `package.json` to ensure that your dependency versions are being frequently synced.

Finally, over time you're likely to end up with some stray dependencies that are no longer in use by your packages. [depcheck](https://www.npmjs.com/package/depcheck) is a great tool for this, and it also has a ton of configuration options.
