---
sidebar_position: 3
---

# Utilbot Migration to v6
We've been looking forward to the release of the new version for a very long time, as several days of development have already gone into it. Now that Discord has published threads, the last milestone needed for the release has been reached, so we can finally proceed.

During the release process, the bot is first completely stopped, all data is updated, and then turned back on. This process is automatic, but accompanied so that we can intervene in case of problems. Therefore, there may be a short inaccessibility of the bot. The song queue of the bot will also be emptied during this process.

To make the process as understandable as possible, here is a brief summary of the process.

## Commands
All commands marked as "deprecated" in the documentation will no longer work after the release.
A response follows, with instructions to use the associated slash command if available. The only exception to this is the !help command, which will still work, but also contains a note about the new slash command.
On the Canary version of the bot, the commands will be removed completely, so that there will be no answer there anymore.

One month after release we will also remove the hints for the new slash commands on the stable version of the bot.

As already noted in the command overview, the option to change the language will be removed completely. The language of the bot is English by default.

In the further development of the bot we will again replace message based commands with slash commands. The migration process here follows the same scheme. First the customization will be done on the canary version, after some tests it will be transferred to the stable version with reference to the new slash command and then one month after release the old command will be removed completely.

## Features
All features have automatic migration built in. If a feature is activated with the old message-based command, it will be updated to the new record created by a slash command. Also, the addition of e.g. buttons to messages (e.g. for rule confirmation) takes place automatically.

## Web page
Our website is also updated to the latest version. We have already implemented some of the new things due to the new construction of the site, but some things were technically not yet compatible with the old version. Therefore the website will also be unavailable for a short time.

## API
The API is already up to date and fully compatible. The update process has already happened there in the background. There will be no downtime here.

## Gateway
The gateway is also up to date and fully compatible with all versions of the bot. There will also be no downtime here.
