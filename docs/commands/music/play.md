---
title: 'Play'
sidebar_position: 0
---

## Command
```txt title="Slash Command"
/play <song> [append] [provider]
```
:::info Command Deprecated
Note: This Command still works on the Stable version of Utilbot! (See "Old Command").

But it is deprecated and will be replaced by the Slash Command with the next major release (already available on [Canary](../../main/bot_versions#utilbot-canary)).
:::
```txt title="Old Command"
p!play <search> / p!p <search>
```

## Description
Plays the given search from YouTube.

## Permission
`none`

## Arguments
| Name | Type | Description | Sample Data |
| ---- | ---- | ----------- | ----------- |
| song | String | Something so search on YouTube. | `rick astley - never gonna give you up` |
| append | Bool | Append the song to the queue. | `true` |
| provider | String | The Provider to use. | `youtube` |

## Sample Response
![Image](https://cdn.herrtxbias.net/2021-07-09_15-06-01_f203a4c9-9c67-472b-9efe-08271dbd2413.png)
