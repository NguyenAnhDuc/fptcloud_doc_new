---
id: "clickhouse-use-ha"
title: "ClickHouse high availability FAQ"
description: "Frequently asked questions about High Availability behavior in ClickHouse clusters on FPT Database Engine."
sidebar_label: "ClickHouse high availability FAQ"
sidebar_position: 47
pagination_next: null
---

# ClickHouse high availability FAQ

### Q1. What happens when High Availability (HA) is enabled for a ClickHouse cluster?

**A:** When creating a ClickHouse database cluster with High Availability (HA) enabled, the service automatically creates additional replicas for each shard. However, to use the replication feature, users must create tables that support replication. For more details, refer to the official ClickHouse documentation at [Replicated* table engines | ClickHouse Docs](https://clickhouse.com/docs/engines/table-engines/mergetree-family/replication).

Replication is only supported for tables in the MergeTree family, including the following table types:

- ReplicatedMergeTree
- ReplicatedSummingMergeTree
- ReplicatedReplacingMergeTree
- ReplicatedAggregatingMergeTree
- ReplicatedCollapsingMergeTree
- ReplicatedVersionedCollapsingMergeTree
- ReplicatedGraphiteMergeTree

### Q2. Does replication work at the server level or the table level?

**A:** Replication works at the table level, not the server level. Therefore, on the same server, both replicated tables and non-replicated tables can coexist.

### Q3. Is replication dependent on sharding in ClickHouse?

**A:** No. Replication is independent of sharding. Each shard has its own replication mechanism that is independent of other shards.

For example, if you create a table using MergeTree (not ReplicatedMergeTree), that table will not be replicated, even if the cluster has HA enabled. Data is only written to the node that receives the write request.
