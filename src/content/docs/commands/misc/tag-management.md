---
title: 'Tag Management'
sidebar:
  order: 2
---

## Description

Manages guild tags, which can be called with [`/tag`](/commands/misc/tag). Creating, deleting, and aliasing tags requires the `MANAGE_MESSAGES` permission; listing tags and aliases is available to everyone.

## Permission

`MANAGE_MESSAGES` (for `create`, `delete`, `alias-create`, `alias-delete`) / `none` (for `list`, `alias-list`)

---

## Create

```txt
/tag-management create <name> <content>
```

| Name | Type | Description | Sample Data |
| ---- | ---- | ----------- | ----------- |
| name | String | The name of the tag. Max 100 characters | rules |
| content | String | The content of the tag. Max 2000 characters | Please read #rules before chatting! |

---

## Delete

```txt
/tag-management delete <name>
```

| Name | Type | Description | Sample Data |
| ---- | ---- | ----------- | ----------- |
| name | String | The name of the tag to delete. Supports autocomplete | rules |

---

## List

```txt
/tag-management list
```

Lists all tags of the guild.

| Name | Type | Description | Sample Data |
| ---- | ---- | ----------- | ----------- |
|      |      |             | None        |

---

## Alias Create

```txt
/tag-management alias-create <tag> <alias>
```

Creates an alias for an existing tag. Aliases cannot shadow an existing tag name.

| Name | Type | Description | Sample Data |
| ---- | ---- | ----------- | ----------- |
| tag | String | The name of the tag to alias. Supports autocomplete | rules |
| alias | String | The alias name. Max 100 characters | regeln |

---

## Alias Delete

```txt
/tag-management alias-delete <tag> <alias>
```

| Name | Type | Description | Sample Data |
| ---- | ---- | ----------- | ----------- |
| tag | String | The name of the tag. Supports autocomplete | rules |
| alias | String | The alias to delete. Supports autocomplete | regeln |

---

## Alias List

```txt
/tag-management alias-list <tag>
```

Lists all aliases of a tag.

| Name | Type | Description | Sample Data |
| ---- | ---- | ----------- | ----------- |
| tag | String | The name of the tag. Supports autocomplete | rules |
