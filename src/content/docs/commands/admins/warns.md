---
title: 'Warns'
sidebar:
  order: 1
---

## Enable / Disable Command
```
/warns <enable/disable>
```

### Description
Activates / Deactivates the Warn function.

### Permission
`ADMINISTRATOR`

### Arguments
| Name | Type | Description | Sample Data |
| ---- | ---- | ----------- | ----------- |
|  |  |  | None |

### Sample Response
#### Enable
![Image](https://cdn.utilbot.co/2021-06-01_1ea7485d-2c8d-4276-8bab-deee875ebe1e.png)

#### Disable
![Image](https://cdn.utilbot.co/2021-06-01_2456e003-8604-4b32-bcf5-461beb46d981.png)

---
## Limits Command
```
/warns limits <list/edit>
```

### Description
Lists or manages the warn limits.

### Permission
`ADMINISTRATOR`

### Arguments
| Name | Type | Description | Sample Data |
| ---- | ---- | ----------- | ----------- |
| limit* | STRING | The limit to change | Channel Hopping |
| amount* | INTEGER | The new Limit. Enter "0" to deactivate this limit | 5 |
`*: This is only available on the 'edit' subcommand.`

### Sample Response
#### List
![Image](https://cdn.utilbot.co/2021-06-01_21571cbe-ac60-42c9-bcb6-be5d4ab46cce.png)

#### Edit
![Image](https://cdn.utilbot.co/2021-06-01_321be69c-2023-4a23-8152-29aef5eb7c62.png)

---
## Maximum Command
```
/warns maximum [amount]
```

### Description
Shows or manages the amount of maximum warns

### Permission
`ADMINISTRATOR`

### Arguments
| Name | Type | Description | Sample Data |
| ---- | ---- | ----------- | ----------- |
| amount | INTEGER | Amount of maximum warns until a user gets kicked. | 5 |

### Sample Response
#### Show
![Image](https://cdn.utilbot.co/2021-06-01_644708bc-12f3-4215-9756-758f41eab026.png)

#### Edit
![Image](https://cdn.utilbot.co/2021-06-01_1e34d10d-2448-43a5-9050-283c49f4bfe8.png)