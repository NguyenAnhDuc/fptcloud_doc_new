---
id: "overview-affinity"
title: "Introduction to Affinity and Anti-Affinity"
description: "Learn about Affinity, Anti-Affinity, Soft Affinity, and Soft Anti-Affinity policies."
sidebar_label: "Introduction"
sidebar_position: 77
---

# Introduction to Affinity and Anti-Affinity

FPT Cloud supports four instance placement policies on physical hosts:

- **Affinity**: Instances in the same group are placed on the same host — reducing latency between them.
- **Anti-Affinity**: Instances in the same group are placed on different hosts — increasing high availability.
- **Soft Affinity**: Prefers placing instances on the same host, but does not enforce it.
- **Soft Anti-Affinity**: Prefers placing instances on different hosts, but does not enforce it.

## Next steps

- [Create a New Instance Group](./create-instance-group.md)
