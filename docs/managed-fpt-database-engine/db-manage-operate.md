---
id: "db-manage-operate"
title: "Db Manage Operate"
description: "The Database Provisioning and Operation feature enables users to create, configure, operate, and delete databases in a F"
sidebar_label: "Db Manage Operate"
sidebar_position: 19
---

# Db Manage Operate

The Database Provisioning and Operation feature enables users to create, configure, operate, and delete databases in a FPT Database Engine environment.
Operations in this group apply at the database resource level and require appropriate IAM permissions.
**Prerequisites:**
  * FPT Database Engine must be activated within the VPC.
  * The user must be assigned a role with database management permissions.

**Required Permissions:**  
| Permissions  | Action Type  | Description  |  
| --- | --- | --- |  
| manageDatabase:List  | View  | Allows viewing the list of databases.  |  
| manageDatabase:Create  | Create  | Allows provisioning new databases.  |  
| manageDatabase:View  | View  | Allows viewing database details.  |  
| manageDatabase:Management  | Edit  | Allows operational actions such as start, stop, and restart.  |  
| FDE:hide_admin_pw  | View  | Allows blocking to view the database administrator password.  |  
| manageDatabase:Delete  | Delete  | Allows deleting a database.  |  
To manage and operate database, please refer to the detailed instructions belows:
  * [View Database List](../managed-fpt-database-engine/index.md): View all database instances you have access to, along with their status, configuration, and key information.
  * [Provision a Database](../managed-fpt-database-engine/index.md): Create and provision a new database instance by selecting the database engine, version, flavor, and other configuration options.
  * [Connect to a Database](../managed-fpt-database-engine/index.md): Learn how to obtain connection information and connect to a database instance from applications or client tools.
  * [Database Operations](../managed-fpt-database-engine/index.md): Perform common operational tasks such as start, stop, restart, configuration management, and monitoring.
  * [Upgrade Database Version](../managed-fpt-database-engine/index.md): Upgrade the database engine version to access new features, improvements, and security updates.