---
id: "lock-unlock-instance-deletion"
title: "仮想マシンの削除ロックとロック解除"
description: "誤削除を防ぐために仮想マシンをロックし、削除が必要な際にロックを解除します。"
sidebar_label: "削除ロック & ロック解除"
sidebar_position: 5
---

# 仮想マシンの削除ロックとロック解除

削除ロック機能を使用すると、重要な仮想マシンを誤削除から保護できます。操作ミスによるデータ損失のリスクを低減できます。

## 削除ロック（Lock Deletion）

1. **Instance Management** で仮想マシンを選択し、**Actions** → **Lock Deletion** をクリックします。

   ![Lock DeletionオプションがあるActionsメニュー](/img/migrated/image-1712738228214-76b8b81a.png)

2. 警告ダイアログに仮想マシン名が表示されます。**Lock Instance Deletion** をクリックして確認します。

   ![Lock Instance Deletion確認ダイアログ](/img/migrated/image-1712738219490-01d185fc.png)

ロックが解除されるまで、仮想マシンは削除できなくなります。

## 削除ロック解除（Unlock Deletion）

1. **Instance Management** で仮想マシンを選択し、**Actions** → **Unlock Deletion** をクリックします。

   ![Unlock DeletionオプションがあるActionsメニュー](/img/migrated/image-1712738202636-17abdc91.png)

2. 警告ダイアログに仮想マシン名が表示されます。**Unlock Instance Deletion** をクリックして確認します。

   ![Unlock Instance Deletion確認ダイアログ](/img/migrated/image-1712738209302-86a7aea2.png)

ロックが解除された仮想マシンは通常通り削除できるようになります。

## 次のステップ

- [仮想マシンの削除](/docs/ja/fpt-cloud-server/cloud-server/quick-starts/quick-starts-xoa-may-ao)
