---
title: 'Create Poll'
sidebar_position: 0
---

## Command
```
/poll create <title> <duration> <answers>
```

## Description
:::info
You may need to enable this feature via the Website.
:::

Creates a Poll.

## Permission
`MANAGE_MESSAGES`

## Arguments
| Name | Type | Description | Sample Data |
| ---- | ---- | ----------- | ----------- |
| question | String | The Poll Title, could be like a Question. | Title of the Poll |
| duration | String | Duration of the Poll. Example: "1h" or "1d" | 1h |
| answer | String | The possible Answers to the Poll. Separate with "\|". Max 80 Chars per Answer. Minimum 2 Answers. Maximum 25 Answers. Example: "Answer 1\|Answer 2\|Answer 3" | Good |

## Sample Response
![Image](https://cdn.utilbot.media/2022-02-05_22-23-21_f2ab64e6-3699-4ca8-b44a-c2e5ff54183c.png)
