---
title: 'User'
sidebar:
  order: 2
---

## User Permissions

| Permission                    | Value                     | Description |
| ----------------------------- | ------------------------- | ----------- |
| LOGIN                         | `1 << 0` `0x1`            | User can login |
| SEE_PROFILE                   | `1 << 1` `0x2`            | User can see his Profile |
| SEE_PERMISSIONS               | `1 << 2` `0x4`            | User can see his Permissions |
| SEE_SERVERS                   | `1 << 3` `0x8`            | User can see their Guilds |
| CONFIGURE_SERVERS             | `1 << 4` `0x10`           | User can access the Configuration for the Guilds |
| OTHER_PROFILES                | `1 << 19` `0x80000`       | User can see other profiles |
| ACTIVATE_SLASH_COMMANDS       | `1 << 20` `0x100000`      | User can activate slash commands (Discontinued) |
| DEVELOPER_MENU                | `1 << 39` `0x8000000000`  | User can access the developer menu |
| ADMINISTRATOR                 | `1 << 40` `0x10000000000` | User can bypass all permission checks |

## User Flags

| Flag              | Value             | Description |
| ----------------- | ----------------- | ----------- |
| TEAM_MEMBER       | `1 << 0` `0x1`    |  |
| PROJECT_LEAD      | `1 << 1` `0x2`    |  |
| DEVELOPER         | `1 << 2` `0x4`    |  |
| SUPPORTER         | `1 << 3` `0x8`    |  |
| DONATOR           | `1 << 4` `0x10`   |  |
| PARTNER           | `1 << 5` `0x20`   |  |
| EARLY_SUPPORTER   | `1 << 6` `0x40`   |  |
