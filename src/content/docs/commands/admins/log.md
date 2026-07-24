---
title: 'Log'
sidebar:
  order: 11
---

## Description

Manages the Log feature. Logging channels can each be configured with their own set of event types to log.

## Permission

`ADMINISTRATOR`

---

## Channels: List

```txt
/log channels list
```

Lists all channels currently configured for logging.

| Name | Type | Description | Sample Data |
| ---- | ---- | ----------- | ----------- |
|      |      |             | None        |

---

## Channels: Add

```txt
/log channels add <channel>
```

Adds a channel for logging. After adding it, select the event types to log for that channel.

| Name | Type | Description | Sample Data |
| ---- | ---- | ----------- | ----------- |
| channel | Channel (Text/News) | The channel to add | #logs |

---

## Channels: Edit

```txt
/log channels edit <channel>
```

Edits which event types are logged to an already configured channel.

| Name | Type | Description | Sample Data |
| ---- | ---- | ----------- | ----------- |
| channel | Channel (Text/News) | The channel to edit | #logs |

---

## Channels: Remove

```txt
/log channels remove <channel>
```

Removes a channel from logging.

| Name | Type | Description | Sample Data |
| ---- | ---- | ----------- | ----------- |
| channel | Channel (Text/News) | The channel to remove | #logs |

---

## Ignore: Add / Remove User

```txt
/log ignore add-user <user>
/log ignore remove-user <user>
```

Adds or removes a user from the ignore list, so their actions are not logged.

| Name | Type | Description | Sample Data |
| ---- | ---- | ----------- | ----------- |
| user | User | The user to ignore / stop ignoring | @HerrTxbias |

---

## Ignore: Add / Remove Channel

```txt
/log ignore add-channel <channel>
/log ignore remove-channel <channel>
```

Adds or removes a channel from the ignore list, so events in it are not logged.

| Name | Type | Description | Sample Data |
| ---- | ---- | ----------- | ----------- |
| channel | Channel | The channel to ignore / stop ignoring | #bot-spam |

---

## Log Event Types

When adding or editing a logging channel, you can select any combination of the following event types:

- Channel Changes
- Member Join / Leave
- Member Role Changes
- Message Logs
- Message Logs (Detailed)
- Misc
