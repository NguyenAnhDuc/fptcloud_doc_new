---
id: "change-address-MAC"
title: "Thay đổi địa chỉ MAC"
description: "_Tính năng chỉ áp dụng cho khách hàng mua dich vụ loại Speicific_"
sidebar_label: "Thay đổi địa chỉ MAC"
sidebar_position: 63
---

# Change Address Mac

_Tính năng chỉ áp dụng cho khách hàng mua dich vụ loại Speicific_
Đây là tính năng cho phép hệ thống tự khởi tạo địa chỉ MAC mới cho card NIC, thay thế địa chỉ cũ.
**Bước 1:** Chọn Card NIC cần reset địa chỉ MAC. Chức năng này sử dụng được ở card Primary và card thường. Lưu ý, hành động này có thể ảnh hưởng đến các dịch vụ như Kubernetes, Load Balancer, … Cần cân nhắc trước khi sử dụng. Sau khi thay đổi, để Instance hoạt động bình thường, các bạn cần thay đổi thông tin về network trong file config của hệ điều hành. Link hướng dẫn nhanh tại: [**How to change Config file**](../change-network-config/index.md).
[![file](/img/migrated/image-1691395036893-7a3595d7.png)](/img/migrated/image-1691395036893-7a3595d7.png)
**Bước 2:** Xác nhận thay đổi địa chỉ MAC.
[![file](/img/migrated/image-1691395221482-354899e7.png)](/img/migrated/image-1691395221482-354899e7.png)
**Bước 3:** Chờ hệ thống xử lý.
[![file](/img/migrated/image-1691395253477-ac20d597.png)](/img/migrated/image-1691395253477-ac20d597.png)
**Bước 4:** Hệ thống đã khởi tạo địa chỉ MAC mới cho card NIC.
[![file](/img/migrated/image-1691395309290-5b6daaff.png)](/img/migrated/image-1691395309290-5b6daaff.png)