---
id: "manage-restore"
title: "Manage restore"
description: "Steps to create and manage restore points for FPT Smart Cloud Database Engine."
sidebar_label: "Manage restore"
sidebar_position: 15
draft: true
---

# Manage restore

## Create a restore point

To use the restore feature you need:
- A Database Engine that has been successfully provisioned.
- At least one backup job that has been created and run at a scheduled time.

1. Select **Database Engine** > select a **Cluster ID** > on **Database Detail**, select the **Restore** tab.
[![](/img/migrated/6.3_buoc-1-0a621b7a.png)](/img/migrated/6.3_buoc-1-0a621b7a.png)

2. Once a backup has run, the **Available Restore point** tab displays a **Restore Point** with a backup type.
   - A Full job creates a restore point with backup type **Full**.
   - A Diff job creates a restore point with backup type **Diff**.
[![](/img/migrated/6.3-buoc1.1-69d07b92.png)](/img/migrated/6.3-buoc1.1-69d07b92.png)

3. In the **Actions** column click the three-dot menu and select **Restore**.
[![](/img/migrated/6.3-buoc1.2-8262cfcb.png)](/img/migrated/6.3-buoc1.2-8262cfcb.png)
[![](/img/migrated/6.3-buoc1.3-028093c2.png)](/img/migrated/6.3-buoc1.3-028093c2.png)

4. The **Restore Database** popup appears. Select a Preset Configuration or enter a Custom Configuration for the restored database, then click **Restore**.
[![](/img/migrated/6.3-buoc1.4-c1e933e8.png)](/img/migrated/6.3-buoc1.4-c1e933e8.png)
[![](/img/migrated/6.3-buoc1.5-42e59be4.png)](/img/migrated/6.3-buoc1.5-42e59be4.png)

5. After a restore is successfully created, a new Cluster ID named "Restore + new Cluster ID from old Cluster ID" appears on the Database Management page.
[![](/img/migrated/6.3-buoc1.6-4b4c88c3.png)](/img/migrated/6.3-buoc1.6-4b4c88c3.png)
