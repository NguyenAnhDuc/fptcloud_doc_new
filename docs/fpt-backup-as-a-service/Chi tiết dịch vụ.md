---
id: "Chi tiết dịch vụ"
title: "Service details"
description: "Technical overview of FPT Backup as a Service components and terminology."
sidebar_label: "Service details"
sidebar_position: "2"
---

# Service details

## Client backup server

FPT Cloud provides a backup server configured and deployed on your on-premise system, running on virtualization platforms such as VMware or Hyper-V. The server is managed and operated remotely by FPT Cloud administrators.

FPT Cloud provides the following:

- Server monitoring — availability, performance, and status
- Remote device administration
- System, operating system, and backup tool maintenance

## BaaS Portal

FPT Cloud provides access to the BaaS web portal. The portal provides:

- Monitoring and viewing protected servers and systems
- Monitoring backup job progress, history, and status
- Viewing server system details such as backup size, schedule, and recovery points
- Proactive data restore
- Email notifications for backup job progress and resource connection status

## Definitions

| Term | Description |
|---|---|
| **Agent** | Software on the system that performs data protection operations for physical and virtual devices |
| **VBR server** | Communicates with all servers in the system and coordinates protection, restore, administrative, job management, and event processing operations |
| **Data compression** | A data-saving technique that reduces storage size |
| **Data encryption** | A data security technique |
| **Data replication** | Copying data to create replicas of servers in the user system. Replicas can be accessed immediately for fast restore and used to create multiple recovery points without affecting server performance |
| **Disaster recovery** | Planning or deploying a strategy to respond to failures such as total infrastructure loss or critical failures |
| **Backup copy** | A version of a backup file copied to a storage repository for long-term retention. Repositories can be in the source system or deployed externally. The file uses the same format as the primary backup, so data can be restored directly in the event of an incident |
| **Retention period** | The time a specific backup dataset remains within its retention criteria. When the period expires, data becomes obsolete and is no longer available for restore |
| **Retention points** | The number of consecutive successful jobs stored |
| **RPO** | Restore point objective — the recovery point determined by the backup schedule |
| **RTO** | Restore time objective — the recovery time determined by the restore method and amount of data to restore |
