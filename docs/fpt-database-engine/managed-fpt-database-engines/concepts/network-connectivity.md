---
id: "network-connectivity"
title: "Network Connectivity"
description: "This section describes how applications connect to databases in a DBaaS environment, including endpoints, access models,"
sidebar_label: "Network Connectivity"
sidebar_position: 3
---

# Network Connectivity

This section describes how applications connect to databases in a DBaaS environment, including endpoints, access models, and network security controls.

### Database Endpoint
A Database Endpoint is an access point provided for applications to connect to the database. Depending on the deployment model, the endpoint may point to:
  * A database instance (Single Node).
  * A DB Proxy representing a database cluster (HA).

Using endpoints decouples application logic from database architecture and minimizes the impact of topology changes or failover events.

### Private and Public Access
The FPT Database Engine supports two access models:
  * Private Access: The database is accessible only within a private network (VPC/VNet), suitable for high-security environments.
  * Public Access: The database exposes a public endpoint, allowing Internet access with additional security controls.

Choosing an access model should consider security, performance, and application architecture requirements.

### Security Groups and Floating IP
In a DBaaS environment, Security Groups and Floating IPs are used to control and manage network access to databases in a flexible and secure manner.

#### Security Groups
A Security Group is a set of stateful firewall rules that allow or deny inbound and outbound traffic to a database instance based on:
  * IP address / CIDR
  * Port
  * Protocol

Security Groups enforce the least privilege principle, allowing database access only from authorized sources such as:
  * Applications within the same VPC/VNet.
  * Authorized bastion hosts or management systems.

Changes to Security Group rules take effect immediately and do not require database restarts.

#### Floating IP
A Floating IP is a public IP address that can be dynamically associated or disassociated with a database instance, enabling Internet access when required. Floating IPs are commonly used for:
  * Connectivity from external systems (on-premises or third-party services).
  * Temporary administrative or operational access.
  * Testing and integration environments.

When a Floating IP is enabled, users must combine it with Security Groups to:
  * Restrict allowed source IP ranges.
  * Expose only required database ports (e.g., 3306, 5432, 1433).

#### Security Notes
  * Floating IPs should be enabled only when necessary.
  * Private Access is recommended for production environments.
  * Always apply minimum exposure when configuring Security Group rules.
