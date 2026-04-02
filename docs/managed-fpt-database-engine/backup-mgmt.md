---
id: "backup-mgmt"
title: "Backup management"
description: "This section provides detailed steps for users to perform operations related to the Backup service, including activation"
sidebar_label: "Backup management"
sidebar_position: 27
---

# Backup management

This section provides detailed steps for users to perform operations related to the Backup service, including activation, adjustment, and deactivation.
### 1. Enable Backup Service
To activate the Backup service, you can do so directly during the additional service configuration step when provisioning the database engine (see the [Provision Database](../managed-fpt-database-engine/index.md) section for details), or activate it after the database has been provisioned successfully by following the steps below.
#### Prerequisites
To activate the Backup service, users must enable the Notification service and complete the configuration of email or Telegram recipients for receiving backup-related alerts in advance. If Notification is not configured, the following dialog will appear:
[![](/img/migrated/DBaaS_BackupDB_noti_warning-e17645618511-fb3b9b39.png)](/img/migrated/DBaaS_BackupDB_noti_warning-e17645618511-fb3b9b39.png)
Click **Go to Notification** to navigate to the **Notification** tab and complete the alert configuration as described in the 7.8. Notification section.
#### Step 1: Access the Backup Screen
On the Menu bar, select **Database Platform** > Select **All Database** or the menu corresponding to the appropriate database group for the cluster needing backup service activation > Click the Cluster ID > Select the **Backup** tab to enter the backup service management screen.
[![](/img/migrated/DBaaS_BackupDB_view_inactive-scaled-5a5defe2.png)](/img/migrated/DBaaS_BackupDB_view_inactive-scaled-5a5defe2.png)
#### Step 2: Activate the Backup Service
After the database cluster is created successfully and the Backup service is not yet activated, the service status will default to Inactive. Click the **Enable Backup** icon (gear icon) to open the dialog and proceed with activation. Depending on the database engine type and whether the VPC is VMware or OpenStack, some fields may vary.
[![](/img/migrated/DBaaS_BackupDB_enable-e1764561767179-15ed20cd.png)](/img/migrated/DBaaS_BackupDB_enable-e1764561767179-15ed20cd.png)
Description of fields and how to fill them:
  * **Capacity (GB)** : Enter the storage capacity for backup data in GB with the minimum value is 10 GB.
  * **Storage Policy** : Select the storage policy (Storage Class) for the backup service. This field is displayed only if the VPC is running on the VMware platform.
  * **Enable PITR** : Enable/disable the PITR feature for the backup service. This feature is currently supported only for the PostgreSQL engine.

After entering all information, click **Save** to confirm backup service activation.
The backup service activation process takes 5–10 minutes and displays a **Processing** progress bar. Upon successful activation, the backup service will show as **Active** with the configured parameters.
To perform data backups for a database, users must create backup jobs, including Full Backup and Differential Backup, in order to configure a scheduled backup policy. Please refer to the detailed instructions at 7.3.2. Backup Job Management.
### 2. Update Backup Service
During usage, if you need to modify the existing Backup service settings, proceed as follows:
On the Backup service management screen, click **Update Backup** (pencil icon) next to the **Backup Service** section to open the backup service configuration update dialog.
[![Alt text](/img/migrated/DBaaS_BackupDB_edit_popup-e1764562966549-d646a978.png)](/img/migrated/DBaaS_BackupDB_edit_popup-e1764562966549-d646a978.png)
Enter the required changes and click **Save** to confirm. The update process may take approximately 5–10 minutes; during this time, the Backup service will display the **Updating** status. Once the update is completed successfully, the service will return to the **Active** status with the updated configuration applied.
### 3. Disbale Backup
⚠️
**Warning:**  
Deactivating the Backup service will permanently remove all backed-up data and cancel all existing backup jobs. After deactivation, you will no longer be able to perform database restore or point-in-time recovery (PITR).  

To deactivate the Backup service, on the Backup service management screen, click the **Delete Backup** button (trash icon) next to the **Backup Service** section to open the confirmation dialog. Enter "delete" and click **Confirm** to confirm deactivation. This process may take 5–10 minutes, during which the Backup service will display **Deleting** status. Upon successful processing, the service will return to Inactive status.
