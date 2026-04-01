---
id: "tinh-nang-manual-scale-managed-gpu-cluster"
title: "Tinh Nang Manual Scale Managed gpu Cluster"
sidebar_label: "Tinh Nang Manual Scale Managed gpu Cluster"
sidebar_position: "10"
---

# Tinh Nang Manual Scale Managed gpu Cluster

Manual Scale cho phép người dùng chủ động điều chỉnh quy mô tài nguyên hệ thống theo nhu cầu. Người dùng có thể tăng hoặc giảm số lượng Metal Cloud Server ngày trên portal theo các bước như sau:
**Bước 1** : Ở menu chọn **AI Infrastructure** > **Managed GPU Cluster** hệ thống sẽ hiển thị trang **Managed GPU Management**. Chọn Cluster muốn thêm Worker Group.
[![](/img/migrated/17-502dd1f3.png)](/img/migrated/17-502dd1f3.png)
**Bước 2** : Click vào cụm cluster muốn scale sau đó chọn **Node Pools** > **Edit Workers**.
[![](/img/migrated/21-de403ab8.png)](/img/migrated/21-de403ab8.png)
[![](/img/migrated/22-ba5ffbfa.png)](/img/migrated/22-ba5ffbfa.png)
**Bước 3** : Update **Number of Server** tăng lên theo nhu cầu sử dụng sau đó click button Save.
[![](/img/migrated/23-82548293.png)](/img/migrated/23-82548293.png)
**Lưu ý** :
Quá trình manual scale server sẽ thực hiện trong vòng vài phút, Status của Cluster sẽ chuyển sang **Processing** cho đến khi woker mới join thành công vào cluster. Cluster vẫn hoạt động bình thường khi thực hiện scale thêm server mới.
