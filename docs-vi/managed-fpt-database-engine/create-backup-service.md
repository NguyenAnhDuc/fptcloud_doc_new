---
id: "create-backup-service"
title: "バックアップサービスの作成"
description: "FPT Smart Cloud Database Engine のバックアップサービスとジョブの作成手順。"
sidebar_label: "バックアップサービスの作成"
sidebar_position: "12"
---

# Create backup service

1. Select **Database Engine** > select a **Cluster ID** > on **Database Detail**, select the **Backups** tab.

2. Open the **Backups** tab. After the database cluster is created, the backup service is disabled by default. Select **Enable backup**.

3. The **Backup Capacity** screen appears. Enter the **Capacity** and click **Save**.

   :::note
   Capacity cannot exceed the available storage on the system. If it does, an error will be shown and the service cannot be enabled.
   :::

4. Once **Backup Status** shows **Enable**, you can begin creating jobs.

### Step 5-1: Create a full backup job

Select **Create full backup job**.

- The **Backup job Database** popup appears with the cluster ID name. Enter the job schedule information (hour and minute for each day of the week to run the full backup) and click **Create**.
- After the full backup job is successfully created with status **Ready**, click **Run Now** to run the job.
- The **Run Now Backup Job cluster** popup appears. Re-enter the Cluster ID to confirm, then click **Run Now**.
- Whether a backup job succeeds or fails is updated in **Action Log**.

### Step 5-2: Create a diff backup job

Select **Create a diff backup**.

:::note
- You cannot create an incremental backup without a full backup.
- Each Cluster ID allows only one full backup. Edit the job run time if you want to change it.
- MongoDB, Redis, and SQL Server database types do not support Diff backup.
:::

- The **Backup job Database** popup appears. Enter the job schedule information.
- Click **Create** to create the Diff backup job. After the job is created with status **Ready**, click **Run Now**.
- The **Run Now Backup Job cluster** popup appears. Re-enter the Cluster ID to confirm, then click **Run Now**.
