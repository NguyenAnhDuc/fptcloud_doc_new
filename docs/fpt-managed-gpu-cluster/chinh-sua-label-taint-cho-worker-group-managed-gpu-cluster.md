---
id: "chinh-sua-label-taint-cho-worker-group-managed-gpu-cluster"
title: "Chinh sua Label Taint cho Worker Group Managed gpu Cluster"
sidebar_label: "Chinh sua Label Taint cho Worker Group Managed gpu Cluster"
sidebar_position: "11"
---

# Chinh sua Label Taint for Worker Group Managed gpu Cluster

Label and Taint là hai cơ chế quan trọng giúp quản lý and phân phối workload hiệu quả in system có nhiều Worker Group giúp dễ dàng nhóm the worker theo mục đích sử dụng, hiệu suất, or khu vực địa lý. Managed GPU Cluster hỗ trợ user thêm mới, sửa, xóa label/taint ngay trên Unify Portal.
**Step 1** : Ở menu chọn **AI Infratstucture** > **Managed GPU Cluster** system will displayed trang Managed GPU Cluster Management. Chọn Cluster muốn chỉnh sửa Label/Taint.
[![](/img/migrated/24-2bafdf17.png)](/img/migrated/24-2bafdf17.png)
**Step 2** : Select **Node Pools** > **Edit Workers**
[![](/img/migrated/25-62db8512.png)](/img/migrated/25-62db8512.png)
**Step 3** : Enter Labels and Taints muốn thêm ando Worker Group and click button **Save**.
[![](/img/migrated/26-888e5fac.png)](/img/migrated/26-888e5fac.png)
[![](/img/migrated/27-1e045ce9.png)](/img/migrated/27-1e045ce9.png)
[![](/img/migrated/28-8da95fc4.png)](/img/migrated/28-8da95fc4.png)
**Save ý** : 
Quá trình chỉnh sửa Labels and Taints will thực hiện in vòng andi phút, status of Cluster will chuyển sang **Processing** , in when thực hiện người sử dụng cannot thao tác chỉnh sửa Cluster for to when quá trình hoàn tất.
