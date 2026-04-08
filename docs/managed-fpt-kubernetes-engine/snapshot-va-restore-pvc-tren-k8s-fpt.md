---
id: "snapshot-va-restore-pvc-tren-k8s-fpt"
title: Snapshot and Restore Persistent Volume on Kubernetes
description: "Overview of the PVC snapshot and restore feature in FPT Cloud Managed Kubernetes."
sidebar_label: Snapshot and Restore Persistent Volume on Kubernetes
sidebar_position: "45"
draft: true
---

# Snapshot and Restore Persistent Volume on Kubernetes

FPT Cloud Managed Kubernetes Engine (M-FKE) supports creating snapshots and restoring Persistent Volume Claims (PVCs).

See the related documentation:

- **[Snapshot Persistent Volume](./snapshot-persistent-volume.md)**: How to create PV snapshots on Kubernetes, including VolumeSnapshotClass and VolumeSnapshot configuration.
- **[Restore volume from snapshot](./restore-persistent-volume-tren-k8s.md)**: How to restore PV data from an existing snapshot.
- **[Schedule PVC snapshot](./thuc-hien-dat-lich-snapshot-pvc.md)**: How to automatically create PVC snapshots on a schedule using CronJob.
- **[Schedule PVC snapshot deletion](./thuc-hien-dat-lich-xoa-pvc-snapshot.md)**: How to automatically delete old PVC snapshots using CronJob.
- **[Backup & Restore feature](./backup-restore-vn.md)**: How to manage PVC backup and restore via the FPT Cloud Portal interface.
