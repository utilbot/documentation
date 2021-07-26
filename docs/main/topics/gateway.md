---
sidebar_position: 0
---

# Gateway
The Gateway is the connector for all Utilbot Applications, such as the Bot itself or the Website. The communication takes place over secure WebSockets. The Gateway should only be used via our official Applications, but you can implement your own client, if you want.

## Gateway Versions

| Version | Status          | Default            |
| ------- | --------------- | ------------------ |
| 1       | Default         | :white_check_mark: |

## Payloads
### Payload Structure

| Field | Type    | Description  |
| ----- | ------- | -------------- |
| op    | integer | Payload Opcode |
| d?    | object  | Data  |
| e?    | integer | Error Code |
| t?    | string  | Event Name |
| m?    | string  | Additional Message |

`? --> Field is optional.`

### Connecting
The Gateway is reachable via `wss://gateway.utilbot.co`. You can connect via a normal websocket. You must convert everything you send into a JSON String to send it to the Server. Data, that is not in the json format, will be truncated.

#### URL Params
| Field        | Type    | Description                           | Accepted values                           |
| ------------ | ------- | ------------------------------------- | ----------------------------------------- |
| v            | integer | Gateway Version                       | see [gateway versions](#gateway-versions) |
| compression? | string  | The (optional) compression of packets | 'zlib' |

Example Connection strings: `wss://gateway.utilbot.co/?v=1` or `wss://gateway.utilbot.co/?v=1&compression=zlib`

When the connection was successful, you should recieve the [Hello Opcode 5](opcodes#gateway-opcodes) paylod, with the heartbeat interval:

#### Example Hello
```json
{
  "op": 5,
  "d": {
    "hearbeat": 60000
  }
}
```

### Heartbeating
After recieving the Hello, you must start sending the [Heartbeat Opcode 10](opcodes#gateway-opcodes) every `heartbeat` milliseconds. When the Gateway recieves this Heartbeat, it will send you an ACK via the [ACK Opcode 11](opcodes#gateway-opcodes). If you stop recieving this ACK, you must reconnect to the Gateway.

When the Gateway doesn't recieve a Heartbeat when the next one should be sent, it closes the Connection with the [Error Code 4006](error-codes#gateway-error-codes).

#### Example Heartbeat ACK
```json
{
  "op": 11
}
```

### Identifying
After you started sending the Hearbeats, you must send the [Identify Event](events#identify). This is done via the [Event Send Opcode 1](opcodes#gateway-opcodes). Any data you send before Identifying will be ignored and never answered.

#### Example Identify
```json
{
  "op": 1,
  "d": {
    "type": "bot",
    "key": "my_key"
  },
  "t": "identify"
}
```

When everything is valid, you will get a response with the [Connection Success Event](events#connection-success)
