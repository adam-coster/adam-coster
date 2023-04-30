GitHub Copilot CLI is rolling out into early access, but the setup instructions are for Linux/MacOS systems. Here's how to get it working on Windows.

*(There's a good chance this post will go out of date quickly!)*

## 🔥 Compatibility Notes

- Copilot CLI does not officially support Windows (as of writing), so expect problems.
- Copilot CLI works in Git Bash, but not in PowerShell or CMD (without a lot of extra work, anyway!).
- Using Git Bash directly results in errors -- you'll need to run it through Windows Terminal, Visual Studio Code's integrated terminal, or some other terminal.

## 📝 Getting it working

1. [Install NodeJS](https://nodejs.org/en) if you don't already have it.
2. [Install Git and Git Bash](https://git-scm.com/) if you haven't already (Git Bash comes with Git for Windows, but I can't remember if it might be optional so make sure you check that box).
3. Install [Windows Terminal](https://apps.microsoft.com/store/detail/windows-terminal-preview/9N8G5RFZ9XK3), [Visual Studio Code](https://code.visualstudio.com/), or some other terminal emulator.
4. ⚠️ *All following terminal commands assume you're using Git Bash in a compatible terminal emulator!*
5. Install Copilot CLI [from npm](https://www.npmjs.com/package/@githubnext/github-copilot-cli). The `npm` command comes with your NodeJS installation; in a terminal, run:
  ```
  npm install --global @githubnext/github-copilot-cli
  ```
6. Run `github-copilot-cli alias /usr/bin/bash >> ~/.bashrc`. This adds the `??` and related aliases to Git Bash by appending them to your `.bashrc` file.
7. ⚠️ As of writing, the alias-generation command writes paths incorrectly on Windows. Open up your `~/.bashrc` file, find the paths, and replace all of the `\` separators with `/`. You can edit it with VSCode (`code ~/.bashrc`) or your favorite text editor.
8. Either reboot your terminal, or run `source ~/.bashrc` (just this once) to get your aliases.
9. ✅ You're good to go! You should be able to use `??`, `git?`, and any other aliases you see in the Copilot CLI docs.
