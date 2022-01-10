---
sidebar_position: 1
---

# Guild

## Guild Features

| Feature                   | Value                         | Description |
| ------------------------- | ----------------------------- | ----------- |
| MUSIC                     | `1 << 0` `0x1` `1`            | Guild can use the Music Commands |
| POLLS                     | `1 << 1` `0x2` `2`            | Guild can create Polls |
| RANKS_LEADERBOARDS        | `1 << 2` `0x4` `4`            | Guild Users can earn XP and get different Levels |
| GIVEAWAYS                 | `1 << 3` `0x8` `8`            | Guild can create Giveaways |
| PRIVATE_CHANNEL_CREATOR   | `1 << 4` `0x10` `16`          | Guild can use the Private Channel Creator |
| RULE_EMBEDS               | `1 << 5` `0x20` `32`          | Guild can use Embeds with the Rule Feature |
| ROLE_REACT                | `1 << 6` `0x40` `64`          | Guild can add specific buttons, to get specific Roles |
| MESSAGE_TIMER             | `1 << 7` `0x80` `128`         | Guild can use automated Messages |
| WELCOME_MEMBERS           | `1 << 8` `0x100` `256`        | Guild can activate the Welcome Feature for Members |
| MUSIC_QUIZ                | `1 << 10` `0x400` `1024`      | Guild can use the Music Quiz (Discontinued) |
| CUSTOM_COMMANDS           | `1 << 11` `0x800` `2048`      | Guild can create Custom Message-Based Commands (and soon slash commands) |
| MESSAGE_FILTER            | `1 << 12` `0x1000` `4096`     | Guild can use the automated Message Filter |
| SOURCE_YOUTUBE            | `1 << 14` `0x4000` `16384`    | Guild can use YouTube as Music Source |
