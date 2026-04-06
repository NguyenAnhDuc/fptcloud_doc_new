---
id: "managed-fpt-database-engines-new"
title: "Introduction to FPT Database Engine"
description: "Introduction to FPT Database Engine"
sidebar_label: "Introduction to FPT Database Engine"
sidebar_position: 1
---

# Introduction to FPT Database Engine

## Introduction to FPT Database Engine

FPT Database Engine is a Managed Database (DBaaS) service provided on the FPT Cloud platform, allowing users to deploy, operate, and manage databases without directly managing physical infrastructure or complex operational tasks. The service is designed to ensure High Availability, flexible Scalability, Data Security, and stable operations, suitable for business systems ranging from testing to production environments.

## Supported database management systems

FPT Database Engine supports many popular database management systems, meeting diverse application needs and enterprise system architectures, including:

- **Relational Databases**: PostgreSQL, MySQL, MariaDB, Microsoft SQL Server
- **Non-Relational Database**: MongoDB, Cassandra, Redis
- **Search Engine**: OpenSearch
- **Data Streaming**: RabbitMQ, Kafka
- **Time Series Database**: TimescaleDB
- **OLAP**: ClickHouse

The list of supported systems and specific versions may change over time and is published on the Console Portal.

## Service architecture overview

FPT Database Engine is deployed on FPT Cloud's cloud-native infrastructure, with built-in operational and system protection components, including:

- Compute, Storage, and Network resources allocated automatically.
- High Availability (HA) and Failover mechanisms.
- Backup & Restore system.
- Real-time performance and system status monitoring.

Users interact with the service through the Unified Service Portal or OpenAPI, without needing direct access to the underlying infrastructure layer.

## Key features

- **Automated deployment**: Users can quickly create a new Database Instance or Database Cluster with just a few configuration steps on the portal, including selecting the engine, version, resource configuration, and backup policy.
- **Data backup and restore**: FPT Database Engine supports automatic and manual backup, allowing data recovery to minimize the risk of data loss.
- **Resource scaling and management**: The system allows vertical resource scaling (Vertical Scaling) or flexible configuration adjustments to meet growing load requirements.
- **Monitoring and logging**: Users can monitor important metrics such as CPU, Memory, Storage, etc. through integration with FPT Cloud's FMON service.
- **Security and compliance**: FPT Database Engine applies security mechanisms at multiple layers, including:
  - Resource isolation per tenant.
  - Role-Based Access Control (RBAC).
  - Compliance with FPT Cloud platform security standards.
- **Service scope and responsibilities**: FPT Cloud is responsible for managing the infrastructure, platform, and core operational tasks of the database system. Users are responsible for managing data, schema, application access, and business logic.
