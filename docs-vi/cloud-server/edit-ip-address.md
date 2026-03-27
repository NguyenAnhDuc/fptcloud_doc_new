---
id: "edit-ip-address"
title: "_Tính năng chỉ áp dụng cho khách hàng mua dich vụ loại Speicific_"
description: "_Tính năng chỉ áp dụng cho khách hàng mua dich vụ loại Speicific_"
sidebar_label: "_Tính năng chỉ áp dụng cho khách hàng mua dich vụ loại Speicific_"
sidebar_position: 62
---

# Edit Ip Address

_Tính năng chỉ áp dụng cho khách hàng mua dich vụ loại Speicific_
**Bước 1** : Chọn Card NIC cần thay đổi địa chỉ IP. 
**Lưu ý** : Hành động này có thể ảnh hưởng đến các dịch vụ như Kubernetes, Load Balancer,...Bạn cần cân nhắc trước khi sử dụng. Sau khi thay đổi, để Instance hoạt động bình thường, các bạn cần thay đổi thông tin về Network trong file config của hệ điều hành. Link hướng dẫn nhanh tại: [**How to change Config file**](../change-network-config/index.md).
[![file](/img/migrated/image-1691383107122-1741e5c6.png)](/img/migrated/image-1691383107122-1741e5c6.png)
**Bước 2:** Cấu hình địa chỉ IP.
Nhằm tối ưu trải nghiệm cho khách hàng, Unify Portal hỗ trợ gợi ý 1 địa chỉ IP thuộc Subnet Mask của khách hàng.
[![file](/img/migrated/image-1691383118729-01e836f2.png)](/img/migrated/image-1691383118729-01e836f2.png)
Khách hàng hoàn toàn có thể thay đổi theo nhu cầu cầu sử dụng. Sau đó xác nhận việc thay đổi trên.
[![file](/img/migrated/image-1691383130785-5d815e59.png)](/img/migrated/image-1691383130785-5d815e59.png)
**Bước 3:** Chờ hệ thống xử lý
[![file](/img/migrated/image-1691383142781-8006bcac.png)](/img/migrated/image-1691383142781-8006bcac.png)
**Bước 4:** Card chuyển sang trạng thái Active, và Instance có thể kết nối mạng qua card này. [![file](/img/migrated/image-1691383157084-b076238f.png)](/img/migrated/image-1691383157084-b076238f.png)