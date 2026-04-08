---
id: "clickhouse-use-ha"
title: "ClickHouseの高可用性FAQ"
description: "FPT Database EngineのClickHouseクラスターにおける高可用性（HA）の動作に関するよくある質問です。"
sidebar_label: "ClickHouseの高可用性FAQ"
sidebar_position: 47
pagination_next: null
---

# ClickHouseの高可用性FAQ

### Q1. ClickHouseクラスターでHigh Availability（HA）を有効にすると何が起こりますか？

**A:** High Availability（HA）を有効にしてClickHouseデータベースクラスターを作成すると、サービスは各シャードに対して自動的に追加のレプリカを作成します。ただし、レプリケーション機能を使用するには、レプリケーションをサポートするテーブルを作成する必要があります。詳細については、ClickHouseの公式ドキュメント [Replicated* table engines | ClickHouse Docs](https://clickhouse.com/docs/engines/table-engines/mergetree-family/replication) をご参照ください。

レプリケーションは、MergeTreeファミリーのテーブルのみでサポートされており、以下のテーブルタイプが含まれます。

- ReplicatedMergeTree
- ReplicatedSummingMergeTree
- ReplicatedReplacingMergeTree
- ReplicatedAggregatingMergeTree
- ReplicatedCollapsingMergeTree
- ReplicatedVersionedCollapsingMergeTree
- ReplicatedGraphiteMergeTree

### Q2. レプリケーションはサーバーレベルで機能しますか、それともテーブルレベルで機能しますか？

**A:** レプリケーションはサーバーレベルではなく、テーブルレベルで機能します。そのため、同じサーバー上にレプリケーションありのテーブルとレプリケーションなしのテーブルが共存できます。

### Q3. ClickHouseにおいてレプリケーションはシャーディングに依存しますか？

**A:** いいえ。レプリケーションはシャーディングに依存しません。各シャードは他のシャードとは独立したレプリケーションの仕組みを持っています。

例えば、MergeTree（ReplicatedMergeTreeではない）を使用してテーブルを作成した場合、クラスターでHAが有効になっていても、そのテーブルはレプリケーションされません。データは書き込みリクエストを受け取ったノードにのみ書き込まれます。
