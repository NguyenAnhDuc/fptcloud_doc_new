---
id: "hanh-dong-voi-snapshot"
title: "Actions with Snapshot"
sidebar_label: "Actions with Snapshot"
description: "Actions with Snapshot"
sidebar_position: 31
---

# Actions with Snapshot

Use cases:

Action | Description
---|---
**Execute** | Start the snapshot process. This process does not block the table being snapshotted and the data stream continues to operate.

**Effects:**
\- Snapshot status changes to In-progress
\- Kafka topic starts receiving data from the snapshot
\- Connector and tasks continue to operate normally

**When to use:**
\- When you want to snapshot all current data in the database into a Kafka topic
\- When initial data needs to be loaded into the system
\- When you want to re-run a snapshot after it has Completed or Failed
**Pause** | Pause an incremental snapshot. Upon receiving this signal, the connector will pause the ongoing snapshot operation. All data collection will be stopped at the moment the stop signal is received.

**Effects:**
\- Snapshot status changes to Paused
\- Kafka topic stops receiving data from the snapshot
\- The snapshot progress is saved and can be Resumed to continue
\- Connector and tasks continue to operate normally

**When to use:**
\- When you need to pause the snapshot during peak hours to avoid performance impact
\- When system maintenance or temporary troubleshooting is needed
**Resume** | Resume a paused incremental snapshot. Upon receiving this signal, the connector will continue the previously paused snapshot operation.

**Effects:**
\- Snapshot status changes to In-progress
\- Kafka topic resumes receiving data from the paused position
\- The snapshot continues running until completion

**When to use:**
\- After a Pause, when you want to continue the snapshot
\- When the system has stabilized and can resume snapshot processing
**Stop** | Stop and cancel the currently running ad hoc snapshot. The entire current snapshot process will be cancelled.

**Effects:**
\- Snapshot status changes to Completed
\- Kafka topic immediately stops receiving data from the snapshot
\- The snapshot process is cancelled; Execute must be run again from the beginning to restart

**When to use:**
\- When the snapshot is no longer needed
\- When an error is detected during the snapshot and you want to stop immediately
\- When system resources need to be freed
