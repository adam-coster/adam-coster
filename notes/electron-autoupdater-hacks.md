Electron app automatic updates without an update server

---

One of the great features of Electron is its built-in support for [automatic app updates](https://www.electronjs.org/docs/latest/tutorial/updates). Even better, Electron provides a free service you can use to allow hosting your automatic updates via GitHub Releases.

However, in practice that service is difficult to use because it requires that your builds be code-signed.

To get around that requirement, or just because you want to, you can set up one of various suggested update servers.

All of those options are pretty sucky, actually. But it turns out that you can use statically-hosted files to manage your automatic updates, removing the need for any server logic whatsoever! You can even do this with GitHub Releases, without needing to use Electron's service at all!

It took some digging for me to figure it out because there is very little documentation on how it all works. But, for windows, all you need is:

- A `baseURL` where your files can be made available to download (for GitHub Releases, that URL would be `https://github.com/${owner}/${repo}/releases/latest/download`)
- A `RELEASES` file stored there with info about your `.nupkg` file
- A `.nupkg` file containing the update

Notably, the `RELEASES` and `${update}.nupkg` files are created for you when you use Squirrel to create your builds.

---

Sample Electron Forge config file for Windows, using Squirrel:

```js
/** @file forge.config.js */

/** @type {import('@electron-forge/shared-types').ForgeConfigMaker} */
const squirrelMaker = {
  name: '@electron-forge/maker-squirrel',
  /** @type {import('@electron-forge/maker-squirrel').MakerSquirrelConfig } */
  config: {
    name: 'Stitch',
    title: 'Stitch',
    exe: 'Stitch.exe',
    description: 'A tool for managing GameMaker and GameMaker projects.',
    authors: 'Butterscotch Shenanigans',
    setupIcon: 'assets/stitch-logo.ico',
    setupExe: 'StitchSetup.exe',
  },
  /** @type {import('electron-packager').OfficialPlatform[]} */
  platforms: ['win32'],
};

/** @type {import('@electron-forge/shared-types').ForgeConfig} */
module.exports = {
  packagerConfig: {
    name: 'Stitch',
    icon: 'assets/stitch-logo.ico',
    win32metadata: {
      CompanyName: 'Butterscotch Shenanigans',
      ProductName: 'Stitch',
    },
  },
  makers: [squirrelMaker],
};
```

---

Running `npx electron-forge make` with that config results in the files:

- `out/make/squirrel.windows/x64/RELEASES`
- `out/make/squirrel.windows/x64/Stitch-${{env.RELEASE_VERSION}}-full.nupkg`
- `out/make/squirrel.windows/x64/StitchSetup.exe`

---

Sample base URL (from GitHub Releases)

`https://github.com/bscotch/stitch/releases/latest/download`

```ts
/** @file ambient.d.ts */
declare module 'electron-squirrel-startup' {
  const isStartup: boolean;
  export default isStartup;
}
```

```js
import { app } from 'electron';
import isInstalling from 'electron-squirrel-startup';

// as early as possible
if (isInstalling) {
  app.quit();
}
```

```js
import { autoUpdater } from 'electron';
autoUpdater.setFeedURL({
  url: updateFeed,
  headers: {
    'Cache-Control': 'no-cache',
  },
});
// On some interval...
autoUpdater.checkForUpdates();
```

---

Sample script to create the release, using the GitHub CLI:

`gh release create --title "Stitch Desktop v${{env.RELEASE_VERSION}}" stitch-desktop@${{env.RELEASE_VERSION}} packages/desktop/bundle/out/make/squirrel.windows/x64/RELEASES packages/desktop/bundle/out/make/squirrel.windows/x64/Stitch-${{env.RELEASE_VERSION}}-full.nupkg#Nupkg packages/desktop/bundle/out/make/squirrel.windows/x64/StitchSetup.exe#Installer`

---

Sample `RELEASES` content:

`E1D823CD33A0D8C91898A9080E4F6E24FA6E4109 Stitch-0.11.24-full.nupkg 101862189`