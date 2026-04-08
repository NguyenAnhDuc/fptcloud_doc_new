---
id: "vertical-scaling"
title: "Vertical scaling"
description: "The Vertical Scaling feature allows automatic adjustment of database resources including vCPU, RAM, and Storage in real time, based on performance requirements or actual usage levels."
sidebar_label: "Vertical scaling"
sidebar_position: 36
---

# Vertical scaling

The **Vertical Scaling** feature allows automatic adjustment of database resources including vCPU, RAM, and Storage in real time, based on performance requirements or actual usage levels. This feature helps the system proactively expand resources when needed, ensuring flexibility, operational efficiency, and requiring no manual intervention from users.

### Required permissions

| Permission name | Operation type | Description |
| --- | --- | --- |
| manageDatabase:Configuration | Edit | Permission to change database configuration (parameters, scaling configuration, etc.) |

### 1. Enable the vertical scaling service

To enable the Vertical Scaling service, you can do so directly during the Additional Service configuration step when initializing the database (see [Creating a database](/docs/fpt-database-engine/managed-fpt-database-engines-new/)/ for details), or enable it after the database has been successfully initialized by following the instructions below.

#### Prerequisites

To activate Vertical Scaling, you must enable the Notification service and complete the configuration of an Email or Telegram recipient list for receiving scaling-related alerts. If Notification has not been configured, the system will display a dialog requiring configuration before continuing.

[![](/img/migrated/scale-noti-warning-scaled-d20a3fb7.png)](/img/migrated/scale-noti-warning-scaled-d20a3fb7.png)

Click **Go to Notification** to navigate to the **Notification** tab and configure according to the instructions in the [Notification](/docs/fpt-database-engine/managed-fpt-database-engines-new/)/ section.

#### Step 1: Access the vertical scaling feature

Log in to FPT Cloud Portal. From the main menu, select "**Database Platform**" > "**All Databases**". Click the ID of the database cluster to manage > switch to the **Vertical Scaling** tab to access the Vertical Scaling configuration management page. If the service has not been activated, the **Vertical Scaling** screen will display the initial state (**Inactive**).

[![](/img/migrated/vertical-scaling-inactive-scaled-d7dc0524.png)](/img/migrated/vertical-scaling-inactive-scaled-d7dc0524.png)

#### Step 2: Enable the service

After the database cluster is created successfully, if Vertical Scaling has not been activated, the service status will be **Inactive**. Click the **Enable Vertical Scaling** icon (gear icon) in the **Service Information** section to open the confirmation dialog.

Click **Confirm** on the dialog to activate the service. After completion, the service will transition to **Active** status as follows:

[![](/img/migrated/scaling-enabled-scaled-c48b62a6.png)](/img/migrated/scaling-enabled-scaled-c48b62a6.png)

After activation, you need to set up CPU/RAM or Storage resource thresholds as the basis for the system to automatically expand resources. Details are described in sections 2 and 3.

### 2. Set up compute resource scaling

On the **Vertical Scaling** screen, click **Add Flavor Scaling** (plus icon) in the **Compute Scaling** section. The system will display the **Add Compute Scaling** dialog to configure automatic vCPU and RAM scaling for the database.

[![](/img/migrated/add-compute-scaling-1-scaled-8921f622.png)](/img/migrated/add-compute-scaling-1-scaled-8921f622.png)

Parameters to configure include:

- **CPU Threshold (%)**: The CPU threshold determines the point at which the system will trigger resource scaling based on CPU usage. For example: if the CPU threshold is set to 60%, the system will automatically trigger scaling when CPU usage exceeds 60%.
- **RAM Threshold (%)**: Similar to CPU, the RAM threshold determines the trigger point for resource scaling when memory usage exceeds this value. For example: when RAM usage exceeds 50%, the system will automatically expand resources.
- **Tracing Interval**: The time interval (in minutes) at which the system checks resource usage. For example: selecting 5 minutes → the system will monitor average CPU/RAM every 5 minutes.
- **Current flavor**: Displays the current instance configuration, including the number of CPUs and RAM capacity allocated (e.g., Medium-4 (2 vCPU - 4GB RAM)).
- **List flavor scaling**: Select one or more flavors the system is allowed to scale up to. Flavors in this list will be selected sequentially when thresholds are exceeded. For example: Current flavor: Medium-4 and List flavor scaling: Medium-8, Large-2 → When CPU or RAM exceeds the threshold, the system will upgrade to Medium-8, then may upgrade to Large-2 if it continues to exceed the threshold.

After completing configuration, click **Add** to save. The system begins monitoring resources and automatically scales when conditions are met.

After successful configuration, users can:

- **Edit configuration**: Click Edit Compute Scaling (pencil icon in the Compute Scaling section) to adjust the configured values.
- **Delete configuration**: Click Delete Compute Scaling (trash icon in the Compute Scaling section) to stop the automatic resource scaling mechanism.

> **Important notes:**
> - **Resource limits**: Scaling can only be performed within the Available Resource quota. If this limit is exceeded, the system will not scale.
> - **Trigger threshold**: Do not set the threshold too low (below 60%) to avoid the system scaling continuously.
> - **Service restart (Restart database cluster)**: Some engines such as PostgreSQL and ClickHouse require restarting the database when increasing compute resources to apply the new configuration. After the scaling process is complete, users need to manually perform an additional restart for the new configuration to take effect.
> - **Regularly monitor** CPU, RAM usage to proactively manage resource expansion requirements.

### 3. Set up storage scaling

On the Vertical Scaling configuration management screen, click the **Add Storage Scaling** icon (plus icon) in the **Storage Scaling** section. The system will display the **Add Storage Scaling** dialog to set up the automatic storage resource expansion mechanism for the database.

[![](/img/migrated/add-storage-scaling-scaled-284acda6.png)](/img/migrated/add-storage-scaling-scaled-284acda6.png)

Parameters to configure include:

- **Storage Threshold (%)**: The storage threshold determines the trigger point for scaling when storage usage exceeds this value. For example: when storage usage exceeds 55%, the system will automatically trigger storage resource expansion.
- **Storage Scale (%)**: The percentage of capacity to expand. For example: when the expansion ratio is 20% → The system will automatically increase capacity by 20% of the current total capacity (if current capacity is 100 GB → after scaling, new capacity is 120 GB).

After configuration, click **Add** to confirm saving the configuration. The system will automatically monitor storage usage at the default interval. When usage exceeds the **Storage Threshold**, the system will expand capacity by the configured **Storage Scale** ratio. The expansion occurs online and does not disrupt service.

After successful configuration, users can:

- Edit configuration: Click Edit Storage Scaling (pencil icon in the Storage Scaling section) to adjust the configured values.
- Delete configuration: Click Delete Storage Scaling (trash icon in the Storage Scaling section) to stop the automatic resource scaling mechanism.

**Notes:**

- **Resource limits**: Scaling can only be performed within the Available Resource quota. If the limit is exceeded, the system will not scale.
- **Scaling frequency**: Do not set the threshold too low (e.g., below 70%) to avoid continuous scaling that wastes resources.
- **Cannot shrink**: After expansion, storage capacity cannot be reduced back.
