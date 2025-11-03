---
external: false
draft: false
title: 🍎 Mac Setup — My Personal Setup Checklist
description: My personal checklist for setting up a new Mac from scratch.
date: 2025-10-27
---

All required setup for me when I start with a new Mac OS installed machine.

### System settings

- Add keyboard layouts `British`, `U.S.`, `Persian - Standard`
- Change `Keyboard shortcuts` setting: Check the `Input sources` box to use `control` + `Space` to `Select the previous input source`
- Increase `Mouse` speed to one dot before the Fastest
- Modify `Desktop and Dock`
  - Remove App icons in the Dock, and keep the essentials
  - Put `Magnification` slider after the middle
  - Turn off `Show suggested and recent apps in Dock`
- Optional: I decided not to install a new third part app to handle icons in the bar, but instead I make it emptier by `Command` + `Drag out` the item —which removes it

### Applications

- Install apps
  1. _Arc_ Browser
     1. Make a new Personal profile
     2. Add export —From previous Laptop and import password
     3. Bring favourite tabs
     4. Bring URL bar on top by: `Shift` + `Command` + `D`
  2. _Docker_
     1. Download and install `.dmg` docker desktop
     2. It enables docker in the PATH by default
  3. _VSCode code editor_
     1. Make sure you’re signed in to your **GitHub** account pick up theme and settings by clicking `Setting sync is on`
     2. Do: `command` + `p` then `> Shell Command: Install 'code' command in PATH`
  4. Clipboard Manager: `brew install maccy`
- _Brew_ package manager
  - https://brew.sh/
  - Add brew to the PATH
- `brew install --cask scroll-reverser`
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
    - `git config --global user.name "Your Name"`
    - `git config --global user.email "you@example.com"`
- Install Nodejs
  - Install Node Version Manager using [fnm](https://github.com/Schniz/fnm?tab=readme-ov-file), which is easily _Fish_ compatible
  - install `[from script install] fnm` > `fnm install <node-version>` > `corepack enable pnpm`
- Install Python
  - _Pyenv_
    - `brew install pyenv`
    - Then follow A, [B](https://github.com/pyenv/pyenv?tab=readme-ov-file#b-set-up-your-shell-environment-for-pyenv), C, and [D](https://github.com/pyenv/pyenv/wiki#suggested-build-environment)
    - Finally make `python` work:

      ```bash
      # A: install Pyenv
      brew update
      brew install pyenv

      # B.1: Set up your shell environment for Pyenv
      set -Ux PYENV_ROOT $HOME/.pyenv
      test -d $PYENV_ROOT/bin; and fish_add_path $PYENV_ROOT/bin
      # B.3
      echo -e '\n# Pyenv \npyenv init - fish | source' >> ~/.config/fish/config.fish

      # C: Restart shell
      exec "$SHELL"

      # D: Choose, install, and set a python version
      pyenv install 3.10
      pyenv global 3.10
      ```

  - _pipx: `brew install pipx` (recommended way to install poetry)_
  - _poetry: `pipx install poetry`_

### Application permissions

- Give Screen sharing required apps permission: `Settings` > `Privacy & Secrity` > `Screen & System Audio recording` > `+ <app name>`
  - Microsoft Teams
  - Zoom
  - Browsers: Arc, …

### Persian related

- Persian Fonts
  - Install the Font on Mac
    - Download font [Vazirmatn](https://github.com/rastikerdar/vazirmatn)
    - Unzip the files
    - Go to `.ttf` files and open them > press _install_
    - Check `Font Book` they + variants (Regular, Medium, …) should be available
  - Install the Font on Browser using [Font Ara](https://github.com/mimalef70/fontara) extension
- Persian Widgets
  - Install [Roozegar](https://www.notion.so/Mac-Setup-My-Personal-Setup-Checklist-2966b0d6031980ee8d73ff78670d6a68?pvs=21) Calendar from App store
