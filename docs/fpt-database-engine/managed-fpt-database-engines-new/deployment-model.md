---
id: "deployment-model"
title: "Deployment model"
description: "This section describes the database deployment models supported in the FPT Database Engine service."
sidebar_label: "Deployment model"
sidebar_position: 6
---

# Deployment model

This section describes the database deployment models supported in the FPT Database Engine service, helping users choose the architecture that best suits their availability, performance, and cost requirements.

### Single node model

The Single Node model deploys the database on a single node, with full compute resources (vCPU, RAM) and storage. This model does not support automatic failover and depends on the operational state of the node.

The Single Node model is suitable for:

- Development / Testing environments.
- Applications with low to medium load.
- Cases where simplified architecture and cost optimization are priorities.

Key characteristics:

- A single database instance.
- No standby node.
- Backup performed periodically according to service configuration.
- Downtime may occur when the node encounters a failure or during maintenance.

### High Availability (HA / Cluster) model

The High Availability (HA / Cluster) model deploys the database across multiple nodes, including a primary node and one or more standby/replica nodes, to ensure high availability and fault tolerance.

In this model, the database is continuously monitored. When the primary node encounters a failure, the system automatically performs a failover to the standby node, minimizing downtime and ensuring service continuity.

Key characteristics:

- Multiple nodes deployed in the same or different Availability Zones.
- Supports automatic failover.
- Can be combined with DB Proxy for connection routing.
- Suitable for production environments and critical systems.

Benefits:

- Minimizes service downtime.
- Increases reliability and recoverability.
- Supports read scaling through replicas (if configured).
