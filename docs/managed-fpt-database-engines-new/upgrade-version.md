---
id: "upgrade-version"
title: "Upgrading the database version"
description: "The Upgrade database version feature in FPT Database Engine currently allows users to upgrade MariaDB databases from the current version to MariaDB 10.9."
sidebar_label: "Upgrading the database version"
sidebar_position: 25
pagination_next: null
---

# Upgrading the database version

The **Upgrade database version** feature in FPT Database Engine **currently allows** users to **upgrade MariaDB databases from the current version to MariaDB 10.9**. Upgrading lets you take advantage of performance improvements, security enhancements, and new features of the higher version.

### Scope & limitations

- Applies to MariaDB only. This feature is not displayed for non-MariaDB databases.
- Only supports upgrading to MariaDB 10.9.
- Downgrade or upgrade to other versions is not supported.

### Prerequisites

- Ensure you have IAM permissions to manage and update the cluster.
- Disconnect all applications currently connected to the database.
- Perform a full backup before upgrading to enable recovery if needed.
- Verify that your application is compatible with the target version.

### Detailed instructions

#### Step 1: Access the database detail page

Log in to FPT Cloud Portal and go to the **Database List** page. Select the MariaDB cluster you want to update. On the cluster's **Overview** page, you will see the current version and an **Upgrade** icon next to it.

[![](/img/migrated/view-upgrade-action-scaled-4bc6cce2.png)](/img/migrated/view-upgrade-action-scaled-4bc6cce2.png)

#### Step 2: Perform the version upgrade

On the **Overview** page, find and click the **Upgrade** icon next to the version information. A dialog will open showing the current version and the available target version.

[![](/img/migrated/upgrade-version-mariadb-scaled-9e7d5cfb.png)](/img/migrated/upgrade-version-mariadb-scaled-9e7d5cfb.png)

Select the version to upgrade to and enter the confirmation keyword in the input field. Click **Upgrade** to begin the upgrade process.

During the process, the database cluster status will change to **"Updating"**. Do not attempt to connect or make changes while the update is in progress. The cluster will automatically restart during the update.

When the upgrade is complete, the status will return to **"Running"** and the database will have been upgraded to the new version.

### Important notes

- **Cannot be undone**: Version upgrades cannot be rolled back; ensure you have a complete backup.
- **Disconnect applications**: All application connections must be stopped before upgrading.
- **Service impact**: The cluster will restart, causing a temporary disruption.
- If the update fails, use the backup to restore the previous state.
