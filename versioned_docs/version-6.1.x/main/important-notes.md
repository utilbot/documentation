---
sidebar_position: 3
---
# Important Notes
## The future of Music with the Bot
**+++ UPDATE +++** *25.08.2021 23:30*

As of now, we have disabled both YouTube and YouTube Music as source for the music. Only SoundCloud is available for now.
This may be the final way, how we will handle this situation. However, we may add more sources in the future.

**####################################**

Dear Discord music community,

unfortunately the team behind Groovy (a very popular music bot) has announced that they will shut down the bot on 08/30/2021.
The reason is simple, YouTube has recognized that the bot basically violates the Terms of Service and sent a cease and desist letter to Groovy.
We will now check to what extent we can continue to offer the music function of the bot and will take further steps if necessary.
We will keep you up to date here and announce our further steps as soon as possible.

Many greetings

## Permissions
All Permissions listed in the Specific Commands are explained more in the
[Discord Developer Documentation "Bitwise Permission Flags"](https://discord.com/developers/docs/topics/permissions#permissions-bitwise-permission-flags)

## Guild Features
Some Commands need specific Guild Features to work (e.g. the Support Threads feature, which uses Private Threads).
They are also explained more in the [Developer Documentation "Guild Features"](https://discord.com/developers/docs/resources/guild#guild-object-guild-features)

## Message Content becoming a privileged Intent
As some of you have already learned, [message content will become a privileged intent starting in April 2022](https://support-dev.discord.com/hc/en-us/articles/4404772028055). This means that verified bots (i.e. bots that are in more than 100 guilds) would only be able to transmit this data to the bot after verification by Discord Developer Support. The following attributes are counted as content: `content`, `embeds`, `attachments`, `components`. 

We are already working on replacing our message based commands with slash commands. Since our XP system, as well as the message filter system, must have mandatory access to the message content, we will need to enable this privileged intent. However, we will continue to store and process only the minimum amount of data that is essential for the operation of the bot. 
