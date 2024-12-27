---
title: 'Events'
sidebar:
  order: 2
---

:::note
We are currently editing this page. More content will be added later.
:::

| Event Name             | Short Name            | Direction | Description |
| -----------------------| --------------------- | --------- | - |
| Identify               | `identify`            | Send      | Identifies the Client at the Gateway. |
| Bot Connection Success | `bot_connect_success` | Recieve   | Recieves a Bot, when he is successfully identified and connected. |
| Send Servers           | `send_servers`        | Send      | The bot (shard) reports some statistics, about how many and which guilds, how many users, or how many cached users it manages.   |
| Global Guild Count     | `GLOBAL_GUILD_COUNT`  | Recieve   | Global Stats, such as guild count, guild member count, cached guild member count (Only sent to bot instances). |
