---
id: "snapshot-và-restore-pvc-trên-k8s-fpt"
title: "Snapshot và restore persistent volume trong Kubernetes"
description: "Tổng quan về tính năng snapshot và restore PVC trong FPT Cloud Managed Kubernetes."
sidebar_label: "Snapshot và restore PVC"
sidebar_position: 45
---

# Snapshot và restore persistent volume trong Kubernetes

FPT Cloud Managed Kubernetes Engine (M-FKE) hỗ trợ tạo snapshot và restore Persistent Volume Claim (PVC).

Xem các tài liệu liên quan:

- **[Tính năng snapshot Persistent Volume](./snapshot-persistent-volume.md)**: Hướng dẫn tạo snapshot PV trên Kubernetes, bao gồm cấu hình VolumeSnapshotClass và VolumeSnapshot.
- **[Tính năng restore volume từ snapshot](./restore-persistent-volume-tren-k8s.md)**: Hướng dẫn restore dữ liệu PV từ snapshot đã tạo.
- **[Đặt lịch snapshot PVC](./thuc-hien-dat-lich-snapshot-pvc.md)**: Hướng dẫn tự động tạo snapshot PVC định kỳ bằng CronJob.
- **[Đặt lịch xoá PVC snapshot](./thuc-hien-dat-lich-xoa-pvc-snapshot.md)**: Hướng dẫn tự động xoá các snapshot PVC cũ bằng CronJob.
- **[Tính năng Backup & Restore](./backup-restore-vn.md)**: Hướng dẫn quản lý backup và restore PVC qua giao diện FPT Cloud Portal.
