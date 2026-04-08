---
id: "resource"
title: "Resource"
description: "Database resources include the Flavor (CPU and RAM) and Data Disk Size."
sidebar_label: "Resource"
sidebar_position: 4
---

# Resource

Database resources include the Flavor (CPU and RAM) and Data Disk Size.
The **Database Resource Management** feature enables users to monitor and adjust the resources allocated to a database, including CPU and RAM (Flavor), data disk capacity, and storage policy, to meet performance and capacity requirements during operation.
Detailed instructions are provided in the sections below.

### 1. View database resource information
On the menu bar, select **Database Platform** > select **All Database** or the menu corresponding to the appropriate database group for the cluster > click the Cluster ID > select the **Resource** tab to enter the database resource management screen.
[![](/img/migrated/view-resource-scaled-5cec940f.png)](/img/migrated/view-resource-scaled-5cec940f.png)
The database resource information is displayed with two main parts: **Current Resource** and **Available Resource**.
  * **Current Resource** : Displays the current configuration of the database cluster, including vCPUs, RAM, and data disk size.
  * **Available Resource** : Shows the maximum resource limits available for scaling the database. It also includes vCPUs, RAM, and data disk size.

### 2. Adjust Database Resource
Users can update the Flavor to scale compute resources (CPU and RAM) up or down, or increase the data disk size, within the available resource limits. Steps to perform:
On the **Database Resource Management** page, click the **Edit Resource** icon (pencil icon) next to **Database Resources** section to open the **Update Database Resource** dialog.
[![](/img/migrated/update-resource-scaled-002f98f3.png)](/img/migrated/update-resource-scaled-002f98f3.png)
Enter the required changes:
  * To modify compute resources (vCPU and RAM), select the desired Flavor from the dropdown list.
  * To increase the data disk size, enter the new value in the **Data disk size (GB)** field.

Click **Update** to apply the changes.
After confirmation, the database cluster status will change to **Resizing** , and then return to **Running** once the process is completed.
The resource update process may take 5–10 minutes. During this time, please avoid performing additional operations on the database cluster.
⚠️
**Important Notes:**
  * **Resource limits** : Users can modify database resources only within the Available Resource limits. If the new configuration exceeds the available quota, the system will display an error and prevent the change from being applied.
  * **No support to decrease data disk size**(Data disk size): The system does not support decreasing the data disk size. You can only**increase** the disk capacity; shrinking the disk is not supported.
  * **Restart database cluster** : When updating compute resource configurations, **some database engines require a database cluster restart** for the changes to take effect. The restart may be performed automatically by the system, or require manual action by the user after the resource update is completed. Since a restart may cause **temporary service interruption**. It is recommended to perform these changes during **off-peak hours**.   
Specifically, as follows: 
    * When **reducing compute resources** (CPU/RAM), the system **automatically restarts** the database service to apply the updated configuration
    * When **increasing compute resources** , the system **does not automatically perform a restart**. For PostgreSQL and ClickHouse, users must manually restart the database after the update to ensure the new configuration takes effect

### 3. Adjust Storage Policy
The Storage Policy directly impacts the I/O performance and operational cost of your database cluster. You can update the storage policy by following direction:
On the **Database Resource Management** page, click the **Edit Storage Policy** icon (pencil icon) next to **Storage Policy** section to open the **Update Storage Policy** dialog.
[![](/img/migrated/update-storage-policy-1-scaled-4642a33c.png)](/img/migrated/update-storage-policy-1-scaled-4642a33c.png)
Select a new **Storage Policy** that fits your workload requirements from the dropdown list and click **Update** to apply the changes.
The update process may take approximately 5–10 minutes. During this time, please do not perform any other operations on the database cluster.
**Recommendation** : For **production environments** , it is recommended to use a Storage Policy with a **minimum of 4,000 IOPS (4K)** to ensure stable and consistent performance.
