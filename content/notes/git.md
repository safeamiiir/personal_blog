---
external: false
draft: false
title: 🔀 Git
description: List of Git related stuff I need to remember.
# TODO: Automate date update when you modify
date: 2025-10-12
---

A quick note to myself: a list of useful (or easily forgettable) Git commands.

### Frequent Commands

1. Undo latest commit
   - `git reset --soft HEAD~1`

2. How to protect a branch? [[Ref](https://github.com/orgs/community/discussions/54969#discussioncomment-6361231)]
   - Enable "do not allow bypassing the above settings"
   - Enable "required status checks" and making sure there's at least 1 required status check
   - Enable "allow specified
   - actors to bypass required pull requests" and specifying the admins
3. Rename a local branch [[Ref](https://www.digitalocean.com/community/cheatsheets/how-to-use-git-a-reference-guide)]
   - `git branch -m current-branch-name new-branch-name`

### General

Code Review guide:

- [Brief, but legit](https://github.blog/developer-skills/github/how-to-write-the-perfect-pull-request/) which was [Inspired by](https://github.com/thoughtbot/guides/tree/main/code-review)

### My git weak points

Tags:

- If you remove tags on GitHub, the ones on your local stays! regardless of what `git fetch ...` you do you still have to run:

  `git tag -l | xargs git tag -d`

  Just `git fetch --prune --tags` didn't do it.

### GitHub Markdown

- Toggle
  ```
  <details>
  <summary>SUMMARY</summary>
  CONTENT
  </details>
  ```
- Note, Tip, Important, ...

  ```
  > [!NOTE]
  > Useful information that users should know, even when skimming content.

  > ![TIP]
  > Helpful advice for doing things better or more easily.

  > ![IMPORTANT]
  > Key information users need to know to achieve their goal.

  > ![WARNING]
  > Urgent info that needs immediate user attention to avoid problems.

  > ![CAUTION]
  > Advises about risks or negative outcomes of certain actions.
  ```
