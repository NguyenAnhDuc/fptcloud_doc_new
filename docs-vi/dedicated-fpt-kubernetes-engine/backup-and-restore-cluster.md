---
id: "backup-and-restore-cluster"
title: "Backup and Restore Cluster"
description: "Để backup k8s cluster, thực hiện backup master nodes sử dụng dịch vụ **Backup & Recovery**."
sidebar_label: "Backup and Restore Cluster"
sidebar_position: 25
---

# Backup và restore cluster

Để backup k8s cluster, thực hiện backup master nodes sử dụng dịch vụ **Backup & Recovery**.
**Bước 1** : Ở menu chọn **Backup & Recovery**, hệ thống sẽ hiển thị trang **Backup & Recovery**.
[![Userguide K8s 41](/img/migrated/Userguide-K8s-41-1024x538-9ffaa95c.png)](/img/migrated/Userguide-K8s-41-1024x538-9ffaa95c.png)
**Bước 2:** Chọn **Create Backup Job**.
[![Userguide K8s 39 1](/img/migrated/Userguide-K8s-39-1-8b326028.png)](/img/migrated/Userguide-K8s-39-1-8b326028.png)
**Bước 3** : Màn hình **New Backup Job** hiện ra. Chọn tất cả VM master nodes tương ứng với cluster cần backup. Cấu hình **Retention** và **Schedule** phù hợp với nhu cầu và chọn **Create**.
[![Userguide K8s 40](/img/migrated/Userguide-K8s-40-e5b5a0c6.png)](/img/migrated/Userguide-K8s-40-e5b5a0c6.png)
