---
id: "snapshot-va-restore-pvc-tren-k8s-fpt"
title: "Snapshot và restore PVC trên K8s FPT"
description: "Tổng quan về tính năng snapshot và restore Persistent Volume Claim (PVC) trên FPT Cloud Managed Kubernetes."
sidebar_label: "Snapshot và restore PVC trên K8s FPT"
sidebar_position: "45"
---

# Snapshot và restore PVC trên K8s FPT

FPT Cloud Managed Kubernetes Engine (M-FKE) cung cấp tính năng tạo snapshot và restore Persistent Volume Claim (PVC).

Tham khảo các tài liệu liên quan sau:

- **[Tính năng snapshot Persistent Volume](./snapshot-persistent-volume-tren-k8s.md)**: Hướng dẫn tạo snapshot PV trên Kubernetes. Bao gồm cách cấu hình VolumeSnapshotClass và VolumeSnapshot.
- **[Tính năng restore volume từ snapshot](./restore-persistent-volume-tren-k8s.md)**: Hướng dẫn restore dữ liệu PV từ snapshot có sẵn.
- **[Đặt lịch snapshot PVC](./thuc-hiem-dat-lich-snapshot-pvc.md)**: Hướng dẫn sử dụng CronJob để tự động tạo snapshot PVC định kỳ.
- **[Đặt lịch xóa snapshot PVC](./thuc-hien-dat-lich-xoa-pvc-snapshot.md)**: Hướng dẫn sử dụng CronJob để tự động xóa snapshot PVC cũ.
- **[Tính năng Backup & Restore](./backup-restore-vn.md)**: Hướng dẫn quản lý backup và restore PVC bằng giao diện UI trên FPT Cloud Portal.
