---
id: "cloud-advisor-fault-tolerance"
title: "Các vấn đề fault tolerance"
description: "Hướng dẫn kiểm tra các vấn đề về khả năng chịu lỗi bao gồm Storage Disk Snapshot và Instance Snapshot trong Cloud Advisor."
sidebar_label: "Fault tolerance"
sidebar_position: 5
pagination_next: null
---

# Các vấn đề fault tolerance

## Storage Disk Snapshot

- **Mô tả:** Rule này kiểm tra các ổ đĩa chưa có snapshot
- **Danh sách vi phạm hiển thị:**
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

## Instance Snapshot

- **Mô tả:** Rule này kiểm tra các Instance chưa có snapshot
- **Danh sách vi phạm hiển thị:**
  - Project
  - Region
  - VPC
  - Instance name
  - Instance size
  - Instance snapshot name
  - Snapshot age
