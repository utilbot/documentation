---
sidebar_position: 2
---

# User

## User Permissions

| Permission                    | Value                     | Description |
| ----------------------------- | ------------------------- | ----------- |
| LOGIN                         | `1 << 0` `0x1`            | User can login |
| SEE_PROFILE                   | `1 << 1` `0x2`            | User can see his Profile |
| SEE_PERMISSIONS               | `1 << 2` `0x4`            | User can see his Permissions |
| SEE_SERVERS                   | `1 << 3` `0x8`            | User can see their Guilds |
| CONFIGURE_SERVERS             | `1 << 4` `0x10`           | User can access the Configuration for the Guilds |
| SEE_GLOBAL_BANS               | `1 << 5` `0x20`           | User can see his global bans |
| APPEAL_GLOBAL_BAN             | `1 << 6` `0x40`           | User can appeal his global bans |
| OPEN_APPEALS                  | `1 << 13` `0x2000`        | User can see any open appeals |
| EDIT_GLOBAL_BANS              | `1 << 14` `0x4000`        | User can edit other global bans |
| VERIFY_UNVERIFY_GLOBAL_BANS   | `1 << 15` `0x8000`        | User can verify / de-verify a global ban |
| LOCK_UNLOCK_GLOBAL_BANS       | `1 << 16` `0x10000`       | User can lock / unlock a global ban |
| DELETE_GLOBAL_BANS            | `1 << 17` `0x20000`       | User can delete a global ban |
| ACCEPT_DENY_APPEAL            | `1 << 18` `0x40000`       | User can accept and deny global ban appeals |
| OTHER_PROFILES                | `1 << 19` `0x80000`       | User can see other profiles |
| ACTIVATE_SLASH_COMMANDS       | `1 << 20` `0x100000`      | User can activate slash commands (Discontinued) |
| SEE_OTHER_GLOBAL_BANS         | `1 << 21` `0x200000`      | User can see other global bans |
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
