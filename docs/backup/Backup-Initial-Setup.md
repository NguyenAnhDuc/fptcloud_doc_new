---
id: "Backup-Initial-Setup"
title: "Initial setup"
description: "Prerequisites and initial steps before creating backup jobs on FPT Cloud."
sidebar_label: "Initial setup"
sidebar_position: "2"
---

# Initial setup

## Prerequisites
Before creating backup jobs, ensure the following basic conditions are met:

  * An **FPT Cloud account** with access to the tenant containing the VM or PVC (Kubernetes).
  * **Resources are operating normally** (VM/PVC not in an error state or deleted).
  * **Backup Quota** for the VPC is sufficient to create jobs and store backups.
  * Resources are located in a **region** supported by Backup Native.

The service does not require installing additional tools or agents — all operations are performed directly on the Unify Portal.

## Getting started

### 2.1 Create an FPT Cloud account and log in to FPT Portal
To use the **FPT Backup Native** service, you need to log in to the FPT Cloud admin dashboard at console.fptcloud.com.

After logging in with the account and password provided, select the correct Tenant, Region, and VPC containing the VM or PVC (Kubernetes) to protect.

### 2.2 Things to consider before using FPT Backup
  * **Number of servers/PVCs to protect**
  * **Backup Storage capacity**
  * **Backup scenario (Policy)**
