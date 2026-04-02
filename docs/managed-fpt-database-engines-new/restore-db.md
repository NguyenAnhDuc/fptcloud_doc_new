---
id: "restore-db"
title: "Restoring a database"
description: "The Restore and Point-in-Time Recovery (PITR) features allow users to recover a database from backups or restore it to a specific point in time."
sidebar_label: "Restoring a database"
sidebar_position: 30
---

# Restoring a database

The **Restore** and **Point-in-Time Recovery (PITR)** features allow users to recover a database from backups or restore it to a specific point in time in the past. The instructions in this section help users perform the data recovery process accurately, safely, and efficiently, while ensuring data integrity.

When performing **Restore** or **PITR**, the system will **create a new database cluster** and **will not overwrite the current cluster**.

Currently, **FPT Cloud supports Restore for all database engines provided** and **supports PITR for PostgreSQL**.

### 1. Restore database

The Restore feature allows users to use a previously created backup to recover data and create a new database cluster. This feature is useful in cases of data loss, system failure, or when a rollback to a previous state is needed.

Before performing a restore, ensure the database cluster has at least one successfully created backup (restore point) — meaning at least one restore point is available for restore.

Steps to perform Restore:

#### Step 1: Access the restore screen

From the menu bar, select **Database Platform** > select the **All Database** menu or the menu corresponding to the database group > click the Cluster ID of the database cluster to restore > select the **Backup** tab > select the **Restore** sub-tab. The system will display the list of **Available Restore Points**, including the backup type (Full or Diff).

[![](/img/migrated/DBaaS_BackupDB_restore_list-44b1a2e5.png)](/img/migrated/DBaaS_BackupDB_restore_list-44b1a2e5.png)

#### Step 2: Perform the restore

In the **Actions** column, click the three-dot icon (⋮) corresponding to the desired restore point → select **Restore**. A Restore Database dialog will appear:

[![](/img/migrated/restore-1-a841d3d9.jpg)](/img/migrated/restore-1-a841d3d9.jpg)

Enter the required information:

- **Restore Cluster Name**: The name of the new cluster created during the restore.
- **Flavor**: Select the appropriate configuration for the new cluster.

Click **Restore** to begin the recovery process. After completion, a new database cluster will appear in the Database Engines management list, containing data from the selected backup.

### 2. Recover to point-in-time

The **Recover to Point-in-Time** feature allows users to restore a database to a precise point in time in the past, which is very useful when recovering data after an incident or error during operations. Currently, this feature is **only supported for PostgreSQL**.

Before performing PITR, ensure:

- PITR is enabled on the database cluster.
- At least one full database backup exists.
- The system has stored sufficient archived logs for the recovery process.

Steps to perform Recover to Point-in-Time:

#### Step 1: Access the restore screen

Follow the same steps as accessing the Restore screen in the Restore Database section.

#### Step 2: Perform the recovery

On the **Restore** tab, select **Restore to Point in Time**. The Restore Database to a Point in Time dialog appears.

[![](/img/migrated/DBaaS_BackupDB_recover-493cd14e.png)](/img/migrated/DBaaS_BackupDB_recover-493cd14e.png)

Enter the required information:

- **Restore Cluster Name**: The name of the new cluster created during recovery.
- **Flavor**: Select the appropriate configuration for the new cluster.
- **Recover To**: Select the exact point in time to restore the database to (in date/time format).

Click **Recover** to begin the recovery process. The system will create a new cluster and recover data to the specified point in time. After completion, a new database cluster will appear in the Database Engines list screen, containing data at exactly the recovery point.

**Note:** You can only recover data to time points after the first Full Backup was created since PITR was activated. If this Full Backup has not yet been executed, PITR will not be ready. Any data changes that occurred before this Full Backup are outside the scope of PITR protection and cannot be recovered.
