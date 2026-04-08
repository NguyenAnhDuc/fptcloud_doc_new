---
id: "iam"
title: "FPT Database Engine service access permissions"
description: "FPT Cloud uses the IAM module to control who can perform what actions on which resources."
sidebar_label: "FPT Database Engine service access permissions"
sidebar_position: 12
---

# FPT Database Engine service access permissions

### Overview of Identity and Access Management (IAM)

To ensure security, separation of responsibilities, and compliance in the cloud environment, FPT Cloud uses the IAM module to control who can perform what actions on which resources.

IAM allows managing access permissions for multiple users, groups, and DBaaS components in FPT Cloud Portal, while enforcing the principle of least privilege by assigning Roles to users through User Groups, within the scope of Tenant and VPC.

**_Principle of least privilege_**: Grant only the minimum permissions necessary to complete a task. For example: If you only need to view logs, do not grant configuration or delete permissions.

### Main IAM components

| Component | Description |
| --- | --- |
| Role | A set of permissions that defines what operations a user can perform on DBaaS resources. |
| Permission | A specific permission allowing a particular action such as viewing, creating, editing, or deleting a resource. |
| User Group | A group of users sharing the same role and access scope (Tenant/VPC). |
| IAM User | An individual identity added to a Tenant and granted permissions through Group/Role. |

### Permission model for FPT Database Engine service

To perform database provisioning, operational, and management operations and related services, users must be granted appropriate IAM permissions. Every operation on the FPT Database Engine service is controlled by corresponding permissions. If a user is not assigned the required permission, that operation will not be available.

Permissions for the FPT Database Engine service are categorized by business/function group, as presented in the table below:

**1. FDE Database Engine service management permissions**

| Permission name | Operation type | Description |
| --- | --- | --- |
| manageDatabase:ProvisionBackend | Create | Permission to activate (activate) the FPT Database Engine service in the VPC. |
| manageDatabase:DeactiveBackend | Delete | Permission to deactivate the FPT Database Engine service in the VPC. |

**2. Database management permissions**

| Permission name | Operation type | Description |
| --- | --- | --- |
| manageDatabase:List | View | Permission to view the list of databases. |
| manageDatabase:Create | Create | Permission to create a new database. |
| manageDatabase:View | View | Permission to view database details. |
| manageDatabase:Management | Edit | Permission to operate the database: start, stop, restart. |
| manageDatabase:UpdateResource | Edit | Permission to update database resources (CPU, RAM, storage, etc.). |
| manageDatabase:Configuration | Edit | Permission to change database configuration (parameters, scaling configuration, etc.). |
| FDE:hide_admin_pw | View | Permission to block viewing the database admin password. |
| manageDatabase:Delete | Delete | Permission to delete a database. |

**3. Backup & Restore permissions**

| Permission name | Operation type | Description |
| --- | --- | --- |
| manageDatabase:ListBackup | View | Permission to view database backup information. |
| manageDatabase:EnableBackup | Create | Permission to enable the Backup & Restore feature for a database. |
| manageDatabase:DeleteBackup | Edit | Permission to disable the Backup & Restore feature for a database. |
| manageDatabase:CreateJobBackup | Create | Permission to create a backup job for a database. |
| manageDatabase:ViewJobBackup | View | Permission to view backup job details. |
| manageDatabase:RunNowJobBackup | Create | Permission to manually create a backup snapshot for a database. |
| manageDatabase:EditJobBackup | Edit | Permission to edit a backup job. |
| manageDatabase:DeleteJobBackup | Delete | Permission to delete a backup job. |
| manageDatabase:ListRestore | View | Permission to view the list of restorable backups. |
| manageDatabase:Restore | Create | Permission to restore a database from a backup or to a specific point in time. |

**4. DB Proxy management permissions**

| Permission name | Operation type | Description |
| --- | --- | --- |
| manageDatabase:ListProxy | View | Permission to view the list of DB Proxies for a database. |
| manageDatabase:CreateProxy | Create | Permission to create a DB Proxy for a database. |
| manageDatabase:DeleteProxy | Delete | Permission to delete a DB Proxy for a database. |

**5. Notification permissions**

| Permission name | Operation type | Description |
| --- | --- | --- |
| manageDatabase:ListNotification | View | Permission to view notification configuration for a database. |
| manageDatabase:CreateNotification | Create | Permission to enable system notifications for a database. |
| manageDatabase:DeleteNotification | Delete | Permission to disable system notifications for a database. |

**6. Monitor permissions**

| Permission name | Operation type | Description |
| --- | --- | --- |
| manageDatabase:Monitor | View | Permission to monitor database performance and status. |

**7. Reporting permissions**

| Permission name | Operation type | Description |
| --- | --- | --- |
| manageDatabase:ReportConfig | Edit | Permission to configure the schedule for receiving database activity reports. |

### Configuring FPT Database Engine service access permissions

To configure access permissions and declare user groups, please refer to the details in the [Role management](/docs/fpt-database-engine/managed-fpt-database-engines-new/)/ and [User Group management](/docs/fpt-database-engine/managed-fpt-database-engines-new/)/ sections.
