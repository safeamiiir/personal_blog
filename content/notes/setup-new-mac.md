---
external: false
draft: false
title: Setup new Mac
description: Step by step setup a new Mac system
date: 2025-10-27
---

#### Steps

- Add keyboard layouts
  - British
  - U.S.
  - Persian - Standard
- Install apps
  1. Arc
     1. Make a new Personal profile
     2. Add export —From previous Laptop and import password
     3. Bring pin tabs
  2. Docker:
     1. Download and install `.dmg` docker desktop.
     2. It enables docker in the PATH by default.
  3. VSCode:
     1. Make sure you’re signed in to pick up theme and settings.
     2. Do: `command` + `p` then `> Shell Command: Install 'code' command in PATH`
  4. Clipboard Manager: `brew install maccy`
- _Brew_ package manager
  - https://brew.sh/
  - Add brew to the PATH
- _Fish_ terminal
  - `brew install fish`
  - Switch to fish following [this](https://askubuntu.com/a/26440).
  - Change `fish_config` —by writing it
- _GitHub_
  - Make a new GitHub SSH Key:
    - Generate a new ssh-key: `ssh-keygen -t ed25519 -C "your_email@example.com"`
    - Add that [here](https://github.com/settings/keys) in the GitHub: Settings > SSH and GPG Keys > New SSH key [green button]
    - Configure SSO
    - Test SSH connection `ssh -T git@github.com`
    - Also when asked for the fingerprint I’ve added that (the same as public key —without email)
  - Git
    - `git config --global [user.name](http://user.name/) "Your Name"`
    - `git config --global user.email "you@example.com"`
- Install Nodejs
  - Install Node Version Manager using [fnm](https://github.com/Schniz/fnm?tab=readme-ov-file), which is easily _Fish_ compatible
  - install `[from script install] fnm` > `fnm install <node-version>` > `corepack enable pnpm`
- Install Python
  - `brew install pyenv`
  - Then follow A, B, C, and [D](https://github.com/pyenv/pyenv/wiki#suggested-build-environment).
  - Finally make `python` work:
    ```bash
    pyenv install 3.10
    pyenv global 3.10
    ```
- Give Screen sharing required apps permission: `Settings` > `Privacy & Secrity` > `Screen & System Audio recording` > `+ <app name>` .
  - Microsoft Teams
  - Zoom
  - Browsers: Arc, …
