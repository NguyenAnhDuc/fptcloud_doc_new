---
id: "backup-restore"
title: "Backup types"
description: "The Backup & Restore feature on FPT Database Engine protects data against risks such as accidental deletion, data errors, or system failures."
sidebar_label: "Backup types"
sidebar_position: 26
---

# Backup types

The **Backup & Restore** feature on FPT Database Engine protects data against risks such as accidental deletion, data errors, or system failures. The platform supports automated backup, data restoration from backups, and Point-in-Time Recovery for supported database engines.

### Backup

Backup is the process of creating a copy of database data at a specific point in time. Backups are used to restore data when incidents or operational errors occur. The backup mechanism is designed to protect data, support recovery in case of failure, and meet compliance and security requirements in cloud environments.

The Backup feature allows you to set up, operate, and monitor backup activities for your database. You can:

- Enable or disable the backup service for a database.
- Manage backup schedules (backup jobs).
- Monitor execution status through a centralized management interface.

The Backup feature is available for all engine types provided by FPT.

### Backup types

FPT Database Engine supports 2 types of backup:

- **Full Backup**: Backs up the entire database data.
- **Diff (Incremental) Backup**: Backs up changes since the most recent backup, reducing time and storage usage.

### Backup storage

Backups are stored on an independent storage system, completely separate from the database cluster, to ensure data durability and availability for restoration when the database cluster encounters an issue.

### Backup retention

Backup retention defines the number of full backup copies retained in the system. When the configured retention count is exceeded, the oldest backups are automatically deleted.

### Restore

Restore allows you to recover a database from an existing backup. The restore process creates a new database based on the data at the time of the selected backup.

### Point-in-Time Recovery (PITR)

Point-in-Time Recovery allows restoring the database to a specific point in time in the past. PITR works by combining periodic full backups with continuously recorded transaction logs / archived logs. This mechanism ensures accurate and reliable recovery.

This feature is especially useful when you need to recover data from a precise moment, such as when a fault or incident is discovered during system operation. **Currently, this feature is only supported for PostgreSQL.**

Combining backup and PITR enhances data protection, ensures high availability, and provides flexible recovery capabilities for real-world operational scenarios.

### Required permissions

| Permission name | Operation type | Description |
| --- | --- | --- |
| manageDatabase:ListBackup | View | Permission to view database Backup information. |
| manageDatabase:EnableBackup | Create | Permission to activate the Backup & Restore feature for a database. |
| manageDatabase:DeleteBackup | Edit | Permission to deactivate the Backup & Restore feature for a database. |
| manageDatabase:CreateJobBackup | Create | Permission to create a backup job for a database. |
| manageDatabase:ViewJobBackup | View | Permission to view backup job details. |
| manageDatabase:RunNowJobBackup | Create | Permission to manually create a backup snapshot for a database. |
| manageDatabase:EditJobBackup | Edit | Permission to edit a backup job. |
| manageDatabase:DeleteJobBackup | Delete | Permission to delete a backup job. |
| manageDatabase:ListRestore | View | Permission to view the list of available restore points. |
| manageDatabase:Restore | Create | Permission to restore a database from a backup or to a specific point in time. |
