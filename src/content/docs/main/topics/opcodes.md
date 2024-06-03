---
title: 'Opcodes'
sidebar:
  order: 1
---

Everything that will be sent through the Gateway has it's own Opcode, so everyone knows what is going to be sent and recieved.

## Gateway Opcodes
| CODE                        | NAME          | SENT BY | DESCRIPTION |
| --------------------------- | ------------- | ------- | ----------- |
| [-1](#error)                | Error         | Gateway | Something went completely wrong. Just reconnect. |
| [0](#event-from-the-gatway) | Event         | Gateway | An Event sent by the Gateway. |
| [1](#event-from-the-client) | Event         | Client  | An Event sent by the Client. |
| [5](#hello)                 | Hello         | Gateway | Sent after Connecting. Has the `heartbeat` as parameter. |
| [10](#heartbeat)            | Heartbeat     | Client  | Sent by the Client to keep the connection alive. |
| [11](#heartbeat-ack)        | Heartbeat ACK | Gateway | Acknowledges the Heartbeat from the Client. |

## Opcode specification
### Error
The Error Opcode gets sent, if something went wrong. You will recieve a special [Error code](error-codes#gateway-error-codes), a describing message and sometimes an array with error messages, as well as an array with the objects you've sent, ordered by the error messages.

Example Payload
```json
{
  "op": -1,
  "e": 4005,
  "d": {
    "errors": [
      "Type not provided.",
      "Key not provided."
    ],
    "data": [
      null,
      null
    ]
  },
  "m": "Malformed data."
}
```

### Event from the Gatway
An Event was emited from the Gateway to the Client. You will recieve the [Event Name](events#list), as well as the data for the specific Event.

Example Payload
```json
{
  "op": 0,
  "d": {
    "guilds": 1000,
    "guildMembers": 55555,
    "cachedGuildMembers": 32000
  },
  "t": "GLOBAL_GUILD_COUNT"
}
```

### Event from the Client
An Event was emited from the Client to the Gateway. You will recieve the [Event Name](events#list), as well as the data for the specific Event.

Example Payload -> see [here](gateway#example-identify)

### Hello
After Connecting, you will recieve this Hello Payload. It contains important information for your Heartbeat.

Example Payload -> see [here](gateway#example-hello)

### Heartbeat
A Hearbeat payload just containts the opcode. No additional data should be sent.

Example Payload
```json
{
  "op": 10
}
```

### Heartbeat ACK
After sending a Heartbeat Packet, you (should (in the best case (i really really hope))) recieve this ACK. If not, please reconnect to the Gateway.

Example Payload -> see [here](gateway#example-heartbeat-ack)
