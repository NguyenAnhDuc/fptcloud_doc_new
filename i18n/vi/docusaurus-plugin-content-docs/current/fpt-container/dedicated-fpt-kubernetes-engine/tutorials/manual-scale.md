---
id: "manual-scale"
title: "Để config Manual Scale, khách hàng cần thao tác như sau:"
description: "✨ D-FKE hỗ trợ manual scale in/scale out worker nodes, cho phép người dùng tăng/giảm số lượng worker theo nhu cầu thủ cô"
sidebar_label: "Để config Manual Scale, khách hàng cần thao tác như sau:"
sidebar_position: 4
---

# Manual Scale

✨ D-FKE hỗ trợ manual scale in/scale out worker nodes, cho phép người dùng tăng/giảm số lượng worker theo nhu cầu thủ công.
✨ Cung cấp tùy chọn quản lý số lượng node linh hoạt mà không cần chờ autoscaler.
✨ Phù hợp với các tình huống cần điều chỉnh nhanh chóng số lượng worker nodes dựa trên workload thực tế.
➤ **Để config Manual Scale, khách hàng cần thao tác như sau:**
**Bước 1** : Ở menu chọn **Kubernetes** , hệ thống sẽ hiển thị trang **Kubernetes Management**. Chọn cluster mong muốn và chọn mục node pool: 
[![](/img/migrated/anh1-212b9e0c.png)](/img/migrated/anh1-212b9e0c.png)
**Bước 2** : Ở mục **Worker Config** > Tại mục **Auto Scale** , chọn icon Enable Auto Scale Node. 
[![](/img/migrated/anh2-027ebf13.png)](/img/migrated/anh2-027ebf13.png)
**Bước 3** : Màn hình **Scale Worker Nodes** hiện ra. Người dùng nhập các trường thông tin yêu cầu. 
  * **Scale Type** : Chọn Scale Out (tăng số lượng) hoặc Scale In (giảm số lượng). 
  * **Scale In** : 
▪ List of node name: Chọn node bớt đi. Nếu không chọn node thì hệ thống sẽ bớt ngẫu nhiên. 
▪ Quantity: Nhập số lượng worker nodes muốn thêm/bớt.
  * **Scale Out** :
▪ Quantity: Nhập số lượng worker nodes muốn thêm/bớt. 
Sau khi nhập xong, số lượng worker nodes sau khi thực hiện scale sẽ hiển thị tại dòng **"Quantity worker after scale-up/scale-down equals"**

**Bước 4** : Kiểm tra lại thông tin, chọn Scale Cluster để thực hiện scale Worker. [![](/img/migrated/anh3-e979a990.png)](/img/migrated/anh3-e979a990.png)
[![](/img/migrated/anh44-88f304e7.png)](/img/migrated/anh44-88f304e7.png)
Quá trình Scale Cluster sẽ thực hiện, trong khi thực hiện người sử dụng không thể thao tác chỉnh sửa Cluster cho đến khi quá trình hoàn tất.
