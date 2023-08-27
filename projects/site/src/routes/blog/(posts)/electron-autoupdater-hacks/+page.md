One of the great features of Electron is its built-in support for [automatic app updates](https://www.electronjs.org/docs/latest/tutorial/updates). Unfortunately, the Electron docs say that you need an update server to use this feature. Electron provides a service for this, but it's only available for code-signed apps. The implication is that you have two options:

1. Codesign your app and use Electron's update service with GitHub Releases; or
2. Host your own update server.

*Blech.*

But! It turns out that there is a secret 3rd option: you can use statically-hosted files to manage your automatic updates!

This removes the need for any server logic whatsoever. You can still use GitHub Releases, just without needing to use Electron's service as a middle-man. Or you can use any other static host. No code-signing, no server, just boring old static files.

The rest of this post assumes that you're already making Windows builds for your app using [Electron Forge](https://www.electronforge.io) and Squirrel. If you're building for different targets or using a different maker, I'm not sure how transferrable these instructions are.

## Getting the right files

The following is a stripped-down sample of an Electron Forge config file for Windows, using Squirrel as the maker, for an application called "MyApp":


```js
/** @file forge.config.js */

/** @type {import('@electron-forge/shared-types').ForgeConfigMaker} */
const squirrelMaker = {
  name: '@electron-forge/maker-squirrel',
  /** @type {import('@electron-forge/maker-squirrel').MakerSquirrelConfig } */
  config: {
    exe: 'MyApp.exe',
    setupExe: 'MyAppSetup.exe',
  },
  /** @type {import('electron-packager').OfficialPlatform[]} */
  platforms: ['win32'],
};

/** @type {import('@electron-forge/shared-types').ForgeConfig} */
module.exports = {
  packagerConfig: {
    name: 'MyApp',
  },
  makers: [squirrelMaker],
};
```

Running `npx electron-forge make` with that config results in a bunch of files, including these ones:

- `out/make/squirrel.windows/x64/RELEASES`
- `out/make/squirrel.windows/x64/MyApp-${VERSION}-full.nupkg`
- `out/make/squirrel.windows/x64/MyAppSetup.exe`

Those files are all you need for a static-file auto-update service!

## Hosting the update files

When you use the built-in [`autoUpdater` from Electron](https://www.electronjs.org/docs/latest/api/auto-updater), you provide a base URL where it will go look for those files. In particular, it looks for that `RELEASES` file and uses that to decide whether or not an update is a available and what the name of the update file is.

If your `baseUrl` is `https://example.com/updates`, you'd upload those output files to `https://example.com/updates/RELEASES`, `https://example.com/updates/MyApp-${VERSION}-full.nupkg`, etc. As long as the file names match what's in that `RELEASES` file, you can then get automatic updates working with something like the following in your app:

```js
import { autoUpdater } from 'electron';

autoUpdater.setFeedURL({
  url: baseUrl, // e.g. "https://example.com/updates"
  headers: {
    'Cache-Control': 'no-cache', // Could add more subtlety here...
  },
});

// You probably want fancier logic than this, but this would get the job done:
autoUpdater.checkForUpdates(); // Check on startup
setInterval(() => {
  autoUpdater.checkForUpdates();
}, 1000 * 60 * 60); // Check for updates every hour
```

## Hosting with GitHub Releases

You can use GitHub Releases as your static update host, just by uploading those output files to a release. Here's a sample [GitHub CLI](https://cli.github.com/) command that would do that:

```sh
# Assuming environment variable RELEASE_VERSION (the semver release version)
gh release create \
  --title "My Application v$RELEASE_VERSION" \
  my-app@$RELEASE_VERSION \
  "out/make/squirrel.windows/x64/RELEASES" \
  "out/make/squirrel.windows/x64/MyApp-$RELEASE_VERSION-full.nupkg#Nupkg" \
  "out/make/squirrel.windows/x64/MyAppSetup.exe#Installer"
```

Then your `baseUrl` would be `https://github.com/$OWNER/$REPO/releases/latest/download`.

> **📝 Note:** If you use GitHub releases, you'll need *every release* to be for the same application, since GitHub doesn't provide any way to use a URL to filter releases by name/tag/etc.