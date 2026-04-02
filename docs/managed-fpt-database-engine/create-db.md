---
id: "create-db"
title: "Create a database"
description: "The **Database Provisioning** function enables rapid deployment of various database engines on the FPT Database Engine p"
sidebar_label: "Create a database"
sidebar_position: 21
---

# Create a database

The **Database Provisioning** function enables rapid deployment of various database engines on the FPT Database Engine platform without manual infrastructure setup. Provisioning a database cluster involves entering configuration details for the engine type, network, cluster identity, and optional services like backups and auto-scaling. This guide outlines the multi-step process.
### Step 1: Open the create database page
Access the **Database List** page corresponding to the type of database you wish to create (see section [View Database List](../managed-fpt-database-engine/index.md) for details), select **Create a Database Engine** or **Create** to start provisioning a new database. The **Create new database** page opens and provides configuration options to define and deploy a new database in the FPT Database Engine environment. Provisioning progress includes 3 steps:
  * Step 1 – Database Configuration
  * Step 2 – Additional Service Configuration
  * Step 3 – Review & Create

### Step 2: Define database configuration
[![](/img/migrated/DBaaS_ProvisionDB_step1-1-02908cce.png)](/img/migrated/DBaaS_ProvisionDB_step1-1-02908cce.png)
This screen is the first step of the database provisioning workflow. It is used to define core database parameters, including engine selection, networking, credentials, and compute/storage configuration. Depending on the engine selected, some information fields may vary.
Describe the fields on the screen:  
| 1. Section General Information  |  
| --- |  
| Field  | Description  |  
| Engine Type  | Select the database engine. Depending on the selected menu, the system will display the corresponding options: 
* Relational Databases will display the values: "PostgreSQL", "MySQL", "MariaDB", "SQL Server"
* NoSQL will display the values: "MongoDB", "Cassandra", "Redis"
* Search Engine will display the values: "OpenSearch"
* Data Streaming will display the values: "Kafka"
* Time Series Database will display the values: "TimescaleDB"
* OLAP will display the values: "Clickhouse"
 |  
| Edition  | Select the engine edition, including: "Enterprise", "Standard", "Web".   
This field is only displayed for "SQL Server" as the engine type.  |  
| Engine Version  | Select a supported engine version based on the Database Engine Version Policy.  |  
 |  
| 2. Section Network Information  |  
| Field  | Description  |  
| Edge Gateway  | Select an Edge Gateway to route network traffic between the database and other systems.  |  
| Network  | Select the Network/Subnet where the database instance will be deployed. This defines access scope and network isolation.  |  
| 3. Section Engine Information  |  
| Field  | Description  |  
| Cluster Name  | Logical name of the database cluster. The name must be 8 to 25 characters long, start with a letter, and contain only letters, numbers, and hyphens (-).  |  
| Database Name  | Default database name created within the cluster. The name be 8 to 25 characters long, start with a lowercase letter, and contain only lowercase letters, numbers, and underscores (_).   
This field is not displayed for Redis or Kafka engine type.  |  
| VHost Name  | Default VHost name created within the cluster. The name must be 8 to 25 characters long, start with a lowercase letter, and contain only lowercase letters, numbers, and underscores (_).  
This field is only displayed for RabbitMQ as the engine type.  |  
| Password/ Confirm Password  | Password for the database administrative account. The password must be 12 to 20 characters long, and include uppercase, lowercase, number, and special character.  
**Spaces and the following special characters are not allowed:** / \ " ' < > ? % ; : $ ! [ ] { } ( ) , & +   |  
| 4. Section Node Configuration  |  
| Field  | Description  |  
| Storage Policy  | Select a Storage Policy that defines storage performance (IOPS). It is recommended to select IOPS ≥ 4,000 for production environments to ensure performance and stability.  |  
| High Availability  | Enable High Availability (HA) to deploy a multi-node cluster with automatic failover.   
This field is not displayed for Cassandra engine type.  ⚠️ **Important notes on using HA for ClickHouse Engine:**
  * When creating a**ClickHouse database cluster with HA** enabled, the service will automatically create replicas for each shard. However, to use the replication feature, users must create tables that support replication. For detailed information, refer to the official ClickHouse documentation on [Replicated* table engines | ClickHouse Doc](https://clickhouse.com/docs/engines/table-engines/mergetree-family/replication)
  * **Replication** is only supported for tables in the **MergeTree** family, which includes the following table types: 
    * ReplicatedMergeTree
    * ReplicatedSummingMergeTree
    * ReplicatedReplacingMergeTree
    * ReplicatedAggregatingMergeTree
    * ReplicatedCollapsingMergeTree
    * ReplicatedVersionedCollapsingMergeTree
    * ReplicatedGraphiteMergeTree
  * **Replication** works **at the table level** , not at the server level. This means that both replicated and non-replicated tables can coexist on the same server.
  * Replication is independent of sharding. Each shard has its own independent replication mechanism. For example, if a user creates a **MergeTree** table (not ReplicatedMergeTree), the table will not be replicated, and data will only be on the node that it is written.

 |  
| Number Of Nodes  | Select the number of nodes for the database cluster.   
This field is displayed only when the engine type is Cassandra.  |  
| Flavor  | Select a Flavor to define compute resources per node (vCPU, RAM).  |  
| Data Disk Size (GB)  | Allocated data disk size for the database. The size is measured in GB, with a minimum value of 20 GB.  |  
After entering all required information, click **Next Step** to proceed to configuring the associated services.
### Step 3: Configure Additional Services
[![](/img/migrated/create-db-step-2-2-d636b5e2.png)](/img/migrated/create-db-step-2-2-d636b5e2.png)
This screen allows you to configure optional managed services for the database cluster, including backup, auto scaling, and notifications, to enhance availability, scalability, and operational visibility.
**It is recommended to enable Backup and Auto Scaling services during database creation to ensure data protection, stability, and continuous system operation.**
Describe the fields on the screen:
  * **Enable Additional Service** : Enable or disable add-on services for the database cluster, including backup and auto scaling. If the field is disabled, the database cluster will be created without these services. You can enable the add-on services after the cluster is created successfully.
  * **Backup Service Configuration** : Activating this service enables periodic full database backups to protect against data loss. The required fields include:

  
| Field  | Description  |  
| --- | --- |  
| Backup Capacity (GB)  | Allocated storage capacity for backups. The size is measured in GB, with a minimum value of 10 GB.  |  
| Storage Policy  | Backup storage policy defining performance and durability characteristics.  |  
| Backup Job Name  | Logical name for the backup job. The name must be 6 to 25 characters long, and contain only letters, numbers, spaces, hyphens (-) and underscores (_).  |  
| Backup Retention  | The number of full database backups to retain. When the number of backups exceeds this limit, the oldest backups are automatically deleted.  |  
| Hour / Minute / Day of Week  | Configure the recurring backup schedule: 
* Hour: Backup execution hour.
* Minute: Backup execution minute.
* Day of Week: Backup execution day(s).
**Warning** : For the Kafka engine, performing a backup may cause a temporary disruption. You should schedule backups during off-peak hours to minimize impact on your service.   |  
  * **Vertical Scaling Service Configuration:** Activating this service allows the system to automatically scale compute or storage resources when usage thresholds are exceeded. The required fields include:

  
| 1. Section Compute Scaling  |  
| --- |  
| Field  | Description  |  
| CPU Threshold (%)  | CPU usage threshold that triggers auto scaling.  |  
| RAM Threshold (%)  | Memory usage threshold that triggers auto scaling.  |  
| Tracing Interval  | Monitoring interval used to evaluate resource usage before scaling.  |  
| Current Flavor  | Current compute flavor assigned to the database node.  |  
| List Flavor Scaling  | List of target flavors that the system can scale up to when auto scaling is triggered. The list will be sorted in ascending order, from the smallest to the largest value.  |  
 |  
| 2. Section Storage Scaling  |  
| Field  | Description  |  
| Current Storage (GB)  | Current allocated database storage size.  |  
| Storage Threshold (%)  | Storage usage threshold to trigger automatic scaling.  |  
| Storage Scale (%)  | Percentage of storage increase applied per scaling operation.  |  
  * **Maintenance Window** : defines the time period during which the system is allowed to perform maintenance activities:
    * **Day of Week** : The day of the week on which maintenance is performed. Available options range from "Monday" to "Sunday".
    * **Start Time** : the time at which maintenance is allowed to start on the selected day. Maintenance duration: 1 hour, starting from the configured Start Time.
  * **Notification Recipients List** : Enter a list of email addresses to receive notifications when backup or scaling events occur. You can add multiple emails by clicking the "+" button to include a new email in the list.

After entering all required information, click **Next Step** to proceed to the review step and confirm database creation.
### Step 4: Review & Create
Users should review all configuration settings for the database before confirming creation:
  * To make changes, click **Back** to return to the previous step and update the information.
  * If the information is correct, click **Create** to confirm the creation of the database cluster.

After confirmation:
  * The system checks resources, displays a creation notification, and starts deploying the new database cluster based on the provided configuration.
  * Users are redirected to the Database list, where the newly created database appears at the top in **Processing** status.

The creation process typically takes 5–7 minutes. Once completed successfully, the database transitions to Running status. **Note** : If the database creation fails, please delete the failed database and create it again.
To connect to the newly created database, refer to section [Connect to the Database](../managed-fpt-database-engine/index.md).
To operate the database, refer to section [Database Operations](../managed-fpt-database-engine/index.md).
