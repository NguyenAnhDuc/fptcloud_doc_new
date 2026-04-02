---
id: "backup"
title: "Backup"
description: "FPT Cloud Backup Native service for Cloud Server (VM) and Volume data protection."
sidebar_label: "Backup"
sidebar_position: "1"
---
# Backup

## 1.1. What is Backup Native?
Backup Native is a data backup service for Cloud Server (VM) and Volume on FPT Cloud.
The service allows users to create backups on a scheduled or manual basis, and restore the system to a desired point in time when errors, incidents, or accidental operations occur.
Backups are managed directly in the Backup Management interface — easy to monitor, easy to operate, and fully automated.

## 1.2. Benefits
Backup Native provides the following benefits:

  * **Comprehensive data protection**
Periodic backups ensure you always have a safe recovery point when a VM or Volume encounters an issue.
  * **Fast recovery**
Just a few steps to bring the system back to its previous state without complex manual processing.
  * **Fully automated**
Backup jobs are created on a schedule and run in the background without interrupting running applications.
  * **Supports both VM and Volume**
Flexible for many workload types: applications, databases, file servers, dev/test environments, etc.
  * **Easy to manage and monitor**
All job statuses, run history, reports, etc. are clearly displayed in a single interface.
  * **Long-term operational peace of mind**
Minimize the risk of data loss due to operational errors, software failures, or unexpected incidents.

## 1.3. Supported resources
Backup Native currently supports two main resource groups:

### Cloud Server (VM)
  * Backs up the entire VM state at the time of backup.
  * Suitable for applications, websites, and systems running directly on servers.

### PVC of FPT Kubernetes Engine (FKE)
  * Only volumes created by the **FKE** service are eligible for backup jobs.
  * Supports backing up application data running in a K8S cluster (databases, file storage, stateful applications, etc.).
  * Suitable for containerized workloads that require data integrity.

## 1.4. Common use cases
The following are situations where customers commonly use Backup Native:

  * **Restore data after accidental file or config deletion**
You can restore a volume to the most recent backup copy.
  * **Roll back an application after a failed update**
When a new version deployment causes errors, you can restore the VM to a safe snapshot.
  * **Periodic data protection**
Schedule backups daily/weekly/monthly to ensure the system always has a safe recovery point.
  * **Backup before making major changes**
For example, upgrading the operating system, changing the database structure, or upgrading software.
  * **Save backups for test/dev environments**
Helps dev/QA teams easily return to the initial state when testing features.
