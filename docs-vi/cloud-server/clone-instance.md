---
id: "clone-instance"
title: "Nhân bản máy ảo"
description: "Tính năng Clone instance giúp tạo ra instance mới giống với instance gốc."
sidebar_label: "Nhân bản máy ảo"
sidebar_position: 5
---

# Clone Instance

Tính năng Clone instance giúp tạo ra instance mới giống với instance gốc.
**Bước 1** : Người dùng chọn Instance cần Clone, chọn **Actions** , chọn **Clone instance** . Tính năng có thể sử dụng khi instance đang ở trạng thái **Power on** hoặc **Power off**. Một số lưu ý:
  * **Tính năng chưa hỗ trợ cho các instance có external disk**
  * **Đối với các instance có snapshot và GPU, tính năng vẫn clone instance nhưng không bao gồm snapshot và GPU.**

[![file](/img/migrated/image-1717475698353-5ed202f9.png)](/img/migrated/image-1717475698353-5ed202f9.png)
**Bước 2** : Nhập các thông số cần thiết và bấm Clone
  * **Tên instance** : Người dùng nhập tên instance sau khi được clone (chỉ được nhập chữ cái, số, “-”, “_”, khoảng trắng, và dấu chấm).
  * **Storage policy** : Người dùng lựa chọn trọng danh sách storage policy của mình
  * **Subnet** : Người dùng chọn subnet trong danh sách đã khởi tạo
  * **Private IP** : Người dùng nhập IP cho clone instance, IP cần thuộc về dãy subnet đã chọn. Nếu người dùng để trống, hệ thống sẽ tự khởi tạo.

[![file](/img/migrated/image-1717475716702-fb6919a9.png)](/img/migrated/image-1717475716702-fb6919a9.png)
**Bước 3** : Hệ thống tự điều hướng sang màn hình danh sách instance. Clone instance sẽ được khởi tạo ở trạng thái “Pending”
[![file](/img/migrated/image-1717475729573-36124bd2.png)](/img/migrated/image-1717475729573-36124bd2.png)
**Bước 4** : Sau khi khởi tạo hoàn tất, hệ thống chuyển sang trạng thái “Running”
[![file](/img/migrated/image-1717475743661-15f71aa3.png)](/img/migrated/image-1717475743661-15f71aa3.png)