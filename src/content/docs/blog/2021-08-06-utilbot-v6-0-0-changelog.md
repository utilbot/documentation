---
title: Utilbot - v6.0.0
date: 2021-08-06
authors:
  - team
tags:
  - Changelog
---

With over 18.000 Additions and only 800 removals the new Version is now released. It has been a long time since the new Features were only available on Canary because we were waiting for [discord.js](https://discord.js.org) to release v13. So heres a short Summary of all the Changes:

### New Features

#### Globals
- **Interactions**: Interaction Support (Slash Commands, Message Components: Buttons and Select Menus)

#### General
- **Help**: Replaced the Command with a Slash Command and refactored the Help Pages. The old Help Command will still be available, but has a Note on it.
- **Info**: Replaced the Command with a Slash Command.
- **Whois**: Replaced the Command with a Slash Command.
- **Stats**: Replaced the Command with a Slash Command.

#### Music
- **Volume**: Removed the Command and made a new one for more Filters.
- **Play**: Replaced the Command with a Slash Command.
- **Queue**: Replaced the Command with a Slash Command.
- **Resume**: Replaced the Command with a Slash Command.
- **Pause**: Replaced the Command with a Slash Command.
- **Filter**: New Command to manage Filters, such as the Volume of the player.
- **Disconnect**: Replaced the Command with a Slash Command.

#### Moderators
- **Clear**: Replaced the Command with a Slash Command.
- **ClearThreads**: Added the new Clear Threads Slash Command.
- **Warn**: Replaced the Command with a Slash Command.
- **Kick**: Replaced the Command with a Slash Command.
- **Ban**: Replaced the Command with a Slash Command.

#### Admins
- **ChangePrefix**: Replaced the Command with a Slash Command.
- **ChangeLanguage**: Removed the Language selection and migrated every guild to english.
- **Warns**: Removed the old Message-Based Commands and implemented one new Slash Commands.
- **Rules**: Removed the old Message-Based Commands and implemented one new Slash Commands.
- **Teamlist**: Removed the old Message-Based Commands and implemented one new Slash Commands.
- **Log**: Removed the old Message-Based Commands and implemented one new Slash Commands.
- **Support**: Added the new Support Threads feature.

### Bug Fixes

- We have fixed many Bugs... It would be too many, to mention here...
