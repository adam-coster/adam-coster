GitHub Copilot CLI is rolling out into early access, but the setup instructions are for Linux/MacOS systems. Here's how to get it working on Windows with **Git Bash**.

*(There's a good chance this post will go out of date quickly!)*

1. [Install NodeJS](https://nodejs.org/en) if you don't already have it.
2. [Install Git and Git Bash](https://git-scm.com/) if you haven't already, and make sure you also install Git Bash if that's optional (it comes with Git for Windows, but I can't remember if it's optional...).
3. 💡 *All following terminal commands assume you're using Git Bash!*
4. Install Copilot CLI [from npm](https://www.npmjs.com/package/@githubnext/github-copilot-cli)
  - The `npm` command comes with your NodeJS installation. In a terminal, run `npm install --global @githubnext/github-copilot-cli`
5. Run `github-copilot-cli alias /usr/bin/bash >> ~/.bashrc`. This adds the `??` and related aliases to Git Bash by appending them to your `.bashrc` file.
6. ⚠️ As of writing, the alias-generation command writes paths incorrectly on Windows. Open up your `.bashrc` file, find the paths, and replace all of the `\` separators with `/`. You can edit it with VSCode (`code ~/.bashrc`) or your favorite text editor.
7. Either reboot your terminal, or run `source ~/.bashrc` (just this once) to get your aliases, and you're good to go!
