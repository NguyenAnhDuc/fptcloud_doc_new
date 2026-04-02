---
id: "quy-tac-he-thong"
title: "システムルール"
sidebar_label: "システムルール"
sidebar_position: 11
---

# システムルール

- デフォルトでは、IP Access Control が**無効**の場合、すべての IP アドレスがシステムにアクセスできます。
- IP Access Control が**有効**になると、IP がホワイトリストに追加されるまで、FPT Cloud 外からのすべてのアクセスがブロックされます。
- 各エンドポイント（Grafana ダッシュボード、Metric datasource、Log datasource、Trace datasource）は独自の IP ホワイトリストを持ちます。
- テーブル内のいずれかの IP が **Whitelisting** または **Blacklisting** ステータスの場合、処理が完了するまでそのテーブルのすべてのアクションボタンが一時的に無効になります。

## IP/CIDR ホワイトリストステータス

| ステータス | 説明 |
|---|---|
| Whitelisting | システムが IP/CIDR のホワイトリスト登録を処理中です。 |
| Whitelisted | IP/CIDR のホワイトリスト登録が成功し、アクセスが許可されています。 |
| Whitelist Failed | ホワイトリスト登録が失敗しました。IP/CIDR はまだアクセスできません。Retry を使用して再試行してください。 |
| Blacklisting | システムが IP/CIDR のアクセスを取り消し中です。 |
| Blacklist Failed | ブラックリスト登録が失敗しました。IP/CIDR は引き続きアクセスできます。Retry を使用して再試行してください。 |
