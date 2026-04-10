---
title: Vanity URL Adjustment
date: 2026-04-10
authors:
  - herrtxbias
  - team
tags:
  - Announcement
  - Breaking Change
---

To make our link shortener (utilbot.link) more secure, changes to the vanity URLs of the guild leaderboards are necessary.

Specifically, this means the following:

- Vanity URLs now have the prefix `/v` in the path; a complete vanity URL will look like this: `https://utilbot.link/v/utilbot`
- Existing vanity URLs will remain in place for now, but do not rely on them as they may be removed on short notice

:::note
This change will not be visible on the bot’s production-stage website (https://utilbot.co)!
:::
