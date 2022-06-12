---
slug: setting-up-windows-10-for-web-development-including-docker-linux-and-node-js
title: Setting up Windows 10 for web development, including Docker, Linux, and Node.js
description: >
  If you run your websites on Linux servers, you probably want to use Linux
  for development, too. Here's how to get set up for that on Windows 10.
editedAt: 2021-01-25T01:53:57.201Z
publishedAt: 2020-12-24T22:10:11.454Z
canonical: https://www.bscotch.net/post/windows-10-for-web-docker-linux
tags:
  - webdev
  - docker
  - linux
  - node
  - tools
  - windows
crossPosts:
  - https://dev.to/adamcoster/setting-up-windows-10-for-web-development-including-docker-linux-and-node-js-3fjk
---

I recently had a catastrophic crash of my desktop, so it was time for a fresh Windows 10 install. Which also meant getting my development environment set back up. Modern webdev environments have a lot going on, especially when you throw Docker into the mix, and there are always a bunch of little useful Windows tweaks that are easy to forget. So I documented all the details for future reference, and to share.

## Programs to Install

If you'll be running Docker (see below), then a lot of your webdev needs can be met by various Docker images. Outside of those, the core programs I use for web development are:

- [Git](https://git-scm.com/downloads)
- [GitHub Desktop](https://desktop.github.com/) for easy cloning and repo management, if you use GitHub.
- [GitHub CLI](https://cli.github.com/) if you're into that sort of thing.
- [Visual Studio Code](https://code.visualstudio.com/)
  - Turn on "Settings Sync" and log in to make your dev setup more portable.
  - If you set up WSL2, you can launch VSCode in a Linux directory by running the `code .` command in Linux. The first time you do this, VSCode will offer recommended extensions that will make things run as smoothly as possible. Install those. The next time you do this, some other stuff will get installed. After that everything will work like magic.
  - Get [all the good extensions](/blog/joyful-coding-vscode-extensions-settings) to make coding a blast.
- [Node.js](https://nodejs.org/en/download/) (I suggest the latest LTS)
- [Discord](https://discord.com/download), assuming you're in some servers
- Browsers
  - [Chrome](https://www.google.com/chrome/) - I suggest logging into Chrome to sync your settings (choose which ones!)
  - [Firefox](https://www.mozilla.org/en-US/firefox/new/) - Still a popular enough browser you may want to support it
  - [Edge](https://www.microsoft.com/en-us/edge) - the version that ships with Windows 10 is probably out of date
  - [LastPass](https://lastpass.com/misc_download2.php) (for all browsers) - you may need this, or some alternative password manager, before logging into your browsers

## Setting up Linux and Docker (via WSL2)

You can get fantastic Docker + Linux support via "Windows Subsystem for Linux 2" (WSL2).

You can work through the [official Docker docs](https://docs.docker.com/docker-for-windows/wsl/) and the [official WSL2 installation docs](https://docs.microsoft.com/en-us/windows/wsl/install-win10), which will soon become more up to date than this post. Alternatively, I've tried to distill all the steps and make things easier to follow.

Here's how to get Linux + Docker running on Windows for web development:

1. [Get Linux running via WSL2](https://www.bscotch.net/post/linux-on-windows).
1. Download and install [Docker Desktop](https://www.docker.com/products/docker-desktop)
1. Once Docker is running, get into its settings (via the tray icon, running from the desktop shortcut, or from the start menu), then go to `Resources` &rarr; `WSL Integration`, and turn on integration with your installed Linux distro.
1. Log into your new Linux distro via `Start` &rarr; `wsl`, then:

- Install [Node.js for your distro](https://nodejs.org/en/download/package-manager/)
- [Add an SSH key for GitHub](https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent) (or whatever you need one for). You could use other auth approaches, but I generally find SSH to be easiest on Linux. You may want to auto-run your SSH agent [when you log in](https://stackoverflow.com/questions/18880024/start-ssh-agent-on-login).

Whew, now you're all set up!

To run your distro, you can directly go to `Start` &rarr; `wsl`, or you can run the `wsl` command inside PowerShell or your favorite terminal.

**Important:** if your Docker containers will be accessing files, make sure those files are in the Linux filesystem instead of the mounted Windows one (otherwise performance is terrible). Once you've logged into your Linux distro, you can run `cd ~` to get to your home folder inside the Linux filesystem.

When Docker is running on Windows, you can run the `docker` and `docker-compose` commands from within your Linux distro.
