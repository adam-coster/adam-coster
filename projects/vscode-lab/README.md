# Adam's VSCode Extension Laboratory

VSCode's extensions are super feature-rich. There are so _many_ features, it can be hard to figure out what's even possible. And harder yet to figure out exactly how things work and what the little nuances are.

To that end, this extension provides demo and helper features to help understand how VSCode extensions work.

## Features

### Workspace Symbol Icons

To see all Symbol Icons by `SymbolKind`, ensure this extension's view is visible and trigger the Workspace Symbol Search (`Ctrl+T`).

See the [related blog post](https://adamcoster.com/blog/vscode-workspace-symbol-provider-purpose) for more info.

## How Extensions Work

### Extension Manifest

To make sure an extension is properly set up to be publishable and discoverable, its `package.json` (a.k.a. "Extension Manifest") must adhere to the [manifest guidelines](https://code.visualstudio.com/api/references/extension-manifest).

#### Extension Icon

Your manifest should list an `"icon"`, which should be the path to a 256x256 PNG image. Make sure your `.vscodeignore` file doesn't exclude this path from your package!

In this project, that path is `"images/flask-vial-mono.png"`.
