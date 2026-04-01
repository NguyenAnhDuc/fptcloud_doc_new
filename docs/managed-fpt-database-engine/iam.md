---
id: "iam"
title: "Iam"
description: "To ensure security, compliance, and separation of duties in a cloud environment, FPT Cloud uses an Identity and Access M"
sidebar_label: "Iam"
sidebar_position: 12
---

# Iam

### Identity and Access Management (IAM) Overview
To ensure security, compliance, and separation of duties in a cloud environment, FPT Cloud uses an Identity and Access Management (IAM) module to control who can do what, and on which resources.
IAM enables centralized permission management across users, groups, and DBaaS components in the FPT Cloud Portal, enforcing the principle of least privilege by assigning roles to users through groups within a Tenant and VPC scope.
**_The least privilege principle_** : assign only the minimum necessary rights to perform tasks. For instance, grant viewing access only if no configuration or delete actions are required.
### FPT Database Engine – Permission Model
To perform database provisioning, operation, and management tasks, users must be granted the appropriate IAM permissions. Each action within the FPT Database Engine service is governed by specific permissions. If a user is not assigned a required permission, the corresponding operation will not be available to that user.
Permissions for the FPT Database Engine service are organized and grouped by functional domains, as described below:
**1. Database Engine Service Management Permissions**  
| Permission  | Action Type  | Description  |  
| --- | --- | --- |  
| manageDatabase:ProvisionBackend  | Create  | Allows activating the FPT Database Engine service within a VPC.  |  
| manageDatabase:DeactiveBackend  | Delete  | Allows deactivating the FPT Database Engine service within a VPC.  |  
**2. Database Management Permissions**  
| Permission  | Action Type  | Description  |  
| --- | --- | --- |  
| manageDatabase:List  | View  | Allows viewing the list of databases.  |  
| manageDatabase:Create  | Create  | Allows provisioning new databases.  |  
| manageDatabase:View  | View  | Allows viewing database details.  |  
| manageDatabase:Management  | Edit  | Allows operational actions such as start, stop, and restart.  |  
| manageDatabase:UpdateResource  | Edit  | Allows updating database resources such as CPU, memory, and storage.  |  
| manageDatabase:Configuration  | Edit  | Allows modifying database configuration such as parameters, and scaling configurations.  |  
| FDE:hide_admin_pw  | View  | Allows blocking to view the database administrator password.  |  
| manageDatabase:Delete  | Delete  | Allows deleting a database.  |  
**3. Backup & Restore Permissions**  
| Permission  | Action Type  | Description  |  
| --- | --- | --- |  
| manageDatabase:ListBackup  | View  | Allows viewing backup service information.  |  
| manageDatabase:EnableBackup  | Create  | Allows enabling Backup & Restore for a database.  |  
| manageDatabase:DeleteBackup  | Edit  | Allows disabling Backup & Restore for a database.  |  
| manageDatabase:CreateJobBackup  | Create  | Allows creating backup jobs for a database.  |  
| manageDatabase:ViewJobBackup  | View  | Allows viewing backup job details.  |  
| manageDatabase:RunNowJobBackup  | Create  | Allows triggering an on-demand backup snapshot for a database.  |  
| manageDatabase:EditJobBackup  | Edit  | Allows editing backup jobs.  |  
| manageDatabase:DeleteJobBackup  | Delete  | Allows deleting backup jobs.  |  
| manageDatabase:ListRestore  | View  | Allows viewing available restore points.  |  
| manageDatabase:Restore  | Create  | Allows restoring a database from backup or recover to a point in time.  |  
**4. DB Proxy Management Permissions**  
| Permission  | Action Type  | Description  |  
| --- | --- | --- |  
| manageDatabase:ListProxy  | View  | Allow viewing the database's DB Proxy list.  |  
| manageDatabase:CreateProxy  | Create  | Allow creating a new DB proxy for a database in the system.  |  
| manageDatabase:DeleteProxy  | Delete  | Allow deleting a DB Proxy for databases in the system.  |  
**5. Notification Permissions**  
| Permission  | Action Type  | Description  |  
| --- | --- | --- |  
| manageDatabase:ListNotification  | View  | Allows viewing database notification settings.  |  
| manageDatabase:CreateNotification  | Create  | Allows enabling notifications for a database.  |  
| manageDatabase:DeleteNotification  | Delete  | Allows disabling database notifications.  |  
**6. Monitoring Permissions**  
| Permission  | Action Type  | Description  |  
| --- | --- | --- |  
| manageDatabase:ListNotification  | View  | Allows viewing database notification settings.  |  
**7. Reporting Permissions**  
| Permission  | Action Type  | Description  |  
| --- | --- | --- |  
| manageDatabase:ReportConfig  | Edit  | Allows configuring and manageing the schedule for receiving database activity reports.  |  
### Configure permissions for the FPT Database Engine service
To configure roles and define user groups, refer to section [Role Management](../managed-fpt-database-engine/index.md), and [User Group Management](../managed-fpt-database-engine/index.md) for detailed instructions.
