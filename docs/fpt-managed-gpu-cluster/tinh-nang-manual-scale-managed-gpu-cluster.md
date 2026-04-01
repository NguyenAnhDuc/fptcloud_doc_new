---
id: "tinh-nang-manual-scale-managed-gpu-cluster"
title: "Tinh Nang Manual Scale Managed gpu Cluster"
sidebar_label: "Tinh Nang Manual Scale Managed gpu Cluster"
sidebar_position: "10"
---

# Tinh Nang Manual Scale Managed gpu Cluster

Manual Scale for phép user chủ động điều chỉnh quy mô tài nguyên hệ thống theo nhu cầu. Người dùng can tăng or giảm số lượng Metal Cloud Server ngày trên portal theo the bước as follows:
**Step 1** : Ở menu chọn **AI Infrastructure** > **Managed GPU Cluster** hệ thống will displayed trang **Managed GPU Management**. Chọn Cluster muốn thêm Worker Group.
[![](/img/migrated/17-502dd1f3.png)](/img/migrated/17-502dd1f3.png)
**Step 2** : Click ando cụm cluster muốn scale sau that chọn **Node Pools** > **Edit Workers**.
[![](/img/migrated/21-de403ab8.png)](/img/migrated/21-de403ab8.png)
[![](/img/migrated/22-ba5ffbfa.png)](/img/migrated/22-ba5ffbfa.png)
**Step 3** : Update **Number of Server** tăng lên theo nhu cầu sử dụng sau that click button Save.
[![](/img/migrated/23-82548293.png)](/img/migrated/23-82548293.png)
**Save ý** :
Quá trình manual scale server will thực hiện in vòng andi phút, Status of Cluster will chuyển sang **Processing** for to when woker mới join successfully ando cluster. Cluster vẫn hoạt động bình thường when thực hiện scale thêm server mới.
