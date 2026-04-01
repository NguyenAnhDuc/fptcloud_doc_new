---
id: "tinh-nang-chuyen-worker-base-managed-gpu-cluster"
title: "Tinh Nang Chuyen Worker Base Managed Gpu Cluster"
sidebar_label: "Tinh Nang Chuyen Worker Base Managed Gpu Cluster"
sidebar_position: "12"
---

# Tinh Nang Chuyen Worker Base Managed Gpu Cluster

Khi user có mong muốn thay đổi Worker Group base, the thành phần of system (coredns, metrics servers, CNI controller, …) will is triển khai lại trên the Worker nodes thuộc Worker Group base mới. Tính năng this mang lại lợi ích in trường hợp user muốn tăng/giảm cấu hình flavor of the Worker nodes in Worker Group base, when that user tạo Worker Group mới with cấu hình Worker nodes mong muốn, chuyển Worker Group mới that thành base and xóa Worker Group base cũ. 
**Step 1** : Ở menu chọn **AI Infrastructure** > **Managed GPU Cluster** , system will displayed trang Managed GPU Cluster Management. Chọn Cluster muốn thay đổi cấu hình Worker Group.
[![](/img/migrated/29-0520eb98.png)](/img/migrated/29-0520eb98.png)
**Step 2** : Select **Node Pools** > **Edit Workers**.
[![](/img/migrated/30-cc2c4a29.png)](/img/migrated/30-cc2c4a29.png)
**Step 3** : Chọn Worker Group muốn thay đổi and click button **Save**.
[![](/img/migrated/31-315883dd.png)](/img/migrated/31-315883dd.png)
**Save ý** :
  * Quá trình thay đổi Woker Group Base will thực hiện, in when thực hiện người sử dụng cannot thao tác chỉnh sửa Cluster for to when quá trình hoàn tất.
  * Khi thay đổi thông số of Worker Group, đầu tiên system will tạo thêm Worker nodes mới with cấu hình mong muốn. Khi Worker nodes mới is tạo successfully, Worker node with cấu hình cũ will is remove khỏi system. Các pod will is chuyển from Worker node cũ sang Worker node mới.
