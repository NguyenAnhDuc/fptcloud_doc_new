---
id: "hanh-dong-voi-connector"
title: "connector に対するアクション"
sidebar_label: "connector に対するアクション"
description: "connector に対するアクション"
sidebar_position: 26
---

# connector に対するアクション

connector の状態には以下が含まれます:

**状態** | **説明**
---|---
`PAUSED` | connector は一時停止中です。データを処理しませんが、状態と設定は保持されます
`STOPPED` | connector は停止しています
`RUNNING` | connector は稼働中でデータを処理しています
`FAILED` | connector はエラーに遭遇し、データ処理を継続できません

以下の状態遷移マトリックスに従って connector に対してアクションを実行できます:

**現在の状態 & アクション** | Stop | Resume | Pause | Restart | Reset offset | Delete
---|---|---|---|---|---|---
`RUNNING` |  |  |  |  |  |
`PAUSED` |  |  |  |  |  |
`FAILED` |  |  |  |  |  |
`STOPPED` |  |  |  |  |  |

* * *

ユースケース:

**アクション** | **説明**
---|---
**Restart** | connector を再起動します
**Pause** | connector とそのタスクを一時停止し、connector が再開されるまでメッセージ処理を停止します。このアクションは非同期であり、タスクが同時に `PAUSED` 状態に移行するわけではありません。

**• 影響:**
– connector とそのタスクはデータ処理を停止します。
– connector はシステム内に残り、いつでも再開（Resume）できます。
– connector の offset（データ読み取り位置）は保持され、失われません。

**• 使用するタイミング:**
– connector を削除または完全停止せずにデータ処理を一時停止したい場合。
– システムメンテナンスや一時的なトラブルシューティングが必要な場合。
**Resume** | 一時停止中の connector を再開します。このアクションは非同期であり、タスクが同時に実行状態に移行するわけではありません
**Stop** | 接続を削除せずに停止します。接続のすべてのタスクが完全にシャットダウンされます。

**• 影響:**
– connector とそのタスクは動作を停止します。
– connector は実行中の connector のリストから削除されます。
– connector の設定が削除されます。再度使用する場合は最初から connector を再作成する必要があります。

**• 使用するタイミング:**
– その connector が不要になった場合。
– リソースを解放したり、新しい connector に置き換えたりするために connector を完全に削除したい場合。
**Reset offset** | connector の offset 値をリセットし、最初からデータを再読み込みします
