Modern web development projects have _tons_ of dependencies. Making sure those dependencies stay consistent over time and across development environments can be a true nightmare. Handling that is the job of package managers like npm, [pnpm](https://pnpm.io/), or [yarn](https://yarnpkg.com/).

But what manages the package manager? How do you ensure that your collaborators, development environments, continuous integration environments, and even individual projects within a monorepo don't throw surprises at you after using an old version of your package manager? Or even the _wrong package manager entirely_?

This is the problem that [corepack](https://nodejs.org/api/corepack.html) solves for you. Configured correctly, corepack lets you guarantee that a given package _always_ uses the same version of pnpm or yarn for package management tasks.

## How to use corepack

Corepack comes with Node >=14.19 and >=16.9, but _it is not enabled by default_.

You'll need to [run `corepack enable` to turn it on](https://nodejs.org/api/corepack.html#enabling-the-feature) in all of your development and continuous integration environments.

All you have to do after that is set the `packageManager` field in all of your project's `package.json` files. You'll need to set it to an _exact_ version of pnpm or yarn. For example:

```json
{
	"name": "your-amazing-project",
	"version": "1.2.3",
	"packageManager": "pnpm@7.12.2"
}
```

And that's it!

You can also use corepack to set the fallback (global) package manager version, to use when you aren't inside of a project that has the `packageManager` field set. To do that, run `corepack prepare pnpm@7.12.2 --activate` (substituting in whatever version of pnpm/yarn you want to use).

## Issues and Ambiguities

<!-- FAQPage -->

### Do I have to set `"packageManager"` in all projects of a monorepo?

Nope! You can just set `"packageManager"` in your monorepo's root `package.json` file. Corepack will ensure that package manager version is used no matter which of your monorepo's subfolders or projects you're working within.

### What if my current working directory is not the same as the `package.json` folder?

Wherever you're running `pnpm` or `yarn` from, corepack will use the _nearest_ `package.json` file that contains a `packageManager` field. It'll skip `package.json` files that do not include that field, and keep searching up the tree for one that does. If no such case is found it falls back on the global version.

### Does corepack also work with npm?

<time datetime="2022-10-09">Currently</time>, no, corepack only works with pnpm and yarn.

### If I add the "packageManager" field, will corepack "just work"?

As long as corepack has been enabled (which does not happen automatically!), corepack will invisibly make sure your "packageManager" field is respected. It'll just work!

### How do I fix `Internal Error: EPERM: operation not permitted` when enabling corepack on Windows?

Open the terminal as an administrator (e.g. by right-clicking the PowerShell or Windows Terminal icon and clicking "Run as Administrator"). Any time you run `corepack` directly in PowerShell you'll need to do so as an admin.
