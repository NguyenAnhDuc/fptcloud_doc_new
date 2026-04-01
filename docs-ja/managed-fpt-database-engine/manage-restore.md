---
id: "manage-restore"
title: "リストアの管理"
description: "FPT Smart Cloud Database Engine のリストアポイントの作成と管理手順。"
sidebar_label: "リストアの管理"
sidebar_position: 15
---

# リストアの管理

## リストアポイントの作成

リストア機能を使用するには以下の条件が必要です。
- 作成（プロビジョニング）済みの Database Engine が 1 つあること。
- 少なくとも 1 つのバックアップジョブが作成され、スケジュールされた時刻に実行されていること。

1. **Database Engine** を選択し、**ID Cluster** を選択します。**Database Detail** の **Restore** タブを選択します。
[![](/img/migrated/6.3_buoc-1-0a621b7a.png)](/img/migrated/6.3_buoc-1-0a621b7a.png)

2. バックアップが実行されると、**Available Restore point** タブに **Backup Type** を持つ **Restore Point** が表示されます。
   - Full ジョブは **Full** タイプのリストアポイントを作成します。
   - Diff ジョブは **Diff** タイプのリストアポイントを作成します。
[![](/img/migrated/6.3-buoc1.1-69d07b92.png)](/img/migrated/6.3-buoc1.1-69d07b92.png)

3. **Actions** 列の 3 点メニューをクリックし、**Restore** を選択します。
[![](/img/migrated/6.3-buoc1.2-8262cfcb.png)](/img/migrated/6.3-buoc1.2-8262cfcb.png)
[![](/img/migrated/6.3-buoc1.3-028093c2.png)](/img/migrated/6.3-buoc1.3-028093c2.png)

4. **Restore Database** ポップアップが表示されます。プリセット構成（Preset Configuration）またはカスタム構成（Custom Configuration）でリストアするデータベースの設定を選択します。その後 **Restore** をクリックします。
[![](/img/migrated/6.3-buoc1.4-c1e933e8.png)](/img/migrated/6.3-buoc1.4-c1e933e8.png)
[![](/img/migrated/6.3-buoc1.5-42e59be4.png)](/img/migrated/6.3-buoc1.5-42e59be4.png)

5. リストアが正常に作成されると、Database Management に「Restore + 旧 Cluster ID から」という名前の新しい Cluster ID が表示されます。
[![](/img/migrated/6.3-buoc1.6-4b4c88c3.png)](/img/migrated/6.3-buoc1.6-4b4c88c3.png)
