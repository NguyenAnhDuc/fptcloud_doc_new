---
id: "snapshot-và-restore-pvc-trên-k8s-fpt"
title: "Snapshot và restore persistent volume trong Kubernetes"
description: "Tổng quan về tính năng snapshot và restore PVC trong FPT Cloud Managed Kubernetes."
sidebar_label: "Snapshot và restore PVC"
sidebar_position: 1
---

# Snapshot và restore persistent volume trong Kubernetes

FPT Cloud Managed Kubernetes Engine (M-FKE) hỗ trợ tạo snapshot và restore Persistent Volume Claim (PVC).

Xem các tài liệu liên quan:

- **[Tính năng snapshot Persistent Volume](./snapshot-persistent-volume.md)**: Hướng dẫn tạo snapshot PV trên Kubernetes, bao gồm cấu hình VolumeSnapshotClass và VolumeSnapshot.
- **[Tính năng restore volume từ snapshot](/vi/docs/fpt-container/managed-fpt-kubernetes-engine/samples/snapshot-and-restore-persistent-volume-in-kubernetes/restore-persistent-volume-tren-k8s)**: Hướng dẫn restore dữ liệu PV từ snapshot đã tạo.
- **[Đặt lịch snapshot PVC](/vi/docs/fpt-container/managed-fpt-kubernetes-engine/samples/snapshot-and-restore-persistent-volume-in-kubernetes/thuc-hien-dat-lich-snapshot-pvc)**: Hướng dẫn tự động tạo snapshot PVC định kỳ bằng CronJob.
- **[Đặt lịch xoá PVC snapshot](/vi/docs/fpt-container/managed-fpt-kubernetes-engine/samples/snapshot-and-restore-persistent-volume-in-kubernetes/thuc-hien-dat-lich-xoa-pvc-snapshot)**: Hướng dẫn tự động xoá các snapshot PVC cũ bằng CronJob.
- **[Tính năng Backup & Restore](/vi/docs/fpt-container/managed-fpt-kubernetes-engine/tutorials/backup-restore-vn)**: Hướng dẫn quản lý backup và restore PVC qua giao diện FPT Cloud Portal.
