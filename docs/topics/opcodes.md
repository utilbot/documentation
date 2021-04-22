---
sidebar_position: 1
---

# Opcodes
Everything that will be sent through the Gateway has it's own Opcode, so everyone knows what is going to be sent and recieved.

## Gatway Opcodes
| CODE                        | NAME          | CLIENT ACTION | DESCRIPTION |
| --------------------------- | ------------- | ------------- | ----------- |
| [-1](#error)                | Error         | Recieve       | Something went completely wrong. Just reconnect. |
| [0](#event-from-the-gatway) | Event         | Recieve       | An Event sent by the Gateway. |
| [1](#event-from-the-client) | Event         | Send          | An Event sent by the Client. |
| [5](#hello)                 | Hello         | Recieve       | Sent after Connecting. Has the `heartbeat` as parameter. |
| [10](#heartbeat)            | Heartbeat     | Send          | Sent by the Client to keep the connection alive. |
| [11](#heartbeat-ack)        | Heartbeat ACK | Recieve       | Acknowledges the Heartbeat from the Client. |

## Gateway Error Codes
After recieving an Error, your Connection gets closed and you need to reconnect to the Gateway.

| CODE | DESCRIPTION    | EXPLANATION |
| ---- | -------------- | ----------- |
| 1000 | Unknown Error  | Uhm, I don't know what went wrong. Just reconnect. |
| 4000 | Wrong Version  | You gave the Gateway a wrong or outdated [Gateway Version](/docs/topics/gateway#gateway-versions). |
| 4001 | Wrong Auth Key | You submitted an auth key, that is either wrong or expired. |
| 4002 | Bot ID Used    | The Bot ID, that was automatically generated is already in use. This should never happen, so you should never see this error. Hopefully. |
| 4003 | No Opcode      | No Opcode was provided. |
| 4004 | Wrong Opcode   | A wrong Opcode was provided, maybe you've used a Recieve Opcode? |
| 4005 | Malformed Data | Wrong or malformed data was provided for this Opcode. |
| 4006 | No Heartbeat   | The Gateway didn't recieve a Heartbeat. |


## Opcode specification
### Error
The Error Opcode gets sent, if something went wrong. You will recieve a special [Error code](#gateway-error-codes), a describing message and sometimes an array with error messages, as well as an array with the objects you've sent, ordered by the error messages.

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
An Event was emited from the Gateway to the Client. You will recieve the [Event Name](/docs/topics/events#list), as well as the data for the specific Event.

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
An Event was emited from the Client to the Gateway. You will recieve the [Event Name](/docs/topics/events#list), as well as the data for the specific Event.

Example Payload -> see [here](/docs/topics/gateway#example-identify)

### Hello
After Connecting, you will recieve this Hello Payload. It contains important information for your Heartbeat.

Example Payload -> see [here](/docs/topics/gateway#example-hello)

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

Example Payload -> see [here](/docs/topics/gateway#example-heartbeat-ack)
