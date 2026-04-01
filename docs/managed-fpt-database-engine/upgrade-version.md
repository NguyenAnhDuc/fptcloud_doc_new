---
id: "upgrade-version"
title: "Upgrade Version"
description: "The **Upgrade Database Engine Version** feature in FPT Database Engine **allows** users to **upgrade a MariaDB database "
sidebar_label: "Upgrade Version"
sidebar_position: 25
pagination_next: null
---

# Upgrade Version

The **Upgrade Database Engine Version** feature in FPT Database Engine **allows** users to **upgrade a MariaDB database from the current version to MariaDB 10.9**. Upgrading enables you to take advantage of performance improvements, enhanced security, and new features in the higher version.
### Scope & Limitation
  * MariaDB only: Databases other than MariaDB will not display this feature.
  * Supported version: Only upgrades to MariaDB 10.9 are supported.
  * Downgrades or upgrades to other versions are not supported.

### Prerequisites
  * Ensure you have IAM permissions to manage and update the database cluster.
  * All applications or services connected to the database should be disconnected.
  * Create a full backup before upgrading so you can recover if needed.
  * Verify that your applications support the target version.

### Detailed instructions
#### Step 1: Open the Database Overview page
Log in to the FPT Cloud Portal and navigate to **Database List**. Choose MariaDB that you want to upgrade from your list of clusters. On the cluster’s **Overview** page, you can see the current version and an **Upgrade** icon next to it.
[![](/img/migrated/view-upgrade-action-scaled-4bc6cce2.png)](/img/migrated/view-upgrade-action-scaled-4bc6cce2.png)
#### Step 2: Upgrade version
On the **Overview** page, click the **Upgrade** icon next to the version information. A dialog opens showing the current version and the target version(s) available.
[![](/img/migrated/upgrade-version-mariadb-scaled-9e7d5cfb.png)](/img/migrated/upgrade-version-mariadb-scaled-9e7d5cfb.png)
Select the target version and enter the confirmation keyword in the input field. Select **“Upgrade”** to start the upgrade process.
During the operation, the database cluster status changes to **“Updating”**. Do not attempt to connect or make changes while the update is in progress. The cluster will automatically restart as part of the upgrade.
After the upgrade completes successfully, the status returns to **“Running”** , and the database is upgraded to the new version.
#### Important Considerations
  * **Irreversible** : Version upgrades cannot be undone; ensure backups are complete.
  * **Disconnect Clients** : All application connections must be stopped before upgrading.
  * **Service Impact** : The database cluster will be restarted, causing temporary downtime.
  * If the upgrade fails, use a backup to restore the previous state.
