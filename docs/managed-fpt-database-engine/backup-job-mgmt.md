---
id: "backup-job-mgmt"
title: "Backup Job Mgmt"
description: "This section provides detailed instructions for performing tasks related to backup job management, including creating Fu"
sidebar_label: "Backup Job Mgmt"
sidebar_position: 28
---

# Backup Job Mgmt

This section provides detailed instructions for performing tasks related to backup job management, including creating Full Backup jobs, creating Differential Backup jobs, running, updating, and deleting backup jobs.
### 1. Create Full Backup Job
To perform backups for the database, after activating the backup service, you need to create a job to periodically back up the entire database. Follow these steps:
On the Backup service management page, click the **Add Full Backup Job** button (plus icon in the **Full Backup Job** section) to start creating the backup job.
The dialog for backup job configuration appears as follows:
[![](/img/migrated/DBaaS_BackupDB_full_bk_job_add_popuo-f80ee1ef.png)](/img/migrated/DBaaS_BackupDB_full_bk_job_add_popuo-f80ee1ef.png)
Description of fields and how to fill them:
  * **Backup Job Name** : Enter the backup job name (6–25 characters, containing only letters, numbers, spaces, hyphens (-), and underscores (_)).
  * **Backup Retention** : Enter the number of backup copies to retain (positive integer). When a full backup is deleted according to the retention policy, all associated differential backups and archived logs will also be completely deleted.
  * **Hour / Minute / Day of Week** : Set the backup schedule (hour, minute, day of the week). **Warning** : For Kafka engines, backup operations may cause temporary interruptions. Schedule backups during low-traffic periods to minimize service impact.

After filling in all information, click **Create** to create the new backup job. This process takes 5–10 minutes and displays the job in **Creating** status. Upon success, the backup job shows as **Ready** status with the configured parameters and is ready to perform database backups according to the set schedule.
### 2. Create Differential Backup Job
#### Recommendation
FPT Cloud recommends configuring a backup schedule with at least one Full Backup per week and Differential Backups on the remaining days, especially for large-scale databases.
#### Prerequisites
Users must create a Full Backup job before creating a Differential Backup job.
#### Create a job
To create a Differential Backup Job for backing up database changes, go to the Backup service management screen and click **Add Diff Backup Job** (plus icon in the **Diff Backup Job** section) to open the job configuration dialog.
The configuration steps are similar to those used when creating a Full Backup Job.
**Note** : The retention policy of Differential Backups follows the retention of the corresponding Full Backup Job. When a Full Backup is deleted according to the retention policy, all associated Differential Backups will also be permanently removed.
### 3. Run Backup Job
Normally, after successful configuration, the backup job will automatically run periodically according to the set schedule and generate restore points for database recovery (refer to the Restore function). If you need to create a snapshot for the database, manually run the backup job as follows:
On the Backup service management page, click the **Run Now** button (arrow icon) corresponding to the backup job that you need to run to start the database backup.
The system displays a confirmation dialog. Enter “**run** ” for final confirmation and click **Confirm**. Upon completion, a backup corresponding to a restore point will be generated in the Restore screen. Backup job success or failure information will also be updated in the **Backup Request** table on the Backup service management page.
**Note** : For the Kafka engine, performing a backup may cause temporary service interruptions. It is recommended to run backups during low-traffic periods to minimize impact on the service.
### 4. Update Backup Job
To adjust configured settings for a backup job, in the Backup tab, click the **Update Backup Job** button (pencil icon corresponding to the job that you need to update) to open the job configuration update popup.
The Update Job dialog is displayed in a similar manner to the Backup Job creation dialog. Modify the required fields and click **Update** to save the changes.
### 5. Delete Backup Job
To delete an unused backup job, in the Backup service management screen, click the **Delete Job** button (trash icon) corresponding to the job that you need to delete.
The Delete Backup Job popup appears. Enter the required information and click **Confirm** to delete the job.
**Note** : You can only delete a full backup job after all backup diff jobs have been deleted.