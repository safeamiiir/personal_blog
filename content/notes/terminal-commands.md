---
external: false
draft: false
title: ✂️ Daily terminal commands
description: List of useful terminal commands I daily use
# TODO: Automate date update when you modify
date: 2026-08-21
---

A quick note to myself: a list of useful (or easily forgettable) terminal commands.

### Frequent Commands

1. Force free up a port (kill the program)
    ```
    sudo lsof -i :<PORT_NUMBER>
    # FIND THE PID FROM THE LIST THEN:
    sudo kill -9 <PID>
    ```
