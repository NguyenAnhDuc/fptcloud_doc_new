---
id: "create-backup-service"
title: "バックアップサービスの作成"
description: "FPT Smart Cloud Database Engine のバックアップサービスとジョブの作成手順。"
sidebar_label: "バックアップサービスの作成"
sidebar_position: 12
---

# バックアップサービスの作成

1. **Database Engine** を選択し、**ID Cluster** を選択します。**Database Detail** の **Backups** タブを選択します。

2. **Backups** タブを開くと、バックアップサービスはデフォルトで無効状態になっています。**Enable backup** を選択します。

3. **Backup Capacity** 画面が表示されます。**Capacity** を入力し、**Save** をクリックします。

   :::note
   Capacity はシステムの使用可能ストレージ量を超えることはできません。超過した場合はエラーが表示され、サービスを有効化できません。
   :::

4. **Backup Status** が **Enable** になったら、ジョブの作成を開始できます。

### 5-1. Full バックアップジョブの作成

**Create full backup job** を選択します。

- **Backup job Database** ポップアップが表示されます。ジョブスケジュール情報（週の各曜日の時・分を指定して full バックアップを実行するスケジュール）を入力し、**Create** をクリックします。
- Full バックアップジョブが **Ready** 状態で正常に作成されたら、**Run Now** をクリックしてジョブを実行します。
- **Run Now Backup Job cluster** ポップアップが表示されます。確認のため Cluster ID を再入力し、**Run Now** をクリックします。
- バックアップジョブの成否は **Action Log** で確認できます。

### 5-2. Diff バックアップジョブの作成

**Create a diff backup** を選択します。

:::note
- Full バックアップが存在しない場合、差分バックアップは作成できません。
- 各 Cluster ID に対して Full バックアップは 1 つのみ許可されます。スケジュールを変更したい場合はジョブの時間を編集してください。
- MongoDB、Redis、SQL Server タイプのデータベースクラスターには Diff バックアップはありません。
:::

- **Backup job Database** ポップアップが表示されます。ジョブスケジュール情報を入力します。
- **Create** をクリックして Diff バックアップジョブを作成します。ジョブが **Ready** 状態になったら **Run Now** をクリックします。
- **Run Now Backup Job cluster** ポップアップで Cluster ID を再入力し、**Run Now** をクリックします。
