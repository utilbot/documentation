---
sidebar_position: 3
---
# Important Notes
## Permissions
All Permissions listed in the Specific Commands are explained more in the
[Discord Developer Documentation "Bitwise Permission Flags"](https://discord.com/developers/docs/topics/permissions#permissions-bitwise-permission-flags)

## Guild Features
Some Commands need specific Guild Features to work (e.g. the Support Threads feature, which uses Private Threads).
They are also explained more in the [Developer Documentation "Guild Features"](https://discord.com/developers/docs/resources/guild#guild-object-guild-features)

## Message Content becoming a privileged Intent
As some of you have already learned, [message content will become a privileged intent starting in April 2022](https://support-dev.discord.com/hc/en-us/articles/4404772028055). This means that verified bots (i.e. bots that are in more than 100 guilds) would only be able to transmit this data to the bot after verification by Discord Developer Support. The following attributes are counted as content: `content`, `embeds`, `attachments`, `components`. 

We are already working on replacing our message based commands with slash commands. Since our XP system, as well as the message filter system, must have mandatory access to the message content, we will need to enable this privileged intent. However, we will continue to store and process only the minimum amount of data that is essential for the operation of the bot. 
