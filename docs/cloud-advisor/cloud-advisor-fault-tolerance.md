---
id: "cloud-advisor-fault-tolerance"
title: "Fault tolerance issues"
description: "Guide to fault tolerance issues in Cloud Advisor, including storage disk snapshots and instance snapshots."
sidebar_label: "Fault tolerance issues"
sidebar_position: 6
pagination_next: null
---

# Fault tolerance issues

Cloud Advisor surfaces the following fault tolerance issues:

## Storage disk snapshot

- **Description**: This rule checks for storage disks that do not have a snapshot.
- **Violation list shows**:
  - Project
  - Region
  - VPC
  - Storage disk name
  - Storage disk type
  - Storage policy
  - Storage size
  - Attached
  - Storage snapshot name
  - Snapshot age

## Instance snapshot

- **Description**: This rule checks for instances that do not have a snapshot.
- **Violation list shows**:
  - Project
  - Region
  - VPC
  - Instance name
  - Instance size
  - Instance snapshot name
  - Snapshot age
