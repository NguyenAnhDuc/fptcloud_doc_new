---
id: "client-task"
title: "Manage client tasks"
description: "View and manage scheduled tasks that run automatically on servers with the Trellix agent installed."
sidebar_label: "Manage client tasks"
sidebar_position: 4
---

# Manage client tasks

Client tasks are scheduled jobs that maintain security on each server, including signature updates, agent upgrades, and malware scans. Understanding these tasks gives you full visibility into the security posture of your infrastructure.

1. In the administration console, select **System Tree** > **Group** > **Assigned Client Task**.

   [![Assigned Client Task interface in System Tree](/img/migrated/image-1765765586369-189ffc4d.png)](/img/migrated/image-1765765586369-189ffc4d.png)

2. The list of scheduled and active tasks running on servers with the agent installed is displayed.

   [![Scheduled client tasks list in Trellix](/img/migrated/image-1765765604165-da57bd94.png)](/img/migrated/image-1765765604165-da57bd94.png)

   | Task | Description | Frequency |
   |---|---|---|
   | Update AMCore Content Package | Update to the latest signature package | Daily |
   | Upgrade Agent – Linux | Upgrade the agent to the latest version on Linux | Weekly |
   | Upgrade Agent – Windows | Upgrade the agent to the latest version on Windows / Windows Server | Weekly |
   | Customer – Full Scan | Full malware scan of the server | Weekly |
   | Upgrade Endpoint Security – Linux | Upgrade ENS to the latest version on Linux | Monthly |
   | Upgrade Endpoint Security – Windows | Upgrade ENS to the latest version on Windows / Windows Server | Monthly |
   | Linux/Windows Endpoint Security Deploy | Deploy Endpoint Security immediately after the agent connects to the server | Immediately |
