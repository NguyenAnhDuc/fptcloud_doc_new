---
id: "on-off-pitr"
title: "On Off Pitr"
description: "The **Point-in-Time Recovery (PITR)** feature allows users to restore a database to a specific point in the past, ensuri"
sidebar_label: "On Off Pitr"
sidebar_position: 4
---

# On Off Pitr

The **Point-in-Time Recovery (PITR)** feature allows users to restore a database to a specific point in the past, ensuring data continuity and reliability.
Currently, **FPT Cloud supports PITR for the PostgreSQL engine**. This section provides detailed instructions on how to enable or disable PITR for PostgreSQL.

### 1. Enabling PITR
Users can **enable PITR for PostgreSQL** either **during the Backup service activation** (see Section [Enable Backup Service](../managed-fpt-database-engine/index.md)) or **after the Backup service has already been activated** by following the instructions below.

#### Prerequisites:
To enable PITR, the database must have at least one Full Backup Job configured. Please create a Full Backup Job before proceeding with PITR activation.
If PITR is enabled without an existing Full Backup Job, the system will display a warning dialog.
[![](/img/migrated/DBaaS_BackupDB_pitr_enable_warning-17bc4181.png)](/img/migrated/DBaaS_BackupDB_pitr_enable_warning-17bc4181.png)
Select **Configure Now** to complete the creation of a Full Backup Job before proceeding with PITR activation.

#### PITR enabling instructions:
On the Backup service management screen, click **Enable PITR** (gear icon next to the PITR status).
[![](/img/migrated/DBaaS_BackupDB_pitr_enable-bec47e5a.png)](/img/migrated/DBaaS_BackupDB_pitr_enable-bec47e5a.png)
The system will display a confirmation dialog.
[![](/img/migrated/DBaaS_BackupDB_pitr_enable_popup-0e361ade.png)](/img/migrated/DBaaS_BackupDB_pitr_enable_popup-0e361ade.png)
Enabling PITR will increase storage usage and incur additional costs. Users should evaluate and estimate the expected storage consumption before proceeding.
To enable the feature, select the confirmation checkbox and click **Confirm**.
After activation, PITR does not take effect immediately. The system must first create the next Full Backup. Once PITR becomes available, you can restore the database to any point in time starting from that Full Backup. Any data changes that occurred before this Full Backup are not protected by PITR and cannot be restored.

### 2. Disabling PITR
To disable PITR, in the Backup service management screen, click the **Disable PITR** button (gear icon next to the PITR status). The system displays a confirmation dialog:
[![](/img/migrated/DBaaS_BackupDB_pitr_disable_popup-385a70da.png)](/img/migrated/DBaaS_BackupDB_pitr_disable_popup-385a70da.png)
Enter "**disable** " and click **Confirm** to proceed. Once PITR is disabled, **you will no longer be able to restore the database to any point in the past.**
