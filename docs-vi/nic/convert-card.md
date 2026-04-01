---
id: "convert-card"
title: "Chuyển card thường thành card Primary"
description: "**Bước 1** : Chọn card NIC cần chuyển sang Primary. Đối với card đã là Primary, chức năng này sẽ bị disable. Đối với car"
sidebar_label: "Chuyển card thường thành card Primary"
sidebar_position: 7
---

# Chuyển card thường thành card Primary

**Bước 1** : Chọn card NIC cần chuyển sang Primary. Đối với card đã là Primary, chức năng này sẽ bị disable. Đối với card thông thường, Unify Portal hỗ trợ chuyển đổi dễ dàng và nhanh chóng.
[![file](/img/migrated/image-1691382928697-43633c94.png)](/img/migrated/image-1691382928697-43633c94.png)
[![file](/img/migrated/image-1691382936808-5dc5b74f.png)](/img/migrated/image-1691382936808-5dc5b74f.png)
**Bước 2:** Xác nhận chuyển card thường sang card Primary. 
**Lưu ý** : Hành động này có thể ảnh hưởng đến các dịch vụ như Kubernetes, Load Balancer, … Cần cân nhắc trước khi sử dụng. Sau khi thay đổi, để Instance hoạt động bình thường, các bạn cần thay đổi thông tin về network trong file config của hệ điều hành. Link hướng dẫn nhanh tại: [**How to change Config file**](../change-network-config/index.md).
[![file](/img/migrated/image-1691382948749-d9b6edea.png)](/img/migrated/image-1691382948749-d9b6edea.png)
**Bước 3:** Chờ hệ thống xử lý.
[![file](/img/migrated/image-1691382962972-4c8ba6b5.png)](/img/migrated/image-1691382962972-4c8ba6b5.png)
**Bước 4:** Card bình thường sẽ được chuyển sang Primary, card Primary sẽ chuyển về card thường. Instance có thể kết nối mạng qua card này.
[![file](/img/migrated/image-1691382975861-64b7aa9e.png)](/img/migrated/image-1691382975861-64b7aa9e.png)