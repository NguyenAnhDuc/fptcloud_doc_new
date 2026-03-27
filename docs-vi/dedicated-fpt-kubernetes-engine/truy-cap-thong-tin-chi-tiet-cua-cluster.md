---
id: "truy-cap-thong-tin-chi-tiet-cua-cluster"
title: "Truy cập thông tin chi tiết của Cluster"
description: "**Bước 1** : Ở menu chọn **Kubernetes** , hệ thống sẽ hiển thị trang **Kubernetes Management**."
sidebar_label: "Truy cập thông tin chi tiết của Cluster"
sidebar_position: 6
---

# Truy Cap Thong Tin Chi Tiet Cua Cluster

**Bước 1** : Ở menu chọn **Kubernetes** , hệ thống sẽ hiển thị trang **Kubernetes Management**.
[![](/img/migrated/Picture7-b69d141d.png)](/img/migrated/Picture7-b69d141d.png)
**Bước 2** : Chọn **Cluster** cần xem thông tin trên danh sách.
[![](/img/migrated/Picture7-b69d141d.png)](/img/migrated/Picture7-b69d141d.png)
**Bước 3** : Chọn Tab để xem thông tin tương ứng:
**3.1**. Tab **Enssential Properties** : Hiển thị các thông tin Cluster Information, Load Balancer VIP, API.
  * **Cluster Information** : Hiển thị thông tin cơ bản về cluster bao gồm Cluster ID, Version, Kubernetes config, Status, Public IP, SSH Key.
  * **Load Balancer VIP** : Các virtual IP của LB được sử dụng cho K8s API và Ingress.
  * **Dashboard & API**: API Url.

[![](/img/migrated/Picture9-8b474369.png)](/img/migrated/Picture9-8b474369.png)
**3.2**. Tab **Node Pools** : Hiển thị thông tin cấu hình các node bao gồm **Master nodes** , **Worker nodes**.
  * **Master Configuration** : Cấu hình Master Node bao gồm số lượng, CPU, Memory, Disk.
  * **Worker Configuration** : Cấu hình Worker Node bao gồm số lượng, CPU, Memory, Disk, Storage Policy, Auto Scale.

[![](/img/migrated/Picture10-46417cf4.png)](/img/migrated/Picture10-46417cf4.png)
**3.3**. Tab **Advanced** : Hiển thị các tham số nâng cao thuộc Kubernetes Cluster.
  * **Advanced Configuration** : Tham số nâng cao của Kubernetes Cluster (Nodes DNS, Pod Network, Service Network , Network Node Prefix, Max Pod Per Node, Enable Custom Script)
  * **NFS Storage** : Trạng thái Enable/Disable, dung lượng Disk của NFS Storage.

[![](/img/migrated/Picture11-9d760e59.png)](/img/migrated/Picture11-9d760e59.png)
**3.4**. Tab **Instances** : Hiển thị các máy chủ ảo thuộc Kubernetes Cluster đang xem bao gồm **Master nodes** , **Worker nodes**.
[![](/img/migrated/Picture12-d65d4424.png)](/img/migrated/Picture12-d65d4424.png)
**3.5**. Tab **Activity Logs** : Ghi lại logs các **Action** đã thực hiện với Kubernetes Cluster.
[![](/img/migrated/Picture13-33e4e3ab.png)](/img/migrated/Picture13-33e4e3ab.png)