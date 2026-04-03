---
id: "backup-restore"
title: "Backup and restore"
description: "The**Backup & Restore** feature on FPT Database Engine helps protect data against risks such as accidental deletion, dat"
sidebar_label: "Backup and restore"
sidebar_position: 26
---

# Backup and restore

The**Backup & Restore** feature on FPT Database Engine helps protect data against risks such as accidental deletion, data corruption, or system failures. The platform supports automatic backups, data restoration from backup files, and Point-in-Time Recovery for selected supported database engines.

### Backup
A backup is a snapshot of database data taken at a specific point in time. Backups are used to restore data in case of operational errors or failures. The backup mechanism is designed to protect data, enable recovery in the event of failures, and meet compliance and security requirements in a cloud environment.
The Backup feature allows you to configure, operate, and monitor backup operations for databases. You can:
  * Enable or disable backups for a database cluster.
  * Manage backup jobs.
  * Monitor backup status through the management interface.

Backups are available for all database engines provided by FPT.

### Backup types
FPT Database Engine supports the following backup types:
  * **Full backup** : Backs up the entire database cluster.
  * **Diff (Incremental) backup** : Backs up only the data changes since the last backup, reducing storage usage and backup duration.

### Backup storage
Backups are stored on dedicated storage, isolated from the database cluster. This design ensures: data durability, high availability, and reliable recovery in the event of cluster failures.

### Backup retention
Backup retention defines the number of full backups retained. When the retention limit is exceeded, the oldest backups are automatically deleted.

### Restore
Restore allows you to recover a database from an existing backup. The restore operation creates a new database based on the selected backup.

### Point-in-Time Recovery (PITR)
Point-in-Time Recovery allows you to restore a database to a specific point in time. PITR is supported by combining periodic full backups and continuously archived transaction logs. This approach enables restoring a database to any valid point within the retention period.
PITR is especially useful for accidental data deletion, application errors and unintended data or configuration changes. **Currently, this feature is supported for PostgreSQL only.**
The combination of backup and PITR enhances data protection, ensures high availability, and provides flexible recovery capabilities for real-world operational scenarios.

### Required Permissions  
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
