---
id: "view-detail"
title: "レポート詳細の表示"
description: "FPT Cloud Reportingでレポート一覧とレポート詳細を表示する方法。"
sidebar_label: "レポート詳細の表示"
sidebar_position: 4
---

# レポート詳細の表示

1. **Home > Apps > Reporting** に移動します。

   [![レポート一覧画面](/img/migrated/Picture11-f73c4b93.png)](/img/migrated/Picture11-f73c4b93.png)

   レポート一覧が以下の列を含む表形式で表示されます：

   | 列 | 説明 |
   |----|------|
   | Name | レポート名 |
   | Report status | **Active** または **Draft** |
   | Dashboard name | 選択したダッシュボード名 |
   | Recipient | 受信者のメールアドレス |
   | Created date | レポートが作成または最後に変更された日付 |
   | Last sent | レポートメールが最後に送信された日付 |
   | Schedule | レポート送信スケジュール |
   | Schedule status | **Active** または **Inactive**。**Draft** レポートには表示されません |

2. レポート名をクリックして詳細を表示します。

   [![レポート詳細画面](/img/migrated/Picture12-94a2f87d.png)](/img/migrated/Picture12-94a2f87d.png)

   レポート詳細ビューには以下が含まれます：

   - **レポート名**
   - **レポートステータス**：
     - **Active**：レポートが正常に作成されました。
     - **Draft**：ユーザーが **Save as Draft** を選択しました。
   - **Initialization time**：レポートが作成または最後に変更された時刻。
   - **スケジュールステータス**：
     - **Scheduled**：送信スケジュールが設定されています。
     - **Expired**：レポートのスケジュール期限が切れました。
     - **Draft**：レポートが下書き状態です。
     - **Paused**：スケジュールは有効期間内ですが、ユーザーが送信を無効化しています（一時停止）。
