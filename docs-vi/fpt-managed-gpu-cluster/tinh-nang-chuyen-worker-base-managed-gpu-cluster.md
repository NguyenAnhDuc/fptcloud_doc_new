---
id: "tinh-nang-chuyen-worker-base-managed-gpu-cluster"
title: "Tinh Nang Chuyen Worker Base Managed Gpu Cluster"
description: "Khi người dùng có mong muốn thay đổi Worker Group base, các thành phần của hệ thống (coredns, metrics servers, CNI contr"
sidebar_label: "Tinh Nang Chuyen Worker..."
sidebar_position: 12
---

# Tinh Nang Chuyen Worker Base Managed Gpu Cluster

Khi người dùng có mong muốn thay đổi Worker Group base, các thành phần của hệ thống (coredns, metrics servers, CNI controller, …) sẽ được triển khai lại trên các Worker nodes thuộc Worker Group base mới. Tính năng này mang lại lợi ích trong trường hợp người dùng muốn tăng/giảm cấu hình flavor của các Worker nodes trong Worker Group base, khi đó người dùng tạo Worker Group mới với cấu hình Worker nodes mong muốn, chuyển Worker Group mới đó thành base và xóa Worker Group base cũ. 
**Bước 1** : Ở menu chọn **AI Infrastructure** > **Managed GPU Cluster** , hệ thống sẽ hiển thị trang Managed GPU Cluster Management. Chọn Cluster muốn thay đổi cấu hình Worker Group.
[![](/img/migrated/29-0520eb98.png)](/img/migrated/29-0520eb98.png)
**Bước 2** : Chọn **Node Pools** > **Edit Workers**.
[![](/img/migrated/30-cc2c4a29.png)](/img/migrated/30-cc2c4a29.png)
**Bước 3** : Chọn Worker Group muốn thay đổi và click button **Save**.
[![](/img/migrated/31-315883dd.png)](/img/migrated/31-315883dd.png)
**Lưu ý** :
  * Quá trình thay đổi Woker Group Base sẽ thực hiện, trong khi thực hiện người sử dụng không thể thao tác chỉnh sửa Cluster cho đến khi quá trình hoàn tất.
  * Khi thay đổi thông số của Worker Group, đầu tiên hệ thống sẽ tạo thêm Worker nodes mới với cấu hình mong muốn. Khi Worker nodes mới được tạo thành công, Worker node với cấu hình cũ sẽ được remove khỏi hệ thống. Các pod sẽ được chuyển từ Worker node cũ sang Worker node mới.
