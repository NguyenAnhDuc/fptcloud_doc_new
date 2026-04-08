---
id: "xem-thong-tin-snapshot"
title: "View details snapshot"
sidebar_label: "View details snapshot"
description: "View details snapshot"
sidebar_position: 29
---

# View details snapshot

To view snapshot information for a connector, follow these steps:

**Step 1:** From the menu bar, select **Data Platform** > **Workspace Management** > **Workspace name**

**Step 2:** Under **My services**, select **CDC service**

**Step 3:** On the **CDC service** detail screen > Select the **Connectors** tab

On the Connectors list screen, you can view the snapshot information for each connector:

  * **Snapshot Status column**: Displays the current snapshot status
    * Only displayed for source connectors: MySQL, MariaDB, PostgreSQL, SQL Server
    * Other connectors (Oracle, etc.) display "-"
  * **Actions menu > Snapshot**: Allows you to perform snapshot management operations
    * Only available for source connectors that support incremental snapshot
