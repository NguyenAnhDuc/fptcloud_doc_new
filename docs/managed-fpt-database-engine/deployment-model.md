---
id: "deployment-model"
title: "Deployment Model"
description: "This section describes the database deployment models supported by the FPT Database Engine, enabling users to choose an "
sidebar_label: "Deployment Model"
sidebar_position: 6
---

# Deployment Model

This section describes the database deployment models supported by the FPT Database Engine, enabling users to choose an architecture that meets their availability, performance, and cost requirements.
### Single Node Deployment
The Single Node deployment model provisions the database on a single node with allocated compute (vCPU, RAM) and storage resources. This model does not support automatic failover and depends entirely on the availability of the node.
The Single Node model is suitable for:
  * Development / Testing environments.
  * Applications with low to moderate workloads.
  * Use cases that prioritize simplicity and cost optimization.

Key characteristics:
  * A single database instance.
  * No standby or replica nodes.
  * Backups are performed according to the service configuration.
  * Potential downtime during node failures or maintenance activities.

### High Availability (HA / Cluster) Deployment
The High Availability (HA / Cluster) deployment model provisions the database across multiple nodes, including a primary node and one or more standby/replica nodes, to ensure high availability and fault tolerance.
In this model, the database is continuously monitored. When the primary node fails, the system automatically performs a failover to a standby node, minimizing downtime and ensuring service continuity.
Key characteristics:
  * Multiple nodes deployed within the same or across different availability zones.
  * Support for automatic failover.
  * Can be integrated with a DB Proxy for connection routing.
  * Designed for production workloads and mission-critical systems.

Benefits:
  * Minimize service downtime.
  * Enhance reliability and resilience.
  * Support read scaling through replicas (if configured).
