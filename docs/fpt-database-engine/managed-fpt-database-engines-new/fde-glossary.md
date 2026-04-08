---
id: "fde-glossary"
title: "Cloud & DBaaS glossary"
description: "This section provides clear definitions and explanations of key terms and concepts commonly used in the FPT Database Engine platform."
sidebar_label: "Cloud & DBaaS glossary"
sidebar_position: 2
---

# Cloud & DBaaS glossary

This section provides clear definitions and explanations of key terms and concepts commonly used in the FPT Database Engine platform. Whether you are new or experienced, understanding these terms will help you make the most of the features and capabilities our service provides.

### General cloud & DBaaS terms

| Term | Definition |
| --- | --- |
| Database | A structured or semi-structured collection of data stored and managed for retrieval and information processing. |
| SQL | The standard language used to define, query, and manipulate data in relational databases. |
| Relational Database | A database that organizes data in interrelated tables, following the relational model. |
| Non-relational Database | A database that does not use the relational table model, typically used for large, flexible data. |
| Virtual CPU (vCPU) | A virtual processing unit allocated to compute resources in a cloud environment. |
| RAM | Temporary memory allocated for cloud workloads. |
| Storage Disk | Block or file storage resources for cloud systems. |
| Compute | Processing resources including CPU and RAM used to run applications or services. |
| Flavor | A predefined configuration of compute resources (vCPU, RAM) for a database instance. |
| Cloud Computing | A model for providing IT resources (compute, storage, network) on demand over the Internet. |
| Database-as-a-Service (DBaaS) | A managed database service allowing users to use databases without operating infrastructure. |
| Managed Database | A database service where the provider is responsible for deploying, operating, maintaining, and backing up the system. |
| Region | A geographic area containing independent infrastructure. |
| Virtual Private Cloud (VPC) | A virtual network that isolates cloud resources per tenant. |
| Subnet | A subdivision of a VPC that defines the IP range for resources. |
| CIDR | A notation for expressing IP ranges used to define subnets. |
| Static IP Pool | A reserved set of IPs within a subnet used for fixed allocation. |

### Database architecture & deployment terms

| Term | Definition |
| --- | --- |
| Database Instance | A single database instance running on allocated resources. |
| Database Cluster | A group of database instances working together to ensure HA and scalability. |
| Primary Node | The node responsible for handling write operations. |
| Standby / Replica | A node that replicates data from the primary for failover or read purposes. |
| Read Replica | A replica optimized for read queries. |
| Failover | The automatic or manual process of switching roles to a standby node when a failure occurs. |
| High Availability (HA) | An architecture that ensures continuous system operation with minimal downtime. |
| Database Proxy | An intermediary component that routes application connections to the appropriate database. |

### Backup & restore terms

| Term | Definition |
| --- | --- |
| Backup | A copy of data created to support recovery when a failure occurs. |
| Full Backup | A complete backup of all data at a specific point in time. |
| Incremental Backup | A backup of only the changes since the last backup. |
| Archived Log | Transaction logs stored to support PITR. |
| Retention Policy | A rule defining the number of full backups to retain. |
| Backup Job | A database backup task executed on a schedule or on demand. |
| Restore | The process of recovering database data from a backup. |
| Point-in-Time Recovery (PITR) | The ability to recover a database to a specific point in time. |

### Security & access control terms

| Term | Definition |
| --- | --- |
| Role-Based Access Control (RBAC) | An access control mechanism based on user roles. |
| Identity and Access Management (IAM) | A system for managing identities and access permissions. |

### Monitoring & operations terms

| Term | Definition |
| --- | --- |
| Monitoring | The process of tracking system status and performance. |
| Metrics | Performance measurement data such as CPU, Memory, IOPS. |
| Alert | A notification sent when a configured threshold is exceeded. |
| Log | A record of system events and activities. |
| Maintenance Window | A time window reserved for system maintenance activities. |

### Billing & service terms

| Term | Definition |
| --- | --- |
| Pay-as-you-go (PAYG) | A billing model based on actual resource usage. |
| SLA (Service Level Agreement) | A commitment on service levels between the provider and the customer. |
| Provisioning | The process of creating and configuring service resources. |
| Deprovisioning | The process of deleting or releasing allocated resources. |
