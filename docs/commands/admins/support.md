---
title: 'Support'
sidebar_position: 8
---

## Command
:::caution Threads are still in Closed Beta!
The Threads Feature is still in Closed Beta.
Only Bot Developers in small servers (Maximum 5 Members, one **must** be a bot, you **must** be using Discord Canary or PTB) can test Threads for now.

This feature also needs a specific **Guild Feature** enabled in your Guild.
We know from the current Developer Docs, that server boosting will enable private threads.

The [latest information](https://canary.discord.com/channels/613425648685547541/859161948184379403/860371388296462338) about the needed Boost Levels is:
- Level 1: 3 day thread archive
- Level 2: 7 day thread archive and private threads

*Note that this is not officially documented and still subject to change*.
:::
```
/support enable <adjust_permissions> [support_channel]
```

## Description
Manages the Support feature.

## Permission
`ADMINISTRATOR`

## Required Guild Feature
`PRIVATE_THREADS`

## Arguments
| Name | Type | Description | Sample Data |
| ---- | ---- | ----------- | ----------- |
| adjust_permissions | BOOLEAN | If Permission Overwrites should be created, so Members can only write in their Threads. | true |
| channel | TEXT_CHANNEL | The Channel, where the Button should be placed. | #rules |

## Sample Response
#### Enable
![Image](https://cdn.herrtxbias.net/2021-06-30_00-27-05_dd53ba66-cab2-4ad3-8730-67bae5e14508.png)
![Image](https://cdn.herrtxbias.net/2021-06-30_00-27-55_28599bb9-e6b0-49d8-9dca-4e99ce2bd8a1.png)
