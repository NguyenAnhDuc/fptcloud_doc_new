---
id: "add-them-worker-group"
title: "Add Them Worker Group"
description: "Managed GPU Cluster cho phép người dùng add thêm worker group vào cụm cluster theo nhu cầu sử dụng. Để add thêm worker k"
sidebar_label: "Add Them Worker Group"
sidebar_position: 9
---

# Add Them Worker Group

Managed GPU Cluster cho phép người dùng add thêm worker group vào cụm cluster theo nhu cầu sử dụng. Để add thêm worker khách hàng có thể thao tác trên portal như sau: 
**Bước 1** : Ở menu chọn **AI Infrastructure** > **Managed GPU Cluster** hệ thống sẽ hiển thị trang **Managed GPU Management**. Chọn Cluster muốn thêm Worker Group.
[![](/img/migrated/17-502dd1f3.png)](/img/migrated/17-502dd1f3.png)
**Bước 2** : Chọn **Node Pools** > **Edit Workers**.
[![](/img/migrated/18-13f798d7.png)](/img/migrated/18-13f798d7.png)
**Bước 3** : Chọn **Add Worker Group**.
[![](/img/migrated/19-437d9b85.png)](/img/migrated/19-437d9b85.png)
**Bước 4** : Nhập các trường thông tin theo yêu cầu và nhấn **Save**.
[![](/img/migrated/20-d9c3a1fa.png)](/img/migrated/20-d9c3a1fa.png)
**• Group Name** : Đặt tên cho Worker Group để phân biệt các Worker Group với nhau 
**• Container Runtime** : Chọn container runtime, hiện tại, hệ thống mới chỉ hỗ trợ container runtime Containerd 
**• Flavor** : Flavor resource của Worker GPU 
**• Number of Server** : Số Metal Cloud Server được tạo ra để chạy Worker trong Cluster 
**• Label** : Đánh Label cho Worker Group 
**• Taint** : Đánh Taint cho Worker Group 
**Lưu ý** : Quá trình thêm mới Cluster sẽ thực hiện trong vòng vài phút, Status của Cluster sẽ chuyển sang **Processing**. Cluster vẫn hoạt động bình thường khi thực hiện thêm Worker Group mới.
