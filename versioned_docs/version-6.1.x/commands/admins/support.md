---
title: 'Support'
sidebar_position: 8
---

## Command
:::caution Guild Feature required
This feature needs a specific **Guild Feature** enabled in your Guild.
Your server will need to be on [Boost level 2 or higher to enable private Threads](https://miro.medium.com/max/4800/0*zUFKzh_8O6_llECQ), which are required for this feature.
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
![Image](https://cdn.utilbot.co/2021-06-30_00-27-05_dd53ba66-cab2-4ad3-8730-67bae5e14508.png)
![Image](https://cdn.utilbot.co/2021-06-30_00-27-55_28599bb9-e6b0-49d8-9dca-4e99ce2bd8a1.png)
