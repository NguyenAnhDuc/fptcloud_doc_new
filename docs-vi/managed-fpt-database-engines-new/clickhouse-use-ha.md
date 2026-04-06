---
id: "clickhouse-use-ha"
title: ClickHouse - Sử dụng High Availability (HA)
description: "**A:**"
sidebar_label: ClickHouse - Sử dụng High Availability (HA)
sidebar_position: 47
pagination_next: null
---

# ClickHouse - Sử dụng High Availability (HA)

### Q1. Điều gì xảy ra khi bật High Availability (HA) cho cụm ClickHouse?
**A:**
Khi tạo một cụm cơ sở dữ liệu ClickHouse với tính năng High Availability (HA) được bật, dịch vụ sẽ tự động tạo thêm replica cho mỗi shard. Tuy nhiên, để sử dụng tính năng replication, người dùng cần tạo các bảng hỗ trợ replication. Để biết thêm chi tiết, tham khảo tài liệu chính thức của ClickHouse tại [Replicated* table engines | ClickHouse Doc](https://clickhouse.com/docs/engines/table-engines/mergetree-family/replication).
Replication (nhân bản dữ liệu) chỉ được hỗ trợ cho các bảng thuộc họ MergeTree, bao gồm các loại bảng sau:
  * ReplicatedMergeTree
  * ReplicatedSummingMergeTree
  * ReplicatedReplacingMergeTree
  * ReplicatedAggregatingMergeTree
  * ReplicatedCollapsingMergeTree
  * ReplicatedVersionedCollapsingMergeTree
  * ReplicatedGraphiteMergeTree

### Q2. Replication hoạt động ở mức server hay mức table?
**A:**
Replication hoạt động ở mức bảng (table-level), không phải ở mức server. Do đó, trên cùng một server có thể tồn tại cả bảng có replication và bảng không có replication.

### Q3. Replication có phụ thuộc vào sharding trong ClickHouse không?
**A:**
Không. Replication không phụ thuộc vào sharding. Mỗi shard có cơ chế replication độc lập với các shard khác.
Ví dụ, nếu bạn tạo bảng bằng MergeTree (không phải ReplicatedMergeTree), thì bảng đó sẽ không được nhân bản, ngay cả khi cụm đã bật HA. Dữ liệu chỉ được ghi trên node nhận request ghi.
