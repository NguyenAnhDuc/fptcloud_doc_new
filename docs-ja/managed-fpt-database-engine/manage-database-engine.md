---
id: "manage-database-engine"
title: "Database Engine の管理"
description: "FPT Smart Cloud Database Engine の管理操作手順。"
sidebar_label: "Database Engine の管理"
sidebar_position: 10
---

# Database Engine の管理

Database Engine の管理操作（Start、Stop、Restart、Delete など）を行う手順を説明します。

## Database Engine の一覧表示

1. メニューから **Database Engine** を選択します。
2. **Database Management** ページに全クラスターの一覧が表示されます。

ステータスの説明:
- **Running:** Database Engine が正常に稼働中。
- **Processing:** Database Engine が処理中。
- **Stopped:** Database Engine が停止中。
- **Failed:** Database Engine の作成または操作が失敗。

## Database Engine の停止・起動・再起動

1. 操作したい Cluster ID の **Actions** を選択します。
2. 目的の操作（**Start** / **Stop** / **Restart**）を選択します。
3. 確認ポップアップが表示されたら Cluster ID を再入力して確定します。

## Database Engine の削除

1. 削除する Cluster ID の **Actions** を選択します。
2. **Delete** を選択します。
3. 確認ポップアップで Cluster ID を再入力し、**Delete** をクリックします。

:::warning
削除操作は元に戻せません。バックアップが存在することを確認してから削除してください。
:::
