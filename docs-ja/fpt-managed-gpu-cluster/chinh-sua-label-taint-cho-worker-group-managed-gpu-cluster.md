---
id: "chinh-sua-label-taint-cho-worker-group-managed-gpu-cluster"
title: "Chinh sua Label Taint cho Worker Group Managed gpu Cluster"
sidebar_label: "Chinh sua Label Taint cho Worker Group Managed gpu Cluster"
sidebar_position: "11"
---

# Chinh sua Label Taint cho Worker Group Managed gpu Cluster

Label và Taint là hai cơ chế quan trọng giúp quản lý và phân phối workload hiệu quả trong hệ thống có nhiều Worker Group giúp dễ dàng nhóm các worker theo mục đích sử dụng, hiệu suất, hoặc khu vực địa lý. Managed GPU Cluster hỗ trợ người dùng thêm mới, sửa, xóa label/taint ngay trên Unify Portal.
**ステップ1:** Ở menu chọn **AI Infratstucture** > **Managed GPU Cluster** hệ thống sẽ hiển thị trang Managed GPU Cluster Management. Chọn Cluster muốn chỉnh sửa Label/Taint.
[![](/img/migrated/24-2bafdf17.png)](/img/migrated/24-2bafdf17.png)
**ステップ2:** **Node Pools** > **Edit Workers**
[![](/img/migrated/25-62db8512.png)](/img/migrated/25-62db8512.png)
**ステップ3:** Nhập Labels và Taints muốn thêm vào Worker Group và click button **Save**.
[![](/img/migrated/26-888e5fac.png)](/img/migrated/26-888e5fac.png)
[![](/img/migrated/27-1e045ce9.png)](/img/migrated/27-1e045ce9.png)
[![](/img/migrated/28-8da95fc4.png)](/img/migrated/28-8da95fc4.png)
**Lưu ý** : 
Quá trình chỉnh sửa Labels và Taints sẽ thực hiện trong vòng vài phút, trạng thái của Cluster sẽ chuyển sang **Processing** , trong khi thực hiện người sử dụng không thể thao tác chỉnh sửa Cluster cho đến khi quá trình hoàn tất.
