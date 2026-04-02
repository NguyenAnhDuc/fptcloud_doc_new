---
id: "backup-volume"
title: "Backup Volume"
description: "How to create and manage backup jobs for volumes in a VPC on Unify Portal."
sidebar_label: "Backup Volume"
sidebar_position: "9"
---
# Backup Volume

## Introduction
The **Backup Volume** feature allows users to create backups for volumes in a VPC on Unify Portal.
Backups ensure data always has a redundant copy and can be restored in the event of an incident.

## Prerequisites
  * Logged in to **Unify Portal**.
  * The **Backup** service for the VPC is in **Enable** status.
  * Account has the `OspNativeBackup:Create` permission.
  * The volume to be backed up is not already part of another job (a volume can only belong to one job at a time).

## Create a Backup Volume Job

### Step 1: Open the Backup & Recovery interface
Click the **Create Backup Job** button.

### Step 2: Enter basic information
In the **Create Backup Job** form, fill in the following fields:
  1. **Job Name** (_required_):
     * Job name (must be unique within the VPC).
     * Maximum 26 characters, containing only letters, numbers, and dots.
  2. **Job Type**: Select **Backup Volume**.
  3. **Description** (_optional_): Brief description of the job.
  4. **Target Selection**: Select the volumes to back up (valid volumes will start with the prefix `pv-fke`).

### Step 3: Configure Backup
  * **Backup Option** (choose one):
    * **Daily full backup**: Create a full backup every day.
    * **Daily incremental + Weekly active full**: Daily incremental backups, with a full backup on a fixed day of the week.
    * **Daily incremental + Monthly active full**: Daily incremental backups, with a full backup on a fixed day of the month.
  * **Start Time**: Time to run within the day (00:00–23:59).
  * **Full Backup At**: (only enabled when selecting Weekly/Monthly active full) → Select the day to run a full backup.
  * **Latest Backup to Keep**: Number of backups to retain (1–1000).
  * **Notification Email**: Add email addresses to receive job status notifications (success/failure).

### Step 4: Create the job
  * Click **Create**.
  * The system displays a notification:
    * Success: _The job [JobName] has been created successfully._
    * Error: Displays details (e.g., duplicate job name, invalid volume, system busy, etc.).

## Manage Backup Jobs
  * Go to **Backup Jobs** to monitor the list.
  * Job status will be updated automatically.
  * You can edit the retention configuration and email notifications.

## Important Notes
  * A volume can only belong to **one backup job**.
  * Job names must be unique within the VPC.
  * It is recommended to schedule backups outside of peak hours to avoid performance impact.
  * Backups only retain the number of copies configured in retention; older copies will be automatically deleted.
