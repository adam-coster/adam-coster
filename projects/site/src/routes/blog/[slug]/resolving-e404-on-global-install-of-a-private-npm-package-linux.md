---
slug: resolving-e404-on-global-install-of-a-private-npm-package-linux
title: Resolving E404 on global install of a private npm package (Linux)
description: >
  If you're getting E404 "Not Found" when trying to install a private npm
  package, make sure you're logged into the right scope (root or user).
publishedAt: 2021-03-28T17:46:28.645Z
tags:
  - javascript
  - permissions
  - security
  - authentication
  - npm
  - node
  - webdev
  - linux
crossPosts:
  - https://dev.to/adamcoster/resolving-e404-on-global-install-of-a-private-npm-package-linux-55ac
---

I was logged into npm (via `npm login`) and went to do a global install of one of my private packages (`npm i -g`), only to be confronted with an `E404` NOT FOUND error.

After some initial confusion, I realized it was because my setup requires using `sudo` for global npm installs: `sudo` makes you take on the role of the root user, and so it doesn't have access to your regular user's npm credentials!

There are two easy solutions to this:

## Log into npm with `sudo`

The easiest thing to do is to _also_ log into your npm account with `root`, so that when you use `sudo` the command will have access to your npm credentials.

```bash
sudo npm login
```

## Stop having to use `sudo` for global installs

It's probably better to not have to use `sudo` at all for your global installs.

To address that, you need npm to use a directory that your regular user has permissions to access. Fortunately, npm makes this easy to do. A handful of people have put together a [super simple guide for this](https://github.com/sindresorhus/guides/blob/main/npm-global-without-sudo.md). In short:

First create a new directory with your regular user and tell npm to use it:

```bash
mkdir "${HOME}/.npm-packages"
npm config set prefix "${HOME}/.npm-packages"
```

Then give npm a little more help finding binaries and such by updating your `.bashrc` file:

```bash
# @file ~/.bashrc
NPM_PACKAGES="${HOME}/.npm-packages"

export PATH="$PATH:$NPM_PACKAGES/bin"

# Preserve MANPATH if you already defined it somewhere in your config.
# Otherwise, fall back to `manpath` so we can inherit from `/etc/manpath`.
export MANPATH="${MANPATH-$(manpath)}:$NPM_PACKAGES/share/man"
```

[The guide](https://github.com/sindresorhus/guides/blob/main/npm-global-without-sudo.md) has more details to help out with other use cases.
