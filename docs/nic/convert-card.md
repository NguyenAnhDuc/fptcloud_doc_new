---
id: "convert-card"
title: "Chuyển card thường thành card Primary"
sidebar_label: "Chuyển card thường thành card Primary"
sidebar_position: "7"
---

# Chuyển card thường thành card Primary

**Step 1** : Chọn card NIC cần chuyển sang Primary. Đối with card has been là Primary, chức năng this will bị disable. Đối with card thông thường, Unify Portal hỗ trợ chuyển đổi dễ dàng and nhanh chóng.
[![file](/img/migrated/image-1691382928697-43633c94.png)](/img/migrated/image-1691382928697-43633c94.png)
[![file](/img/migrated/image-1691382936808-5dc5b74f.png)](/img/migrated/image-1691382936808-5dc5b74f.png)
**Step 2:** Confirm chuyển card thường sang card Primary. 
**Save ý** : Hành động this can ảnh hưởng to the service như Kubernetes, Load Balancer, … Cần cân nhắc before sử dụng. Sau when thay đổi, to Instance hoạt động bình thường, the you cần thay đổi thông tin về network in file config of hệ điều hành. Link hướng dẫn nhanh tại: [**How to change Config file**](../change-network-config/index.md).
[![file](/img/migrated/image-1691382948749-d9b6edea.png)](/img/migrated/image-1691382948749-d9b6edea.png)
**Step 3:** Chờ hệ thống xử lý.
[![file](/img/migrated/image-1691382962972-4c8ba6b5.png)](/img/migrated/image-1691382962972-4c8ba6b5.png)
**Step 4:** Card bình thường will is chuyển sang Primary, card Primary will chuyển về card thường. Instance can kết nối network qua card this.
[![file](/img/migrated/image-1691382975861-64b7aa9e.png)](/img/migrated/image-1691382975861-64b7aa9e.png)
