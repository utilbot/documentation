---
sidebar_position: 2
---

# Error Codes
In the following, we list the error codes that can be returned by the Gateway / API.

## Gateway Error Codes
After recieving an Error, your Connection gets closed and you need to reconnect to the Gateway.

| CODE | DESCRIPTION    | EXPLANATION |
| ---- | -------------- | ----------- |
| 1000 | Unknown Error  | Uhm, I don't know what went wrong. Just reconnect. |
| 4000 | Wrong Version  | You gave the Gateway a wrong or outdated [Gateway Version](gateway#gateway-versions). |
| 4001 | Wrong Auth Key | You submitted an auth key, that is either wrong or expired. |
| 4002 | Bot ID Used    | The Bot ID, that was automatically generated is already in use. This should never happen, so you should never see this error. Hopefully. |
| 4003 | No Opcode      | No Opcode was provided. |
| 4004 | Wrong Opcode   | A wrong Opcode was provided, maybe you've used a Recieve Opcode? |
| 4005 | Malformed Data | Wrong or malformed data was provided for this Opcode. |
| 4006 | No Heartbeat   | The Gateway didn't recieve a Heartbeat. |
| 4007 | Wrong Identify | A wrong Identify Payload was sent. |

## Error Code Specification
:::info
The specification of the error codes is not yet finished.
:::
