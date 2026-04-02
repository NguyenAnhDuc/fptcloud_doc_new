---
id: "network-connectivity"
title: "Network connectivity and accessibility"
description: "This section describes how applications connect to databases in a DBaaS environment."
sidebar_label: "Network connectivity and accessibility"
sidebar_position: 7
---

# Network connectivity and accessibility

This section describes how applications connect to databases in the DBaaS environment, including endpoints, access models, and network security control mechanisms.

### Database connection endpoint

A Database Endpoint is the access point provided for applications to connect to a database. Depending on the deployment model, the endpoint may point to:

- A database instance (Single Node).
- A DB Proxy representing the database cluster (HA).

Using an endpoint helps decouple application logic from the database architecture, reducing impact when changes or failovers occur.

### Private and public access

FPT Database Engine supports two access models:

- **Private Access**: The database only allows connections from the internal network (VPC/VNet), suitable for systems with high security requirements.
- **Public Access**: The database provides a public endpoint, allowing connections from the Internet with additional security measures.

The choice of access model must take into account security requirements, performance, and application architecture.

### Security groups and Floating IP

In the DBaaS environment, Security Groups and Floating IP are used to flexibly and securely control and manage network access to the database.

#### Security groups

A Security Group is a set of stateful firewall rules that allow or deny network traffic in/out of a database instance based on:

- IP address / CIDR
- Port
- Protocol

Security Groups help limit database access based on the principle of least privilege, only allowing valid connection sources such as:

- Applications in the same VPC/VNet.
- Authorized bastion hosts or management systems.

Changes to Security Groups take effect immediately and do not require restarting the database.

#### Floating IP

A Floating IP is a public IP address that can be dynamically assigned or unassigned to a database instance, allowing database access from the Internet when needed.

Floating IP is typically used in cases such as:

- Connecting from systems outside the Cloud (on-premises, third-party services).
- Temporary administrative or operational access.
- Testing or integration environments.

When using Floating IP, users must combine it with Security Groups to:

- Limit the range of IPs allowed to access.
- Only open the necessary database ports (e.g., 3306, 5432, 1433).

#### Security notes

- Floating IP should only be enabled when truly necessary.
- Private Access is recommended for production environments.
- Always control Security Group rules according to the minimum exposure principle.
