---
id: "clickhouse-use-ha"
title: "Clickhouse Use Ha"
description: "**A:**"
sidebar_label: "Clickhouse Use Ha"
sidebar_position: 46
---

# Clickhouse Use Ha

### Q1. What happens when I enable High Availability (HA) for a ClickHouse cluster?
**A:**
When creating a ClickHouse database cluster with High Availability (HA) enabled, the service will automatically create replicas for each shard. However, to use the replication feature, users must create tables that support replication. For detailed information, refer to the official ClickHouse documentation on [Replicated* table engines | ClickHouse Doc](https://clickhouse.com/docs/engines/table-engines/mergetree-family/replication).
Replication is only supported for tables in the MergeTree family, which includes the following table types:
  * ReplicatedMergeTree
  * ReplicatedSummingMergeTree
  * ReplicatedReplacingMergeTree
  * ReplicatedAggregatingMergeTree
  * ReplicatedCollapsingMergeTree
  * ReplicatedVersionedCollapsingMergeTree
  * ReplicatedGraphiteMergeTree

### Q2. Is replication applied at the server level or table level?
**A:**
Replication works at the table level, not at the server level. This means a single server can host both replicated and non-replicated tables at the same time.
### Q3. Does replication depend on sharding in ClickHouse?
**A:**
No. Replication is independent of sharding. Each shard manages its own replication mechanism separately from other shards.
For example, if you create a table using MergeTree (instead of ReplicatedMergeTree), the table will not be replicated, even if HA is enabled. Data will only be written to the node that receives the write request.