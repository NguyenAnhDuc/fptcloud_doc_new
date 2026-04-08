---
id: "backup-restore"
title: "Backup and Restore"
sidebar_label: "Backup and Restore"
---

Backup & Restore


The **Backup & Restore** feature on FPT Database Engine helps protect data against risks such as accidental deletion, data errors, or system failures. The platform supports automatic backups, data restoration from backups, and Point-in-Time Recovery for supported database engines.

### Backup

Backup is the process of creating a copy of database data at a specific point in time. Backups are used to restore data when incidents or operational errors occur. The backup mechanism is designed to protect data, support recovery when incidents occur, and meet compliance and security requirements in a cloud environment.

The Backup feature allows you to set up, operate, and monitor backup activities for your database. You can:

  * Enable or disable the backup service for the database
  * Manage backup schedules (backup jobs)
  * Monitor execution status through a centralized management interface.


The Backup feature is available for all engine types provided by FPT.

### Backup Types

FPT Database Engine supports the following 2 backup types:

  * **Full Backup**: Backs up the entire database data.
  * **Diff (Incremental) backup**: Backs up changes since the most recent backup, reducing backup time and storage space.


### Backup Storage

Backups are stored on an independent storage system, completely separate from the database cluster, to ensure data durability and recovery availability when the database cluster encounters issues.

### Backup Retention

Backup retention determines the number of full backups retained in the system. When the configured retention number is exceeded, the oldest backups are automatically deleted.

### Restore

Restore allows you to recover a database from an existing backup. The restore process creates a new database based on the data at the time of the selected backup.

### Point-in-Time Recovery (PITR)

Point-in-Time Recovery allows restoring the database to a specific point in the past. PITR works by combining periodic full backups with continuously recorded transaction logs / archived logs. This mechanism ensures accurate and reliable recovery.

This feature is particularly useful when you need to restore data from a precise point in time, such as when an error or incident is discovered during system operation. **Currently, this feature is supported for PostgreSQL, MySQL, and MariaDB.**

The combination of backup and PITR enhances data protection, ensures high availability, and provides flexible recovery capabilities for real-world operational scenarios.

### Required Permissions

Permission Name | Operation Type | Description
---|---|---
manageDatabase:ListBackup | View | Permission to view database Backup information.
manageDatabase:EnableBackup | Create | Permission to activate the Backup & Restore feature for the database.
manageDatabase:DeleteBackup | Edit | Permission to disable the Backup & Restore feature for the database.
manageDatabase:CreateJobBackup | Create | Permission to create a backup job for the database.
manageDatabase:ViewJobBackup | View | Permission to view backup job details.
manageDatabase:RunNowJobBackup | Create | Permission to create a manual backup snapshot for the database.
manageDatabase:EditJobBackup | Edit | Permission to edit a backup job.
manageDatabase:DeleteJobBackup | Delete | Permission to delete a backup job.
manageDatabase:ListRestore | View | Permission to view the list of backups available for restore.
manageDatabase:Restore | Create | Permission to restore a database from a backup or restore to a specific point in time.
