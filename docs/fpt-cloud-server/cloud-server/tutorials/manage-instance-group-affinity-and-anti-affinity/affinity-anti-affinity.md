---
id: "affinity-anti-affinity"
title: "Affinity & Anti-Affinity Overview"
description: "Manage Instance Groups with Affinity & Anti-Affinity policies on FPT Cloud."
sidebar_label: "Overview"
sidebar_position: 1
---

# Affinity & Anti-Affinity Overview

Affinity and Anti-Affinity help you control how virtual machines are placed on physical hosts — especially when you need to ensure performance or high availability.

You can create Instance Groups with Soft Affinity or Soft Anti-Affinity policies. When launching a virtual machine, the system uses the Instance Group policy to determine VM placement.

## Supported Policies

| Policy | Description |
|---|---|
| **Soft Affinity** | Prefers placing VMs in the same Instance Group on the same physical host. |
| **Soft Anti-Affinity** | Prefers placing VMs in the same Instance Group on different physical hosts. |

## Limits

- Maximum 10 Instance Groups per tenant.
- Each Instance Group holds up to 10 Instances.

## Guides

- [Initial Setup](./initial-setup.md)
- [Create an Instance Group](./create-instance-group.md)
- [Add Instance to Instance Group](./add-instance-instance-group.md)
- [Delete an Instance Group](./delete-instance-group.md)
