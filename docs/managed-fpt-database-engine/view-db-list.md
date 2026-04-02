---
id: "view-db-list"
title: "View Db List"
description: "The Database List page provides a consolidated view of all database instances/clusters running in the FPT Database Engin"
sidebar_label: "View Db List"
sidebar_position: 20
---

# View Db List

The Database List page provides a consolidated view of all database instances/clusters running in the FPT Database Engine environment, enabling users to easily monitor status, review configuration, and perform common management operations on each database.
To view the list of database clusters, sign in to the FPT Cloud Portal. From the main menu, select **Database Platform > All Databases**, or navigate to the menu corresponding to a specific database category, such as:
  * **Relational Databases** : PostgreSQL, MySQL, MariaDB, Microsoft SQL Server.
  * **NoSQL** : MongoDB, Cassandra, Redis.
  * **Search Engine** : OpenSearch.
  * **Data Streaming** : Kafka.
  * **Time Series Database** : TimescaleDB.
  * **OLAP** : Clickhouse.

The **Database List** page displays all existing database clusters along with their current status and key information required for monitoring and administration.
  * **No databases available** : The list will be empty and a database provisioning option will be displayed, allowing users to provision a new database.

[![](/img/migrated/dblist_nodb-scaled-af2686bc.png)](/img/migrated/dblist_nodb-scaled-af2686bc.png)
  * **Databases available** : The list shows all databases deployed within the VPC, providing high-level details for ongoing management and operations (start/stop/restart/delete).

[![](/img/migrated/db-list-warning-a77a8c3c.png)](/img/migrated/db-list-warning-a77a8c3c.png)
Database list informations:  
| Column  | Description  |  
| --- | --- |  
| ID  | Displays the database cluster ID.   
**Warning for Restarting database cluster:**   
When the database compute resources (CPU/RAM) are adjusted but the database cluster has not yet been restarted to apply the new configuration, the system displays a warning icon.   
To ensure that the updated configuration takes effect and to maintain optimal performance and cluster stability, users must restart the database. It is recommended to perform the restart during periods of low traffic.   
Once the restart is completed and the new configuration is successfully applied, the warning icon will no longer be displayed.   |  
| Name  | Displays the database cluster name.  |  
| Type  | Displays the database engine type.  |  
| Tag  | Displays the database engine type.  |  
| Version  | Displays the database version and lifecycle status: 
* Beta version: labeled "Beta"
* General Availability (GA): Displays normally, no tag
* Deprecated version: labeled "Dep."
* End of Support version: labeled "EoS"
 |  
| Node  | Displays the number of nodes in the database cluster.  |  
| Status  | Displays the current database status (Running, Stopped, Warning, ...).  |  
| Backup  | Indicates whether Backup is enabled.  |  
| Vertical scaling  | Indicates whether Vertical Scaling is enabled.  |  
| Monitoring  | Indicates whether Monitoring is enabled.  |  
| Created at  | Displays the database creation timestamp.  |  
| Action  | Displays available actions for the database (Start, Stop, Restart, Delete, Resize, …).  |
