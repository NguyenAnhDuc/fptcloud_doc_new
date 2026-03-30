---
id: "quan-ly-security-group"
title: "Security Group Management"
description: "Create and manage Security Groups to control inbound and outbound traffic to your instances."
sidebar_label: "Security Group Management"
sidebar_position: 72
---

# Security Group Management

A Security Group acts as a virtual network firewall, controlling inbound and outbound connections to instances — protecting them from DDoS attacks and other internet threats.

FPT Cloud supports two types:
- **Security Group**: Controls traffic to and from the internet.
- **Distributed Firewall** *(available on Specific only)*: Controls traffic within the internal network.

## Creating a Security Group

1. Go to **Security group** → **Networking** and click **New Security Group**.
2. Enter the required information: Name, Type, Subnet, Applied CIDR/instances, and configure security rules (Inbound/Outbound).
3. Click **Create security group**.

## Additional guides

- [Filter Security Group](./security-group-filter.md)
- [Priority Rule Management](./security-group-priority-rule.md)
