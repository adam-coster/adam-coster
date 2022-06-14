---
slug: joyful-coding-vscode-extensions-settings
title: Make coding a joy with these core VSCode extensions and settings
description: >
  You can only be as good as your tools. Here are the core VSCode extensions and settings that I use to make web development a blast.
editedAt: 2021-01-25T01:47:38.531Z
publishedAt: 2020-12-24T21:58:02.971Z
canonical:
tags:
  - vscode
  - programming
  - tools
  - webdev
  - javascript
  - typescript
  - node
crossPosts:
  - https://dev.to/adamcoster/make-coding-a-joy-with-these-core-vscode-extensions-and-settings-5b5b
  - https://www.bscotch.net/post/vscode-extensions-and-settings
  - https://adamcoster.medium.com/make-coding-a-joy-with-these-core-vscode-extensions-and-settings-d6dcda3fc346
---

Visual Studio Code (VSCode) has rapidly become the favored editor/IDE for a huge swath of web developers. This is in no small part due to its robust extensions marketplace and the fact that you can change how pretty much every little aspect works.

I've been using it for the past few years of webdev work with a myriad of technologies (Node.js, Typescript, vanilla JavaScript, Vue.js, Svelte.js, HTML/CSS, Docker, and on and on), and it's only let me down when I strayed too far from web technologies.

Below are the core extensions and settings I've settled on for general JavaScript/Node-centered web development, that have collectively made my work an absolute joy.

### VSCode Extensions

There are extensions for pretty much everything, and you'll definitely need to track down the best ones for your particular technology stack. For most JavaScript-based stacks, the following extensions form a great core:

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) is basically required. You'll still have to install ESLint locally (`npm i eslint`) or globally (`npm i -g eslint`) via npm.
- [npm](https://marketplace.visualstudio.com/items?itemName=eg2.vscode-npm-script) for validating your `package.json` file. It'll show you any obvious errors in VSCode when you have your `package.json` file open.
- [npm intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.npm-intellisense) for autocompleting import/require statements.
- [Path Intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense) for autocompleting things that look like paths, making it much easier to correctly type out file/folder paths.
- [Better Comments](https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments) for comment highlighting based on keywords.
- [Beautify](https://marketplace.visualstudio.com/items?itemName=HookyQR.beautify) for cleaning up janky-looking files of various types. Use with `Ctrl+Shift+P` &rarr; `beau` and choose the option you want.
- [change-case](https://marketplace.visualstudio.com/items?itemName=wmaurer.change-case) for toggling between all the classic casing strategies. Particularly great for converting snake-cased JavaScript into kebab-cased HTML. Use with `Ctrl+Shift+P` and then starting typing the case name you want to convert to.
- [Prettify JSON](https://marketplace.visualstudio.com/items?itemName=mohsen1.prettify-json) to make JSON readable. Use with `Ctrl+Shift+P` &rarr; `prett`.

### VSCode Settings

Code environment settings can be very personal, or can be dictated from above for matching across a team. In any event, here are the ones I've settled on over time (to edit yours in VSCode, `Ctrl+Shift+P` then `Preferences: Open Settings (JSON)` ):

```json
{
  "editor.fontFamily": "'Fira Code', Consolas, 'Courier New', monospace",
  "editor.fontLigatures": true,
  "js/ts.implicitProjectConfig.checkJs": true,
  "eslint.validate": ["javascript", "html", "vue", "typescript"],
  "git.autofetch": false,
  "terminal.integrated.shell.windows": "C:\\Program Files\\Git\\bin\\bash.exe",
  "terminal.integrated.shellArgs.windows": ["-l"]
}
```

If you want to use the [Fira Code font](https://github.com/tonsky/FiraCode), you'll need to first install it.

The `terminal...` fields are for setting Git Bash as the default terminal, if that's the sort of thing you're into.
