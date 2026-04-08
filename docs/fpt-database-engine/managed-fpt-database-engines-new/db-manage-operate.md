---
id: "db-manage-operate"
title: "Database provisioning and operations"
description: "The database provisioning and operations function group allows users to provision, configure, operate, and delete databases."
sidebar_label: "Database provisioning and operations"
sidebar_position: 19
---

# Database provisioning and operations

The **database provisioning and operations** function group allows users to provision, configure, operate, and delete databases in the FPT Database Engine environment.

Operations in this group apply at the database resource level and require users to be assigned corresponding IAM permissions.

**Prerequisites:**

- The FPT Database Engine service has been activated in the VPC.
- The user is assigned a role with database management and operations permissions.

**Required permissions:**

| Permission name | Operation type | Description |
| --- | --- | --- |
| manageDatabase:List | View | Permission to view the list of databases. |
| manageDatabase:Create | Create | Permission to create a new database. |
| manageDatabase:View | View | Permission to view database details. |
| manageDatabase:Management | Edit | Permission to operate the database: start, stop, restart. |
| FDE:hide_admin_pw | View | Permission to block viewing the database admin password. |
| manageDatabase:Delete | Delete | Permission to delete a database. |

To manage and operate databases, please refer to the detailed instructions in the following sections:

- [View database list](../managed-fpt-database-engines-new/index.md): Displays the list of databases you have access to, including status, configuration, and important information.
- [Create a database](../managed-fpt-database-engines-new/index.md): Provision a new database by selecting the engine, version, flavor, and other necessary configurations.
- [Connect to a database](../managed-fpt-database-engines-new/index.md): Learn how to get connection information and connect to the database from your application or client tools.
- [Database operations](../managed-fpt-database-engines-new/index.md): Perform common operational tasks such as starting, stopping, restarting, managing configuration, and monitoring the database.
- "Database version upgrade": Upgrade the database engine version to use new features, performance improvements, and security patches.
