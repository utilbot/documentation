---
title: 'Ban'
sidebar_position: 3
---

## Command
```txt
/mod ban <user> <global> [message_delete_days] [reason]
```

## Description
Bans a Member.

## Permission
`BAN_MEMBERS`

## Arguments
| Name | Type | Description | Sample Data |
| ---- | ---- | ----------- | ----------- |
| user | User | A user (ID should also work) | @HerrTxbias |
| global* | Boolean | If this should be registered as a global ban | true |
| message_delete_days* | Integer | Delete messages of the user for the past x days | 4 |
| reason* ** | String | The ban reason | Writing rude things |
`*: This argument is only available with the Slash Command`

`**: This argument is required, when global is set to true`

## Sample Response
![Image](https://cdn.herrtxbias.net/2021-05-28_b0cb29be-4a31-47f1-a020-340947540baf.png)
