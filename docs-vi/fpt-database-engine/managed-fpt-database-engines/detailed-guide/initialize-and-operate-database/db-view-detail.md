---
id: "db-view-detail"
title: "Db View Detail"
description: "The **View Database Cluster Details** feature allows users to:"
sidebar_label: "Db View Detail"
sidebar_position: "22"
---

# Db View Detail

The **View Database Cluster Details** feature allows users to:
  * Monitor the operational status of the database cluster.
  * Review current resource configurations (CPU, RAM, Storage).
  * Check database engine, version, and network information.
  * Identify system warnings (for example, restart required after compute scale-up).
  * Quickly access related management functions.

To view database cluster details, log in to the FPT Console Portal, then navigate to **Database Platform** > **All Database**. Select the Cluster ID of the target database cluster and open the **Overview** tab to access the detailed information page.
[![Alt text](/img/migrated/overview-scaled-11bc300a.png)](/img/migrated/overview-scaled-11bc300a.png)
All core information of the database cluster is displayed in the following sections:  
| Section  | Information  |  
| --- | --- |  
| Overview (Header Section)  | Displays key information of the database cluster, including: 
* Database Cluster ID.
* Cluster status (for example: Running, Stopped).
* Current resource configuration: vCPU – RAM – Storage.
* Database engine type (for example: PostgreSQL, MySQL).
* Engine version (for example: 8.0.42, 17).
* Creation time.
 |  
| Basic Information  | Provides information required for application connectivity and infrastructure validation, including: 
* Cluster name.
* Database type.
* Version.
* Endpoint (Domain/IP)
* Port
* Network/Subnet
 |  
| Service Information  | Displays the enable/disable status of accompanying services, including: Backup service, Monitoring service, and Vertical Scaling service.  |  
| Engine Information  | Shows connection information for the default database, including: 
* Default database name.
* Default account credentials (username and password).
 |  
| Data Nodes Configuration  | Displays the configuration of nodes within the database cluster, including: 
* Storage policy.
* Number of nodes.
* Current resource configuration (vCPU – RAM – Storage).
 |  
| List Instances  | Lists all instances (nodes) belonging to the database cluster, enabling per-node status monitoring and troubleshooting. The information includes 
* Instance name
* Role: Primary (True) / Replica (False), if applicable
* Resource configuration
* Status
* Creation time
* Last update time
 |  
**Database Cluster Restart Warning:**
When the database cluster is in a restart-required state (for example, after a compute resource adjustment), the system automatically displays:
  * A warning dialog upon accessing the cluster detail page.
  * A warning banner in the Header section.

[![Alt text](/img/migrated/overview-with-warning-popup-scaled-ffe6ebc4.png)](/img/migrated/overview-with-warning-popup-scaled-ffe6ebc4.png)
Purpose of the Warning:
  * To highlight that although the database cluster is still running, it is operating with an incomplete or unapplied configuration.
  * To ensure users are aware and prepared before performing a restart operation.

Once the restart is completed—either manually by the user via the Restart function on the Portal or automatically by the system as part of another operation requiring a restart—the warning dialog and banner will be removed.
