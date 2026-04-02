---
id: "quan-ly-backup-job"
title: "Manage Backup Jobs"
description: "How to create, monitor, start, enable/disable, and delete Backup Jobs on FPT Cloud."
sidebar_label: "Manage Backup Jobs"
sidebar_position: "3"
---
# Manage Backup Jobs

FPT Backup uses the **Backup Job** concept to manage, monitor, and coordinate backup tasks for resources that need protection (e.g., VMs, volumes).

When you create a Backup Job, you configure:
  * **Backup scenario** (daily / weekly / monthly)
  * **Backup method** (Full / Incremental)
  * **Backup targets** (list of VMs / Volumes)
  * **Notification recipients** (email)

Once successfully created, the Backup Job will **run fully automatically** according to the configured schedule. Each run creates a new **restore point** and stores it in a separate storage partition in the same **region** as your VPC.

This increases data security in the event that production resources are attacked or encounter an incident.

## 1. Create a new Backup Job

### Step 1: Open the Backup Job creation screen
On the FPT Cloud Portal, go to **Backup & Recovery** → **Create Backup Job**.

### Step 2: Configure Backup Job information
Configure the Backup Job as needed with the following fields:

| **Field** | **Description** |
| --- | --- |
| **Name** | Name of the Backup Job. Should be easy to understand and associated with the system or environment (e.g., `prod-web-01-daily`). |
| **Description** | Brief description of the purpose or scope of protection. |
| **Notification to** | Select notification recipients via Email. You can create a new contact by clicking the _"Create your email contact here"_ link on the FPT Portal. |
| **Target selection** | Select the VMs or volumes in the VPC to apply the Backup Job. A Backup Job can be linked to **multiple targets**, but **one target can only be linked to one Backup Job**. |
| **Latest backup to keep** | Maximum number of **restore points** to retain, default is **7**. When this number is exceeded, the system automatically deletes the oldest backups. |
| **Retention information** | Select a quick backup scenario. The system suggests several common options: |

  * **Daily full backup:** Full backup every day.
  * **Daily incremental, Weekly active full:** First backup is full, subsequent backups within the week are incremental, and a full backup is created at the end of the week.
  * **Daily incremental, Monthly active full:** First backup is full, subsequent backups within the month are incremental, and a full backup is created at the end of the month.

### Step 3: Create the Backup Job
Click **Create** to initialize the new Backup Job.

The system will:
  * Check resources
  * Validate the configuration
  * Proceed to create the job based on the information you declared

After successful creation, the Backup Job will be in **Initiated** status. At the configured time, the job will automatically run and create the first **restore point**.

If you want to run immediately without waiting for the schedule, use the **Start** function (section 4 below).

Additionally, in the detailed configuration of each VM linked to the Backup Job, a **Backups** tab will appear, showing:
  * List of available **restore points**
  * The **next backup** schedule

## 2. Monitor Backup Job progress
The progress and status of Backup Jobs are displayed directly in the **Backup Management** screen, primarily through:
  * **Status** (job status)
  * **Next Run** (next scheduled run)

Common statuses:
  * **Initiated:** Job has been created and is waiting for the first run.
  * **Success:** The most recent backup run **succeeded**.
  * **Fail:** The most recent backup run **failed** (may be due to resource, network, or configuration issues).
  * **Pending:** Job is temporarily suspended due to resource errors, infrastructure errors, or other temporary conditions.

When a job is running, you may see the status transition through intermediate steps; progress and final results will be updated after completion.

## 3. View the list of current Backup Jobs
To view the list of all Backup Jobs in the system:
  1. On the Portal, go to **Backup → Backup Management**
  2. Select the **Backup Job** tab

Here you will see:
  * **Name:** Job name
  * **Status:** Current status (Initiated / Success / Fail / Pending / Disabled, etc.)
  * **Instances:** List of virtual machines linked to the job
    * VMs that have been deleted from the system will be displayed with **strikethrough text**.
  * **Next Run:** Time the job will run next according to the configured schedule
  * Action buttons: **Start**, **Enable/Disable**, **Delete**, **View Detail**, etc.

You can use the search box or filters to quickly find jobs by name, status, or associated resources.

## 4. Manually start a Backup Job
By default, each Backup Job will automatically run at the configured time. However, in many situations (e.g., before a system upgrade), you may want to **run a backup immediately**.

**Step 1:** Go to **Backup → Backup Management**

**Step 2:** In the row of the Backup Job to run, in the **Action** column, select **Start**

**Step 3:** A confirmation dialog will appear. Select **Start** to proceed with running the job.

After submitting the request, the system will:
  * Check resource conditions
  * Confirm the current status
  * Begin performing the backup on the VMs linked to the job

Progress will be updated directly on the **Backup Management** screen.

## 5. Enable / Disable Backup Job

### Disable Backup Job
If you **temporarily do not want to continue** automatic backups, you can **Disable** the Backup Job. When disabled:
  * The system **stops creating new restore points**
  * Old restore points are retained
  * The corresponding target is temporarily not protected going forward

Steps:
  1. Go to **Backup → Backup Management**
  2. For the job to pause, select **Disable** in the **Action** column
  3. Confirm in the warning dialog by selecting **Disable**

### Enable Backup Job
To re-enable a paused job:
  1. Go to **Backup → Backup Management**
  2. For the job to re-enable, select **Enable** in the **Action** column

From the moment it is enabled, the job will continue running according to the configured schedule, creating new restore points.

## 6. Delete a Backup Job
In FPT Backup, **deleting a Backup Job** means you **no longer need to protect** the virtual machines in that job.

> **Important warning:**
> Performing a **Delete Backup Job** will:
>   * Permanently stop all future automatic backups
>   * **Delete all restore points** created previously
>   * Deleted restore points **cannot be recovered**
>
> From that point on, the VMs in the job will **no longer be protected** by FPT Backup.

If there is an important VM whose restore points you still want to keep, **detach that VM from the Backup Job** first.

### How to delete a Backup Job
**Step 1:** Go to **Backup → Backup Management**

**Step 2:** For the job to delete, in the **Action** column, select **Delete**

**Step 3:** A warning dialog will appear requiring confirmation. Select **Delete** to permanently delete the Backup Job.
