---
id: "change-address-MAC"
title: "Thay đổi địa chỉ MAC"
sidebar_label: "Thay đổi địa chỉ MAC"
sidebar_position: "9"
---

# Thay đổi địa chỉ MAC

Đây là feature for phép hệ thống tự khởi tạo địa chỉ MAC mới for card NIC, thay thế địa chỉ cũ.
**Step 1:** Chọn Card NIC cần reset địa chỉ MAC. Chức năng this sử dụng is ở card Primary and card thường. Save ý, hành động this can ảnh hưởng to the service như Kubernetes, Load Balancer, … Cần cân nhắc before sử dụng. Sau when thay đổi, to Instance hoạt động bình thường, the you cần thay đổi thông tin về network in file config of hệ điều hành. Link hướng dẫn nhanh tại: [**How to change Config file**](../change-network-config/index.md).
[![file](/img/migrated/image-1691395036893-7a3595d7.png)](/img/migrated/image-1691395036893-7a3595d7.png)
**Step 2:** Confirm thay đổi địa chỉ MAC.
[![file](/img/migrated/image-1691395221482-354899e7.png)](/img/migrated/image-1691395221482-354899e7.png)
**Step 3:** Chờ hệ thống xử lý.
[![file](/img/migrated/image-1691395253477-ac20d597.png)](/img/migrated/image-1691395253477-ac20d597.png)
**Step 4:** System has been khởi tạo địa chỉ MAC mới for card NIC.
[![file](/img/migrated/image-1691395309290-5b6daaff.png)](/img/migrated/image-1691395309290-5b6daaff.png)
