---
id: "hanh-dong-voi-connector"
title: "Actions with connector"
sidebar_label: "Actions with connector"
description: "Actions with connector"
sidebar_position: 26
---

# Actions with connector

Connector states include:

**State** | **Description**
---|---
`PAUSED` | The connector is paused; it does not process data but retains its state and configuration
`STOPPED` | The connector has been stopped
`RUNNING` | The connector is running and processing data
`FAILED` | The connector encountered an error and cannot continue processing data

The following actions can be performed on a connector according to the state transition matrix below:

**From state & Action** | Stop | Resume | Pause | Restart | Reset offset | Delete
---|---|---|---|---|---|---
`RUNNING` |  |  |  |  |  |
`PAUSED` |  |  |  |  |  |
`FAILED` |  |  |  |  |  |
`STOPPED` |  |  |  |  |  |

* * *

Use cases:

**Action** | **Description**
---|---
**Restart** | Restart the connector
**Pause** | Pause the connector and its tasks, stopping message processing until the connector is resumed. This action is asynchronous and tasks will not transition to the `PAUSED` state simultaneously.

**• Effects:**
– The connector and its tasks will stop processing data.
– The connector remains in the system and can be resumed at any time.
– The connector's offsets (data read positions) are preserved and not lost.

**• When to use:**
– When you want to temporarily pause data processing without deleting or fully stopping the connector.
– When system maintenance or temporary troubleshooting is needed.
**Resume** | Resume a paused connector. This action is asynchronous and tasks will not transition to the running state simultaneously
**Stop** | Stop the connection without deleting it. All tasks for the connection will be completely shut down.

**• Effects:**
– The connector and its tasks will stop running.
– The connector is removed from the list of running connectors.
– The connector configuration is deleted; the connector must be recreated from scratch if needed again.

**• When to use:**
– When the connector is no longer needed.
– When you want to fully remove the connector to free up resources or replace it with a new one.
**Reset offset** | Reset the offset value for the connector so it re-reads data from the beginning
